webpackJsonp([27],{487:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),s=n(1),c=n.n(s),u=n(116),p=n(166),f=n.n(p),b=n(12),d=n(267),m=n.n(d),h=n(268),y=n.n(h),g=n(171),E=n(85),v=n(117),w=n(84),O=n(56),_=n(118),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),P=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),j(t,[{key:"componentDidMount",value:function(){0===this.props.page&&this.props.records.length<this.props.limit&&this.props.hidePagingFn()}},{key:"render",value:function(){var e=this.props,t=e.records,n=e.showSeller;return 0===t.length?i.a.createElement("div",{style:{marginTop:20,marginBottom:20}},"No Offers"):i.a.createElement("div",null,i.a.createElement(f.a,{id:"offer-table",className:"table-striped table-hover table-condensed"},i.a.createElement("thead",null,i.a.createElement("tr",null,n&&i.a.createElement("th",null,i.a.createElement(b.b,{id:"seller"})),i.a.createElement("th",null,i.a.createElement(b.b,{id:"sell"})),i.a.createElement("th",null,i.a.createElement(b.b,{id:"buy"})),i.a.createElement("th",null,i.a.createElement(b.b,{id:"amount"})),i.a.createElement("th",null,i.a.createElement(b.b,{id:"price"})))),i.a.createElement("tbody",null,t.map(function(e){return i.a.createElement(g.OfferRow,{key:e.id,offerId:e.id,amount:e.amount,price:e.price,seller:e.seller,buyingAssetCode:e.buying.asset_code,buyingAssetIssuer:e.buying.asset_issuer,buyingAssetType:e.buying.asset_type,sellingAssetCode:e.selling.asset_code,sellingAssetIssuer:e.selling.asset_issuer,sellingAssetType:e.selling.asset_type,showSeller:n})}))),i.a.createElement("div",{className:"text-center",id:"csv-export"},i.a.createElement(S,this.props)))}}]),t}(i.a.Component);P.defaultProps={showSeller:!0},P.propTypes={compact:c.a.bool,records:c.a.array.isRequired,server:c.a.object.isRequired,showSeller:c.a.bool};var A=function(e){return m()(e,function(e,t){return y()(t)})},C=function(e){var t=e.account,n=e.limit,r=e.server,a=r.offers("accounts",t);return a.limit(n),a.order("desc"),a.call()},S=Object(v.withDataFetchingAllContainer)(C)(_.default),T=Object(u.a)(Object(w.withPaging)(),Object(E.withDataFetchingContainer)(C,A),Object(O.withSpinner)());t.default=T(P)}});
//# sourceMappingURL=27.db9a736c.chunk.js.map