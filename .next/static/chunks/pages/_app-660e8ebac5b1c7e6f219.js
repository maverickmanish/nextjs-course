_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},"1TCz":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n);var o=t("nKUr"),c=t("YFqc"),a=t.n(c),i=t("cNlf"),u=t.n(i);var s=function(){return Object(o.jsxs)("header",{className:u.a.header,children:[Object(o.jsx)("div",{className:u.a.logo,children:"Insuarance Module Meetups"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.a,{href:"/",children:"All Meetups"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.a,{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},l=t("sQMY"),f=t.n(l);var p=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)("main",{className:f.a.main,children:e.children})]})};t("zPlV");function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return Object(o.jsx)(p,{children:Object(o.jsx)(n,v({},t))})}},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cNlf:function(e,n,t){e.exports={header:"MainNavigation_header__t8YPG",logo:"MainNavigation_logo__Qwpy5",active:"MainNavigation_active__sxu85"}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),u=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,b=e.shallow,j=e.scroll,O=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=c.Children.only(v),g=y&&"object"===typeof y&&y.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),m=r(_,2),w=m[0],x=m[1],M=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,c.useEffect)((function(){var e=x&&n&&(0,a.isLocalURL)(p),r="undefined"!==typeof O?O:t&&t.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(t,p,d,{locale:r})}),[d,p,x,O,n,t]);var N={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,p,d,h,b,j,O)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var E="undefined"!==typeof O?O:t&&t.locale,P=(0,a.getDomainLocale)(d,E,t&&t.locales,t&&t.domainLocales);N.href=P||(0,a.addBasePath)((0,a.addLocale)(d,E,t&&t.defaultLocale))}return c.default.cloneElement(y,N)};n.default=f},sQMY:function(e,n,t){e.exports={main:"Layout_main__2Mwq5"}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,o=(0,c.useRef)(),s=(0,c.useState)(!1),l=r(s,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){i||f||(0,a.default)((function(){return p(!0)}))}),[f]),[d,f]};var c=t("q1tI"),a=o(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map},zPlV:function(e,n,t){}},[[0,0,1,2]]]);