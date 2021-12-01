(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[104],{1111:function(e,r,t){"use strict";function a(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}t.d(r,"a",(function(){return a}))},845:function(e,r,t){"use strict";t.r(r),t.d(r,"fromItem",(function(){return f})),t.d(r,"selectLayerClassPath",(function(){return m}));var a=t(6),n=t.n(a),c=t(15),u=t(11),s=t(22),i=t(1064),o=t(316),l=t(846),y=t(1111),p=t(1169);function f(e){return!e.portalItem||e.portalItem instanceof o.default||(e=Object(u.a)(Object(u.a)({},e),{},{portalItem:new o.default(e.portalItem)})),function(e){return e.load().then(m).then(d)}(e.portalItem).then((function(r){var t=Object(u.a)({portalItem:e.portalItem},r.properties),a=r.constructor;return Promise.resolve(new a(t))}))}function m(e){switch(e.type){case"Map Service":return function(e){return Object(p.a)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return h(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return b.apply(this,arguments)}(e);case"Scene Service":return function(e){return h(e).then((function(r){if("object"==typeof r){var t,a={};if(null!=r.id?(a.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},c=0,u=Object.keys(n);c<u.length;c++){var s=u[c];if(-1!==e.typeKeywords.indexOf(s))return{className:n[s]}}return Object(p.a)(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return L.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new s.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,i.a[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function b(){return(b=Object(c.a)(n.a.mark((function e(r){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!Object(y.a)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!Object(y.a)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return t=e.sent,e.abrupt("return",1===Object(l.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(c.a)(n.a.mark((function e(r){var t,a,c,u,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(u=null!=(t=null==(a=r.typeKeywords)?void 0:a.map((function(e){return e.toLowerCase()})))?t:[],!(u.indexOf("elevation 3d layer")>-1)){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!(u.indexOf("tiled imagery")>-1)){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(s=e.sent,"ArcGISTiledImageServiceLayer"!==(i=null==s?void 0:s.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==i){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,Object(p.a)(r.url);case 17:if(e.t0=c=e.sent.cacheType,null!=e.t0){e.next=22;break}e.t1=void 0,e.next=23;break;case 22:e.t1=c.toLowerCase();case 23:if(e.t2=e.t1,"map"!==e.t2){e.next=28;break}e.t3={className:"ImageryTileLayer"},e.next=29;break;case 28:e.t3={className:"ImageryLayer"};case 29:return e.abrupt("return",e.t3);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=Object(c.a)(n.a.mark((function r(t){return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=v,r.next=4,Object(l.preprocessFSItemData)(t,e.url);case 4:return r.t1=t=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",Object(l.getNumLayersAndTables)(t)>0?v(t):Object(p.a)(e.url).then(v));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function v(e){return 1===Object(l.getNumLayersAndTables)(e)&&{id:Object(l.getFirstLayerOrTableId)(e)}}}}]);
//# sourceMappingURL=104.bf2296fb.chunk.js.map