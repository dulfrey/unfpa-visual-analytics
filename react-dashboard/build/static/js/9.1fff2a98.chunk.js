(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[9],{1226:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return d})),r.d(t,"contentToBlob",(function(){return w})),r.d(t,"fetchResources",(function(){return l})),r.d(t,"getSiblingOfSameType",(function(){return g})),r.d(t,"getSiblingOfSameTypeI",(function(){return k})),r.d(t,"removeAllResources",(function(){return v})),r.d(t,"removeResource",(function(){return b})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return x}));var n=r(6),a=r.n(n),s=r(24),u=r(15),c=r(75),o=r(22),i=r(8),p=r(29);function l(e){return f.apply(this,arguments)}function f(){return f=Object(u.a)(a.a.mark((function e(t){var r,n,s,u,c,o,l,f,d,h,b,m,v=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.length>1&&void 0!==v[1]?v[1]:{},n=v.length>2?v[2]:void 0,e.next=4,t.load(n);case 4:return s=Object(p.z)(t.itemUrl,"resources"),u=r.start,c=void 0===u?1:u,o=r.num,l=void 0===o?10:o,f=r.sortOrder,d=void 0===f?"asc":f,h=r.sortField,b={query:{start:c,num:l,sortOrder:d,sortField:void 0===h?"created":h,token:t.apiKey},signal:Object(i.h)(n,"signal")},e.next=16,t.portal._request(s,b);case 16:return m=e.sent,e.abrupt("return",{total:m.total,nextStart:m.nextStart,resources:m.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e,t,r,n){return h.apply(this,arguments)}function h(){return h=Object(u.a)(a.a.mark((function e(t,r,n,u){var c,l,f,d,h,b,m,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new o.a("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return c=t.portalItem,e.next=5,c.load(u);case 5:return l=Object(p.z)(c.userItemUrl,"add"===r?"addResources":"updateResources"),f=j(t.path),d=Object(s.a)(f,2),h=d[0],b=d[1],e.next=12,w(n);case 12:return m=e.sent,v=new FormData,h&&"."!==h&&v.append("resourcesPrefix",h),v.append("fileName",b),v.append("file",m,b),v.append("f","json"),Object(i.j)(u)&&u.access&&v.append("access",u.access),e.next=21,c.portal._request(l,{method:"post",body:v,signal:Object(i.h)(u,"signal")});case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e,t,r){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(a.a.mark((function e(t,r,n){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new o.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(n);case 4:return s=Object(p.z)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(s,{method:"post",query:{resource:r.path},signal:Object(i.h)(n,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return n=Object(p.z)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(n,{method:"post",query:{deleteAll:!0},signal:Object(i.h)(r,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function x(e){var t=function(e){var t=Object(p.n)(e);return Object(i.i)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=Object(s.a)(t,2),n=r[0],a=r[1],u=j(n),c=Object(s.a)(u,2);return[c[0],c[1],a]}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,Object(c.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){if(!e.hasPath())return null;var r=x(e.path),n=Object(s.a)(r,3),a=n[0],u=n[2];return e.portalItem.resourceFromPath(Object(p.z)(a,t+u))}function k(e,t){if(!e.hasPath())return null;var r=x(e.path),n=Object(s.a)(r,3),a=n[0],u=n[2];return e.portalItem.resourceFromPath(Object(p.z)(a,t+u))}}}]);
//# sourceMappingURL=9.1fff2a98.chunk.js.map