(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[172],{1167:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var o=r(2),a=r(3),n=r(4),i=r(5),s=r(0),c=r(25),f=r(1),u=(r(13),r(17),r(12),r(7)),p=r(74),O=function(t){Object(n.a)(r,t);var e=Object(i.a)(r);function r(t){var a;return Object(o.a)(this,r),(a=e.call(this,t)).geometries=null,a.outSpatialReference=null,a.transformation=null,a.transformForward=null,a}return Object(a.a)(r,[{key:"toJSON",value:function(){var t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(p.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}}]),r}(c.a);Object(s.a)([Object(f.b)()],O.prototype,"geometries",void 0),Object(s.a)([Object(f.b)({json:{read:{source:"outSR"}}})],O.prototype,"outSpatialReference",void 0),Object(s.a)([Object(f.b)()],O.prototype,"transformation",void 0),Object(s.a)([Object(f.b)()],O.prototype,"transformForward",void 0);var b=O=Object(s.a)([Object(u.a)("esri.rest.support.ProjectParameters")],O)}}]);
//# sourceMappingURL=172.463df202.chunk.js.map