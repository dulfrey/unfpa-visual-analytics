(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[31],{1025:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var i,n=a(6),r=a.n(n),l=a(15),c=a(11),o=a(2),s=a(3),u=a(4),h=a(5),p=a(0),v=a(75),f=a(33),b=a(22),d=a(80),y=a(12),m=a(532),O=a(279),j=a(28),g=a(99),w=a(29),_=a(32),k=a(1),S=(a(13),a(52)),T=a(7),x=a(137),L=a(21),D=function(){function e(){Object(o.a)(this,e),this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return Object(s.a)(e,[{key:"getAvailability",value:function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var a=(e-this.location.top)*this.location.width+(t-this.location.left),i=a%8,n=a>>3,r=this._tileAvailabilityBitSet;return n<0||n>r.length?"unknown":r[n]&1<<i?"available":"unavailable"}},{key:"_updateFromData",value:function(e){for(var t=this.location.width,a=this.location.height,i=!0,n=!0,r=Math.ceil(t*a/8),l=new Uint8Array(r),c=0,o=0;o<e.length;o++){var s=o%8;e[o]?(n=!1,l[c]|=1<<s):i=!1,7===s&&++c}n?this._allAvailability="unavailable":i?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)}}],[{key:"fromDefinition",value:function(t,a){var i=t.service.request||v.default,n=t.row,r=t.col,l=t.width,o=t.height,s={query:{f:"json"}};return a=a?Object(c.a)(Object(c.a)({},s),a):s,i(function(e){var t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{var a=e.service.tileServers;t="".concat(a&&a.length?a[e.row%a.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var i=e.service.query;return i&&(t="".concat(t,"?").concat(i)),t}(t),a).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:n,left:r,width:l,height:o},valid:!0,data:Object(x.b)(l*o,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==n||t.location.left!==r||t.location.width!==l||t.location.height!==o))throw new b.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:n,left:r,width:l,height:o}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){e.validateJSON(t);var a=new e;return a.location=Object.freeze(Object(L.a)(t.location)),a._updateFromData(t.data),Object.freeze(a)}},{key:"validateJSON",value:function(e){if(!e||!e.location)throw new b.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new b.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new b.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new b.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new b.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}]),e}();function A(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var z=y.a.getLogger("esri.layers.support.TilemapCache"),I=i=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e))._handles=new d.a,i._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2097152,i.request=v.default,i._prefetchingEnabled=!0,i}return Object(s.a)(a,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new m.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(function(){return e._initializeTilemapDefinition()})),Object(_.a)(this,"layer.tileInfo.lods",(function(t){return e._initializeAvailableLevels(t)}),!0)]),this._initializeTilemapDefinition()}},{key:"destroy",value:function(){this._handles&&(this._handles.destroy(),this._handles=null)}},{key:"castLevels",value:function(e){return e<=2?(z.error("Minimum levels for Tilemap is 3, but got ",e),3):e}},{key:"size",get:function(){return 1<<this.levels}},{key:"fetchTilemap",value:function(e,t,a,i){var n=this;if(!this._availableLevels[e])return Promise.reject(new b.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,a,r);if(l)return Promise.resolve(l);var o=i&&i.signal;return i=Object(c.a)(Object(c.a)({},i),{},{signal:null}),new Promise((function(e,t){Object(j.q)(o,(function(){return t(Object(j.e)())}));var a=A(r),l=n._pendingTilemapRequests[a];if(!l){l=D.fromDefinition(r,i).then((function(e){return n._tilemapCache.put(a,e,e.byteSize),e}));var c=function(){return delete n._pendingTilemapRequests[a]};n._pendingTilemapRequests[a]=l,l.then(c,c)}l.then(e,t)}))}},{key:"getAvailability",value:function(e,t,a){if(!this._availableLevels[e])return"unavailable";var i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}},{key:"getAvailabilityUpsample",value:function(e,t,a,i){i.level=e,i.row=t,i.col=a;var n=this.layer.tileInfo;for(n.updateTileInfo(i);;){var r=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==r)return r;if(!n.upsampleTile(i))return"unavailable"}}},{key:"fetchAvailability",value:function(e,t,a,i){return this._availableLevels[e]?this.fetchTilemap(e,t,a,i).catch((function(e){return e})).then((function(i){if(i instanceof D){var n=i.getAvailability(t,a);return"unavailable"===n?Promise.reject(new b.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})):n}if(Object(j.m)(i))throw i;return"unknown"})):Promise.reject(new b.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}},{key:"fetchAvailabilityUpsample",value:function(e,t,a,i,n){var r=this;i.level=e,i.row=t,i.col=a;var l=this.layer.tileInfo;l.updateTileInfo(i);var c=this.fetchAvailability(e,t,a,n).catch((function(e){if(Object(j.m)(e))throw e;if(l.upsampleTile(i))return r.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e}));return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,n,c),c}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=Object(l.a)(r.a.mark((function e(t,a,n,l,o,s){var u,h,p,v,f,b,d,y,m,O=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled){e.next=2;break}return e.abrupt("return");case 2:if(u="prefetch-".concat(t),!this._handles.has(u)){e.next=5;break}return e.abrupt("return");case 5:return h=Object(j.d)(),s.then((function(){return h.abort()}),(function(){return h.abort()})),p=!1,v={remove:function(){p||(p=!0,h.abort())}},this._handles.add(v,u),e.next=12,Object(g.c)(10,h.signal).catch((function(){}));case 12:if(p||(p=!0,this._handles.remove(u)),!Object(j.n)(h)){e.next=15;break}return e.abrupt("return");case 15:for(f={id:t,level:a,row:n,col:l},b=Object(c.a)(Object(c.a)({},o),{},{signal:h.signal}),d=this.layer.tileInfo,y=function(e){var t=O.fetchAvailability(f.level,f.row,f.col,b);i._prefetches.push(t);var a=function(){i._prefetches.removeUnordered(t)};t.then(a,a)},m=0;i._prefetches.length<i._maxPrefetch&&d.upsampleTile(f);++m)y();case 18:case"end":return e.stop()}}),e,this)})));return function(t,a,i,n,r,l){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(w.E)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;var n=A(i);return this._tilemapCache.get(n)}},{key:"_initializeAvailableLevels",value:function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,a,i){return!!e._tilemapFromCache(t,a,i,e._tmpTilemapDefinition)}}}}]),a}(f.a);I._maxPrefetch=4,I._prefetches=new O.a({initialSize:i._maxPrefetch}),Object(p.a)([Object(k.b)({constructOnly:!0,type:Number})],I.prototype,"levels",void 0),Object(p.a)([Object(S.a)("levels")],I.prototype,"castLevels",null),Object(p.a)([Object(k.b)({readOnly:!0,type:Number})],I.prototype,"size",null),Object(p.a)([Object(k.b)({constructOnly:!0,type:Number})],I.prototype,"cacheByteSize",void 0),Object(p.a)([Object(k.b)({constructOnly:!0})],I.prototype,"layer",void 0),Object(p.a)([Object(k.b)({constructOnly:!0})],I.prototype,"request",void 0),I=i=Object(p.a)([Object(T.a)("esri.layers.support.TilemapCache")],I)},1048:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}));var i=a(11),n=a(522),r={type:n.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,a,r){if(!e)return null;var l=t.minScale,c=t.maxScale,o=t.minLOD,s=t.maxLOD;if(null!=o&&null!=s)return r&&r.ignoreMinMaxLOD?n.a.fromJSON(e):n.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=o&&t<=s}))}));if(0!==l&&0!==c){var u=function(e){return Math.round(1e4*e)/1e4},h=l?u(l):1/0,p=c?u(c):-1/0;return n.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=u(e.scale);return t<=h&&t>=p}))}))}return n.a.fromJSON(e)}},1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var i=a(2),n=a(3),r=a(4),l=a(5),c=a(0),o=(a(87),a(1)),s=(a(13),a(17),a(12),a(31)),u=a(7),h=a(1048),p=a(1025),v=a(48),f=function(e){var t=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return Object(n.a)(a,[{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new p.a({layer:this}):null}}]),a}(e);return Object(c.a)([Object(o.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(c.a)([Object(o.b)()],t.prototype,"minScale",void 0),Object(c.a)([Object(s.a)("service","minScale")],t.prototype,"readMinScale",null),Object(c.a)([Object(o.b)()],t.prototype,"maxScale",void 0),Object(c.a)([Object(s.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(c.a)([Object(o.b)({type:v.a})],t.prototype,"spatialReference",void 0),Object(c.a)([Object(o.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(c.a)([Object(o.b)(h.b)],t.prototype,"tileInfo",void 0),Object(c.a)([Object(o.b)()],t.prototype,"tilemapCache",void 0),Object(c.a)([Object(s.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(c.a)([Object(o.b)()],t.prototype,"version",void 0),t=Object(c.a)([Object(u.a)("esri.layers.mixins.ArcGISCachedService")],t)}},1270:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var i=a(6),n=a.n(i),r=a(15),l=a(11),c=a(2),o=a(3),s=a(4),u=a(5),h=a(0),p=a(75),v=a(22),f=a(12),b=a(8),d=a(521),y=a(28),m=a(29),O=a(1),j=(a(13),a(17),a(31)),g=a(7),w=a(215),_=a(277),k=a(1086),S=a(534),T=a(524),x=a(523),L=a(126),D=a(14),A=a(137),z=a(232),I=a(352),C=f.a.getLogger("esri.core.workers.WorkerHandle"),q=function(){function e(t,a,i){var n=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Object(c.a)(this,e),this._mainMethod=a,this._listeners=[],this._promise=Object(I.b)(t,Object(l.a)(Object(l.a)({},r),{},{schedule:i})).then((function(e){if(void 0===n._thread){n._thread=e,n._promise=null,r.hasInitialize&&n.broadcast({},"initialize");var t,a=Object(D.a)(n._listeners);try{for(a.s();!(t=a.n()).done;){var i=t.value;n._connectListener(i)}}catch(l){a.e(l)}finally{a.f()}}else e.close()})),this._promise.catch((function(e){return C.error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return Object(o.a)(e,[{key:"on",value:function(e,t){var a=this,i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),Object(z.b)((function(){i.removed=!0,Object(A.i)(a._listeners,i),a._thread&&Object(b.j)(i.threadHandle)&&i.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,a){var i=this;if(this._thread){var n=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:n,signal:a})}return this._promise?this._promise.then((function(){return Object(y.v)(a),i.invokeMethod(e,t,a)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var a=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return a.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}(),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(c.a)(this,a),(e=t.call(this,"LercWorker","_decode",i,{strategy:"dedicated"})).schedule=i,e.ref=0,e}return Object(o.a)(a,[{key:"decode",value:function(e,t,a){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},a):Promise.resolve(null)}},{key:"getTransferList",value:function(e){return[e.buffer]}},{key:"release",value:function(){var e=this;--this.ref<=0&&(N.forEach((function(t,a){t===e&&N.delete(a)})),this.destroy())}}]),a}(q),N=new Map;function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=N.get(Object(b.q)(e));return t||(Object(b.j)(e)?(t=new E((function(t){return e.schedule(t)})),N.set(e,t)):(t=new E,N.set(null,t))),++t.ref,t}var P=f.a.getLogger("esri.layers.ElevationLayer"),U=function(e){Object(s.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).copyright=null,e.heightModelInfo=null,e.path=null,e.opacity=1,e.operationalLayerType="ArcGISTiledElevationServiceLayer",e.sourceJSON=null,e.type="elevation",e.url=null,e.version=null,e._lercDecoder=M(),e}return Object(o.a)(i,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(l.a)({url:e},t):e}},{key:"destroy",value:function(){this._lercDecoder=Object(b.o)(this._lercDecoder)}},{key:"minScale",get:function(){},set:function(e){this.constructed&&P.warn("".concat(this.declaredClass,".minScale support has been removed (since 4.5)"))}},{key:"maxScale",get:function(){},set:function(e){this.constructed&&P.warn("".concat(this.declaredClass,".maxScale support has been removed (since 4.5)"))}},{key:"readVersion",value:function(e,t){var a=t.currentVersion;return a||(a=9.3),a}},{key:"load",value:function(e){var t=this,a=Object(b.j)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new v.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(y.u).then((function(){return t._fetchImageService(a)}))),Promise.resolve(this)}},{key:"fetchTile",value:function(e,t,a,i){var n=this,r=Object(b.j)((i=i||{signal:null}).signal)?i.signal:i.signal=Object(y.d)().signal,l={responseType:"array-buffer",signal:r},c={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((function(){return n._fetchTileAvailability(e,t,a,i)})).then((function(){return Object(p.default)(n.getTileUrl(e,t,a),l)})).then((function(e){return n._lercDecoder.decode(e.data,c,r)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))}},{key:"getTileUrl",value:function(e,t,a){var i=!this.tilemapCache&&this.supportsBlankTile,n=Object(m.E)(Object(l.a)(Object(l.a)({},this.parsedUrl.query),{},{blankTile:!i&&null}));return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(a).concat(n?"?"+n:"")}},{key:"queryElevation",value:function(){var e=Object(r.a)(n.a.mark((function e(t,i){var r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(14).then(a.bind(null,1383));case 2:return r=e.sent,l=r.ElevationQuery,Object(y.v)(i),e.abrupt("return",(new l).query(this,t,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createElevationSampler",value:function(){var e=Object(r.a)(n.a.mark((function e(t,i){var r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(14).then(a.bind(null,1383));case 2:return r=e.sent,l=r.ElevationQuery,Object(y.v)(i),e.abrupt("return",(new l).createSampler(this,t,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"_fetchTileAvailability",value:function(e,t,a,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,a,i):Promise.resolve("unknown")}},{key:"_fetchImageService",value:function(){var e=Object(r.a)(n.a.mark((function e(t){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",this.sourceJSON);case 2:return a={query:Object(l.a)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t},e.next=5,Object(p.default)(this.parsedUrl.path,a);case 5:(i=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),i}(Object(k.a)(Object(S.a)(Object(T.a)(Object(x.a)(Object(d.a)(_.a))))));Object(h.a)([Object(O.b)({json:{read:{source:"copyrightText"}}})],U.prototype,"copyright",void 0),Object(h.a)([Object(O.b)({readOnly:!0,type:w.a})],U.prototype,"heightModelInfo",void 0),Object(h.a)([Object(O.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),Object(h.a)([Object(O.b)({type:["show","hide"]})],U.prototype,"listMode",void 0),Object(h.a)([Object(O.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],U.prototype,"minScale",null),Object(h.a)([Object(O.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],U.prototype,"maxScale",null),Object(h.a)([Object(O.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],U.prototype,"opacity",void 0),Object(h.a)([Object(O.b)({type:["ArcGISTiledElevationServiceLayer"]})],U.prototype,"operationalLayerType",void 0),Object(h.a)([Object(O.b)()],U.prototype,"sourceJSON",void 0),Object(h.a)([Object(O.b)({json:{read:!1},value:"elevation",readOnly:!0})],U.prototype,"type",void 0),Object(h.a)([Object(O.b)(L.n)],U.prototype,"url",void 0),Object(h.a)([Object(O.b)()],U.prototype,"version",void 0),Object(h.a)([Object(j.a)("version",["currentVersion"])],U.prototype,"readVersion",null),(U=Object(h.a)([Object(g.a)("esri.layers.ElevationLayer")],U)).prototype.fetchTile.__isDefault__=!0;var J=U}}]);
//# sourceMappingURL=31.8affb8de.chunk.js.map