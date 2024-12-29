import{m as Ke,T as We}from"./index-CmXqi-Zh.js";var N={},T={},D={exports:{}},k,ce;function Fe(){return ce||(ce=1,k=function(i,u){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return i.apply(u,n)}}),k}var L,le;function E(){if(le)return L;le=1;var r=Fe(),i=Object.prototype.toString;function u(s){return i.call(s)==="[object Array]"}function a(s){return typeof s>"u"}function n(s){return s!==null&&!a(s)&&s.constructor!==null&&!a(s.constructor)&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function o(s){return i.call(s)==="[object ArrayBuffer]"}function t(s){return typeof FormData<"u"&&s instanceof FormData}function c(s){var w;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?w=ArrayBuffer.isView(s):w=s&&s.buffer&&s.buffer instanceof ArrayBuffer,w}function l(s){return typeof s=="string"}function e(s){return typeof s=="number"}function p(s){return s!==null&&typeof s=="object"}function m(s){if(i.call(s)!=="[object Object]")return!1;var w=Object.getPrototypeOf(s);return w===null||w===Object.prototype}function v(s){return i.call(s)==="[object Date]"}function d(s){return i.call(s)==="[object File]"}function f(s){return i.call(s)==="[object Blob]"}function b(s){return i.call(s)==="[object Function]"}function h(s){return p(s)&&b(s.pipe)}function O(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}function A(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,"")}function R(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function y(s,w){if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),u(s))for(var x=0,P=s.length;x<P;x++)w.call(null,s[x],x,s);else for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&w.call(null,s[g],g,s)}function j(){var s={};function w(g,S){m(s[S])&&m(g)?s[S]=j(s[S],g):m(g)?s[S]=j({},g):u(g)?s[S]=g.slice():s[S]=g}for(var x=0,P=arguments.length;x<P;x++)y(arguments[x],w);return s}function C(s,w,x){return y(w,function(g,S){x&&typeof g=="function"?s[S]=r(g,x):s[S]=g}),s}function q(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s}return L={isArray:u,isArrayBuffer:o,isBuffer:n,isFormData:t,isArrayBufferView:c,isString:l,isNumber:e,isObject:p,isPlainObject:m,isUndefined:a,isDate:v,isFile:d,isBlob:f,isFunction:b,isStream:h,isURLSearchParams:O,isStandardBrowserEnv:R,forEach:y,merge:j,extend:C,trim:A,stripBOM:q},L}var B,fe;function Me(){if(fe)return B;fe=1;var r=E();function i(u){return encodeURIComponent(u).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}return B=function(a,n,o){if(!n)return a;var t;if(o)t=o(n);else if(r.isURLSearchParams(n))t=n.toString();else{var c=[];r.forEach(n,function(p,m){p===null||typeof p>"u"||(r.isArray(p)?m=m+"[]":p=[p],r.forEach(p,function(d){r.isDate(d)?d=d.toISOString():r.isObject(d)&&(d=JSON.stringify(d)),c.push(i(m)+"="+i(d))}))}),t=c.join("&")}if(t){var l=a.indexOf("#");l!==-1&&(a=a.slice(0,l)),a+=(a.indexOf("?")===-1?"?":"&")+t}return a},B}var _,de;function Ge(){if(de)return _;de=1;var r=E();function i(){this.handlers=[]}return i.prototype.use=function(a,n,o){return this.handlers.push({fulfilled:a,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(a){this.handlers[a]&&(this.handlers[a]=null)},i.prototype.forEach=function(a){r.forEach(this.handlers,function(o){o!==null&&a(o)})},_=i,_}var I,pe;function Ze(){if(pe)return I;pe=1;var r=E();return I=function(u,a){r.forEach(u,function(o,t){t!==a&&t.toUpperCase()===a.toUpperCase()&&(u[a]=o,delete u[t])})},I}var z,he;function He(){return he||(he=1,z=function(i,u,a,n,o){return i.config=u,a&&(i.code=a),i.request=n,i.response=o,i.isAxiosError=!0,i.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},i}),z}var F,me;function Je(){if(me)return F;me=1;var r=He();return F=function(u,a,n,o,t){var c=new Error(u);return r(c,a,n,o,t)},F}var M,ve;function Ye(){if(ve)return M;ve=1;var r=Je();return M=function(u,a,n){var o=n.config.validateStatus;!n.status||!o||o(n.status)?u(n):a(r("Request failed with status code "+n.status,n.config,null,n.request,n))},M}var H,be;function Qe(){if(be)return H;be=1;var r=E();return H=r.isStandardBrowserEnv()?function(){return{write:function(a,n,o,t,c,l){var e=[];e.push(a+"="+encodeURIComponent(n)),r.isNumber(o)&&e.push("expires="+new Date(o).toGMTString()),r.isString(t)&&e.push("path="+t),r.isString(c)&&e.push("domain="+c),l===!0&&e.push("secure"),document.cookie=e.join("; ")},read:function(a){var n=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),H}var J,ye;function er(){return ye||(ye=1,J=function(i){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(i)}),J}var $,ge;function rr(){return ge||(ge=1,$=function(i,u){return u?i.replace(/\/+$/,"")+"/"+u.replace(/^\/+/,""):i}),$}var X,we;function tr(){if(we)return X;we=1;var r=er(),i=rr();return X=function(a,n){return a&&!r(n)?i(a,n):n},X}var V,Ee;function nr(){if(Ee)return V;Ee=1;var r=E(),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return V=function(a){var n={},o,t,c;return a&&r.forEach(a.split(`
`),function(e){if(c=e.indexOf(":"),o=r.trim(e.substr(0,c)).toLowerCase(),t=r.trim(e.substr(c+1)),o){if(n[o]&&i.indexOf(o)>=0)return;o==="set-cookie"?n[o]=(n[o]?n[o]:[]).concat([t]):n[o]=n[o]?n[o]+", "+t:t}}),n},V}var K,xe;function ar(){if(xe)return K;xe=1;var r=E();return K=r.isStandardBrowserEnv()?function(){var u=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),n;function o(t){var c=t;return u&&(a.setAttribute("href",c),c=a.href),a.setAttribute("href",c),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=o(window.location.href),function(c){var l=r.isString(c)?o(c):c;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),K}var W,Re;function qe(){if(Re)return W;Re=1;var r=E(),i=Ye(),u=Qe(),a=Me(),n=tr(),o=nr(),t=ar(),c=Je();return W=function(e){return new Promise(function(m,v){var d=e.data,f=e.headers,b=e.responseType;r.isFormData(d)&&delete f["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var O=e.auth.username||"",A=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(O+":"+A)}var R=n(e.baseURL,e.url);h.open(e.method.toUpperCase(),a(R,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function y(){if(h){var C="getAllResponseHeaders"in h?o(h.getAllResponseHeaders()):null,q=!b||b==="text"||b==="json"?h.responseText:h.response,s={data:q,status:h.status,statusText:h.statusText,headers:C,config:e,request:h};i(m,v,s),h=null}}if("onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(y)},h.onabort=function(){h&&(v(c("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){v(c("Network Error",e,null,h)),h=null},h.ontimeout=function(){var q="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(q=e.timeoutErrorMessage),v(c(q,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var j=(e.withCredentials||t(R))&&e.xsrfCookieName?u.read(e.xsrfCookieName):void 0;j&&(f[e.xsrfHeaderName]=j)}"setRequestHeader"in h&&r.forEach(f,function(q,s){typeof d>"u"&&s.toLowerCase()==="content-type"?delete f[s]:h.setRequestHeader(s,q)}),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),b&&b!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(q){h&&(h.abort(),v(q),h=null)}),d||(d=null),h.send(d)})},W}var G,Ce;function ue(){if(Ce)return G;Ce=1;var r=E(),i=Ze(),u=He(),a={"Content-Type":"application/x-www-form-urlencoded"};function n(l,e){!r.isUndefined(l)&&r.isUndefined(l["Content-Type"])&&(l["Content-Type"]=e)}function o(){var l;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(l=qe()),l}function t(l,e,p){if(r.isString(l))try{return(e||JSON.parse)(l),r.trim(l)}catch(m){if(m.name!=="SyntaxError")throw m}return(0,JSON.stringify)(l)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:o(),transformRequest:[function(e,p){return i(p,"Accept"),i(p,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(n(p,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||p&&p["Content-Type"]==="application/json"?(n(p,"application/json"),t(e)):e}],transformResponse:[function(e){var p=this.transitional,m=p&&p.silentJSONParsing,v=p&&p.forcedJSONParsing,d=!m&&this.responseType==="json";if(d||v&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(f){if(d)throw f.name==="SyntaxError"?u(f,this,"E_JSON_PARSE"):f}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};return c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(a)}),G=c,G}var Z,Se;function ir(){if(Se)return Z;Se=1;var r=E(),i=ue();return Z=function(a,n,o){var t=this||i;return r.forEach(o,function(l){a=l.call(t,a,n)}),a},Z}var Y,Te;function $e(){return Te||(Te=1,Y=function(i){return!!(i&&i.__CANCEL__)}),Y}var Q,je;function sr(){if(je)return Q;je=1;var r=E(),i=ir(),u=$e(),a=ue();function n(o){o.cancelToken&&o.cancelToken.throwIfRequested()}return Q=function(t){n(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var c=t.adapter||a.adapter;return c(t).then(function(e){return n(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e},function(e){return u(e)||(n(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})},Q}var ee,Oe;function Xe(){if(Oe)return ee;Oe=1;var r=E();return ee=function(u,a){a=a||{};var n={},o=["url","method","data"],t=["headers","auth","proxy","params"],c=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],l=["validateStatus"];function e(d,f){return r.isPlainObject(d)&&r.isPlainObject(f)?r.merge(d,f):r.isPlainObject(f)?r.merge({},f):r.isArray(f)?f.slice():f}function p(d){r.isUndefined(a[d])?r.isUndefined(u[d])||(n[d]=e(void 0,u[d])):n[d]=e(u[d],a[d])}r.forEach(o,function(f){r.isUndefined(a[f])||(n[f]=e(void 0,a[f]))}),r.forEach(t,p),r.forEach(c,function(f){r.isUndefined(a[f])?r.isUndefined(u[f])||(n[f]=e(void 0,u[f])):n[f]=e(void 0,a[f])}),r.forEach(l,function(f){f in a?n[f]=e(u[f],a[f]):f in u&&(n[f]=e(void 0,u[f]))});var m=o.concat(t).concat(c).concat(l),v=Object.keys(u).concat(Object.keys(a)).filter(function(f){return m.indexOf(f)===-1});return r.forEach(v,p),n},ee}const or="axios",ur="0.21.4",cr="Promise based HTTP client for the browser and node.js",lr="index.js",fr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},dr={type:"git",url:"https://github.com/axios/axios.git"},pr=["xhr","http","ajax","promise","node"],hr="Matt Zabriskie",mr="MIT",vr={url:"https://github.com/axios/axios/issues"},br="https://axios-http.com",yr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},gr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},wr="dist/axios.min.js",Er="dist/axios.min.js",xr="./index.d.ts",Rr={"follow-redirects":"^1.14.0"},qr=[{path:"./dist/axios.min.js",threshold:"5kB"}],Cr={name:or,version:ur,description:cr,main:lr,scripts:fr,repository:dr,keywords:pr,author:hr,license:mr,bugs:vr,homepage:br,devDependencies:yr,browser:gr,jsdelivr:wr,unpkg:Er,typings:xr,dependencies:Rr,bundlesize:qr};var re,Ae;function Sr(){if(Ae)return re;Ae=1;var r=Cr,i={};["object","boolean","number","function","string","symbol"].forEach(function(t,c){i[t]=function(e){return typeof e===t||"a"+(c<1?"n ":" ")+t}});var u={},a=r.version.split(".");function n(t,c){for(var l=c?c.split("."):a,e=t.split("."),p=0;p<3;p++){if(l[p]>e[p])return!0;if(l[p]<e[p])return!1}return!1}i.transitional=function(c,l,e){var p=l&&n(l);function m(v,d){return"[Axios v"+r.version+"] Transitional option '"+v+"'"+d+(e?". "+e:"")}return function(v,d,f){if(c===!1)throw new Error(m(d," has been removed in "+l));return p&&!u[d]&&(u[d]=!0,console.warn(m(d," has been deprecated since v"+l+" and will be removed in the near future"))),c?c(v,d,f):!0}};function o(t,c,l){if(typeof t!="object")throw new TypeError("options must be an object");for(var e=Object.keys(t),p=e.length;p-- >0;){var m=e[p],v=c[m];if(v){var d=t[m],f=d===void 0||v(d,m,t);if(f!==!0)throw new TypeError("option "+m+" must be "+f);continue}if(l!==!0)throw Error("Unknown option "+m)}}return re={isOlderVersion:n,assertOptions:o,validators:i},re}var te,Ne;function Tr(){if(Ne)return te;Ne=1;var r=E(),i=Me(),u=Ge(),a=sr(),n=Xe(),o=Sr(),t=o.validators;function c(l){this.defaults=l,this.interceptors={request:new u,response:new u}}return c.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=n(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var p=e.transitional;p!==void 0&&o.assertOptions(p,{silentJSONParsing:t.transitional(t.boolean,"1.0.0"),forcedJSONParsing:t.transitional(t.boolean,"1.0.0"),clarifyTimeoutError:t.transitional(t.boolean,"1.0.0")},!1);var m=[],v=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(e)===!1||(v=v&&y.synchronous,m.unshift(y.fulfilled,y.rejected))});var d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});var f;if(!v){var b=[a,void 0];for(Array.prototype.unshift.apply(b,m),b=b.concat(d),f=Promise.resolve(e);b.length;)f=f.then(b.shift(),b.shift());return f}for(var h=e;m.length;){var O=m.shift(),A=m.shift();try{h=O(h)}catch(R){A(R);break}}try{f=a(h)}catch(R){return Promise.reject(R)}for(;d.length;)f=f.then(d.shift(),d.shift());return f},c.prototype.getUri=function(e){return e=n(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(p,m){return this.request(n(m||{},{method:e,url:p,data:(m||{}).data}))}}),r.forEach(["post","put","patch"],function(e){c.prototype[e]=function(p,m,v){return this.request(n(v||{},{method:e,url:p,data:m}))}}),te=c,te}var ne,Pe;function Ve(){if(Pe)return ne;Pe=1;function r(i){this.message=i}return r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,ne=r,ne}var ae,De;function jr(){if(De)return ae;De=1;var r=Ve();function i(u){if(typeof u!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(t){a=t});var n=this;u(function(t){n.reason||(n.reason=new r(t),a(n.reason))})}return i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var a,n=new i(function(t){a=t});return{token:n,cancel:a}},ae=i,ae}var ie,Ue;function Or(){return Ue||(Ue=1,ie=function(i){return function(a){return i.apply(null,a)}}),ie}var se,ke;function Ar(){return ke||(ke=1,se=function(i){return typeof i=="object"&&i.isAxiosError===!0}),se}var Le;function Nr(){if(Le)return D.exports;Le=1;var r=E(),i=Fe(),u=Tr(),a=Xe(),n=ue();function o(c){var l=new u(c),e=i(u.prototype.request,l);return r.extend(e,u.prototype,l),r.extend(e,l),e}var t=o(n);return t.Axios=u,t.create=function(l){return o(a(t.defaults,l))},t.Cancel=Ve(),t.CancelToken=jr(),t.isCancel=$e(),t.all=function(l){return Promise.all(l)},t.spread=Or(),t.isAxiosError=Ar(),D.exports=t,D.exports.default=t,D.exports}var oe,Be;function Pr(){return Be||(Be=1,oe=Nr()),oe}var _e;function Dr(){if(_e)return T;_e=1;var r=T.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(T,"__esModule",{value:!0}),T.getXyzTileUrlData=T.getTimeData=void 0;const i=r(Pr()),u=async()=>{const[n,o]=await Promise.all([i.default({method:"GET",url:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json"}),i.default({method:"GET",url:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json"})]),[t,c]=[n.data,o.data],l=(e,p)=>e.validtime<p.validtime?-1:e.validtime>p.validtime?1:0;return t.sort(l),c.sort(l),{now:t.pop(),past:t,forecast:c}};T.getTimeData=u;const a=n=>{const o=c=>"https://www.jma.go.jp/bosai/jmatile/data/nowc/{basetime}/none/{validtime}/surf/hrpns/{z}/{x}/{y}.png".replace("{basetime}",c.basetime).replace("{validtime}",c.validtime);return{now:o(n.now),past:n.past.map(c=>o(c)),forecast:n.forecast.map(c=>o(c))}};return T.getXyzTileUrlData=a,T}var Ie;function Ur(){if(Ie)return N;Ie=1,Object.defineProperty(N,"__esModule",{value:!0}),N.nowcast=void 0;const r=Dr();return N.nowcast={getTimeData:r.getTimeData,getXyzTileUrlData:r.getXyzTileUrlData},N}var ze=Ur();const kr=r=>{const i=r.map(n=>Lr(n)),u=i.reduce((n,o)=>({...n,...o.source}),{}),a=i.map(n=>n.layer);return{version:8,sources:{OSM:{type:"raster",tiles:["https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"],tileSize:256,attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>'},...u},layers:[{id:"OSM",type:"raster",source:"OSM",minzoom:0,maxzoom:18},...a]}},Lr=r=>({source:{[r]:{type:"raster",tiles:[r],minzoom:4,maxzoom:10,attribution:"<a href='https://www.jma.go.jp/jma/indexe.html' target='_blank'>Japan Meteorological Agency</a> | <a href='https://twitter.com/kanahiro_iguchi' target='_blank'>@kanahiro_iguchi</a>"}},layer:{id:r,type:"raster",source:r,paint:{"raster-opacity":.5}}}),U=new Ke.Map({container:"map",style:{version:8,sources:{},layers:[]},center:[136,35],hash:!0,bearing:-18,maxPitch:85,pitch:60,zoom:2,minZoom:5,maxZoom:10});U.on("styledata",()=>{U.setProjection({type:"globe"})});const Br=r=>{const i=r.substring(0,4),u=r.substring(4,6),a=r.substring(6,8),n=r.substring(8,10),o=r.substring(10,12),t=r.substring(12);return`${i}-${u}-${a}T${n}:${o}:${t}Z`};ze.nowcast.getTimeData().then(r=>{const i=ze.nowcast.getXyzTileUrlData(r),u=[...i.past,i.now,...i.forecast],a=kr(u);U.setStyle(a);const o=a.layers.slice(1).map(v=>({layers:[v],title:Br(v.id.substring(66,80))})),t=new We(o,{interval:100});U.addControl(t),document.getElementById("btn-prev").addEventListener("click",()=>{t.prev()}),document.getElementById("btn-next").addEventListener("click",()=>{t.next()}),document.getElementById("btn-play").addEventListener("click",()=>{t.play()}),document.getElementById("btn-pause").addEventListener("click",()=>{t.pause()}),document.getElementById("btn-loop").addEventListener("click",()=>{t.setLoopEnabled(!t.isLoopEnabled())})});
