(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[42],{670:function(e,t,n){},672:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=672},673:function(e,t,n){},693:function(e,t,n){},699:function(e,t,n){},810:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),r=n(200),i=n.n(r),u=(n(670),n(24)),s=n(350),o=n(641),l=n(414),O=n(130),d=n(102),j=(n(673),n(18));var b=function(e){var t=Object(a.useState)({layerId:e.data[0].layerId,dataToRender:e.data[0].values}),n=Object(u.a)(t,2),r=n[0],i=n[1],b=e.data,f=Object(a.useRef)(null),p={type:"simple-fill",color:"#DCDCDC"};function m(){var e="";return 0===r.layerId?e="MPIO_CDPMP":1===r.layerId&&(e="DPTO_CCDGO"),e}function h(e,t,n){try{var a=e.results[0].graphic.attributes,c=m(),i=function(e){var t="";return 0===r.layerId?t=e.MPIO_CDPMP:1===r.layerId&&(t=e.DPTO_CCDGO),t}(a),u={type:"unique-value",field:c,uniqueValueInfos:[{value:i,symbol:{type:"simple-fill",color:"blue",outline:{color:"orange",width:3}}}],defaultSymbol:p};t.renderer=u}catch(o){var s={type:"unique-value",field:m(),uniqueValueInfos:n,defaultSymbol:p};t.renderer=s}}return Object(a.useEffect)((function(){e.showCountyView;Object.entries(e.realData).map((function(e){Object.values(e)}))}),[e.realData,e.showCountyView]),Object(a.useEffect)((function(){if(f.current){var t,n=new l.a({basemap:"gray"}),a=new s.default({portalItem:{id:"1e6958a958ac4fcdac8fb14dd97f8734"},popupEnabled:!1,layerId:r.layerId}),c=new O.a,i=new d.a;i.color="#999999",i.width=.5,c.outline=i,t=r.dataToRender.map((function(e){return function(e){var t=e.COLOR,n=e.MPIO_CDPMP;return 0===r.layerId?n=e.MPIO_CDPMP:1===r.layerId&&(n=e.DPTO_CCDGO),{value:n,symbol:{type:"simple-fill",color:t}}}(e)}));var u={type:"unique-value",field:m(),uniqueValueInfos:t,defaultSymbol:p};a.renderer=u,n.add(a);var j=new o.a({container:f.current,map:n,center:[-74,5],zoom:6});j.on("click",(function(n){j.hitTest(n).then((function(n){h(n,a,t,e.doSomenthing)}))}))}}),[r]),Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{className:"t-container",children:Object(j.jsx)("ul",{className:"t-tabs",children:b.map((function(e){return Object(j.jsx)("li",{className:"t-tab",onClick:function(){return function(e){i({layerId:e.layerId,dataToRender:e.values})}(e)},children:e.name})}))})}),Object(j.jsx)("div",{className:"mapDiv",style:{width:"50vw",height:"40vh"},ref:f})]})},f=n(916),p=n(6),m=n.n(p),h=n(27),v=n(11),C=n(15),x=n(10),y=n(675),P="unfpa_dev",g="vpaD6tzHR9",w=function(){var e=Object(C.a)(m.a.mark((function e(t,n,a){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/data/",{params:{cities:t.join(),years:n.join(),variables:a.join()},auth:{username:P,password:g}});case 3:return c=e.sent,e.next=6,c.data.data;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["Bochalema","Marinilla"]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/counties/",{auth:{username:P,password:g}});case 3:return t=e.sent,e.next=6,t.data.data;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(C.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/county-cities/",{params:{counties:t.join()},auth:{username:P,password:g}});case 3:return n=e.sent,e.next=6,n.data.data;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(C.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/variables/",{auth:{username:P,password:g}});case 3:return t=e.sent,e.next=6,t.data.data;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/filter_years/",{params:{variables:t.join()},auth:{username:P,password:g}});case 3:return n=e.sent,e.next=6,n.data.data;case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),N=n(908),S=n(917),T=n(914),k=n(911),B=n(905),E=n(912),L=n(918),V=n(910),F=(n(693),"cities"),A="years",G="variables",q="county",Z="counties",z="cities",H="capital_cities";function J(e){var t,n,c=Object(a.useState)((t={},Object(x.a)(t,F,!1),Object(x.a)(t,A,!1),Object(x.a)(t,G,!1),Object(x.a)(t,q,!1),t)),r=Object(u.a)(c,2),i=r[0],s=r[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),O=l[0],d=l[1],b=Object(a.useState)([]),f=Object(u.a)(b,2),p=f[0],y=f[1],P=Object(a.useState)([]),g=Object(u.a)(P,2),J=g[0],U=g[1],Y=Object(a.useState)([]),K=Object(u.a)(Y,2),Q=K[0],W=K[1],X=Object(a.useState)([]),$=Object(u.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)((n={},Object(x.a)(n,F,[]),Object(x.a)(n,A,[]),Object(x.a)(n,G,[]),Object(x.a)(n,q,[]),n)),ae=Object(u.a)(ne,2),ce=ae[0],re=ae[1],ie=Object(a.useState)(Z),ue=Object(u.a)(ie,2),se=ue[0],oe=ue[1];function le(){return le=Object(C.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}Object(a.useEffect)((function(){0===p.length&&_().then((function(e){y(e)})),0===J.length&&M().then((function(e){U(e)})),0===Q.length&&D().then((function(e){W(e)})),ce.cities.length>0&&ce.variables.length>0&&ce.years.length>0&&w(ce.cities,ce.years,ce.variables).then((function(t){e.setData(t)}))}),[ce]);var Oe=function(e,t){var n="string"===typeof e?e.split(","):e;re((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},t,n))}))},de=function(e){s((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(x.a)({},e,!1))}))},je=function(e){s((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(x.a)({},e,!0))}))};return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsxs)("div",{className:"menu-item",children:[Object(j.jsxs)("button",{className:"menu-btn",children:["Tipo de Entidad ",Object(j.jsx)("i",{className:"fa fa-angle-down"})]}),Object(j.jsx)("div",{className:"dropdown-content",children:Object(j.jsx)(E.a,{"aria-label":"tipo-de-entidad",defaultValue:"departamento",name:"radio-buttons-group",onChange:function(t){var n=t.target.value;oe(t.target.value),n===z?e.setShowCountyView(!0):e.setShowCountyView(!1)},value:se,children:Object(j.jsx)(L.a,{value:z,control:Object(j.jsx)(V.a,{}),label:"Municipio"})})})]}),Object(j.jsxs)("div",{className:"menu-item",children:[Object(j.jsxs)("button",{id:"openMenu",className:"menu-btn",onClick:function(){je(G)},children:["Indicadores ",Object(j.jsx)("i",{className:"fa fa-angle-down"})]}),Object(j.jsx)(N.a,{multiple:!0,value:e.selectedVariables,onChange:function(t){e.setSelectedVariables(t.target.value),d(!0),function(e){return le.apply(this,arguments)}(t.target.value).then((function(e){void 0!==e&&(te(e),re((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(x.a)({},A,e))})))})).then((function(){d(!1)})),re((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},G,t.target.value))}))},input:Object(j.jsx)(S.a,{id:"select-multiple-checkbox"}),style:{display:"none"},open:i.variables,onClose:function(){de(G)},MenuProps:{anchorEl:document.getElementById("openMenu")},children:p.map((function(t,n){return Object(j.jsxs)(T.a,{value:t,children:[Object(j.jsx)(k.a,{checked:e.selectedVariables.indexOf(t)>-1}),Object(j.jsx)(B.a,{primary:t})]},t+n)}))})]}),function(){if(se===Z||se===z)return Object(j.jsxs)("div",{className:"menu-item",children:[Object(j.jsxs)("button",{id:"open-departments-menu",className:"menu-btn",onClick:function(){je(q)},children:["Departamentos ",Object(j.jsx)("i",{className:"fa fa-angle-down"})]}),Object(j.jsx)(N.a,{multiple:!0,value:ce.county,onChange:function(e){var t;t=e.target.value,se===z&&I(t).then((function(e){var t=[];Object.entries(e).forEach((function(e){t.push.apply(t,Object(h.a)(e[1]))})),U(Object(h.a)(new Set(t)))})),re((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},q,t))}))},input:Object(j.jsx)(S.a,{id:"select-multiple-checkbox"}),style:{display:"none"},open:i.county,onClose:function(){de(q)},MenuProps:{anchorEl:document.getElementById("open-departments-menu")},children:Q.map((function(e,t){return Object(j.jsxs)(T.a,{value:e,children:[Object(j.jsx)(k.a,{checked:ce.county.indexOf(e)>-1}),Object(j.jsx)(B.a,{primary:e})]},e+t)}))})]})}(),function(){if(e.showCountyView||se===H)return Object(j.jsxs)("div",{className:"menu-item",children:[Object(j.jsxs)("button",{id:"open-cities-menu",className:"menu-btn",onClick:function(){je(F)},children:["Municipios ",Object(j.jsx)("i",{className:"fa fa-angle-down"})]}),Object(j.jsx)(N.a,{multiple:!0,value:ce.cities,onChange:function(e){Oe(e.target.value,F)},input:Object(j.jsx)(S.a,{id:"select-multiple-checkbox"}),style:{display:"none"},open:i.cities,onClose:function(){de(F)},MenuProps:{anchorEl:document.getElementById("open-cities-menu")},children:J.map((function(e,t){return Object(j.jsxs)(T.a,{value:e,children:[Object(j.jsx)(k.a,{checked:ce.cities.indexOf(e)>-1}),Object(j.jsx)(B.a,{primary:e})]},e+t)}))})]})}(),Object(j.jsxs)("div",{className:"menu-item",children:[Object(j.jsxs)("button",{id:"open-years-menu",className:"menu-btn",disabled:O,onClick:function(){je(A)},children:[" ","A\xf1os ",Object(j.jsx)("i",{className:"fa fa-angle-down"})]}),Object(j.jsx)(N.a,{multiple:!0,value:ce.years,onChange:function(e){Oe(e.target.value,A)},input:Object(j.jsx)(S.a,{id:"select-multiple-checkbox"}),style:{display:"none"},open:i.years,onClose:function(){de(A)},MenuProps:{anchorEl:document.getElementById("open-years-menu")},children:ee.map((function(e,t){return Object(j.jsxs)(T.a,{value:e,children:[Object(j.jsx)(k.a,{checked:ce.years.indexOf(e)>-1}),Object(j.jsx)(B.a,{primary:e})]},e+t)}))})]})]})})}n(699);var U=n(642);var Y=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([{key:"municipio",type:"point",padding:0,values:c.map((function(e){return e.municipio})),legend:"Municipio",legendPosition:"start",legendOffset:-20}]),s=Object(u.a)(i,2),o=s[0],l=s[1];Object(a.useEffect)((function(){if(void 0!==e.data){var t=[];Object.entries(e.data).forEach((function(e){var n=Object(u.a)(e,2),a=n[0],c=n[1];Object.entries(c).forEach((function(e){var n=Object(u.a)(e,2),c=n[0],r=n[1],i={};i[a]=Object.entries(r)[0][1][2],i.municipio=c,t.push(i)}))})),t.length>0&&(l(O()),r((n=t,Object.values(n.reduce((function(e,t){var n=t.municipio,a=e[n];return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},n,Object(v.a)(Object(v.a)({},a),t)))}),{})))))}var n}),[e.data]);var O=function(){var e=[{key:"municipio",type:"point",padding:0,values:c.map((function(e){return e.municipio})),legend:"Municipio",legendPosition:"start",legendOffset:-20,color:"red"}];if(c.length>0){var t=Object.keys(c[0]).filter((function(e){return"municipio"!==e})).map((function(e){return{key:e,type:"linear",min:"auto",max:"auto",ticksPosition:"before",legend:e,legendPosition:"start",legendOffset:20}}));e=e.concat(t)}return e};return Object(j.jsx)("div",{style:{width:"50vw",height:"1500px"},children:Object(j.jsx)(U.a,{data:c,reverse:!0,variables:o,margin:{top:50,right:60,bottom:50,left:60},colors:{scheme:"purple_red"},lineOpacity:1})})},K=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)([]),O=Object(u.a)(l,2),d=O[0],p=O[1],m=Object(a.useState)([{name:"Demo 1",layerId:0,values:[{MPIO_CDPMP:5893,MPIO_CNMBR:"YOND\xd3",COLOR:"#fc0000"},{MPIO_CDPMP:5895,MPIO_CNMBR:"ZARAGOZA",COLOR:"#dd6174"},{MPIO_CDPMP:23001,MPIO_CNMBR:"MONTER\xcdA",COLOR:"#ed9189"},{MPIO_CDPMP:23068,MPIO_CNMBR:"AYAPEL",COLOR:"#ea5261"}]},{name:"Demo 2",layerId:0,values:[{MPIO_CDPMP:70820,MPIO_CNMBR:"Santiago de",COLOR:"#fc0000"},{MPIO_CDPMP:73001,MPIO_CNMBR:"Ibagu\xe9",COLOR:"#dd6174"},{MPIO_CDPMP:68895,MPIO_CNMBR:"Zapatoca",COLOR:"#ed9189"},{MPIO_CDPMP:63001,MPIO_CNMBR:"Armenia",COLOR:"#ea5261"}]},{name:"Demo 3",layerId:1,values:[{DPTO_CCDGO:5,FIRST_DPTO_CNMBR:"Antioquia",COLOR:"#fc0000"},{DPTO_CCDGO:8,FIRST_DPTO_CNMBR:"Atl\xe1ntico",COLOR:"#dd6174"},{DPTO_CCDGO:13,FIRST_DPTO_CNMBR:"Bol\xedvar",COLOR:"#ed9189"},{DPTO_CCDGO:17,FIRST_DPTO_CNMBR:"Caldas",COLOR:"#ea5261"}]}]),h=Object(u.a)(m,2),v=h[0],C=h[1];return Object(a.useEffect)((function(){var e=s?0:1,t=d.map((function(t){return{name:t,layerId:e,values:[{DPTO_CCDGO:5,FIRST_DPTO_CNMBR:"Antioquia",COLOR:"#fc0000"},{DPTO_CCDGO:8,FIRST_DPTO_CNMBR:"Atl\xe1ntico",COLOR:"#dd6174"},{DPTO_CCDGO:13,FIRST_DPTO_CNMBR:"Bol\xedvar",COLOR:"#ed9189"},{DPTO_CCDGO:17,FIRST_DPTO_CNMBR:"Caldas",COLOR:"#ea5261"}]}}));t.length>0&&C(t)}),[d,s]),Object(j.jsxs)(f.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(j.jsx)(f.a,{item:!0,xs:12,children:Object(j.jsx)(J,{showCountyView:s,setShowCountyView:o,selectedVariables:d,setSelectedVariables:p,setData:c})}),Object(j.jsxs)(f.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)(f.a,{item:!0,xs:12,md:6,style:{height:"calc( 100vh - 52px )",overflow:"auto"},children:Object(j.jsx)(Y,{data:n})}),Object(j.jsxs)(f.a,{container:!0,xs:12,md:6,style:{minHeight:"80vh"},direction:"column",justifyContent:"center",alignItems:"center",children:[Object(j.jsx)(f.a,{item:!0,xs:12,style:{width:"50vw",height:"40vh"},children:Object(j.jsx)(b,{data:v,realData:n,showCountyView:s})}),Object(j.jsx)(f.a,{item:!0,xs:12,style:{width:"50vw",height:"40vh"},children:Object(j.jsxs)("div",{style:{overflow:"auto"},children:[Object(j.jsx)("p",{children:"Panel detalle indicador"}),n.length&&Object(j.jsx)("ul",{children:n.slice(0,15).map((function(e){return Object(j.jsx)("li",{children:"".concat(e.Divipola," (").concat(e.Municipio," - ").concat(e.Departamento,") tiene ").concat(e.Mujeres," mujeres")})}))})]})})]})]})]})},Q=function(e){e&&e instanceof Function&&n.e(195).then(n.bind(null,1352)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),Q()}},[[810,43,44]]]);
//# sourceMappingURL=main.f8abf2cf.chunk.js.map