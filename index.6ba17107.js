function t(t){return t&&t.__esModule?t.default:t}var e,r,n,o,i,a,c,u,s,l,f,p,v,h,g,d=globalThis,y={},m={},b=d.parcelRequire94c2;null==b&&((b=function(t){if(t in y)return y[t].exports;if(t in m){var e=m[t];delete m[t];var r={id:t,exports:{}};return y[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){m[t]=e},d.parcelRequire94c2=b),(0,b.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,n=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),b("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.6ba17107.js","eyyUD","icons.c5b0f01c.svg"]'));var w={},_={},O=function(t){return t&&t.Math===Math&&t};_=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof d&&d)||O("object"==typeof _&&_)||function(){return this}()||Function("return this")();var j={},E={};j=!(E=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={},L={};L=!E(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var x=Function.prototype.call;S=L?x.bind(x):function(){return x.apply(x,arguments)};var k={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;n=P&&!k.call({1:2},1)?function(t){var e=P(this,t);return!!e&&e.enumerable}:k;var T={};T=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var N={},$={},F={},M=Function.prototype,D=M.call,I=L&&M.bind.bind(D,D),R={},C=(F=L?I:function(t){return function(){return D.apply(t,arguments)}})({}.toString),U=F("".slice);R=function(t){return U(C(t),8,-1)};var A=Object,H=F("".split);$=E(function(){return!A("z").propertyIsEnumerable(0)})?function(t){return"String"===R(t)?H(t,""):A(t)}:A;var G={},B={};B=function(t){return null==t};var q=TypeError;G=function(t){if(B(t))throw new q("Can't call method on "+t);return t},N=function(t){return $(G(t))};var z={},W={},Y={},V={},J="object"==typeof document&&document.all;V=void 0===J&&void 0!==J?function(t){return"function"==typeof t||t===J}:function(t){return"function"==typeof t},Y=function(t){return"object"==typeof t?null!==t:V(t)};var K={},Q={};Q=function(t,e){var r;return arguments.length<2?(r=_[t],V(r)?r:void 0):_[t]&&_[t][e]};var X={};X=F({}.isPrototypeOf);var Z={},tt={},te={},tr={},tn=_.navigator,to=tn&&tn.userAgent;tr=to?String(to):"";var ti=_.process,ta=_.Deno,tc=ti&&ti.versions||ta&&ta.version,tu=tc&&tc.v8;tu&&(i=(o=tu.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&tr&&(!(o=tr.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=tr.match(/Chrome\/(\d+)/))&&(i=+o[1]),te=i;var ts=_.String;Z=(tt=!!Object.getOwnPropertySymbols&&!E(function(){var t=Symbol("symbol detection");return!ts(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&te&&te<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tl=Object;K=Z?function(t){return"symbol"==typeof t}:function(t){var e=Q("Symbol");return V(e)&&X(e.prototype,tl(t))};var tf={},tp={},tv={},th=String;tv=function(t){try{return th(t)}catch(t){return"Object"}};var tg=TypeError;tp=function(t){if(V(t))return t;throw new tg(tv(t)+" is not a function")},tf=function(t,e){var r=t[e];return B(r)?void 0:tp(r)};var td={},ty=TypeError;td=function(t,e){var r,n;if("string"===e&&V(r=t.toString)&&!Y(n=S(r,t))||V(r=t.valueOf)&&!Y(n=S(r,t))||"string"!==e&&V(r=t.toString)&&!Y(n=S(r,t)))return n;throw new ty("Can't convert object to primitive value")};var tm={},tb={},tw={},t_={};t_=!1;var tO={},tj=Object.defineProperty;tO=function(t,e){try{tj(_,t,{value:e,configurable:!0,writable:!0})}catch(r){_[t]=e}return e};var tE="__core-js_shared__",tS=tw=_[tE]||tO(tE,{});(tS.versions||(tS.versions=[])).push({version:"3.40.0",mode:t_?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),tb=function(t,e){return tw[t]||(tw[t]=e||{})};var tL={},tx={},tk=Object;tx=function(t){return tk(G(t))};var tP=F({}.hasOwnProperty);tL=Object.hasOwn||function(t,e){return tP(tx(t),e)};var tT={},tN=0,t$=Math.random(),tF=F(1..toString);tT=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tF(++tN+t$,36)};var tM=_.Symbol,tD=tb("wks"),tI=Z?tM.for||tM:tM&&tM.withoutSetter||tT,tR=TypeError,tC=function(t){return tL(tD,t)||(tD[t]=tt&&tL(tM,t)?tM[t]:tI("Symbol."+t)),tD[t]}("toPrimitive");W=function(t,e){if(!Y(t)||K(t))return t;var r,n=tf(t,tC);if(n){if(void 0===e&&(e="default"),r=S(n,t,e),!Y(r)||K(r))return r;throw new tR("Can't convert object to primitive value")}return void 0===e&&(e="number"),td(t,e)},z=function(t){var e=W(t,"string");return K(e)?e:e+""};var tU={},tA={},tH=_.document,tG=Y(tH)&&Y(tH.createElement);tA=function(t){return tG?tH.createElement(t):{}},tU=!j&&!E(function(){return 7!==Object.defineProperty(tA("div"),"a",{get:function(){return 7}}).a});var tB=Object.getOwnPropertyDescriptor;r=j?tB:function(t,e){if(t=N(t),e=z(e),tU)try{return tB(t,e)}catch(t){}if(tL(t,e))return T(!S(n,t,e),t[e])};var tq={},tz={};tz=j&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tW={},tY=String,tV=TypeError;tW=function(t){if(Y(t))return t;throw new tV(tY(t)+" is not an object")};var tJ=TypeError,tK=Object.defineProperty,tQ=Object.getOwnPropertyDescriptor,tX="enumerable",tZ="configurable",t0="writable";a=j?tz?function(t,e,r){if(tW(t),e=z(e),tW(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t0 in r&&!r[t0]){var n=tQ(t,e);n&&n[t0]&&(t[e]=r.value,r={configurable:tZ in r?r[tZ]:n[tZ],enumerable:tX in r?r[tX]:n[tX],writable:!1})}return tK(t,e,r)}:tK:function(t,e,r){if(tW(t),e=z(e),tW(r),tU)try{return tK(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tJ("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tq=j?function(t,e,r){return a(t,e,T(1,r))}:function(t,e,r){return t[e]=r,t};var t1={},t2={},t4={},t7=Function.prototype,t8=j&&Object.getOwnPropertyDescriptor,t3=tL(t7,"name"),t9=t3&&(!j||j&&t8(t7,"name").configurable),t5={},t6=F(Function.toString);V(tw.inspectSource)||(tw.inspectSource=function(t){return t6(t)}),t5=tw.inspectSource;var et={},ee={},er=_.WeakMap;ee=V(er)&&/native code/.test(String(er));var en={},eo=tb("keys");en=function(t){return eo[t]||(eo[t]=tT(t))};var ei={};ei={};var ea="Object already initialized",ec=_.TypeError,eu=_.WeakMap;if(ee||tw.state){var es=tw.state||(tw.state=new eu);es.get=es.get,es.has=es.has,es.set=es.set,c=function(t,e){if(es.has(t))throw new ec(ea);return e.facade=t,es.set(t,e),e},u=function(t){return es.get(t)||{}},s=function(t){return es.has(t)}}else{var el=en("state");ei[el]=!0,c=function(t,e){if(tL(t,el))throw new ec(ea);return e.facade=t,tq(t,el,e),e},u=function(t){return tL(t,el)?t[el]:{}},s=function(t){return tL(t,el)}}var ef=(et={set:c,get:u,has:s,enforce:function(t){return s(t)?u(t):c(t,{})},getterFor:function(t){return function(e){var r;if(!Y(e)||(r=u(e)).type!==t)throw new ec("Incompatible receiver, "+t+" required");return r}}}).enforce,ep=et.get,ev=String,eh=Object.defineProperty,eg=F("".slice),ed=F("".replace),ey=F([].join),em=j&&!E(function(){return 8!==eh(function(){},"length",{value:8}).length}),eb=String(String).split("String"),ew=t2=function(t,e,r){"Symbol("===eg(ev(e),0,7)&&(e="["+ed(ev(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tL(t,"name")||t9&&t.name!==e)&&(j?eh(t,"name",{value:e,configurable:!0}):t.name=e),em&&r&&tL(r,"arity")&&t.length!==r.arity&&eh(t,"length",{value:r.arity});try{r&&tL(r,"constructor")&&r.constructor?j&&eh(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ef(t);return tL(n,"source")||(n.source=ey(eb,"string"==typeof e?e:"")),t};Function.prototype.toString=ew(function(){return V(this)&&ep(this).source||t5(this)},"toString"),t1=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(V(r)&&t2(r,i,n),n.global)o?t[e]=r:tO(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:a(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var e_={},eO={},ej={},eE={},eS={},eL={},ex={},ek=Math.ceil,eP=Math.floor;ex=Math.trunc||function(t){var e=+t;return(e>0?eP:ek)(e)},eL=function(t){var e=+t;return e!=e||0===e?0:ex(e)};var eT=Math.max,eN=Math.min;eS=function(t,e){var r=eL(t);return r<0?eT(r+e,0):eN(r,e)};var e$={},eF={},eM=Math.min;eF=function(t){var e=eL(t);return e>0?eM(e,0x1fffffffffffff):0},e$=function(t){return eF(t.length)};var eD=function(t){return function(e,r,n){var o,i=N(e),a=e$(i);if(0===a)return!t&&-1;var c=eS(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eI={includes:eD(!0),indexOf:eD(!1)}.indexOf,eR=F([].push);ej=function(t,e){var r,n=N(t),o=0,i=[];for(r in n)!tL(ei,r)&&tL(n,r)&&eR(i,r);for(;e.length>o;)tL(n,r=e[o++])&&(~eI(i,r)||eR(i,r));return i};var eC={},eU=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return ej(t,eU)},f=Object.getOwnPropertySymbols;var eA=F([].concat);eO=Q("Reflect","ownKeys")||function(t){var e=l(tW(t));return f?eA(e,f(t)):e},e_=function(t,e,n){for(var o=eO(e),i=0;i<o.length;i++){var c=o[i];tL(t,c)||n&&tL(n,c)||a(t,c,r(e,c))}};var eH={},eG=/#|\.prototype\./,eB=function(t,e){var r=ez[eq(t)];return r===eY||r!==eW&&(V(e)?E(e):!!e)},eq=eB.normalize=function(t){return String(t).replace(eG,".").toLowerCase()},ez=eB.data={},eW=eB.NATIVE="N",eY=eB.POLYFILL="P";eH=eB,w=function(t,e){var n,o,i,a,c,u=t.target,s=t.global,l=t.stat;if(n=s?_:l?_[u]||tO(u,{}):_[u]&&_[u].prototype)for(o in e){if(a=e[o],i=t.dontCallGetSet?(c=r(n,o))&&c.value:n[o],!eH(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;e_(a,i)}(t.sham||i&&i.sham)&&tq(a,"sham",!0),t1(n,o,a,t)}};var eV={},eJ={},eK=Function.prototype,eQ=eK.apply,eX=eK.call;eJ="object"==typeof Reflect&&Reflect.apply||(L?eX.bind(eQ):function(){return eX.apply(eQ,arguments)});var eZ={},e0={},e1=(e0=function(t){if("Function"===R(t))return F(t)})(e0.bind);eZ=function(t,e){return tp(t),void 0===e?t:L?e1(t,e):function(){return t.apply(e,arguments)}};var e2={};e2=Q("document","documentElement");var e4={};e4=F([].slice);var e7={},e8=TypeError;e7=function(t,e){if(t<e)throw new e8("Not enough arguments");return t};var e3={};e3=/(?:ipad|iphone|ipod).*applewebkit/i.test(tr);var e9={},e5={},e6=function(t){return tr.slice(0,t.length)===t};e9="NODE"===(e5=e6("Bun/")?"BUN":e6("Cloudflare-Workers")?"CLOUDFLARE":e6("Deno/")?"DENO":e6("Node.js/")?"NODE":_.Bun&&"string"==typeof Bun.version?"BUN":_.Deno&&"object"==typeof Deno.version?"DENO":"process"===R(_.process)?"NODE":_.window&&_.document?"BROWSER":"REST");var rt=_.setImmediate,re=_.clearImmediate,rr=_.process,rn=_.Dispatch,ro=_.Function,ri=_.MessageChannel,ra=_.String,rc=0,ru={},rs="onreadystatechange";E(function(){p=_.location});var rl=function(t){if(tL(ru,t)){var e=ru[t];delete ru[t],e()}},rf=function(t){return function(){rl(t)}},rp=function(t){rl(t.data)},rv=function(t){_.postMessage(ra(t),p.protocol+"//"+p.host)};rt&&re||(rt=function(t){e7(arguments.length,1);var e=V(t)?t:ro(t),r=e4(arguments,1);return ru[++rc]=function(){eJ(e,void 0,r)},v(rc),rc},re=function(t){delete ru[t]},e9?v=function(t){rr.nextTick(rf(t))}:rn&&rn.now?v=function(t){rn.now(rf(t))}:ri&&!e3?(g=(h=new ri).port2,h.port1.onmessage=rp,v=eZ(g.postMessage,g)):_.addEventListener&&V(_.postMessage)&&!_.importScripts&&p&&"file:"!==p.protocol&&!E(rv)?(v=rv,_.addEventListener("message",rp,!1)):v=rs in tA("script")?function(t){e2.appendChild(tA("script"))[rs]=function(){e2.removeChild(this),rl(t)}}:function(t){setTimeout(rf(t),0)});var rh=(eV={set:rt,clear:re}).clear;w({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==rh},{clearImmediate:rh});var rg=eV.set,rd={},ry=_.Function,rm=/MSIE .\./.test(tr)||"BUN"===e5&&((e=_.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rd=function(t,e){var r=e?2:1;return rm?function(n,o){var i=e7(arguments.length,1)>r,a=V(n)?n:ry(n),c=i?e4(arguments,r):[],u=i?function(){eJ(a,this,c)}:a;return e?t(u,o):t(u)}:t};var rb=_.setImmediate?rd(rg,!1):rg;w({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==rb},{setImmediate:rb});var rw={};rw=new URL("icons.c5b0f01c.svg",import.meta.url).toString();var r_=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u,s,l=Object.create((r&&r.prototype instanceof d?r:d).prototype);return o(l,"_invoke",{value:(a=t,c=n,u=new x(i||[]),s=p,function(t,r){if(s===v)throw Error("Generator is already running");if(s===h){if("throw"===t)throw r;return{value:e,done:!0}}for(u.method=t,u.arg=r;;){var n=u.delegate;if(n){var o=function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u);if(o){if(o===g)continue;return o}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(s===p)throw s=h,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);s=v;var i=f(a,c,u);if("normal"===i.type){if(s=u.done?h:"suspendedYield",i.arg===g)continue;return{value:i.arg,done:u.done}}"throw"===i.type&&(s=h,u.method="throw",u.arg=i.arg)}})}),l}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",v="executing",h="completed",g={};function d(){}function y(){}function m(){}var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==r&&n.call(_,a)&&(b=_);var O=m.prototype=d.prototype=Object.create(b);function j(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,c)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(null!=t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return y.prototype=m,o(O,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},j(E.prototype),s(E.prototype,c,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(O),s(O,u,"Generator"),s(O,a,function(){return this}),s(O,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}({});try{regeneratorRuntime=r_}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r_:Function("r","regeneratorRuntime = r")(r_)}const rO=document.querySelector(".recipe"),rj=function(e){console.log("here 1");let r=`
    <div class="spinner">
      <svg>
        <use href="${t(rw)}#icon-loader"></use>
      </svg>
    </div>
  `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",r)};!async function(){try{console.log("here 2"),rj(rO);let e=await fetch("https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886"),r=await e.json();if(!e.ok)throw Error(`${r.message} (${r.status})`);let{recipe:n}=r.data;console.log(n),n={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(n);let o=`
      <figure class="recipe__fig">
        <img src="${n.image}" alt="${n.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${n.title}</span>
        </h1>
      </figure>
      
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${t(rw)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${n.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${t(rw)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${n.servings}</span>
          <span class="recipe__info-text">servings</span>
          
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--decrease-servings">
              <svg>
                <use href="${t(rw)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${t(rw)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="recipe__user-generated">
          <svg>
            <use href="${t(rw)}#icon-user"></use>
          </svg>
        </div>
        
        <button class="btn--round">
          <svg>
            <use href="${t(rw)}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${n.ingredients.map(e=>`
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${t(rw)}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${e.quantity}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${e.unit}</span>
                    ${e.description}
                  </div>
                </li>
              `).join("")}
        </ul>
      </div>
      
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${n.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${n.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${t(rw)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;rO.innerHTML="",rO.insertAdjacentHTML("afterbegin",o)}catch(t){alert(t)}}();
//# sourceMappingURL=index.6ba17107.js.map
