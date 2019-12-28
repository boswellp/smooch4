/*!
 * smooch 4.27.10 
 * License : https://smooch.io/terms
 * 
 */
!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://cdn.smooch.io/",t(t.s=331)}({10:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IFRAME_ID="web-messenger-container"},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SCREEN_SIZES={lg:{minHeight:668,minWidth:1200},md:[{minHeight:508,minWidth:768,maxWidth:1199},{minHeight:508,maxHeight:667,minWidth:768}],sm:{maxHeight:507,minWidth:768},xs:{maxWidth:767}}},222:function(e,t,n){"use strict";function o(e){"complete"!==document.readyState&&"loaded"!==document.readyState&&"interactive"!==document.readyState||!document.body?document.addEventListener("DOMContentLoaded",function(){e()}):e()}function i(e){var t=["screen"];return e.minHeight&&t.push("(min-height: "+e.minHeight+"px)"),e.maxHeight&&t.push("(max-height: "+e.maxHeight+"px)"),e.minWidth&&t.push("(min-width: "+e.minWidth+"px)"),e.maxWidth&&t.push("(max-width: "+e.maxWidth+"px)"),t.join(" and ")}Object.defineProperty(t,"__esModule",{value:!0}),t.waitForPage=o,t.generateMediaQuery=i},223:function(e,t){function n(e,t){var n=0,o=e.length;for(n;n<o&&!1!==t(e[n],n);n++);}function o(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}e.exports={isFunction:i,isArray:o,each:n}},331:function(e,t,n){"use strict";(function(e){var t=n(332),o=n(122);document.getElementById(o.IFRAME_ID)||((0,t.setUp)(),window.__onWebMessengerHostReady__?window.__onWebMessengerHostReady__(t.WebMessenger):e.Smooch=t.WebMessenger)}).call(t,n(10))},332:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(){if(!document.getElementById(p.IFRAME_ID)){v=void 0,g=void 0,window.__onWebMessengerFrameReady__=s;for(var e=E[0],t=0;t<E.length;e=E[++t])m[e]&&delete m[e];c(m,O)}}function r(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://cdn.rawgit.com/boswellp/smooch4/master/smooch.4.27.10dd.css",document.body.appendChild(e)}function s(e){window.__onWebMessengerFrameReady__=function(){},v=e,y||f.init(g);for(var t=E[0],n=0;n<E.length;t=E[++n])m[t]=v[t];if(_){for(var i=_[0],r=0;r<_.length;i=_[++r]){var s;(s=v).on.apply(s,o(i.args))}_=void 0}if(x){var a,c=(a=v).init.apply(a,o(x));x=void 0;for(var u=b[0],d=0;d<b.length;u=b[++d])c="then"===u.type?c.then(u.next):c.catch(u.next);b=[]}}function a(){if(!g){var e=null,t=!1;g=document.createElement("iframe"),g.id=p.IFRAME_ID,g.frameBorder=0,g.allowFullscreen=!0,g.allowTransparency=!0,g.scrolling="no",g.className=d.default.iframe;var n=function(){t=!0,clearInterval(e),delete g.onload;var n=I(g);n.open(),n.write('\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            \n                            <link rel="stylesheet" href="https://cdn.rawgit.com/boswellp/smooch4/master/frame.4.27.10dd.css" type="text/css" />\n                            <script src="https://cdn.rawgit.com/boswellp/smooch4/master/frame.4.27.10dd.js" async crossorigin="anonymous"><\/script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    '),n.close()};e=setInterval(function(){var e=I(g);t||!e||"complete"!=e.readyState&&"interactive"!=e.readyState||n()},1e3),g.onload=function(){t||n()}}y?w&&(w.appendChild(g),w=void 0):document.body.appendChild(g)}Object.defineProperty(t,"__esModule",{value:!0}),t.WebMessenger=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.setUp=i;var u=n(333),d=function(e){return e&&e.__esModule?e:{default:e}}(u),l=n(222),h=n(335),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),p=n(122),m=t.WebMessenger={},v=void 0,g=void 0,y=void 0,w=void 0,b=[],_=[],x=void 0,M=/lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent),W=/PhantomJS/.test(navigator.userAgent)&&!0,E=["init","login","on","off","logout","sendMessage","triggerPostback","updateUser","getConversation","getUser","open","close","isOpened","loadConversation","startConversation","setDelegate","markAllAsRead","showNotificationChannelPrompt","setPredefinedMessage","startTyping","stopTyping"];if(M){var A=document.createElement("a");A.href="https://smooch.io/live-web-chat/?utm_source=widget",A.text="Powered by Zendesk Sunshine",(0,l.waitForPage)(function(){document.body.appendChild(A)})}var O={VERSION:"4.27.10",on:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];_||(_=[]),_.push({args:t})},init:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];x=t,y=t.length>0&&!!t[0].embedded,M||W||(0,l.waitForPage)(function(){r(),a()});var o={then:function(e){return b.push({type:"then",next:e}),o},catch:function(e){return b.push({type:"catch",next:e}),o}};return o},render:function(e){g?e.appendChild(g):w=e},destroy:function(){v&&(v.destroy(),g.remove?g.remove():g.parentNode.removeChild(g),f.unregister(),i())}},I=function(e){return e.contentWindow&&e.contentWindow.document}},333:function(e,t){e.exports={iframe:"_2ChX4GFAl1-UBiWknYZyEQ",displayButton:"avcHn2VQJenBvoR5hilPG",widgetClosed:"_3fQbteJd3oQu4il3LpMKkX","iframe-button-close-lg":"_3FxKeTOOgcsFroUq6se9N7","iframe-button-close-md":"_1GmqPtlICLsWVMg2Kpdx_0","iframe-button-close-sm":"_36mHeCXpAKdhEsuuD5g8oV","iframe-button-close-xs":"_1ZWQW0p6AI6UGwBFbdBf9M",displayTab:"_3dtqBiGeC8k3yop4A-9Lwm",widgetOpened:"_2TELtk5nDKlQudVSivRjpt",widgetEmbedded:"_24n-ftZlG3wDvoWFR8zUnn"}},335:function(e,t,n){"use strict";function o(e){for(var t=0;t<d.length;t++){var n=d[t],o=c.SCREEN_SIZES[n];"[object Array]"!==Object.prototype.toString.call(o)&&(o=[o]);for(var i=0;i<o.length;i++){e({rule:o[i],size:n})}}}function i(e){o(function(t){var n=t.rule,o=t.size;a.default.register((0,u.generateMediaQuery)(n),function(){e.contentWindow.postMessage({type:"sizeChange",value:o},location.protocol+"//"+location.host)})})}function r(){o(function(e){var t=e.rule;a.default.unregister((0,u.generateMediaQuery)(t))})}Object.defineProperty(t,"__esModule",{value:!0}),t.init=i,t.unregister=r;var s=n(336),a=function(e){return e&&e.__esModule?e:{default:e}}(s),c=n(151),u=n(222),d=["lg","md","sm","xs"]},336:function(e,t,n){var o=n(337);e.exports=new o},337:function(e,t,n){function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var i=n(338),r=n(223),s=r.each,a=r.isFunction,c=r.isArray;o.prototype={constructor:o,register:function(e,t,n){var o=this.queries,r=n&&this.browserIsIncapable;return o[e]||(o[e]=new i(e,r)),a(t)&&(t={match:t}),c(t)||(t=[t]),s(t,function(t){a(t)&&(t={match:t}),o[e].addHandler(t)}),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=o},338:function(e,t,n){function o(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}var i=n(339),r=n(223).each;o.prototype={constuctor:o,addHandler:function(e){var t=new i(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;r(t,function(n,o){if(n.equals(e))return n.destroy(),!t.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";r(this.handlers,function(t){t[e]()})}},e.exports=o},339:function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n}});
//# sourceMappingURL=smooch.4.27.10.min.js.map
