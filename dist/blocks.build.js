!function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),r=(n.n(l),n(3)),a=(n.n(r),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}),c=wp.i18n.__,m=wp.blocks,u=m.registerBlockType,o=m.getBlockTypes,i=wp.components.Dashicon,s=function e(t,n){return"boolean"===typeof t?t?"true":"false":Array.isArray(t)?"[ "+t.map(function(t){return e(t)}).join(", ")+" ]":"string"===typeof t?"default"===n?'"'+t+'"':t:"number"===typeof t?t:t&&null!==t?"Object":"null"},p=function(e){var t=e.name,n=e.value,l=s(n,t);return wp.element.createElement("li",{className:"attribute-property"},wp.element.createElement("span",{className:"attribute-property-name"},t,": "),wp.element.createElement("span",{className:"attribute-property-value"},l))},f=function(e){var t=e.name,n=e.data;return wp.element.createElement("li",{className:"attribute"},wp.element.createElement("h5",{className:"attribute-name"},t,":"),wp.element.createElement("ul",null,Object.keys(n).map(function(e,t){return wp.element.createElement(p,{key:t,name:e,value:n[e]})})))},b=function(e){var t=e.title,n=e.name,l=e.attributes,r=e.icon;return wp.element.createElement("div",{className:"block",id:"block-"+n.replace("/","")},wp.element.createElement(i,{icon:r}),wp.element.createElement("div",{className:"block-headline"},wp.element.createElement("h3",{className:"block-title"},t),wp.element.createElement("p",{className:"block-name"},n)),wp.element.createElement("h4",null,"Attributes"),wp.element.createElement("ul",{className:"attributes"},Object.keys(l).map(function(e,t){return wp.element.createElement(f,{key:t,name:e,data:l[e]})})))},w=function(e){var t=e.blocks;return wp.element.createElement("div",{className:"block-index"},wp.element.createElement("h2",null,"Index"),wp.element.createElement("ul",null,t.map(function(e,t){return wp.element.createElement("li",{className:"attribute-item",key:t},wp.element.createElement("a",{href:"#block-"+e.name.replace("/","")},e.title))})))},E=function(){var e=o();return wp.element.createElement("div",null,wp.element.createElement("h2",{className:"blocks-heading"},"All Blocks"),wp.element.createElement(w,{blocks:e}),e.map(function(e,t){return wp.element.createElement(b,a({key:t},e))}))};u("ncsu-blocks/block-attributes",{title:c("Block Attributes"),icon:"list-view",category:"common",keywords:[c("info"),c("attributes")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(E,null))},save:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(E,null))}})},function(e,t){},function(e,t){}]);