(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(15),s=c.n(r),i=(c(21),c(5)),o=c.n(i),j=c(16),b=c(3),l=(c(23),c(0)),d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{className:"center",children:"MARVEL COMIC HEROES"}),Object(l.jsx)("p",{className:"firstpara",children:"A big fan of Marvel movies? Marvel comics have much more to offer when it comes to stories, characters and fantasies. Get to know all about the comic intricacies of your favourite characters..."}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})},u=c(6),h=c.n(u),f=function(e){var t=e.itemUrl;return Object(l.jsx)("div",{className:"single-url",children:Object(l.jsxs)("a",{href:t.url,className:"mylinks",rel:"noreferrer",target:"_blank",children:[t.type,"s"]})})},O=function(e){var t=e.item;return Object(l.jsxs)("div",{className:"full-card",children:[Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"content-inner",children:[Object(l.jsx)("div",{className:"content-front",children:Object(l.jsx)("img",{src:t.thumbnail.path+"/portrait_xlarge.jpg",alt:""})}),Object(l.jsxs)("div",{className:"content-back",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsx)("div",{children:t.description})]})]})}),Object(l.jsx)("div",{className:"content-url",children:t.urls.map((function(e){return Object(l.jsx)(f,{itemUrl:e},e.type)}))})]})},m=c.p+"static/media/spinner-black.0eb5987b.gif",x=function(){return Object(l.jsx)("img",{src:m,style:{margin:"auto",display:"block"},alt:"Loading"})},v=function(e){var t=e.items;return e.isLoading?Object(l.jsx)(x,{}):Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{className:"contents",children:t.map((function(e){return Object(l.jsx)(O,{item:e},e.id)}))}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h5",{children:"Data provided by Marvel. \xa9 2014 Marvel"}),Object(l.jsx)("br",{})]})},p=function(e){var t=e.search,c=Object(a.useState)(""),n=Object(b.a)(c,2),r=n[0],s=n[1];return Object(l.jsx)("section",{className:"search",children:Object(l.jsx)("form",{children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Find your Hero",onChange:function(e){return c=e.target.value,s(c),void t(c);var c},value:r,autoFocus:!0})})})};var g=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(b.a)(r,2),i=s[0],u=s[1],f=Object(a.useState)(""),O=Object(b.a)(f,2),m=O[0],x=O[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==m){e.next=9;break}return e.next=3,h.a.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b86fcab15da26f47d3b09aa54b48da03&hash=".concat("9b46632d15398cdbeddf9ebd99ffd04e"));case 3:t=e.sent,console.log(t.data.data.results),n(t.data.data.results),u(!1),e.next=15;break;case 9:return e.next=11,h.a.get("http://gateway.marvel.com/v1/public/characters?nameStartsWith=".concat(m,"&ts=1&apikey=b86fcab15da26f47d3b09aa54b48da03&hash=").concat("9b46632d15398cdbeddf9ebd99ffd04e"));case 11:c=e.sent,console.log(c.data.data.results),n(c.data.data.results),u(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(l.jsxs)("div",{className:"App container",children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{search:function(e){return x(e)}}),Object(l.jsx)(v,{items:c,isLoading:i})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.add2b42e.chunk.js.map