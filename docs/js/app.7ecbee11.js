(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,t,n){e.exports=n("2f39")},"018e":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"toc",(function(){return ee}));var r={};n.r(r),n.d(r,"toc",(function(){return ae}));var o=n("967e"),c=n.n(o),u=(n("a481"),n("96cf"),n("fa84")),i=n.n(u),s=(n("573e"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("9044"),n("46f6"),n("a1e8"),n("2b0e")),p=n("b05d"),l=n("9c40"),f=n("f09f"),b=n("a370"),d=n("9404"),h=n("3b73"),Q=n("7ff0"),w=n("e359"),m=n("0016"),x=n("66e5"),v=n("0170"),k=n("4074"),y=n("4d5a"),g=n("1c1c"),P=n("4e73"),S=n("9989"),T=n("09e3"),C=n("5096"),I=n("de5e"),q=n("4983"),A=n("eb85"),L=n("7460"),V=n("823b"),B=n("adad"),E=n("429b"),F=n("65c6"),J=n("6ac5"),$=n("05c0"),_=n("7f67"),j=n("714f"),z=n("4396"),D=n("b12a"),H=n("2a19"),M=n("0967"),N=n("09f9");s["a"].use(p["a"],{config:{},components:{QBtn:l["a"],QCard:f["a"],QCardSection:b["a"],QDrawer:d["a"],QExpansionItem:h["a"],QFooter:Q["a"],QHeader:w["a"],QIcon:m["a"],QItem:x["a"],QItemLabel:v["a"],QItemSection:k["a"],QLayout:y["a"],QList:g["a"],QMenu:P["a"],QPage:S["a"],QPageContainer:T["a"],QPageScroller:C["a"],QPageSticky:I["a"],QScrollArea:q["a"],QSeparator:A["a"],QTab:L["a"],QTabPanel:V["a"],QTabPanels:B["a"],QTabs:E["a"],QToolbar:F["a"],QToolbarTitle:J["a"],QTooltip:$["a"]},directives:{ClosePopup:_["a"],Ripple:j["a"],Scroll:z["a"]},plugins:{AppFullscreen:D["a"],Notify:H["a"],Platform:M["b"],Screen:N["a"]}});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},R=[],G={name:"App"},K=G,U=n("2877"),W=Object(U["a"])(K,O,R,!1,null,null,null),X=W.exports,Y=n("2f62"),Z={toc:[]},ee=function(e){return e.toc},te=n("4db1"),ne=n.n(te),ae=function(e,t){var n;(n=e.toc).splice.apply(n,[0,e.toc.length].concat(ne()(t)))},re=n("018e"),oe={namespaced:!0,state:Z,getters:a,mutations:r,actions:re};s["a"].use(Y["a"]);var ce=function(){var e=new Y["a"].Store({modules:{common:oe},strict:!1});return e},ue=n("8c4f"),ie=[{path:"/",redirect:"/docs"},{path:"/docs",component:function(){return n.e(1).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return n.e(18).then(n.bind(null,"8b24"))}}]},{path:"/examples",component:function(){return n.e(1).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"0960"))}}]}];ie.push({path:"*",component:function(){return n.e(17).then(n.bind(null,"e51e"))}});var se=ie;s["a"].use(ue["a"]);var pe=function(){var e=new ue["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:se,mode:"history",base:"/app-extension-qzoom/"});return e},le=function(){return fe.apply(this,arguments)};function fe(){return fe=i()(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof ce){e.next=6;break}return e.next=3,ce({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=ce;case 7:if(t=e.t0,"function"!==typeof pe){e.next=14;break}return e.next=11,pe({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=pe;case 15:return n=e.t1,t.$router=n,a={router:n,store:t,render:function(e){return e(X)}},a.el="#q-app",e.abrupt("return",{app:a,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),fe.apply(this,arguments)}var be=n("cae4"),de=n("a670"),he=n("4b46");function Qe(){return we.apply(this,arguments)}function we(){return we=i()(c.a.mark((function e(){var t,n,a,r,o,u,i,p,l;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,n=t.app,a=t.store,r=t.router,o=!0,u=function(e){o=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),p=[be["a"],de["default"],he["default"]],l=0;case 11:if(!(!0===o&&l<p.length)){e.next=29;break}if("function"===typeof p[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,p[l]({app:n,router:r,store:a,Vue:s["a"],ssrContext:null,redirect:u,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),we.apply(this,arguments)}Qe()},"7e6d":function(e,t,n){}},[[0,3,0]]]);