(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[94],{1386:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return _}));var a=i(2),r=i(3),n=i(4),s=i(5),o=i(0),l=i(1),c=(i(13),i(17),i(12),i(7)),u=i(11),d=i(14),h=i(47),y=i(40),p=(i(930),i(931)),b=(i(929),i(928),i(935),i(933),i(927),i(932),function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments))._lastWidth=0,e._lastHeight=0,e.requiresDedicatedFBO=!1,e}return Object(r.a)(i,[{key:"dispose",value:function(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),i=t.context,a=t.painter,r=t.profiler;this._prevFBO=i.getBoundFramebufferObject(),r.recordContainerStart(this.name);var n=this._getFbo(t),s=a.getRenderTarget();i.bindFramebuffer(n),a.setRenderTarget(n),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);var o,l=Object(d.a)(this.children);try{for(l.s();!(o=l.n()).done;){o.value.beforeRender(e)}}catch(p){l.e(p)}finally{l.f()}var c,u=Object(d.a)(this.children);try{for(u.s();!(c=u.n()).done;){c.value.processRender(t)}}catch(p){u.e(p)}finally{u.f()}var h,y=Object(d.a)(this.children);try{for(y.s();!(h=y.n()).done;){h.value.afterRender(e)}}catch(p){y.e(p)}finally{y.f()}a.setRenderTarget(s),i.bindFramebuffer(this._prevFBO),a.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),a.blitTexture(i,n.colorTexture,9728),a.compositeLayer(t,this.computedOpacity),r.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return Object(u.a)(Object(u.a)({},Object(h.a)(Object(y.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var t=e.context,i=e.painter,a=t.getViewport(),r=a.width,n=a.height;if(r!==this._lastWidth||n!==this._lastHeight)if(this._lastWidth=r,this._lastHeight=n,this._renderTarget)this._renderTarget.resize(r,n);else{var s={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:r,height:n};this._renderTarget=new p.a(t,{colorTarget:0,depthStencilTarget:3},s,i.getSharedStencilBuffer())}return this._renderTarget}}]),i}(i(981).a)),v=i(955),f=i(38),O=i(136),g=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(a.a)(this,i),(r=t.call(this,e)).type="group",r.layerViews=new f.a,r}return Object(r.a)(i,[{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(t){return e._layerViewsChangeHandler(t)})),this.layerViews.on("after-changes",(function(){return e._layerViewsAfterChangesHandler()})),this.layer.watch("visibilityMode",(function(){return e._visibilityModeHandler()}),!0),this.watch("visible",(function(){return e._visibleHandler()}),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}},{key:"layerViews",set:function(e){this._set("layerViews",Object(O.b)(e,this._get("layerViews")))}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((function(e,t){return e+t.updatingProgress}),0)/this.layerViews.length}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(t){return t.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,t=this.layer.layers.find((function(t){var i=e._findLayerViewForLayer(t);return i&&i.visible}));return t&&this._findLayerViewForLayer(t)}},{key:"_enforceExclusiveVisibility",value:function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((function(t){t.visible=t===e})))}},{key:"_layerViewsChangeHandler",value:function(e){var t=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return e.watch("visible",(function(i){return t._layerViewVisibleHandler(i,e)}),!0)})).toArray(),"grouplayerview:visible");var i=e.added[e.added.length-1],a=null;i&&i.visible&&(a=i),this._enforceVisibility(a)}},{key:"_layerViewsAfterChangesHandler",value:function(){var e=this;this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((function(t){return t.watch("updating",(function(){return e._updateUpdating()}),!0)})).toArray(),"grouplayerview:updating"),this._updateUpdating()}},{key:"_enforceVisibility",value:function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var t=this.visible;this.layerViews.forEach((function(e){e.visible=t}));break;case"exclusive":this._enforceExclusiveVisibility(e)}}},{key:"_visibilityModeHandler",value:function(){this._enforceVisibility()}},{key:"_layerViewVisibleHandler",value:function(e,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&t)}}},{key:"_visibleHandler",value:function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}},{key:"_updateUpdating",value:function(){this.notifyChange("updating")}}]),i}(i(954).a);Object(o.a)([Object(l.b)({cast:O.a})],g.prototype,"layerViews",null),Object(o.a)([Object(l.b)()],g.prototype,"view",void 0),Object(o.a)([Object(l.b)({readOnly:!0})],g.prototype,"updatingProgress",null);var j=g=Object(o.a)([Object(c.a)("esri.views.layers.GroupLayerView")],g),w=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).container=new b,e}return Object(r.a)(i,[{key:"attach",value:function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")}},{key:"detach",value:function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}},{key:"hitTest",value:function(e,t){return null}},{key:"update",value:function(e){}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){}},{key:"_updateStageChildren",value:function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(t,i){return e.container.addChildAt(t.container,i)}))}}]),i}(Object(v.a)(j)),_=w=Object(o.a)([Object(c.a)("esri.views.2d.layers.GroupLayerView2D")],w)},954:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var a=i(2),r=i(3),n=i(4),s=i(5),o=i(0),l=i(33),c=i(116),u=i(143),d=i(345),h=i(12),y=i(8),p=i(186),b=i(1),v=(i(13),i(17),i(7)),f=function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(a.a)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return Object(r.a)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",a=e.layer&&e.layer.title||"no title";throw h.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(a,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){return Object(y.r)(this.get("layer.opacity"),1)*Object(y.r)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(u.b)(Object(d.a)(Object(p.b)(c.a.EventedMixin(l.a)))));Object(o.a)([Object(b.b)()],f.prototype,"fullOpacity",null),Object(o.a)([Object(b.b)()],f.prototype,"layer",void 0),Object(o.a)([Object(b.b)()],f.prototype,"parent",void 0),Object(o.a)([Object(b.b)({readOnly:!0})],f.prototype,"suspended",null),Object(o.a)([Object(b.b)({readOnly:!0})],f.prototype,"suspendInfo",null),Object(o.a)([Object(b.b)({readOnly:!0})],f.prototype,"legendEnabled",null),Object(o.a)([Object(b.b)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),Object(o.a)([Object(b.b)({readOnly:!0})],f.prototype,"updatingProgress",null),Object(o.a)([Object(b.b)()],f.prototype,"visible",null);var O=f=Object(o.a)([Object(v.a)("esri.views.layers.LayerView")],f)},955:function(e,t,i){"use strict";i.d(t,"a",(function(){return F}));var a,r=i(2),n=i(3),s=i(47),o=i(40),l=i(4),c=i(5),u=i(0),d=i(38),h=i(136),y=i(32),p=i(1),b=(i(13),i(17),i(12),i(7)),v=i(987),f=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return i}(i(25).a),O=f=Object(u.a)([Object(b.a)("esri.views.layers.support.ClipArea")],f),g=a=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(n.a)(i,[{key:"clone",value:function(){return new a({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(u.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),Object(u.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),Object(u.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),Object(u.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],g.prototype,"version",null);var j,w=g=a=Object(u.a)([Object(b.a)("esri.views.layers.support.ClipRect")],g),_=(i(87),i(110)),V=i(74),k=i(57),m=i(121),R={base:_.a,key:"type",typeMap:{extent:k.a,polygon:m.a}},L=j=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(n.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new j({geometry:this.geometry.clone()})}}]),i}(O);Object(u.a)([Object(p.b)({types:R,json:{read:V.a,write:!0}})],L.prototype,"geometry",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],L.prototype,"version",null);var C=L=j=Object(u.a)([Object(b.a)("esri.views.layers.support.Geometry")],L),T=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(n.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(u.a)([Object(p.b)({type:[[[Number]]],json:{write:!0}})],T.prototype,"path",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],T.prototype,"version",null);var E=T=Object(u.a)([Object(b.a)("esri.views.layers.support.Path")],T),S=d.a.ofType({key:"type",base:O,typeMap:{rect:w,path:E,geometry:C}}),F=function(e){var t=function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).clips=new S,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(n.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new v.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(y.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(y.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(y.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(y.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,a=i.minScale,r=i.maxScale;if(null!=a&&null!=r){var n=!a,s=!r;!n&&e<=a&&(n=!0),!s&&e>=r&&(s=!0),t=n&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(s.a)(Object(o.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(u.a)([Object(p.b)({type:S,set:function(e){var t=Object(h.b)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(u.a)([Object(p.b)()],t.prototype,"moving",void 0),Object(u.a)([Object(p.b)()],t.prototype,"attached",void 0),Object(u.a)([Object(p.b)()],t.prototype,"container",void 0),Object(u.a)([Object(p.b)()],t.prototype,"suspended",void 0),Object(u.a)([Object(p.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(u.a)([Object(p.b)()],t.prototype,"updateRequested",void 0),Object(u.a)([Object(p.b)()],t.prototype,"updating",null),Object(u.a)([Object(p.b)()],t.prototype,"view",void 0),t=Object(u.a)([Object(b.a)("esri.views.2d.layers.LayerView2D")],t)}}}]);
//# sourceMappingURL=94.8207f040.chunk.js.map