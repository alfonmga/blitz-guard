(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=(n(0),n(85));const a={id:"abilities",title:"Abilities",sidebar_label:"Abilities",slug:"/abilities"},o={unversionedId:"abilities",id:"abilities",isDocsHomePage:!1,title:"Abilities",description:"The ability is the action that the user can perform.",source:"@site/docs/abilities.md",slug:"/abilities",permalink:"/blitz-guard/docs/abilities",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/abilities.md",version:"current",sidebar_label:"Abilities",sidebar:"someSidebar",previous:{title:"Ability file",permalink:"/blitz-guard/docs/ability-file"},next:{title:"Resources",permalink:"/blitz-guard/docs/resources"}},c=[{value:"Extending the abilities",id:"extending-the-abilities",children:[]}],l={toc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ability is the action that the user can perform.\nOut of the box the following are present ",Object(i.b)("inlineCode",{parentName:"p"},"create, read, update, delete, manage"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"manage")," is special, because ",Object(i.b)("strong",{parentName:"p"},"it will match all the abilities")),Object(i.b)("h2",{id:"extending-the-abilities"},"Extending the abilities"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:"{4}","{4}":!0}),'import { GuardBuilder, PrismaModelsType } from "@blitz-guard/core"\n\ntype ExtendedResourceTypes = ...\ntype ExtendedAbilityTypes = "send email"\n\nconst Guard = GuardBuilder<ExtendedResourceTypes, ExtendedAbilityTypes>(\n    ...\n\n')))}s.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);