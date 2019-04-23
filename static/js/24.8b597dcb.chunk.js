webpackJsonp([24],{485:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n.n(o),i=n(1),u=n.n(i),s=n(116),m=n(166),d=n.n(m),p=n(12),b=n(267),f=n.n(b),E=n(268),h=n.n(E),g=n(30),v=n(86),y=n(87),A=n(85),w=n(117),O=n(84),j=n(56),R=n(88),T=n(118),_=n(131),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),N=function(e){var t=e.account,n=e.singleAccountView,a=e.trade,r=e.parentRenderTimestamp,c=l.a.createElement("span",null,l.a.createElement(v.default,{amount:a.baseAmount})," ",l.a.createElement(y.default,{code:a.baseAssetCode,issuer:a.baseAssetIssuer,type:a.baseAssetType})),o=l.a.createElement("span",null,l.a.createElement(v.default,{amount:a.counterAmount})," ",l.a.createElement(y.default,{code:a.counterAssetCode,issuer:a.counterAssetIssuer,type:a.counterAssetType})),i=void 0,u=void 0,s=void 0;if(n){var m=t===a.baseAccount;i=!m,u=t,s=m?a.counterAccount:a.baseAccount}else i=a.baseIsSeller,u=a.baseAccount,s=a.counterAccount;return l.a.createElement("tr",{key:a.id,className:"trade"},l.a.createElement("td",null,l.a.createElement("span",{className:"account-badge"},l.a.createElement(g.default,{account:u}))),l.a.createElement("td",null,i?c:o),l.a.createElement("td",null,l.a.createElement("span",{className:"account-badge"},l.a.createElement(g.default,{account:s}))),l.a.createElement("td",null,i?o:c),l.a.createElement("td",null,l.a.createElement("span",{title:a.time},l.a.createElement(R.default,{initialNow:r,value:a.time}))))};N.propTypes={parentRenderTimestamp:u.a.number,trade:u.a.shape({id:u.a.string.isRequired,baseIsSeller:u.a.bool.isRequired,baseAccount:u.a.string.isRequired,counterAccount:u.a.string.isRequired,time:u.a.string.isRequired}).isRequired,account:u.a.string,singleAccountView:u.a.bool};var P=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),q(t,[{key:"componentDidMount",value:function(){0===this.props.page&&this.props.records.length<this.props.limit&&this.props.hidePagingFn()}},{key:"render",value:function(){var e=this.props,t=e.server,n=e.parentRenderTimestamp,a=e.account,r=e.records;if(0===r.length)return l.a.createElement("div",{style:{marginTop:20,marginBottom:20}},"No Trades");var c=Object(_.a)(a);return l.a.createElement("div",null,l.a.createElement(d.a,{id:"trade-table",className:"table-striped table-hover table-condensed"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement(p.b,{id:"account"})," 1"),l.a.createElement("th",null,l.a.createElement(p.b,{id:"bought"})),l.a.createElement("th",null,l.a.createElement(p.b,{id:"account"})," 2"),l.a.createElement("th",null,l.a.createElement(p.b,{id:"bought"})),l.a.createElement("th",null,l.a.createElement(p.b,{id:"time"})))),l.a.createElement("tbody",null,r.map(function(e){return l.a.createElement(N,{key:e.id,trade:e,account:a,singleAccountView:c,parentRenderTimestamp:n})}))),l.a.createElement("div",{className:"text-center",id:"csv-export"},l.a.createElement(S,{account:a,server:t})))}}]),t}(l.a.Component);P.propTypes={parentRenderTimestamp:u.a.number,records:u.a.array.isRequired,server:u.a.object.isRequired,account:u.a.string,accountView:u.a.bool};var k=function(e){return e.time=e.ledger_close_time,f()(e,function(e,t){return h()(t)})},C=function(e){var t=e.account,n=e.limit,a=e.server,r=a.trades();return t&&r.forAccount(t),r.limit(n),r.order("desc"),r.call()},I=function(e){return e.server.trades()},S=Object(w.withDataFetchingAllContainer)(C,I)(T.default),V=Object(s.a)(Object(O.withPaging)(),Object(A.withDataFetchingContainer)(C,k,I),Object(j.withSpinner)());t.default=V(P)}});
//# sourceMappingURL=24.8b597dcb.chunk.js.map