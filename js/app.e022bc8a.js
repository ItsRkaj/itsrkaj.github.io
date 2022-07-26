(function(){"use strict";var n={889:function(n,e,t){var r=t(9242),o=t(3396);function i(n,e){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var u=t(89);const a={},c=(0,u.Z)(a,[["render",i]]);var s=c,l=t(2483);function d(n,e,t,r,i,u){const a=(0,o.up)("MemberCreate"),c=(0,o.up)("MemberList");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a),(0,o.Wm)(c)])}const f={class:"card card-body mt-4"},p={class:"form-group"},m=(0,o._)("h1",null,"Namn på vara",-1),b=(0,o._)("button",{type:"submit",class:"btn btn-success mt-3"}," Lägg till ",-1);function v(n,e,t,i,u,a){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("form",{onSubmit:e[1]||(e[1]=(0,r.iM)(((...n)=>i.onSubmit&&i.onSubmit(...n)),["prevent"]))},[(0,o._)("div",p,[m,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>i.form.name=n),class:"form-control",type:"text",required:""},null,512),[[r.nr,i.form.name]])]),b],32)])}var g=t(6780),h=t(4870);t(4406);const y={apiKey:"AIzaSyDbLaYYc8ico0_QgjznkpIjWxL_pZ9BZ3c",authDomain:"inkop-bcfda.firebaseapp.com",projectId:"inkop-bcfda",storageBucket:"inkop-bcfda.appspot.com",messagingSenderId:"870182705800",appId:"1:870182705800:web:ed5da05fc8ecbd9d359d3d",measurementId:"G-V23NZQF21N"},w=g.Z.initializeApp(y),_=w.firestore(),k=_.collection("members"),O=n=>k.add(n),j=n=>k.doc(n).delete(),S=()=>{const n=(0,h.iH)([]);return k.onSnapshot((e=>{n.value=e.docs.map((n=>({id:n.id,...n.data()})))})),(0,o.Ah)(close),n};var M={setup(){const n=(0,h.qj)({name:""}),e=async()=>{await O({...n}),n.name=""};return{form:n,onSubmit:e}}};const Z=(0,u.Z)(M,[["render",v]]);var D=Z,x=t(7139);const C={class:"card mt-4"},I={class:"table m-o"},L=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"Vara"),(0,o._)("th",{scope:"col"},"Kontroll")])],-1),P=["onClick"];function T(n,e,t,r,i,u){return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("table",I,[L,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.members,(({id:n,name:e})=>((0,o.wg)(),(0,o.iD)("tr",{key:n},[(0,o._)("td",null,(0,x.zw)(e),1),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-danger btn-sm",onClick:e=>r.deleteMember(n)}," Ta bort ",8,P)])])))),128))])])])}var z={setup(){const n=S();return{members:n,deleteMember:j}}};const V=(0,u.Z)(z,[["render",T]]);var A=V,H={name:"HomeView",components:{MemberCreate:D,MemberList:A}};const K=(0,u.Z)(H,[["render",d]]);var N=K;const W=[{path:"/",name:"home",component:N}],Y=(0,l.p7)({history:(0,l.PO)("/"),routes:W});var q=Y;(0,r.ri)(s).use(q).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],i=n[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(e&&e(r);s<u.length;s++)i=u[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},r=self["webpackChunkinkop"]=self["webpackChunkinkop"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(889)}));r=t.O(r)})();
//# sourceMappingURL=app.e022bc8a.js.map