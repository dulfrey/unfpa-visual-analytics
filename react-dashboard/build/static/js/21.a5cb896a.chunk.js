(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[21],{1259:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ye}));var n=r(2),a=r(3),i=r(4),o=r(5),c=r(0),u=r(1),s=(r(13),r(17)),f=(r(12),r(7)),O=r(6),p=r.n(O),l=r(11),b=r(15),j=r(75),y=r(97);function N(){return(N=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(y.c)(t),i=Object(l.a)(Object(l.a)({},a.query),{},{f:"json"},r.toJSON()),o=Object(y.a)(i,n),e.abrupt("return",Object(j.default)(a.path+"/areasAndLengths",o).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(87);var m=r(74);function d(e){return{geometryType:Object(m.c)(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function h(e,t,r){var n=Object(m.b)(t);return e.map((function(e){var t=n.fromJSON(e);return t.spatialReference=r,t}))}var T=r(121);function I(){return(I=Object(b.a)(p.a.mark((function e(t,r,n,a){var i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r[0].spatialReference,o=Object(y.c)(t),c=Object(l.a)(Object(l.a)({},o.query),{},{f:"json",sr:JSON.stringify(i.toJSON()),polygons:JSON.stringify(d(r).geometries),polylines:JSON.stringify(d(n).geometries)}),u=Object(y.a)(c,a),e.abrupt("return",Object(j.default)(o.path+"/autoComplete",u).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new T.a({spatialReference:i,rings:t})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(y.c)(t),i=Object(l.a)(Object(l.a)({},a.query),{},{f:"json"},r.toJSON()),o=r.outSpatialReference||r.geometries[0].spatialReference,c=Object(y.a)(i,n),e.abrupt("return",Object(j.default)(a.path+"/buffer",c).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new T.a({spatialReference:o,rings:t})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r[0].spatialReference,i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(d(r))}),c=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/convexHull",c).then((function(e){var t=e.data;return Object(m.a)(t.geometry).set({spatialReference:a})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(b.a)(p.a.mark((function e(t,r,n,a){var i,o,c,u,s,f,O,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(y.c)(t),o=r[0].spatialReference,c=Object(l.a)(Object(l.a)({},a),{},{query:Object(l.a)(Object(l.a)({},i.query),{},{f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:Object(m.c)(r[0]),geometries:r}),cutter:JSON.stringify(n)})}),e.next=5,Object(j.default)(i.path+"/cut",c);case 5:return u=e.sent,s=u.data,f=s.cutIndexes,O=s.geometries,b=void 0===O?[]:O,e.abrupt("return",{cutIndexes:f,geometries:b.map((function(e){var t=Object(m.a)(e);return t.spatialReference=o,t}))});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.geometries[0].spatialReference,i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json"},r.toJSON()),c=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/densify",c).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(m.a)(e).set({spatialReference:a})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(b.a)(p.a.mark((function e(t,r,n,a){var i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r[0].spatialReference,o=Object(y.c)(t),c={query:Object(l.a)(Object(l.a)({},o.query),{},{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(d(r)),geometry:JSON.stringify({geometryType:Object(m.c)(n),geometry:n.toJSON()})})},e.abrupt("return",(a&&(c=Object(l.a)(Object(l.a)({},a),c)),Object(j.default)(o.path+"/difference",c).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(m.a)(e).set({spatialReference:i})}))}))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(y.c)(t),i=Object(l.a)(Object(l.a)({},a.query),{},{f:"json"},r.toJSON()),o=Object(y.a)(i,n),e.abrupt("return",Object(j.default)(a.path+"/distance",o).then((function(e){var t=e.data;return t&&t.distance})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=r(37),w=new E.a({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});function A(){return(A=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},null!=r.sr&&"object"==typeof r.sr?a.sr=r.sr.wkid||JSON.stringify(r.sr):a.sr=r.sr,a.strings=JSON.stringify(r.strings),i=r.conversionType||"mgrs",a.conversionType=w.toJSON(i),a.conversionMode=r.conversionMode,o=Object(y.c)(t),c=Object(l.a)(Object(l.a)({},o.query),{},{f:"json"},a),u=Object(y.a)(c,n),e.abrupt("return",Object(j.default)(o.path+"/fromGeoCoordinateString",u).then((function(e){return e.data.coordinates})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=r(25),k=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).deviationUnit=null,a.geometries=null,a.maxDeviation=null,a}return r}(J.a);Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],k.prototype,"deviationUnit",void 0),Object(c.a)([Object(u.b)({json:{read:{reader:function(e){return e?e.map((function(e){return Object(m.a)(e)})):null}},write:{writer:function(e,t){t.geometries=e.map((function(e){return e.toJSON()}))}}}})],k.prototype,"geometries",void 0),Object(c.a)([Object(u.b)({type:Number,json:{write:!0}})],k.prototype,"maxDeviation",void 0),(k=Object(c.a)([Object(f.a)("esri.rest.support.GeneralizeParameters")],k)).from=Object(s.m)(k);var D=k,x=new E.a({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function L(e){var t=e.toJSON(),r=t.geometries,n=t.deviationUnit,a={maxDeviation:t.maxDeviation};return r&&r.length&&(a.geometries=JSON.stringify({geometryType:Object(m.c)(r[0]),geometries:r}),a.sr=JSON.stringify(r[0].spatialReference)),x.write(n,a,"deviationUnit"),a}function C(){return(C=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(r=D.from(r)).toJSON(),i=L(r),o=Object(y.c)(t),c=Object(l.a)(Object(l.a)({},o.query),{},{f:"json"},i),u=a.geometries[0].spatialReference,s=Object(y.a)(c,n),e.abrupt("return",Object(j.default)(o.path+"/generalize",s).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(m.a)(e).set({spatialReference:u})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(b.a)(p.a.mark((function e(t,r,n,a){var i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r[0].spatialReference,o=Object(y.c)(t),c=Object(l.a)(Object(l.a)({},o.query),{},{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(d(r)),geometry:JSON.stringify({geometryType:Object(m.c)(n),geometry:n.toJSON()})}),u=Object(y.a)(c,a),e.abrupt("return",Object(j.default)(o.path+"/intersect",u).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(m.a)(e).set({spatialReference:i})}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=r(118),G=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).calculationType=null,a.geodesic=null,a.lengthUnit=null,a.polylines=null,a}return r}(J.a);Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],G.prototype,"calculationType",void 0),Object(c.a)([Object(u.b)({type:Boolean,json:{write:!0}})],G.prototype,"geodesic",void 0),Object(c.a)([Object(u.b)({json:{write:!0}})],G.prototype,"lengthUnit",void 0),Object(c.a)([Object(u.b)({type:[q.a],json:{read:{reader:function(e){return e?e.map((function(e){return Object(m.a)(e)})):null}},write:{writer:function(e,t){t.polylines=e.map((function(e){return e.toJSON()}))}}}})],G.prototype,"polylines",void 0),(G=Object(c.a)([Object(f.a)("esri.rest.support.LengthsParameters")],G)).from=Object(s.m)(G);var H=G,Y=new E.a({preserveShape:"preserve-shape"});function K(e){var t=e.toJSON(),r=t.polylines,n=t.lengthUnit,a=t.geodesic,i=t.calculationType,o={};o.polylines=JSON.stringify(r);var c=e.polylines[0].spatialReference;return o.sr=c.wkid?c.wkid:JSON.stringify(c.toJSON()),n&&(o.lengthUnit=n),a&&(o.geodesic=a),i&&(o.calculationType=Y.toJSON(i)),o}function F(){return(F=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=H.from(r),a=K(r),i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json"},a),c=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/lengths",c).then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).bevelRatio=null,a.geometries=null,a.offsetDistance=null,a.offsetHow=null,a.offsetUnit=null,a}return r}(J.a);Object(c.a)([Object(u.b)({type:Number,json:{write:!0}})],B.prototype,"bevelRatio",void 0),Object(c.a)([Object(u.b)({json:{read:{reader:function(e){return e?e.map((function(e){return Object(m.a)(e)})):null}},write:{writer:function(e,t){t.geometries=e.map((function(e){return e.toJSON()}))}}}})],B.prototype,"geometries",void 0),Object(c.a)([Object(u.b)({type:Number,json:{write:!0}})],B.prototype,"offsetDistance",void 0),Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],B.prototype,"offsetHow",void 0),Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],B.prototype,"offsetUnit",void 0),(B=Object(c.a)([Object(f.a)("esri.rest.support.OffsetParameters")],B)).from=Object(s.m)(B);var P=B,Q=new E.a({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),V=new E.a({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function z(e){var t=e.toJSON(),r=t.geometries,n=t.bevelRatio,a=t.offsetDistance,i=t.offsetHow,o=t.offsetUnit,c={bevelRatio:n,offsetDistance:a};return r&&r.length&&(c.geometries=JSON.stringify({geometryType:Object(m.c)(r[0]),geometries:r}),c.sr=JSON.stringify(r[0].spatialReference)),i&&(c.offsetHow=Q.toJSON(i)),o&&(c.offsetUnit=V.toJSON(o)),c}function W(){return(W=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.from(r),a=z(r),i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json"},a),c=r.geometries[0].spatialReference,u=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/offset",u).then((function(e){return(e.data.geometries||[]).map((function(e){return Object(m.a)(e).set({spatialReference:c})}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=r(1167),Z=Object(s.m)(X.a);function $(){return($=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Z(r),a=Object(y.c)(t),i=Object(l.a)(Object(l.a)({},a.query),{},{f:"json"},r.toJSON()),o=r.outSpatialReference,c=Object(m.c)(r.geometries[0]),u=Object(y.a)(i,n),e.abrupt("return",Object(j.default)(a.path+"/project",u).then((function(e){return h(e.data.geometries,c,o)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).geometries1=null,a.geometries2=null,a.relation=null,a.relationParameter=null,a}return r}(J.a);Object(c.a)([Object(u.b)({json:{read:{reader:function(e){return e?e.map((function(e){return Object(m.a)(e)})):null}},write:{writer:function(e,t){t.geometries1=e.map((function(e){return e.toJSON()}))}}}})],ee.prototype,"geometries1",void 0),Object(c.a)([Object(u.b)({json:{read:{reader:function(e){return e?e.map((function(e){return Object(m.a)(e)})):null}},write:{writer:function(e,t){t.geometries2=e.map((function(e){return e.toJSON()}))}}}})],ee.prototype,"geometries2",void 0),Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],ee.prototype,"relation",void 0),Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],ee.prototype,"relationParameter",void 0),(ee=Object(c.a)([Object(f.a)("esri.rest.support.RelationParameters")],ee)).from=Object(s.m)(ee);var te=ee,re=new E.a({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function ne(e){var t=e.toJSON(),r=t.geometries1,n=t.geometries2,a=t.relation,i=t.relationParameter,o={};if(r&&r.length){o.geometries1=JSON.stringify({geometryType:Object(m.c)(r[0]),geometries:r});var c=r[0].spatialReference;o.sr=c.wkid?c.wkid:JSON.stringify(c)}return n&&n.length>0&&(o.geometries2=JSON.stringify({geometryType:Object(m.c)(n[0]),geometries:n})),a&&(o.relation=re.toJSON(a)),i&&(o.relationParam=i),o}function ae(){return(ae=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=te.from(r),a=ne(r),i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json"},a),c=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/relation",c).then((function(e){return e.data.relations})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(b.a)(p.a.mark((function e(t,r,n,a){var i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.spatialReference,o=Object(y.c)(t),c=Object(l.a)(Object(l.a)({},o.query),{},{f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:Object(m.c)(r),geometry:r.toJSON()}),reshaper:JSON.stringify(n.toJSON())}),u=Object(y.a)(c,a),e.abrupt("return",Object(j.default)(o.path+"/reshape",u).then((function(e){var t=e.data;return Object(m.a)(t.geometry).set({spatialReference:i})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=r(29);function ce(){return(ce=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="string"==typeof t?Object(oe.K)(t):t,i=r[0].spatialReference,o=Object(m.c)(r[0]),c=Object(l.a)(Object(l.a)({},n),{},{query:Object(l.a)(Object(l.a)({},a.query),{},{f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(d(r))})}),e.next=6,Object(j.default)(a.path+"/simplify",c);case 6:return u=e.sent,s=u.data,e.abrupt("return",h(s.geometries,o,i));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},null!=r.sr&&"object"==typeof r.sr?a.sr=r.sr.wkid||JSON.stringify(r.sr):a.sr=r.sr,a.coordinates=JSON.stringify(r.coordinates),i=r.conversionType||"mgrs",a.conversionType=w.toJSON(i),a.conversionMode=r.conversionMode,a.numOfDigits=r.numOfDigits,a.rounding=r.rounding,a.addSpaces=r.addSpaces,o=Object(y.c)(t),c=Object(l.a)(Object(l.a)({},o.query),{},{f:"json"},a),u=Object(y.a)(c,n),e.abrupt("return",Object(j.default)(o.path+"/toGeoCoordinateString",u).then((function(e){return e.data.strings})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).extendHow="default-curve-extension",a.polylines=null,a.trimExtendTo=null,a}return r}(J.a);Object(c.a)([Object(u.b)({type:String,json:{write:!0}})],se.prototype,"extendHow",void 0),Object(c.a)([Object(u.b)({type:[q.a],json:{read:{reader:function(e){return e?e.map((function(e){return Object(m.a)(e)})):null}},write:{writer:function(e,t){t.polylines=e.map((function(e){return e.toJSON()}))}}}})],se.prototype,"polylines",void 0),Object(c.a)([Object(u.b)({json:{read:{reader:function(e){return e?Object(m.a)(e):null}},write:{writer:function(e,t){t.trimExtendTo=e.toJSON()}}}})],se.prototype,"trimExtendTo",void 0),(se=Object(c.a)([Object(f.a)("esri.rest.support.TrimExtendParameters")],se)).from=Object(s.m)(se);var fe=se,Oe=new E.a({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function pe(e){var t=e.toJSON(),r=t.extendHow,n=t.polylines,a=t.trimExtendTo,i={};return i.extendHow=Oe.toJSON(r),n&&n.length&&(i.polylines=JSON.stringify(n),i.sr=JSON.stringify(n[0].spatialReference)),a&&(i.trimExtendTo=JSON.stringify(a)),i}function le(){return(le=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=fe.from(r),a=pe(r),i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json"},a),c=r.sr,u=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/trimExtend",u).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.paths;return new q.a({spatialReference:c,paths:t})}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return(be=Object(b.a)(p.a.mark((function e(t,r,n){var a,i,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r[0].spatialReference,i=Object(y.c)(t),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(d(r))}),c=Object(y.a)(o,n),e.abrupt("return",Object(j.default)(i.path+"/union",c).then((function(e){var t=e.data;return Object(m.a)(t.geometry).set({spatialReference:a})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).url=null,a}return Object(a.a)(r,[{key:"areasAndLengths",value:function(e,t){return function(e,t,r){return N.apply(this,arguments)}(this.url,e,t)}},{key:"autoComplete",value:function(e,t,r){return function(e,t,r,n){return I.apply(this,arguments)}(this.url,e,t,r)}},{key:"buffer",value:function(e,t){return function(e,t,r){return v.apply(this,arguments)}(this.url,e,t)}},{key:"convexHull",value:function(e,t){return function(e,t,r){return g.apply(this,arguments)}(this.url,e,t)}},{key:"cut",value:function(e,t,r){return function(e,t,r,n){return S.apply(this,arguments)}(this.url,e,t,r)}},{key:"densify",value:function(e,t){return function(e,t,r){return _.apply(this,arguments)}(this.url,e,t)}},{key:"difference",value:function(e,t,r){return function(e,t,r,n){return R.apply(this,arguments)}(this.url,e,t,r)}},{key:"distance",value:function(e,t){return function(e,t,r){return U.apply(this,arguments)}(this.url,e,t)}},{key:"fromGeoCoordinateString",value:function(e,t){return function(e,t,r){return A.apply(this,arguments)}(this.url,e,t)}},{key:"generalize",value:function(e,t){return function(e,t,r){return C.apply(this,arguments)}(this.url,e,t)}},{key:"intersect",value:function(e,t,r){return function(e,t,r,n){return M.apply(this,arguments)}(this.url,e,t,r)}},{key:"labelPoints",value:function(e,t){return function(e,t,r){var n=t.map((function(e){return e.toJSON()})),a=t[0].spatialReference,i=Object(y.c)(e),o=Object(l.a)(Object(l.a)({},i.query),{},{f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(n)}),c=Object(y.a)(o,r);return Object(j.default)(i.path+"/labelPoints",c).then((function(e){return(e.data.labelPoints||[]).map((function(e){return Object(m.a)(e).set({spatialReference:a})}))}))}(this.url,e,t)}},{key:"lengths",value:function(e,t){return function(e,t,r){return F.apply(this,arguments)}(this.url,e,t)}},{key:"offset",value:function(e,t){return function(e,t,r){return W.apply(this,arguments)}(this.url,e,t)}},{key:"project",value:function(e,t){return function(e,t,r){return $.apply(this,arguments)}(this.url,e,t)}},{key:"relation",value:function(e,t){return function(e,t,r){return ae.apply(this,arguments)}(this.url,e,t)}},{key:"reshape",value:function(e,t,r){return function(e,t,r,n){return ie.apply(this,arguments)}(this.url,e,t,r)}},{key:"simplify",value:function(e,t){return function(e,t,r){return ce.apply(this,arguments)}(this.url,e,t)}},{key:"toGeoCoordinateString",value:function(e,t){return function(e,t,r){return ue.apply(this,arguments)}(this.url,e,t)}},{key:"trimExtend",value:function(e,t){return function(e,t,r){return le.apply(this,arguments)}(this.url,e,t)}},{key:"union",value:function(e,t){return function(e,t,r){return be.apply(this,arguments)}(this.url,e,t)}}]),r}(r(549).a);je.UNIT_METER=9001,je.UNIT_GERMAN_METER=9031,je.UNIT_FOOT=9002,je.UNIT_SURVEY_FOOT=9003,je.UNIT_CLARKE_FOOT=9005,je.UNIT_FATHOM=9014,je.UNIT_NAUTICAL_MILE=9030,je.UNIT_SURVEY_CHAIN=9033,je.UNIT_SURVEY_LINK=9034,je.UNIT_SURVEY_MILE=9035,je.UNIT_KILOMETER=9036,je.UNIT_CLARKE_YARD=9037,je.UNIT_CLARKE_CHAIN=9038,je.UNIT_CLARKE_LINK=9039,je.UNIT_SEARS_YARD=9040,je.UNIT_SEARS_FOOT=9041,je.UNIT_SEARS_CHAIN=9042,je.UNIT_SEARS_LINK=9043,je.UNIT_BENOIT_1895A_YARD=9050,je.UNIT_BENOIT_1895A_FOOT=9051,je.UNIT_BENOIT_1895A_CHAIN=9052,je.UNIT_BENOIT_1895A_LINK=9053,je.UNIT_BENOIT_1895B_YARD=9060,je.UNIT_BENOIT_1895B_FOOT=9061,je.UNIT_BENOIT_1895B_CHAIN=9062,je.UNIT_BENOIT_1895B_LINK=9063,je.UNIT_INDIAN_FOOT=9080,je.UNIT_INDIAN_1937_FOOT=9081,je.UNIT_INDIAN_1962_FOOT=9082,je.UNIT_INDIAN_1975_FOOT=9083,je.UNIT_INDIAN_YARD=9084,je.UNIT_INDIAN_1937_YARD=9085,je.UNIT_INDIAN_1962_YARD=9086,je.UNIT_INDIAN_1975_YARD=9087,je.UNIT_FOOT_1865=9070,je.UNIT_RADIAN=9101,je.UNIT_DEGREE=9102,je.UNIT_ARCMINUTE=9103,je.UNIT_ARCSECOND=9104,je.UNIT_GRAD=9105,je.UNIT_GON=9106,je.UNIT_MICRORADIAN=9109,je.UNIT_ARCMINUTE_CENTESIMAL=9112,je.UNIT_ARCSECOND_CENTESIMAL=9113,je.UNIT_MIL6400=9114,je.UNIT_BRITISH_1936_FOOT=9095,je.UNIT_GOLDCOAST_FOOT=9094,je.UNIT_INTERNATIONAL_CHAIN=109003,je.UNIT_INTERNATIONAL_LINK=109004,je.UNIT_INTERNATIONAL_YARD=109001,je.UNIT_STATUTE_MILE=9093,je.UNIT_SURVEY_YARD=109002,je.UNIT_50KILOMETER_LENGTH=109030,je.UNIT_150KILOMETER_LENGTH=109031,je.UNIT_DECIMETER=109005,je.UNIT_CENTIMETER=109006,je.UNIT_MILLIMETER=109007,je.UNIT_INTERNATIONAL_INCH=109008,je.UNIT_US_SURVEY_INCH=109009,je.UNIT_INTERNATIONAL_ROD=109010,je.UNIT_US_SURVEY_ROD=109011,je.UNIT_US_NAUTICAL_MILE=109012,je.UNIT_UK_NAUTICAL_MILE=109013,je.UNIT_SQUARE_INCHES="esriSquareInches",je.UNIT_SQUARE_FEET="esriSquareFeet",je.UNIT_SQUARE_YARDS="esriSquareYards",je.UNIT_ACRES="esriAcres",je.UNIT_SQUARE_MILES="esriSquareMiles",je.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",je.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",je.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",je.UNIT_SQUARE_METERS="esriSquareMeters",je.UNIT_ARES="esriAres",je.UNIT_HECTARES="esriHectares",je.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",Object(c.a)([Object(u.b)()],je.prototype,"url",void 0);var ye=je=Object(c.a)([Object(f.a)("esri.tasks.GeometryService")],je)}}]);
//# sourceMappingURL=21.a5cb896a.chunk.js.map