webpackJsonp([12,19,22],{450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"titleWithJSONButton",function(){return o}),n.d(t,"TitleWithJSONButton",function(){return i});var a=n(1),r=n.n(a),l=n(0),c=n.n(l),u=n(167),i=function(e){var t=e.title,n=e.url;return c.a.createElement("div",null,c.a.createElement("span",null,t),c.a.createElement("span",{className:"pull-right"},c.a.createElement(u.default,{url:n})))};i.propTypes={title:r.a.oneOfType([r.a.string,r.a.object]).isRequired,url:r.a.string.isRequired};var o=function(e,t){return c.a.createElement(i,{title:e,url:t})}},456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),l=n(1),c=n.n(l),u={height:75,width:75},i={height:40,width:150},o=["papayabot","papayaswap","ripplefox"],s=function(e){var t=e.name,n=e.type,a=void 0===n?"anchor":n,l=t.toLowerCase(),c="/img/"+l+".png",s="anchor"===a||-1!==o.indexOf(l)?u:i;return r.a.createElement("span",null,r.a.createElement("img",{src:c,alt:t,title:t,height:s.height,width:s.width}))};s.propTypes={name:c.a.string.isRequired,type:c.a.string},t.default=s},501:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n.n(c),i=n(55),o=n.n(i),s=n(454),m=n.n(s),d=n(65),p=n.n(d),f=n(166),h=n.n(f),E=n(12),y=n(270),b=n.n(y),g=n(493),O=(n.n(g),n(38)),v=n(30),j=n(456),w=n(177),_=n(450),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=function(e){var t=e.accounts,n=e.home,a=e.name,r=e.decentralized,l=void 0!==r&&r;Object(O.g)("Exchanges");var c="https://"+n;return u.a.createElement("tr",{className:"directoryRow"},u.a.createElement("td",null,u.a.createElement("a",{href:c,target:"_blank"},u.a.createElement(j.default,{name:a,type:"exchange"}))),u.a.createElement("td",null,u.a.createElement("a",{href:c,target:"_blank"},n,u.a.createElement(w.default,null))),u.a.createElement("td",null,!b()(t)&&t.map(function(e){return u.a.createElement("span",{key:e},u.a.createElement(v.default,{account:e,hideKnown:!0}),"\xa0")}),b()(t)&&l&&u.a.createElement("span",null,"Decentralized")))},z=function(){return u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,u.a.createElement(E.b,{id:"home.domain"})),u.a.createElement("th",null,u.a.createElement(E.b,{id:"account"}))))},P=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),k(t,[{key:"render",value:function(){var e=this.props.intl.formatMessage,t=Object(_.titleWithJSONButton)(e({id:"exchanges"}),"https://raw.githubusercontent.com/chatch/stellarexplorer/master/src/data/exchanges.json");return u.a.createElement(o.a,null,u.a.createElement(p.a,null,u.a.createElement(m.a,{header:t},u.a.createElement("h4",{style:{textDecoration:"underline"}},"Decentralized"),u.a.createElement(h.a,null,u.a.createElement(z,null),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),Object.keys(g.decentralized).map(function(e){return u.a.createElement(x,Object.assign({key:e,name:e},g.decentralized[e],{decentralized:!0}))}))),u.a.createElement("h4",{style:{marginTop:70,textDecoration:"underline"}},"Centralized"),u.a.createElement(h.a,null,u.a.createElement(z,null),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),Object.keys(g.centralized).map(function(e){return u.a.createElement(x,Object.assign({key:e,name:e},g.centralized[e]))}))))))}}]),t}(u.a.Component);t.default=Object(E.h)(P)}});
//# sourceMappingURL=12.59d07c71.chunk.js.map