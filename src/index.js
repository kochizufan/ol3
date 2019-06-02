import $ol$Collection from './ol/Collection.js';
import $ol$Feature from './ol/Feature.js';
import $ol$Geolocation from './ol/Geolocation.js';
import $ol$Graticule from './ol/Graticule.js';
import $ol$Image from './ol/Image.js';
import $ol$ImageTile from './ol/ImageTile.js';
import $ol$Kinetic from './ol/Kinetic.js';
import $ol$Map from './ol/Map.js';
import $ol$MapBrowserEvent from './ol/MapBrowserEvent.js';
import $ol$MapEvent from './ol/MapEvent.js';
import $ol$Object from './ol/Object.js';
import $ol$Observable from './ol/Observable.js';
import $ol$Overlay from './ol/Overlay.js';
import $ol$PluggableMap from './ol/PluggableMap.js';
import $ol$Tile from './ol/Tile.js';
import $ol$VectorTile from './ol/VectorTile.js';
import $ol$View from './ol/View.js';
import $ol$WebGLMap from './ol/WebGLMap.js';
import $ol$control$Attribution from './ol/control/Attribution.js';
import $ol$control$Control from './ol/control/Control.js';
import $ol$control$FullScreen from './ol/control/FullScreen.js';
import $ol$control$MousePosition from './ol/control/MousePosition.js';
import $ol$control$OverviewMap from './ol/control/OverviewMap.js';
import $ol$control$Rotate from './ol/control/Rotate.js';
import $ol$control$ScaleLine from './ol/control/ScaleLine.js';
import $ol$control$Zoom from './ol/control/Zoom.js';
import $ol$control$ZoomSlider from './ol/control/ZoomSlider.js';
import $ol$control$ZoomToExtent from './ol/control/ZoomToExtent.js';
import $ol$events$Target from './ol/events/Target.js';
import $ol$events$Event from './ol/events/Event.js';
import {stopPropagation as $ol$events$Event$stopPropagation} from "./ol/events/Event.js";
import {preventDefault as $ol$events$Event$preventDefault} from "./ol/events/Event.js";
import {listen as $ol$events$listen} from './ol/events.js';
import $ol$format$EsriJSON from './ol/format/EsriJSON.js';
import $ol$format$Feature from './ol/format/Feature.js';
import $ol$format$GML from './ol/format/GML.js';
import $ol$format$GML2 from './ol/format/GML2.js';
import $ol$format$GML3 from './ol/format/GML3.js';
import $ol$format$GMLBase from './ol/format/GMLBase.js';
import $ol$format$GPX from './ol/format/GPX.js';
import $ol$format$GeoJSON from './ol/format/GeoJSON.js';
import $ol$format$IGC from './ol/format/IGC.js';
import $ol$format$KML from './ol/format/KML.js';
import $ol$format$MVT from './ol/format/MVT.js';
import $ol$format$OSMXML from './ol/format/OSMXML.js';
import $ol$format$Polyline from './ol/format/Polyline.js';
import $ol$format$TopoJSON from './ol/format/TopoJSON.js';
import $ol$format$WFS from './ol/format/WFS.js';
import $ol$format$WKT from './ol/format/WKT.js';
import $ol$format$WMSCapabilities from './ol/format/WMSCapabilities.js';
import $ol$format$WMSGetFeatureInfo from './ol/format/WMSGetFeatureInfo.js';
import $ol$format$WMTSCapabilities from './ol/format/WMTSCapabilities.js';
import $ol$format$filter$Bbox from './ol/format/filter/Bbox.js';
import $ol$format$filter$Contains from './ol/format/filter/Contains.js';
import $ol$format$filter$During from './ol/format/filter/During.js';
import $ol$format$filter$EqualTo from './ol/format/filter/EqualTo.js';
import $ol$format$filter$GreaterThan from './ol/format/filter/GreaterThan.js';
import $ol$format$filter$GreaterThanOrEqualTo from './ol/format/filter/GreaterThanOrEqualTo.js';
import $ol$format$filter$Intersects from './ol/format/filter/Intersects.js';
import $ol$format$filter$IsBetween from './ol/format/filter/IsBetween.js';
import $ol$format$filter$IsLike from './ol/format/filter/IsLike.js';
import $ol$format$filter$IsNull from './ol/format/filter/IsNull.js';
import $ol$format$filter$LessThan from './ol/format/filter/LessThan.js';
import $ol$format$filter$LessThanOrEqualTo from './ol/format/filter/LessThanOrEqualTo.js';
import $ol$format$filter$Not from './ol/format/filter/Not.js';
import $ol$format$filter$NotEqualTo from './ol/format/filter/NotEqualTo.js';
import $ol$format$filter$Or from './ol/format/filter/Or.js';
import $ol$format$filter$Within from './ol/format/filter/Within.js';
import $ol$geom$Circle from './ol/geom/Circle.js';
import $ol$geom$Geometry from './ol/geom/Geometry.js';
import $ol$geom$GeometryCollection from './ol/geom/GeometryCollection.js';
import $ol$geom$LineString from './ol/geom/LineString.js';
import $ol$geom$LinearRing from './ol/geom/LinearRing.js';
import $ol$geom$MultiLineString from './ol/geom/MultiLineString.js';
import $ol$geom$MultiPoint from './ol/geom/MultiPoint.js';
import $ol$geom$MultiPolygon from './ol/geom/MultiPolygon.js';
import $ol$geom$Point from './ol/geom/Point.js';
import $ol$geom$Polygon from './ol/geom/Polygon.js';
import $ol$geom$SimpleGeometry from './ol/geom/SimpleGeometry.js';
import $ol$interaction$DoubleClickZoom from './ol/interaction/DoubleClickZoom.js';
import $ol$interaction$DragAndDrop from './ol/interaction/DragAndDrop.js';
import $ol$interaction$DragBox from './ol/interaction/DragBox.js';
import $ol$interaction$DragPan from './ol/interaction/DragPan.js';
import $ol$interaction$DragRotate from './ol/interaction/DragRotate.js';
import $ol$interaction$DragRotateAndZoom from './ol/interaction/DragRotateAndZoom.js';
import $ol$interaction$DragZoom from './ol/interaction/DragZoom.js';
import $ol$interaction$Draw from './ol/interaction/Draw.js';
import $ol$interaction$Extent from './ol/interaction/Extent.js';
import $ol$interaction$Interaction from './ol/interaction/Interaction.js';
import $ol$interaction$KeyboardPan from './ol/interaction/KeyboardPan.js';
import $ol$interaction$KeyboardZoom from './ol/interaction/KeyboardZoom.js';
import $ol$interaction$Modify from './ol/interaction/Modify.js';
import $ol$interaction$MouseWheelZoom from './ol/interaction/MouseWheelZoom.js';
import $ol$interaction$PinchRotate from './ol/interaction/PinchRotate.js';
import $ol$interaction$PinchZoom from './ol/interaction/PinchZoom.js';
import $ol$interaction$Pointer from './ol/interaction/Pointer.js';
import $ol$interaction$Select from './ol/interaction/Select.js';
import $ol$interaction$Snap from './ol/interaction/Snap.js';
import $ol$interaction$Translate from './ol/interaction/Translate.js';
import $ol$layer$Base from './ol/layer/Base.js';
import $ol$layer$Group from './ol/layer/Group.js';
import $ol$layer$Heatmap from './ol/layer/Heatmap.js';
import $ol$layer$Image from './ol/layer/Image.js';
import $ol$layer$Layer from './ol/layer/Layer.js';
import $ol$layer$Tile from './ol/layer/Tile.js';
import $ol$layer$Vector from './ol/layer/Vector.js';
import $ol$layer$VectorTile from './ol/layer/VectorTile.js';
import $ol$pointer$PointerEventHandler from './ol/pointer/PointerEventHandler.js';
import $ol$proj$Projection from './ol/proj/Projection.js';
import $ol$render$Feature from './ol/render/Feature.js';
import $ol$render$VectorContext from './ol/render/VectorContext.js';
import $ol$render$canvas$Immediate from './ol/render/canvas/Immediate.js';
import $ol$render$webgl$Immediate from './ol/render/webgl/Immediate.js';
import $ol$renderer$canvas$ImageLayer from './ol/renderer/canvas/ImageLayer.js';
import $ol$renderer$canvas$Map from './ol/renderer/canvas/Map.js';
import $ol$renderer$canvas$TileLayer from './ol/renderer/canvas/TileLayer.js';
import $ol$renderer$canvas$VectorLayer from './ol/renderer/canvas/VectorLayer.js';
import $ol$renderer$canvas$VectorTileLayer from './ol/renderer/canvas/VectorTileLayer.js';
import $ol$renderer$webgl$ImageLayer from './ol/renderer/webgl/ImageLayer.js';
import $ol$renderer$webgl$Map from './ol/renderer/webgl/Map.js';
import $ol$renderer$webgl$TileLayer from './ol/renderer/webgl/TileLayer.js';
import $ol$renderer$webgl$VectorLayer from './ol/renderer/webgl/VectorLayer.js';
import $ol$source$BingMaps from './ol/source/BingMaps.js';
import $ol$source$CartoDB from './ol/source/CartoDB.js';
import $ol$source$Cluster from './ol/source/Cluster.js';
import $ol$source$Image from './ol/source/Image.js';
import $ol$source$ImageArcGISRest from './ol/source/ImageArcGISRest.js';
import $ol$source$ImageCanvas from './ol/source/ImageCanvas.js';
import $ol$source$ImageMapGuide from './ol/source/ImageMapGuide.js';
import $ol$source$ImageStatic from './ol/source/ImageStatic.js';
import $ol$source$ImageWMS from './ol/source/ImageWMS.js';
import $ol$source$OSM from './ol/source/OSM.js';
import $ol$source$Raster from './ol/source/Raster.js';
import $ol$source$Source from './ol/source/Source.js';
import $ol$source$Stamen from './ol/source/Stamen.js';
import $ol$source$Tile from './ol/source/Tile.js';
import $ol$source$TileArcGISRest from './ol/source/TileArcGISRest.js';
import $ol$source$TileDebug from './ol/source/TileDebug.js';
import $ol$source$TileImage from './ol/source/TileImage.js';
import $ol$source$TileJSON from './ol/source/TileJSON.js';
import $ol$source$TileWMS from './ol/source/TileWMS.js';
import $ol$source$UTFGrid from './ol/source/UTFGrid.js';
import $ol$source$UrlTile from './ol/source/UrlTile.js';
import $ol$source$Vector from './ol/source/Vector.js';
import $ol$source$VectorTile from './ol/source/VectorTile.js';
import $ol$source$WMTS from './ol/source/WMTS.js';
import $ol$source$XYZ from './ol/source/XYZ.js';
import $ol$source$Zoomify from './ol/source/Zoomify.js';
import $ol$structs$LRUCache from './ol/structs/LRUCache.js';
import $ol$style$AtlasManager from './ol/style/AtlasManager.js';
import $ol$style$Circle from './ol/style/Circle.js';
import $ol$style$Fill from './ol/style/Fill.js';
import $ol$style$Icon from './ol/style/Icon.js';
import $ol$style$IconImageCache from './ol/style/IconImageCache.js';
import $ol$style$Image from './ol/style/Image.js';
import $ol$style$RegularShape from './ol/style/RegularShape.js';
import $ol$style$Stroke from './ol/style/Stroke.js';
import $ol$style$Style from './ol/style/Style.js';
import $ol$style$Text from './ol/style/Text.js';
import $ol$tilegrid$TileGrid from './ol/tilegrid/TileGrid.js';
import $ol$tilegrid$WMTS from './ol/tilegrid/WMTS.js';
import $ol$webgl$Context from './ol/webgl/Context.js';
import * as _ol from './ol/index.js';
import * as _ol_Observable from './ol/Observable.js';
import * as _ol_color from './ol/color.js';
import * as _ol_colorlike from './ol/colorlike.js';
import * as _ol_control from './ol/control.js';
import * as _ol_control_Attribution from './ol/control/Attribution.js';
import * as _ol_control_MousePosition from './ol/control/MousePosition.js';
import * as _ol_control_OverviewMap from './ol/control/OverviewMap.js';
import * as _ol_control_Rotate from './ol/control/Rotate.js';
import * as _ol_control_ScaleLine from './ol/control/ScaleLine.js';
import * as _ol_control_ZoomSlider from './ol/control/ZoomSlider.js';
import * as _ol_coordinate from './ol/coordinate.js';
import * as _ol_css from './ol/css.js';
import * as _ol_easing from './ol/easing.js';
import * as _ol_events_condition from './ol/events/condition.js';
import {default as _ol_events_EventType} from './ol/events/EventType';
import * as _ol_extent from './ol/extent.js';
import * as _ol_featureloader from './ol/featureloader.js';
import * as _ol_format_Polyline from './ol/format/Polyline.js';
import * as _ol_format_WFS from './ol/format/WFS.js';
import * as _ol_format_filter from './ol/format/filter.js';
import * as _ol_geom_Polygon from './ol/geom/Polygon.js';
import * as _ol_has from './ol/has.js';
import * as _ol_interaction from './ol/interaction.js';
import * as _ol_interaction_Draw from './ol/interaction/Draw.js';
import * as _ol_interaction_Pointer from './ol/interaction/Pointer.js';
import * as _ol_loadingstrategy from './ol/loadingstrategy.js';
import {default as _ol_pointer_EventType} from './ol/pointer/EventType';
import * as _ol_proj from './ol/proj.js';
import * as _ol_proj_Units from './ol/proj/Units.js';
import * as _ol_proj_proj4 from './ol/proj/proj4.js';
import * as _ol_render from './ol/render.js';
import * as _ol_render_canvas from './ol/render/canvas.js';
import * as _ol_size from './ol/size.js';
import * as _ol_source_OSM from './ol/source/OSM.js';
import * as _ol_source_WMTS from './ol/source/WMTS.js';
import * as _ol_sphere from './ol/sphere.js';
import * as _ol_style_IconImageCache from './ol/style/IconImageCache.js';
import * as _ol_tilegrid from './ol/tilegrid.js';
import * as _ol_tilegrid_WMTS from './ol/tilegrid/WMTS.js';
import * as _ol_TileUrlFunction from './ol/tileurlfunction.js';
import * as _ol_xml from './ol/xml.js';
import * as ol_has from './ol/has.js';
const ol = window['ol'] = {};
ol.color = {};
ol.colorlike = {};
ol.control = {};
ol.coordinate = {};
ol.easing = {};
ol.events = {};
ol.events.condition = {};
ol.extent = {};
ol.featureloader = {};
ol.format = {};
ol.format.filter = {};
ol.geom = {};
ol.has = {};
ol.interaction = {};
ol.layer = {};
ol.loadingstrategy = {};
ol.pointer = {};
ol.proj = {};
ol.proj.Units = {};
ol.proj.proj4 = {};
ol.render = {};
ol.render.canvas = {};
ol.renderer = {};
ol.renderer.canvas = {};
ol.renderer.webgl = {};
ol.size = {};
ol.source = {};
ol.sphere = {};
ol.style = {};
ol.style.IconImageCache = {};
ol.tilegrid = {};
ol.xml = {};
ol.Collection = $ol$Collection;
ol.Feature = $ol$Feature;
ol.Geolocation = $ol$Geolocation;
ol.Graticule = $ol$Graticule;
ol.Kinetic = $ol$Kinetic;
ol.Map = $ol$Map;
ol.MapEvent = $ol$MapEvent;
ol.Object = $ol$Object;
ol.Observable = $ol$Observable;
ol.Observable.unByKey = _ol_Observable.unByKey;
ol.Overlay = $ol$Overlay;
ol.PluggableMap = $ol$PluggableMap;
ol.View = $ol$View;
ol.WebGLMap = $ol$WebGLMap;
ol.color.asArray = _ol_color.asArray;
ol.color.asString = _ol_color.asString;
ol.colorlike.asColorLike = _ol_colorlike.asColorLike;
ol.control.Attribution = $ol$control$Attribution;
ol.control.Attribution.render = _ol_control_Attribution.render;
ol.control.Control = $ol$control$Control;
ol.control.FullScreen = $ol$control$FullScreen;
ol.control.MousePosition = $ol$control$MousePosition;
ol.control.MousePosition.render = _ol_control_MousePosition.render;
ol.control.OverviewMap = $ol$control$OverviewMap;
ol.control.OverviewMap.render = _ol_control_OverviewMap.render;
ol.control.Rotate = $ol$control$Rotate;
ol.control.Rotate.render = _ol_control_Rotate.render;
ol.control.ScaleLine = $ol$control$ScaleLine;
ol.control.ScaleLine.render = _ol_control_ScaleLine.render;
ol.control.Zoom = $ol$control$Zoom;
ol.control.ZoomSlider = $ol$control$ZoomSlider;
ol.control.ZoomSlider.render = _ol_control_ZoomSlider.render;
ol.control.ZoomToExtent = $ol$control$ZoomToExtent;
ol.control.defaults = _ol_control.defaults;
ol.coordinate.add = _ol_coordinate.add;
ol.coordinate.createStringXY = _ol_coordinate.createStringXY;
ol.coordinate.format = _ol_coordinate.format;
ol.coordinate.rotate = _ol_coordinate.rotate;
ol.coordinate.toStringHDMS = _ol_coordinate.toStringHDMS;
ol.coordinate.toStringXY = _ol_coordinate.toStringXY;
ol.css = _ol_css;
ol.easing.easeIn = _ol_easing.easeIn;
ol.easing.easeOut = _ol_easing.easeOut;
ol.easing.inAndOut = _ol_easing.inAndOut;
ol.easing.linear = _ol_easing.linear;
ol.easing.upAndDown = _ol_easing.upAndDown;
ol.events.condition.altKeyOnly = _ol_events_condition.altKeyOnly;
ol.events.condition.altShiftKeysOnly = _ol_events_condition.altShiftKeysOnly;
ol.events.condition.always = _ol_events_condition.always;
ol.events.condition.click = _ol_events_condition.click;
ol.events.condition.doubleClick = _ol_events_condition.doubleClick;
ol.events.condition.focus = _ol_events_condition.focus;
ol.events.condition.mouseOnly = _ol_events_condition.mouseOnly;
ol.events.condition.never = _ol_events_condition.never;
ol.events.condition.noModifierKeys = _ol_events_condition.noModifierKeys;
ol.events.condition.platformModifierKeyOnly = _ol_events_condition.platformModifierKeyOnly;
ol.events.condition.pointerMove = _ol_events_condition.pointerMove;
ol.events.condition.primaryAction = _ol_events_condition.primaryAction;
ol.events.condition.shiftKeyOnly = _ol_events_condition.shiftKeyOnly;
ol.events.condition.singleClick = _ol_events_condition.singleClick;
ol.events.condition.targetNotEditable = _ol_events_condition.targetNotEditable;
ol.events.Event = $ol$events$Event;
ol.events.Event.stopPropagation = $ol$events$Event$stopPropagation;
ol.events.Event.preventDefault = $ol$events$Event$preventDefault;
ol.events.Target = $ol$events$Target;
ol.events.EventType = _ol_events_EventType;
ol.events.listen = $ol$events$listen;
ol.extent.applyTransform = _ol_extent.applyTransform;
ol.extent.boundingExtent = _ol_extent.boundingExtent;
ol.extent.buffer = _ol_extent.buffer;
ol.extent.containsCoordinate = _ol_extent.containsCoordinate;
ol.extent.containsExtent = _ol_extent.containsExtent;
ol.extent.containsXY = _ol_extent.containsXY;
ol.extent.createEmpty = _ol_extent.createEmpty;
ol.extent.equals = _ol_extent.equals;
ol.extent.extend = _ol_extent.extend;
ol.extent.getArea = _ol_extent.getArea;
ol.extent.getBottomLeft = _ol_extent.getBottomLeft;
ol.extent.getBottomRight = _ol_extent.getBottomRight;
ol.extent.getCenter = _ol_extent.getCenter;
ol.extent.getHeight = _ol_extent.getHeight;
ol.extent.getIntersection = _ol_extent.getIntersection;
ol.extent.getSize = _ol_extent.getSize;
ol.extent.getTopLeft = _ol_extent.getTopLeft;
ol.extent.getTopRight = _ol_extent.getTopRight;
ol.extent.getWidth = _ol_extent.getWidth;
ol.extent.intersects = _ol_extent.intersects;
ol.extent.isEmpty = _ol_extent.isEmpty;
ol.featureloader.xhr = _ol_featureloader.xhr;
ol.format.EsriJSON = $ol$format$EsriJSON;
ol.format.Feature = $ol$format$Feature;
ol.format.GML = $ol$format$GML;
ol.format.GML2 = $ol$format$GML2;
ol.format.GML3 = $ol$format$GML3;
ol.format.GPX = $ol$format$GPX;
ol.format.GeoJSON = $ol$format$GeoJSON;
ol.format.IGC = $ol$format$IGC;
ol.format.KML = $ol$format$KML;
ol.format.MVT = $ol$format$MVT;
ol.format.OSMXML = $ol$format$OSMXML;
ol.format.Polyline = $ol$format$Polyline;
ol.format.Polyline.decodeDeltas = _ol_format_Polyline.decodeDeltas;
ol.format.Polyline.decodeFloats = _ol_format_Polyline.decodeFloats;
ol.format.Polyline.encodeDeltas = _ol_format_Polyline.encodeDeltas;
ol.format.Polyline.encodeFloats = _ol_format_Polyline.encodeFloats;
ol.format.TopoJSON = $ol$format$TopoJSON;
ol.format.WFS = $ol$format$WFS;
ol.format.WFS.writeFilter = _ol_format_WFS.writeFilter;
ol.format.WKT = $ol$format$WKT;
ol.format.WMSCapabilities = $ol$format$WMSCapabilities;
ol.format.WMSGetFeatureInfo = $ol$format$WMSGetFeatureInfo;
ol.format.WMTSCapabilities = $ol$format$WMTSCapabilities;
ol.format.filter.Bbox = $ol$format$filter$Bbox;
ol.format.filter.Contains = $ol$format$filter$Contains;
ol.format.filter.During = $ol$format$filter$During;
ol.format.filter.EqualTo = $ol$format$filter$EqualTo;
ol.format.filter.GreaterThan = $ol$format$filter$GreaterThan;
ol.format.filter.GreaterThanOrEqualTo = $ol$format$filter$GreaterThanOrEqualTo;
ol.format.filter.Intersects = $ol$format$filter$Intersects;
ol.format.filter.IsBetween = $ol$format$filter$IsBetween;
ol.format.filter.IsLike = $ol$format$filter$IsLike;
ol.format.filter.IsNull = $ol$format$filter$IsNull;
ol.format.filter.LessThan = $ol$format$filter$LessThan;
ol.format.filter.LessThanOrEqualTo = $ol$format$filter$LessThanOrEqualTo;
ol.format.filter.Not = $ol$format$filter$Not;
ol.format.filter.NotEqualTo = $ol$format$filter$NotEqualTo;
ol.format.filter.Or = $ol$format$filter$Or;
ol.format.filter.Within = $ol$format$filter$Within;
ol.format.filter.and = _ol_format_filter.and;
ol.format.filter.bbox = _ol_format_filter.bbox;
ol.format.filter.between = _ol_format_filter.between;
ol.format.filter.contains = _ol_format_filter.contains;
ol.format.filter.during = _ol_format_filter.during;
ol.format.filter.equalTo = _ol_format_filter.equalTo;
ol.format.filter.greaterThan = _ol_format_filter.greaterThan;
ol.format.filter.greaterThanOrEqualTo = _ol_format_filter.greaterThanOrEqualTo;
ol.format.filter.intersects = _ol_format_filter.intersects;
ol.format.filter.isNull = _ol_format_filter.isNull;
ol.format.filter.lessThan = _ol_format_filter.lessThan;
ol.format.filter.lessThanOrEqualTo = _ol_format_filter.lessThanOrEqualTo;
ol.format.filter.like = _ol_format_filter.like;
ol.format.filter.not = _ol_format_filter.not;
ol.format.filter.notEqualTo = _ol_format_filter.notEqualTo;
ol.format.filter.or = _ol_format_filter.or;
ol.format.filter.within = _ol_format_filter.within;
ol.geom.Circle = $ol$geom$Circle;
ol.geom.Geometry = $ol$geom$Geometry;
ol.geom.GeometryCollection = $ol$geom$GeometryCollection;
ol.geom.LineString = $ol$geom$LineString;
ol.geom.LinearRing = $ol$geom$LinearRing;
ol.geom.MultiLineString = $ol$geom$MultiLineString;
ol.geom.MultiPoint = $ol$geom$MultiPoint;
ol.geom.MultiPolygon = $ol$geom$MultiPolygon;
ol.geom.Point = $ol$geom$Point;
ol.geom.Polygon = $ol$geom$Polygon;
ol.geom.Polygon.circular = _ol_geom_Polygon.circular;
ol.geom.Polygon.fromCircle = _ol_geom_Polygon.fromCircle;
ol.geom.Polygon.fromExtent = _ol_geom_Polygon.fromExtent;
ol.geom.SimpleGeometry = $ol$geom$SimpleGeometry;
ol.has.DEVICE_PIXEL_RATIO = _ol_has.DEVICE_PIXEL_RATIO;
ol.has.GEOLOCATION = _ol_has.GEOLOCATION;
ol.has.TOUCH = _ol_has.TOUCH;
ol.has.WEBGL = _ol_has.WEBGL;
ol.inherits = _ol.inherits;
ol.interaction.DoubleClickZoom = $ol$interaction$DoubleClickZoom;
ol.interaction.DragAndDrop = $ol$interaction$DragAndDrop;
ol.interaction.DragBox = $ol$interaction$DragBox;
ol.interaction.DragPan = $ol$interaction$DragPan;
ol.interaction.DragRotate = $ol$interaction$DragRotate;
ol.interaction.DragRotateAndZoom = $ol$interaction$DragRotateAndZoom;
ol.interaction.DragZoom = $ol$interaction$DragZoom;
ol.interaction.Draw = $ol$interaction$Draw;
ol.interaction.Draw.createBox = _ol_interaction_Draw.createBox;
ol.interaction.Draw.createRegularPolygon = _ol_interaction_Draw.createRegularPolygon;
ol.interaction.Draw.handleEvent = _ol_interaction_Draw.handleEvent;
ol.interaction.Extent = $ol$interaction$Extent;
ol.interaction.Interaction = $ol$interaction$Interaction;
ol.interaction.KeyboardPan = $ol$interaction$KeyboardPan;
ol.interaction.KeyboardZoom = $ol$interaction$KeyboardZoom;
ol.interaction.Modify = $ol$interaction$Modify;
ol.interaction.MouseWheelZoom = $ol$interaction$MouseWheelZoom;
ol.interaction.PinchRotate = $ol$interaction$PinchRotate;
ol.interaction.PinchZoom = $ol$interaction$PinchZoom;
ol.interaction.Pointer = $ol$interaction$Pointer;
ol.interaction.Pointer.handleEvent = _ol_interaction_Pointer.handleEvent;
ol.interaction.Select = $ol$interaction$Select;
ol.interaction.Snap = $ol$interaction$Snap;
ol.interaction.Translate = $ol$interaction$Translate;
ol.interaction.defaults = _ol_interaction.defaults;
ol.layer.Base = $ol$layer$Base;
ol.layer.Group = $ol$layer$Group;
ol.layer.Heatmap = $ol$layer$Heatmap;
ol.layer.Image = $ol$layer$Image;
ol.layer.Layer = $ol$layer$Layer;
ol.layer.Tile = $ol$layer$Tile;
ol.layer.Vector = $ol$layer$Vector;
ol.layer.VectorTile = $ol$layer$VectorTile;
ol.loadingstrategy.all = _ol_loadingstrategy.all;
ol.loadingstrategy.bbox = _ol_loadingstrategy.bbox;
ol.loadingstrategy.tile = _ol_loadingstrategy.tile;
ol.pointer.PointerEventHandler = $ol$pointer$PointerEventHandler;
ol.pointer.EventType = _ol_pointer_EventType;
ol.proj.Projection = $ol$proj$Projection;
ol.proj.Units.METERS_PER_UNIT = _ol_proj_Units.METERS_PER_UNIT;
ol.proj.addCoordinateTransforms = _ol_proj.addCoordinateTransforms;
ol.proj.addEquivalentProjections = _ol_proj.addEquivalentProjections;
ol.proj.addProjection = _ol_proj.addProjection;
ol.proj.equivalent = _ol_proj.equivalent;
ol.proj.fromLonLat = _ol_proj.fromLonLat;
ol.proj.get = _ol_proj.get;
ol.proj.getPointResolution = _ol_proj.getPointResolution;
ol.proj.getTransform = _ol_proj.getTransform;
ol.proj.proj4.register = _ol_proj_proj4.register;
ol.proj.toLonLat = _ol_proj.toLonLat;
ol.proj.transform = _ol_proj.transform;
ol.proj.transformExtent = _ol_proj.transformExtent;
ol.render.VectorContext = $ol$render$VectorContext;
ol.render.canvas.labelCache = _ol_render_canvas.labelCache;
ol.render.toContext = _ol_render.toContext;
ol.renderer.canvas.ImageLayer = $ol$renderer$canvas$ImageLayer;
ol.renderer.canvas.Map = $ol$renderer$canvas$Map;
ol.renderer.canvas.TileLayer = $ol$renderer$canvas$TileLayer;
ol.renderer.canvas.VectorLayer = $ol$renderer$canvas$VectorLayer;
ol.renderer.canvas.VectorTileLayer = $ol$renderer$canvas$VectorTileLayer;
ol.renderer.webgl.ImageLayer = $ol$renderer$webgl$ImageLayer;
ol.renderer.webgl.Map = $ol$renderer$webgl$Map;
ol.renderer.webgl.TileLayer = $ol$renderer$webgl$TileLayer;
ol.renderer.webgl.VectorLayer = $ol$renderer$webgl$VectorLayer;
ol.size.toSize = _ol_size.toSize;
ol.source.BingMaps = $ol$source$BingMaps;
ol.source.CartoDB = $ol$source$CartoDB;
ol.source.Cluster = $ol$source$Cluster;
ol.source.Image = $ol$source$Image;
ol.source.ImageArcGISRest = $ol$source$ImageArcGISRest;
ol.source.ImageCanvas = $ol$source$ImageCanvas;
ol.source.ImageMapGuide = $ol$source$ImageMapGuide;
ol.source.ImageStatic = $ol$source$ImageStatic;
ol.source.ImageWMS = $ol$source$ImageWMS;
ol.source.OSM = $ol$source$OSM;
ol.source.OSM.ATTRIBUTION = _ol_source_OSM.ATTRIBUTION;
ol.source.Raster = $ol$source$Raster;
ol.source.Source = $ol$source$Source;
ol.source.Stamen = $ol$source$Stamen;
ol.source.Tile = $ol$source$Tile;
ol.source.TileArcGISRest = $ol$source$TileArcGISRest;
ol.source.TileDebug = $ol$source$TileDebug;
ol.source.TileImage = $ol$source$TileImage;
ol.source.TileJSON = $ol$source$TileJSON;
ol.source.TileWMS = $ol$source$TileWMS;
ol.source.UTFGrid = $ol$source$UTFGrid;
ol.source.Vector = $ol$source$Vector;
ol.source.VectorTile = $ol$source$VectorTile;
ol.source.WMTS = $ol$source$WMTS;
ol.source.WMTS.optionsFromCapabilities = _ol_source_WMTS.optionsFromCapabilities;
ol.source.XYZ = $ol$source$XYZ;
ol.source.Zoomify = $ol$source$Zoomify;
ol.sphere.getArea = _ol_sphere.getArea;
ol.sphere.getDistance = _ol_sphere.getDistance;
ol.sphere.getLength = _ol_sphere.getLength;
ol.style.AtlasManager = $ol$style$AtlasManager;
ol.style.Circle = $ol$style$Circle;
ol.style.Fill = $ol$style$Fill;
ol.style.Icon = $ol$style$Icon;
ol.style.IconImageCache.shared = _ol_style_IconImageCache.shared;
ol.style.Image = $ol$style$Image;
ol.style.RegularShape = $ol$style$RegularShape;
ol.style.Stroke = $ol$style$Stroke;
ol.style.Style = $ol$style$Style;
ol.style.Text = $ol$style$Text;
ol.tilegrid.TileGrid = $ol$tilegrid$TileGrid;
ol.tilegrid.WMTS = $ol$tilegrid$WMTS;
ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet = _ol_tilegrid_WMTS.createFromCapabilitiesMatrixSet;
ol.tilegrid.createXYZ = _ol_tilegrid.createXYZ;
ol.TileUrlFunction = _ol_TileUrlFunction;
ol.xml.getAllTextContent = _ol_xml.getAllTextContent;
ol.xml.parse = _ol_xml.parse;
