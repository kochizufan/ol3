import $ol$Feature from './ol/Feature.js';
import $ol$Geolocation from './ol/Geolocation.js';
import $ol$Map from './ol/Map.js';
import $ol$MapEvent from './ol/MapEvent.js';
import $ol$View from './ol/View.js';
import $ol$control$Control from './ol/control/Control.js';
import $ol$control$Rotate from './ol/control/Rotate.js';
import $ol$control$Zoom from './ol/control/Zoom.js';
import $ol$events$EventTarget from './ol/events/EventTarget.js';
import $ol$events$Event from './ol/events/Event.js';
import {stopPropagation as $ol$events$Event$stopPropagation} from './ol/events/Event.js';
import {preventDefault as $ol$events$Event$preventDefault} from './ol/events/Event.js';
import {listen as $ol$events$listen} from './ol/events.js';
import $ol$format$GeoJSON from './ol/format/GeoJSON.js';
import $ol$geom$Circle from './ol/geom/Circle.js';
import $ol$geom$LineString from './ol/geom/LineString.js';
import $ol$geom$Point from './ol/geom/Point.js';
import $ol$geom$Polygon from './ol/geom/Polygon.js';
import $ol$interaction$DragRotateAndZoom from './ol/interaction/DragRotateAndZoom.js';
import $ol$interaction$Pointer from './ol/interaction/Pointer.js';
import $ol$interaction$Modify from './ol/interaction/Modify.js';
import $ol$interaction$Snap from './ol/interaction/Snap.js';
import $ol$layer$Group from './ol/layer/Group.js';
import $ol$layer$Tile from './ol/layer/Tile.js';
import $ol$layer$Vector from './ol/layer/Vector.js';
import $ol$pointer$PointerEventHandler from './ol/pointer/PointerEventHandler.js';
import $ol$proj$Projection from './ol/proj/Projection.js';
import $ol$source$OSM from './ol/source/OSM.js';
import $ol$source$Vector from './ol/source/Vector.js';
import $ol$source$XYZ from './ol/source/XYZ.js';
import $ol$style$Fill from './ol/style/Fill.js';
import $ol$style$Icon from './ol/style/Icon.js';
import $ol$style$Stroke from './ol/style/Stroke.js';
import $ol$style$Style from './ol/style/Style.js';
import * as _ol from './ol/index.js';
import * as _ol_control from './ol/control.js';
import * as _ol_css from './ol/css.js';
import * as _ol_events_condition from './ol/events/condition.js';
import {default as _ol_events_EventType} from './ol/events/EventType.js';
import * as _ol_interaction from './ol/interaction.js';
import * as _ol_math from './ol/math.js';
import {default as _ol_pointer_EventType} from './ol/pointer/EventType.js';
import * as _ol_proj from './ol/proj.js';
import * as _ol_TileUrlFunction from './ol/tileurlfunction.js';
import {default as _ol_ViewHint} from './ol/ViewHint.js';
import * as _ol_colorlike from "./ol/colorlike";
import * as _ol_color from "./ol/color";
const ol = window['ol'] = {};
ol.color = {};
ol.colorlike = {};
ol.control = {};
ol.events = {};
ol.events.condition = {};
ol.format = {};
ol.geom = {};
ol.interaction = {};
ol.layer = {};
ol.math = {};
ol.pointer = {};
ol.proj = {};
ol.source = {};
ol.style = {};
ol.Feature = $ol$Feature;
ol.Geolocation = $ol$Geolocation;
ol.Map = $ol$Map;
ol.MapEvent = $ol$MapEvent;
ol.View = $ol$View;
ol.color.asArray = _ol_color.asArray;
ol.color.asString = _ol_color.asString;
ol.colorlike.asColorLike = _ol_colorlike.asColorLike;
ol.control.Control = $ol$control$Control;
ol.control.Rotate = $ol$control$Rotate;
ol.control.Zoom = $ol$control$Zoom;
ol.control.defaults = _ol_control.defaults;
ol.css = _ol_css;
ol.events.condition.altKeyOnly = _ol_events_condition.altKeyOnly;
ol.events.Event = $ol$events$Event;
ol.events.Event.stopPropagation = $ol$events$Event$stopPropagation;
ol.events.Event.preventDefault = $ol$events$Event$preventDefault;
ol.events.EventTarget = $ol$events$EventTarget;
ol.events.EventType = _ol_events_EventType;
ol.events.listen = $ol$events$listen;
ol.format.GeoJSON = $ol$format$GeoJSON;
ol.geom.Circle = $ol$geom$Circle;
ol.geom.LineString = $ol$geom$LineString;
ol.geom.Point = $ol$geom$Point;
ol.geom.Polygon = $ol$geom$Polygon;
ol.inherits = _ol.inherits;
ol.interaction.DragRotateAndZoom = $ol$interaction$DragRotateAndZoom;
ol.interaction.Pointer = $ol$interaction$Pointer;
ol.interaction.Modify = $ol$interaction$Modify;
ol.interaction.Snap = $ol$interaction$Snap;
ol.interaction.defaults = _ol_interaction.defaults;
ol.layer.Group = $ol$layer$Group;
ol.layer.Tile = $ol$layer$Tile;
ol.layer.Vector = $ol$layer$Vector;
ol.math.clamp = _ol_math.clamp;
ol.pointer.PointerEventHandler = $ol$pointer$PointerEventHandler;
ol.pointer.EventType = _ol_pointer_EventType;
ol.proj.Projection = $ol$proj$Projection;
ol.proj.addCoordinateTransforms = _ol_proj.addCoordinateTransforms;
ol.proj.addProjection = _ol_proj.addProjection;
ol.proj.getTransform = _ol_proj.getTransform;
ol.proj.toLonLat = _ol_proj.toLonLat;
ol.proj.transform = _ol_proj.transform;
ol.source.OSM = $ol$source$OSM;
ol.source.Vector = $ol$source$Vector;
ol.source.XYZ = $ol$source$XYZ;
ol.style.Fill = $ol$style$Fill;
ol.style.Icon = $ol$style$Icon;
ol.style.Stroke = $ol$style$Stroke;
ol.style.Style = $ol$style$Style;
ol.TileUrlFunction = _ol_TileUrlFunction;
ol.ViewHint = _ol_ViewHint;