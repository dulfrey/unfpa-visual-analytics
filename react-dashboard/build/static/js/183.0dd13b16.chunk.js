(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[183],{1367:function(e,t,r){"use strict";r.r(t),r.d(t,"DropShadow",(function(){return p}));var i=r(2),s=r(3),a=r(39),o=(r(930),r(931)),n=(r(13),r(929),r(928),r(935),r(933),r(927)),l=(r(932),r(1041)),u=[1,0],h=[0,1],p=function(){function e(){Object(i.a)(this,e),this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}return Object(s.a)(e,[{key:"dispose",value:function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}},{key:"draw",value:function(e,t,r){var i=e.context,s=e.state,o=e.painter.materialManager,n=this._programDesc,p=t.width,d=t.height,c=[Math.round(p/2),Math.round(d/2)],f=r.blurRadius,_=r.offsetX,B=r.offsetY,m=r.color,g=[Object(a.c)(_/2),Object(a.c)(B/2)];this._createOrResizeResources(e,p,d,c);var F=this._horizontalBlurFBO,b=this._verticalBlurFBO;i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1);var v=this._layerFBOTexture;t.copyToTexture(0,0,p,d,0,0,v),this._quad||(this._quad=new l.a(i,[-1,-1,1,-1,-1,1,1,1])),i.setViewport(0,0,c[0],c[1]);var O=this._quad;O.bind(),i.setBlendingEnabled(!1);var w=o.getProgram(e,n.blur,[{name:"radius",value:Math.ceil(f)}]);i.useProgram(w),i.bindFramebuffer(F),i.bindTexture(t.colorTexture,4),w.setUniformMatrix3fv("u_displayViewMat3",s.displayMat3),w.setUniform2fv("u_offset",g),w.setUniform1i("u_colorTexture",4),w.setUniform2fv("u_texSize",c),w.setUniform2fv("u_direction",u),w.setUniform1f("u_sigma",f),O.draw(),i.bindFramebuffer(b),i.bindTexture(F.colorTexture,5),w.setUniformMatrix3fv("u_displayViewMat3",s.displayMat3),w.setUniform2fv("u_offset",[0,0]),w.setUniform1i("u_colorTexture",5),w.setUniform2fv("u_direction",h),O.draw(),i.bindFramebuffer(t),i.setViewport(0,0,p,d);var T=o.getProgram(e,n.composite);i.useProgram(T),i.bindTexture(b.colorTexture,2),T.setUniform1i("u_blurTexture",2),i.bindTexture(v,3),T.setUniform1i("u_layerFBOTexture",3),T.setUniform4fv("u_shadowColor",[m[3]*(m[0]/255),m[3]*(m[1]/255),m[3]*(m[2]/255),m[3]]),O.draw(),i.setBlendingEnabled(!0),i.setStencilTestEnabled(!0),i.setBlendFunction(1,771),O.unbind()}},{key:"_createOrResizeResources",value:function(e,t,r,i){var s=e.context;this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===r||(this._size[0]=t,this._size[1]=r,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(i[0],i[1]):this._horizontalBlurFBO=new o.a(s,{colorTarget:0,depthStencilTarget:0,width:i[0],height:i[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i[0],height:i[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(i[0],i[1]):this._verticalBlurFBO=new o.a(s,{colorTarget:0,depthStencilTarget:0,width:i[0],height:i[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i[0],height:i[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,r):this._layerFBOTexture=new n.a(s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:r}))}}]),e}()}}]);
//# sourceMappingURL=183.0dd13b16.chunk.js.map