var t,e,r,n,i,o,a,s,u,c,l,f,h,d,p,g=globalThis;function v(t){return t&&t.__esModule?t.default:t}var y={},b={},m=g.parcelRequire94c2;null==m&&((m=function(t){if(t in y)return y[t].exports;if(t in b){var e=b[t];delete b[t];var r={id:t,exports:{}};return y[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){b[t]=e},g.parcelRequire94c2=m),(0,m.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,n=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),m("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.94ef5553.js","eyyUD","icons.c5b0f01c.svg"]'));var _={},w={},E=function(t){return t&&t.Math===Math&&t};w=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof g&&g)||E("object"==typeof w&&w)||function(){return this}()||Function("return this")();var S={},O={};S=!(O=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},I={};I=!O(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var L=Function.prototype.call;j=I?L.bind(L):function(){return L.apply(L,arguments)};var k={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;r=P&&!k.call({1:2},1)?function(t){var e=P(this,t);return!!e&&e.enumerable}:k;var $={};$=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var x={},M={},B={},N=Function.prototype,T=N.call,F=I&&N.bind.bind(T,T),A={},R=(B=I?F:function(t){return function(){return T.apply(t,arguments)}})({}.toString),D=B("".slice);A=function(t){return D(R(t),8,-1)};var C=Object,H=B("".split);M=O(function(){return!C("z").propertyIsEnumerable(0)})?function(t){return"String"===A(t)?H(t,""):C(t)}:C;var q={},U={};U=function(t){return null==t};var G=TypeError;q=function(t){if(U(t))throw new G("Can't call method on "+t);return t},x=function(t){return M(q(t))};var z={},W={},Y={},Q={},V="object"==typeof document&&document.all;Q=void 0===V&&void 0!==V?function(t){return"function"==typeof t||t===V}:function(t){return"function"==typeof t},Y=function(t){return"object"==typeof t?null!==t:Q(t)};var J={},K={};K=function(t,e){var r;return arguments.length<2?(r=w[t],Q(r)?r:void 0):w[t]&&w[t][e]};var Z={};Z=B({}.isPrototypeOf);var X={},tt={},te={},tr={},tn=w.navigator,ti=tn&&tn.userAgent;tr=ti?String(ti):"";var to=w.process,ta=w.Deno,ts=to&&to.versions||ta&&ta.version,tu=ts&&ts.v8;tu&&(i=(n=tu.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&tr&&(!(n=tr.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=tr.match(/Chrome\/(\d+)/))&&(i=+n[1]),te=i;var tc=w.String;X=(tt=!!Object.getOwnPropertySymbols&&!O(function(){var t=Symbol("symbol detection");return!tc(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&te&&te<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tl=Object;J=X?function(t){return"symbol"==typeof t}:function(t){var e=K("Symbol");return Q(e)&&Z(e.prototype,tl(t))};var tf={},th={},td={},tp=String;td=function(t){try{return tp(t)}catch(t){return"Object"}};var tg=TypeError;th=function(t){if(Q(t))return t;throw new tg(td(t)+" is not a function")},tf=function(t,e){var r=t[e];return U(r)?void 0:th(r)};var tv={},ty=TypeError;tv=function(t,e){var r,n;if("string"===e&&Q(r=t.toString)&&!Y(n=j(r,t))||Q(r=t.valueOf)&&!Y(n=j(r,t))||"string"!==e&&Q(r=t.toString)&&!Y(n=j(r,t)))return n;throw new ty("Can't convert object to primitive value")};var tb={},tm={},t_={},tw={};tw=!1;var tE={},tS=Object.defineProperty;tE=function(t,e){try{tS(w,t,{value:e,configurable:!0,writable:!0})}catch(r){w[t]=e}return e};var tO="__core-js_shared__",tj=t_=w[tO]||tE(tO,{});(tj.versions||(tj.versions=[])).push({version:"3.40.0",mode:tw?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),tm=function(t,e){return t_[t]||(t_[t]=e||{})};var tI={},tL={},tk=Object;tL=function(t){return tk(q(t))};var tP=B({}.hasOwnProperty);tI=Object.hasOwn||function(t,e){return tP(tL(t),e)};var t$={},tx=0,tM=Math.random(),tB=B(1..toString);t$=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tB(++tx+tM,36)};var tN=w.Symbol,tT=tm("wks"),tF=X?tN.for||tN:tN&&tN.withoutSetter||t$,tA=TypeError,tR=function(t){return tI(tT,t)||(tT[t]=tt&&tI(tN,t)?tN[t]:tF("Symbol."+t)),tT[t]}("toPrimitive");W=function(t,e){if(!Y(t)||J(t))return t;var r,n=tf(t,tR);if(n){if(void 0===e&&(e="default"),r=j(n,t,e),!Y(r)||J(r))return r;throw new tA("Can't convert object to primitive value")}return void 0===e&&(e="number"),tv(t,e)},z=function(t){var e=W(t,"string");return J(e)?e:e+""};var tD={},tC={},tH=w.document,tq=Y(tH)&&Y(tH.createElement);tC=function(t){return tq?tH.createElement(t):{}},tD=!S&&!O(function(){return 7!==Object.defineProperty(tC("div"),"a",{get:function(){return 7}}).a});var tU=Object.getOwnPropertyDescriptor;e=S?tU:function(t,e){if(t=x(t),e=z(e),tD)try{return tU(t,e)}catch(t){}if(tI(t,e))return $(!j(r,t,e),t[e])};var tG={},tz={};tz=S&&O(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tW={},tY=String,tQ=TypeError;tW=function(t){if(Y(t))return t;throw new tQ(tY(t)+" is not an object")};var tV=TypeError,tJ=Object.defineProperty,tK=Object.getOwnPropertyDescriptor,tZ="enumerable",tX="configurable",t0="writable";o=S?tz?function(t,e,r){if(tW(t),e=z(e),tW(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t0 in r&&!r[t0]){var n=tK(t,e);n&&n[t0]&&(t[e]=r.value,r={configurable:tX in r?r[tX]:n[tX],enumerable:tZ in r?r[tZ]:n[tZ],writable:!1})}return tJ(t,e,r)}:tJ:function(t,e,r){if(tW(t),e=z(e),tW(r),tD)try{return tJ(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tV("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tG=S?function(t,e,r){return o(t,e,$(1,r))}:function(t,e,r){return t[e]=r,t};var t1={},t2={},t4={},t7=Function.prototype,t3=S&&Object.getOwnPropertyDescriptor,t5=tI(t7,"name"),t8=t5&&(!S||S&&t3(t7,"name").configurable),t9={},t6=B(Function.toString);Q(t_.inspectSource)||(t_.inspectSource=function(t){return t6(t)}),t9=t_.inspectSource;var et={},ee={},er=w.WeakMap;ee=Q(er)&&/native code/.test(String(er));var en={},ei=tm("keys");en=function(t){return ei[t]||(ei[t]=t$(t))};var eo={};eo={};var ea="Object already initialized",es=w.TypeError,eu=w.WeakMap;if(ee||t_.state){var ec=t_.state||(t_.state=new eu);ec.get=ec.get,ec.has=ec.has,ec.set=ec.set,a=function(t,e){if(ec.has(t))throw new es(ea);return e.facade=t,ec.set(t,e),e},s=function(t){return ec.get(t)||{}},u=function(t){return ec.has(t)}}else{var el=en("state");eo[el]=!0,a=function(t,e){if(tI(t,el))throw new es(ea);return e.facade=t,tG(t,el,e),e},s=function(t){return tI(t,el)?t[el]:{}},u=function(t){return tI(t,el)}}var ef=(et={set:a,get:s,has:u,enforce:function(t){return u(t)?s(t):a(t,{})},getterFor:function(t){return function(e){var r;if(!Y(e)||(r=s(e)).type!==t)throw new es("Incompatible receiver, "+t+" required");return r}}}).enforce,eh=et.get,ed=String,ep=Object.defineProperty,eg=B("".slice),ev=B("".replace),ey=B([].join),eb=S&&!O(function(){return 8!==ep(function(){},"length",{value:8}).length}),em=String(String).split("String"),e_=t2=function(t,e,r){"Symbol("===eg(ed(e),0,7)&&(e="["+ev(ed(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tI(t,"name")||t8&&t.name!==e)&&(S?ep(t,"name",{value:e,configurable:!0}):t.name=e),eb&&r&&tI(r,"arity")&&t.length!==r.arity&&ep(t,"length",{value:r.arity});try{r&&tI(r,"constructor")&&r.constructor?S&&ep(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ef(t);return tI(n,"source")||(n.source=ey(em,"string"==typeof e?e:"")),t};Function.prototype.toString=e_(function(){return Q(this)&&eh(this).source||t9(this)},"toString"),t1=function(t,e,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:e;if(Q(r)&&t2(r,a,n),n.global)i?t[e]=r:tE(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:o(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ew={},eE={},eS={},eO={},ej={},eI={},eL={},ek=Math.ceil,eP=Math.floor;eL=Math.trunc||function(t){var e=+t;return(e>0?eP:ek)(e)},eI=function(t){var e=+t;return e!=e||0===e?0:eL(e)};var e$=Math.max,ex=Math.min;ej=function(t,e){var r=eI(t);return r<0?e$(r+e,0):ex(r,e)};var eM={},eB={},eN=Math.min;eB=function(t){var e=eI(t);return e>0?eN(e,0x1fffffffffffff):0},eM=function(t){return eB(t.length)};var eT=function(t){return function(e,r,n){var i,o=x(e),a=eM(o);if(0===a)return!t&&-1;var s=ej(n,a);if(t&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((t||s in o)&&o[s]===r)return t||s||0;return!t&&-1}},eF={includes:eT(!0),indexOf:eT(!1)}.indexOf,eA=B([].push);eS=function(t,e){var r,n=x(t),i=0,o=[];for(r in n)!tI(eo,r)&&tI(n,r)&&eA(o,r);for(;e.length>i;)tI(n,r=e[i++])&&(~eF(o,r)||eA(o,r));return o};var eR={},eD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(t){return eS(t,eD)},l=Object.getOwnPropertySymbols;var eC=B([].concat);eE=K("Reflect","ownKeys")||function(t){var e=c(tW(t));return l?eC(e,l(t)):e},ew=function(t,r,n){for(var i=eE(r),a=0;a<i.length;a++){var s=i[a];tI(t,s)||n&&tI(n,s)||o(t,s,e(r,s))}};var eH={},eq=/#|\.prototype\./,eU=function(t,e){var r=ez[eG(t)];return r===eY||r!==eW&&(Q(e)?O(e):!!e)},eG=eU.normalize=function(t){return String(t).replace(eq,".").toLowerCase()},ez=eU.data={},eW=eU.NATIVE="N",eY=eU.POLYFILL="P";eH=eU,_=function(t,r){var n,i,o,a,s,u=t.target,c=t.global,l=t.stat;if(n=c?w:l?w[u]||tE(u,{}):w[u]&&w[u].prototype)for(i in r){if(a=r[i],o=t.dontCallGetSet?(s=e(n,i))&&s.value:n[i],!eH(c?i:u+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;ew(a,o)}(t.sham||o&&o.sham)&&tG(a,"sham",!0),t1(n,i,a,t)}};var eQ={},eV={},eJ=Function.prototype,eK=eJ.apply,eZ=eJ.call;eV="object"==typeof Reflect&&Reflect.apply||(I?eZ.bind(eK):function(){return eZ.apply(eK,arguments)});var eX={},e0={},e1=(e0=function(t){if("Function"===A(t))return B(t)})(e0.bind);eX=function(t,e){return th(t),void 0===e?t:I?e1(t,e):function(){return t.apply(e,arguments)}};var e2={};e2=K("document","documentElement");var e4={};e4=B([].slice);var e7={},e3=TypeError;e7=function(t,e){if(t<e)throw new e3("Not enough arguments");return t};var e5={};e5=/(?:ipad|iphone|ipod).*applewebkit/i.test(tr);var e8={},e9={},e6=function(t){return tr.slice(0,t.length)===t};e8="NODE"===(e9=e6("Bun/")?"BUN":e6("Cloudflare-Workers")?"CLOUDFLARE":e6("Deno/")?"DENO":e6("Node.js/")?"NODE":w.Bun&&"string"==typeof Bun.version?"BUN":w.Deno&&"object"==typeof Deno.version?"DENO":"process"===A(w.process)?"NODE":w.window&&w.document?"BROWSER":"REST");var rt=w.setImmediate,re=w.clearImmediate,rr=w.process,rn=w.Dispatch,ri=w.Function,ro=w.MessageChannel,ra=w.String,rs=0,ru={},rc="onreadystatechange";O(function(){f=w.location});var rl=function(t){if(tI(ru,t)){var e=ru[t];delete ru[t],e()}},rf=function(t){return function(){rl(t)}},rh=function(t){rl(t.data)},rd=function(t){w.postMessage(ra(t),f.protocol+"//"+f.host)};rt&&re||(rt=function(t){e7(arguments.length,1);var e=Q(t)?t:ri(t),r=e4(arguments,1);return ru[++rs]=function(){eV(e,void 0,r)},h(rs),rs},re=function(t){delete ru[t]},e8?h=function(t){rr.nextTick(rf(t))}:rn&&rn.now?h=function(t){rn.now(rf(t))}:ro&&!e5?(p=(d=new ro).port2,d.port1.onmessage=rh,h=eX(p.postMessage,p)):w.addEventListener&&Q(w.postMessage)&&!w.importScripts&&f&&"file:"!==f.protocol&&!O(rd)?(h=rd,w.addEventListener("message",rh,!1)):h=rc in tC("script")?function(t){e2.appendChild(tC("script"))[rc]=function(){e2.removeChild(this),rl(t)}}:function(t){setTimeout(rf(t),0)});var rp=(eQ={set:rt,clear:re}).clear;_({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rp},{clearImmediate:rp});var rg=eQ.set,rv={},ry=w.Function,rb=/MSIE .\./.test(tr)||"BUN"===e9&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rv=function(t,e){var r=e?2:1;return rb?function(n,i){var o=e7(arguments.length,1)>r,a=Q(n)?n:ry(n),s=o?e4(arguments,r):[],u=o?function(){eV(a,this,s)}:a;return e?t(u,i):t(u)}:t};var rm=w.setImmediate?rv(rg,!1):rg;_({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rm},{setImmediate:rm});const r_="https://forkify-api.jonas.io/api/v2/recipes/",rw=async function(t){try{let e=await Promise.race([fetch(t),new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await e.json();if(!e.ok)throw Error(`${r.message} (${r.status})`);return r}catch(t){throw t}},rE={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},rS=async function(t){try{let{recipe:e}=(await rw(`${r_}/${t}`)).data;rE.recipe={id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients}}catch(t){throw console.error(`Model#loadRecipe ${t} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),t}},rO=async function(t){try{rE.search.query=t;let e=await rw(`${r_}?search=${t}`);rE.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url}))}catch(t){throw console.error(`Model#loadSearchResults ${t} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),t}},rj=function(t=rE.search.page){rE.search.page=t;let e=(t-1)*rE.search.resultsPerPage,r=t*rE.search.resultsPerPage;return rE.search.results.slice(e,r)};var rI={};rI=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class rL{_data;render(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;let e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${v(rI)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let e=`
      <div class="error">
        <div>
          <svg>
            <use href="${v(rI)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(t=this._message){let e=`
      <div class="message">
        <div>
          <svg>
            <use href="${v(rI)}#icon-smile"></use>
          </svg>
        </div>
        <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${v(rI)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${v(rI)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
        
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${v(rI)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${v(rI)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="recipe__user-generated">
        <svg>
          <use href="${v(rI)}#icon-user"></use>
        </svg>
      </div>
      
      <button class="btn--round">
        <svg>
          <use href="${v(rI)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(t=>this._generateMarkupIngredient(t)).join("")}
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${v(rI)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}}var rk={};!function(t){function e(){return Error("Parameters must be integer")}function r(){return Error("Invalid argument")}function n(){return Error("Division by Zero")}function i(t,i){var a=f,s=h;let u=h;if(null!=t){if(void 0!==i){if("bigint"==typeof t)a=t;else{if(isNaN(t))throw r();if(0!=t%1)throw e();a=BigInt(t)}if("bigint"==typeof i)s=i;else{if(isNaN(i))throw r();if(0!=i%1)throw e();s=BigInt(i)}u=a*s}else if("object"==typeof t){if("d"in t&&"n"in t)a=BigInt(t.n),s=BigInt(t.d),"s"in t&&(a*=BigInt(t.s));else if(0 in t)a=BigInt(t[0]),1 in t&&(s=BigInt(t[1]));else if("bigint"==typeof t)a=t;else throw r();u=a*s}else if("number"==typeof t){if(isNaN(t))throw r();if(0>t&&(u=-h,t=-t),0==t%1)a=BigInt(t);else if(0<t){i=1;var c=0,l=1,d=1;let e=1;for(1<=t&&(i=10**Math.floor(1+Math.log10(t)),t/=i);1e7>=l&&1e7>=e;)if(t===(s=(c+d)/(l+e))){1e7>=l+e?(a=c+d,s=l+e):e>l?(a=d,s=e):(a=c,s=l);break}else t>s?(c+=d,l+=e):(d+=c,e+=l),1e7<l?(a=d,s=e):(a=c,s=l);a=BigInt(a)*BigInt(i),s=BigInt(s)}}else if("string"==typeof t){if(s=0,c=i=a=f,l=d=h,null===(t=t.replace(/_/g,"").match(/\d+|./g)))throw r();if("-"===t[s]?(u=-h,s++):"+"===t[s]&&s++,t.length===s+1?i=o(t[s++],u):"."===t[s+1]||"."===t[s]?("."!==t[s]&&(a=o(t[s++],u)),(++s+1===t.length||"("===t[s+1]&&")"===t[s+3]||"'"===t[s+1]&&"'"===t[s+3])&&(i=o(t[s],u),d=g**BigInt(t[s].length),s++),("("===t[s]&&")"===t[s+2]||"'"===t[s]&&"'"===t[s+2])&&(c=o(t[s+1],u),l=g**BigInt(t[s+1].length)-h,s+=3)):"/"===t[s+1]||":"===t[s+1]?(i=o(t[s],u),d=o(t[s+2],h),s+=3):"/"===t[s+3]&&" "===t[s+1]&&(a=o(t[s],u),i=o(t[s+2],u),d=o(t[s+4],h),s+=5),t.length<=s)u=a=c+(s=d*l)*a+l*i;else throw r()}else if("bigint"==typeof t)u=a=t,s=h;else throw r()}if(s===f)throw n();v.s=u<f?-h:h,v.n=a<f?-a:a,v.d=s<f?-s:s}function o(t,e){try{t=BigInt(t)}catch(t){throw r()}return t*e}function a(t){return"bigint"==typeof t?t:Math.floor(t)}function s(t,e){if(e===f)throw n();let r=Object.create(l.prototype);r.s=t<f?-h:h;let i=c(t=t<f?-t:t,e);return r.n=t/i,r.d=e/i,r}function u(t){let e={},r=t,n=d,i=p-h;for(;i<=r;){for(;r%n===f;)r/=n,e[n]=(e[n]||f)+h;i+=h+d*n++}return r!==t?1<r&&(e[r]=(e[r]||f)+h):e[t]=(e[t]||f)+h,e}function c(t,e){if(!t)return e;if(!e)return t;for(;;){if(!(t%=e))return e;if(!(e%=t))return t}}function l(t,e){if(i(t,e),!(this instanceof l))return s(v.s*v.n,v.d);t=c(v.d,v.n),this.s=v.s,this.n=v.n/t,this.d=v.d/t}"undefined"==typeof BigInt&&(BigInt=function(t){if(isNaN(t))throw Error("");return t});let f=BigInt(0),h=BigInt(1),d=BigInt(2),p=BigInt(5),g=BigInt(10),v={s:h,n:f,d:h};l.prototype={s:h,n:f,d:h,abs:function(){return s(this.n,this.d)},neg:function(){return s(-this.s*this.n,this.d)},add:function(t,e){return i(t,e),s(this.s*this.n*v.d+v.s*this.d*v.n,this.d*v.d)},sub:function(t,e){return i(t,e),s(this.s*this.n*v.d-v.s*this.d*v.n,this.d*v.d)},mul:function(t,e){return i(t,e),s(this.s*v.s*this.n*v.n,this.d*v.d)},div:function(t,e){return i(t,e),s(this.s*v.s*this.n*v.d,this.d*v.n)},clone:function(){return s(this.s*this.n,this.d)},mod:function(t,e){if(void 0===t)return s(this.s*this.n%this.d,h);if(i(t,e),f===v.n*this.d)throw n();return s(this.s*v.d*this.n%(v.n*this.d),v.d*this.d)},gcd:function(t,e){return i(t,e),s(c(v.n,this.n)*c(v.d,this.d),v.d*this.d)},lcm:function(t,e){return i(t,e),v.n===f&&this.n===f?s(f,h):s(v.n*this.n,c(v.n,this.n)*c(v.d,this.d))},inverse:function(){return s(this.s*this.d,this.n)},pow:function(t,e){if(i(t,e),v.d===h)return v.s<f?s((this.s*this.d)**v.n,this.n**v.n):s((this.s*this.n)**v.n,this.d**v.n);if(this.s<f)return null;t=u(this.n),e=u(this.d);let r=h,n=h;for(let e in t)if("1"!==e){if("0"===e){r=f;break}if(t[e]*=v.n,t[e]%v.d!==f)return null;t[e]/=v.d,r*=BigInt(e)**t[e]}for(let t in e)if("1"!==t){if(e[t]*=v.n,e[t]%v.d!==f)return null;e[t]/=v.d,n*=BigInt(t)**e[t]}return v.s<f?s(n,r):s(r,n)},log:function(t,e){if(i(t,e),this.s<=f||v.s<=f)return null;var r={};t=u(v.n);let n=u(v.d);e=u(this.n);let o=u(this.d);for(var a in n)t[a]=(t[a]||f)-n[a];for(var l in o)e[l]=(e[l]||f)-o[l];for(var h in t)"1"!==h&&(r[h]=!0);for(var d in e)"1"!==d&&(r[d]=!0);for(let n in l=a=null,r)if(h=t[n]||f,r=e[n]||f,h===f){if(r!==f)return null}else if(d=c(r,h),r/=d,h/=d,null===a&&null===l)a=r,l=h;else if(r*l!=a*h)return null;return null!==a&&null!==l?s(a,l):null},equals:function(t,e){return i(t,e),this.s*this.n*v.d==v.s*v.n*this.d},lt:function(t,e){return i(t,e),this.s*this.n*v.d<v.s*v.n*this.d},lte:function(t,e){return i(t,e),this.s*this.n*v.d<=v.s*v.n*this.d},gt:function(t,e){return i(t,e),this.s*this.n*v.d>v.s*v.n*this.d},gte:function(t,e){return i(t,e),this.s*this.n*v.d>=v.s*v.n*this.d},compare:function(t,e){return i(t,e),(f<(t=this.s*this.n*v.d-v.s*v.n*this.d))-(t<f)},ceil:function(t){return t=g**BigInt(t||0),s(a(this.s*t*this.n/this.d)+(t*this.n%this.d>f&&this.s>=f?h:f),t)},floor:function(t){return t=g**BigInt(t||0),s(a(this.s*t*this.n/this.d)-(t*this.n%this.d>f&&this.s<f?h:f),t)},round:function(t){return t=g**BigInt(t||0),s(a(this.s*t*this.n/this.d)+this.s*((this.s>=f?h:f)+t*this.n%this.d*d>this.d?h:f),t)},roundTo:function(t,e){i(t,e);var r=this.n*v.d;return e=r%(t=this.d*v.n),r=a(r/t),e+e>=t&&r++,s(this.s*r*v.n,v.d)},divisible:function(t,e){return i(t,e),!(!(v.n*this.d)||this.n*v.d%(v.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(t){let e=this.n,r=this.d;t=t||15;t:{for(n=r;n%d===f;n/=d);for(;n%p===f;n/=p);if(n===h)n=f;else{for(var n,i=g%n,o=1;i!==h;o++)if(i=i*g%n,2e3<o){n=f;break t}n=BigInt(o)}}t:{i=h,o=g;var s=n;let t=h;for(;s>f;o=o*o%r,s>>=h)s&h&&(t=t*o%r);for(s=0,o=t;300>s;s++){if(i===o){i=BigInt(s);break t}i=i*g%r,o=o*g%r}i=0}if(o=i,i=(this.s<f?"-":"")+a(e/r),(e=e%r*g)&&(i+="."),n){for(t=o;t--;)i+=a(e/r),e%=r,e*=g;for(i+="(",t=n;t--;)i+=a(e/r),e%=r,e*=g;i+=")"}else for(;e&&t--;)i+=a(e/r),e%=r,e*=g;return i},toFraction:function(t){let e=this.n,r=this.d,n=this.s<f?"-":"";if(r===h)n+=e;else{let i=a(e/r);t&&i>f&&(n+=i,n+=" ",e%=r),n=n+e+"/"+r}return n},toLatex:function(t){let e=this.n,r=this.d,n=this.s<f?"-":"";if(r===h)n+=e;else{let i=a(e/r);t&&i>f&&(n+=i,e%=r),n=n+"\\frac{"+e+"}{"+r+"}"}return n},toContinued:function(){let t=this.n,e=this.d,r=[];do{r.push(a(t/e));let n=t%e;t=e,e=n}while(t!==h)return r},simplify:function(t){t=BigInt(1/(t||.001)|0);let e=this.abs(),r=e.toContinued();for(let i=1;i<r.length;i++){let o=s(r[i-1],h);for(var n=i-2;0<=n;n--)o=o.inverse().add(r[n]);if((n=o.sub(e)).n*t<n.d)return o.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return l}):(Object.defineProperty(l,"__esModule",{value:!0}),l.default=l,l.Fraction=l,rk=l)}(0);class rP extends rL{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe, Please try another one!";_message="";_generateMarkupIngredient(t){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${v(rI)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${t.quantity?new(v(rk))(t.quantity).toFraction(!0):""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${t.unit}</span>
          ${t.description}
        </div>
      </li>
    `}}var r$=new rP;class rx{_parentEl=document.querySelector(".search");getQuery(){let t=this._parentEl.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentEl.addEventListener("submit",function(e){e.preventDefault(),t()})}}var rM=new rx;class rB extends rL{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${t.id}">
          <figure class="preview__fig">
            <img src="${t.image}" alt="${t.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
          </div>
        </a>
      </li>
    `}}var rN=new rB;class rT extends rL{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--inline");if(!r)return r;t(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&e>1?`
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${v(rI)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:t===e&&e>1?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v(rI)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
      `:this._data.page<e?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${v(rI)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>

        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${v(rI)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var rF=new rT,rA=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,r,n,o){var a,s,u,c,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(a=t,s=n,u=new L(o||[]),c=h,function(t,r){if(c===d)throw Error("Generator is already running");if(c===p){if("throw"===t)throw r;return{value:e,done:!0}}for(u.method=t,u.arg=r;;){var n=u.delegate;if(n){var i=function t(r,n){var i=n.method,o=r.iterator[i];if(o===e)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u);if(i){if(i===g)continue;return i}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(c===h)throw c=p,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c=d;var o=f(a,s,u);if("normal"===o.type){if(c=u.done?p:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c=p,u.method="throw",u.arg=o.arg)}})}),l}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",d="executing",p="completed",g={};function v(){}function y(){}function b(){}var m={};c(m,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(k([])));w&&w!==r&&n.call(w,a)&&(m=w);var E=b.prototype=v.prototype=Object.create(m);function S(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;i(this,"_invoke",{value:function(i,o){function a(){return new e(function(r,a){!function r(i,o,a,s){var u=f(t[i],t,o);if("throw"===u.type)s(u.arg);else{var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(l).then(function(t){c.value=t,a(c)},function(t){return r("throw",t,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(null!=t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw TypeError(typeof t+" is not iterable")}return y.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=c(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),c(O.prototype,s,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new O(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(E),c(E,u,"Generator"),c(E,a,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(c){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=t,a.arg=e,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}({});try{regeneratorRuntime=rA}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rA:Function("r","regeneratorRuntime = r")(rA)}const rR=async function(){try{let t=window.location.hash.slice(1);if(!t)return;r$.renderSpinner(),await rS(t),r$.render(rE.recipe)}catch(t){r$.renderError()}},rD=async function(){try{rN.renderSpinner();let t=rM.getQuery();if(!t)return;await rO(t),rN.render(rj()),rF.render(rE.search)}catch(t){console.log(t)}};r$.addHandlerRender(rR),rM.addHandlerSearch(rD),rF.addHandlerClick(function(t){rN.render(rj(t)),rF.render(rE.search)});
//# sourceMappingURL=index.94ef5553.js.map
