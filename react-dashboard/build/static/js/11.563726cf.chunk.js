(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[11,9],{1147:function(e,t,r){"use strict";r.d(t,"a",(function(){return D}));var n=r(14),a=r(11),o=r(6),i=r.n(o),s=r(15),c=r(2),u=r(3),l=r(4),p=r(5),d=r(0),f=r(75),h=r(22),b=(r(13),r(12)),v=r(8),y=r(28),m=r(29),O=r(1),j=(r(17),r(31)),x=r(7),g=r(30),w=r(1241);function S(e){e&&e.writtenProperties&&e.writtenProperties.forEach((function(e){var t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(w.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var k=r(57),I=r(215),R=r(48),_=r(169),P=r(126),N=r(1240),T=r(104),A=r(316),E=r(170),U=r(554),K=r(1226);function q(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(s.a)(i.a.mark((function e(t,r,a){var o,s,c,u,l,p,d,f,b,v,m,O,j,x,g,w,S;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.resources){e.next=2;break}return e.abrupt("return");case 2:o=r.portalItem===t.portalItem?new Set(t.paths):new Set,t.paths.length=0,t.portalItem=r.portalItem,s=new Set(r.resources.toKeep.map((function(e){return e.resource.path}))),c=new Set,u=[],s.forEach((function(e){o.delete(e),t.paths.push(e)})),l=Object(n.a)(r.resources.toUpdate);try{for(l.s();!(p=l.n()).done;)d=p.value,o.delete(d.resource.path),s.has(d.resource.path)||c.has(d.resource.path)?(f=d.resource,b=d.content,v=d.finish,m=d.error,O=Object(K.getSiblingOfSameTypeI)(f,Object(U.a)()),t.paths.push(O.path),u.push(z({resource:O,content:b,finish:v,error:m},a))):(t.paths.push(d.resource.path),u.push(M(d,a)),c.add(d.resource.path))}catch(i){l.e(i)}finally{l.f()}j=Object(n.a)(r.resources.toAdd);try{for(j.s();!(x=j.n()).done;)g=x.value,u.push(z(g,a)),t.paths.push(g.resource.path)}catch(i){j.e(i)}finally{j.f()}if(o.forEach((function(e){var t=r.portalItem.resourceFromPath(e);u.push(t.portalItem.removeResource(t).catch((function(){})))})),0!==u.length){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,Object(y.j)(u);case 14:if(w=e.sent,Object(y.v)(a),S=w.filter((function(e){return"error"in e})).map((function(e){return e.error})),!(S.length>0)){e.next=19;break}throw new h.a("save:resources","Failed to save one or more resources",{errors:S});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(t.resource.portalItem.addResource(t.resource,t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error&&t.error(n.error),n.error;case 5:t.finish&&t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return J.apply(this,arguments)}function J(){return(J=Object(s.a)(i.a.mark((function e(t,r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(t.resource.update(t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error(n.error),n.error;case 5:t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=b.a.getLogger("esri.layers.mixins.SceneService"),D=function(e){var t=function(e){Object(l.a)(o,e);var t=Object(p.a)(o);function o(){var e;return Object(c.a)(this,o),(e=t.apply(this,arguments)).spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e.indexInfo=null,e._debouncedSaveOperations=Object(y.i)(function(){var t=Object(s.a)(i.a.mark((function t(r,n,a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r,t.next=0===t.t0?3:1===t.t0?4:5;break;case 3:return t.abrupt("return",e._save(n));case 4:return t.abrupt("return",e._saveAs(a,n));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),e}return Object(u.a)(o,[{key:"readSpatialReference",value:function(e,t){return this._readSpatialReference(t)}},{key:"_readSpatialReference",value:function(e){if(null!=e.spatialReference)return R.a.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,n=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=n?new R.a(n):null}},{key:"readFullExtent",value:function(e,t,r){if(null!=e&&"object"==typeof e){var n=null==e.spatialReference?Object(a.a)(Object(a.a)({},e),{},{spatialReference:this._readSpatialReference(t)}):e;return k.a.fromJSON(n,r)}var o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((function(e){return e<B}))?null:new k.a({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}},{key:"readVersion",value:function(e,t){var r=t.store,n=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:n},o=n.split(".");return o.length>=2&&(a.major=parseInt(o[0],10),a.minor=parseInt(o[1],10)),a}},{key:"readTitlePortalItem",value:function(e){return"item-title"!==this.sublayerTitleMode?void 0:e}},{key:"readTitleService",value:function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(_.i)(this.url,t.name);var n=t.name;if(!n&&this.url){var a=Object(_.e)(this.url);Object(v.j)(a)&&(n=a.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(n=r+" - "+n),Object(_.a)(n)}},{key:"url",set:function(e){var t=Object(_.h)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:C});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}},{key:"writeUrl",value:function(e,t,r,n){Object(_.j)(this,e,"layers",t,n)}},{key:"parsedUrl",get:function(){var e=this._get("url");if(!e)return null;var t=Object(m.K)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}},{key:"_fetchIndexAndUpdateExtent",value:function(){var e=Object(s.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.indexInfo=Object(N.a)(this.parsedUrl.path,this.rootNode,t,this.apiKey,C,r),e.t0=null==this.fullExtent||this.fullExtent.hasZ,e.t0){e.next=8;break}return e.t1=this,e.next=6,this.indexInfo;case 6:e.t2=e.sent,e.t1._updateExtent.call(e.t1,e.t2);case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_updateExtent",value:function(e){if("page"===(null==e?void 0:e.type)){var t,r,n=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[n];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new h.a("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<B||null==this.fullExtent||this.fullExtent.hasZ)return;var o=a.obb.halfSize,i=a.obb.center[2],s=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-s,this.fullExtent.zmax=i+s}else if("node"===(null==e?void 0:e.type)){var c,u=null==(c=e.rootNode)?void 0:c.mbs;if(!Array.isArray(u)||4!==u.length||u[0]<B)return;var l=u[2],p=u[3];this.fullExtent.zmin=l-p,this.fullExtent.zmax=l+p}}},{key:"_fetchService",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this.url){e.next=2;break}throw new h.a("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");case 2:if(null!=this.layerId||!/SceneServer\/*$/i.test(this.url)){e.next=7;break}return e.next=5,this._fetchFirstLayerId(t);case 5:null!=(r=e.sent)&&(this.layerId=r);case 7:return e.abrupt("return",this._fetchServiceLayer(t));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchFirstLayerId",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if(!((r=e.sent).data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)){e.next=5;break}return e.abrupt("return",r.data.layers[0].id);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchServiceLayer",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:(r=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),n=r.data,this.read(n,{origin:"service",url:this.parsedUrl}),this.validateLayer(n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_ensureLoadBeforeSave",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(e.t0="beforeSave"in this&&"function"==typeof this.beforeSave,!e.t0){e.next=6;break}return e.next=6,this.beforeSave();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){}},{key:"_updateTypeKeywords",value:function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);var a,o=t.getTypeKeywords(),i=Object(n.a)(o);try{for(i.s();!(a=i.n()).done;){var s=a.value;e.typeKeywords.push(s)}}catch(c){i.e(c)}finally{i.f()}e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,t,r){return r.indexOf(e)===t})),1===r&&(e.typeKeywords=e.typeKeywords.filter((function(e){return"Hosted Service"!==e}))))}},{key:"_saveAs",value:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var n,o,s,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(a.a)(Object(a.a)({},G),r),o=A.default.from(t),e.t0=o,e.t0){e.next=7;break}return C.error("_saveAs(): requires a portal item parameter"),e.next=7,Promise.reject(new h.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"));case 7:return o.id&&((o=o.clone()).id=null),s=o.portal||T.a.getDefault(),e.next=11,this._ensureLoadBeforeSave();case 11:return o.type=Z,o.portal=s,c={origin:"portal-item",url:null,messages:[],portal:s,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},u={layers:[this.write(null,c)]},e.next=16,Promise.all(c.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(u,c,n);case 18:return o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,n,1),e.next=23,s._signIn();case 23:return e.next=25,s.user.addItem({item:o,folder:n&&n.folder,data:u});case 25:return e.next=27,q(this.resourceReferences,c,null);case 27:return this.portalItem=o,S(c),c.portalItem=o,e.abrupt("return",o);case 31:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_save",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(a.a)(Object(a.a)({},G),t),e.t0=this.portalItem,e.t0){e.next=6;break}return C.error("_save(): requires the .portalItem property to be set"),e.next=6,Promise.reject(new h.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"));case 6:if(e.t1=this.portalItem.type!==Z,!e.t1){e.next=11;break}return C.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+Z),e.next=11,Promise.reject(new h.a("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(Z,'"')));case 11:return e.next=13,this._ensureLoadBeforeSave();case 13:return n={origin:"portal-item",url:this.portalItem.itemUrl&&Object(m.K)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||T.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,n)]},e.next=16,Promise.all(n.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(o,n,r);case 18:return this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,0),e.next=23,this.portalItem.update({data:o});case 23:return e.next=25,q(this.resourceReferences,n,null);case 25:return S(n),e.abrupt("return",this.portalItem);case 27:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_validateAgainstJSONSchema",value:function(){var e=Object(s.a)(i.a.mark((function e(t,n,a){var o,s,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.messages.filter((function(e){return"error"===e.type})).map((function(e){return new h.a(e.name,e.message,e.details)})),a&&a.validationOptions.ignoreUnsupported&&(o=o.filter((function(e){return"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name}))),!a.validationOptions.enabled&&!V){e.next=10;break}return e.next=4,r.e(171).then(r.bind(null,1381));case 4:if(!((s=e.sent.validate(t,a.portalItemLayerType)).length>0)){e.next=10;break}if(c="Layer item did not validate:\n".concat(s.join("\n")),C.error("_validateAgainstJSONSchema(): ".concat(c)),"throw"!==a.validationOptions.failPolicy){e.next=10;break}throw u=s.map((function(e){return new h.a("sceneservice:schema-validation",e)})).concat(o),new h.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:u});case 10:if(!(o.length>0)){e.next=12;break}throw new h.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o});case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),o}(e);return Object(d.a)([Object(O.b)(P.c)],t.prototype,"id",void 0),Object(d.a)([Object(O.b)({type:R.a})],t.prototype,"spatialReference",void 0),Object(d.a)([Object(j.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(d.a)([Object(O.b)({type:k.a})],t.prototype,"fullExtent",void 0),Object(d.a)([Object(j.a)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(d.a)([Object(O.b)({readOnly:!0,type:I.a})],t.prototype,"heightModelInfo",void 0),Object(d.a)([Object(O.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(d.a)([Object(O.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(d.a)([Object(O.b)({readOnly:!0})],t.prototype,"version",void 0),Object(d.a)([Object(j.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(d.a)([Object(O.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(d.a)([Object(O.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(d.a)([Object(O.b)({type:String})],t.prototype,"title",void 0),Object(d.a)([Object(j.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(d.a)([Object(j.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(d.a)([Object(O.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(d.a)([Object(O.b)(P.n)],t.prototype,"url",null),Object(d.a)([Object(g.a)("url")],t.prototype,"writeUrl",null),Object(d.a)([Object(O.b)()],t.prototype,"parsedUrl",null),Object(d.a)([Object(O.b)({readOnly:!0})],t.prototype,"store",void 0),Object(d.a)([Object(O.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(d.a)([Object(x.a)("esri.layers.mixins.SceneService")],t),t},B=-1e38,V=!1,Z="Scene Service",G={getTypeKeywords:function(){return[]},portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},1226:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return f})),r.d(t,"contentToBlob",(function(){return x})),r.d(t,"fetchResources",(function(){return p})),r.d(t,"getSiblingOfSameType",(function(){return w})),r.d(t,"getSiblingOfSameTypeI",(function(){return S})),r.d(t,"removeAllResources",(function(){return y})),r.d(t,"removeResource",(function(){return b})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return j}));var n=r(6),a=r.n(n),o=r(24),i=r(15),s=r(75),c=r(22),u=r(8),l=r(29);function p(e){return d.apply(this,arguments)}function d(){return d=Object(i.a)(a.a.mark((function e(t){var r,n,o,i,s,c,p,d,f,h,b,v,y=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.length>1&&void 0!==y[1]?y[1]:{},n=y.length>2?y[2]:void 0,e.next=4,t.load(n);case 4:return o=Object(l.z)(t.itemUrl,"resources"),i=r.start,s=void 0===i?1:i,c=r.num,p=void 0===c?10:c,d=r.sortOrder,f=void 0===d?"asc":d,h=r.sortField,b={query:{start:s,num:p,sortOrder:f,sortField:void 0===h?"created":h,token:t.apiKey},signal:Object(u.h)(n,"signal")},e.next=16,t.portal._request(o,b);case 16:return v=e.sent,e.abrupt("return",{total:v.total,nextStart:v.nextStart,resources:v.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e,t,r,n){return h.apply(this,arguments)}function h(){return h=Object(i.a)(a.a.mark((function e(t,r,n,i){var s,p,d,f,h,b,v,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new c.a("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return s=t.portalItem,e.next=5,s.load(i);case 5:return p=Object(l.z)(s.userItemUrl,"add"===r?"addResources":"updateResources"),d=O(t.path),f=Object(o.a)(d,2),h=f[0],b=f[1],e.next=12,x(n);case 12:return v=e.sent,y=new FormData,h&&"."!==h&&y.append("resourcesPrefix",h),y.append("fileName",b),y.append("file",v,b),y.append("f","json"),Object(u.j)(i)&&i.access&&y.append("access",i.access),e.next=21,s.portal._request(p,{method:"post",body:y,signal:Object(u.h)(i,"signal")});case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e,t,r){return v.apply(this,arguments)}function v(){return(v=Object(i.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new c.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(n);case 4:return o=Object(l.z)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(o,{method:"post",query:{resource:r.path},signal:Object(u.h)(n,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return n=Object(l.z)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(n,{method:"post",query:{deleteAll:!0},signal:Object(u.h)(r,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function j(e){var t=function(e){var t=Object(l.n)(e);return Object(u.i)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=Object(o.a)(t,2),n=r[0],a=r[1],i=O(n),s=Object(o.a)(i,2);return[s[0],s[1],a]}function x(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,Object(s.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){if(!e.hasPath())return null;var r=j(e.path),n=Object(o.a)(r,3),a=n[0],i=n[2];return e.portalItem.resourceFromPath(Object(l.z)(a,t+i))}function S(e,t){if(!e.hasPath())return null;var r=j(e.path),n=Object(o.a)(r,3),a=n[0],i=n[2];return e.portalItem.resourceFromPath(Object(l.z)(a,t+i))}},1240:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(6),a=r.n(n),o=r(15),i=r(75),s=r(22),c=r(8);function u(e,t,r,n,a,o){return l.apply(this,arguments)}function l(){return l=Object(o.a)(a.a.mark((function e(t,r,n,o,u,l){var p,d,f,h,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=null,!Object(c.j)(n)){e.next=17;break}return d="".concat(t,"/nodepages/"),f=d+Math.floor(n.rootIndex/n.nodesPerPage),e.prev=3,e.next=6,Object(i.default)(f,{query:{f:"json",token:o},responseType:"json",signal:l});case 6:return e.t0=e.sent.data,e.t1=n.rootIndex,e.t2=n.nodesPerPage,e.t3=n.lodSelectionMetricType,e.t4=d,e.abrupt("return",{type:"page",rootPage:e.t0,rootIndex:e.t1,pageSize:e.t2,lodMetric:e.t3,urlPrefix:e.t4});case 14:e.prev=14,e.t5=e.catch(3),Object(c.j)(u)&&u.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",f,e.t5),p=e.t5;case 17:if(r){e.next=19;break}return e.abrupt("return",null);case 19:return h="".concat(t,"/nodes/"),b=h+(r&&r.split("/").pop()),e.prev=20,e.next=23,Object(i.default)(b,{query:{f:"json",token:o},responseType:"json",signal:l});case 23:return e.t6=e.sent.data,e.t7=h,e.abrupt("return",{type:"node",rootNode:e.t6,urlPrefix:e.t7});case 28:throw e.prev=28,e.t8=e.catch(20),new s.a("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e.t8,url:b});case 31:case"end":return e.stop()}}),e,null,[[3,14],[20,28]])}))),l.apply(this,arguments)}},1241:function(e,t,r){"use strict";function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=11.563726cf.chunk.js.map