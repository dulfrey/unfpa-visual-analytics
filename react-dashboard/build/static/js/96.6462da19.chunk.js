(this["webpackJsonpunfpa-front"]=this["webpackJsonpunfpa-front"]||[]).push([[96,158],{1233:function(e,n,r){"use strict";r.r(n),r.d(n,"hydratedAdapter",(function(){return c}));var t=r(57),i=r(209),a=r(54),u=r(121),o=r(118),c={convertToGEGeometry:function(e,n){if(null==n)return null;var r="cache"in n?n.cache._geVersion:void 0;return null==r&&(r=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=r)),r},exportPoint:function(e,n,r){var t=e.hasZ(n),i=e.hasM(n),u=new a.a({x:e.getPointX(n),y:e.getPointY(n),spatialReference:r});return t&&(u.z=e.getPointZ(n)),i&&(u.m=e.getPointM(n)),u.cache._geVersion=n,u},exportPolygon:function(e,n,r){var t=new u.a({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:r});return t.cache._geVersion=n,t},exportPolyline:function(e,n,r){var t=new o.a({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:r});return t.cache._geVersion=n,t},exportMultipoint:function(e,n,r){var t=new i.a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:r});return t.cache._geVersion=n,t},exportExtent:function(e,n,r){var i=e.hasZ(n),a=e.hasM(n),u=new t.a({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:r});if(i){var o=e.getZExtent(n);u.zmin=o.vmin,u.zmax=o.vmax}if(a){var c=e.getMExtent(n);u.mmin=c.vmin,u.mmax=c.vmax}return u.cache._geVersion=n,u}}},1353:function(e,n,r){"use strict";r.r(n),r.d(n,"buffer",(function(){return P})),r.d(n,"clip",(function(){return o})),r.d(n,"contains",(function(){return d})),r.d(n,"convexHull",(function(){return m})),r.d(n,"crosses",(function(){return f})),r.d(n,"cut",(function(){return c})),r.d(n,"densify",(function(){return L})),r.d(n,"difference",(function(){return w})),r.d(n,"disjoint",(function(){return y})),r.d(n,"distance",(function(){return s})),r.d(n,"equals",(function(){return l})),r.d(n,"extendedSpatialReferenceInfo",(function(){return u})),r.d(n,"flipHorizontal",(function(){return b})),r.d(n,"flipVertical",(function(){return D})),r.d(n,"generalize",(function(){return H})),r.d(n,"geodesicArea",(function(){return Y})),r.d(n,"geodesicBuffer",(function(){return Z})),r.d(n,"geodesicDensify",(function(){return N})),r.d(n,"geodesicLength",(function(){return j})),r.d(n,"intersect",(function(){return M})),r.d(n,"intersects",(function(){return p})),r.d(n,"isSimple",(function(){return G})),r.d(n,"nearestCoordinate",(function(){return I})),r.d(n,"nearestVertex",(function(){return S})),r.d(n,"nearestVertices",(function(){return z})),r.d(n,"offset",(function(){return V})),r.d(n,"overlaps",(function(){return A})),r.d(n,"planarArea",(function(){return O})),r.d(n,"planarLength",(function(){return X})),r.d(n,"relate",(function(){return v})),r.d(n,"rotate",(function(){return J})),r.d(n,"simplify",(function(){return x})),r.d(n,"symmetricDifference",(function(){return E})),r.d(n,"touches",(function(){return h})),r.d(n,"union",(function(){return R})),r.d(n,"within",(function(){return g}));var t=r(1113),i=r(1233);function a(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function u(e){return t.G.extendedSpatialReferenceInfo(e)}function o(e,n){return t.G.clip(i.hydratedAdapter,a(e),e,n)}function c(e,n){return t.G.cut(i.hydratedAdapter,a(e),e,n)}function d(e,n){return t.G.contains(i.hydratedAdapter,a(e),e,n)}function f(e,n){return t.G.crosses(i.hydratedAdapter,a(e),e,n)}function s(e,n,r){return t.G.distance(i.hydratedAdapter,a(e),e,n,r)}function l(e,n){return t.G.equals(i.hydratedAdapter,a(e),e,n)}function p(e,n){return t.G.intersects(i.hydratedAdapter,a(e),e,n)}function h(e,n){return t.G.touches(i.hydratedAdapter,a(e),e,n)}function g(e,n){return t.G.within(i.hydratedAdapter,a(e),e,n)}function y(e,n){return t.G.disjoint(i.hydratedAdapter,a(e),e,n)}function A(e,n){return t.G.overlaps(i.hydratedAdapter,a(e),e,n)}function v(e,n,r){return t.G.relate(i.hydratedAdapter,a(e),e,n,r)}function G(e){return t.G.isSimple(i.hydratedAdapter,a(e),e)}function x(e){return t.G.simplify(i.hydratedAdapter,a(e),e)}function m(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.G.convexHull(i.hydratedAdapter,a(e),e,n)}function w(e,n){return t.G.difference(i.hydratedAdapter,a(e),e,n)}function E(e,n){return t.G.symmetricDifference(i.hydratedAdapter,a(e),e,n)}function M(e,n){return t.G.intersect(i.hydratedAdapter,a(e),e,n)}function R(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.G.union(i.hydratedAdapter,a(e),e,n)}function V(e,n,r,u,o,c){return t.G.offset(i.hydratedAdapter,a(e),e,n,r,u,o,c)}function P(e,n,r){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.G.buffer(i.hydratedAdapter,a(e),e,n,r,u)}function Z(e,n,r,u,o,c){return t.G.geodesicBuffer(i.hydratedAdapter,a(e),e,n,r,u,o,c)}function I(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.G.nearestCoordinate(i.hydratedAdapter,a(e),e,n,r)}function S(e,n){return t.G.nearestVertex(i.hydratedAdapter,a(e),e,n)}function z(e,n,r,u){return t.G.nearestVertices(i.hydratedAdapter,a(e),e,n,r,u)}function _(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function J(e,n,r){var i;if(null==e)throw new Error("Illegal Argument Exception");var a=e.spatialReference;if(null==(r=null!=(i=r)?i:_(e)))throw new Error("Illegal Argument Exception");var u=e.constructor.fromJSON(t.G.rotate(e,n,r));return u.spatialReference=a,u}function b(e,n){var r;if(null==e)throw new Error("Illegal Argument Exception");var i=e.spatialReference;if(null==(n=null!=(r=n)?r:_(e)))throw new Error("Illegal Argument Exception");var a=e.constructor.fromJSON(t.G.flipHorizontal(e,n));return a.spatialReference=i,a}function D(e,n){var r;if(null==e)throw new Error("Illegal Argument Exception");var i=e.spatialReference;if(null==(n=null!=(r=n)?r:_(e)))throw new Error("Illegal Argument Exception");var a=e.constructor.fromJSON(t.G.flipVertical(e,n));return a.spatialReference=i,a}function H(e,n,r,u){return t.G.generalize(i.hydratedAdapter,a(e),e,n,r,u)}function L(e,n,r){return t.G.densify(i.hydratedAdapter,a(e),e,n,r)}function N(e,n,r){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.G.geodesicDensify(i.hydratedAdapter,a(e),e,n,r,u)}function O(e,n){return t.G.planarArea(i.hydratedAdapter,a(e),e,n)}function X(e,n){return t.G.planarLength(i.hydratedAdapter,a(e),e,n)}function Y(e,n,r){return t.G.geodesicArea(i.hydratedAdapter,a(e),e,n,r)}function j(e,n,r){return t.G.geodesicLength(i.hydratedAdapter,a(e),e,n,r)}}}]);
//# sourceMappingURL=96.6462da19.chunk.js.map