(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),b=a(5),i=a(8),l=a(7),o=a(1),r=a.n(o),d=a(6),u=a.n(d),j=(a(13),a(0)),h=function(t){var e=t.tabs,a=t.selectedTabId,n=t.onTabSelected;return Object(j.jsx)("ul",{className:"tabs",children:e.map((function(t){return Object(j.jsx)("li",{className:"tabs__item",children:Object(j.jsx)("button",{type:"button",className:u()("tabs__button",{"tabs__button--active":t.id===a}),onClick:function(){t.id!==a&&n(t)},children:t.title})},t.id)}))})},p=(a(15),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(t){Object(i.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),b=0;b<n;b++)c[b]=arguments[b];return(t=e.call.apply(e,[this].concat(c))).state={tabs:[].concat(p),selectedTab:p[0]},t.selectTab=function(e){t.setState({selectedTab:e})},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.state,e=t.tabs,a=t.selectedTab;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("h1",{children:["Selected tab is\xa0",a.title]}),Object(j.jsx)(h,{tabs:e,selectedTabId:a.id,onTabSelected:this.selectTab}),Object(j.jsx)("p",{className:"app__content",children:a.content})]})}}]),a}(r.a.Component);c.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.abf22f94.chunk.js.map