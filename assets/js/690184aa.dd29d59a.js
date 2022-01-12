"use strict";(self.webpackChunktycloud=self.webpackChunktycloud||[]).push([[535],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return m}});var r=e(7294);function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,r,c=function(t,n){if(null==t)return{};var e,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(c[e]=t[e]);return c}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}var u=r.createContext({}),l=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=l(t.components);return r.createElement(u.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(t,n){var e=t.components,c=t.mdxType,o=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),h=l(e),m=c,d=h["".concat(u,".").concat(m)]||h[m]||s[m]||o;return e?r.createElement(d,i(i({ref:n},p),{},{components:e})):r.createElement(d,i({ref:n},p))}));function m(t,n){var e=arguments,c=n&&n.mdxType;if("string"==typeof t||c){var o=e.length,i=new Array(o);i[0]=h;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=t,a.mdxType="string"==typeof t?t:c,i[1]=a;for(var l=2;l<o;l++)i[l]=e[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}h.displayName="MDXCreateElement"},8273:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r=e(7462),c=e(3366),o=(e(7294),e(3905)),i=["components"],a={sidebar_position:3},u="Common data model",l={unversionedId:"aws/cdm",id:"aws/cdm",title:"Common data model",description:"Trong t\u01b0\u01a1ng lai ch\xfang ta c\u1ea7n t\u0103ng t\u1ed1c qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n v\xe0 t\u1eadn d\u1ee5ng l\u1ea1i c\xe1c ch\u1ee9c n\u0103ng s\u1eb5n c\xf3 v\u1edbi \xedt c\xf4ng s\u1ee9c",source:"@site/docs/aws/cdm.md",sourceDirName:"aws",slug:"/aws/cdm",permalink:"/tycloud/docs/aws/cdm",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/aws/cdm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"D\u1ecbch v\u1ee5 x\xe1c th\u1ef1c",permalink:"/tycloud/docs/aws/auth"},next:{title:"AWS Cognito",permalink:"/tycloud/docs/aws/cognito"}},p=[],s={toc:p};function h(t){var n=t.components,e=(0,c.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-data-model"},"Common data model"),(0,o.kt)("p",null,"Trong t\u01b0\u01a1ng lai ch\xfang ta c\u1ea7n t\u0103ng t\u1ed1c qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n v\xe0 t\u1eadn d\u1ee5ng l\u1ea1i c\xe1c ch\u1ee9c n\u0103ng s\u1eb5n c\xf3 v\u1edbi \xedt c\xf4ng s\u1ee9c"),(0,o.kt)("p",null,"CDM cung c\u1ea5p cho kh\xe1ch h\xe0ng m\u1ed9t c\xe1ch \u0111\u1ec3 t\u01b0\u01a1ng t\xe1c v\u1edbi h\u1ec7 th\u1ed1ng m\u1ed9t c\xe1ch linh ho\u1ea1t. D\u1ec5 hi\u1ec3u \u0111\u01b0\u1ee3c concept"),(0,o.kt)("p",null,"CDM c\xf3 c\xe1c t\xednh n\u0103ng \u0111i k\xe8m c\u1ee7a h\u1ec7 th\u1ed1ng"),(0,o.kt)("p",null,"CDM c\xf3 th\u1ec3 xem l\xe0 l\u1edbp n\u1ec1n t\u1ea3ng \u0111\u1ec3 c\xe1c l\u1edbp nghi\u1ec7m v\u1ee5 k\u1ebf th\u1eeba "),(0,o.kt)("p",null,"Entity:\nM\u1ed9t th\u1ef1c th\u1ec3 bao g\u1ed3m c\xe1c thu\u1ed9c t\xednh v\xe0 gi\xe1 tr\u1ecb"),(0,o.kt)("p",null,"Entity Schema:\nCung c\u1ea5p h\xecnh d\xe1ng c\u1ee7a c\xe1c th\u1ef1c th\u1ec3 Entity v\xe0 quan h\u1ec7 gi\u1eefa ch\xfang\n\u0110\u1ecbnh ngh\u0129a c\xe1c thu\u1ed9c t\xednh v\xe0 c\xe1c ch\u1ee9ng n\u0103ng \u0111i k\xe8m"),(0,o.kt)("p",null,"Attribute: "),(0,o.kt)("p",null,"T\xean bi\u1ebfn v\xe0 ki\u1ebbu d\u1eef li\u1ec7u"),(0,o.kt)("p",null,"Relation:\nM\u1ed1i quan h\u1ec7 gi\u1eefa c\xe1c entity"),(0,o.kt)("p",null,"Capability:\nC\xe1c ch\u1ee9c n\u0103ng m\xe0 Entity c\xf3"),(0,o.kt)("p",null,"C\xe1c ph\u01b0\u01a1ng ph\xe1p thi\u1ebft k\u1ebf\nCQRS: Ph\xe2n t\xe1ch l\u1edbp \u0111\u1ecdc v\xe0 ghi\nEvent Sourcing: D\u1ec5 d\xe0ng truy x\xe9t tr\u1ea1ng th\xe1i t\u1eeb c\xe1c s\u1ef1 ki\u1ec7n thay \u0111\u1ed5i"))}h.isMDXComponent=!0}}]);