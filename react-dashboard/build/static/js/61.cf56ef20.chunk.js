(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[61],{1016:function(e,t,r){"use strict";function n(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function a(e,t){return new Float64Array(e,t,4)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return a}));var i=[0,0,0,1];Object.freeze({__proto__:null,create:n,clone:o,fromValues:function(e,t,r,n){return[e,t,r,n]},createView:a,IDENTITY:i})},1036:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return I})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return f})),r.d(t,"f",(function(){return l}));var n=r(982),o=r(1016),a=r(94),i=r(49),u=r(60),c=r(543);function l(e,t,r){r*=.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function s(e,t){var r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>i.a?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function f(e,t,r){var n=t[0],o=t[1],a=t[2],i=t[3],u=r[0],c=r[1],l=r[2],s=r[3];return e[0]=n*s+i*u+o*l-a*c,e[1]=o*s+i*c+a*u-n*l,e[2]=a*s+i*l+n*c-o*u,e[3]=i*s-n*u-o*c-a*l,e}function b(e,t,r,n){var o,a,u,c,l,s=t[0],f=t[1],b=t[2],d=t[3],p=r[0],y=r[1],v=r[2],j=r[3];return(a=s*p+f*y+b*v+d*j)<0&&(a=-a,p=-p,y=-y,v=-v,j=-j),1-a>i.a?(o=Math.acos(a),u=Math.sin(o),c=Math.sin((1-n)*o)/u,l=Math.sin(n*o)/u):(c=1-n,l=n),e[0]=c*s+l*p,e[1]=c*f+l*y,e[2]=c*b+l*v,e[3]=c*d+l*j,e}function d(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){var r,n=t[0]+t[4]+t[8];if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);var a=(o+1)%3,i=(o+2)%3;r=Math.sqrt(t[3*o+o]-t[3*a+a]-t[3*i+i]+1),e[o]=.5*r,r=.5/r,e[3]=(t[3*a+i]-t[3*i+a])*r,e[a]=(t[3*a+o]+t[3*o+a])*r,e[i]=(t[3*i+o]+t[3*o+i])*r}return e}function y(e,t,r,n){var o=.5*Math.PI/180;t*=o,r*=o,n*=o;var a=Math.sin(t),i=Math.cos(t),u=Math.sin(r),c=Math.cos(r),l=Math.sin(n),s=Math.cos(n);return e[0]=a*c*s-i*u*l,e[1]=i*u*s+a*c*l,e[2]=i*c*l-a*u*s,e[3]=i*c*s+a*u*l,e}var v=c.c,j=c.k,O=c.a,h=f,w=c.b,g=c.d,m=c.i,C=c.e,M=C,T=c.f,U=T,A=c.j,I=c.g,S=c.h;var V=Object(a.e)(),z=Object(a.g)(1,0,0),F=Object(a.g)(0,1,0);var k=Object(o.b)(),B=Object(o.b)();var x=Object(n.b)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:s,multiply:f,rotateX:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+i*u,e[1]=o*c+a*u,e[2]=a*c-o*u,e[3]=i*c-n*u,e},rotateY:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c-a*u,e[1]=o*c+i*u,e[2]=a*c+n*u,e[3]=i*c-o*u,e},rotateZ:function(e,t,r){r*=.5;var n=t[0],o=t[1],a=t[2],i=t[3],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+o*u,e[1]=o*c-n*u,e[2]=a*c+i*u,e[3]=i*c-a*u,e},calculateW:function(e,t){var r=t[0],n=t[1],o=t[2];return e[0]=r,e[1]=n,e[2]=o,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-o*o)),e},slerp:b,random:function(e){var t=Object(i.b)(),r=Object(i.b)(),n=Object(i.b)(),o=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*n),e[3]=a*Math.cos(2*Math.PI*n),e},invert:function(e,t){var r=t[0],n=t[1],o=t[2],a=t[3],i=r*r+n*n+o*o+a*a,u=i?1/i:0;return e[0]=-r*u,e[1]=-n*u,e[2]=-o*u,e[3]=a*u,e},conjugate:d,fromMat3:p,fromEuler:y,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:v,set:j,add:O,mul:h,scale:w,dot:g,lerp:m,length:C,len:M,squaredLength:T,sqrLen:U,normalize:A,exactEquals:I,equals:S,rotationTo:function(e,t,r){var n=Object(u.e)(t,r);return n<-.999999?(Object(u.d)(V,z,t),Object(u.u)(V)<1e-6&&Object(u.d)(V,F,t),Object(u.o)(V,V),l(e,V,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(u.d)(V,t,r),e[0]=V[0],e[1]=V[1],e[2]=V[2],e[3]=1+n,A(e,e))},sqlerp:function(e,t,r,n,o,a){return b(k,t,o,a),b(B,r,n,a),b(e,k,B,2*a*(1-a)),e},setAxes:function(e,t,r,n){var o=x;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],A(e,p(e,o))}})},1045:function(e,t,r){"use strict";r.d(t,"a",(function(){return I}));var n,o=r(2),a=r(3),i=r(4),u=r(5),c=r(0),l=r(37),s=r(25),f=r(21),b=r(1),d=(r(17),r(13),r(12),r(7)),p=n=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return Object(a.a)(r,[{key:"clone",value:function(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),r}(s.a);Object(c.a)([Object(b.b)({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(c.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),Object(c.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0);var y=p=n=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorModulation")],p),v=new l.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),j=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return r}(s.a);Object(c.a)([Object(b.b)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],j.prototype,"type",void 0);var O,h=j=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],j),w=r(34),g=O=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return Object(a.a)(r,[{key:"clone",value:function(){return new O({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),r}(h);Object(c.a)([Object(w.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],g.prototype,"type",void 0),Object(c.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"size",void 0),Object(c.a)([Object(b.b)({type:Boolean,json:{write:!0}})],g.prototype,"useRealWorldSymbolSizes",void 0);var m,C=g=O=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],g),M=m=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return Object(a.a)(r,[{key:"clone",value:function(){return new m({scaleFactor:this.scaleFactor})}}]),r}(h);Object(c.a)([Object(w.a)({pointCloudSplatAlgorithm:"splat"})],M.prototype,"type",void 0),Object(c.a)([Object(b.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],M.prototype,"scaleFactor",void 0);var T={key:"type",base:h,typeMap:{"fixed-size":C,splat:M=m=Object(c.a)([Object(d.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],M)}},U=Object(l.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),A=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).type=void 0,n.pointSizeAlgorithm=null,n.colorModulation=null,n.pointsPerInch=10,n}return Object(a.a)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:Object(f.a)(this.pointSizeAlgorithm),colorModulation:Object(f.a)(this.colorModulation),pointsPerInch:Object(f.a)(this.pointsPerInch)}}}]),r}(s.a);Object(c.a)([Object(b.b)({type:U.apiValues,readOnly:!0,nonNullable:!0,json:{type:U.jsonValues,read:!1,write:U.write}})],A.prototype,"type",void 0),Object(c.a)([Object(b.b)({types:T,json:{write:!0}})],A.prototype,"pointSizeAlgorithm",void 0),Object(c.a)([Object(b.b)({type:y,json:{write:!0}})],A.prototype,"colorModulation",void 0),Object(c.a)([Object(b.b)({json:{write:!0},nonNullable:!0,type:Number})],A.prototype,"pointsPerInch",void 0),A=Object(c.a)([Object(d.a)("esri.renderers.PointCloudRenderer")],A),(A||(A={})).fieldTransformTypeKebabDict=new l.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var I=A},1117:function(e,t,r){"use strict";function n(){return new Float32Array(3)}function o(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function a(){return n()}function i(){return o(1,1,1)}function u(){return o(1,0,0)}function c(){return o(0,1,0)}function l(){return o(0,0,1)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var s=a(),f=i(),b=u(),d=c(),p=l();Object.freeze({__proto__:null,create:n,clone:function(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:a,ones:i,unitX:u,unitY:c,unitZ:l,ZEROS:s,ONES:f,UNIT_X:b,UNIT_Y:d,UNIT_Z:p})},1174:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n,o=r(11),a=r(2),i=r(3),u=r(4),c=r(5),l=r(0),s=r(21),f=r(1),b=(r(17),r(13),r(12),r(34)),d=r(7),p=r(1045),y=r(282),v=r(558),j=n=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type="point-cloud-stretch",n.field=null,n.legendOptions=null,n.fieldTransformType=null,n.stops=null,n}return Object(i.a)(r,[{key:"clone",value:function(){return new n(Object(o.a)(Object(o.a)({},this.cloneProperties()),{},{field:Object(s.a)(this.field),fieldTransformType:Object(s.a)(this.fieldTransformType),stops:Object(s.a)(this.stops),legendOptions:Object(s.a)(this.legendOptions)}))}}]),r}(p.a);Object(l.a)([Object(b.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],j.prototype,"type",void 0),Object(l.a)([Object(f.b)({json:{write:!0},type:String})],j.prototype,"field",void 0),Object(l.a)([Object(f.b)({type:y.a,json:{write:!0}})],j.prototype,"legendOptions",void 0),Object(l.a)([Object(f.b)({type:p.a.fieldTransformTypeKebabDict.apiValues,json:{type:p.a.fieldTransformTypeKebabDict.jsonValues,read:p.a.fieldTransformTypeKebabDict.read,write:p.a.fieldTransformTypeKebabDict.write}})],j.prototype,"fieldTransformType",void 0),Object(l.a)([Object(f.b)({type:[v.a],json:{write:!0}})],j.prototype,"stops",void 0);var O=j=n=Object(l.a)([Object(d.a)("esri.renderers.PointCloudStretchRenderer")],j)},1215:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n,o=r(11),a=r(2),i=r(3),u=r(4),c=r(5),l=r(0),s=r(21),f=r(1),b=r(17),d=(r(13),r(12),r(34)),p=r(7),y=r(1045),v=r(282),j=r(41),O=r(25),h=n=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new n({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(s.a)(this.color)})}}]),r}(O.a);Object(l.a)([Object(f.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(l.a)([Object(f.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(l.a)([Object(f.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),Object(l.a)([Object(f.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),Object(l.a)([Object(f.b)({type:j.a,json:{type:[b.a],write:!0}})],h.prototype,"color",void 0);var w,g=h=n=Object(l.a)([Object(p.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h),m=w=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type="point-cloud-class-breaks",n.field=null,n.legendOptions=null,n.fieldTransformType=null,n.colorClassBreakInfos=null,n}return Object(i.a)(r,[{key:"clone",value:function(){return new w(Object(o.a)(Object(o.a)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(s.a)(this.colorClassBreakInfos),legendOptions:Object(s.a)(this.legendOptions)}))}}]),r}(y.a);Object(l.a)([Object(d.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),Object(l.a)([Object(f.b)({json:{write:!0},type:String})],m.prototype,"field",void 0),Object(l.a)([Object(f.b)({type:v.a,json:{write:!0}})],m.prototype,"legendOptions",void 0),Object(l.a)([Object(f.b)({type:y.a.fieldTransformTypeKebabDict.apiValues,json:{type:y.a.fieldTransformTypeKebabDict.jsonValues,read:y.a.fieldTransformTypeKebabDict.read,write:y.a.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),Object(l.a)([Object(f.b)({type:[g],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0);var C=m=w=Object(l.a)([Object(p.a)("esri.renderers.PointCloudClassBreaksRenderer")],m)},1216:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n,o=r(11),a=r(2),i=r(3),u=r(4),c=r(5),l=r(0),s=r(21),f=r(1),b=r(17),d=(r(13),r(12),r(34)),p=r(7),y=r(1045),v=r(282),j=r(41),O=r(25),h=n=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return Object(i.a)(r,[{key:"clone",value:function(){return new n({description:this.description,label:this.label,values:Object(s.a)(this.values),color:Object(s.a)(this.color)})}}]),r}(O.a);Object(l.a)([Object(f.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(l.a)([Object(f.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(l.a)([Object(f.b)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),Object(l.a)([Object(f.b)({type:j.a,json:{type:[b.a],write:!0}})],h.prototype,"color",void 0);var w,g=h=n=Object(l.a)([Object(p.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h),m=w=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).type="point-cloud-unique-value",n.field=null,n.fieldTransformType=null,n.colorUniqueValueInfos=null,n.legendOptions=null,n}return Object(i.a)(r,[{key:"clone",value:function(){return new w(Object(o.a)(Object(o.a)({},this.cloneProperties()),{},{field:Object(s.a)(this.field),fieldTransformType:Object(s.a)(this.fieldTransformType),colorUniqueValueInfos:Object(s.a)(this.colorUniqueValueInfos),legendOptions:Object(s.a)(this.legendOptions)}))}}]),r}(y.a);Object(l.a)([Object(d.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),Object(l.a)([Object(f.b)({json:{write:!0},type:String})],m.prototype,"field",void 0),Object(l.a)([Object(f.b)({type:y.a.fieldTransformTypeKebabDict.apiValues,json:{type:y.a.fieldTransformTypeKebabDict.jsonValues,read:y.a.fieldTransformTypeKebabDict.read,write:y.a.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),Object(l.a)([Object(f.b)({type:[g],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),Object(l.a)([Object(f.b)({type:v.a,json:{write:!0}})],m.prototype,"legendOptions",void 0);var C=m=w=Object(l.a)([Object(p.a)("esri.renderers.PointCloudUniqueValueRenderer")],m)},864:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Me}));var n=r(14),o=r(2),a=r(3),i=r(8),u=r(171),c=r(1036);function l(){var e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:l,clone:function(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){var o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}});var s=r(60),f=r(1117),b=r(428),d=r(48),p=r(1215),y=r(1174),v=r(1216),j=r(11),O=r(22),h=r(21),w=r(12),g=!0,m=0,C=10,M=10,T=12,U=16;function A(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+m,C)),version:t.getUint16(r+M,g),checksum:t.getUint32(r+T,g)}}var I=0,S=4,V=8,z=16,F=24,k=32,B=40,x=48,D=56,P=64,_=72,R=80,q=84,N=88;function E(e){var t=new DataView(e,0),r=0,n=A(e,t,r),o=n.identifier,a=n.version;if(r+=U,"LEPCC     "!==o)throw new O.a("lepcc-decode-error","Bad identifier");if(a>1)throw new O.a("lepcc-decode-error","Unknown version");var i,u,c=(u=r,{sizeLo:(i=t).getUint32(u+I,g),sizeHi:i.getUint32(u+S,g),minX:i.getFloat64(u+V,g),minY:i.getFloat64(u+z,g),minZ:i.getFloat64(u+F,g),maxX:i.getFloat64(u+k,g),maxY:i.getFloat64(u+B,g),maxZ:i.getFloat64(u+x,g),errorX:i.getFloat64(u+D,g),errorY:i.getFloat64(u+P,g),errorZ:i.getFloat64(u+_,g),count:i.getUint32(u+R,g),reserved:i.getUint32(u+q,g)});if(r+=N,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new O.a("lepcc-decode-error","Bad size");var l=new Float64Array(3*c.count),s=[],f=[],b=[],d=[];if(r=L(e,r,s),r=L(e,r,f),r=L(e,r,b),(r=L(e,r,d))!==e.byteLength)throw new O.a("lepcc-decode-error","Bad length");for(var p=0,y=0,v=0;v<s.length;v++){y+=s[v];for(var j=0,h=0;h<f[v];h++){j+=b[p];var w=d[p];l[3*p]=Math.min(c.maxX,c.minX+2*c.errorX*j),l[3*p+1]=Math.min(c.maxY,c.minY+2*c.errorY*y),l[3*p+2]=Math.min(c.maxZ,c.minZ+2*c.errorZ*w),p++}}return{errorX:c.errorX,errorY:c.errorY,errorZ:c.errorZ,result:l}}function L(e,t,r){var n=[];t=Y(e,t,n);for(var o=[],a=0;a<n.length;a++){o.length=0,t=Y(e,t,o);for(var i=0;i<o.length;i++)r.push(o[i]+n[a])}return t}function Y(e,t,r){var n=new DataView(e,t),o=n.getUint8(0),a=31&o,i=!!(32&o),u=(192&o)>>6,c=0;if(0===u)c=n.getUint32(1,g),t+=5;else if(1===u)c=n.getUint16(1,g),t+=3;else{if(2!==u)throw new O.a("lepcc-decode-error","Bad count type");c=n.getUint8(1),t+=2}if(i)throw new O.a("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(c*a/8),s=new Uint8Array(e,t,l),f=0,b=0,d=0,p=-1>>>32-a,y=0;y<c;y++){for(;b<a;)f|=s[d]<<b,b+=8,d+=1;r[y]=f&p,f>>>=a,(b-=a)+a>32&&(f|=s[d-1]>>8-b)}return t+d}var Z=0,K=4,X=8,J=12,W=14,H=15,G=16;function Q(e){var t=new DataView(e,0),r=0,n=A(e,t,r),o=n.identifier,a=n.version;if(r+=U,"ClusterRGB"!==o)throw new O.a("lepcc-decode-error","Bad identifier");if(a>1)throw new O.a("lepcc-decode-error","Unknown version");var i,u,c=(u=r,{sizeLo:(i=t).getUint32(u+Z,g),sizeHi:i.getUint32(u+K,g),count:i.getUint32(u+X,g),colorMapCount:i.getUint16(u+J,g),lookupMethod:i.getUint8(u+W),compressionMethod:i.getUint8(u+H)});if(r+=G,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new O.a("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+r!==e.byteLength||c.colorMapCount>256)throw new O.a("lepcc-decode-error","Bad count");for(var l=new Uint8Array(e,r,3*c.colorMapCount),s=new Uint8Array(e,r+3*c.colorMapCount,c.count),f=new Uint8Array(3*c.count),b=0;b<c.count;b++){var d=s[b];f[3*b]=l[3*d],f[3*b+1]=l[3*d+1],f[3*b+2]=l[3*d+2]}return f}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+r!==e.byteLength||0!==c.colorMapCount)throw new O.a("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(r+3!==e.byteLength||1!==c.colorMapCount)throw new O.a("lepcc-decode-error","Bad count");for(var p=t.getUint8(r),y=t.getUint8(r+1),v=t.getUint8(r+2),j=new Uint8Array(3*c.count),h=0;h<c.count;h++)j[3*h]=p,j[3*h+1]=y,j[3*h+2]=v;return j}throw new O.a("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}var $=0,ee=4,te=8,re=12,ne=14,oe=15,ae=16;function ie(e){var t=new DataView(e,0),r=0,n=A(e,t,r),o=n.identifier,a=n.version;if(r+=U,"Intensity "!==o)throw new O.a("lepcc-decode-error","Bad identifier");if(a>1)throw new O.a("lepcc-decode-error","Unknown version");var i,u,c=(u=r,{sizeLo:(i=t).getUint32(u+$,g),sizeHi:i.getUint32(u+ee,g),count:i.getUint32(u+te,g),scaleFactor:i.getUint16(u+re,g),bitsPerPoint:i.getUint8(u+ne),reserved:i.getUint8(u+oe)});if(r+=ae,c.sizeHi*Math.pow(2,32)+c.sizeLo!==e.byteLength)throw new O.a("lepcc-decode-error","Bad size");var l=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+r!==e.byteLength)throw new O.a("lepcc-decode-error","Bad size");for(var s=new Uint8Array(e,r,c.count),f=0;f<c.count;f++)l[f]=s[f]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+r!==e.byteLength)throw new O.a("lepcc-decode-error","Bad size");for(var b=new Uint16Array(e,r,c.count),d=0;d<c.count;d++)l[d]=b[d]*c.scaleFactor}else{var p=[];if(Y(e,r,p)!==e.byteLength)throw new O.a("lepcc-decode-error","Bad size");for(var y=0;y<c.count;y++)l[y]=p[y]*c.scaleFactor}return l}var ue=w.a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function ce(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new O.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var i=(31&a)<<6|63&e[t+o+1];n+=String.fromCharCode(i),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new O.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var u=(15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(u),o+=3}else{if(!(a>=240&&a<248))throw new O.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new O.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(c>=65536){var l=55296+(c-65536>>10),s=56320+(1023&c);n+=String.fromCharCode(l,s)}else n+=String.fromCharCode(c);o+=4}}return n}function le(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var a=t[o],i=a.valueType||a.type,u=ye[i];r.fields[a.property]=u(e,n),n+=pe[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function se(e,t){return new(0,pe[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function fe(e,t,r){if(t!==e&&ue.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new O.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}var be={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function de(e,t,r){if("lepcc-rgb"===e.encoding)return Q(t);if("lepcc-intensity"===e.encoding)return ie(t);if(null!=e.encoding&&""!==e.encoding)throw new O.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(ue.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(ue.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=function(e,t,r){for(var n=null!=t.header?le(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},a=n.byteCount,i=0;i<t.ordering.length;i++){var u=t.ordering[i],c=Object(h.a)(t[u]);if(c.count=n.fields.count,"String"===c.valueType){if(c.byteOffset=a,c.byteCount=n.fields[u+"ByteCount"],"UTF-8"!==c.encoding)throw new O.a("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding})}else{if(!ve(c.valueType))throw new O.a("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});var l=je(c.valueType);a+=a%l!=0?l-a%l:0,c.byteOffset=a,c.byteCount=l*c.valuesPerElement*c.count}a+=c.byteCount,o.entries[u]=c}return o.byteCount=a-o.byteOffset,o}(t,e,r);fe(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,i=se(t,a),u=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,r){var n,o,a=[],i=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(ce(r,i,n-1)),0!==r[i+n-1])throw new O.a("string-array-error","Invalid string array: missing null termination.")}else a.push(null);i+=n}return a}(a.count,i,u)}return se(t,o)}throw new O.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var pe={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ye={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function ve(e){return pe.hasOwnProperty(e)}function je(e){return ve(e)?pe[e].BYTES_PER_ELEMENT:0}function Oe(e,t){if(null==e.encoding||""===e.encoding){var r=function(e,t){var r,o=le(e,t&&t.header),a=o.byteCount,i={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},u=o.fields,c=null!=u.vertexCount?u.vertexCount:u.count,l=Object(n.a)(t.ordering);try{for(l.s();!(r=l.n()).done;){var s=r.value;if(t.vertexAttributes[s]){var f=Object(j.a)(Object(j.a)({},t.vertexAttributes[s]),{},{byteOffset:a,count:c}),b=be[s]?be[s]:"_"+s;i.vertexAttributes[b]=f,a+=je(f.valueType)*f.valuesPerElement*c}}}catch(M){l.e(M)}finally{l.f()}var d=u.faceCount;if(t.faces&&d){i.faces={};var p,y=Object(n.a)(t.ordering);try{for(y.s();!(p=y.n()).done;){var v=p.value;if(t.faces[v]){var O=Object(j.a)(Object(j.a)({},t.faces[v]),{},{byteOffset:a,count:d});i.faces[v]=O,a+=je(O.valueType)*O.valuesPerElement*d}}}catch(M){y.e(M)}finally{y.f()}}var h=u.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&h){i.featureAttributes={};var w,g=Object(n.a)(t.featureAttributeOrder);try{for(g.s();!(w=g.n()).done;){var m=w.value;if(t.featureAttributes[m]){var C=Object(j.a)(Object(j.a)({},t.featureAttributes[m]),{},{byteOffset:a,count:h});i.featureAttributes[m]=C,a+=("UInt64"===C.valueType?8:je(C.valueType))*C.valuesPerElement*h}}}catch(M){g.e(M)}finally{g.f()}}return fe(a,e.byteLength,"geometry"),i.byteCount=a-i.byteOffset,i}(t,e);if(Object(i.i)(r.vertexAttributes.position))return;for(var o=se(t,r.vertexAttributes.position),a=r.header.fields,u=[a.offsetX,a.offsetY,a.offsetZ],c=[a.scaleX,a.scaleY,a.scaleZ],l=o.length/3,s=new Float64Array(3*l),f=0;f<l;f++)s[3*f]=o[3*f]*c[0]+u[0],s[3*f+1]=o[3*f+1]*c[1]+u[1],s[3*f+2]=o[3*f+2]*c[2]+u[2];return s}if("lepcc-xyz"===e.encoding)return E(t).result}function he(e,t,r){return Object(i.j)(e)&&e.attributeInfo.useElevation?function(e,t){for(var r=new Float64Array(t),n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):Object(i.j)(e)?de(e.attributeInfo.storageInfo,e.buffer,r):null}function we(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function ge(e){var t,r=0,o=Object(n.a)(e||[]);try{for(o.s();!(t=o.n()).done;){r|=1<<t.value}}catch(a){o.e(a)}finally{o.f()}return r}var me=function(){function e(){Object(o.a)(this,e)}return Object(a.a)(e,[{key:"transform",value:function(e){var t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];Object(i.j)(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);var o,a=Object(n.a)(t.attributes);try{for(a.s();!(o=a.n()).done;){var c=o.value;"buffer"in c.values&&Object(u.c)(c.values.buffer)&&c.values.buffer!==t.rgb.buffer&&r.push(c.values.buffer)}}catch(l){a.e(l)}finally{a.f()}return Promise.resolve({result:t,transferList:r})}},{key:"_transform",value:function(e){var t=Oe(e.schema,e.geometryBuffer),r=t.length/3,o=null,a=[],u=he(e.primaryAttributeData,t,r);Object(i.j)(e.primaryAttributeData)&&u&&a.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:u});var c=he(e.modulationAttributeData,t,r);Object(i.j)(e.modulationAttributeData)&&c&&a.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:c});var l=function(e,t,r,n){var o=e.rendererJSON,a=e.isRGBRenderer,i=null,u=null;if(t&&a)i=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){var c=(u=v.a.fromJSON(o)).colorUniqueValueInfos;i=new Uint8Array(3*n);for(var l=we(u.fieldTransformType),s=0;s<n;s++)for(var f=(l?l(t[s]):t[s])+"",b=0;b<c.length;b++)if(c[b].values.indexOf(f)>=0){i[3*s]=c[b].color.r,i[3*s+1]=c[b].color.g,i[3*s+2]=c[b].color.b;break}}else if(t&&"pointCloudStretchRenderer"===o.type){var d=(u=y.a.fromJSON(o)).stops;i=new Uint8Array(3*n);for(var j=we(u.fieldTransformType),O=0;O<n;O++){var h=j?j(t[O]):t[O],w=d.length-1;if(h<d[0].value)i[3*O]=d[0].color.r,i[3*O+1]=d[0].color.g,i[3*O+2]=d[0].color.b;else if(h>=d[w].value)i[3*O]=d[w].color.r,i[3*O+1]=d[w].color.g,i[3*O+2]=d[w].color.b;else for(var g=1;g<d.length;g++)if(h<d[g].value){var m=(h-d[g-1].value)/(d[g].value-d[g-1].value);i[3*O]=d[g].color.r*m+d[g-1].color.r*(1-m),i[3*O+1]=d[g].color.g*m+d[g-1].color.g*(1-m),i[3*O+2]=d[g].color.b*m+d[g-1].color.b*(1-m);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){var C=(u=p.a.fromJSON(o)).colorClassBreakInfos;i=new Uint8Array(3*n);for(var M=we(u.fieldTransformType),T=0;T<n;T++)for(var U=M?M(t[T]):t[T],A=0;A<C.length;A++)if(U>=C[A].minValue&&U<=C[A].maxValue){i[3*T]=C[A].color.r,i[3*T+1]=C[A].color.g,i[3*T+2]=C[A].color.b;break}}else{i=new Uint8Array(3*n);for(var I=0;I<i.length;I++)i[I]=255}if(r&&u&&u.colorModulation)for(var S=u.colorModulation.minValue,V=u.colorModulation.maxValue,z=0;z<n;z++){var F=r[z],k=F>=V?1:F<=S?.3:.3+.7*(F-S)/(V-S);i[3*z]=k*i[3*z],i[3*z+1]=k*i[3*z+1],i[3*z+2]=k*i[3*z+2]}return i}(e.rendererInfo,u,c,r);if(e.filterInfo&&e.filterInfo.length>0&&Object(i.j)(e.filterAttributesData)){var s=e.filterAttributesData.map((function(e){var n=he(e,t,r),o={attributeInfo:e.attributeInfo,values:n};return a.push(o),o}));o=new Uint32Array(r),r=function(e,t,r,o,a){for(var i=e.length/3,u=0,c=0;c<i;c++){for(var l=!0,s=0;s<o.length&&l;s++){var f=o[s].filterJSON,b=a[s].values[c];switch(f.type){case"pointCloudValueFilter":var d="exclude"===f.mode;-1!==f.values.indexOf(b)===d&&(l=!1);break;case"pointCloudBitfieldFilter":var p=ge(f.requiredSetBits),y=ge(f.requiredClearBits);(b&p)===p&&0==(b&y)||(l=!1);break;case"pointCloudReturnFilter":var v,j=15&b,O=b>>>4&15,h=O>1,w=1===j,g=j===O,m=!1,C=Object(n.a)(f.includedReturns);try{for(C.s();!(v=C.n()).done;){var M=v.value;if("last"===M&&g||"firstOfMany"===M&&w&&h||"lastOfMany"===M&&g&&h||"single"===M&&!h){m=!0;break}}}catch(T){C.e(T)}finally{C.f()}m||(l=!1)}}l&&(r[u]=c,e[3*u]=e[3*c],e[3*u+1]=e[3*c+1],e[3*u+2]=e[3*c+2],t[3*u]=t[3*c],t[3*u+1]=t[3*c+1],t[3*u+2]=t[3*c+2],u++)}return u}(t,l,o,e.filterInfo,s)}var f,b=Object(n.a)(e.userAttributesData);try{for(b.s();!(f=b.n()).done;){var j=f.value,O=he(j,t,r);a.push({attributeInfo:j.attributeInfo,values:O})}}catch(w){b.e(w)}finally{b.f()}3*r<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);var h=this._transformCoordinates(t,r,e.obb,d.a.fromJSON(e.inSR),d.a.fromJSON(e.outSR));return{obb:e.obb,points:h,rgb:l,attributes:a,pointIdFilterMap:o}}},{key:"_transformCoordinates",value:function(e,t,r,n,o){if(!Object(b.i)(e,n,0,e,o,0,t))throw Error("Can't reproject");var a=Object(f.b)(r.center[0],r.center[1],r.center[2]),i=Object(f.a)(),u=Object(f.a)();Object(c.a)(Ce,r.quaternion);for(var l=new Float32Array(3*t),d=0;d<t;d++)i[0]=e[3*d]-a[0],i[1]=e[3*d+1]-a[1],i[2]=e[3*d+2]-a[2],Object(s.q)(u,i,Ce),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),l[3*d]=i[0],l[3*d+1]=i[1],l[3*d+2]=i[2];return l}},{key:"_applyElevationOffsetInPlace",value:function(e,t,r){if(0!==r)for(var n=0;n<t;n++)e[3*n+2]+=r}}]),e}(),Ce=l();function Me(){return new me}},982:function(e,t,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,n,o,a,i,u,c){return[e,t,r,n,o,a,i,u,c]},createView:o})}}]);
//# sourceMappingURL=61.cf56ef20.chunk.js.map