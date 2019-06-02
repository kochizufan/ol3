import Feature from '../../../../../src/ol/Feature.js';
import Point from '../../../../../src/ol/geom/Point.js';
import LineString from '../../../../../src/ol/geom/LineString.js';
import VectorLayer from '../../../../../src/ol/layer/Vector.js';
import VectorSource from '../../../../../src/ol/source/Vector.js';
import WebGLPointsLayerRenderer from '../../../../../src/ol/renderer/webgl/PointsLayer.js';
import {get as getProjection} from '../../../../../src/ol/proj.js';
import Polygon from '../../../../../src/ol/geom/Polygon.js';
import ViewHint from '../../../../../src/ol/ViewHint.js';


describe('ol.renderer.webgl.PointsLayer', function() {

  describe('constructor', function() {

    let target;

    beforeEach(function() {
      target = document.createElement('div');
      target.style.width = '256px';
      target.style.height = '256px';
      document.body.appendChild(target);
    });

    afterEach(function() {
      document.body.removeChild(target);
    });

    it('creates a new instance', function() {
      const layer = new VectorLayer({
        source: new VectorSource()
      });
      const renderer = new WebGLPointsLayerRenderer(layer);
      expect(renderer).to.be.a(WebGLPointsLayerRenderer);
    });

  });

  describe('#prepareFrame', function() {
    let layer, renderer, frameState;

    beforeEach(function() {
      layer = new VectorLayer({
        source: new VectorSource()
      });
      renderer = new WebGLPointsLayerRenderer(layer);
      const projection = getProjection('EPSG:3857');
      frameState = {
        skippedFeatureUids: {},
        viewHints: [],
        viewState: {
          projection: projection,
          resolution: 1,
          rotation: 0,
          center: [10, 10]
        },
        size: [256, 256],
        extent: [-100, -100, 100, 100]
      };
    });

    it('calls WebGlHelper#prepareDraw', function() {
      const spy = sinon.spy(renderer.helper_, 'prepareDraw');
      renderer.prepareFrame(frameState);
      expect(spy.called).to.be(true);
    });

    it('fills up a buffer with 2 triangles per point', function() {
      layer.getSource().addFeature(new Feature({
        geometry: new Point([10, 20])
      }));
      renderer.prepareFrame(frameState);

      const attributePerVertex = 12;
      expect(renderer.verticesBuffer_.getArray().length).to.eql(4 * attributePerVertex);
      expect(renderer.indicesBuffer_.getArray().length).to.eql(6);
    });

    it('ignores geometries other than points', function() {
      layer.getSource().addFeature(new Feature({
        geometry: new LineString([[10, 20], [30, 20]])
      }));
      layer.getSource().addFeature(new Feature({
        geometry: new Polygon([[10, 20], [30, 20], [30, 10], [10, 20]])
      }));
      renderer.prepareFrame(frameState);

      expect(renderer.verticesBuffer_.getArray().length).to.eql(0);
      expect(renderer.indicesBuffer_.getArray().length).to.eql(0);
    });

    it('clears the buffers when the features are gone', function() {
      const source = layer.getSource();
      source.addFeature(new Feature({
        geometry: new Point([10, 20])
      }));
      source.removeFeature(source.getFeatures()[0]);
      source.addFeature(new Feature({
        geometry: new Point([10, 20])
      }));
      renderer.prepareFrame(frameState);

      const attributePerVertex = 12;
      expect(renderer.verticesBuffer_.getArray().length).to.eql(4 * attributePerVertex);
      expect(renderer.indicesBuffer_.getArray().length).to.eql(6);
    });

    it('rebuilds the buffers only when not interacting or animating', function() {
      const spy = sinon.spy(renderer, 'rebuildBuffers_');

      frameState.viewHints[ViewHint.INTERACTING] = 1;
      frameState.viewHints[ViewHint.ANIMATING] = 0;
      renderer.prepareFrame(frameState);
      expect(spy.called).to.be(false);

      frameState.viewHints[ViewHint.INTERACTING] = 0;
      frameState.viewHints[ViewHint.ANIMATING] = 1;
      renderer.prepareFrame(frameState);
      expect(spy.called).to.be(false);

      frameState.viewHints[ViewHint.INTERACTING] = 0;
      frameState.viewHints[ViewHint.ANIMATING] = 0;
      renderer.prepareFrame(frameState);
      expect(spy.called).to.be(true);
    });

    it('rebuilds the buffers only when the frame extent changed', function() {
      const spy = sinon.spy(renderer, 'rebuildBuffers_');

      renderer.prepareFrame(frameState);
      expect(spy.callCount).to.be(1);

      renderer.prepareFrame(frameState);
      expect(spy.callCount).to.be(1);

      frameState.extent = [10, 20, 30, 40];
      renderer.prepareFrame(frameState);
      expect(spy.callCount).to.be(2);
    });
  });

});
