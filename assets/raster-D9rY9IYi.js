import{m as Ke,T as We}from"./index-BKvUw1wc.js";var N={},T={},U={exports:{}},k,ce;function Fe(){return ce||(ce=1,k=function(i,u){return function(){for(var t=new Array(arguments.length),o=0;o<t.length;o++)t[o]=arguments[o];return i.apply(u,t)}}),k}var L,fe;function E(){if(fe)return L;fe=1;var r=Fe(),i=Object.prototype.toString;function u(s){return i.call(s)==="[object Array]"}function n(s){return typeof s>"u"}function t(s){return s!==null&&!n(s)&&s.constructor!==null&&!n(s.constructor)&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function o(s){return i.call(s)==="[object ArrayBuffer]"}function a(s){return typeof FormData<"u"&&s instanceof FormData}function c(s){var w;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?w=ArrayBuffer.isView(s):w=s&&s.buffer&&s.buffer instanceof ArrayBuffer,w}function f(s){return typeof s=="string"}function e(s){return typeof s=="number"}function h(s){return s!==null&&typeof s=="object"}function m(s){if(i.call(s)!=="[object Object]")return!1;var w=Object.getPrototypeOf(s);return w===null||w===Object.prototype}function v(s){return i.call(s)==="[object Date]"}function d(s){return i.call(s)==="[object File]"}function l(s){return i.call(s)==="[object Blob]"}function y(s){return i.call(s)==="[object Function]"}function p(s){return h(s)&&y(s.pipe)}function O(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}function A(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,"")}function R(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function g(s,w){if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),u(s))for(var x=0,D=s.length;x<D;x++)w.call(null,s[x],x,s);else for(var b in s)Object.prototype.hasOwnProperty.call(s,b)&&w.call(null,s[b],b,s)}function j(){var s={};function w(b,S){m(s[S])&&m(b)?s[S]=j(s[S],b):m(b)?s[S]=j({},b):u(b)?s[S]=b.slice():s[S]=b}for(var x=0,D=arguments.length;x<D;x++)g(arguments[x],w);return s}function C(s,w,x){return g(w,function(b,S){x&&typeof b=="function"?s[S]=r(b,x):s[S]=b}),s}function q(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s}return L={isArray:u,isArrayBuffer:o,isBuffer:t,isFormData:a,isArrayBufferView:c,isString:f,isNumber:e,isObject:h,isPlainObject:m,isUndefined:n,isDate:v,isFile:d,isBlob:l,isFunction:y,isStream:p,isURLSearchParams:O,isStandardBrowserEnv:R,forEach:g,merge:j,extend:C,trim:A,stripBOM:q},L}var B,le;function Me(){if(le)return B;le=1;var r=E();function i(u){return encodeURIComponent(u).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}return B=function(n,t,o){if(!t)return n;var a;if(o)a=o(t);else if(r.isURLSearchParams(t))a=t.toString();else{var c=[];r.forEach(t,function(h,m){h===null||typeof h>"u"||(r.isArray(h)?m=m+"[]":h=[h],r.forEach(h,function(d){r.isDate(d)?d=d.toISOString():r.isObject(d)&&(d=JSON.stringify(d)),c.push(i(m)+"="+i(d))}))}),a=c.join("&")}if(a){var f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+a}return n},B}var _,de;function Ge(){if(de)return _;de=1;var r=E();function i(){this.handlers=[]}return i.prototype.use=function(n,t,o){return this.handlers.push({fulfilled:n,rejected:t,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},i.prototype.forEach=function(n){r.forEach(this.handlers,function(o){o!==null&&n(o)})},_=i,_}var I,he;function Ze(){if(he)return I;he=1;var r=E();return I=function(u,n){r.forEach(u,function(o,a){a!==n&&a.toUpperCase()===n.toUpperCase()&&(u[n]=o,delete u[a])})},I}var z,pe;function He(){return pe||(pe=1,z=function(i,u,n,t,o){return i.config=u,n&&(i.code=n),i.request=t,i.response=o,i.isAxiosError=!0,i.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},i}),z}var F,me;function Je(){if(me)return F;me=1;var r=He();return F=function(u,n,t,o,a){var c=new Error(u);return r(c,n,t,o,a)},F}var M,ve;function Ye(){if(ve)return M;ve=1;var r=Je();return M=function(u,n,t){var o=t.config.validateStatus;!t.status||!o||o(t.status)?u(t):n(r("Request failed with status code "+t.status,t.config,null,t.request,t))},M}var H,ye;function Qe(){if(ye)return H;ye=1;var r=E();return H=r.isStandardBrowserEnv()?function(){return{write:function(n,t,o,a,c,f){var e=[];e.push(n+"="+encodeURIComponent(t)),r.isNumber(o)&&e.push("expires="+new Date(o).toGMTString()),r.isString(a)&&e.push("path="+a),r.isString(c)&&e.push("domain="+c),f===!0&&e.push("secure"),document.cookie=e.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),H}var J,ge;function er(){return ge||(ge=1,J=function(i){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(i)}),J}var $,be;function rr(){return be||(be=1,$=function(i,u){return u?i.replace(/\/+$/,"")+"/"+u.replace(/^\/+/,""):i}),$}var X,we;function tr(){if(we)return X;we=1;var r=er(),i=rr();return X=function(n,t){return n&&!r(t)?i(n,t):t},X}var V,Ee;function nr(){if(Ee)return V;Ee=1;var r=E(),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return V=function(n){var t={},o,a,c;return n&&r.forEach(n.split(`
`),function(e){if(c=e.indexOf(":"),o=r.trim(e.substr(0,c)).toLowerCase(),a=r.trim(e.substr(c+1)),o){if(t[o]&&i.indexOf(o)>=0)return;o==="set-cookie"?t[o]=(t[o]?t[o]:[]).concat([a]):t[o]=t[o]?t[o]+", "+a:a}}),t},V}var K,xe;function ar(){if(xe)return K;xe=1;var r=E();return K=r.isStandardBrowserEnv()?function(){var u=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),t;function o(a){var c=a;return u&&(n.setAttribute("href",c),c=n.href),n.setAttribute("href",c),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(c){var f=r.isString(c)?o(c):c;return f.protocol===t.protocol&&f.host===t.host}}():function(){return function(){return!0}}(),K}var W,Re;function qe(){if(Re)return W;Re=1;var r=E(),i=Ye(),u=Qe(),n=Me(),t=tr(),o=nr(),a=ar(),c=Je();return W=function(e){return new Promise(function(m,v){var d=e.data,l=e.headers,y=e.responseType;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var O=e.auth.username||"",A=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.Authorization="Basic "+btoa(O+":"+A)}var R=t(e.baseURL,e.url);p.open(e.method.toUpperCase(),n(R,e.params,e.paramsSerializer),!0),p.timeout=e.timeout;function g(){if(p){var C="getAllResponseHeaders"in p?o(p.getAllResponseHeaders()):null,q=!y||y==="text"||y==="json"?p.responseText:p.response,s={data:q,status:p.status,statusText:p.statusText,headers:C,config:e,request:p};i(m,v,s),p=null}}if("onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(g)},p.onabort=function(){p&&(v(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){v(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var q="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(q=e.timeoutErrorMessage),v(c(q,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var j=(e.withCredentials||a(R))&&e.xsrfCookieName?u.read(e.xsrfCookieName):void 0;j&&(l[e.xsrfHeaderName]=j)}"setRequestHeader"in p&&r.forEach(l,function(q,s){typeof d>"u"&&s.toLowerCase()==="content-type"?delete l[s]:p.setRequestHeader(s,q)}),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),y&&y!=="json"&&(p.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&p.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(q){p&&(p.abort(),v(q),p=null)}),d||(d=null),p.send(d)})},W}var G,Ce;function ue(){if(Ce)return G;Ce=1;var r=E(),i=Ze(),u=He(),n={"Content-Type":"application/x-www-form-urlencoded"};function t(f,e){!r.isUndefined(f)&&r.isUndefined(f["Content-Type"])&&(f["Content-Type"]=e)}function o(){var f;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(f=qe()),f}function a(f,e,h){if(r.isString(f))try{return(e||JSON.parse)(f),r.trim(f)}catch(m){if(m.name!=="SyntaxError")throw m}return(0,JSON.stringify)(f)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:o(),transformRequest:[function(e,h){return i(h,"Accept"),i(h,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(t(h,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||h&&h["Content-Type"]==="application/json"?(t(h,"application/json"),a(e)):e}],transformResponse:[function(e){var h=this.transitional,m=h&&h.silentJSONParsing,v=h&&h.forcedJSONParsing,d=!m&&this.responseType==="json";if(d||v&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(l){if(d)throw l.name==="SyntaxError"?u(l,this,"E_JSON_PARSE"):l}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};return c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(n)}),G=c,G}var Z,Se;function ir(){if(Se)return Z;Se=1;var r=E(),i=ue();return Z=function(n,t,o){var a=this||i;return r.forEach(o,function(f){n=f.call(a,n,t)}),n},Z}var Y,Te;function $e(){return Te||(Te=1,Y=function(i){return!!(i&&i.__CANCEL__)}),Y}var Q,je;function sr(){if(je)return Q;je=1;var r=E(),i=ir(),u=$e(),n=ue();function t(o){o.cancelToken&&o.cancelToken.throwIfRequested()}return Q=function(a){t(a),a.headers=a.headers||{},a.data=i.call(a,a.data,a.headers,a.transformRequest),a.headers=r.merge(a.headers.common||{},a.headers[a.method]||{},a.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete a.headers[e]});var c=a.adapter||n.adapter;return c(a).then(function(e){return t(a),e.data=i.call(a,e.data,e.headers,a.transformResponse),e},function(e){return u(e)||(t(a),e&&e.response&&(e.response.data=i.call(a,e.response.data,e.response.headers,a.transformResponse))),Promise.reject(e)})},Q}var ee,Oe;function Xe(){if(Oe)return ee;Oe=1;var r=E();return ee=function(u,n){n=n||{};var t={},o=["url","method","data"],a=["headers","auth","proxy","params"],c=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],f=["validateStatus"];function e(d,l){return r.isPlainObject(d)&&r.isPlainObject(l)?r.merge(d,l):r.isPlainObject(l)?r.merge({},l):r.isArray(l)?l.slice():l}function h(d){r.isUndefined(n[d])?r.isUndefined(u[d])||(t[d]=e(void 0,u[d])):t[d]=e(u[d],n[d])}r.forEach(o,function(l){r.isUndefined(n[l])||(t[l]=e(void 0,n[l]))}),r.forEach(a,h),r.forEach(c,function(l){r.isUndefined(n[l])?r.isUndefined(u[l])||(t[l]=e(void 0,u[l])):t[l]=e(void 0,n[l])}),r.forEach(f,function(l){l in n?t[l]=e(u[l],n[l]):l in u&&(t[l]=e(void 0,u[l]))});var m=o.concat(a).concat(c).concat(f),v=Object.keys(u).concat(Object.keys(n)).filter(function(l){return m.indexOf(l)===-1});return r.forEach(v,h),t},ee}const or="axios",ur="0.21.4",cr="Promise based HTTP client for the browser and node.js",fr="index.js",lr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},dr={type:"git",url:"https://github.com/axios/axios.git"},hr=["xhr","http","ajax","promise","node"],pr="Matt Zabriskie",mr="MIT",vr={url:"https://github.com/axios/axios/issues"},yr="https://axios-http.com",gr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},br={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},wr="dist/axios.min.js",Er="dist/axios.min.js",xr="./index.d.ts",Rr={"follow-redirects":"^1.14.0"},qr=[{path:"./dist/axios.min.js",threshold:"5kB"}],Cr={name:or,version:ur,description:cr,main:fr,scripts:lr,repository:dr,keywords:hr,author:pr,license:mr,bugs:vr,homepage:yr,devDependencies:gr,browser:br,jsdelivr:wr,unpkg:Er,typings:xr,dependencies:Rr,bundlesize:qr};var re,Ae;function Sr(){if(Ae)return re;Ae=1;var r=Cr,i={};["object","boolean","number","function","string","symbol"].forEach(function(a,c){i[a]=function(e){return typeof e===a||"a"+(c<1?"n ":" ")+a}});var u={},n=r.version.split(".");function t(a,c){for(var f=c?c.split("."):n,e=a.split("."),h=0;h<3;h++){if(f[h]>e[h])return!0;if(f[h]<e[h])return!1}return!1}i.transitional=function(c,f,e){var h=f&&t(f);function m(v,d){return"[Axios v"+r.version+"] Transitional option '"+v+"'"+d+(e?". "+e:"")}return function(v,d,l){if(c===!1)throw new Error(m(d," has been removed in "+f));return h&&!u[d]&&(u[d]=!0,console.warn(m(d," has been deprecated since v"+f+" and will be removed in the near future"))),c?c(v,d,l):!0}};function o(a,c,f){if(typeof a!="object")throw new TypeError("options must be an object");for(var e=Object.keys(a),h=e.length;h-- >0;){var m=e[h],v=c[m];if(v){var d=a[m],l=d===void 0||v(d,m,a);if(l!==!0)throw new TypeError("option "+m+" must be "+l);continue}if(f!==!0)throw Error("Unknown option "+m)}}return re={isOlderVersion:t,assertOptions:o,validators:i},re}var te,Ne;function Tr(){if(Ne)return te;Ne=1;var r=E(),i=Me(),u=Ge(),n=sr(),t=Xe(),o=Sr(),a=o.validators;function c(f){this.defaults=f,this.interceptors={request:new u,response:new u}}return c.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=t(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var h=e.transitional;h!==void 0&&o.assertOptions(h,{silentJSONParsing:a.transitional(a.boolean,"1.0.0"),forcedJSONParsing:a.transitional(a.boolean,"1.0.0"),clarifyTimeoutError:a.transitional(a.boolean,"1.0.0")},!1);var m=[],v=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(e)===!1||(v=v&&g.synchronous,m.unshift(g.fulfilled,g.rejected))});var d=[];this.interceptors.response.forEach(function(g){d.push(g.fulfilled,g.rejected)});var l;if(!v){var y=[n,void 0];for(Array.prototype.unshift.apply(y,m),y=y.concat(d),l=Promise.resolve(e);y.length;)l=l.then(y.shift(),y.shift());return l}for(var p=e;m.length;){var O=m.shift(),A=m.shift();try{p=O(p)}catch(R){A(R);break}}try{l=n(p)}catch(R){return Promise.reject(R)}for(;d.length;)l=l.then(d.shift(),d.shift());return l},c.prototype.getUri=function(e){return e=t(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(h,m){return this.request(t(m||{},{method:e,url:h,data:(m||{}).data}))}}),r.forEach(["post","put","patch"],function(e){c.prototype[e]=function(h,m,v){return this.request(t(v||{},{method:e,url:h,data:m}))}}),te=c,te}var ne,De;function Ve(){if(De)return ne;De=1;function r(i){this.message=i}return r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,ne=r,ne}var ae,Ue;function jr(){if(Ue)return ae;Ue=1;var r=Ve();function i(u){if(typeof u!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(a){n=a});var t=this;u(function(a){t.reason||(t.reason=new r(a),n(t.reason))})}return i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var n,t=new i(function(a){n=a});return{token:t,cancel:n}},ae=i,ae}var ie,Pe;function Or(){return Pe||(Pe=1,ie=function(i){return function(n){return i.apply(null,n)}}),ie}var se,ke;function Ar(){return ke||(ke=1,se=function(i){return typeof i=="object"&&i.isAxiosError===!0}),se}var Le;function Nr(){if(Le)return U.exports;Le=1;var r=E(),i=Fe(),u=Tr(),n=Xe(),t=ue();function o(c){var f=new u(c),e=i(u.prototype.request,f);return r.extend(e,u.prototype,f),r.extend(e,f),e}var a=o(t);return a.Axios=u,a.create=function(f){return o(n(a.defaults,f))},a.Cancel=Ve(),a.CancelToken=jr(),a.isCancel=$e(),a.all=function(f){return Promise.all(f)},a.spread=Or(),a.isAxiosError=Ar(),U.exports=a,U.exports.default=a,U.exports}var oe,Be;function Dr(){return Be||(Be=1,oe=Nr()),oe}var _e;function Ur(){if(_e)return T;_e=1;var r=T.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(T,"__esModule",{value:!0}),T.getXyzTileUrlData=T.getTimeData=void 0;const i=r(Dr()),u=async()=>{const[t,o]=await Promise.all([i.default({method:"GET",url:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json"}),i.default({method:"GET",url:"https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N2.json"})]),[a,c]=[t.data,o.data],f=(e,h)=>e.validtime<h.validtime?-1:e.validtime>h.validtime?1:0;return a.sort(f),c.sort(f),{now:a.pop(),past:a,forecast:c}};T.getTimeData=u;const n=t=>{const o=c=>"https://www.jma.go.jp/bosai/jmatile/data/nowc/{basetime}/none/{validtime}/surf/hrpns/{z}/{x}/{y}.png".replace("{basetime}",c.basetime).replace("{validtime}",c.validtime);return{now:o(t.now),past:t.past.map(c=>o(c)),forecast:t.forecast.map(c=>o(c))}};return T.getXyzTileUrlData=n,T}var Ie;function Pr(){if(Ie)return N;Ie=1,Object.defineProperty(N,"__esModule",{value:!0}),N.nowcast=void 0;const r=Ur();return N.nowcast={getTimeData:r.getTimeData,getXyzTileUrlData:r.getXyzTileUrlData},N}var ze=Pr();const kr=r=>{const i=r.map(t=>Lr(t)),u=i.reduce((t,o)=>({...t,...o.source}),{}),n=i.map(t=>t.layer);return{version:8,sources:{OSM:{type:"raster",tiles:["https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"],tileSize:256,attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a>'},...u},layers:[{id:"OSM",type:"raster",source:"OSM",minzoom:0,maxzoom:18},...n]}},Lr=r=>({source:{[r]:{type:"raster",tiles:[r],minzoom:4,maxzoom:10,attribution:"<a href='https://www.jma.go.jp/jma/indexe.html' target='_blank'>Japan Meteorological Agency</a> | <a href='https://twitter.com/kanahiro_iguchi' target='_blank'>@kanahiro_iguchi</a>"}},layer:{id:r,type:"raster",source:r,paint:{"raster-opacity":.5}}}),P=new Ke.Map({container:"map",style:{version:8,sources:{},layers:[]},center:[136,35],hash:!0,bearing:-18,maxPitch:85,pitch:60,zoom:2,minZoom:5,maxZoom:10});P.on("styledata",()=>{P.setProjection({type:"globe"})});const Br=r=>{const i=r.substring(0,4),u=r.substring(4,6),n=r.substring(6,8),t=r.substring(8,10),o=r.substring(10,12),a=r.substring(12);return`${i}-${u}-${n}T${t}:${o}:${a}Z`};ze.nowcast.getTimeData().then(r=>{const i=ze.nowcast.getXyzTileUrlData(r),u=[...i.past,i.now,...i.forecast],n=kr(u);P.setStyle(n);const o=n.layers.slice(1).map(c=>({layers:[c],title:Br(c.id.substring(66,80))})),a=new We(o,{interval:100});P.addControl(a)});