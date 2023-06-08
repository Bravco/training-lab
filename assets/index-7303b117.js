(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function _d(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const De={},or=[],yn=()=>{},nI=()=>!1,iI=/^on[^a-z]/,zc=t=>iI.test(t),wd=t=>t.startsWith("onUpdate:"),ht=Object.assign,bd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sI=Object.prototype.hasOwnProperty,me=(t,e)=>sI.call(t,e),G=Array.isArray,ar=t=>ya(t)==="[object Map]",$r=t=>ya(t)==="[object Set]",jm=t=>ya(t)==="[object Date]",ae=t=>typeof t=="function",nt=t=>typeof t=="string",Vo=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",x_=t=>Ne(t)&&ae(t.then)&&ae(t.catch),N_=Object.prototype.toString,ya=t=>N_.call(t),rI=t=>ya(t).slice(8,-1),O_=t=>ya(t)==="[object Object]",Ed=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xl=_d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oI=/-(\w)/g,Fn=Hc(t=>t.replace(oI,(e,n)=>n?n.toUpperCase():"")),aI=/\B([A-Z])/g,Ur=Hc(t=>t.replace(aI,"-$1").toLowerCase()),Wc=Hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gu=Hc(t=>t?`on${Wc(t)}`:""),Bo=(t,e)=>!Object.is(t,e),Nl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ql=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zm;const jh=()=>zm||(zm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _r(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=nt(i)?hI(i):_r(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(nt(t))return t;if(Ne(t))return t}}const lI=/;(?![^(]*\))/g,cI=/:([^]+)/,uI=new RegExp("\\/\\*.*?\\*\\/","gs");function hI(t){const e={};return t.replace(uI,"").split(lI).forEach(n=>{if(n){const i=n.split(cI);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vr(t){let e="";if(nt(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const i=Vr(t[n]);i&&(e+=i+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dI=_d(fI);function P_(t){return!!t||t===""}function pI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=bs(t[i],e[i]);return n}function bs(t,e){if(t===e)return!0;let n=jm(t),i=jm(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Vo(t),i=Vo(e),n||i)return t===e;if(n=G(t),i=G(e),n||i)return n&&i?pI(t,e):!1;if(n=Ne(t),i=Ne(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bs(t[o],e[o]))return!1}}return String(t)===String(e)}function Td(t,e){return t.findIndex(n=>bs(n,e))}const Ut=t=>nt(t)?t:t==null?"":G(t)||Ne(t)&&(t.toString===N_||!ae(t.toString))?JSON.stringify(t,D_,2):String(t),D_=(t,e)=>e&&e.__v_isRef?D_(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:$r(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!G(e)&&!O_(e)?String(e):e;let hn;class M_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=hn;try{return hn=this,e()}finally{hn=n}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function mI(t){return new M_(t)}function gI(t,e=hn){e&&e.active&&e.effects.push(t)}function vI(){return hn}const Id=t=>{const e=new Set(t);return e.w=0,e.n=0,e},L_=t=>(t.w&Li)>0,F_=t=>(t.n&Li)>0,yI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Li},_I=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];L_(s)&&!F_(s)?s.delete(t):e[n++]=s,s.w&=~Li,s.n&=~Li}e.length=n}},zh=new WeakMap;let fo=0,Li=1;const Hh=30;let fn;const ps=Symbol(""),Wh=Symbol("");class Cd{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gI(this,i)}run(){if(!this.active)return this.fn();let e=fn,n=Ri;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,Ri=!0,Li=1<<++fo,fo<=Hh?yI(this):Hm(this),this.fn()}finally{fo<=Hh&&_I(this),Li=1<<--fo,fn=this.parent,Ri=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Hm(this),this.onStop&&this.onStop(),this.active=!1)}}function Hm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ri=!0;const $_=[];function Br(){$_.push(Ri),Ri=!1}function jr(){const t=$_.pop();Ri=t===void 0?!0:t}function Bt(t,e,n){if(Ri&&fn){let i=zh.get(t);i||zh.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Id()),U_(s)}}function U_(t,e){let n=!1;fo<=Hh?F_(t)||(t.n|=Li,n=!L_(t)):n=!t.has(fn),n&&(t.add(fn),fn.deps.push(t))}function si(t,e,n,i,s,r){const o=zh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Ed(n)&&a.push(o.get("length")):(a.push(o.get(ps)),ar(t)&&a.push(o.get(Wh)));break;case"delete":G(t)||(a.push(o.get(ps)),ar(t)&&a.push(o.get(Wh)));break;case"set":ar(t)&&a.push(o.get(ps));break}if(a.length===1)a[0]&&qh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);qh(Id(l))}}function qh(t,e){const n=G(t)?t:[...t];for(const i of n)i.computed&&Wm(i);for(const i of n)i.computed||Wm(i)}function Wm(t,e){(t!==fn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const wI=_d("__proto__,__v_isRef,__isVue"),V_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vo)),bI=Sd(),EI=Sd(!1,!0),TI=Sd(!0),qm=II();function II(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=we(this);for(let r=0,o=this.length;r<o;r++)Bt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(we)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Br();const i=we(this)[e].apply(this,n);return jr(),i}}),t}function CI(t){const e=we(this);return Bt(e,"has",t),e.hasOwnProperty(t)}function Sd(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?BI:W_:e?H_:z_).get(i))return i;const o=G(i);if(!t){if(o&&me(qm,s))return Reflect.get(qm,s,r);if(s==="hasOwnProperty")return CI}const a=Reflect.get(i,s,r);return(Vo(s)?V_.has(s):wI(s))||(t||Bt(i,"get",s),e)?a:Ze(a)?o&&Ed(s)?a:a.value:Ne(a)?t?q_(a):di(a):a}}const SI=B_(),kI=B_(!0);function B_(t=!1){return function(n,i,s,r){let o=n[i];if(Es(o)&&Ze(o)&&!Ze(s))return!1;if(!t&&(!Kl(s)&&!Es(s)&&(o=we(o),s=we(s)),!G(n)&&Ze(o)&&!Ze(s)))return o.value=s,!0;const a=G(n)&&Ed(i)?Number(i)<n.length:me(n,i),l=Reflect.set(n,i,s,r);return n===we(r)&&(a?Bo(s,o)&&si(n,"set",i,s):si(n,"add",i,s)),l}}function AI(t,e){const n=me(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&si(t,"delete",e,void 0),i}function RI(t,e){const n=Reflect.has(t,e);return(!Vo(e)||!V_.has(e))&&Bt(t,"has",e),n}function xI(t){return Bt(t,"iterate",G(t)?"length":ps),Reflect.ownKeys(t)}const j_={get:bI,set:SI,deleteProperty:AI,has:RI,ownKeys:xI},NI={get:TI,set(t,e){return!0},deleteProperty(t,e){return!0}},OI=ht({},j_,{get:EI,set:kI}),kd=t=>t,qc=t=>Reflect.getPrototypeOf(t);function Ja(t,e,n=!1,i=!1){t=t.__v_raw;const s=we(t),r=we(e);n||(e!==r&&Bt(s,"get",e),Bt(s,"get",r));const{has:o}=qc(s),a=i?kd:n?xd:jo;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Za(t,e=!1){const n=this.__v_raw,i=we(n),s=we(t);return e||(t!==s&&Bt(i,"has",t),Bt(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function el(t,e=!1){return t=t.__v_raw,!e&&Bt(we(t),"iterate",ps),Reflect.get(t,"size",t)}function Km(t){t=we(t);const e=we(this);return qc(e).has.call(e,t)||(e.add(t),si(e,"add",t,t)),this}function Gm(t,e){e=we(e);const n=we(this),{has:i,get:s}=qc(n);let r=i.call(n,t);r||(t=we(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Bo(e,o)&&si(n,"set",t,e):si(n,"add",t,e),this}function Ym(t){const e=we(this),{has:n,get:i}=qc(e);let s=n.call(e,t);s||(t=we(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&si(e,"delete",t,void 0),r}function Qm(){const t=we(this),e=t.size!==0,n=t.clear();return e&&si(t,"clear",void 0,void 0),n}function tl(t,e){return function(i,s){const r=this,o=r.__v_raw,a=we(o),l=e?kd:t?xd:jo;return!t&&Bt(a,"iterate",ps),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function nl(t,e,n){return function(...i){const s=this.__v_raw,r=we(s),o=ar(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?kd:e?xd:jo;return!e&&Bt(r,"iterate",l?Wh:ps),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function vi(t){return function(...e){return t==="delete"?!1:this}}function PI(){const t={get(r){return Ja(this,r)},get size(){return el(this)},has:Za,add:Km,set:Gm,delete:Ym,clear:Qm,forEach:tl(!1,!1)},e={get(r){return Ja(this,r,!1,!0)},get size(){return el(this)},has:Za,add:Km,set:Gm,delete:Ym,clear:Qm,forEach:tl(!1,!0)},n={get(r){return Ja(this,r,!0)},get size(){return el(this,!0)},has(r){return Za.call(this,r,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:tl(!0,!1)},i={get(r){return Ja(this,r,!0,!0)},get size(){return el(this,!0)},has(r){return Za.call(this,r,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=nl(r,!1,!1),n[r]=nl(r,!0,!1),e[r]=nl(r,!1,!0),i[r]=nl(r,!0,!0)}),[t,n,e,i]}const[DI,MI,LI,FI]=PI();function Ad(t,e){const n=e?t?FI:LI:t?MI:DI;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(me(n,s)&&s in i?n:i,s,r)}const $I={get:Ad(!1,!1)},UI={get:Ad(!1,!0)},VI={get:Ad(!0,!1)},z_=new WeakMap,H_=new WeakMap,W_=new WeakMap,BI=new WeakMap;function jI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zI(t){return t.__v_skip||!Object.isExtensible(t)?0:jI(rI(t))}function di(t){return Es(t)?t:Rd(t,!1,j_,$I,z_)}function HI(t){return Rd(t,!1,OI,UI,H_)}function q_(t){return Rd(t,!0,NI,VI,W_)}function Rd(t,e,n,i,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=zI(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ms(t){return Es(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Es(t){return!!(t&&t.__v_isReadonly)}function Kl(t){return!!(t&&t.__v_isShallow)}function K_(t){return ms(t)||Es(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function G_(t){return Wl(t,"__v_skip",!0),t}const jo=t=>Ne(t)?di(t):t,xd=t=>Ne(t)?q_(t):t;function Y_(t){Ri&&fn&&(t=we(t),U_(t.dep||(t.dep=Id())))}function Q_(t,e){t=we(t);const n=t.dep;n&&qh(n)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function Ie(t){return X_(t,!1)}function WI(t){return X_(t,!0)}function X_(t,e){return Ze(t)?t:new qI(t,e)}class qI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:jo(e)}get value(){return Y_(this),this._value}set value(e){const n=this.__v_isShallow||Kl(e)||Es(e);e=n?e:we(e),Bo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jo(e),Q_(this))}}function Q(t){return Ze(t)?t.value:t}const KI={get:(t,e,n)=>Q(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function J_(t){return ms(t)?t:new Proxy(t,KI)}class GI{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Cd(e,()=>{this._dirty||(this._dirty=!0,Q_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=we(this);return Y_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function YI(t,e,n=!1){let i,s;const r=ae(t);return r?(i=t,s=yn):(i=t.get,s=t.set),new GI(i,s,r||!s,n)}function xi(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Kc(r,e,n)}return s}function _n(t,e,n,i){if(ae(t)){const r=xi(t,e,n,i);return r&&x_(r)&&r.catch(o=>{Kc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(_n(t[r],e,n,i));return s}function Kc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){xi(l,null,10,[t,o,a]);return}}QI(t,n,s,i)}function QI(t,e,n,i=!0){console.error(t)}let zo=!1,Kh=!1;const Ct=[];let An=0;const lr=[];let Gn=null,ss=0;const Z_=Promise.resolve();let Nd=null;function Gl(t){const e=Nd||Z_;return t?e.then(this?t.bind(this):t):e}function XI(t){let e=An+1,n=Ct.length;for(;e<n;){const i=e+n>>>1;Ho(Ct[i])<t?e=i+1:n=i}return e}function Od(t){(!Ct.length||!Ct.includes(t,zo&&t.allowRecurse?An+1:An))&&(t.id==null?Ct.push(t):Ct.splice(XI(t.id),0,t),e0())}function e0(){!zo&&!Kh&&(Kh=!0,Nd=Z_.then(n0))}function JI(t){const e=Ct.indexOf(t);e>An&&Ct.splice(e,1)}function ZI(t){G(t)?lr.push(...t):(!Gn||!Gn.includes(t,t.allowRecurse?ss+1:ss))&&lr.push(t),e0()}function Xm(t,e=zo?An+1:0){for(;e<Ct.length;e++){const n=Ct[e];n&&n.pre&&(Ct.splice(e,1),e--,n())}}function t0(t){if(lr.length){const e=[...new Set(lr)];if(lr.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((n,i)=>Ho(n)-Ho(i)),ss=0;ss<Gn.length;ss++)Gn[ss]();Gn=null,ss=0}}const Ho=t=>t.id==null?1/0:t.id,eC=(t,e)=>{const n=Ho(t)-Ho(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function n0(t){Kh=!1,zo=!0,Ct.sort(eC);const e=yn;try{for(An=0;An<Ct.length;An++){const n=Ct[An];n&&n.active!==!1&&xi(n,null,14)}}finally{An=0,Ct.length=0,t0(),zo=!1,Nd=null,(Ct.length||lr.length)&&n0()}}function tC(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||De;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||De;f&&(s=n.map(d=>nt(d)?d.trim():d)),h&&(s=n.map(ql))}let a,l=i[a=Gu(e)]||i[a=Gu(Fn(e))];!l&&r&&(l=i[a=Gu(Ur(e))]),l&&_n(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(c,t,6,s)}}function i0(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ae(t)){const l=c=>{const u=i0(c,e,!0);u&&(a=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ne(t)&&i.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):ht(o,r),Ne(t)&&i.set(t,o),o)}function Gc(t,e){return!t||!zc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Ur(e))||me(t,e))}let Wt=null,Yc=null;function Yl(t){const e=Wt;return Wt=t,Yc=t&&t.type.__scopeId||null,e}function Ki(t){Yc=t}function Gi(){Yc=null}function Pd(t,e=Wt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&lg(-1);const r=Yl(e);let o;try{o=t(...s)}finally{Yl(r),i._d&&lg(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yu(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:v}=t;let y,_;const b=Yl(t);try{if(n.shapeFlag&4){const C=s||i;y=kn(u.call(C,C,h,r,d,f,p)),_=l}else{const C=e;y=kn(C.length>1?C(r,{attrs:l,slots:a,emit:c}):C(r,null)),_=e.props?l:nC(l)}}catch(C){So.length=0,Kc(C,t,1),y=se(Ts)}let x=y;if(_&&v!==!1){const C=Object.keys(_),{shapeFlag:K}=x;C.length&&K&7&&(o&&C.some(wd)&&(_=iC(_,o)),x=wr(x,_))}return n.dirs&&(x=wr(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),y=x,Yl(b),y}const nC=t=>{let e;for(const n in t)(n==="class"||n==="style"||zc(n))&&((e||(e={}))[n]=t[n]);return e},iC=(t,e)=>{const n={};for(const i in t)(!wd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function sC(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Jm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Gc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Jm(i,o,c):!0:!!o;return!1}function Jm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Gc(n,r))return!0}return!1}function rC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const oC=t=>t.__isSuspense;function aC(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):ZI(t)}const il={};function Pn(t,e,n){return s0(t,e,n)}function s0(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=De){var a;const l=vI()===((a=ct)==null?void 0:a.scope)?ct:null;let c,u=!1,h=!1;if(Ze(t)?(c=()=>t.value,u=Kl(t)):ms(t)?(c=()=>t,i=!0):G(t)?(h=!0,u=t.some(C=>ms(C)||Kl(C)),c=()=>t.map(C=>{if(Ze(C))return C.value;if(ms(C))return as(C);if(ae(C))return xi(C,l,2)})):ae(t)?e?c=()=>xi(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),_n(t,l,3,[d])}:c=yn,e&&i){const C=c;c=()=>as(C())}let f,d=C=>{f=b.onStop=()=>{xi(C,l,4)}},p;if(qo)if(d=yn,e?n&&_n(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const C=JC();p=C.__watcherHandles||(C.__watcherHandles=[])}else return yn;let v=h?new Array(t.length).fill(il):il;const y=()=>{if(b.active)if(e){const C=b.run();(i||u||(h?C.some((K,re)=>Bo(K,v[re])):Bo(C,v)))&&(f&&f(),_n(e,l,3,[C,v===il?void 0:h&&v[0]===il?[]:v,d]),v=C)}else b.run()};y.allowRecurse=!!e;let _;s==="sync"?_=y:s==="post"?_=()=>Ft(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),_=()=>Od(y));const b=new Cd(c,_);e?n?y():v=b.run():s==="post"?Ft(b.run.bind(b),l&&l.suspense):b.run();const x=()=>{b.stop(),l&&l.scope&&bd(l.scope.effects,b)};return p&&p.push(x),x}function lC(t,e,n){const i=this.proxy,s=nt(t)?t.includes(".")?r0(i,t):()=>i[t]:t.bind(i,i);let r;ae(e)?r=e:(r=e.handler,n=e);const o=ct;br(this);const a=s0(s,r.bind(i),n);return o?br(o):gs(),a}function r0(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function as(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))as(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)as(t[n],e);else if($r(t)||ar(t))t.forEach(n=>{as(n,e)});else if(O_(t))for(const n in t)as(t[n],e);return t}function ni(t,e){const n=Wt;if(n===null)return t;const i=Zc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=De]=e[r];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&as(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function es(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Br(),_n(l,n,8,[t.el,a,t,e]),jr())}}function Dd(t,e){return ae(t)?(()=>ht({name:t.name},e,{setup:t}))():t}const Ol=t=>!!t.type.__asyncLoader,o0=t=>t.type.__isKeepAlive;function cC(t,e){a0(t,"a",e)}function uC(t,e){a0(t,"da",e)}function a0(t,e,n=ct){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)o0(s.parent.vnode)&&hC(i,e,n,s),s=s.parent}}function hC(t,e,n,i){const s=Qc(e,t,i,!0);u0(()=>{bd(i[e],s)},n)}function Qc(t,e,n=ct,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Br(),br(n);const a=_n(e,n,t,o);return gs(),jr(),a});return i?s.unshift(r):s.push(r),r}}const pi=t=>(e,n=ct)=>(!qo||t==="sp")&&Qc(t,(...i)=>e(...i),n),l0=pi("bm"),fC=pi("m"),dC=pi("bu"),pC=pi("u"),c0=pi("bum"),u0=pi("um"),mC=pi("sp"),gC=pi("rtg"),vC=pi("rtc");function yC(t,e=ct){Qc("ec",t,e)}const h0="components";function $n(t,e){return wC(h0,t,!0,e)||t}const _C=Symbol.for("v-ndc");function wC(t,e,n=!0,i=!1){const s=Wt||ct;if(s){const r=s.type;if(t===h0){const a=YC(r,!1);if(a&&(a===e||a===Fn(e)||a===Wc(Fn(e))))return r}const o=Zm(s[t]||r[t],e)||Zm(s.appContext[t],e);return!o&&i?r:o}}function Zm(t,e){return t&&(t[e]||t[Fn(e)]||t[Wc(Fn(e))])}function Io(t,e,n,i){let s;const r=n&&n[i];if(G(t)||nt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Gh=t=>t?T0(t)?Zc(t)||t.proxy:Gh(t.parent):null,Co=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gh(t.parent),$root:t=>Gh(t.root),$emit:t=>t.emit,$options:t=>Md(t),$forceUpdate:t=>t.f||(t.f=()=>Od(t.update)),$nextTick:t=>t.n||(t.n=Gl.bind(t.proxy)),$watch:t=>lC.bind(t)}),Qu=(t,e)=>t!==De&&!t.__isScriptSetup&&me(t,e),bC={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Qu(i,e))return o[e]=1,i[e];if(s!==De&&me(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,r[e];if(n!==De&&me(n,e))return o[e]=4,n[e];Yh&&(o[e]=0)}}const u=Co[e];let h,f;if(u)return e==="$attrs"&&Bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&me(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Qu(s,e)?(s[e]=n,!0):i!==De&&me(i,e)?(i[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==De&&me(t,o)||Qu(e,o)||(a=r[0])&&me(a,o)||me(i,o)||me(Co,o)||me(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function eg(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yh=!0;function EC(t){const e=Md(t),n=t.proxy,i=t.ctx;Yh=!1,e.beforeCreate&&tg(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:x,unmounted:C,render:K,renderTracked:re,renderTriggered:ve,errorCaptured:Oe,serverPrefetch:Ve,expose:yt,inheritAttrs:Xt,components:ln,directives:Jt,filters:Zi}=e;if(c&&TC(c,i,null),o)for(const Ce in o){const ye=o[Ce];ae(ye)&&(i[Ce]=ye.bind(n))}if(s){const Ce=s.call(n,n);Ne(Ce)&&(t.data=di(Ce))}if(Yh=!0,r)for(const Ce in r){const ye=r[Ce],cn=ae(ye)?ye.bind(n,n):ae(ye.get)?ye.get.bind(n,n):yn,be=!ae(ye)&&ae(ye.set)?ye.set.bind(n):yn,rt=ie({get:cn,set:be});Object.defineProperty(i,Ce,{enumerable:!0,configurable:!0,get:()=>rt.value,set:ze=>rt.value=ze})}if(a)for(const Ce in a)f0(a[Ce],i,n,Ce);if(l){const Ce=ae(l)?l.call(n):l;Reflect.ownKeys(Ce).forEach(ye=>{cr(ye,Ce[ye])})}u&&tg(u,t,"c");function Ke(Ce,ye){G(ye)?ye.forEach(cn=>Ce(cn.bind(n))):ye&&Ce(ye.bind(n))}if(Ke(l0,h),Ke(fC,f),Ke(dC,d),Ke(pC,p),Ke(cC,v),Ke(uC,y),Ke(yC,Oe),Ke(vC,re),Ke(gC,ve),Ke(c0,b),Ke(u0,C),Ke(mC,Ve),G(yt))if(yt.length){const Ce=t.exposed||(t.exposed={});yt.forEach(ye=>{Object.defineProperty(Ce,ye,{get:()=>n[ye],set:cn=>n[ye]=cn})})}else t.exposed||(t.exposed={});K&&t.render===yn&&(t.render=K),Xt!=null&&(t.inheritAttrs=Xt),ln&&(t.components=ln),Jt&&(t.directives=Jt)}function TC(t,e,n=yn){G(t)&&(t=Qh(t));for(const i in t){const s=t[i];let r;Ne(s)?"default"in s?r=nn(s.from||i,s.default,!0):r=nn(s.from||i):r=nn(s),Ze(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function tg(t,e,n){_n(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function f0(t,e,n,i){const s=i.includes(".")?r0(n,i):()=>n[i];if(nt(t)){const r=e[t];ae(r)&&Pn(s,r)}else if(ae(t))Pn(s,t.bind(n));else if(Ne(t))if(G(t))t.forEach(r=>f0(r,e,n,i));else{const r=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(r)&&Pn(s,r,t)}}function Md(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ql(l,c,o,!0)),Ql(l,e,o)),Ne(e)&&r.set(e,l),l}function Ql(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ql(t,r,n,!0),s&&s.forEach(o=>Ql(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=IC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IC={data:ng,props:ig,emits:ig,methods:po,computed:po,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:po,directives:po,watch:SC,provide:ng,inject:CC};function ng(t,e){return e?t?function(){return ht(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function CC(t,e){return po(Qh(t),Qh(e))}function Qh(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function po(t,e){return t?ht(Object.create(null),t,e):e}function ig(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:ht(Object.create(null),eg(t),eg(e??{})):e}function SC(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const i in e)n[i]=Pt(t[i],e[i]);return n}function d0(){return{app:null,config:{isNativeTag:nI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kC=0;function AC(t,e){return function(i,s=null){ae(i)||(i=ht({},i)),s!=null&&!Ne(s)&&(s=null);const r=d0(),o=new Set;let a=!1;const l=r.app={_uid:kC++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ZC,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ae(c.install)?(o.add(c),c.install(l,...u)):ae(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=se(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Zc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Xl=l;try{return c()}finally{Xl=null}}};return l}}let Xl=null;function cr(t,e){if(ct){let n=ct.provides;const i=ct.parent&&ct.parent.provides;i===n&&(n=ct.provides=Object.create(i)),n[t]=e}}function nn(t,e,n=!1){const i=ct||Wt;if(i||Xl){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Xl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(i&&i.proxy):e}}function RC(t,e,n,i=!1){const s={},r={};Wl(r,Jc,1),t.propsDefaults=Object.create(null),p0(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:HI(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function xC(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=we(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Gc(t.emitsOptions,f))continue;const d=e[f];if(l)if(me(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=Fn(f);s[p]=Xh(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{p0(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Ur(h))===h||!me(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Xh(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!me(e,h))&&(delete r[h],c=!0)}c&&si(t,"set","$attrs")}function p0(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(xl(l))continue;const c=e[l];let u;s&&me(s,u=Fn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=we(n),c=a||De;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Xh(s,l,h,c[h],t,!me(c,h))}}return o}function Xh(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ae(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(br(s),i=c[n]=l.call(null,e),gs())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ur(n))&&(i=!0))}return i}function m0(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ae(t)){const u=h=>{l=!0;const[f,d]=m0(h,e,!0);ht(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ne(t)&&i.set(t,or),or;if(G(r))for(let u=0;u<r.length;u++){const h=Fn(r[u]);sg(h)&&(o[h]=De)}else if(r)for(const u in r){const h=Fn(u);if(sg(h)){const f=r[u],d=o[h]=G(f)||ae(f)?{type:f}:ht({},f);if(d){const p=ag(Boolean,d.type),v=ag(String,d.type);d[0]=p>-1,d[1]=v<0||p<v,(p>-1||me(d,"default"))&&a.push(h)}}}const c=[o,a];return Ne(t)&&i.set(t,c),c}function sg(t){return t[0]!=="$"}function rg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function og(t,e){return rg(t)===rg(e)}function ag(t,e){return G(e)?e.findIndex(n=>og(n,t)):ae(e)&&og(e,t)?0:-1}const g0=t=>t[0]==="_"||t==="$stable",Ld=t=>G(t)?t.map(kn):[kn(t)],NC=(t,e,n)=>{if(e._n)return e;const i=Pd((...s)=>Ld(e(...s)),n);return i._c=!1,i},v0=(t,e,n)=>{const i=t._ctx;for(const s in t){if(g0(s))continue;const r=t[s];if(ae(r))e[s]=NC(s,r,i);else if(r!=null){const o=Ld(r);e[s]=()=>o}}},y0=(t,e)=>{const n=Ld(e);t.slots.default=()=>n},OC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),Wl(e,"_",n)):v0(e,t.slots={})}else t.slots={},e&&y0(t,e);Wl(t.slots,Jc,1)},PC=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=De;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ht(s,e),!n&&a===1&&delete s._):(r=!e.$stable,v0(e,s)),o=e}else e&&(y0(t,e),o={default:1});if(r)for(const a in s)!g0(a)&&!(a in o)&&delete s[a]};function Jh(t,e,n,i,s=!1){if(G(t)){t.forEach((f,d)=>Jh(f,e&&(G(e)?e[d]:e),n,i,s));return}if(Ol(i)&&!s)return;const r=i.shapeFlag&4?Zc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,me(h,c)&&(h[c]=null)):Ze(c)&&(c.value=null)),ae(l))xi(l,a,12,[o,u]);else{const f=nt(l),d=Ze(l);if(f||d){const p=()=>{if(t.f){const v=f?me(h,l)?h[l]:u[l]:l.value;s?G(v)&&bd(v,r):G(v)?v.includes(r)||v.push(r):f?(u[l]=[r],me(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,me(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Ft(p,n)):p()}}}const Ft=aC;function DC(t){return MC(t)}function MC(t,e){const n=jh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=yn,insertStaticContent:p}=t,v=(m,g,w,E=null,I=null,A=null,F=!1,O=null,P=!!g.dynamicChildren)=>{if(m===g)return;m&&!so(m,g)&&(E=T(m),ze(m,I,A,!0),m=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:R,ref:W,shapeFlag:V}=g;switch(R){case Xc:y(m,g,w,E);break;case Ts:_(m,g,w,E);break;case Xu:m==null&&b(g,w,E,F);break;case Xe:ln(m,g,w,E,I,A,F,O,P);break;default:V&1?K(m,g,w,E,I,A,F,O,P):V&6?Jt(m,g,w,E,I,A,F,O,P):(V&64||V&128)&&R.process(m,g,w,E,I,A,F,O,P,D)}W!=null&&I&&Jh(W,m&&m.ref,A,g||m,!g)},y=(m,g,w,E)=>{if(m==null)i(g.el=a(g.children),w,E);else{const I=g.el=m.el;g.children!==m.children&&c(I,g.children)}},_=(m,g,w,E)=>{m==null?i(g.el=l(g.children||""),w,E):g.el=m.el},b=(m,g,w,E)=>{[m.el,m.anchor]=p(m.children,g,w,E,m.el,m.anchor)},x=({el:m,anchor:g},w,E)=>{let I;for(;m&&m!==g;)I=f(m),i(m,w,E),m=I;i(g,w,E)},C=({el:m,anchor:g})=>{let w;for(;m&&m!==g;)w=f(m),s(m),m=w;s(g)},K=(m,g,w,E,I,A,F,O,P)=>{F=F||g.type==="svg",m==null?re(g,w,E,I,A,F,O,P):Ve(m,g,I,A,F,O,P)},re=(m,g,w,E,I,A,F,O)=>{let P,R;const{type:W,props:V,shapeFlag:q,transition:te,dirs:ce}=m;if(P=m.el=o(m.type,A,V&&V.is,V),q&8?u(P,m.children):q&16&&Oe(m.children,P,null,E,I,A&&W!=="foreignObject",F,O),ce&&es(m,null,E,"created"),ve(P,m,m.scopeId,F,E),V){for(const Ae in V)Ae!=="value"&&!xl(Ae)&&r(P,Ae,null,V[Ae],A,m.children,E,I,_t);"value"in V&&r(P,"value",null,V.value),(R=V.onVnodeBeforeMount)&&Sn(R,E,m)}ce&&es(m,null,E,"beforeMount");const xe=(!I||I&&!I.pendingBranch)&&te&&!te.persisted;xe&&te.beforeEnter(P),i(P,g,w),((R=V&&V.onVnodeMounted)||xe||ce)&&Ft(()=>{R&&Sn(R,E,m),xe&&te.enter(P),ce&&es(m,null,E,"mounted")},I)},ve=(m,g,w,E,I)=>{if(w&&d(m,w),E)for(let A=0;A<E.length;A++)d(m,E[A]);if(I){let A=I.subTree;if(g===A){const F=I.vnode;ve(m,F,F.scopeId,F.slotScopeIds,I.parent)}}},Oe=(m,g,w,E,I,A,F,O,P=0)=>{for(let R=P;R<m.length;R++){const W=m[R]=O?bi(m[R]):kn(m[R]);v(null,W,g,w,E,I,A,F,O)}},Ve=(m,g,w,E,I,A,F)=>{const O=g.el=m.el;let{patchFlag:P,dynamicChildren:R,dirs:W}=g;P|=m.patchFlag&16;const V=m.props||De,q=g.props||De;let te;w&&ts(w,!1),(te=q.onVnodeBeforeUpdate)&&Sn(te,w,g,m),W&&es(g,m,w,"beforeUpdate"),w&&ts(w,!0);const ce=I&&g.type!=="foreignObject";if(R?yt(m.dynamicChildren,R,O,w,E,ce,A):F||ye(m,g,O,null,w,E,ce,A,!1),P>0){if(P&16)Xt(O,g,V,q,w,E,I);else if(P&2&&V.class!==q.class&&r(O,"class",null,q.class,I),P&4&&r(O,"style",V.style,q.style,I),P&8){const xe=g.dynamicProps;for(let Ae=0;Ae<xe.length;Ae++){const Ge=xe[Ae],un=V[Ge],Ks=q[Ge];(Ks!==un||Ge==="value")&&r(O,Ge,un,Ks,I,m.children,w,E,_t)}}P&1&&m.children!==g.children&&u(O,g.children)}else!F&&R==null&&Xt(O,g,V,q,w,E,I);((te=q.onVnodeUpdated)||W)&&Ft(()=>{te&&Sn(te,w,g,m),W&&es(g,m,w,"updated")},E)},yt=(m,g,w,E,I,A,F)=>{for(let O=0;O<g.length;O++){const P=m[O],R=g[O],W=P.el&&(P.type===Xe||!so(P,R)||P.shapeFlag&70)?h(P.el):w;v(P,R,W,null,E,I,A,F,!0)}},Xt=(m,g,w,E,I,A,F)=>{if(w!==E){if(w!==De)for(const O in w)!xl(O)&&!(O in E)&&r(m,O,w[O],null,F,g.children,I,A,_t);for(const O in E){if(xl(O))continue;const P=E[O],R=w[O];P!==R&&O!=="value"&&r(m,O,R,P,F,g.children,I,A,_t)}"value"in E&&r(m,"value",w.value,E.value)}},ln=(m,g,w,E,I,A,F,O,P)=>{const R=g.el=m?m.el:a(""),W=g.anchor=m?m.anchor:a("");let{patchFlag:V,dynamicChildren:q,slotScopeIds:te}=g;te&&(O=O?O.concat(te):te),m==null?(i(R,w,E),i(W,w,E),Oe(g.children,w,W,I,A,F,O,P)):V>0&&V&64&&q&&m.dynamicChildren?(yt(m.dynamicChildren,q,w,I,A,F,O),(g.key!=null||I&&g===I.subTree)&&_0(m,g,!0)):ye(m,g,w,W,I,A,F,O,P)},Jt=(m,g,w,E,I,A,F,O,P)=>{g.slotScopeIds=O,m==null?g.shapeFlag&512?I.ctx.activate(g,w,E,F,P):Zi(g,w,E,I,A,F,P):qn(m,g,P)},Zi=(m,g,w,E,I,A,F)=>{const O=m.component=HC(m,E,I);if(o0(m)&&(O.ctx.renderer=D),WC(O),O.asyncDep){if(I&&I.registerDep(O,Ke),!m.el){const P=O.subTree=se(Ts);_(null,P,g,w)}return}Ke(O,m,g,w,I,A,F)},qn=(m,g,w)=>{const E=g.component=m.component;if(sC(m,g,w))if(E.asyncDep&&!E.asyncResolved){Ce(E,g,w);return}else E.next=g,JI(E.update),E.update();else g.el=m.el,E.vnode=g},Ke=(m,g,w,E,I,A,F)=>{const O=()=>{if(m.isMounted){let{next:W,bu:V,u:q,parent:te,vnode:ce}=m,xe=W,Ae;ts(m,!1),W?(W.el=ce.el,Ce(m,W,F)):W=ce,V&&Nl(V),(Ae=W.props&&W.props.onVnodeBeforeUpdate)&&Sn(Ae,te,W,ce),ts(m,!0);const Ge=Yu(m),un=m.subTree;m.subTree=Ge,v(un,Ge,h(un.el),T(un),m,I,A),W.el=Ge.el,xe===null&&rC(m,Ge.el),q&&Ft(q,I),(Ae=W.props&&W.props.onVnodeUpdated)&&Ft(()=>Sn(Ae,te,W,ce),I)}else{let W;const{el:V,props:q}=g,{bm:te,m:ce,parent:xe}=m,Ae=Ol(g);if(ts(m,!1),te&&Nl(te),!Ae&&(W=q&&q.onVnodeBeforeMount)&&Sn(W,xe,g),ts(m,!0),V&&Ee){const Ge=()=>{m.subTree=Yu(m),Ee(V,m.subTree,m,I,null)};Ae?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Ge()):Ge()}else{const Ge=m.subTree=Yu(m);v(null,Ge,w,E,m,I,A),g.el=Ge.el}if(ce&&Ft(ce,I),!Ae&&(W=q&&q.onVnodeMounted)){const Ge=g;Ft(()=>Sn(W,xe,Ge),I)}(g.shapeFlag&256||xe&&Ol(xe.vnode)&&xe.vnode.shapeFlag&256)&&m.a&&Ft(m.a,I),m.isMounted=!0,g=w=E=null}},P=m.effect=new Cd(O,()=>Od(R),m.scope),R=m.update=()=>P.run();R.id=m.uid,ts(m,!0),R()},Ce=(m,g,w)=>{g.component=m;const E=m.vnode.props;m.vnode=g,m.next=null,xC(m,g.props,E,w),PC(m,g.children,w),Br(),Xm(),jr()},ye=(m,g,w,E,I,A,F,O,P=!1)=>{const R=m&&m.children,W=m?m.shapeFlag:0,V=g.children,{patchFlag:q,shapeFlag:te}=g;if(q>0){if(q&128){be(R,V,w,E,I,A,F,O,P);return}else if(q&256){cn(R,V,w,E,I,A,F,O,P);return}}te&8?(W&16&&_t(R,I,A),V!==R&&u(w,V)):W&16?te&16?be(R,V,w,E,I,A,F,O,P):_t(R,I,A,!0):(W&8&&u(w,""),te&16&&Oe(V,w,E,I,A,F,O,P))},cn=(m,g,w,E,I,A,F,O,P)=>{m=m||or,g=g||or;const R=m.length,W=g.length,V=Math.min(R,W);let q;for(q=0;q<V;q++){const te=g[q]=P?bi(g[q]):kn(g[q]);v(m[q],te,w,null,I,A,F,O,P)}R>W?_t(m,I,A,!0,!1,V):Oe(g,w,E,I,A,F,O,P,V)},be=(m,g,w,E,I,A,F,O,P)=>{let R=0;const W=g.length;let V=m.length-1,q=W-1;for(;R<=V&&R<=q;){const te=m[R],ce=g[R]=P?bi(g[R]):kn(g[R]);if(so(te,ce))v(te,ce,w,null,I,A,F,O,P);else break;R++}for(;R<=V&&R<=q;){const te=m[V],ce=g[q]=P?bi(g[q]):kn(g[q]);if(so(te,ce))v(te,ce,w,null,I,A,F,O,P);else break;V--,q--}if(R>V){if(R<=q){const te=q+1,ce=te<W?g[te].el:E;for(;R<=q;)v(null,g[R]=P?bi(g[R]):kn(g[R]),w,ce,I,A,F,O,P),R++}}else if(R>q)for(;R<=V;)ze(m[R],I,A,!0),R++;else{const te=R,ce=R,xe=new Map;for(R=ce;R<=q;R++){const zt=g[R]=P?bi(g[R]):kn(g[R]);zt.key!=null&&xe.set(zt.key,R)}let Ae,Ge=0;const un=q-ce+1;let Ks=!1,Um=0;const io=new Array(un);for(R=0;R<un;R++)io[R]=0;for(R=te;R<=V;R++){const zt=m[R];if(Ge>=un){ze(zt,I,A,!0);continue}let Cn;if(zt.key!=null)Cn=xe.get(zt.key);else for(Ae=ce;Ae<=q;Ae++)if(io[Ae-ce]===0&&so(zt,g[Ae])){Cn=Ae;break}Cn===void 0?ze(zt,I,A,!0):(io[Cn-ce]=R+1,Cn>=Um?Um=Cn:Ks=!0,v(zt,g[Cn],w,null,I,A,F,O,P),Ge++)}const Vm=Ks?LC(io):or;for(Ae=Vm.length-1,R=un-1;R>=0;R--){const zt=ce+R,Cn=g[zt],Bm=zt+1<W?g[zt+1].el:E;io[R]===0?v(null,Cn,w,Bm,I,A,F,O,P):Ks&&(Ae<0||R!==Vm[Ae]?rt(Cn,w,Bm,2):Ae--)}}},rt=(m,g,w,E,I=null)=>{const{el:A,type:F,transition:O,children:P,shapeFlag:R}=m;if(R&6){rt(m.component.subTree,g,w,E);return}if(R&128){m.suspense.move(g,w,E);return}if(R&64){F.move(m,g,w,D);return}if(F===Xe){i(A,g,w);for(let V=0;V<P.length;V++)rt(P[V],g,w,E);i(m.anchor,g,w);return}if(F===Xu){x(m,g,w);return}if(E!==2&&R&1&&O)if(E===0)O.beforeEnter(A),i(A,g,w),Ft(()=>O.enter(A),I);else{const{leave:V,delayLeave:q,afterLeave:te}=O,ce=()=>i(A,g,w),xe=()=>{V(A,()=>{ce(),te&&te()})};q?q(A,ce,xe):xe()}else i(A,g,w)},ze=(m,g,w,E=!1,I=!1)=>{const{type:A,props:F,ref:O,children:P,dynamicChildren:R,shapeFlag:W,patchFlag:V,dirs:q}=m;if(O!=null&&Jh(O,null,w,m,!0),W&256){g.ctx.deactivate(m);return}const te=W&1&&q,ce=!Ol(m);let xe;if(ce&&(xe=F&&F.onVnodeBeforeUnmount)&&Sn(xe,g,m),W&6)Xa(m.component,w,E);else{if(W&128){m.suspense.unmount(w,E);return}te&&es(m,null,g,"beforeUnmount"),W&64?m.type.remove(m,g,w,I,D,E):R&&(A!==Xe||V>0&&V&64)?_t(R,g,w,!1,!0):(A===Xe&&V&384||!I&&W&16)&&_t(P,g,w),E&&Ws(m)}(ce&&(xe=F&&F.onVnodeUnmounted)||te)&&Ft(()=>{xe&&Sn(xe,g,m),te&&es(m,null,g,"unmounted")},w)},Ws=m=>{const{type:g,el:w,anchor:E,transition:I}=m;if(g===Xe){qs(w,E);return}if(g===Xu){C(m);return}const A=()=>{s(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(m.shapeFlag&1&&I&&!I.persisted){const{leave:F,delayLeave:O}=I,P=()=>F(w,A);O?O(m.el,A,P):P()}else A()},qs=(m,g)=>{let w;for(;m!==g;)w=f(m),s(m),m=w;s(g)},Xa=(m,g,w)=>{const{bum:E,scope:I,update:A,subTree:F,um:O}=m;E&&Nl(E),I.stop(),A&&(A.active=!1,ze(F,m,g,w)),O&&Ft(O,g),Ft(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},_t=(m,g,w,E=!1,I=!1,A=0)=>{for(let F=A;F<m.length;F++)ze(m[F],g,w,E,I)},T=m=>m.shapeFlag&6?T(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),U=(m,g,w)=>{m==null?g._vnode&&ze(g._vnode,null,null,!0):v(g._vnode||null,m,g,null,null,null,w),Xm(),t0(),g._vnode=m},D={p:v,um:ze,m:rt,r:Ws,mt:Zi,mc:Oe,pc:ye,pbc:yt,n:T,o:t};let z,Ee;return e&&([z,Ee]=e(D)),{render:U,hydrate:z,createApp:AC(U,z)}}function ts({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _0(t,e,n=!1){const i=t.children,s=e.children;if(G(i)&&G(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bi(s[r]),a.el=o.el),n||_0(o,a)),a.type===Xc&&(a.el=o.el)}}function LC(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const FC=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),Xc=Symbol.for("v-txt"),Ts=Symbol.for("v-cmt"),Xu=Symbol.for("v-stc"),So=[];let pn=null;function X(t=!1){So.push(pn=t?null:[])}function $C(){So.pop(),pn=So[So.length-1]||null}let Wo=1;function lg(t){Wo+=t}function w0(t){return t.dynamicChildren=Wo>0?pn||or:null,$C(),Wo>0&&pn&&pn.push(t),t}function le(t,e,n,i,s,r){return w0(S(t,e,n,i,s,r,!0))}function on(t,e,n,i,s){return w0(se(t,e,n,i,s,!0))}function Zh(t){return t?t.__v_isVNode===!0:!1}function so(t,e){return t.type===e.type&&t.key===e.key}const Jc="__vInternal",b0=({key:t})=>t??null,Pl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Ze(t)||ae(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,i=0,s=null,r=t===Xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&b0(e),ref:e&&Pl(e),scopeId:Yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Fd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Wo>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const se=UC;function UC(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===_C)&&(t=Ts),Zh(t)){const a=wr(t,e,!0);return n&&Fd(a,n),Wo>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(t)]=a:pn.push(a)),a.patchFlag|=-2,a}if(QC(t)&&(t=t.__vccOpts),e){e=VC(e);let{class:a,style:l}=e;a&&!nt(a)&&(e.class=Vr(a)),Ne(l)&&(K_(l)&&!G(l)&&(l=ht({},l)),e.style=_r(l))}const o=nt(t)?1:oC(t)?128:FC(t)?64:Ne(t)?4:ae(t)?2:0;return S(t,e,n,i,s,o,r,!0)}function VC(t){return t?K_(t)||Jc in t?ht({},t):t:null}function wr(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?BC(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&b0(a),ref:e&&e.ref?n&&s?G(s)?s.concat(Pl(e)):[s,Pl(e)]:Pl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _a(t=" ",e=0){return se(Xc,null,t,e)}function Zt(t="",e=!1){return e?(X(),on(Ts,null,t)):se(Ts,null,t)}function kn(t){return t==null||typeof t=="boolean"?se(Ts):G(t)?se(Xe,null,t.slice()):typeof t=="object"?bi(t):se(Xc,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wr(t)}function Fd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Jc in e)?e._ctx=Wt:s===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),i&64?(n=16,e=[_a(e)]):n=8);t.children=e,t.shapeFlag|=n}function BC(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Vr([e.class,i.class]));else if(s==="style")e.style=_r([e.style,i.style]);else if(zc(s)){const r=e[s],o=i[s];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Sn(t,e,n,i=null){_n(t,e,7,[n,i])}const jC=d0();let zC=0;function HC(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||jC,r={uid:zC++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new M_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:m0(i,s),emitsOptions:i0(i,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:i.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tC.bind(null,r),t.ce&&t.ce(r),r}let ct=null;const E0=()=>ct||Wt;let $d,Gs,cg="__VUE_INSTANCE_SETTERS__";(Gs=jh()[cg])||(Gs=jh()[cg]=[]),Gs.push(t=>ct=t),$d=t=>{Gs.length>1?Gs.forEach(e=>e(t)):Gs[0](t)};const br=t=>{$d(t),t.scope.on()},gs=()=>{ct&&ct.scope.off(),$d(null)};function T0(t){return t.vnode.shapeFlag&4}let qo=!1;function WC(t,e=!1){qo=e;const{props:n,children:i}=t.vnode,s=T0(t);RC(t,n,s,e),OC(t,i);const r=s?qC(t,e):void 0;return qo=!1,r}function qC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=G_(new Proxy(t.ctx,bC));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?GC(t):null;br(t),Br();const r=xi(i,t,0,[t.props,s]);if(jr(),gs(),x_(r)){if(r.then(gs,gs),e)return r.then(o=>{ug(t,o,e)}).catch(o=>{Kc(o,t,0)});t.asyncDep=r}else ug(t,r,e)}else I0(t,e)}function ug(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=J_(e)),I0(t,n)}let hg;function I0(t,e,n){const i=t.type;if(!t.render){if(!e&&hg&&!i.render){const s=i.template||Md(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ht(ht({isCustomElement:r,delimiters:a},o),l);i.render=hg(s,c)}}t.render=i.render||yn}br(t),Br(),EC(t),jr(),gs()}function KC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Bt(t,"get","$attrs"),e[n]}}))}function GC(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return KC(t)},slots:t.slots,emit:t.emit,expose:e}}function Zc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(J_(G_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Co)return Co[n](t)},has(e,n){return n in e||n in Co}}))}function YC(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function QC(t){return ae(t)&&"__vccOpts"in t}const ie=(t,e)=>YI(t,e,qo);function Ud(t,e,n){const i=arguments.length;return i===2?Ne(e)&&!G(e)?Zh(e)?se(t,null,[e]):se(t,e):se(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zh(n)&&(n=[n]),se(t,e,n))}const XC=Symbol.for("v-scx"),JC=()=>nn(XC),ZC="3.3.2",eS="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,fg=rs&&rs.createElement("template"),tS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?rs.createElementNS(eS,t):rs.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>rs.createTextNode(t),createComment:t=>rs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{fg.innerHTML=i?`<svg>${t}</svg>`:t;const a=fg.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nS(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function iS(t,e,n){const i=t.style,s=nt(n);if(n&&!s){if(e&&!nt(e))for(const r in e)n[r]==null&&ef(i,r,"");for(const r in n)ef(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const dg=/\s*!important$/;function ef(t,e,n){if(G(n))n.forEach(i=>ef(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sS(t,e);dg.test(n)?t.setProperty(Ur(i),n.replace(dg,""),"important"):t[i]=n}}const pg=["Webkit","Moz","ms"],Ju={};function sS(t,e){const n=Ju[e];if(n)return n;let i=Fn(e);if(i!=="filter"&&i in t)return Ju[e]=i;i=Wc(i);for(let s=0;s<pg.length;s++){const r=pg[s]+i;if(r in t)return Ju[e]=r}return e}const mg="http://www.w3.org/1999/xlink";function rS(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mg,e.slice(6,e.length)):t.setAttributeNS(mg,e,n);else{const r=dI(e);n==null||r&&!P_(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oS(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=P_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Yn(t,e,n,i){t.addEventListener(e,n,i)}function aS(t,e,n,i){t.removeEventListener(e,n,i)}function lS(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=cS(e);if(i){const c=r[e]=fS(i,s);Yn(t,a,c,l)}else o&&(aS(t,a,o,l),r[e]=void 0)}}const gg=/(?:Once|Passive|Capture)$/;function cS(t){let e;if(gg.test(t)){e={};let i;for(;i=t.match(gg);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ur(t.slice(2)),e]}let Zu=0;const uS=Promise.resolve(),hS=()=>Zu||(uS.then(()=>Zu=0),Zu=Date.now());function fS(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_n(dS(i,n.value),e,5,[i])};return n.value=t,n.attached=hS(),n}function dS(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const vg=/^on[a-z]/,pS=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?nS(t,i,s):e==="style"?iS(t,n,i):zc(e)?wd(e)||lS(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mS(t,e,i,s))?oS(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rS(t,e,i,s))};function mS(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&vg.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vg.test(e)&&nt(n)?!1:e in t}const Fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Nl(e,n):e};function gS(t){t.target.composing=!0}function yg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $i={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Fi(s);const r=i||s.props&&s.props.type==="number";Yn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ql(a)),t._assign(a)}),n&&Yn(t,"change",()=>{t.value=t.value.trim()}),e||(Yn(t,"compositionstart",gS),Yn(t,"compositionend",yg),Yn(t,"change",yg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=Fi(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&ql(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vS={deep:!0,created(t,e,n){t._assign=Fi(n),Yn(t,"change",()=>{const i=t._modelValue,s=Er(t),r=t.checked,o=t._assign;if(G(i)){const a=Td(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if($r(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(C0(t,r))})},mounted:_g,beforeUpdate(t,e,n){t._assign=Fi(n),_g(t,e,n)}};function _g(t,{value:e,oldValue:n},i){t._modelValue=e,G(e)?t.checked=Td(e,i.props.value)>-1:$r(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=bs(e,C0(t,!0)))}const yS={created(t,{value:e},n){t.checked=bs(e,n.props.value),t._assign=Fi(n),Yn(t,"change",()=>{t._assign(Er(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t._assign=Fi(i),e!==n&&(t.checked=bs(e,i.props.value))}},_S={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=$r(e);Yn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ql(Er(o)):Er(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=Fi(i)},mounted(t,{value:e}){wg(t,e)},beforeUpdate(t,e,n){t._assign=Fi(n)},updated(t,{value:e}){wg(t,e)}};function wg(t,e){const n=t.multiple;if(!(n&&!G(e)&&!$r(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=Er(r);if(n)G(e)?r.selected=Td(e,o)>-1:r.selected=e.has(o);else if(bs(Er(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Er(t){return"_value"in t?t._value:t.value}function C0(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tf={created(t,e,n){sl(t,e,n,null,"created")},mounted(t,e,n){sl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){sl(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){sl(t,e,n,i,"updated")}};function wS(t,e){switch(t){case"SELECT":return _S;case"TEXTAREA":return $i;default:switch(e){case"checkbox":return vS;case"radio":return yS;default:return $i}}}function sl(t,e,n,i,s){const o=wS(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}const bS=["ctrl","shift","alt","meta"],ES={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>bS.some(n=>t[`${n}Key`]&&!e.includes(n))},et=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=ES[e[s]];if(r&&r(n,e))return}return t(n,...i)},TS=ht({patchProp:pS},tS);let bg;function IS(){return bg||(bg=DC(TS))}const CS=(...t)=>{const e=IS().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=SS(i);if(!s)return;const r=e._component;!ae(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function SS(t){return nt(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xs=typeof window<"u";function kS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function eh(t,e){const n={};for(const i in e){const s=e[i];n[i]=bn(s)?s.map(t):t(s)}return n}const ko=()=>{},bn=Array.isArray,AS=/\/$/,RS=t=>t.replace(AS,"");function th(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=PS(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function xS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Eg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function NS(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Tr(e.matched[i],n.matched[s])&&S0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function S0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!OS(t[n],e[n]))return!1;return!0}function OS(t,e){return bn(t)?Tg(t,e):bn(e)?Tg(e,t):t===e}function Tg(t,e){return bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function PS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ko;(function(t){t.pop="pop",t.push="push"})(Ko||(Ko={}));var Ao;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ao||(Ao={}));function DS(t){if(!t)if(Xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RS(t)}const MS=/^[^#]+#/;function LS(t,e){return t.replace(MS,"#")+e}function FS(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const eu=()=>({left:window.pageXOffset,top:window.pageYOffset});function $S(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=FS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ig(t,e){return(history.state?history.state.position-e:-1)+t}const nf=new Map;function US(t,e){nf.set(t,e)}function VS(t){const e=nf.get(t);return nf.delete(t),e}let BS=()=>location.protocol+"//"+location.host;function k0(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Eg(l,"")}return Eg(n,t)+i+s}function jS(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=k0(t,location),p=n.value,v=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}y=v?f.position-v.position:0}else i(d);s.forEach(_=>{_(n.value,p,{delta:y,type:Ko.pop,direction:y?y>0?Ao.forward:Ao.back:Ao.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Se({},f.state,{scroll:eu()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Cg(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?eu():null}}function zS(t){const{history:e,location:n}=window,i={value:k0(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:BS()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Se({},e.state,Cg(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Se({},s.value,e.state,{forward:l,scroll:eu()});r(u.current,u,!0);const h=Se({},Cg(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function HS(t){t=DS(t);const e=zS(t),n=jS(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Se({location:"",base:t,go:i,createHref:LS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function WS(t){return typeof t=="string"||t&&typeof t=="object"}function A0(t){return typeof t=="string"||typeof t=="symbol"}const yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},R0=Symbol("");var Sg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sg||(Sg={}));function Ir(t,e){return Se(new Error,{type:t,[R0]:!0},e)}function Kn(t,e){return t instanceof Error&&R0 in t&&(e==null||!!(t.type&e))}const kg="[^/]+?",qS={sensitive:!1,strict:!1,start:!0,end:!0},KS=/[.+*?^${}()[\]/\\]/g;function GS(t,e){const n=Se({},qS,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(KS,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:v,optional:y,regexp:_}=f;r.push({name:p,repeatable:v,optional:y});const b=_||kg;if(b!==kg){d+=10;try{new RegExp(`(${b})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${p}" (${b}): `+C.message)}}let x=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=y&&c.length<2?`(?:/${x})`:"/"+x),y&&(x+="?"),s+=x,d+=20,y&&(d+=-8),v&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:v,optional:y}=d,_=p in c?c[p]:"";if(bn(_)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const b=bn(_)?_.join("/"):_;if(!b)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function YS(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function QS(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=YS(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Ag(i))return 1;if(Ag(s))return-1}return s.length-i.length}function Ag(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XS={type:0,value:""},JS=/[a-zA-Z0-9_]/;function ZS(t){if(!t)return[[]];if(t==="/")return[[XS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:JS.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function ek(t,e,n){const i=GS(ZS(t.path),n),s=Se(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tk(t,e){const n=[],i=new Map;e=Ng({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=nk(u);p.aliasOf=f&&f.record;const v=Ng(e,u),y=[p];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of x)y.push(Se({},p,{components:f?f.record.components:p.components,path:C,aliasOf:f?f.record:p}))}let _,b;for(const x of y){const{path:C}=x;if(h&&C[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";x.path=h.record.path+(C&&re+C)}if(_=ek(x,h,v),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),d&&u.name&&!xg(_)&&o(u.name)),p.children){const K=p.children;for(let re=0;re<K.length;re++)r(K[re],_,f&&f.children[re])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:ko}function o(u){if(A0(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&QS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!x0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xg(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,v;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ir(1,{location:u});v=f.record.name,d=Se(Rg(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Rg(u.params,f.keys.map(b=>b.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(b=>b.re.test(p)),f&&(d=f.parse(p),v=f.record.name);else{if(f=h.name?i.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw Ir(1,{location:u,currentLocation:h});v=f.record.name,d=Se({},h.params,u.params),p=f.stringify(d)}const y=[];let _=f;for(;_;)y.unshift(_.record),_=_.parent;return{name:v,path:p,params:d,matched:y,meta:sk(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Rg(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function nk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ik(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ik(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function xg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sk(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Ng(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function x0(t,e){return e.children.some(n=>n===t||x0(t,n))}const N0=/#/g,rk=/&/g,ok=/\//g,ak=/=/g,lk=/\?/g,O0=/\+/g,ck=/%5B/g,uk=/%5D/g,P0=/%5E/g,hk=/%60/g,D0=/%7B/g,fk=/%7C/g,M0=/%7D/g,dk=/%20/g;function Vd(t){return encodeURI(""+t).replace(fk,"|").replace(ck,"[").replace(uk,"]")}function pk(t){return Vd(t).replace(D0,"{").replace(M0,"}").replace(P0,"^")}function sf(t){return Vd(t).replace(O0,"%2B").replace(dk,"+").replace(N0,"%23").replace(rk,"%26").replace(hk,"`").replace(D0,"{").replace(M0,"}").replace(P0,"^")}function mk(t){return sf(t).replace(ak,"%3D")}function gk(t){return Vd(t).replace(N0,"%23").replace(lk,"%3F")}function vk(t){return t==null?"":gk(t).replace(ok,"%2F")}function Jl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yk(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(O0," "),o=r.indexOf("="),a=Jl(o<0?r:r.slice(0,o)),l=o<0?null:Jl(r.slice(o+1));if(a in e){let c=e[a];bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Og(t){let e="";for(let n in t){const i=t[n];if(n=mk(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(i)?i.map(r=>r&&sf(r)):[i&&sf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function _k(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=bn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const wk=Symbol(""),Pg=Symbol(""),Bd=Symbol(""),L0=Symbol(""),rf=Symbol("");function ro(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ei(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ir(4,{from:n,to:e})):h instanceof Error?a(h):WS(h)?a(Ir(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function nh(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(bk(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ei(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=kS(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Ei(f,n,i,r,o)()}))}}return s}function bk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dg(t){const e=nn(Bd),n=nn(L0),i=ie(()=>e.resolve(Q(t.to))),s=ie(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Tr.bind(null,u));if(f>-1)return f;const d=Mg(l[c-2]);return c>1&&Mg(u)===d&&h[h.length-1].path!==d?h.findIndex(Tr.bind(null,l[c-2])):f}),r=ie(()=>s.value>-1&&Ck(n.params,i.value.params)),o=ie(()=>s.value>-1&&s.value===n.matched.length-1&&S0(n.params,i.value.params));function a(l={}){return Ik(l)?e[Q(t.replace)?"replace":"push"](Q(t.to)).catch(ko):Promise.resolve()}return{route:i,href:ie(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Ek=Dd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dg,setup(t,{slots:e}){const n=di(Dg(t)),{options:i}=nn(Bd),s=ie(()=>({[Lg(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Lg(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Ud("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Tk=Ek;function Ik(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ck(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!bn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Mg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lg=(t,e,n)=>t??e??n,Sk=Dd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=nn(rf),s=ie(()=>t.route||i.value),r=nn(Pg,0),o=ie(()=>{let c=Q(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ie(()=>s.value.matched[o.value]);cr(Pg,ie(()=>o.value+1)),cr(wk,a),cr(rf,s);const l=Ie();return Pn(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Tr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Fg(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Ud(f,Se({},p,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Fg(n.default,{Component:y,route:c})||y}}});function Fg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const F0=Sk;function kk(t){const e=tk(t.routes,t),n=t.parseQuery||yk,i=t.stringifyQuery||Og,s=t.history,r=ro(),o=ro(),a=ro(),l=WI(yi);let c=yi;Xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=eh.bind(null,T=>""+T),h=eh.bind(null,vk),f=eh.bind(null,Jl);function d(T,U){let D,z;return A0(T)?(D=e.getRecordMatcher(T),z=U):z=T,e.addRoute(z,D)}function p(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(T=>T.record)}function y(T){return!!e.getRecordMatcher(T)}function _(T,U){if(U=Se({},U||l.value),typeof T=="string"){const w=th(n,T,U.path),E=e.resolve({path:w.path},U),I=s.createHref(w.fullPath);return Se(w,E,{params:f(E.params),hash:Jl(w.hash),redirectedFrom:void 0,href:I})}let D;if("path"in T)D=Se({},T,{path:th(n,T.path,U.path).path});else{const w=Se({},T.params);for(const E in w)w[E]==null&&delete w[E];D=Se({},T,{params:h(w)}),U.params=h(U.params)}const z=e.resolve(D,U),Ee=T.hash||"";z.params=u(f(z.params));const m=xS(i,Se({},T,{hash:pk(Ee),path:z.path})),g=s.createHref(m);return Se({fullPath:m,hash:Ee,query:i===Og?_k(T.query):T.query||{}},z,{redirectedFrom:void 0,href:g})}function b(T){return typeof T=="string"?th(n,T,l.value.path):Se({},T)}function x(T,U){if(c!==T)return Ir(8,{from:U,to:T})}function C(T){return ve(T)}function K(T){return C(Se(b(T),{replace:!0}))}function re(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:D}=U;let z=typeof D=="function"?D(T):D;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=b(z):{path:z},z.params={}),Se({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function ve(T,U){const D=c=_(T),z=l.value,Ee=T.state,m=T.force,g=T.replace===!0,w=re(D);if(w)return ve(Se(b(w),{state:typeof w=="object"?Se({},Ee,w.state):Ee,force:m,replace:g}),U||D);const E=D;E.redirectedFrom=U;let I;return!m&&NS(i,z,D)&&(I=Ir(16,{to:E,from:z}),rt(z,z,!0,!1)),(I?Promise.resolve(I):yt(E,z)).catch(A=>Kn(A)?Kn(A,2)?A:be(A):ye(A,E,z)).then(A=>{if(A){if(Kn(A,2))return ve(Se({replace:g},b(A.to),{state:typeof A.to=="object"?Se({},Ee,A.to.state):Ee,force:m}),U||E)}else A=ln(E,z,!0,g,Ee);return Xt(E,z,A),A})}function Oe(T,U){const D=x(T,U);return D?Promise.reject(D):Promise.resolve()}function Ve(T){const U=qs.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(T):T()}function yt(T,U){let D;const[z,Ee,m]=Ak(T,U);D=nh(z.reverse(),"beforeRouteLeave",T,U);for(const w of z)w.leaveGuards.forEach(E=>{D.push(Ei(E,T,U))});const g=Oe.bind(null,T,U);return D.push(g),_t(D).then(()=>{D=[];for(const w of r.list())D.push(Ei(w,T,U));return D.push(g),_t(D)}).then(()=>{D=nh(Ee,"beforeRouteUpdate",T,U);for(const w of Ee)w.updateGuards.forEach(E=>{D.push(Ei(E,T,U))});return D.push(g),_t(D)}).then(()=>{D=[];for(const w of T.matched)if(w.beforeEnter&&!U.matched.includes(w))if(bn(w.beforeEnter))for(const E of w.beforeEnter)D.push(Ei(E,T,U));else D.push(Ei(w.beforeEnter,T,U));return D.push(g),_t(D)}).then(()=>(T.matched.forEach(w=>w.enterCallbacks={}),D=nh(m,"beforeRouteEnter",T,U),D.push(g),_t(D))).then(()=>{D=[];for(const w of o.list())D.push(Ei(w,T,U));return D.push(g),_t(D)}).catch(w=>Kn(w,8)?w:Promise.reject(w))}function Xt(T,U,D){for(const z of a.list())Ve(()=>z(T,U,D))}function ln(T,U,D,z,Ee){const m=x(T,U);if(m)return m;const g=U===yi,w=Xs?history.state:{};D&&(z||g?s.replace(T.fullPath,Se({scroll:g&&w&&w.scroll},Ee)):s.push(T.fullPath,Ee)),l.value=T,rt(T,U,D,g),be()}let Jt;function Zi(){Jt||(Jt=s.listen((T,U,D)=>{if(!Xa.listening)return;const z=_(T),Ee=re(z);if(Ee){ve(Se(Ee,{replace:!0}),z).catch(ko);return}c=z;const m=l.value;Xs&&US(Ig(m.fullPath,D.delta),eu()),yt(z,m).catch(g=>Kn(g,12)?g:Kn(g,2)?(ve(g.to,z).then(w=>{Kn(w,20)&&!D.delta&&D.type===Ko.pop&&s.go(-1,!1)}).catch(ko),Promise.reject()):(D.delta&&s.go(-D.delta,!1),ye(g,z,m))).then(g=>{g=g||ln(z,m,!1),g&&(D.delta&&!Kn(g,8)?s.go(-D.delta,!1):D.type===Ko.pop&&Kn(g,20)&&s.go(-1,!1)),Xt(z,m,g)}).catch(ko)}))}let qn=ro(),Ke=ro(),Ce;function ye(T,U,D){be(T);const z=Ke.list();return z.length?z.forEach(Ee=>Ee(T,U,D)):console.error(T),Promise.reject(T)}function cn(){return Ce&&l.value!==yi?Promise.resolve():new Promise((T,U)=>{qn.add([T,U])})}function be(T){return Ce||(Ce=!T,Zi(),qn.list().forEach(([U,D])=>T?D(T):U()),qn.reset()),T}function rt(T,U,D,z){const{scrollBehavior:Ee}=t;if(!Xs||!Ee)return Promise.resolve();const m=!D&&VS(Ig(T.fullPath,0))||(z||!D)&&history.state&&history.state.scroll||null;return Gl().then(()=>Ee(T,U,m)).then(g=>g&&$S(g)).catch(g=>ye(g,T,U))}const ze=T=>s.go(T);let Ws;const qs=new Set,Xa={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:v,resolve:_,options:t,push:C,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ke.add,isReady:cn,install(T){const U=this;T.component("RouterLink",Tk),T.component("RouterView",F0),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(l)}),Xs&&!Ws&&l.value===yi&&(Ws=!0,C(s.location).catch(Ee=>{}));const D={};for(const Ee in yi)D[Ee]=ie(()=>l.value[Ee]);T.provide(Bd,U),T.provide(L0,di(D)),T.provide(rf,l);const z=T.unmount;qs.add(T),T.unmount=function(){qs.delete(T),qs.size<1&&(c=yi,Jt&&Jt(),Jt=null,l.value=yi,Ws=!1,Ce=!1),z()}}};function _t(T){return T.reduce((U,D)=>U.then(()=>Ve(D)),Promise.resolve())}return Xa}function Ak(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Tr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Tr(c,l))||s.push(l))}return[n,i,s]}const Rk={__name:"App",setup(t){return(e,n)=>(X(),on(Q(F0)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw zr(e)},zr=function(t){return new Error("Firebase Database ("+$0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xk=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Nk;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V0=function(t){const e=U0(t);return tu.encodeByteArray(e,!0)},Zl=function(t){return V0(t).replace(/\./g,"")},ec=function(t){try{return tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return B0(void 0,t)}function B0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pk(n)||(t[n]=B0(t[n],e[n]));return t}function Pk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=()=>Dk().__FIREBASE_DEFAULTS__,Lk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},jd=()=>{try{return Mk()||Lk()||Fk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j0=t=>{var e,n;return(n=(e=jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$k=t=>{const e=j0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},z0=()=>{var t;return(t=jd())===null||t===void 0?void 0:t.config},H0=t=>{var e;return(e=jd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zl(JSON.stringify(n)),Zl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function Vk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bk(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q0(){return $0.NODE_ADMIN===!0}function K0(){try{return typeof indexedDB=="object"}catch{return!1}}function jk(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="FirebaseError";class Hn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=zk,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Hk(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,a,i)}}function Hk(t,e){return t.replace(Wk,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Wk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){return JSON.parse(t)}function gt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Yo(ec(r[0])||""),n=Yo(ec(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},qk=function(t){const e=G0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kk=function(t){const e=G0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function nc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if($g(r)&&$g(o)){if(!nc(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function $g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function mo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Yk(t,e){const n=new Qk(t,e);return n.subscribe.bind(n)}class Qk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ih),s.error===void 0&&(s.error=ih),s.complete===void 0&&(s.complete=ih);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}function Jk(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,M(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nu=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Go;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nA(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:tA(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tA(t){return t===ns?void 0:t}function nA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const sA={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},rA=ge.INFO,oA={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},aA=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=oA[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=aA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const lA=(t,e)=>e.some(n=>t instanceof n);let Ug,Vg;function cA(){return Ug||(Ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uA(){return Vg||(Vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y0=new WeakMap,af=new WeakMap,Q0=new WeakMap,sh=new WeakMap,Hd=new WeakMap;function hA(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ni(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y0.set(n,t)}).catch(()=>{}),Hd.set(e,t),e}function fA(t){if(af.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});af.set(t,e)}let lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dA(t){lf=t(lf)}function pA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(rh(this),e,...n);return Q0.set(i,e.sort?e.sort():[e]),Ni(i)}:uA().includes(t)?function(...e){return t.apply(rh(this),e),Ni(Y0.get(this))}:function(...e){return Ni(t.apply(rh(this),e))}}function mA(t){return typeof t=="function"?pA(t):(t instanceof IDBTransaction&&fA(t),lA(t,cA())?new Proxy(t,lf):t)}function Ni(t){if(t instanceof IDBRequest)return hA(t);if(sh.has(t))return sh.get(t);const e=mA(t);return e!==t&&(sh.set(t,e),Hd.set(e,t)),e}const rh=t=>Hd.get(t);function gA(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ni(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ni(o.result),l.oldVersion,l.newVersion,Ni(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vA=["get","getKey","getAll","getAllKeys","count"],yA=["put","add","delete","clear"],oh=new Map;function Bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=yA.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||vA.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return oh.set(e,r),r}dA(t=>({...t,get:(e,n,i)=>Bg(e,n)||t.get(e,n,i),has:(e,n)=>!!Bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wA(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cf="@firebase/app",jg="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new wa("@firebase/app"),bA="@firebase/app-compat",EA="@firebase/analytics-compat",TA="@firebase/analytics",IA="@firebase/app-check-compat",CA="@firebase/app-check",SA="@firebase/auth",kA="@firebase/auth-compat",AA="@firebase/database",RA="@firebase/database-compat",xA="@firebase/functions",NA="@firebase/functions-compat",OA="@firebase/installations",PA="@firebase/installations-compat",DA="@firebase/messaging",MA="@firebase/messaging-compat",LA="@firebase/performance",FA="@firebase/performance-compat",$A="@firebase/remote-config",UA="@firebase/remote-config-compat",VA="@firebase/storage",BA="@firebase/storage-compat",jA="@firebase/firestore",zA="@firebase/firestore-compat",HA="firebase",WA="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="[DEFAULT]",qA={[cf]:"fire-core",[bA]:"fire-core-compat",[TA]:"fire-analytics",[EA]:"fire-analytics-compat",[CA]:"fire-app-check",[IA]:"fire-app-check-compat",[SA]:"fire-auth",[kA]:"fire-auth-compat",[AA]:"fire-rtdb",[RA]:"fire-rtdb-compat",[xA]:"fire-fn",[NA]:"fire-fn-compat",[OA]:"fire-iid",[PA]:"fire-iid-compat",[DA]:"fire-fcm",[MA]:"fire-fcm-compat",[LA]:"fire-perf",[FA]:"fire-perf-compat",[$A]:"fire-rc",[UA]:"fire-rc-compat",[VA]:"fire-gcs",[BA]:"fire-gcs-compat",[jA]:"fire-fst",[zA]:"fire-fst-compat","fire-js":"fire-js",[HA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Map,hf=new Map;function KA(t,e){try{t.container.addComponent(e)}catch(n){Is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(hf.has(e))return Is.debug(`There were multiple attempts to register component ${e}.`),!1;hf.set(e,t);for(const n of ic.values())KA(n,t);return!0}function Wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Oi=new Hr("app","Firebase",GA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=WA;function X0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:uf,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Oi.create("bad-app-name",{appName:String(s)});if(n||(n=z0()),!n)throw Oi.create("no-options");const r=ic.get(s);if(r){if(nc(n,r.options)&&nc(i,r.config))return r;throw Oi.create("duplicate-app",{appName:s})}const o=new iA(s);for(const l of hf.values())o.addComponent(l);const a=new YA(n,i,o);return ic.set(s,a),a}function qd(t=uf){const e=ic.get(t);if(!e&&t===uf&&z0())return X0();if(!e)throw Oi.create("no-app",{appName:t});return e}function Kt(t,e,n){var i;let s=(i=qA[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Is.warn(a.join(" "));return}Un(new En(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firebase-heartbeat-database",XA=1,Qo="firebase-heartbeat-store";let ah=null;function J0(){return ah||(ah=gA(QA,XA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qo)}}}).catch(t=>{throw Oi.create("idb-open",{originalErrorMessage:t.message})})),ah}async function JA(t){try{return await(await J0()).transaction(Qo).objectStore(Qo).get(Z0(t))}catch(e){if(e instanceof Hn)Is.warn(e.message);else{const n=Oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Is.warn(n.message)}}}async function zg(t,e){try{const i=(await J0()).transaction(Qo,"readwrite");await i.objectStore(Qo).put(e,Z0(t)),await i.done}catch(n){if(n instanceof Hn)Is.warn(n.message);else{const i=Oi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Is.warn(i.message)}}}function Z0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=1024,eR=30*24*60*60*1e3;class tR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iR(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=eR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hg(),{heartbeatsToSend:n,unsentEntries:i}=nR(this._heartbeatsCache.heartbeats),s=Zl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Hg(){return new Date().toISOString().substring(0,10)}function nR(t,e=ZA){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Wg(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class iR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K0()?jk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wg(t){return Zl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){Un(new En("platform-logger",e=>new _A(e),"PRIVATE")),Un(new En("heartbeat",e=>new tR(e),"PRIVATE")),Kt(cf,jg,t),Kt(cf,jg,"esm2017"),Kt("fire-js","")}sR("");function Kd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ew(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rR=ew,tw=new Hr("auth","Firebase",ew());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new wa("@firebase/auth");function oR(t,...e){sc.logLevel<=ge.WARN&&sc.warn(`Auth (${Yi}): ${t}`,...e)}function Dl(t,...e){sc.logLevel<=ge.ERROR&&sc.error(`Auth (${Yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw Gd(t,...e)}function Dn(t,...e){return Gd(t,...e)}function aR(t,e,n){const i=Object.assign(Object.assign({},rR()),{[e]:n});return new Hr("auth","Firebase",i).create(e,{appName:t.name})}function Gd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return tw.create(t,...e)}function J(t,e,...n){if(!t)throw Gd(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function ri(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lR(){return qg()==="http:"||qg()==="https:"}function qg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lR()||Vk()||"connection"in navigator)?navigator.onLine:!0}function uR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,ri(n>e,"Short delay should be less than long delay!"),this.isMobile=zd()||W0()}get(){return cR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){ri(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new ba(3e4,6e4);function Ls(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,i,s={}){return iw(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Wr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nw.fetch()(sw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function iw(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},hR),e);try{const s=new dR(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw rl(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw aR(t,u,c);Tn(t,u)}}catch(s){if(s instanceof Hn)throw s;Tn(t,"network-request-failed",{message:String(s)})}}async function Ea(t,e,n,i,s={}){const r=await Fs(t,e,n,i,s);return"mfaPendingCredential"in r&&Tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function sw(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Yd(t.config,s):`${t.config.apiScheme}://${s}`}class dR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Dn(this.auth,"network-request-failed")),fR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Dn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function mR(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gR(t,e=!1){const n=it(t),i=await n.getIdToken(e),s=Qd(i);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ro(lh(s.auth_time)),issuedAtTime:Ro(lh(s.iat)),expirationTime:Ro(lh(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function lh(t){return Number(t)*1e3}function Qd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ec(n);return s?JSON.parse(s):(Dl("Failed to decode base64 JWT payload"),null)}catch(s){return Dl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vR(t){const e=Qd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Hn&&yR(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function yR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Xo(t,mR(n,{idToken:i}));J(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ER(r.providerUserInfo):[],a=bR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new rw(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function wR(t){const e=it(t);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bR(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ER(t){return t.map(e=>{var{providerId:n}=e,i=Kd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){const n=await iw(t,{},async()=>{const i=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=sw(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nw.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await TR(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Jo;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vs{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _R(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new rw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gR(this,e)}reload(){return wR(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await rc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xo(this,pR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:C,isAnonymous:K,providerData:re,stsTokenManager:ve}=n;J(x&&ve,e,"internal-error");const Oe=Jo.fromJSON(this.name,ve);J(typeof x=="string",e,"internal-error"),_i(h,e.name),_i(f,e.name),J(typeof C=="boolean",e,"internal-error"),J(typeof K=="boolean",e,"internal-error"),_i(d,e.name),_i(p,e.name),_i(v,e.name),_i(y,e.name),_i(_,e.name),_i(b,e.name);const Ve=new vs({uid:x,auth:e,email:f,emailVerified:C,displayName:h,isAnonymous:K,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:Oe,createdAt:_,lastLoginAt:b});return re&&Array.isArray(re)&&(Ve.providerData=re.map(yt=>Object.assign({},yt))),y&&(Ve._redirectEventId=y),Ve}static async _fromIdTokenResponse(e,n,i=!1){const s=new Jo;s.updateFromServerResponse(n);const r=new vs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await rc(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function Jn(t){ri(t instanceof Function,"Expected a class definition");let e=Kg.get(t);return e?(ri(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ow.type="NONE";const Gg=ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e,n){return`firebase:${t}:${e}:${n}`}class ur{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ml(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ml("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ur(Jn(Gg),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Jn(Gg);const o=Ml(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ur(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ur(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(fw(e))return"Webos";if(Xd(e))return"Safari";if((e.includes("chrome/")||lw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function aw(t=Nt()){return/firefox\//i.test(t)}function Xd(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lw(t=Nt()){return/crios\//i.test(t)}function cw(t=Nt()){return/iemobile/i.test(t)}function uw(t=Nt()){return/android/i.test(t)}function hw(t=Nt()){return/blackberry/i.test(t)}function fw(t=Nt()){return/webos/i.test(t)}function iu(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IR(t=Nt()){var e;return iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CR(){return Bk()&&document.documentMode===10}function dw(t=Nt()){return iu(t)||uw(t)||fw(t)||hw(t)||/windows phone/i.test(t)||cw(t)}function SR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e=[]){let n;switch(t){case"Browser":n=Yg(Nt());break;case"Worker":n=`${Yg(Nt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${i}`}async function mw(t,e){return Fs(t,"GET","/v2/recaptchaConfig",Ls(t,e))}function Qg(t){return t!==void 0&&t.enterprise!==void 0}class gw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vw(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Dn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",kR().appendChild(i)})}function AR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RR="https://www.google.com/recaptcha/enterprise.js?render=",xR="recaptcha-enterprise",NR="NO_RECAPTCHA";class yw{constructor(e){this.type=xR,this.auth=$s(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{mw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gw(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Qg(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(NR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Qg(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vw(RR+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Sr(t,e,n,i=!1){const s=new yw(t);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xg(this),this.idTokenSubscription=new Xg(this),this.beforeStateQueue=new OR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}async initializeRecaptchaConfig(){const e=await mw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yw(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $s(t){return it(t)}class Xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yk(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t,e){const n=Wd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(nc(r,e??{}))return s;Tn(s,"already-initialized")}return n.initialize({options:e})}function MR(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function LR(t,e,n){const i=$s(t);J(i._canInitEmulator,i,"emulator-config-failed"),J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=_w(e),{host:o,port:a}=FR(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$R()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FR(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Jg(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Jg(o)}}}function Jg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $R(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function UR(t,e){return Fs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(t,e){return Ea(t,"POST","/v1/accounts:signInWithPassword",Ls(t,e))}async function VR(t,e){return Fs(t,"POST","/v1/accounts:sendOobCode",Ls(t,e))}async function uh(t,e){return VR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",Ls(t,e))}async function jR(t,e){return Ea(t,"POST","/v1/accounts:signInWithEmailLink",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Jd{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Zo(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Sr(e,i,"signInWithPassword");return ch(e,s)}else return ch(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Sr(e,i,"signInWithPassword");return ch(e,r)}else return Promise.reject(s)});case"emailLink":return BR(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UR(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jR(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t,e){return Ea(t,"POST","/v1/accounts:signInWithIdp",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="http://localhost";class Cs extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Kd(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Cs(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,hr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:zR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WR(t){const e=mo(go(t)).link,n=e?mo(go(e)).deep_link_id:null,i=mo(go(t)).deep_link_id;return(i?mo(go(i)).link:null)||i||n||e||t}class Zd{constructor(e){var n,i,s,r,o,a;const l=mo(go(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=HR((s=l.mode)!==null&&s!==void 0?s:null);J(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WR(e);try{return new Zd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Zd.parseLink(n);return J(i,"argument-error"),Zo._fromEmailAndCode(e,i.code,i.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends ww{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Ta{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ci.credential(n,i)}catch{return null}}}Ci.GOOGLE_SIGN_IN_METHOD="google.com";Ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Ta{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Ta{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ki.credential(n,i)}catch{return null}}}ki.TWITTER_SIGN_IN_METHOD="twitter.com";ki.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e){return Ea(t,"POST","/v1/accounts:signUp",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await vs._fromIdTokenResponse(e,i,s),o=Zg(i);return new Ss({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Zg(i);return new Ss({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Hn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new oc(e,n,i,s)}}function bw(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,r,e,i):r})}async function qR(t,e,n=!1){const i=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Xo(t,bw(i,s,e,t),n);J(r.idToken,i,"internal-error");const o=Qd(r.idToken);J(o,i,"internal-error");const{sub:a}=o;return J(t.uid===a,i,"user-mismatch"),Ss._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Tn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t,e,n=!1){const i="signIn",s=await bw(t,i,e),r=await Ss._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function GR(t,e){return Ew($s(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e,n){var i;J(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),J(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(J(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(J(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e,n){var i;const s=$s(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await Sr(s,r,"getOobCode",!0);n&&fh(s,o,n),await uh(s,o)}else n&&fh(s,r,n),await uh(s,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Sr(s,r,"getOobCode",!0);n&&fh(s,a,n),await uh(s,a)}else return Promise.reject(o)})}async function QR(t,e,n){var i;const s=$s(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Sr(s,r,"signUpPassword");o=hh(s,c)}else o=hh(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Sr(s,r,"signUpPassword");return hh(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Ss._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function XR(t,e,n){return GR(it(t),qr.credential(e,n))}function Tw(t,e,n,i){return it(t).onIdTokenChanged(e,n,i)}function JR(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function ZR(t,e,n,i){return it(t).onAuthStateChanged(e,n,i)}function ep(t){return it(t).signOut()}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){const t=Nt();return Xd(t)||iu(t)}const t2=1e3,n2=10;class Cw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e2()&&SR(),this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);CR()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,n2):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cw.type="LOCAL";const i2=Cw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw extends Iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sw.type="SESSION";const kw=Sw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new su(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await s2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=tp("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function o2(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function a2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function c2(){return Aw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="firebaseLocalStorageDb",u2=1,lc="firebaseLocalStorage",xw="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ru(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function h2(){const t=indexedDB.deleteDatabase(Rw);return new Ia(t).toPromise()}function df(){const t=indexedDB.open(Rw,u2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(lc,{keyPath:xw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(lc)?e(i):(i.close(),await h2(),e(await df()))})})}async function ev(t,e,n){const i=ru(t,!0).put({[xw]:e,value:n});return new Ia(i).toPromise()}async function f2(t,e){const n=ru(t,!1).get(e),i=await new Ia(n).toPromise();return i===void 0?null:i.value}function tv(t,e){const n=ru(t,!0).delete(e);return new Ia(n).toPromise()}const d2=800,p2=3;class Nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>p2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(c2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a2(),!this.activeServiceWorker)return;this.sender=new r2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await df();return await ev(e,ac,"1"),await tv(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ev(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>f2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ru(s,!1).getAll();return new Ia(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nw.type="LOCAL";const m2=Nw;new ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t,e){return e?Jn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v2(t){return Ew(t.auth,new np(t),t.bypassAuthState)}function y2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),KR(n,new np(t),t.bypassAuthState)}async function _2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),qR(n,new np(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v2;case"linkViaPopup":case"linkViaRedirect":return _2;case"reauthViaPopup":case"reauthViaRedirect":return y2;default:Tn(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=new ba(2e3,1e4);class er extends Ow{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w2.get())};e()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="pendingRedirect",Ll=new Map;class E2 extends Ow{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const i=await T2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T2(t,e){const n=S2(e),i=C2(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function I2(t,e){Ll.set(t._key(),e)}function C2(t){return Jn(t._redirectPersistence)}function S2(t){return Ml(b2,t.config.apiKey,t.name)}async function k2(t,e,n=!1){const i=$s(t),s=g2(i,e),o=await new E2(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=10*60*1e3;class R2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Pw(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A2&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P2=/^https?/;async function D2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N2(t);for(const n of e)try{if(M2(n))return}catch{}Tn(t,"unauthorized-domain")}function M2(t){const e=ff(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!P2.test(n))return!1;if(O2.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2=new ba(3e4,6e4);function iv(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function F2(t){return new Promise((e,n)=>{var i,s,r;function o(){iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iv(),n(Dn(t,"network-request-failed"))},timeout:L2.get()})}if(!((s=(i=Mn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Mn().gapi)===null||r===void 0)&&r.load)o();else{const a=AR("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Dn(t,"network-request-failed"))},vw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function $2(t){return Fl=Fl||F2(t),Fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=new ba(5e3,15e3),V2="__/auth/iframe",B2="emulator/auth/iframe",j2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H2(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,B2):`https://${t.config.authDomain}/${V2}`,i={apiKey:e.apiKey,appName:t.name,v:Yi},s=z2.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Wr(i).slice(1)}`}async function W2(t){const e=await $2(t),n=Mn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:H2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j2,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),a=Mn().setTimeout(()=>{r(o)},U2.get());function l(){Mn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K2=500,G2=600,Y2="_blank",Q2="http://localhost";class sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X2(t,e,n,i=K2,s=G2){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},q2),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Nt().toLowerCase();n&&(a=lw(c)?Y2:n),aw(c)&&(e=e||Q2,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(IR(c)&&a!=="_self")return J2(e||"",a),new sv(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new sv(h)}function J2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="__/auth/handler",ex="emulator/auth/handler",tx=encodeURIComponent("fac");async function rv(t,e,n,i,s,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Yi,eventId:s};if(e instanceof ww){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",of(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ta){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${tx}=${encodeURIComponent(l)}`:"";return`${nx(t)}?${Wr(a).slice(1)}${c}`}function nx({config:t}){return t.emulator?Yd(t,ex):`https://${t.authDomain}/${Z2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="webStorageSupport";class ix{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kw,this._completeRedirectFn=k2,this._overrideRedirectResult=I2}async _openPopup(e,n,i,s){var r;ri((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await rv(e,n,i,ff(),s);return X2(e,o,tp())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await rv(e,n,i,ff(),s);return o2(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ri(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await W2(e),i=new R2(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[dh];o!==void 0&&n(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dw()||Xd()||iu()}}const sx=ix;var ov="@firebase/auth",av="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ax(t){Un(new En("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pw(t)},c=new PR(i,s,r,l);return MR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Un(new En("auth-internal",e=>{const n=$s(e.getProvider("auth").getImmediate());return(i=>new rx(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(ov,av,ox(t)),Kt(ov,av,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=5*60,cx=H0("authIdTokenMaxAge")||lx;let lv=null;const ux=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>cx)return;const s=n==null?void 0:n.token;lv!==s&&(lv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ht(t=qd()){const e=Wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DR(t,{popupRedirectResolver:sx,persistence:[m2,i2,kw]}),i=H0("authTokenSyncURL");if(i){const r=ux(i);JR(n,r,()=>r(n.currentUser)),Tw(n,o=>r(o))}const s=j0("auth");return s&&LR(n,`http://${s}`),n}ax("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new Map,fx={activated:!1,tokenObservers:[]};function Vn(t){return hx.get(t)||Object.assign({},fx)}const cv={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Go,await px(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Go,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function px(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},cc=new Hr("appCheck","AppCheck",mx);function gx(t){if(!Vn(t).activated)throw cc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="firebase-app-check-database",yx=1,pf="firebase-app-check-store";let ol=null;function _x(){return ol||(ol=new Promise((t,e)=>{try{const n=indexedDB.open(vx,yx);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(cc.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(pf,{keyPath:"compositeKey"})}}}catch(n){e(cc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ol)}function wx(t,e){return bx(Ex(t),e)}async function bx(t,e){const i=(await _x()).transaction(pf,"readwrite"),r=i.objectStore(pf).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(cc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Ex(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new wa("@firebase/app-check");function uv(t,e){return K0()?wx(t,e).catch(n=>{mf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={error:"UNKNOWN_ERROR"};function Ix(t){return tu.encodeString(JSON.stringify(t),!1)}async function gf(t,e=!1){const n=t.app;gx(n);const i=Vn(n);let s=i.token,r;if(s&&!vo(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(vo(l)?s=l:await uv(n,void 0))}if(!e&&s&&vo(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Vn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?mf.warn(l.message):mf.error(l),r=l}let a;return s?r?vo(s)?a={token:s.token,internalError:r}:a=fv(r):(a={token:s.token},i.token=s,await uv(n,s)):a=fv(r),o&&kx(n,a),a}function Cx(t,e,n,i){const{app:s}=t,r=Vn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&vo(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),hv(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>hv(t))}function Dw(t,e){const n=Vn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function hv(t){const{app:e}=t,n=Vn(e);let i=n.tokenRefresher;i||(i=Sx(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Sx(t){const{app:e}=t;return new dx(async()=>{const n=Vn(e);let i;if(n.token?i=await gf(t,!0):i=await gf(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Vn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},cv.RETRIAL_MIN_WAIT,cv.RETRIAL_MAX_WAIT)}function kx(t,e){const n=Vn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function vo(t){return t.expireTimeMillis-Date.now()>0}function fv(t){return{token:Ix(Tx),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Vn(this.app);for(const n of e)Dw(this.app,n.next);return Promise.resolve()}}function Rx(t,e){return new Ax(t,e)}function xx(t){return{getToken:e=>gf(t,e),addTokenListener:e=>Cx(t,"INTERNAL",e),removeTokenListener:e=>Dw(t.app,e)}}const Nx="@firebase/app-check",Ox="0.7.0",Px="app-check",dv="app-check-internal";function Dx(){Un(new En(Px,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Rx(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(dv).initialize()})),Un(new En(dv,t=>{const e=t.getProvider("app-check").getImmediate();return xx(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kt(Nx,Ox)}Dx();var Mx="firebase",Lx="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(Mx,Lx,"app");const Mw=Symbol("firebaseApp");function Fx(t){return E0()&&nn(Mw,null)||qd(t)}const al=new WeakMap;function $x(t,e){if(!al.has(t)){const n=mI(!0);al.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),al.delete(t)}}return al.get(t)}const Ux=new WeakMap,ll=new WeakMap;function Lw(t){const e=Fx(t);if(!ll.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{ll.set(e,r),n(r.value)}];ll.set(e,s)}return ll.get(e)}function Vx(t){const e=Lw(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function Bx(t,e){const n=Ht(e);Tw(n,i=>{const s=Lw();t.value=i,Array.isArray(s)&&s[1](t)})}const pv="@firebase/database",mv="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fw="";function jx(t){Fw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zx(e)}}catch{}return new Hx},ls=$w("localStorage"),vf=$w("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new wa("@firebase/database"),Wx=function(){let t=1;return function(){return t++}}(),Uw=function(t){const e=Zk(t),n=new Gk;n.update(e);const i=n.digest();return tu.encodeByteArray(i)},Ca=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ca.apply(null,i):typeof i=="object"?e+=gt(i):e+=i,e+=" "}return e};let ys=null,gv=!0;const qx=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fr.logLevel=ge.VERBOSE,ys=fr.log.bind(fr),e&&vf.set("logging_enabled",!0)):typeof t=="function"?ys=t:(ys=null,vf.remove("logging_enabled"))},Et=function(...t){if(gv===!0&&(gv=!1,ys===null&&vf.get("logging_enabled")===!0&&qx(!0)),ys){const e=Ca.apply(null,t);ys(e)}},Sa=function(t){return function(...e){Et(t,...e)}},yf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ca(...t);fr.error(e)},ks=function(...t){const e=`FIREBASE FATAL ERROR: ${Ca(...t)}`;throw fr.error(e),new Error(e)},Gt=function(...t){const e="FIREBASE WARNING: "+Ca(...t);fr.warn(e)},Kx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Gx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},kr="[MIN_NAME]",As="[MAX_NAME]",Kr=function(t,e){if(t===e)return 0;if(t===kr||e===As)return-1;if(e===kr||t===As)return 1;{const n=vv(t),i=vv(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Yx=function(t,e){return t===e?0:t<e?-1:1},oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+gt(e))},ip=function(t){if(typeof t!="object"||t===null)return gt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=gt(e[i]),n+=":",n+=ip(t[e[i]]);return n+="}",n},Bw=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function an(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jw=function(t){M(!Vw(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Qx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Jx=new RegExp("^-?(0*)\\d{1,10}$"),Zx=-2147483648,eN=2147483647,vv=function(t){if(Jx.test(t)){const e=Number(t);if(e>=Zx&&e<=eN)return e}return null},ka=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},tN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Gt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gt(e)}}class _f{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_f.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="5",zw="v",Hw="s",Ww="r",qw="f",Kw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gw="ls",Yw="p",wf="ac",Qw="websocket",Xw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Jw(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let i;if(e===Qw)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xw)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rN(t)&&(n.ns=t.namespace);const s=[];return an(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.counters_={}}incrementCounter(e,n=1){mi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ok(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={},mh={};function rp(t){const e=t.toString();return ph[e]||(ph[e]=new oN),ph[e]}function aN(t,e){const n=t.toString();return mh[n]||(mh[n]=e()),mh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ka(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="start",cN="close",uN="pLPCommand",hN="pRTLPCB",Zw="id",e1="pw",t1="ser",fN="cb",dN="seg",pN="ts",mN="d",gN="dframe",n1=1870,i1=30,vN=n1-i1,yN=25e3,_N=3e4;class tr{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sa(e),this.stats_=rp(n),this.urlFn=l=>(this.appCheckToken&&(l[wf]=this.appCheckToken),Jw(n,Xw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_N)),Gx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new op((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yv)this.id=a,this.password=l;else if(o===cN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[yv]="t",i[t1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[fN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[zw]=sp,this.transportSessionId&&(i[Hw]=this.transportSessionId),this.lastSessionId&&(i[Gw]=this.lastSessionId),this.applicationId&&(i[Yw]=this.applicationId),this.appCheckToken&&(i[wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(i[Ww]=qw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tr.forceAllow_=!0}static forceDisallow(){tr.forceDisallow_=!0}static isAvailable(){return tr.forceAllow_?!0:!tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qx()&&!Xx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=V0(n),s=Bw(i,vN);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[gN]="t",i[Zw]=e,i[e1]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=gt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class op{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wx(),window[uN+this.uniqueCallbackIdentifier]=e,window[hN+this.uniqueCallbackIdentifier]=n,this.myIFrame=op.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zw]=this.myID,e[e1]=this.myPW,e[t1]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+i1+i.length<=n1;){const o=this.pendingSegs.shift();i=i+"&"+dN+s+"="+o.seg+"&"+pN+s+"="+o.ts+"&"+mN+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(yN)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=16384,bN=45e3;let uc=null;typeof MozWebSocket<"u"?uc=MozWebSocket:typeof WebSocket<"u"&&(uc=WebSocket);class dn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sa(this.connId),this.stats_=rp(n),this.connURL=dn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[zw]=sp,typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(o[Ww]=qw),n&&(o[Hw]=n),i&&(o[Gw]=i),s&&(o[wf]=s),r&&(o[Yw]=r),Jw(e,Qw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ls.set("previous_websocket_failure",!0);try{let i;q0(),this.mySock=new uc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&uc!==null&&!dn.forceDisallow_}static previouslyFailed(){return ls.isInMemoryStorage||ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Yo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Bw(n,wN);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[tr,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let i=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[dn];else{const s=this.transports_=[];for(const r of ea.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ea.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=6e4,TN=5e3,IN=10*1024,CN=100*1024,gh="t",_v="d",SN="s",wv="r",kN="e",bv="o",Ev="a",Tv="n",Iv="p",AN="h";class RN{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sa("c:"+this.id+":"),this.transportManager_=new ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gh in e){const n=e[gh];n===Ev?this.upgradeIfSecondaryHealthy_():n===wv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oo("t",e),i=oo("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Iv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ev,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oo("t",e),i=oo("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oo(gh,e);if(_v in e){const i=e[_v];if(n===AN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Tv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===SN?this.onConnectionShutdown_(i):n===wv?this.onReset_(i):n===kN?yf("Server Error: "+i):n===bv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sp!==i&&Gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Iv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends r1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hc}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=32,Sv=768;class Ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Re(){return new Ue("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ui(t){return t.pieces_.length-t.pieceNum_}function Me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ue(t.pieces_,e)}function o1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function a1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function l1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ue(e,0)}function ut(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ue)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Ue(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function tn(t,e){const n=de(t),i=de(e);if(n===null)return e;if(n===i)return tn(Me(t),Me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function c1(t,e){if(Ui(t)!==Ui(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function mn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ui(t)>Ui(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class NN{constructor(e,n){this.errorPrefix_=n,this.parts_=a1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nu(this.parts_[i]);u1(this)}}function ON(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nu(e),u1(t)}function PN(t){const e=t.parts_.pop();t.byteLength_-=nu(e),t.parts_.length>0&&(t.byteLength_-=1)}function u1(t){if(t.byteLength_>Sv)throw new Error(t.errorPrefix_+"has a key path longer than "+Sv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cv+") or object contains a cycle "+is(t))}function is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends r1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ap}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1e3,DN=60*5*1e3,kv=30*1e3,MN=1.3,LN=3e4,FN="server_kill",Av=3;class ii extends s1{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ii.nextPersistentConnectionId_++,this.log_=Sa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=DN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!q0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ap.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(gt(r)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Go,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ii.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mi(e,"w")){const i=Cr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qk(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yf("Unrecognized action received from server: "+gt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LN&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ii.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new RN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Gt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(FN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Gt(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],of(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ip(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Ue(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Av&&(this.reconnectDelay_=kv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Av&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fw.replace(/\./g,"-")]=1,zd()?e["framework.cordova"]=1:W0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hc.getInstance().currentlyOnline();return of(this.interruptReasons_)&&e}}ii.nextPersistentConnectionId_=0;ii.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new pe(kr,e),s=new pe(kr,n);return this.compare(i,s)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class h1 extends ou{static get __EMPTY_NODE(){return cl}static set __EMPTY_NODE(e){cl=e}compare(e,n){return Kr(e.name,n.name)}isDefinedOn(e){throw zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(As,cl)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,cl)}toString(){return".key"}}const dr=new h1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??lt.RED,this.left=s??Vt.EMPTY_NODE,this.right=r??Vt.EMPTY_NODE}copy(e,n,i,s,r){return new lt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Vt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class $N{copy(e,n,i,s,r){return this}insert(e,n,i){return new lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,n=Vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ul(this.root_,null,this.comparator_,!0,e)}}Vt.EMPTY_NODE=new $N;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t,e){return Kr(t.name,e.name)}function lp(t,e){return Kr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;function VN(t){bf=t}const f1=function(t){return typeof t=="number"?"number:"+jw(t):"string:"+t},d1=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mi(e,".sv"),"Priority must be a string or number.")}else M(t===bf||t.isEmpty(),"priority of unexpected type.");M(t===bf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rv;class ot{constructor(e,n=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),d1(this.priorityNode_)}static set __childrenNodeConstructor(e){Rv=e}static get __childrenNodeConstructor(){return Rv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:de(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=de(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(M(i!==".priority"||Ui(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+f1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jw(this.value_):e+=this.value_,this.lazyHash_=Uw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ot.VALUE_TYPE_ORDER.indexOf(n),r=ot.VALUE_TYPE_ORDER.indexOf(i);return M(s>=0,"Unknown leaf type: "+n),M(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p1,m1;function BN(t){p1=t}function jN(t){m1=t}class zN extends ou{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Kr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(As,new ot("[PRIORITY-POST]",m1))}makePost(e,n){const i=p1(e);return new pe(n,new ot("[PRIORITY-POST]",i))}toString(){return".priority"}}const kt=new zN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=Math.log(2);class WN{constructor(e){const n=r=>parseInt(Math.log(r)/HN,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fc=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new lt(f,h.node,lt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),v=s(d+1,c);return h=t[d],f=n?n(h):h,new lt(f,h.node,lt.BLACK,p,v)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,v){const y=h-p,_=h;h-=p;const b=s(y+1,_),x=t[y],C=n?n(x):x;d(new lt(C,x.node,v,null,b))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));v?f(y,lt.BLACK):(f(y,lt.BLACK),f(y,lt.RED))}return u},o=new WN(t.length),a=r(o);return new Vt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh;const Ys={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(Ys&&kt,"ChildrenNode.ts has not been loaded"),vh=vh||new Zn({".priority":Ys},{".priority":kt}),vh}get(e){const n=Cr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Vt?n:null}hasIndex(e){return mi(this.indexSet_,e.toString())}addIndex(e,n){M(e!==dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=fc(i,e.getCompare()):a=Ys;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Zn(u,c)}addToIndexes(e,n){const i=tc(this.indexes_,(s,r)=>{const o=Cr(this.indexSet_,r);if(M(o,"Missing index implementation for "+r),s===Ys)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fc(a,o.getCompare())}else return Ys;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new Zn(i,this.indexSet_)}removeFromIndexes(e,n){const i=tc(this.indexes_,s=>{if(s===Ys)return s;{const r=n.get(e.name);return r?s.remove(new pe(e.name,r)):s}});return new Zn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;class Te{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&d1(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lo||(lo=new Te(new Vt(lp),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lo:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new pe(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?lo:this.priorityNode_;return new Te(s,o,r)}}updateChild(e,n){const i=de(e);if(i===null)return n;{M(de(e)!==".priority"||Ui(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Me(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(kt,(o,a)=>{n[o]=a.val(e),i++,r&&Te.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+f1(this.getPriority().val())+":"),this.forEachChild(kt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Uw(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Aa?-1:0}withIndex(e){if(e===dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(kt),s=n.getIterator(kt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dr?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qN extends Te{constructor(){super(new Vt(lp),Te.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const Aa=new qN;Object.defineProperties(pe,{MIN:{value:new pe(kr,Te.EMPTY_NODE)},MAX:{value:new pe(As,Aa)}});h1.__EMPTY_NODE=Te.EMPTY_NODE;ot.__childrenNodeConstructor=Te;VN(Aa);jN(Aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=!0;function Tt(t,e=null){if(t===null)return Te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ot(n,Tt(e))}if(!(t instanceof Array)&&KN){const n=[];let i=!1;if(an(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Tt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return Te.EMPTY_NODE;const r=fc(n,UN,o=>o.name,lp);if(i){const o=fc(n,kt.getCompare());return new Te(r,Tt(e),new Zn({".priority":o},{".priority":kt}))}else return new Te(r,Tt(e),Zn.Default)}else{let n=Te.EMPTY_NODE;return an(t,(i,s)=>{if(mi(t,i)&&i.substring(0,1)!=="."){const r=Tt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Tt(e))}}BN(Tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN extends ou{constructor(e){super(),this.indexPath_=e,M(!he(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Kr(e.name,n.name):r}makePost(e,n){const i=Tt(e),s=Te.EMPTY_NODE.updateChild(this.indexPath_,i);return new pe(n,s)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,Aa);return new pe(As,e)}toString(){return a1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN extends ou{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Kr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const i=Tt(e);return new pe(n,i)}toString(){return".value"}}const QN=new YN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){return{type:"value",snapshotNode:t}}function JN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ZN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kr}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:As}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===kt}copy(){const e=new cp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===kt?n="$priority":t.index_===QN?n="$value":t.index_===dr?n="$key":(M(t.index_ instanceof GN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=gt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=gt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+gt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=gt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+gt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ov(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==kt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends s1{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Sa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=dc.getListenId_(e,i),a={};this.listens_[o]=a;const l=Nv(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Cr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=dc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Nv(e._queryParams),i=e._path.toString(),s=new Go;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Yo(a.responseText)}catch{Gt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Gt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return{value:null,children:new Map}}function g1(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=de(e);t.children.has(i)||t.children.set(i,pc());const s=t.children.get(i);e=Me(e),g1(s,e,n)}}function Ef(t,e,n){t.value!==null?n(e,t.value):nO(t,(i,s)=>{const r=new Ue(e.toString()+"/"+i);Ef(s,r,n)})}function nO(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&an(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=10*1e3,sO=30*1e3,rO=5*60*1e3;class oO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iO(e);const i=Pv+(sO-Pv)*Math.random();xo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;an(e,(s,r)=>{r>0&&mi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*rO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function v1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function y1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _1(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=xn.ACK_USER_WRITE,this.source=v1()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ue(e));return new mc(Re(),n,this.revert)}}else return M(de(this.path)===e,"operationForChild called for unrelated child."),new mc(Me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=xn.OVERWRITE}operationForChild(e){return he(this.path)?new Rs(this.source,Re(),this.snap.getImmediateChild(e)):new Rs(this.source,Me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=xn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Ue(e));return n.isEmpty()?null:n.value?new Rs(this.source,Re(),n.value):new ta(this.source,Re(),n)}else return M(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ta(this.source,Me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function aO(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(eO(o.childName,o.snapshotNode))}),co(t,s,"child_removed",e,i,n),co(t,s,"child_added",e,i,n),co(t,s,"child_moved",r,i,n),co(t,s,"child_changed",e,i,n),co(t,s,"value",e,i,n),s}function co(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>cO(t,a,l)),o.forEach(a=>{const l=lO(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function lO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cO(t,e,n){if(e.childName==null||n.childName==null)throw zr("Should only compare child_ events.");const i=new pe(e.childName,e.snapshotNode),s=new pe(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e){return{eventCache:t,serverCache:e}}function No(t,e,n,i){return w1(new up(e,n,i),t.serverCache)}function b1(t,e,n,i){return w1(t.eventCache,new up(e,n,i))}function Tf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;const uO=()=>(yh||(yh=new Vt(Yx)),yh);class Pe{constructor(e,n=uO()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return an(e,(i,s)=>{n=n.set(new Ue(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Re(),value:this.value};if(he(e))return null;{const i=de(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Me(e),n);return r!=null?{path:ut(new Ue(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=de(e),i=this.children.get(n);return i!==null?i.subtree(Me(e)):new Pe(null)}}set(e,n){if(he(e))return new Pe(n,this.children);{const i=de(e),r=(this.children.get(i)||new Pe(null)).set(Me(e),n),o=this.children.insert(i,r);return new Pe(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=de(e),i=this.children.get(n);if(i){const s=i.remove(Me(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(he(e))return this.value;{const n=de(e),i=this.children.get(n);return i?i.get(Me(e)):null}}setTree(e,n){if(he(e))return n;{const i=de(e),r=(this.children.get(i)||new Pe(null)).setTree(Me(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Pe(this.value,o)}}fold(e){return this.fold_(Re(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ut(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Re(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(he(e))return null;{const r=de(e),o=this.children.get(r);return o?o.findOnPath_(Me(e),ut(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Re(),n)}foreachOnPath_(e,n,i){if(he(e))return this;{this.value&&i(n,this.value);const s=de(e),r=this.children.get(s);return r?r.foreachOnPath_(Me(e),ut(n,s),i):new Pe(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(ut(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new Pe(null))}}function Oo(t,e,n){if(he(e))return new wn(new Pe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=tn(s,e);return r=r.updateChild(o,n),new wn(t.writeTree_.set(s,r))}else{const s=new Pe(n),r=t.writeTree_.setTree(e,s);return new wn(r)}}}function Dv(t,e,n){let i=t;return an(n,(s,r)=>{i=Oo(i,ut(e,s),r)}),i}function Mv(t,e){if(he(e))return wn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new wn(n)}}function If(t,e){return Us(t,e)!=null}function Us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tn(n.path,e)):null}function Lv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(kt,(i,s)=>{e.push(new pe(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new pe(i,s.value))}),e}function Pi(t,e){if(he(e))return t;{const n=Us(t,e);return n!=null?new wn(new Pe(n)):new wn(t.writeTree_.subtree(e))}}function Cf(t){return t.writeTree_.isEmpty()}function Ar(t,e){return E1(Re(),t.writeTree_,e)}function E1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(M(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=E1(ut(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ut(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e){return A1(e,t)}function hO(t,e,n,i,s){M(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Oo(t.visibleWrites,e,n)),t.lastWriteId=i}function fO(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function dO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pO(a,i.path)?s=!1:mn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return mO(t),!0;if(i.snap)t.visibleWrites=Mv(t.visibleWrites,i.path);else{const a=i.children;an(a,l=>{t.visibleWrites=Mv(t.visibleWrites,ut(i.path,l))})}return!0}else return!1}function pO(t,e){if(t.snap)return mn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mn(ut(t.path,n),e))return!0;return!1}function mO(t){t.visibleWrites=I1(t.allWrites,gO,Re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gO(t){return t.visible}function I1(t,e,n){let i=wn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)mn(n,o)?(a=tn(n,o),i=Oo(i,a,r.snap)):mn(o,n)&&(a=tn(o,n),i=Oo(i,Re(),r.snap.getChild(a)));else if(r.children){if(mn(n,o))a=tn(n,o),i=Dv(i,a,r.children);else if(mn(o,n))if(a=tn(o,n),he(a))i=Dv(i,Re(),r.children);else{const l=Cr(r.children,de(a));if(l){const c=l.getChild(Me(a));i=Oo(i,Re(),c)}}}else throw zr("WriteRecord should have .snap or .children")}}return i}function C1(t,e,n,i,s){if(!i&&!s){const r=Us(t.visibleWrites,e);if(r!=null)return r;{const o=Pi(t.visibleWrites,e);if(Cf(o))return n;if(n==null&&!If(o,Re()))return null;{const a=n||Te.EMPTY_NODE;return Ar(o,a)}}}else{const r=Pi(t.visibleWrites,e);if(!s&&Cf(r))return n;if(!s&&n==null&&!If(r,Re()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(mn(c.path,e)||mn(e,c.path))},a=I1(t.allWrites,o,e),l=n||Te.EMPTY_NODE;return Ar(a,l)}}}function vO(t,e,n){let i=Te.EMPTY_NODE;const s=Us(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(kt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Pi(t.visibleWrites,e);return n.forEachChild(kt,(o,a)=>{const l=Ar(Pi(r,new Ue(o)),a);i=i.updateImmediateChild(o,l)}),Lv(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Pi(t.visibleWrites,e);return Lv(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yO(t,e,n,i,s){M(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ut(e,n);if(If(t.visibleWrites,r))return null;{const o=Pi(t.visibleWrites,r);return Cf(o)?s.getChild(n):Ar(o,s.getChild(n))}}function _O(t,e,n,i){const s=ut(e,n),r=Us(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Pi(t.visibleWrites,s);return Ar(o,i.getNode().getImmediateChild(n))}else return null}function wO(t,e){return Us(t.visibleWrites,e)}function bO(t,e,n,i,s,r,o){let a;const l=Pi(t.visibleWrites,e),c=Us(l,Re());if(c!=null)a=c;else if(n!=null)a=Ar(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function EO(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function Sf(t,e,n,i){return C1(t.writeTree,t.treePath,e,n,i)}function S1(t,e){return vO(t.writeTree,t.treePath,e)}function Fv(t,e,n,i){return yO(t.writeTree,t.treePath,e,n,i)}function gc(t,e){return wO(t.writeTree,ut(t.treePath,e))}function TO(t,e,n,i,s,r){return bO(t.writeTree,t.treePath,e,n,i,s,r)}function hp(t,e,n){return _O(t.writeTree,t.treePath,e,n)}function k1(t,e){return A1(ut(t.treePath,e),t.writeTree)}function A1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,xv(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ZN(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,JN(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,xv(i,e.snapshotNode,s.oldSnap));else throw zr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const R1=new CO;class fp{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new up(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hp(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xs(this.viewCache_),r=TO(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function SO(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kO(t,e,n,i,s){const r=new IO;let o,a;if(n.type===xn.OVERWRITE){const c=n;c.source.fromUser?o=kf(t,e,c.path,c.snap,i,s,r):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=vc(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===xn.MERGE){const c=n;c.source.fromUser?o=RO(t,e,c.path,c.children,i,s,r):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Af(t,e,c.path,c.children,i,s,a,r))}else if(n.type===xn.ACK_USER_WRITE){const c=n;c.revert?o=OO(t,e,c.path,i,s,r):o=xO(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===xn.LISTEN_COMPLETE)o=NO(t,e,n.path,i,r);else throw zr("Unknown operation type: "+n.type);const l=r.getChanges();return AO(e,o,l),{viewCache:o,changes:l}}function AO(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Tf(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(XN(Tf(e)))}}function x1(t,e,n,i,s,r){const o=e.eventCache;if(gc(i,n)!=null)return e;{let a,l;if(he(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xs(e),u=c instanceof Te?c:Te.EMPTY_NODE,h=S1(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Sf(i,xs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=de(n);if(c===".priority"){M(Ui(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Fv(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Me(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Fv(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=hp(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return No(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function vc(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=de(n);if(!l.isCompleteForPath(n)&&Ui(n)>1)return e;const p=Me(n),y=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,R1,null)}const h=b1(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),f=new fp(s,h,r);return x1(t,h,n,s,f,a)}function kf(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new fp(s,e,r);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=No(e,c,!0,t.filter.filtersNodes());else{const h=de(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=No(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Me(n),d=a.getNode().getImmediateChild(h);let p;if(he(f))p=i;else{const v=u.getCompleteChild(h);v!=null?o1(f)===".priority"&&v.getChild(l1(f)).isEmpty()?p=v:p=v.updateChild(f,i):p=Te.EMPTY_NODE}if(d.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=No(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $v(t,e){return t.eventCache.isCompleteForChild(e)}function RO(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=ut(n,l);$v(e,de(u))&&(a=kf(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=ut(n,l);$v(e,de(u))||(a=kf(t,a,u,c,s,r,o))}),a}function Uv(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Af(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=i:c=new Pe(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=Uv(t,d,f);l=vc(t,l,new Ue(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),v=Uv(t,p,f);l=vc(t,l,new Ue(h),v,s,r,o,a)}}),l}function xO(t,e,n,i,s,r,o){if(gc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return vc(t,e,n,l.getNode().getChild(n),s,r,a,o);if(he(n)){let c=new Pe(null);return l.getNode().forEachChild(dr,(u,h)=>{c=c.set(new Ue(u),h)}),Af(t,e,n,c,s,r,a,o)}else return e}else{let c=new Pe(null);return i.foreach((u,h)=>{const f=ut(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Af(t,e,n,c,s,r,a,o)}}function NO(t,e,n,i,s){const r=e.serverCache,o=b1(e,r.getNode(),r.isFullyInitialized()||he(n),r.isFiltered());return x1(t,o,n,i,R1,s)}function OO(t,e,n,i,s,r){let o;if(gc(i,n)!=null)return e;{const a=new fp(i,e,s),l=e.eventCache.getNode();let c;if(he(n)||de(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sf(i,xs(e));else{const h=e.serverCache.getNode();M(h instanceof Te,"serverChildren would be complete if leaf node"),u=S1(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=de(n);let h=hp(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Me(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Te.EMPTY_NODE,Me(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sf(i,xs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||gc(i,Re())!=null,No(e,c,o,t.filter.filtersNodes())}}function PO(t,e){const n=xs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Vv(t,e,n,i){e.type===xn.MERGE&&e.source.queryId!==null&&(M(xs(t.viewCache_),"We should always have a full cache before handling merges"),M(Tf(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=kO(t.processor_,s,e,n,i);return SO(t.processor_,r.viewCache),M(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,DO(t,r.changes,r.viewCache.eventCache.getNode(),null)}function DO(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return aO(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bv;function MO(t){M(!Bv,"__referenceConstructor has already been defined"),Bv=t}function dp(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return M(r!=null,"SyncTree gave us an op for an invalid query."),Vv(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Vv(o,e,n,i));return r}}function pp(t,e){let n=null;for(const i of t.views.values())n=n||PO(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jv;function LO(t){M(!jv,"__referenceConstructor has already been defined"),jv=t}class zv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=EO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FO(t,e,n,i,s){return hO(t.pendingWriteTree_,e,n,i,s),s?lu(t,new Rs(v1(),e,n)):[]}function nr(t,e,n=!1){const i=fO(t.pendingWriteTree_,e);if(dO(t.pendingWriteTree_,e)){let r=new Pe(null);return i.snap!=null?r=r.set(Re(),!0):an(i.children,o=>{r=r.set(new Ue(o),!0)}),lu(t,new mc(i.path,r,n))}else return[]}function au(t,e,n){return lu(t,new Rs(y1(),e,n))}function $O(t,e,n){const i=Pe.fromObject(n);return lu(t,new ta(y1(),e,i))}function UO(t,e,n,i){const s=D1(t,i);if(s!=null){const r=M1(s),o=r.path,a=r.queryId,l=tn(o,e),c=new Rs(_1(a),l,n);return L1(t,o,c)}else return[]}function VO(t,e,n,i){const s=D1(t,i);if(s){const r=M1(s),o=r.path,a=r.queryId,l=tn(o,e),c=Pe.fromObject(n),u=new ta(_1(a),l,c);return L1(t,o,u)}else return[]}function N1(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tn(o,e),c=pp(a,l);if(c)return c});return C1(s,e,r,n,!0)}function lu(t,e){return O1(e,t.syncPointTree_,null,T1(t.pendingWriteTree_,Re()))}function O1(t,e,n,i){if(he(t.path))return P1(t,e,n,i);{const s=e.get(Re());n==null&&s!=null&&(n=pp(s,Re()));let r=[];const o=de(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=k1(i,o);r=r.concat(O1(a,l,c,u))}return s&&(r=r.concat(dp(s,t,i,n))),r}}function P1(t,e,n,i){const s=e.get(Re());n==null&&s!=null&&(n=pp(s,Re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=k1(i,o),u=t.operationForChild(o);u&&(r=r.concat(P1(u,a,l,c)))}),s&&(r=r.concat(dp(s,t,i,n))),r}function D1(t,e){return t.tagToQueryMap.get(e)}function M1(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ue(t.substr(0,e))}}function L1(t,e,n){const i=t.syncPointTree_.get(e);M(i,"Missing sync point for query tag that we're tracking");const s=T1(t.pendingWriteTree_,e);return dp(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mp(n)}node(){return this.node_}}class gp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ut(this.path_,e);return new gp(this.syncTree_,n)}node(){return N1(this.syncTree_,this.path_)}}const BO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hv=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zO(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},zO=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&M(!1,"Unexpected increment value: "+i);const s=e.node();if(M(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},HO=function(t,e,n,i){return vp(e,new gp(n,t),i)},WO=function(t,e,n){return vp(t,new mp(e),n)};function vp(t,e,n){const i=t.getPriority().val(),s=Hv(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Hv(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ot(a,Tt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ot(s))),o.forEachChild(kt,(a,l)=>{const c=vp(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function _p(t,e){let n=e instanceof Ue?e:new Ue(e),i=t,s=de(n);for(;s!==null;){const r=Cr(i.node.children,s)||{children:{},childCount:0};i=new yp(s,i,r),n=Me(n),s=de(n)}return i}function Gr(t){return t.node.value}function F1(t,e){t.node.value=e,Rf(t)}function $1(t){return t.node.childCount>0}function qO(t){return Gr(t)===void 0&&!$1(t)}function cu(t,e){an(t.node.children,(n,i)=>{e(new yp(n,t,i))})}function U1(t,e,n,i){n&&!i&&e(t),cu(t,s=>{U1(s,e,!0,i)}),n&&i&&e(t)}function KO(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ra(t){return new Ue(t.parent===null?t.name:Ra(t.parent)+"/"+t.name)}function Rf(t){t.parent!==null&&GO(t.parent,t.name,t)}function GO(t,e,n){const i=qO(n),s=mi(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Rf(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Rf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=/[\[\].#$\/\u0000-\u001F\u007F]/,QO=/[\[\].#$\u0000-\u001F\u007F]/,_h=10*1024*1024,V1=function(t){return typeof t=="string"&&t.length!==0&&!YO.test(t)},XO=function(t){return typeof t=="string"&&t.length!==0&&!QO.test(t)},JO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),XO(t)},B1=function(t,e,n){const i=n instanceof Ue?new NN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+is(i));if(typeof e=="function")throw new Error(t+"contains a function "+is(i)+" with contents = "+e.toString());if(Vw(e))throw new Error(t+"contains "+e.toString()+" "+is(i));if(typeof e=="string"&&e.length>_h/3&&nu(e)>_h)throw new Error(t+"contains a string greater than "+_h+" utf8 bytes "+is(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(an(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!V1(o)))throw new Error(t+" contains an invalid key ("+o+") "+is(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ON(i,o),B1(t,a,i),PN(i)}),s&&r)throw new Error(t+' contains ".value" child '+is(i)+" in addition to actual children.")}},ZO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!V1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JO(n))throw new Error(Jk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tP(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!c1(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Vs(t,e,n){tP(t,n),nP(t,i=>mn(i,e)||mn(e,i))}function nP(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(iP(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();ys&&Et("event: "+n.toString()),ka(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="repo_interrupt",rP=25;class oP{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pc(),this.transactionQueueTree_=new yp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aP(t,e,n){if(t.stats_=rp(t.repoInfo_),t.forceRestClient_||tN())t.server_=new dc(t.repoInfo_,(i,s,r,o)=>{Wv(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ii(t.repoInfo_,e,(i,s,r,o)=>{Wv(t,i,s,r,o)},i=>{qv(t,i)},i=>{cP(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=aN(t.repoInfo_,()=>new oO(t.stats_,t.server_)),t.infoData_=new tO,t.infoSyncTree_=new zv({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=au(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wp(t,"connected",!1),t.serverSyncTree_=new zv({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Vs(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function lP(t){const n=t.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function j1(t){return BO({timestamp:lP(t)})}function Wv(t,e,n,i,s){t.dataUpdateCount++;const r=new Ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=tc(n,c=>Tt(c));o=VO(t.serverSyncTree_,r,l,s)}else{const l=Tt(n);o=UO(t.serverSyncTree_,r,l,s)}else if(i){const l=tc(n,c=>Tt(c));o=$O(t.serverSyncTree_,r,l)}else{const l=Tt(n);o=au(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ep(t,r)),Vs(t.eventQueue_,a,o)}function qv(t,e){wp(t,"connected",e),e===!1&&hP(t)}function cP(t,e){an(e,(n,i)=>{wp(t,n,i)})}function wp(t,e,n){const i=new Ue("/.info/"+e),s=Tt(n);t.infoData_.updateSnapshot(i,s);const r=au(t.infoSyncTree_,i,s);Vs(t.eventQueue_,i,r)}function uP(t){return t.nextWriteId_++}function hP(t){z1(t,"onDisconnectEvents");const e=j1(t),n=pc();Ef(t.onDisconnect_,Re(),(s,r)=>{const o=HO(s,r,t.serverSyncTree_,e);g1(n,s,o)});let i=[];Ef(n,Re(),(s,r)=>{i=i.concat(au(t.serverSyncTree_,s,r));const o=mP(t,s);Ep(t,o)}),t.onDisconnect_=pc(),Vs(t.eventQueue_,Re(),i)}function fP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sP)}function z1(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function H1(t,e,n){return N1(t.serverSyncTree_,e,n)||Te.EMPTY_NODE}function bp(t,e=t.transactionQueueTree_){if(e||uu(t,e),Gr(e)){const n=q1(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&dP(t,Ra(e),n)}else $1(e)&&cu(e,n=>{bp(t,n)})}function dP(t,e,n){const i=n.map(c=>c.currentWriteId),s=H1(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{z1(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(nr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();uu(t,_p(t.transactionQueueTree_,e)),bp(t,t.transactionQueueTree_),Vs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ka(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Gt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ep(t,e)}},o)}function Ep(t,e){const n=W1(t,e),i=Ra(n),s=q1(t,n);return pP(t,s,i),i}function pP(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=tn(n,l.path);let u=!1,h;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rP)u=!0,h="maxretry",s=s.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=H1(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){B1("transaction failed: Data returned ",d,l.path);let p=Tt(d);typeof d=="object"&&d!=null&&mi(d,".priority")||(p=p.updatePriority(f.getPriority()));const y=l.currentWriteId,_=j1(t),b=WO(p,f,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=b,l.currentWriteId=uP(t),o.splice(o.indexOf(y),1),s=s.concat(FO(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),s=s.concat(nr(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",s=s.concat(nr(t.serverSyncTree_,l.currentWriteId,!0))}Vs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}uu(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)ka(i[a]);bp(t,t.transactionQueueTree_)}function W1(t,e){let n,i=t.transactionQueueTree_;for(n=de(e);n!==null&&Gr(i)===void 0;)i=_p(i,n),e=Me(e),n=de(e);return i}function q1(t,e){const n=[];return K1(t,e,n),n.sort((i,s)=>i.order-s.order),n}function K1(t,e,n){const i=Gr(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);cu(e,s=>{K1(t,s,n)})}function uu(t,e){const n=Gr(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,F1(e,n.length>0?n:void 0)}cu(e,i=>{uu(t,i)})}function mP(t,e){const n=Ra(W1(t,e)),i=_p(t.transactionQueueTree_,e);return KO(i,s=>{wh(t,s)}),wh(t,i),U1(i,s=>{wh(t,s)}),n}function wh(t,e){const n=Gr(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(nr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?F1(e,void 0):n.length=r+1,Vs(t.eventQueue_,Ra(e),s);for(let o=0;o<i.length;o++)ka(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function vP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kv=function(t,e){const n=yP(t),i=n.namespace;n.domain==="firebase.com"&&ks(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ks("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kx();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sN(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Ue(n.pathString)}},yP=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=gP(t.substring(u,h)));const f=vP(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return he(this._path)?null:o1(this._path)}get ref(){return new Yr(this._repo,this._path)}get _queryIdentifier(){const e=Ov(this._queryParams),n=ip(e);return n==="{}"?"default":n}get _queryObject(){return Ov(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof Tp))return!1;const n=this._repo===e._repo,i=c1(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+xN(this._path)}}class Yr extends Tp{constructor(e,n){super(e,n,new cp,!1)}get parent(){const e=l1(this._path);return e===null?null:new Yr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}MO(Yr);LO(Yr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="FIREBASE_DATABASE_EMULATOR_HOST",xf={};let wP=!1;function bP(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ks("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kv(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[_P]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Kv(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new _f(_f.OWNER):new iN(t.name,t.options,e);ZO("Invalid Firebase Database URL",o),he(o.path)||ks("Database URL must point to the root of a Firebase Database (not including a child path).");const h=TP(a,t,u,new nN(t.name,n));return new IP(h,t)}function EP(t,e){const n=xf[e];(!n||n[t.key]!==t)&&ks(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fP(t),delete n[t.key]}function TP(t,e,n,i){let s=xf[e.name];s||(s={},xf[e.name]=s);let r=s[t.toURLString()];return r&&ks("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oP(t,wP,n,i),s[t.toURLString()]=r,r}class IP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yr(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ks("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){jx(Yi),Un(new En("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bP(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Kt(pv,mv,t),Kt(pv,mv,"esm2017")}ii.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ii.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};CP();var SP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Ip=Ip||{},ee=SP||self;function yc(){}function hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kP(t){return Object.prototype.hasOwnProperty.call(t,bh)&&t[bh]||(t[bh]=++AP)}var bh="closure_uid_"+(1e9*Math.random()>>>0),AP=0;function RP(t,e,n){return t.call.apply(t.bind,arguments)}function xP(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=RP:At=xP,At.apply(null,arguments)}function hl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Qi(){this.s=this.s,this.o=this.o}var NP=0;Qi.prototype.s=!1;Qi.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),NP!=0)&&kP(this)};Qi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const G1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cp(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Gv(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(hu(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var OP=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",yc,e),ee.removeEventListener("test",yc,e)}catch{}return t}();function _c(t){return/^[\s\xa0]*$/.test(t)}var Yv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Eh(t,e){return t<e?-1:t>e?1:0}function fu(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return fu().indexOf(t)!=-1}function Sp(t){return Sp[" "](t),t}Sp[" "]=yc;function Y1(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var PP=Rn("Opera"),Rr=Rn("Trident")||Rn("MSIE"),Q1=Rn("Edge"),Nf=Q1||Rr,X1=Rn("Gecko")&&!(fu().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),DP=fu().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function J1(){var t=ee.document;return t?t.documentMode:void 0}var wc;e:{var Th="",Ih=function(){var t=fu();if(X1)return/rv:([^\);]+)(\)|;)/.exec(t);if(Q1)return/Edge\/([\d\.]+)/.exec(t);if(Rr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DP)return/WebKit\/(\S+)/.exec(t);if(PP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ih&&(Th=Ih?Ih[1]:""),Rr){var Ch=J1();if(Ch!=null&&Ch>parseFloat(Th)){wc=String(Ch);break e}}wc=Th}var MP={};function LP(){return Y1(MP,9,function(){let t=0;const e=Yv(String(wc)).split("."),n=Yv("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Eh(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Eh(s[2].length==0,r[2].length==0)||Eh(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Of;if(ee.document&&Rr){var Qv=J1();Of=Qv||parseInt(wc,10)||void 0}else Of=void 0;var FP=Of;function na(t,e){if(Rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X1){e:{try{Sp(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&na.$.h.call(this)}}dt(na,Rt);var $P={2:"touch",3:"pen",4:"mouse"};na.prototype.h=function(){na.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Na="closure_listenable_"+(1e6*Math.random()|0),UP=0;function VP(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++UP,this.fa=this.ia=!1}function du(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kp(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Z1(t){const e={};for(const n in t)e[n]=t[n];return e}const Xv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Xv.length;r++)n=Xv[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function pu(t){this.src=t,this.g={},this.h=0}pu.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Df(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new VP(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Pf(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=G1(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(du(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Df(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Ap="closure_lm_"+(1e6*Math.random()|0),Sh={};function tb(t,e,n,i,s){if(i&&i.once)return ib(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)tb(t,e[r],n,i,s);return null}return n=Np(n),t&&t[Na]?t.O(e,n,xa(i)?!!i.capture:!!i,s):nb(t,e,n,!1,i,s)}function nb(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=xa(s)?!!s.capture:!!s,a=xp(t);if(a||(t[Ap]=a=new pu(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=BP(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)OP||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(rb(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BP(){function t(n){return e.call(t.src,t.listener,n)}const e=jP;return t}function ib(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ib(t,e[r],n,i,s);return null}return n=Np(n),t&&t[Na]?t.P(e,n,xa(i)?!!i.capture:!!i,s):nb(t,e,n,!0,i,s)}function sb(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)sb(t,e[r],n,i,s);else i=xa(i)?!!i.capture:!!i,n=Np(n),t&&t[Na]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Df(r,n,i,s),-1<n&&(du(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=xp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Df(e,n,i,s)),(n=-1<t?e[t]:null)&&Rp(n))}function Rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Na])Pf(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(rb(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=xp(e))?(Pf(n,t),n.h==0&&(n.src=null,e[Ap]=null)):du(t)}}}function rb(t){return t in Sh?Sh[t]:Sh[t]="on"+t}function jP(t,e){if(t.fa)t=!0;else{e=new na(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Rp(t),t=n.call(i,e)}return t}function xp(t){return t=t[Ap],t instanceof pu?t:null}var kh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Np(t){return typeof t=="function"?t:(t[kh]||(t[kh]=function(e){return t.handleEvent(e)}),t[kh])}function ft(){Qi.call(this),this.i=new pu(this),this.S=this,this.J=null}dt(ft,Qi);ft.prototype[Na]=!0;ft.prototype.removeEventListener=function(t,e,n,i){sb(this,t,e,n,i)};function vt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Rt(e,t);else if(e instanceof Rt)e.target=e.target||t;else{var s=e;e=new Rt(i,t),eb(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=fl(o,i,!0,e)&&s}if(o=e.g=t,s=fl(o,i,!0,e)&&s,s=fl(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=fl(o,i,!1,e)&&s}ft.prototype.N=function(){if(ft.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)du(n[i]);delete t.g[e],t.h--}}this.J=null};ft.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ft.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function fl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Pf(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Op=ee.JSON.stringify;function zP(){var t=lb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HP{constructor(){this.h=this.g=null}add(e,n){const i=ob.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ob=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new WP,t=>t.reset());class WP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qP(t){ee.setTimeout(()=>{throw t},0)}function ab(t,e){Mf||KP(),Lf||(Mf(),Lf=!0),lb.add(t,e)}var Mf;function KP(){var t=ee.Promise.resolve(void 0);Mf=function(){t.then(GP)}}var Lf=!1,lb=new HP;function GP(){for(var t;t=zP();){try{t.h.call(t.g)}catch(n){qP(n)}var e=ob;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lf=!1}function mu(t,e){ft.call(this),this.h=t||1,this.g=e||ee,this.j=At(this.qb,this),this.l=Date.now()}dt(mu,ft);L=mu.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),vt(this,"tick"),this.ga&&(Pp(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){mu.$.N.call(this),Pp(this),delete this.g};function Dp(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function cb(t){t.g=Dp(()=>{t.g=null,t.i&&(t.i=!1,cb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YP extends Qi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cb(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(t){Qi.call(this),this.h=t,this.g={}}dt(ia,Qi);var Jv=[];function ub(t,e,n,i){Array.isArray(n)||(n&&(Jv[0]=n.toString()),n=Jv);for(var s=0;s<n.length;s++){var r=tb(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function hb(t){kp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rp(e)},t),t.g={}}ia.prototype.N=function(){ia.$.N.call(this),hb(this)};ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gu(){this.g=!0}gu.prototype.Ea=function(){this.g=!1};function QP(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function XP(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ir(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZP(t,n)+(i?" "+i:"")})}function JP(t,e){t.info(function(){return"TIMEOUT: "+e})}gu.prototype.info=function(){};function ZP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Op(n)}catch{return e}}var Bs={},Zv=null;function vu(){return Zv=Zv||new ft}Bs.Ta="serverreachability";function fb(t){Rt.call(this,Bs.Ta,t)}dt(fb,Rt);function sa(t){const e=vu();vt(e,new fb(e))}Bs.STAT_EVENT="statevent";function db(t,e){Rt.call(this,Bs.STAT_EVENT,t),this.stat=e}dt(db,Rt);function Dt(t){const e=vu();vt(e,new db(e,t))}Bs.Ua="timingevent";function pb(t,e){Rt.call(this,Bs.Ua,t),this.size=e}dt(pb,Rt);function Oa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var yu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mp(){}Mp.prototype.h=null;function ey(t){return t.h||(t.h=t.i())}function gb(){}var Pa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lp(){Rt.call(this,"d")}dt(Lp,Rt);function Fp(){Rt.call(this,"c")}dt(Fp,Rt);var Ff;function _u(){}dt(_u,Mp);_u.prototype.g=function(){return new XMLHttpRequest};_u.prototype.i=function(){return{}};Ff=new _u;function Da(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new ia(this),this.P=eD,t=Nf?125:void 0,this.V=new mu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new vb}function vb(){this.i=null,this.g="",this.h=!1}var eD=45e3,$f={},bc={};L=Da.prototype;L.setTimeout=function(t){this.P=t};function Uf(t,e,n){t.L=1,t.v=bu(oi(e)),t.s=n,t.S=!0,yb(t,null)}function yb(t,e){t.G=Date.now(),Ma(t),t.A=oi(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Sb(n.i,"t",i),t.C=0,n=t.l.I,t.h=new vb,t.g=Kb(t.l,n?e:null,!t.s),0<t.O&&(t.M=new YP(At(t.Pa,t,t.g),t.O)),ub(t.U,t.g,"readystatechange",t.nb),e=t.I?Z1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),sa(),QP(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&ei(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=ei(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Nf||this.g&&(this.h.h||this.g.ja()||sy(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?sa(3):sa(2)),wu(this);var n=this.g.da();this.aa=n;t:if(_b(this)){var i=sy(this.g);t="";var s=i.length,r=ei(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),Po(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,XP(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_c(a)){var c=a;break t}}c=null}if(n=c)ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vf(this,n);else{this.i=!1,this.o=3,Dt(12),cs(this),Po(this);break e}}this.S?(wb(this,u,o),Nf&&this.i&&u==3&&(ub(this.U,this.V,"tick",this.mb),this.V.start())):(ir(this.j,this.m,o,null),Vf(this,o)),u==4&&cs(this),this.i&&!this.J&&(u==4?zb(this.l,this):(this.i=!1,Ma(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),cs(this),Po(this)}}}catch{}finally{}};function _b(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wb(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=tD(t,n),s==bc){e==4&&(t.o=4,Dt(14),i=!1),ir(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$f){t.o=4,Dt(15),ir(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ir(t.j,t.m,s,null),Vf(t,s);_b(t)&&s!=bc&&s!=$f&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hp(e),e.L=!0,Dt(11))):(ir(t.j,t.m,n,"[Invalid Chunked Response]"),cs(t),Po(t))}L.mb=function(){if(this.g){var t=ei(this.g),e=this.g.ja();this.C<e.length&&(wu(this),wb(this,t,e),this.i&&t!=4&&Ma(this))}};function tD(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?bc:(n=Number(e.substring(n,i)),isNaN(n)?$f:(i+=1,i+n>e.length?bc:(e=e.substr(i,n),t.C=i+n,e)))}L.cancel=function(){this.J=!0,cs(this)};function Ma(t){t.Y=Date.now()+t.P,bb(t,t.P)}function bb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Oa(At(t.lb,t),e)}function wu(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(JP(this.j,this.A),this.L!=2&&(sa(),Dt(17)),cs(this),this.o=2,Po(this)):bb(this,this.Y-t)};function Po(t){t.l.H==0||t.J||zb(t.l,t)}function cs(t){wu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Pp(t.V),hb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Vf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Bf(n.h,t))){if(!t.K&&Bf(n.h,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ic(n),Iu(n);else break e;zp(n),Dt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Oa(At(n.ib,n),6e3));if(1>=Rb(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else us(n,11)}else if((t.K||n.g==t)&&Ic(n),!_c(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&($p(r,r.h),r.h=null))}if(i.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,Be(i.G,i.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=qb(i,i.I?i.oa:null,i.Y),o.K){xb(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(wu(a),Ma(a)),i.g=o}else Bb(i);0<n.i.length&&Cu(n)}else c[0]!="stop"&&c[0]!="close"||us(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?us(n,7):jp(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}sa(4)}catch{}}function nD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function iD(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Eb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iD(t),i=nD(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Tb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _s){this.h=e!==void 0?e:t.h,Ec(this,t.j),this.s=t.s,this.g=t.g,Tc(this,t.m),this.l=t.l,e=t.i;var n=new ra;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ty(this,n),this.o=t.o}else t&&(n=String(t).match(Tb))?(this.h=!!e,Ec(this,n[1]||"",!0),this.s=yo(n[2]||""),this.g=yo(n[3]||"",!0),Tc(this,n[4]),this.l=yo(n[5]||"",!0),ty(this,n[6]||"",!0),this.o=yo(n[7]||"")):(this.h=!!e,this.i=new ra(null,this.h))}_s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_o(e,ny,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_o(e,ny,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_o(n,n.charAt(0)=="/"?aD:oD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_o(n,cD)),t.join("")};function oi(t){return new _s(t)}function Ec(t,e,n){t.j=n?yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ty(t,e,n){e instanceof ra?(t.i=e,uD(t.i,t.h)):(n||(e=_o(e,lD)),t.i=new ra(e,t.h))}function Be(t,e,n){t.i.set(e,n)}function bu(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _o(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ny=/[#\/\?@]/g,oD=/[#\?:]/g,aD=/[#\?]/g,lD=/[#\?@]/g,cD=/#/g;function ra(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xi(t){t.g||(t.g=new Map,t.h=0,t.i&&sD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ra.prototype;L.add=function(t,e){Xi(this),this.i=null,t=Qr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ib(t,e){Xi(t),e=Qr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cb(t,e){return Xi(t),e=Qr(t,e),t.g.has(e)}L.forEach=function(t,e){Xi(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};L.sa=function(){Xi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};L.Z=function(t){Xi(this);let e=[];if(typeof t=="string")Cb(this,t)&&(e=e.concat(this.g.get(Qr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Xi(this),this.i=null,t=Qr(this,t),Cb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Sb(t,e,n){Ib(t,e),0<n.length&&(t.i=null,t.g.set(Qr(t,e),Cp(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Qr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uD(t,e){e&&!t.j&&(Xi(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Ib(this,i),Sb(this,s,n))},t)),t.j=e}var hD=class{constructor(t,e){this.h=t,this.g=e}};function kb(t){this.l=t||fD,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fD=10;function Ab(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rb(t){return t.h?1:t.g?t.g.size:0}function Bf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $p(t,e){t.g?t.g.add(e):t.h=e}function xb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kb.prototype.cancel=function(){if(this.i=Nb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cp(t.i)}function Up(){}Up.prototype.stringify=function(t){return ee.JSON.stringify(t,void 0)};Up.prototype.parse=function(t){return ee.JSON.parse(t,void 0)};function dD(){this.g=new Up}function pD(t,e,n){const i=n||"";try{Eb(t,function(s,r){let o=s;xa(s)&&(o=Op(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function mD(t,e){const n=new gu;if(ee.Image){const i=new Image;i.onload=hl(dl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=hl(dl,n,i,"TestLoadImage: error",!1,e),i.onabort=hl(dl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=hl(dl,n,i,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function dl(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function La(t){this.l=t.fc||null,this.j=t.ob||!1}dt(La,Mp);La.prototype.g=function(){return new Eu(this.l,this.j)};La.prototype.i=function(t){return function(){return t}}({});function Eu(t,e){ft.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Eu,ft);var Vp=0;L=Eu.prototype;L.open=function(t,e){if(this.readyState!=Vp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oa(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fa(this)),this.readyState=Vp};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oa(this)),this.g&&(this.readyState=3,oa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ob(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ob(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fa(this):oa(this),this.readyState==3&&Ob(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Fa(this))};L.Ya=function(t){this.g&&(this.response=t,Fa(this))};L.ka=function(){this.g&&Fa(this)};function Fa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oa(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gD=ee.JSON.parse;function qe(t){ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pb,this.L=this.M=!1}dt(qe,ft);var Pb="",vD=/^https?$/i,yD=["POST","PUT"];L=qe.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ff.g(),this.C=this.u?ey(this.u):ey(Ff),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){iy(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ee.FormData&&t instanceof ee.FormData,!(0<=G1(yD,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lb(this),0<this.B&&((this.L=_D(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=Dp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){iy(this,r)}};function _D(t){return Rr&&LP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Ip<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))};function iy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Db(t),Tu(t)}function Db(t){t.F||(t.F=!0,vt(t,"complete"),vt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),Tu(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tu(this,!0)),qe.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?Mb(this):this.kb())};L.kb=function(){Mb(this)};function Mb(t){if(t.h&&typeof Ip<"u"&&(!t.C[1]||ei(t)!=4||t.da()!=2)){if(t.v&&ei(t)==4)Dp(t.La,0,t);else if(vt(t,"readystatechange"),ei(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.I).match(Tb)[1]||null;if(!s&&ee.self&&ee.self.location){var r=ee.self.location.protocol;s=r.substr(0,r.length-1)}i=!vD.test(s?s.toLowerCase():"")}n=i}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var o=2<ei(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Db(t)}}finally{Tu(t)}}}}function Tu(t,e){if(t.g){Lb(t);const n=t.g,i=t.C[0]?yc:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Lb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}function ei(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<ei(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gD(e)}};function sy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Pb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fb(t){let e="";return kp(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Bp(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Fb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Be(t,e,n))}function uo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $b(t){this.Ga=0,this.i=[],this.j=new gu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=uo("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=uo("baseRetryDelayMs",5e3,t),this.hb=uo("retryDelaySeedMs",1e4,t),this.eb=uo("forwardChannelMaxRetries",2,t),this.xa=uo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new kb(t&&t.concurrentRequestLimit),this.Ja=new dD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}L=$b.prototype;L.qa=8;L.H=1;function jp(t){if(Ub(t),t.H==3){var e=t.W++,n=oi(t.G);Be(n,"SID",t.J),Be(n,"RID",e),Be(n,"TYPE","terminate"),$a(t,n),e=new Da(t,t.j,e,void 0),e.L=2,e.v=bu(oi(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon&&(n=ee.navigator.sendBeacon(e.v.toString(),"")),!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=Kb(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ma(e)}Wb(t)}function Iu(t){t.g&&(Hp(t),t.g.cancel(),t.g=null)}function Ub(t){Iu(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Ic(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Cu(t){Ab(t.h)||t.m||(t.m=!0,ab(t.Na,t),t.C=0)}function wD(t,e){return Rb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Oa(At(t.Na,t,e),Hb(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Da(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=Z1(r),eb(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Vb(this,s,e),n=oi(this.G),Be(n,"RID",t),Be(n,"CVER",22),this.F&&Be(n,"X-HTTP-Session-Id",this.F),$a(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Fb(r)))+"&"+e:this.o&&Bp(n,this.o,r)),$p(this.h,s),this.bb&&Be(n,"TYPE","init"),this.P?(Be(n,"$req",e),Be(n,"SID","null"),s.ba=!0,Uf(s,n,null)):Uf(s,n,e),this.H=2}}else this.H==3&&(t?ry(this,t):this.i.length==0||Ab(this.h)||ry(this))};function ry(t,e){var n;e?n=e.m:n=t.W++;const i=oi(t.G);Be(i,"SID",t.J),Be(i,"RID",n),Be(i,"AID",t.V),$a(t,i),t.o&&t.s&&Bp(i,t.o,t.s),n=new Da(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Vb(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$p(t.h,n),Uf(n,i,e)}function $a(t,e){t.ma&&kp(t.ma,function(n,i){Be(e,i,n)}),t.l&&Eb({},function(n,i){Be(e,i,n)})}function Vb(t,e,n){n=Math.min(t.i.length,n);var i=t.l?At(t.l.Va,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{pD(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,i}function Bb(t){t.g||t.u||(t.ba=1,ab(t.Ma,t),t.A=0)}function zp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Oa(At(t.Ma,t),Hb(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,jb(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Oa(At(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Dt(10),Iu(this),jb(this))};function Hp(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function jb(t){t.g=new Da(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=oi(t.wa);Be(e,"RID","rpc"),Be(e,"SID",t.J),Be(e,"CI",t.M?"0":"1"),Be(e,"AID",t.V),Be(e,"TYPE","xmlhttp"),$a(t,e),t.o&&t.s&&Bp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=bu(oi(e)),n.s=null,n.S=!0,yb(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Iu(this),zp(this),Dt(19))};function Ic(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function zb(t,e){var n=null;if(t.g==e){Ic(t),Hp(t),t.g=null;var i=2}else if(Bf(t.h,e))n=e.F,xb(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=vu(),vt(i,new pb(i,n)),Cu(t)}else Bb(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(i==1&&wD(t,e)||i==2&&zp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}}function Hb(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=At(t.pb,t);n||(n=new _s("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Ec(n,"https"),bu(n)),mD(n.toString(),i)}else Dt(2);t.H=0,t.l&&t.l.za(e),Wb(t),Ub(t)}L.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Wb(t){if(t.H=0,t.pa=[],t.l){const e=Nb(t.h);(e.length!=0||t.i.length!=0)&&(Gv(t.pa,e),Gv(t.pa,t.i),t.h.i.length=0,Cp(t.i),t.i.length=0),t.l.ya()}}function qb(t,e,n){var i=n instanceof _s?oi(n):new _s(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Tc(i,i.m);else{var s=ee.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new _s(null,void 0);i&&Ec(r,i),e&&(r.g=e),s&&Tc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Be(i,n,e),Be(i,"VER",t.qa),$a(t,i),i}function Kb(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new qe(new La({ob:!0})):new qe(t.va),e.Oa(t.I),e}function Gb(){}L=Gb.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.Va=function(){};function Cc(){if(Rr&&!(10<=Number(FP)))throw Error("Environmental error: no available transport.")}Cc.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){ft.call(this),this.g=new $b(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_c(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_c(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xr(this)}dt(Yt,ft);Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=qb(t,null,t.Y),Cu(t)};Yt.prototype.close=function(){jp(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Op(t),t=n);e.i.push(new hD(e.fb++,t)),e.H==3&&Cu(e)};Yt.prototype.N=function(){this.g.l=null,delete this.j,jp(this.g),delete this.g,Yt.$.N.call(this)};function Yb(t){Lp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(Yb,Lp);function Qb(){Fp.call(this),this.status=1}dt(Qb,Fp);function Xr(t){this.g=t}dt(Xr,Gb);Xr.prototype.Ba=function(){vt(this.g,"a")};Xr.prototype.Aa=function(t){vt(this.g,new Yb(t))};Xr.prototype.za=function(t){vt(this.g,new Qb)};Xr.prototype.ya=function(){vt(this.g,"b")};function bD(){this.blockSize=-1}function In(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(In,bD);In.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ah(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}In.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Ah(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Ah(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Ah(this,i),s=0;break}}this.h=s,this.i+=e};In.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function ke(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var ED={};function Wp(t){return-128<=t&&128>t?Y1(ED,t,function(e){return new ke([e|0],0>e?-1:0)}):new ke([t|0],0>t?-1:0)}function Nn(t){if(isNaN(t)||!isFinite(t))return pr;if(0>t)return mt(Nn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=jf;return new ke(e,0)}function Xb(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return mt(Xb(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nn(Math.pow(e,8)),i=pr,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Nn(Math.pow(e,r)),i=i.R(r).add(Nn(o))):(i=i.R(n),i=i.add(Nn(o)))}return i}var jf=4294967296,pr=Wp(0),zf=Wp(1),oy=Wp(16777216);L=ke.prototype;L.ea=function(){if(en(this))return-mt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:jf+i)*e,e*=jf}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ti(this))return"0";if(en(this))return"-"+mt(this).toString(t);for(var e=Nn(Math.pow(t,6)),n=this,i="";;){var s=kc(n,e).g;n=Sc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ti(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ti(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}L.X=function(t){return t=Sc(this,t),en(t)?-1:ti(t)?0:1};function mt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ke(n,~t.h).add(zf)}L.abs=function(){return en(this)?mt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ke(n,n[n.length-1]&-2147483648?-1:0)};function Sc(t,e){return t.add(mt(e))}L.R=function(t){if(ti(this)||ti(t))return pr;if(en(this))return en(t)?mt(this).R(mt(t)):mt(mt(this).R(t));if(en(t))return mt(this.R(mt(t)));if(0>this.X(oy)&&0>t.X(oy))return Nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,pl(n,2*i+2*s),n[2*i+2*s+1]+=r*l,pl(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,pl(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,pl(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ke(n,0)};function pl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ho(t,e){this.g=t,this.h=e}function kc(t,e){if(ti(e))throw Error("division by zero");if(ti(t))return new ho(pr,pr);if(en(t))return e=kc(mt(t),e),new ho(mt(e.g),mt(e.h));if(en(e))return e=kc(t,mt(e)),new ho(mt(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zf,i=e;0>=i.X(t);)n=ay(n),i=ay(i);var s=Qs(n,1),r=Qs(i,1);for(i=Qs(i,2),n=Qs(n,2);!ti(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Qs(i,1),n=Qs(n,1)}return e=Sc(t,s.R(e)),new ho(s,e)}for(s=pr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Nn(n),o=r.R(e);en(o)||0<o.X(t);)n-=i,r=Nn(n),o=r.R(e);ti(r)&&(r=zf),s=s.add(r),t=Sc(t,o)}return new ho(s,t)}L.gb=function(t){return kc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ke(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ke(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ke(n,this.h^t.h)};function ay(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ke(n,t.h)}function Qs(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ke(s,t.h)}Cc.prototype.createWebChannel=Cc.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;yu.NO_ERROR=0;yu.TIMEOUT=8;yu.HTTP_ERROR=6;mb.COMPLETE="complete";gb.EventType=Pa;Pa.OPEN="a";Pa.CLOSE="b";Pa.ERROR="c";Pa.MESSAGE="d";ft.prototype.listen=ft.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;In.prototype.digest=In.prototype.l;In.prototype.reset=In.prototype.reset;In.prototype.update=In.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=Nn;ke.fromString=Xb;var TD=function(){return new Cc},ID=function(){return vu()},Rh=yu,CD=mb,SD=Bs,ly={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},kD=La,ml=gb,AD=qe,RD=In,mr=ke;const cy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new wa("@firebase/firestore");function uy(){return Ns.logLevel}function j(t,...e){if(Ns.logLevel<=ge.DEBUG){const n=e.map(qp);Ns.debug(`Firestore (${Jr}): ${t}`,...n)}}function ai(t,...e){if(Ns.logLevel<=ge.ERROR){const n=e.map(qp);Ns.error(`Firestore (${Jr}): ${t}`,...n)}}function xr(t,...e){if(Ns.logLevel<=ge.WARN){const n=e.map(qp);Ns.warn(`Firestore (${Jr}): ${t}`,...n)}}function qp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw ai(e),new Error(e)}function $e(t,e){t||Z()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class ND{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OD{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Di;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Di,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Di)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($e(typeof i.accessToken=="string"),new Jb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new bt(e)}}class PD{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class DD{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new PD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.T=n.token,new MD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=FD(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function _e(t,e){return t<e?-1:t>e?1:0}function Nr(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new tt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new tt(0,0))}static max(){return new ne(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,i){n===void 0?n=0:n>e.length&&Z(),i===void 0?i=e.length-n:i>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof aa?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends aa{construct(e,n,i){return new je(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new H(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const $D=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends aa{construct(e,n,i){return new St(e,n,i)}static isValidIdentifier(e){return $D.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new H(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(je.fromString(e))}static fromName(e){return new Y(je.fromString(e).popFirst(5))}static empty(){return new Y(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new je(e.slice()))}}function UD(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(i===1e9?new tt(n+1,0):new tt(n,i));return new Vi(s,Y.empty(),e)}function VD(t){return new Vi(t.readTime,t.key,-1)}class Vi{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Vi(ne.min(),Y.empty(),-1)}static max(){return new Vi(ne.max(),Y.empty(),-1)}}function BD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==jD)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,i)=>{n(e)})}static reject(e){return new N((n,i)=>{i(e)})}static waitFor(e){return new N((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=N.resolve(!1);for(const i of e)n=n.next(s=>s?N.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new N((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new N((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Va(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Kp.ct=-1;function Su(t){return t==null}function Ac(t){return t===0&&1/t==-1/0}function HD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??pt.RED,this.left=s??pt.EMPTY,this.right=r??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new pt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,i,s){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fy(this.data.getIterator())}getIteratorFrom(e){return new fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new qt([])}unionWith(e){let n=new xt(St.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Nr(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tE("Invalid base64 string: "+s):s}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const WD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bi(t){if($e(!!t),typeof t=="string"){let e=0;const n=WD.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Os(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yp(t){const e=t.mapValue.fields.__previous_value__;return Gp(e)?Yp(e):e}function la(t){const e=Bi(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ca{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gp(t)?4:KD(t)?9007199254740991:10:Z()}function Bn(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return la(t).isEqual(la(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Bi(i.timestampValue),o=Bi(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Os(i.bytesValue).isEqual(Os(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Qe(i.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(i.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Qe(i.integerValue)===Qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Qe(i.doubleValue),o=Qe(s.doubleValue);return r===o?Ac(r)===Ac(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Nr(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(hy(r)!==hy(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Bn(r[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function ua(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function Or(t,e){if(t===e)return 0;const n=Ps(t),i=Ps(e);if(n!==i)return _e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Qe(s.integerValue||s.doubleValue),a=Qe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return dy(t.timestampValue,e.timestampValue);case 4:return dy(la(t),la(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Os(s),a=Os(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=_e(o[l],a[l]);if(c!==0)return c}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=_e(Qe(s.latitude),Qe(r.latitude));return o!==0?o:_e(Qe(s.longitude),Qe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Or(o[l],a[l]);if(c)return c}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===vl.mapValue&&r===vl.mapValue)return 0;if(s===vl.mapValue)return 1;if(r===vl.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=_e(a[u],c[u]);if(h!==0)return h;const f=Or(o[a[u]],l[c[u]]);if(f!==0)return f}return _e(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function dy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Bi(t),i=Bi(e),s=_e(n.seconds,i.seconds);return s!==0?s:_e(n.nanos,i.nanos)}function Pr(t){return Hf(t)}function Hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Bi(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Hf(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Hf(i.fields[a])}`;return r+"}"}(t.mapValue):Z();var e,n}function Wf(t){return!!t&&"integerValue"in t}function Qp(t){return!!t&&"arrayValue"in t}function py(t){return!!t&&"nullValue"in t}function my(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Do(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=St.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Do(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];$l(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){js(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new $t(Do(this.value))}}function nE(t){const e=[];return js(t.fields,(n,i)=>{const s=new St([n]);if($l(i)){const r=nE(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new It(e,0,ne.min(),ne.min(),ne.min(),$t.empty(),0)}static newFoundDocument(e,n,i,s){return new It(e,1,n,ne.min(),i,s,0)}static newNoDocument(e,n){return new It(e,2,n,ne.min(),ne.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,ne.min(),ne.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.position=e,this.inclusive=n}}function gy(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=Y.comparator(Y.fromName(o.referenceValue),n.key):i=Or(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function GD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{}class Je extends iE{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new QD(e,n,i):n==="array-contains"?new ZD(e,i):n==="in"?new eM(e,i):n==="not-in"?new tM(e,i):n==="array-contains-any"?new nM(e,i):new Je(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new XD(e,i):new JD(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Or(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(Or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jn extends iE{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new jn(e,n)}matches(e){return sE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sE(t){return t.op==="and"}function rE(t){return YD(t)&&sE(t)}function YD(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function qf(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Pr(t.value);if(rE(t))return t.filters.map(e=>qf(e)).join(",");{const e=t.filters.map(n=>qf(n)).join(",");return`${t.op}(${e})`}}function oE(t,e){return t instanceof Je?function(n,i){return i instanceof Je&&n.op===i.op&&n.field.isEqual(i.field)&&Bn(n.value,i.value)}(t,e):t instanceof jn?function(n,i){return i instanceof jn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&oE(r,i.filters[o]),!0):!1}(t,e):void Z()}function aE(t){return t instanceof Je?function(e){return`${e.field.canonicalString()} ${e.op} ${Pr(e.value)}`}(t):t instanceof jn?function(e){return e.op.toString()+" {"+e.getFilters().map(aE).join(" ,")+"}"}(t):"Filter"}class QD extends Je{constructor(e,n,i){super(e,n,i),this.key=Y.fromName(i.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class XD extends Je{constructor(e,n){super(e,"in",n),this.keys=lE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JD extends Je{constructor(e,n){super(e,"not-in",n),this.keys=lE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Y.fromName(i.referenceValue))}class ZD extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qp(n)&&ua(n.arrayValue,this.value)}}class eM extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ua(this.value.arrayValue,n)}}class tM extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ua(this.value.arrayValue,n)}}class nM extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ua(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function yy(t,e=null,n=[],i=[],s=null,r=null,o=null){return new iM(t,e,n,i,s,r,o)}function Xp(t){const e=oe(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>qf(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Pr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Pr(i)).join(",")),e.dt=n}return e.dt}function Jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vy(t.startAt,e.startAt)&&vy(t.endAt,e.endAt)}function Kf(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function sM(t,e,n,i,s,r,o,a){return new ku(t,e,n,i,s,r,o,a)}function Au(t){return new ku(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function oM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function aM(t){return t.collectionGroup!==null}function gr(t){const e=oe(t);if(e.wt===null){e.wt=[];const n=oM(e),i=rM(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new Mo(n)),e.wt.push(new Mo(St.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Mo(St.keyField(),r))}}}return e.wt}function li(t){const e=oe(t);if(!e._t)if(e.limitType==="F")e._t=yy(e.path,e.collectionGroup,gr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of gr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Mo(r.field,o))}const i=e.endAt?new Rc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Rc(e.startAt.position,e.startAt.inclusive):null;e._t=yy(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Gf(t,e,n){return new ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ru(t,e){return Jp(li(t),li(e))&&t.limitType===e.limitType}function cE(t){return`${Xp(li(t))}|lt:${t.limitType}`}function Yf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>aE(i)).join(", ")}]`),Su(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Pr(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Pr(i)).join(",")),`Target(${n})`}(li(t))}; limitType=${t.limitType})`}function xu(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Y.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of gr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=gy(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,gr(n),i)||n.endAt&&!function(s,r,o){const a=gy(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,gr(n),i))}(t,e)}function lM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uE(t){return(e,n)=>{let i=!1;for(const s of gr(t)){const r=cM(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function cM(t,e,n){const i=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Or(a,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return eE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=new He(Y.comparator);function ci(){return uM}const hE=new He(Y.comparator);function wo(...t){let e=hE;for(const n of t)e=e.insert(n.key,n);return e}function fE(t){let e=hE;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function hs(){return Lo()}function dE(){return Lo()}function Lo(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const hM=new He(Y.comparator),fM=new xt(Y.comparator);function ue(...t){let e=fM;for(const n of t)e=e.add(n);return e}const dM=new xt(_e);function pM(){return dM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function mE(t){return{integerValue:""+t}}function mM(t,e){return HD(e)?mE(e):pE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this._=void 0}}function gM(t,e,n){return t instanceof xc?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gp(s)&&(s=Yp(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof ha?vE(t,e):t instanceof fa?yE(t,e):function(i,s){const r=gE(i,s),o=wy(r)+wy(i.gt);return Wf(r)&&Wf(i.gt)?mE(o):pE(i.serializer,o)}(t,e)}function vM(t,e,n){return t instanceof ha?vE(t,e):t instanceof fa?yE(t,e):n}function gE(t,e){return t instanceof Nc?Wf(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class xc extends Nu{}class ha extends Nu{constructor(e){super(),this.elements=e}}function vE(t,e){const n=_E(e);for(const i of t.elements)n.some(s=>Bn(s,i))||n.push(i);return{arrayValue:{values:n}}}class fa extends Nu{constructor(e){super(),this.elements=e}}function yE(t,e){let n=_E(e);for(const i of t.elements)n=n.filter(s=>!Bn(s,i));return{arrayValue:{values:n}}}class Nc extends Nu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function wy(t){return Qe(t.integerValue||t.doubleValue)}function _E(t){return Qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yM(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof ha&&i instanceof ha||n instanceof fa&&i instanceof fa?Nr(n.elements,i.elements,Bn):n instanceof Nc&&i instanceof Nc?Bn(n.gt,i.gt):n instanceof xc&&i instanceof xc}(t.transform,e.transform)}class _M{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function wE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zp(t.key,sn.none()):new Ba(t.key,t.data,sn.none());{const n=t.data,i=$t.empty();let s=new xt(St.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ji(t.key,i,new qt(s.toArray()),sn.none())}}function wM(t,e,n){t instanceof Ba?function(i,s,r){const o=i.value.clone(),a=Ey(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ji?function(i,s,r){if(!Ul(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Ey(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(bE(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,i){return t instanceof Ba?function(s,r,o,a){if(!Ul(s.precondition,r))return o;const l=s.value.clone(),c=Ty(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ji?function(s,r,o,a){if(!Ul(s.precondition,r))return o;const l=Ty(s.fieldTransforms,a,r),c=r.data;return c.setAll(bE(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Ul(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function bM(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=gE(i.transform,s||null);r!=null&&(n===null&&(n=$t.empty()),n.set(i.field,r))}return n||null}function by(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Nr(n,i,(s,r)=>yM(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ba extends Ou{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ji extends Ou{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Ey(t,e,n){const i=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,vM(o,a,n[s]))}return i}function Ty(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,gM(r,o,e))}return i}class Zp extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EM extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&wM(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Fo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Fo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=dE();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=wE(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Nr(this.mutations,e.mutations,(n,i)=>by(n,i))&&Nr(this.baseMutations,e.baseMutations,(n,i)=>by(n,i))}}class em{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){$e(e.mutations.length===i.length);let s=hM;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new em(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,fe;function SM(t){switch(t){default:return Z();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function EE(t){if(t===void 0)return ai("GRPC error has no .code"),k.UNKNOWN;switch(t){case Ye.OK:return k.OK;case Ye.CANCELLED:return k.CANCELLED;case Ye.UNKNOWN:return k.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return k.INTERNAL;case Ye.UNAVAILABLE:return k.UNAVAILABLE;case Ye.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ye.NOT_FOUND:return k.NOT_FOUND;case Ye.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ye.ABORTED:return k.ABORTED;case Ye.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ye.DATA_LOSS:return k.DATA_LOSS;default:return Z()}}(fe=Ye||(Ye={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return yl}static getOrCreateInstance(){return yl===null&&(yl=new tm),yl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let yl=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=new mr([4294967295,4294967295],0);function Iy(t){const e=kM().encode(t),n=new RD;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new mr([n,i],0),new mr([s,r],0)]}class nm{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new bo(`Invalid padding: ${n}`);if(i<0)throw new bo(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new bo(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new bo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=mr.fromNumber(this.It)}Et(e,n,i){let s=e.add(n.multiply(mr.fromNumber(i)));return s.compare(AM)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Iy(e),[i,s]=Cy(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new nm(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Iy(e),[i,s]=Cy(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pu(ne.min(),s,new He(_e),ci(),ue())}}class ja{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ja(i,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,i,s){this.Pt=e,this.removedTargetIds=n,this.key=i,this.bt=s}}class TE{constructor(e,n){this.targetId=e,this.Vt=n}}class IE{constructor(e,n,i=Ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Sy{constructor(){this.St=0,this.Dt=Ay(),this.Ct=Ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ue(),n=ue(),i=ue();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Z()}}),new ja(this.Ct,this.xt,e,n,i)}Ft(){this.Nt=!1,this.Dt=Ay()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class RM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ci(),this.zt=ky(),this.Wt=new He(_e)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const i=this.Zt(n);switch(e.state){case 0:this.te(n)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(n);break;case 3:this.te(n)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),i.$t(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((i,s)=>{this.te(s)&&n(s)})}ne(e){var n;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(Kf(o))if(s===0){const a=new Y(o.path);this.Yt(i,a,It.newNoDocument(a,ne.min()))}else $e(s===1);else{const a=this.ie(i);if(a!==s){const l=this.re(e,a);if(l!==0){this.ee(i);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,c)}(n=tm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,v,y,_;const b={localCacheCount:u,existenceFilterCount:h.count},x=h.unchangedNames;return x&&(b.bloomFilter={applied:c===0,hashCount:(f=x==null?void 0:x.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(p=(d=x==null?void 0:x.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&v!==void 0?v:0,padding:(_=(y=x==null?void 0:x.bits)===null||y===void 0?void 0:y.padding)!==null&&_!==void 0?_:0}),b}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=Os(r).toUint8Array()}catch(u){if(u instanceof tE)return xr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new nm(l,o,a)}catch(u){return xr(u instanceof bo?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:s!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Kf(a.target)){const l=new Y(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,It.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let i=ue();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new Pu(e,n,this.Wt,this.jt,i);return this.jt=ci(),this.zt=ky(),this.Wt=new He(_e),s}Jt(e,n){if(!this.te(e))return;const i=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,i),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),i&&(this.jt=this.jt.insert(n,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Sy,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new xt(_e),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Sy),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function ky(){return new He(Y.comparator)}function Ay(){return new He(Y.comparator)}const xM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),NM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),OM=(()=>({and:"AND",or:"OR"}))();class PM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qf(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DM(t,e){return Oc(t,e.toTimestamp())}function Ln(t){return $e(!!t),ne.fromTimestamp(function(e){const n=Bi(e);return new tt(n.seconds,n.nanos)}(t))}function im(t,e){return function(n){return new je(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function SE(t){const e=je.fromString(t);return $e(xE(e)),e}function Xf(t,e){return im(t.databaseId,e.path)}function xh(t,e){const n=SE(e);if(n.get(1)!==t.databaseId.projectId)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(kE(n))}function Jf(t,e){return im(t.databaseId,e)}function MM(t){const e=SE(t);return e.length===4?je.emptyPath():kE(e)}function Zf(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kE(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ry(t,e,n){return{name:Xf(t,e),fields:n.value.mapValue.fields}}function LM(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?($e(c===void 0||typeof c=="string"),Ot.fromBase64String(c||"")):($e(c===void 0||c instanceof Uint8Array),Ot.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?k.UNKNOWN:EE(l.code);return new H(c,l.message||"")}(o);n=new IE(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=xh(t,i.document.name),r=Ln(i.document.updateTime),o=i.document.createTime?Ln(i.document.createTime):ne.min(),a=new $t({mapValue:{fields:i.document.fields}}),l=It.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Vl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=xh(t,i.document),r=i.readTime?Ln(i.readTime):ne.min(),o=It.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Vl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=xh(t,i.document),r=i.removedTargetIds||[];n=new Vl([],r,s,null)}else{if(!("filter"in e))return Z();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new CM(s,r),a=i.targetId;n=new TE(a,o)}}return n}function FM(t,e){let n;if(e instanceof Ba)n={update:Ry(t,e.key,e.value)};else if(e instanceof Zp)n={delete:Xf(t,e.key)};else if(e instanceof Ji)n={update:Ry(t,e.key,e.data),updateMask:qM(e.fieldMask)};else{if(!(e instanceof EM))return Z();n={verify:Xf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof xc)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ha)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fa)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Nc)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Z()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function $M(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Ln(i.updateTime):Ln(s);return r.isEqual(ne.min())&&(r=Ln(s)),new _M(r,i.transformResults||[])}(n,e))):[]}function UM(t,e){return{documents:[Jf(t,e.path)]}}function VM(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Jf(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jf(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return RE(jn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Js(u.field),direction:zM(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Qf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function BM(t){let e=MM(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){$e(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=AE(u);return h instanceof jn&&rE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Mo(Zs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Su(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new Rc(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new Rc(f,h)}(n.endAt)),sM(e,s,o,r,a,"F",l,c)}function jM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zs(e.unaryFilter.field);return Je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Zs(e.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zs(e.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zs(e.unaryFilter.field);return Je.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(e){return Je.create(Zs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jn.create(e.compositeFilter.filters.map(n=>AE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(e.compositeFilter.op))}(t):Z()}function zM(t){return xM[t]}function HM(t){return NM[t]}function WM(t){return OM[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return St.fromServerFormat(t.fieldPath)}function RE(t){return t instanceof Je?function(e){if(e.op==="=="){if(my(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NAN"}};if(py(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(my(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NAN"}};if(py(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(e.field),op:HM(e.op),value:e.value}}}(t):t instanceof jn?function(e){const n=e.getFilters().map(i=>RE(i));return n.length===1?n[0]:{compositeFilter:{op:WM(e.op),filters:n}}}(t):Z()}function qM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,i,s,r=ne.min(),o=ne.min(),a=Ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.fe=e}}function GM(t){const e=BM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(){this.rn=new QM}addToCollectionParentIndex(e,n){return this.rn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Vi.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Vi.min())}updateCollectionGroup(e,n,i){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class QM{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new xt(je.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new xt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Dr(0)}static Mn(){return new Dr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?N.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Fo(i.mutation,s,qt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ue()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ue()){const s=hs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=wo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=hs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ue()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=ci();const o=Lo(),a=Lo();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Ji)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Fo(u.mutation,c,u.mutation.getFieldMask(),tt.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new JM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Lo();let s=new He((o,a)=>o-a),r=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||qt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||ue()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=dE();u.forEach(f=>{if(!r.has(f)){const d=wE(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return N.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return Y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):N.resolve(hs());let a=-1,l=r;return o.next(c=>N.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ue())).next(u=>({batchId:a,changes:fE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(i=>{let s=wo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=wo();return this.indexManager.getCollectionParents(e,s).next(o=>N.forEach(o,a=>{const l=function(c,u){return new ku(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,It.newInvalidDocument(c)))});let o=wo();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Fo(c.mutation,l,qt.empty(),tt.now()),xu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return N.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:Ln(i.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:GM(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(){this.overlays=new He(Y.comparator),this.ls=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const i=hs();return N.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.we(e,n,r)}),N.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),N.resolve()}getOverlaysForCollection(e,n,i){const s=hs(),r=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new He((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=hs(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=hs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return N.resolve(a)}we(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new IM(n,i));let r=this.ls.get(n);r===void 0&&(r=ue(),this.ls.set(n,r)),this.ls.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.fs=new xt(at.ds),this.ws=new xt(at._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new at(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new at(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new Y(new je([])),i=new at(n,e),s=new at(n,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Y(new je([])),i=new at(n,e),s=new at(n,e+1);let r=ue();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new at(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class at{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Y.comparator(e.key,n.key)||_e(e.As,n.As)}static _s(e,n){return _e(e.As,n.As)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new xt(at.ds)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TM(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new at(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.bs(i),r=s<0?0:s;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new xt(_e);return n.forEach(s=>{const r=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),N.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;Y.isDocumentKey(r)||(r=r.child(""));const o=new at(new Y(r),0);let a=new xt(_e);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.As)),!0)},o),N.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return N.forEach(n.mutations,s=>{const r=new at(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new at(n,0),s=this.Rs.firstAfterOrEqual(i);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.Ds=e,this.docs=new He(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return N.resolve(i?i.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let i=ci();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():It.newInvalidDocument(s))}),N.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=ci();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BD(VD(u),i)<=0||(s.has(u.key)||xu(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,n,i,s){Z()}Cs(e,n){return N.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new sL(this)}getSize(e){return N.resolve(this.size)}}class sL extends XM{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),N.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.persistence=e,this.xs=new Zr(n=>Xp(n),Jp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Ns=0,this.ks=new sm,this.targetCount=0,this.Ms=Dr.kn()}forEachTarget(e,n){return this.xs.forEach((i,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),N.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Dr(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Fn(n),N.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),N.waitFor(r).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return N.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),N.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),N.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return N.resolve(i)}containsKey(e,n){return N.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n){this.$s={},this.overlays={},this.Os=new Kp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new rL(this),this.indexManager=new YM,this.remoteDocumentCache=function(i){return new iL(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new KM(n),this.qs=new eL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new nL(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){j("MemoryPersistence","Starting transaction:",e);const s=new aL(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,n){return N.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class aL extends zD{constructor(e){super(),this.currentSequenceNumber=e}}class rm{constructor(e){this.persistence=e,this.Qs=new sm,this.js=null}static zs(e){return new rm(e)}get Ws(){if(this.js)return this.js;throw Z()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),N.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),N.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,i=>{const s=Y.fromPath(i);return this.Hs(e,s).next(r=>{r||n.removeEntry(s,ne.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return N.or([()=>N.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(e,n){let i=ue(),s=ue();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new om(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ki(e,n).next(r=>r||this.Gi(e,n,s,i)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(_y(n))return N.resolve(null);let i=li(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gf(n,null,"F"),i=li(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ue(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Gf(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,i,s){return _y(n)||s.isEqual(ne.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(n,r);return this.zi(n,o,i,s)?this.Qi(e,n):(uy()<=ge.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yf(n)),this.Wi(e,o,n,UD(s,-1)))})}ji(e,n){let i=new xt(uE(e));return n.forEach((s,r)=>{xu(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,n){return uy()<=ge.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Yf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Vi.min())}Wi(e,n,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new He(_e),this.Yi=new Zr(r=>Xp(r),Jp),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZM(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function uL(t,e,n,i){return new cL(t,e,n,i)}async function NE(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=ue();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function hL(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=N.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const v=l.docVersions.get(d);$e(v!==null),p.version.compareTo(v)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ue();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function OE(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function fL(t,e){const n=oe(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Ot.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),s=s.insert(h,d),function(p,v,y){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Bs.updateTargetData(r,d))});let l=ci(),c=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(dL(r,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!i.isEqual(ne.min())){const u=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return N.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=s,r))}function dL(t,e,n){let i=ue(),s=ue();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=ci();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:s}})}function pL(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function mL(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Bs.getTargetData(i,e).next(r=>r?(s=r,N.resolve(s)):n.Bs.allocateTargetId(i).next(o=>(s=new Ai(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function ed(t,e,n){const i=oe(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Va(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function xy(t,e,n){const i=oe(t);let s=ne.min(),r=ue();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=oe(a),h=u.Yi.get(c);return h!==void 0?N.resolve(u.Ji.get(h)):u.Bs.getTargetData(l,c)}(i,o,li(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?r:ue())).next(a=>(gL(i,lM(e),a),{documents:a,ir:r})))}function gL(t,e,n){let i=t.Xi.get(e)||ne.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Xi.set(e,i)}class Ny{constructor(){this.activeTargetIds=pM()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vL{constructor(){this.Hr=new Ny,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ny,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l=null;function Nh(){return _l===null?_l=268435456+Math.round(2147483648*Math.random()):_l++,"0x"+_l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class bL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,s,r){const o=Nh(),a=this.To(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.Eo(l,s,r),this.Ao(e,a,l,i).then(c=>(j("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw xr("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}vo(e,n,i,s,r,o){return this.Io(e,n,i,s,r)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,n){const i=_L[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,s){const r=Nh();return new Promise((o,a)=>{const l=new AD;l.setWithCredentials(!0),l.listenOnce(CD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Rh.NO_ERROR:const u=l.getResponseJson();j(wt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Rh.TIMEOUT:j(wt,`RPC '${e}' ${r} timed out`),a(new H(k.DEADLINE_EXCEEDED,"Request time out"));break;case Rh.HTTP_ERROR:const h=l.getStatus();if(j(wt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(v){const y=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(y)>=0?y:k.UNKNOWN}(d.status);a(new H(p,d.message))}else a(new H(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(k.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(wt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);j(wt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}Ro(e,n,i){const s=Nh(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TD(),a=ID(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new kD({})),this.Eo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");j(wt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new wL({ro:y=>{d?j(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(f||(j(wt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(wt,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},oo:()=>h.close()}),v=(y,_,b)=>{y.listen(_,x=>{try{b(x)}catch(C){setTimeout(()=>{throw C},0)}})};return v(h,ml.EventType.OPEN,()=>{d||j(wt,`RPC '${e}' stream ${s} transport opened.`)}),v(h,ml.EventType.CLOSE,()=>{d||(d=!0,j(wt,`RPC '${e}' stream ${s} transport closed`),p.wo())}),v(h,ml.EventType.ERROR,y=>{d||(d=!0,xr(wt,`RPC '${e}' stream ${s} transport errored:`,y),p.wo(new H(k.UNAVAILABLE,"The operation could not be completed")))}),v(h,ml.EventType.MESSAGE,y=>{var _;if(!d){const b=y.data[0];$e(!!b);const x=b,C=x.error||((_=x[0])===null||_===void 0?void 0:_.error);if(C){j(wt,`RPC '${e}' stream ${s} received error:`,C);const K=C.status;let re=function(Oe){const Ve=Ye[Oe];if(Ve!==void 0)return EE(Ve)}(K),ve=C.message;re===void 0&&(re=k.INTERNAL,ve="Unknown error status: "+K+" with message "+C.message),d=!0,p.wo(new H(re,ve)),h.close()}else j(wt,`RPC '${e}' stream ${s} received:`,b),p._o(b)}}),v(a,SD.STAT_EVENT,y=>{y.stat===ly.PROXY?j(wt,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===ly.NOPROXY&&j(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new PM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new PE(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(ai(n.toString()),ai("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{e(()=>{const s=new H(k.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EL extends DE{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=LM(this.serializer,e),i=function(s){if(!("targetChange"in s))return ne.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?ne.min():r.readTime?Ln(r.readTime):ne.min()}(e);return this.listener.nu(n,i)}su(e){const n={};n.database=Zf(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;if(o=Kf(a)?{documents:UM(s,a)}:{query:VM(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=CE(s,r.resumeToken);const l=Qf(s,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(ne.min())>0){o.readTime=Oc(s,r.snapshotVersion.toTimestamp());const l=Qf(s,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const i=jM(this.serializer,e);i&&(n.labels=i),this.Wo(n)}iu(e){const n={};n.database=Zf(this.serializer),n.removeTarget=e,this.Wo(n)}}class TL extends DE{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if($e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=$M(e.writeResults,e.commitTime),i=Ln(e.commitTime);return this.listener.cu(i,n)}return $e(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Zf(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>FM(this.serializer,i))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(k.UNKNOWN,s.toString())})}vo(e,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(k.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class CL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ai(n),this.mu=!1):j("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{zs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=oe(a);l.vu.add(4),await za(l),l.bu.set("Unknown"),l.vu.delete(4),await Mu(l)}(this))})}),this.bu=new CL(i,s)}}async function Mu(t){if(zs(t))for(const e of t.Ru)await e(!0)}async function za(t){for(const e of t.Ru)await e(!1)}function ME(t,e){const n=oe(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),cm(n)?lm(n):eo(n).Ko()&&am(n,e))}function LE(t,e){const n=oe(t),i=eo(n);n.Au.delete(e),i.Ko()&&FE(n,e),n.Au.size===0&&(i.Ko()?i.jo():zs(n)&&n.bu.set("Unknown"))}function am(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}eo(t).su(e)}function FE(t,e){t.Vu.qt(e),eo(t).iu(e)}function lm(t){t.Vu=new RM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),eo(t).start(),t.bu.gu()}function cm(t){return zs(t)&&!eo(t).Uo()&&t.Au.size>0}function zs(t){return oe(t).vu.size===0}function $E(t){t.Vu=void 0}async function kL(t){t.Au.forEach((e,n)=>{am(t,e)})}async function AL(t,e){$E(t),cm(t)?(t.bu.Iu(e),lm(t)):t.bu.set("Unknown")}async function RL(t,e,n){if(t.bu.set("Online"),e instanceof IE&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(t,e)}catch(i){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pc(t,i)}else if(e instanceof Vl?t.Vu.Ht(e):e instanceof TE?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ne.min()))try{const i=await OE(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Au.get(l);c&&s.Au.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Au.get(a);if(!c)return;s.Au.set(a,c.withResumeToken(Ot.EMPTY_BYTE_STRING,c.snapshotVersion)),FE(s,a);const u=new Ai(c.target,a,l,c.sequenceNumber);am(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){j("RemoteStore","Failed to raise snapshot:",i),await Pc(t,i)}}async function Pc(t,e,n){if(!Va(e))throw e;t.vu.add(1),await za(t),t.bu.set("Offline"),n||(n=()=>OE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Mu(t)})}function UE(t,e){return e().catch(n=>Pc(t,n,e))}async function Lu(t){const e=oe(t),n=ji(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;xL(e);)try{const s=await pL(e.localStore,i);if(s===null){e.Eu.length===0&&n.jo();break}i=s.batchId,NL(e,s)}catch(s){await Pc(e,s)}VE(e)&&BE(e)}function xL(t){return zs(t)&&t.Eu.length<10}function NL(t,e){t.Eu.push(e);const n=ji(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function VE(t){return zs(t)&&!ji(t).Uo()&&t.Eu.length>0}function BE(t){ji(t).start()}async function OL(t){ji(t).hu()}async function PL(t){const e=ji(t);for(const n of t.Eu)e.uu(n.mutations)}async function DL(t,e,n){const i=t.Eu.shift(),s=em.from(i,e,n);await UE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Lu(t)}async function ML(t,e){e&&ji(t).ou&&await async function(n,i){if(s=i.code,SM(s)&&s!==k.ABORTED){const r=n.Eu.shift();ji(n).Qo(),await UE(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Lu(n)}var s}(t,e),VE(t)&&BE(t)}async function Py(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const i=zs(n);n.vu.add(3),await za(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Mu(n)}async function LL(t,e){const n=oe(t);e?(n.vu.delete(2),await Mu(n)):e||(n.vu.add(2),await za(n),n.bu.set("Unknown"))}function eo(t){return t.Su||(t.Su=function(e,n,i){const s=oe(e);return s.fu(),new EL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:kL.bind(null,t),ao:AL.bind(null,t),nu:RL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),cm(t)?lm(t):t.bu.set("Unknown")):(await t.Su.stop(),$E(t))})),t.Su}function ji(t){return t.Du||(t.Du=function(e,n,i){const s=oe(e);return s.fu(),new TL(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:OL.bind(null,t),ao:ML.bind(null,t),au:PL.bind(null,t),cu:DL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Lu(t)):(await t.Du.stop(),t.Eu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new um(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hm(t,e){if(ai("AsyncQueue",`${e}: ${t}`),Va(t))return new H(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||Y.comparator(n.key,i.key):(n,i)=>Y.comparator(n.key,i.key),this.keyedMap=wo(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new vr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.Cu=new He(Y.comparator)}track(e){const n=e.doc.key,i=this.Cu.get(n);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(n):e.type===1&&i.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Z():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Mr{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mr(e,n,vr.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.Nu=void 0,this.listeners=[]}}class $L{constructor(){this.queries=new Zr(e=>cE(e),Ru),this.onlineState="Unknown",this.ku=new Set}}async function jE(t,e){const n=oe(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new FL),s)try{r.Nu=await n.onListen(i)}catch(o){const a=hm(o,`Initialization of query '${Yf(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&fm(n)}async function zE(t,e){const n=oe(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function UL(t,e){const n=oe(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(i=!0);o.Nu=s}}i&&fm(n)}function VL(t,e,n){const i=oe(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function fm(t){t.ku.forEach(e=>{e.next()})}class HE{constructor(e,n,i){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Mr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Mr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.key=e}}class qE{constructor(e){this.key=e}}class BL{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ue(),this.mutatedKeys=ue(),this.tc=uE(e),this.ec=new vr(this.tc)}get nc(){return this.Yu}sc(e,n){const i=n?n.ic:new Dy,s=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=xu(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==v&&(i.track({type:3,doc:d}),y=!0):this.rc(f,d)||(i.track({type:2,doc:d}),y=!0,(l&&this.tc(d,l)>0||c&&this.tc(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),y=!0):f&&!d&&(i.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{ec:o,ic:i,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return d(h)-d(f)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(i);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,r.length!==0||l?{snapshot:new Mr(this.query,e.ec,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Dy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ue(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const n=[];return e.forEach(i=>{this.Zu.has(i)||n.push(new qE(i))}),this.Zu.forEach(i=>{e.has(i)||n.push(new WE(i))}),n}hc(e){this.Yu=e.ir,this.Zu=ue();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Mr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class jL{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class zL{constructor(e){this.key=e,this.fc=!1}}class HL{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Zr(a=>cE(a),Ru),this._c=new Map,this.mc=new Set,this.gc=new He(Y.comparator),this.yc=new Map,this.Ic=new sm,this.Tc={},this.Ec=new Map,this.Ac=Dr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function WL(t,e){const n=t4(t);let i,s;const r=n.wc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await mL(n.localStore,li(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await qL(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&ME(n.remoteStore,o)}return s}async function qL(t,e,n,i,s){t.Rc=(h,f,d)=>async function(p,v,y,_){let b=v.view.sc(y);b.zi&&(b=await xy(p.localStore,v.query,!1).then(({documents:K})=>v.view.sc(K,b)));const x=_&&_.targetChanges.get(v.targetId),C=v.view.applyChanges(b,p.isPrimaryClient,x);return Ly(p,v.targetId,C.cc),C.snapshot}(t,h,f,d);const r=await xy(t.localStore,e,!0),o=new BL(e,r.ir),a=o.sc(r.documents),l=ja.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Ly(t,n,c.cc);const u=new jL(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function KL(t,e){const n=oe(t),i=n.wc.get(e),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter(r=>!Ru(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ed(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),LE(n.remoteStore,i.targetId),td(n,i.targetId)}).catch(Ua)):(td(n,i.targetId),await ed(n.localStore,i.targetId,!0))}async function GL(t,e,n){const i=n4(t);try{const s=await function(r,o){const a=oe(r),l=tt.now(),c=o.reduce((f,d)=>f.add(d.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=ci(),p=ue();return a.Zi.getEntries(f,c).next(v=>{d=v,d.forEach((y,_)=>{_.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(v=>{u=v;const y=[];for(const _ of o){const b=bM(_,u.get(_.key).overlayedDocument);b!=null&&y.push(new Ji(_.key,b,nE(b.value.mapValue),sn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,y,o)}).next(v=>{h=v;const y=v.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,v.batchId,y)})}).then(()=>({batchId:h.batchId,changes:fE(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new He(_e)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(i,s.batchId,n),await Ha(i,s.changes),await Lu(i.remoteStore)}catch(s){const r=hm(s,"Failed to persist write");n.reject(r)}}async function KE(t,e){const n=oe(t);try{const i=await fL(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.yc.get(r);o&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?$e(o.fc):s.removedDocuments.size>0&&($e(o.fc),o.fc=!1))}),await Ha(n,i,e)}catch(i){await Ua(i)}}function My(t,e,n){const i=oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=oe(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Mu(o)&&(l=!0)}),l&&fm(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function YL(t,e,n){const i=oe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new He(Y.comparator);o=o.insert(r,It.newNoDocument(r,ne.min()));const a=ue().add(r),l=new Pu(ne.min(),new Map,new He(_e),o,a);await KE(i,l),i.gc=i.gc.remove(r),i.yc.delete(e),dm(i)}else await ed(i.localStore,e,!1).then(()=>td(i,e,n)).catch(Ua)}async function QL(t,e){const n=oe(t),i=e.batch.batchId;try{const s=await hL(n.localStore,e);YE(n,i,null),GE(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ha(n,s)}catch(s){await Ua(s)}}async function XL(t,e,n){const i=oe(t);try{const s=await function(r,o){const a=oe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>($e(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);YE(i,e,n),GE(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Ha(i,s)}catch(s){await Ua(s)}}function GE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function YE(t,e,n){const i=oe(t);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||QE(t,i)})}function QE(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(LE(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),dm(t))}function Ly(t,e,n){for(const i of n)i instanceof WE?(t.Ic.addReference(i.key,e),JL(t,i)):i instanceof qE?(j("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||QE(t,i.key)):Z()}function JL(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(j("SyncEngine","New document in limbo: "+n),t.mc.add(i),dm(t))}function dm(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Y(je.fromString(e)),i=t.Ac.next();t.yc.set(i,new zL(n)),t.gc=t.gc.insert(n,i),ME(t.remoteStore,new Ai(li(Au(n.path)),i,"TargetPurposeLimboResolution",Kp.ct))}}async function Ha(t,e,n){const i=oe(t),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,l)=>{o.push(i.Rc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=om.Li(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,l){const c=oe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(l,h=>N.forEach(h.Fi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>N.forEach(h.Bi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Va(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Ji.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Ji=c.Ji.insert(h,p)}}}(i.localStore,r))}async function ZL(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const i=await NE(n.localStore,e);n.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new H(k.CANCELLED,r))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ha(n,i.er)}}function e4(t,e){const n=oe(t),i=n.yc.get(e);if(i&&i.fc)return ue().add(i.key);{let s=ue();const r=n._c.get(e);if(!r)return s;for(const o of r){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function t4(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=KE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YL.bind(null,e),e.dc.nu=UL.bind(null,e.eventManager),e.dc.Pc=VL.bind(null,e.eventManager),e}function n4(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XL.bind(null,e),e}class Fy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uL(this.persistence,new lL,e.initialUser,this.serializer)}createPersistence(e){return new oL(rm.zs,this.serializer)}createSharedClientState(e){return new vL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class i4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>My(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZL.bind(null,this.syncEngine),await LL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $L}createDatastore(e){const n=Du(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new bL(s));var s;return function(r,o,a,l){return new IL(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>My(this.syncEngine,a,0),o=Oy.D()?new Oy:new yL,new SL(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new HL(i,s,r,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);j("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await za(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ai("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=Zb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{j("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(j("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=hm(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await NE(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await o4(t);j("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>Py(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Py(e.remoteStore,r)),t._onlineComponents=e}function r4(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function o4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!r4(n))throw n;xr("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Fy)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Ph(t,new Fy);return t._offlineComponents}async function JE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await $y(t,new i4))),t._onlineComponents}function a4(t){return JE(t).then(e=>e.syncEngine)}async function nd(t){const e=await JE(t),n=e.eventManager;return n.onListen=WL.bind(null,e.syncEngine),n.onUnlisten=KL.bind(null,e.syncEngine),n}function l4(t,e,n={}){const i=new Di;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new XE({next:h=>{r.enqueueAndForget(()=>zE(s,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new H(k.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new H(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new HE(Au(o.path),c,{includeMetadataChanges:!0,Ku:!0});return jE(s,u)}(await nd(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e,n){if(!n)throw new H(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c4(t,e,n,i){if(e===!0&&i===!0)throw new H(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vy(t){if(!Y.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function By(t){if(Y.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pm(t);throw new H(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new H(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class Fu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xD;switch(n.type){case"firstParty":return new DD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Uy.get(e);n&&(j("ComponentProvider","Removing Datastore"),Uy.delete(e),n.terminate())}(this),Promise.resolve()}}function u4(t,e,n,i={}){var s;const r=(t=rn(t,Fu))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&xr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=bt.MOCK_USER;else{o=Uk(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new H(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new bt(l)}t._authCredentials=new ND(new Jb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class $u{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class Mi extends $u{constructor(e,n,i){super(e,n,Au(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new Y(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function tT(t,e,...n){if(t=it(t),eT("collection","path",e),t instanceof Fu){const i=je.fromString(e,...n);return By(i),new Mi(t,null,i)}{if(!(t instanceof Mt||t instanceof Mi))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(je.fromString(e,...n));return By(i),new Mi(t.firestore,null,i)}}function mm(t,e,...n){if(t=it(t),arguments.length===1&&(e=Zb.A()),eT("doc","path",e),t instanceof Fu){const i=je.fromString(e,...n);return Vy(i),new Mt(t,null,new Y(i))}{if(!(t instanceof Mt||t instanceof Mi))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(je.fromString(e,...n));return Vy(i),new Mt(t.firestore,t instanceof Mi?t.converter:null,new Y(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new PE(this,"async_queue_retry"),this.Xc=()=>{const n=Oh();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Oh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Oh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Di;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Va(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw ai("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=um.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Z()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function zy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends Fu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new h4,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nT(this),this._firestoreClient.terminate()}}function f4(t,e){const n=typeof t=="object"?t:qd(),i=typeof t=="string"?t:e||"(default)",s=Wd(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=$k("firestore");r&&u4(s,...r)}return s}function gm(t){return t._firestoreClient||nT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nT(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new qD(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ZE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new s4(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(Ot.fromBase64String(e))}catch(n){throw new H(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lr(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=/^__.*__$/;class p4{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ba(e,this.data,n,this.fieldTransforms)}}class iT{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class _m{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new _m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Dc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(sT(this.ca)&&d4.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class m4{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Du(e)}ya(e,n,i,s=!1){return new _m({ca:e,methodName:n,ga:i,path:St.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wm(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new m4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rT(t,e,n,i,s,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,s);bm("Data must be an object, but it was:",o,i);const a=oT(i,o);let l,c;if(r.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=id(e,h,n);if(!o.contains(f))throw new H(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);lT(u,f)||u.push(f)}l=new qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new p4(new $t(a),l,c)}class Wa extends vm{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}function g4(t,e,n,i){const s=t.ya(1,e,n);bm("Data must be an object, but it was:",s,i);const r=[],o=$t.empty();js(i,(l,c)=>{const u=Em(e,l,n);c=it(c);const h=s.da(u);if(c instanceof Wa)r.push(u);else{const f=Vu(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new qt(r);return new iT(o,a,s.fieldTransforms)}function v4(t,e,n,i,s,r){const o=t.ya(1,e,n),a=[id(e,i,n)],l=[s];if(r.length%2!=0)throw new H(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(id(e,r[f])),l.push(r[f+1]);const c=[],u=$t.empty();for(let f=a.length-1;f>=0;--f)if(!lT(c,a[f])){const d=a[f];let p=l[f];p=it(p);const v=o.da(d);if(p instanceof Wa)c.push(d);else{const y=Vu(p,v);y!=null&&(c.push(d),u.set(d,y))}}const h=new qt(c);return new iT(u,h,o.fieldTransforms)}function Vu(t,e){if(aT(t=it(t)))return bm("Unsupported field value:",e,t),oT(t,e);if(t instanceof vm)return function(n,i){if(!sT(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Vu(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=it(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mM(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=tt.fromDate(n);return{timestampValue:Oc(i.serializer,s)}}if(n instanceof tt){const s=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Oc(i.serializer,s)}}if(n instanceof ym)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lr)return{bytesValue:CE(i.serializer,n._byteString)};if(n instanceof Mt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:im(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${pm(n)}`)}(t,e)}function oT(t,e){const n={};return eE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(i,s)=>{const r=Vu(s,e.ha(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function aT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof ym||t instanceof Lr||t instanceof Mt||t instanceof vm)}function bm(t,e,n){if(!aT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=pm(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function id(t,e,n){if((e=it(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return Em(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const y4=new RegExp("[~\\*/\\[\\]]");function Em(t,e,n){if(e.search(y4)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new H(k.INVALID_ARGUMENT,a+t+l)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _4 extends cT{data(){return super.data()}}function uT(t,e){return typeof e=="string"?Em(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b4{convertValue(e,n="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return js(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new ym(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Yp(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(la(e));default:return null}}convertTimestamp(e){const n=Bi(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=je.fromString(e);$e(xE(i));const s=new ca(i.get(1),i.get(3)),r=new Y(i.popFirst(5));return s.isEqual(n)||ai(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fT extends cT{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(uT("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Bl extends fT{data(e={}){return super.data(e)}}class E4{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Bl(this._firestore,this._userDataWriter,i.key,i,new Eo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Bl(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Eo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Bl(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Eo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:T4(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function T4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I4(t){t=rn(t,Mt);const e=rn(t.firestore,zi);return l4(gm(e),t._key).then(n=>gT(e,t,n))}class dT extends b4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function pT(t,e,n){t=rn(t,Mt);const i=rn(t.firestore,zi),s=hT(t.converter,e,n);return Bu(i,[rT(wm(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function sd(t,e,n,...i){t=rn(t,Mt);const s=rn(t.firestore,zi),r=wm(s);let o;return o=typeof(e=it(e))=="string"||e instanceof Uu?v4(r,"updateDoc",t._key,e,n,i):g4(r,"updateDoc",t._key,e),Bu(s,[o.toMutation(t._key,sn.exists(!0))])}function C4(t){return Bu(rn(t.firestore,zi),[new Zp(t._key,sn.none())])}function S4(t,e){const n=rn(t.firestore,zi),i=mm(t),s=hT(t.converter,e);return Bu(n,[rT(wm(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,sn.exists(!1))]).then(()=>i)}function mT(t,...e){var n,i,s;t=it(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||zy(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(zy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Mt)c=rn(t.firestore,zi),u=Au(t._key.path),l={next:h=>{e[o]&&e[o](gT(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rn(t,$u);c=rn(h.firestore,zi),u=h._query;const f=new dT(c);l={next:d=>{e[o]&&e[o](new E4(c,f,h,d))},error:e[o+1],complete:e[o+2]},w4(t._query)}return function(h,f,d,p){const v=new XE(p),y=new HE(f,v,d);return h.asyncQueue.enqueueAndForget(async()=>jE(await nd(h),y)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>zE(await nd(h),y))}}(gm(c),u,a,l)}function Bu(t,e){return function(n,i){const s=new Di;return n.asyncQueue.enqueueAndForget(async()=>GL(await a4(n),i,s)),s.promise}(gm(t),e)}function gT(t,e,n){const i=n.docs.get(e._key),s=new dT(t);return new fT(t,s,e._key,i,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return new Wa("deleteField")}(function(t,e=!0){(function(n){Jr=n})(Yi),Un(new En("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new zi(new OD(n.getProvider("auth-internal")),new LD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Kt(cy,"3.12.0",t),Kt(cy,"3.12.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebasestorage.googleapis.com",k4="storageBucket",A4=2*60*1e3,R4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Hn{constructor(e,n,i=0){super(Dh(e),`Firebase Storage: ${n} (${Dh(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zn||(zn={}));function Dh(t){return"storage/"+t}function x4(){const t="An unknown error occurred, please check the error payload for server response.";return new Wn(zn.UNKNOWN,t)}function N4(){return new Wn(zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O4(){return new Wn(zn.CANCELED,"User canceled the upload/download.")}function P4(t){return new Wn(zn.INVALID_URL,"Invalid URL '"+t+"'.")}function D4(t){return new Wn(zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Wy(t){return new Wn(zn.INVALID_ARGUMENT,t)}function yT(){return new Wn(zn.APP_DELETED,"The Firebase app was deleted.")}function M4(t){return new Wn(zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(i.path==="")return i;throw D4(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},v=n===vT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",_=new RegExp(`^https?://${v}/${s}/${y}`,"i"),x=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<x.length;C++){const K=x[C],re=K.regex.exec(e);if(re){const ve=re[K.indices.bucket];let Oe=re[K.indices.path];Oe||(Oe=""),i=new gn(ve,Oe),K.postModify(i);break}}if(i==null)throw P4(e);return i}}class L4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(d,l())},y)}function f(){r&&clearTimeout(r)}function d(y,..._){if(c){f();return}if(y){f(),u.call(null,y,..._);return}if(l()||o){f(),u.call(null,y,..._);return}i<64&&(i*=2);let x;a===1?(a=2,x=0):x=(i+Math.random())*1e3,h(x)}let p=!1;function v(y){p||(p=!0,f(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function $4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(t){return t!==void 0}function qy(t,e,n,i){if(i<e)throw Wy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Wy(`Invalid value for '${t}'. Expected ${n} or less.`)}function V4(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new wl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Mc.NO_ERROR,l=r.getStatus();if(!a||B4(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Mc.ABORT;i(!1,new wl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new wl(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());U4(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=x4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?yT():O4();o(l)}else{const l=N4();o(l)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=F4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function z4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function H4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function W4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function q4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function K4(t,e,n,i,s,r,o=!0){const a=V4(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return W4(c,e),z4(c,n),H4(c,r),q4(c,i),new j4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Y4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lc(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y4(this._location.path)}get storage(){return this._service}get parent(){const e=G4(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new Lc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw M4(e)}}function Ky(t,e){const n=e==null?void 0:e[k4];return n==null?null:gn.makeFromBucketSpec(n,t)}class Q4{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=vT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=A4,this._maxUploadRetryTime=R4,this._requests=new Set,s!=null?this._bucket=gn.makeFromBucketSpec(s,this._host):this._bucket=Ky(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=Ky(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new L4(yT());{const o=K4(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Gy="@firebase/storage",Yy="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4="storage";function J4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Q4(n,i,s,e,Yi)}function Z4(){Un(new En(X4,J4,"PUBLIC").setMultipleInstances(!0)),Kt(Gy,Yy,""),Kt(Gy,Yy,"esm2017")}Z4();function e3(t){return(e,n)=>{const i=$x(e,n).run(()=>Ie(t));Ux.set(e,i),Bx(i,e)}}function t3(t,{firebaseApp:e,modules:n=[]}){t.provide(Mw,e);for(const i of n)t.use(i.bind(null,e))}const jt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},n3={},i3=t=>(Ki("data-v-f7397049"),t=t(),Gi(),t),s3=i3(()=>S("span",null,"Training Lab",-1));function r3(t,e){const n=$n("font-awesome-icon"),i=$n("RouterLink");return X(),on(i,{to:"/",class:"logo"},{default:Pd(()=>[se(n,{icon:"fa-solid fa-dumbbell"}),s3]),_:1})}const o3=jt(n3,[["render",r3],["__scopeId","data-v-f7397049"]]);const a3={__name:"TextButton",props:{label:{type:String,default:"Default"},isOutlined:{type:Boolean,default:!1},fSize:{type:String,default:"1rem"},onClick:{type:Function,default:()=>{}}},setup(t){return(e,n)=>(X(),le("button",{type:"submit",class:Vr({outlined:t.isOutlined}),style:_r({fontSize:t.fSize}),onClick:n[0]||(n[0]=et((...i)=>t.onClick&&t.onClick(...i),["prevent"]))},Ut(t.label),7))}},l3=jt(a3,[["__scopeId","data-v-8adc40bb"]]);const c3={id:"navbar",class:"navbar"},u3={__name:"Navbar",setup(t){function e(){to.push("/auth")}return(n,i)=>(X(),le("nav",c3,[se(o3),se(l3,{label:"Sign In",onClick:e})]))}},_T=jt(u3,[["__scopeId","data-v-1a965241"]]),h3=S("section",{id:"hero"},null,-1),f3={__name:"Hero",setup(t){return(e,n)=>(X(),le(Xe,null,[se(_T),h3],64))}},d3={apiKey:"AIzaSyAMOWNm3niijQYcjYUdSO3TJjBo01-bVto",authDomain:"training-lab-c6fc8.firebaseapp.com",projectId:"training-lab-c6fc8",storageBucket:"training-lab-c6fc8.appspot.com",messagingSenderId:"384578017553",appId:"1:384578017553:web:fe578ea402ba8d350654b0",measurementId:"G-9HXV1QFX7R"},wT=X0(d3),p3=f4(wT),m3=tT(p3,"users");let Tm=Ht(),rd,Fc;function ws(t){if(Tm.currentUser)return mm(Fc,t)}ZR(Tm,t=>{t&&(rd=mm(m3,t.uid),Fc=tT(rd,"plans"))});function Qy(){ep(Tm).then(()=>{to.push("/auth")})}const qa=t=>(Ki("data-v-bd08aab9"),t=t(),Gi(),t),g3={class:"event-catcher"},v3=["onClick"],y3={id:"nav",class:"nav"},_3={class:"nav-list"},w3={class:"logo"},b3=qa(()=>S("span",null,"Training Lab",-1)),E3=qa(()=>S("hr",null,null,-1)),T3=["onClick"],I3={class:"bottom"},C3={class:"nav-item"},S3=qa(()=>S("span",null,"Logout",-1)),k3=qa(()=>S("hr",null,null,-1)),A3={class:"account"},R3={class:"nav-link",href:""},x3=qa(()=>S("p",null,"Logged as",-1)),N3={class:"email"},O3={__name:"Sidebar",props:{pages:{type:Array,default:[]},selectedPageIndex:{type:Number,default:0},selectPageIndex:{type:Function,default:()=>{}}},setup(t){function e(){const n=document.getElementById("nav"),i=document.querySelector(".toggle-btn");n.classList.toggle("active"),i.classList.toggle("active")}return window.addEventListener("click",function(n){if(!n.target.closest(".event-catcher")){const i=document.getElementById("nav"),s=document.querySelector(".toggle-btn");i&&i.classList.contains("active")&&i.classList.remove("active"),s&&s.classList.contains("active")&&s.classList.remove("active")}}),(n,i)=>{const s=$n("font-awesome-icon"),r=$n("RouterLink");return X(),le("div",g3,[S("a",{onClick:et(e,["prevent"]),class:"toggle-btn"},[se(s,{icon:"fa-solid fa-angle-right"})],8,v3),S("nav",y3,[S("ul",_3,[S("li",w3,[se(r,{to:"/",class:"nav-link"},{default:Pd(()=>[se(s,{icon:"fa-solid fa-dumbbell"}),b3]),_:1})]),E3,(X(!0),le(Xe,null,Io(t.pages,(o,a)=>(X(),le("li",{key:a,class:"nav-item"},[S("a",{class:Vr(["nav-link",{active:t.selectedPageIndex==a}]),onClick:et(l=>t.selectPageIndex(a),["prevent"])},[se(s,{icon:"fa-solid "+o.icon},null,8,["icon"]),S("span",null,Ut(o.title),1)],10,T3)]))),128)),S("ul",I3,[S("li",C3,[S("a",{class:"nav-link",onClick:i[0]||(i[0]=et((...o)=>Q(Qy)&&Q(Qy)(...o),["prevent"]))},[se(s,{icon:"fa-solid fa-sign-out-alt"}),S3])]),k3,S("li",A3,[S("p",R3,[se(s,{icon:"fa-solid fa-circle-user",size:"lg"}),S("span",null,[x3,S("p",N3,Ut(Q(Ht)().currentUser.email),1)])])])])])])])}}},P3=jt(O3,[["__scopeId","data-v-bd08aab9"]]);const D3=t=>(Ki("data-v-367aea69"),t=t(),Gi(),t),M3={class:"content title"},L3=D3(()=>S("hr",null,null,-1)),F3={__name:"Header",props:{title:{type:String,default:"Title"}},setup(t){return(e,n)=>(X(),le(Xe,null,[S("h1",M3,Ut(t.title),1),L3],64))}},bT=jt(F3,[["__scopeId","data-v-367aea69"]]);const $3={__name:"IconButton",props:{icon:{type:String,default:"fa-xmark"},iconSize:{type:String,default:"fa-lg"},backgroundColorVar:{type:String,default:"color60"},onClick:{type:Function,default:()=>{}}},setup(t){return(e,n)=>{const i=$n("font-awesome-icon");return X(),le("a",{onClick:n[0]||(n[0]=et((...s)=>t.onClick&&t.onClick(...s),["prevent"])),class:Vr(["icon-button",t.backgroundColorVar])},[se(i,{icon:["fa-solid",t.icon],size:t.iconSize},null,8,["icon","size"])],2)}}},os=jt($3,[["__scopeId","data-v-1ffa6622"]]);const U3={class:"plan-item"},V3={class:"plan-section"},B3={class:"plan-indicators"},j3={class:"plan-section"},z3={class:"text"},H3={__name:"PlanTile",props:{plan:{type:Object,default:{}},selectPlan:{type:Function,default:()=>{}},totalVolume:{type:Number,default:0}},setup(t){const e=t;function n(r){sd(ws(e.plan.id),{title:r===""?Hy():r})}function i(r){sd(ws(e.plan.id),{description:r===""?Hy():r})}function s(){C4(ws(e.plan.id))}return(r,o)=>{const a=$n("font-awesome-icon");return X(),le("li",U3,[S("div",V3,[S("div",B3,[S("span",null,[se(a,{icon:"fa-solid fa-calendar-day"}),S("p",null,Ut(t.plan.days?t.plan.days.length:0),1)]),S("span",null,[se(a,{icon:"fa-solid fa-bolt"}),S("p",null,Ut(t.plan.days?t.totalVolume:0),1)])]),se(os,{onClick:et(s,["prevent"]),icon:"fa-trash-can"},null,8,["onClick"])]),S("div",j3,[S("div",z3,[ni(S("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.plan.title=l),class:"plan-title",type:"text",maxlength:"16",spellcheck:"false",onInput:o[1]||(o[1]=l=>n(l.target.value))},null,544),[[$i,t.plan.title]]),ni(S("input",{"onUpdate:modelValue":o[2]||(o[2]=l=>t.plan.description=l),class:"plan-description",type:"text",maxlength:"32",spellcheck:"false",onInput:o[3]||(o[3]=l=>i(l.target.value))},null,544),[[$i,t.plan.description]])]),se(os,{onClick:()=>t.selectPlan(t.plan.id),icon:"fa-angle-right"},null,8,["onClick"])])])}}},W3=jt(H3,[["__scopeId","data-v-52aa4ddb"]]);const q3=t=>(Ki("data-v-a94aa313"),t=t(),Gi(),t),K3={class:"day-list"},G3={class:"index"},Y3={key:0,class:"workout-list"},Q3={class:"exercise-list"},X3={class:"exercise-item"},J3=["onInput"],Z3={class:"right"},eF={class:"total-volume"},tF=q3(()=>S("hr",null,null,-1)),nF=["onInput"],iF={class:"right"},sF=["onUpdate:modelValue"],rF={class:"exercise-item"},oF=["onClick"],aF=["onClick"],lF={__name:"DayList",props:{planId:{type:String,default:""},totalWorkoutVolume:{type:Function,default:()=>{}},clearSelectedPlan:{type:Function,default:()=>{}}},setup(t){const e=t,n=Ie({});function i(){let u=n.value.days;u?u.push({}):u=[{}],n.value.days=u}function s(u){n.value.days=n.value.days.filter(h=>h!==u),n.value.days.length===0&&delete n.value.days}function r(u){let h=n.value.days[u];const f={title:"New Workout"};h.workouts?h.workouts.push(f):h.workouts=[f],n.value.days[u]=h}function o(u,h){let f=n.value.days[u];f.workouts=f.workouts.filter(d=>d!==h),f.workouts.length===0&&delete f.workouts,n.value.days[u]=f}function a(u,h){let f=n.value.days[u].workouts[h].exercises;const d={title:"New Exercise",volume:1};f?f.push(d):f=[d],n.value.days[u].workouts[h].exercises=f}function l(u,h,f){n.value.days[u].workouts[h].exercises=n.value.days[u].workouts[h].exercises.filter(d=>d!==f)}function c(){pT(ws(e.planId),n.value),e.clearSelectedPlan()}return mT(ws(e.planId),u=>{n.value=u.data()}),(u,h)=>{const f=$n("font-awesome-icon");return X(),le(Xe,null,[S("ul",K3,[(X(!0),le(Xe,null,Io(n.value.days,(d,p)=>(X(),le("li",{key:d,class:"day-item"},[S("p",G3,"#"+Ut(p+1),1),d.workouts?(X(),le("ul",Y3,[(X(!0),le(Xe,null,Io(d.workouts,(v,y)=>(X(),le("li",{key:v,class:"workout-item"},[S("ul",Q3,[S("li",X3,[S("p",{class:"contenteditable workout-title",role:"textbox",spellcheck:"false",onInput:_=>{v.title=_.target.innerText},contenteditable:""},Ut(v.title),41,J3),S("div",Z3,[S("span",eF,Ut(t.totalWorkoutVolume(v)),1),se(os,{"on-click":()=>o(p,v),icon:"fa-xmark","background-color-var":"color30"},null,8,["on-click"])])]),tF,(X(!0),le(Xe,null,Io(v.exercises,_=>(X(),le("li",{key:_,class:"exercise-item"},[S("p",{class:"contenteditable exercise-title",role:"textbox",spellcheck:"false",onInput:b=>{_.title=b.target.innerText},contenteditable:""},Ut(_.title),41,nF),S("div",iF,[ni(S("input",{"onUpdate:modelValue":b=>_.volume=b,class:"volume",type:"number",min:"1",max:"99"},null,8,sF),[[$i,_.volume]]),se(os,{"on-click":()=>l(p,y,_),icon:"fa-minus","background-color-var":"color30"},null,8,["on-click"])])]))),128)),S("li",rF,[se(os,{"on-click":()=>a(p,y),icon:"fa-plus","background-color-var":"color30"},null,8,["on-click"])])])]))),128))])):Zt("",!0),se(os,{"on-click":()=>r(p),icon:"fa-plus"},null,8,["on-click"]),se(os,{"on-click":()=>s(d),class:"delete-day-btn",icon:"fa-trash-can"},null,8,["on-click"])]))),128)),S("a",{onClick:et(i,["prevent"]),class:"add-day-button"},[se(f,{icon:"fa-solid fa-plus",size:"xl"})],8,oF)]),S("a",{onClick:et(c,["prevent"]),class:"floating-btn"},[se(f,{icon:"fa-solid fa-save",size:"lg"})],8,aF)],64)}}},cF=jt(lF,[["__scopeId","data-v-a94aa313"]]);const uF={class:"content"},hF={key:0,class:"plan-list"},fF=["onClick"],dF={class:"new-plan-button"},pF={__name:"Dashboard",setup(t){const e=Ie([]),n=Ie(null),i=Ie(null);function s(){S4(Fc,{title:"My plan",description:"My description"}).then(c=>{sd(ws(c.id),{id:c.id})})}function r(c){n.value=c,I4(ws(c)).then(u=>{i.value=u.data().title})}function o(){n.value=null}function a(c){let u=0;return c.days&&c.days.map(h=>{h.workouts&&h.workouts.map(f=>{u+=l(f)})}),u}function l(c){let u=0;return c.exercises&&c.exercises.map(h=>{u+=h.volume}),u}return mT(Fc,c=>{let u=[];c.forEach(h=>{u.push(h.data())}),e.value=u}),(c,u)=>{const h=$n("font-awesome-icon");return X(),le(Xe,null,[se(bT,{title:i.value!=null?i.value:"Dashboard"},null,8,["title"]),S("div",uF,[n.value==null?(X(),le("ul",hF,[(X(!0),le(Xe,null,Io(e.value,f=>(X(),on(W3,{key:f.id,plan:f,"select-plan":r,"total-volume":a(f),class:"plan-item"},null,8,["plan","total-volume"]))),128)),S("a",{onClick:et(s,["prevent"]),class:"plan-item"},[S("span",dF,[se(h,{icon:"fa-solid fa-plus",size:"xl"})])],8,fF)])):(X(),on(cF,{key:1,"plan-id":n.value,"total-workout-volume":l,"clear-selected-plan":o},null,8,["plan-id"]))])],64)}}},mF=jt(pF,[["__scopeId","data-v-b37d0d8e"]]),gF={__name:"Profile",setup(t){return(e,n)=>(X(),on(bT,{title:"Profile"}))}};const vF={id:"app"},yF={__name:"App",setup(t){const e=[{title:"Dashboard",icon:"fa-cube"},{title:"Profile",icon:"fa-user"}],n=Ie(0);function i(s){n.value=s}return(s,r)=>(X(),le(Xe,null,[se(P3,{pages:e,"selected-page-index":n.value,"select-page-index":i},null,8,["selected-page-index"]),S("section",vF,[n.value===0?(X(),on(mF,{key:0})):n.value===1?(X(),on(gF,{key:1})):Zt("",!0)])],64))}},_F=jt(yF,[["__scopeId","data-v-acba0c60"]]),wF={__name:"Home",setup(t){return(e,n)=>Q(Ht)().currentUser==null?(X(),on(f3,{key:0})):(X(),on(_F,{key:1}))}};function Xy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Ti(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xy(Object(n),!0).forEach(function(i){bF(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function bF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,i)=>(e.includes(i)||(n[i]=Q(t[i])),n),{})}function $c(t){return typeof t=="function"}function EF(t){return ms(t)||Es(t)}function ET(t,e,n){let i=t;const s=e.split(".");for(let r=0;r<s.length;r++){if(!i[s[r]])return n;i=i[s[r]]}return i}function Mh(t,e,n){return ie(()=>t.some(i=>ET(e,i,{[n]:!1})[n]))}function Zy(t,e,n){return ie(()=>t.reduce((i,s)=>{const r=ET(e,s,{[n]:!1})[n]||[];return i.concat(r)},[]))}function TT(t,e,n,i){return t.call(i,Q(e),Q(n),i)}function IT(t){return t.$valid!==void 0?!t.$valid:!t}function TF(t,e,n,i,s,r,o){let{$lazy:a,$rewardEarly:l}=s,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0;const d=Ie(!!i.value),p=Ie(0);n.value=!1;const v=Pn([e,i].concat(c,f),()=>{if(a&&!i.value||l&&!h.value&&!n.value)return;let y;try{y=TT(t,e,u,o)}catch(_){y=Promise.reject(_)}p.value++,n.value=!!p.value,d.value=!1,Promise.resolve(y).then(_=>{p.value--,n.value=!!p.value,r.value=_,d.value=IT(_)}).catch(_=>{p.value--,n.value=!!p.value,r.value=_,d.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:d,$unwatch:v}}function IF(t,e,n,i,s,r,o,a){let{$lazy:l,$rewardEarly:c}=i;const u=()=>({}),h=ie(()=>{if(l&&!n.value||c&&!a.value)return!1;let f=!0;try{const d=TT(t,e,o,r);s.value=d,f=IT(d)}catch(d){s.value=d}return f});return{$unwatch:u,$invalid:h}}function CF(t,e,n,i,s,r,o,a,l,c,u){const h=Ie(!1),f=t.$params||{},d=Ie(null);let p,v;t.$async?{$invalid:p,$unwatch:v}=TF(t.$validator,e,h,n,i,d,s,t.$watchTargets,l,c,u):{$invalid:p,$unwatch:v}=IF(t.$validator,e,n,i,d,s,l,c);const y=t.$message;return{$message:$c(y)?ie(()=>y(Jy({$pending:h,$invalid:p,$params:Jy(f),$model:e,$response:d,$validator:r,$propertyPath:a,$property:o}))):y||"",$params:f,$pending:h,$invalid:p,$response:d,$unwatch:v}}function SF(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=Q(t),n=Object.keys(e),i={},s={},r={};let o=null;return n.forEach(a=>{const l=e[a];switch(!0){case $c(l.$validator):i[a]=l;break;case $c(l):i[a]={$validator:l};break;case a==="$validationGroups":o=l;break;case a.startsWith("$"):r[a]=l;break;default:s[a]=l}}),{rules:i,nestedValidators:s,config:r,validationGroups:o}}const kF="__root";function AF(t,e,n,i,s,r,o,a,l){const c=Object.keys(t),u=i.get(s,t),h=Ie(!1),f=Ie(!1),d=Ie(0);if(u){if(!u.$partial)return u;u.$unwatch(),h.value=u.$dirty.value}const p={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return c.length?(c.forEach(v=>{p[v]=CF(t[v],e,p.$dirty,r,o,v,n,s,l,f,d)}),p.$externalResults=ie(()=>a.value?[].concat(a.value).map((v,y)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${y}`,$message:v,$params:{},$response:null,$pending:!1})):[]),p.$invalid=ie(()=>{const v=c.some(y=>Q(p[y].$invalid));return f.value=v,!!p.$externalResults.value.length||v}),p.$pending=ie(()=>c.some(v=>Q(p[v].$pending))),p.$error=ie(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=ie(()=>c.filter(v=>Q(p[v].$invalid)).map(v=>{const y=p[v];return di({$propertyPath:s,$property:n,$validator:v,$uid:`${s}-${v}`,$message:y.$message,$params:y.$params,$response:y.$response,$pending:y.$pending})}).concat(p.$externalResults.value)),p.$errors=ie(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>c.forEach(v=>{p[v].$unwatch()}),p.$commit=()=>{f.value=!0,d.value=Date.now()},i.set(s,t,p),p):(u&&i.set(s,t,p),p)}function RF(t,e,n,i,s,r,o){const a=Object.keys(t);return a.length?a.reduce((l,c)=>(l[c]=od({validations:t[c],state:e,key:c,parentKey:n,resultsCache:i,globalConfig:s,instance:r,externalResults:o}),l),{}):{}}function xF(t,e,n){const i=ie(()=>[e,n].filter(p=>p).reduce((p,v)=>p.concat(Object.values(Q(v))),[])),s=ie({get(){return t.$dirty.value||(i.value.length?i.value.every(p=>p.$dirty):!1)},set(p){t.$dirty.value=p}}),r=ie(()=>{const p=Q(t.$silentErrors)||[],v=i.value.filter(y=>(Q(y).$silentErrors||[]).length).reduce((y,_)=>y.concat(..._.$silentErrors),[]);return p.concat(v)}),o=ie(()=>{const p=Q(t.$errors)||[],v=i.value.filter(y=>(Q(y).$errors||[]).length).reduce((y,_)=>y.concat(..._.$errors),[]);return p.concat(v)}),a=ie(()=>i.value.some(p=>p.$invalid)||Q(t.$invalid)||!1),l=ie(()=>i.value.some(p=>Q(p.$pending))||Q(t.$pending)||!1),c=ie(()=>i.value.some(p=>p.$dirty)||i.value.some(p=>p.$anyDirty)||s.value),u=ie(()=>s.value?l.value||a.value:!1),h=()=>{t.$touch(),i.value.forEach(p=>{p.$touch()})},f=()=>{t.$commit(),i.value.forEach(p=>{p.$commit()})},d=()=>{t.$reset(),i.value.forEach(p=>{p.$reset()})};return i.value.length&&i.value.every(p=>p.$dirty)&&h(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:c,$error:u,$pending:l,$touch:h,$reset:d,$silentErrors:r,$commit:f}}function od(t){let{validations:e,state:n,key:i,parentKey:s,childResults:r,resultsCache:o,globalConfig:a={},instance:l,externalResults:c}=t;const u=s?`${s}.${i}`:i,{rules:h,nestedValidators:f,config:d,validationGroups:p}=SF(e),v=Ti(Ti({},a),d),y=i?ie(()=>{const be=Q(n);return be?Q(be[i]):void 0}):n,_=Ti({},Q(c)||{}),b=ie(()=>{const be=Q(c);return i?be?Q(be[i]):void 0:be}),x=AF(h,y,i,o,u,v,l,b,n),C=RF(f,y,u,o,v,l,b),K={};p&&Object.entries(p).forEach(be=>{let[rt,ze]=be;K[rt]={$invalid:Mh(ze,C,"$invalid"),$error:Mh(ze,C,"$error"),$pending:Mh(ze,C,"$pending"),$errors:Zy(ze,C,"$errors"),$silentErrors:Zy(ze,C,"$silentErrors")}});const{$dirty:re,$errors:ve,$invalid:Oe,$anyDirty:Ve,$error:yt,$pending:Xt,$touch:ln,$reset:Jt,$silentErrors:Zi,$commit:qn}=xF(x,C,r),Ke=i?ie({get:()=>Q(y),set:be=>{re.value=!0;const rt=Q(n),ze=Q(c);ze&&(ze[i]=_[i]),Ze(rt[i])?rt[i].value=be:rt[i]=be}}):null;i&&v.$autoDirty&&Pn(y,()=>{re.value||ln();const be=Q(c);be&&(be[i]=_[i])},{flush:"sync"});async function Ce(){return ln(),v.$rewardEarly&&(qn(),await Gl()),await Gl(),new Promise(be=>{if(!Xt.value)return be(!Oe.value);const rt=Pn(Xt,()=>{be(!Oe.value),rt()})})}function ye(be){return(r.value||{})[be]}function cn(){Ze(c)?c.value=_:Object.keys(_).length===0?Object.keys(c).forEach(be=>{delete c[be]}):Object.assign(c,_)}return di(Ti(Ti(Ti({},x),{},{$model:Ke,$dirty:re,$error:yt,$errors:ve,$invalid:Oe,$anyDirty:Ve,$pending:Xt,$touch:ln,$reset:Jt,$path:u||kF,$silentErrors:Zi,$validate:Ce,$commit:qn},r&&{$getResultsForChild:ye,$clearExternalResults:cn,$validationGroups:K}),C))}class NF{constructor(){this.storage=new Map}set(e,n,i){this.storage.set(e,{rules:n,result:i})}checkRulesValidity(e,n,i){const s=Object.keys(i),r=Object.keys(n);return r.length!==s.length||!r.every(a=>s.includes(a))?!1:r.every(a=>n[a].$params?Object.keys(n[a].$params).every(l=>Q(i[a].$params[l])===Q(n[a].$params[l])):!0)}get(e,n){const i=this.storage.get(e);if(!i)return;const{rules:s,result:r}=i,o=this.checkRulesValidity(e,n,s),a=r.$unwatch?r.$unwatch:()=>({});return o?r:{$dirty:r.$dirty,$partial:!0,$unwatch:a}}}const jl={COLLECT_ALL:!0,COLLECT_NONE:!1},e_=Symbol("vuelidate#injectChildResults"),t_=Symbol("vuelidate#removeChildResults");function OF(t){let{$scope:e,instance:n}=t;const i={},s=Ie([]),r=ie(()=>s.value.reduce((u,h)=>(u[h]=Q(i[h]),u),{}));function o(u,h){let{$registerAs:f,$scope:d,$stopPropagation:p}=h;p||e===jl.COLLECT_NONE||d===jl.COLLECT_NONE||e!==jl.COLLECT_ALL&&e!==d||(i[f]=u,s.value.push(f))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(u){s.value=s.value.filter(h=>h!==u),delete i[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const l=nn(e_,[]);cr(e_,n.__vuelidateInjectInstances);const c=nn(t_,[]);return cr(t_,n.__vuelidateRemoveInstances),{childResults:r,sendValidationResultsToParent:l,removeValidationResultsFromParent:c}}function CT(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?CT(e[n]):ie(()=>e[n])}})}let n_=0;function PF(t,e){var n;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(i=t,t=void 0,e=void 0);let{$registerAs:s,$scope:r=jl.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:l}=i;const c=l||((n=E0())===null||n===void 0?void 0:n.proxy),u=c?c.$options:{};s||(n_+=1,s=`_vuelidate_${n_}`);const h=Ie({}),f=new NF,{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:v}=c?OF({$scope:r,instance:c}):{childResults:Ie({})};if(!t&&u.validations){const y=u.validations;e=Ie({}),l0(()=>{e.value=c,Pn(()=>$c(y)?y.call(e.value,new CT(e.value)):y,_=>{h.value=od({validations:_,state:e,childResults:d,resultsCache:f,globalConfig:i,instance:c,externalResults:a||c.vuelidateExternalResults})},{immediate:!0})}),i=u.validationsConfig||i}else{const y=Ze(t)||EF(t)?t:di(t||{});Pn(y,_=>{h.value=od({validations:_,state:e,childResults:d,resultsCache:f,globalConfig:i,instance:c??{},externalResults:a})},{immediate:!0})}return c&&(p.forEach(y=>y(h,{$registerAs:s,$scope:r,$stopPropagation:o})),c0(()=>v.forEach(y=>y(s)))),ie(()=>Ti(Ti({},Q(h.value)),d.value))}const Im=t=>{if(t=Q(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},DF=t=>(t=Q(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function Hs(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i=>(i=Q(i),!Im(i)||e.every(s=>(s.lastIndex=0,s.test(i))))}Hs(/^[a-zA-Z]*$/);Hs(/^[a-zA-Z0-9]*$/);Hs(/^\d*(\.\d+)?$/);const MF=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var LF=Hs(MF),FF={$validator:LF,$message:"Value is not a valid email address",$params:{type:"email"}};function $F(t){return e=>!Im(e)||DF(e)>=Q(t)}function UF(t){return{$validator:$F(t),$message:e=>{let{$params:n}=e;return`This field should be at least ${n.min} characters long`},$params:{min:t,type:"minLength"}}}function VF(t){return typeof t=="string"&&(t=t.trim()),Im(t)}var Lh={$validator:VF,$message:"Value is required",$params:{type:"required"}};function BF(t){return e=>Q(e)===Q(t)}function jF(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:BF(t),$message:n=>`The value must be equal to the ${e} value`,$params:{equalTo:t,otherName:e,type:"sameAs"}}}const zF=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;Hs(zF);Hs(/(^[0-9]*$)|(^-[0-9]+$)/);Hs(/^[-]?\d*(\.\d+)?$/);const Ka=t=>(Ki("data-v-2232b8dc"),t=t(),Gi(),t),HF={class:"container"},WF=Ka(()=>S("div",null,[S("h3",{class:"subtitle"},"Try for free!"),S("h1",{class:"title"},"Create an account")],-1)),qF=["onSubmit"],KF={class:"inputfield"},GF=Ka(()=>S("label",{for:"email"},"Email",-1)),YF={key:0,class:"validation"},QF={key:0},XF={class:"inputfield"},JF=Ka(()=>S("label",{for:"password"},"Password",-1)),ZF=["type"],e6={class:"input-after"},t6=["onClick"],n6={key:0,class:"validation"},i6={key:0},s6={class:"inputfield"},r6=Ka(()=>S("label",{for:"confirmPassword"},"Repeat Password",-1)),o6=["type"],a6={class:"input-after"},l6=["onClick"],c6={key:0,class:"validation"},u6={key:0},h6={key:0,class:"error"},f6={class:"btn-wrapper"},d6=Ka(()=>S("button",{type:"submit"},"Sign Up",-1)),p6={__name:"SignUp",props:{onAuthToggleClick:{type:Function,default:()=>{}}},setup(t){const e=Ie(!1),n=Ie(!1),i=Ie(""),s=di({email:"",password:"",confirmPassword:""}),r=ie(()=>({email:{required:Lh,email:FF},password:{required:Lh,minLength:UF(6)},confirmPassword:{required:Lh,sameAsPassword:jF(s.password)}})),o=PF(r,s);async function a(){const c=await o.value.$validate();e.value=!0,c&&(Ht().currentUser&&ep(Ht()),QR(Ht(),s.email,s.password).then(()=>{pT(rd,{id:Ht().currentUser.uid,email:Ht().currentUser.email}),to.push("/")}).catch(u=>{switch(u.code){case"auth/email-already-in-use":i.value="This email is already in use";break;default:i.value="Something went wrong";break}}))}function l(){n.value=!n.value}return(c,u)=>{const h=$n("font-awesome-icon");return X(),le("div",HF,[WF,S("form",{id:"form",onSubmit:et(a,["prevent"])},[S("div",KF,[GF,ni(S("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":u[0]||(u[0]=f=>s.email=f),required:""},null,512),[[$i,s.email]]),e.value?(X(),le("div",YF,[Q(o).email.email.$invalid?(X(),le("span",QF,"Not a valid email address")):Zt("",!0)])):Zt("",!0)]),S("div",XF,[JF,ni(S("input",{id:"password",name:"password",type:n.value?"text":"password","onUpdate:modelValue":u[1]||(u[1]=f=>s.password=f),required:""},null,8,ZF),[[tf,s.password]]),S("div",e6,[S("a",{style:_r({transform:e.value&&Q(o).password.minLength.$invalid?"translate(0, -50%)":"translate(0, 0)"}),onClick:et(l,["prevent"])},[se(h,{icon:n.value?"fa-solid fa-eye":"fa-solid fa-eye-slash"},null,8,["icon"])],12,t6)]),e.value?(X(),le("div",n6,[Q(o).password.minLength.$invalid?(X(),le("span",i6,"At least 6 characters")):Zt("",!0)])):Zt("",!0)]),S("div",s6,[r6,ni(S("input",{id:"confirmPassword",name:"confirmPassword",type:n.value?"text":"password","onUpdate:modelValue":u[2]||(u[2]=f=>s.confirmPassword=f),required:""},null,8,o6),[[tf,s.confirmPassword]]),S("div",a6,[S("a",{style:_r({transform:e.value&&Q(o).confirmPassword.sameAsPassword.$invalid?"translate(0, -50%)":"translate(0, 0)"}),onClick:et(l,["prevent"])},[se(h,{icon:n.value?"fa-solid fa-eye":"fa-solid fa-eye-slash"},null,8,["icon"])],12,l6)]),e.value?(X(),le("div",c6,[Q(o).confirmPassword.sameAsPassword.$invalid?(X(),le("span",u6,"Not equal to password")):Zt("",!0)])):Zt("",!0)]),i.value?(X(),le("p",h6,Ut(i.value),1)):Zt("",!0),S("div",f6,[d6,S("p",null,[_a("Already have an account? "),S("a",{onClick:u[3]||(u[3]=et((...f)=>t.onAuthToggleClick&&t.onAuthToggleClick(...f),["prevent"]))},"Log In")])])],40,qF)])}}},m6=jt(p6,[["__scopeId","data-v-2232b8dc"]]);const ju=t=>(Ki("data-v-2c978d86"),t=t(),Gi(),t),g6={class:"container"},v6=ju(()=>S("div",null,[S("h3",{class:"subtitle"},"Welcome back!"),S("h1",{class:"title"},"Sign in to your account")],-1)),y6=["onSubmit"],_6={class:"inputfield"},w6=ju(()=>S("label",{for:"email"},"Email",-1)),b6={class:"inputfield"},E6=ju(()=>S("label",{for:"password"},"Password",-1)),T6=["type"],I6={class:"input-after"},C6=["onClick"],S6={key:0,class:"error"},k6={class:"btn-wrapper"},A6=ju(()=>S("button",{type:"submit"},"Sign In",-1)),R6={__name:"SignIn",props:{onAuthToggleClick:{type:Function,default:()=>{}},onForgotPasswordToggleClick:{type:Function,default:()=>{}}},setup(t){const e=Ie(!1),n=Ie(""),i=Ie(""),s=Ie("");function r(){Ht().currentUser&&ep(Ht()),XR(Ht(),n.value,i.value).then(()=>{to.push("/")}).catch(a=>{switch(a.code){case"auth/invalid-email":s.value="Invalid email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})}function o(){e.value=!e.value}return(a,l)=>{const c=$n("font-awesome-icon");return X(),le("div",g6,[v6,S("form",{id:"form",onSubmit:et(r,["prevent"])},[S("div",_6,[w6,ni(S("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),required:""},null,512),[[$i,n.value]])]),S("div",b6,[E6,ni(S("input",{id:"password",name:"password",type:e.value?"text":"password","onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),required:""},null,8,T6),[[tf,i.value]]),S("div",I6,[S("a",{onClick:et(o,["prevent"])},[se(c,{icon:e.value?"fa-solid fa-eye":"fa-solid fa-eye-slash"},null,8,["icon"])],8,C6)])]),S("a",{class:"toggle",onClick:l[2]||(l[2]=et((...u)=>t.onForgotPasswordToggleClick&&t.onForgotPasswordToggleClick(...u),["prevent"]))},"Forgot Password"),s.value?(X(),le("p",S6,Ut(s.value),1)):Zt("",!0),S("div",k6,[A6,S("p",null,[_a("Not a member? "),S("a",{onClick:l[3]||(l[3]=et((...u)=>t.onAuthToggleClick&&t.onAuthToggleClick(...u),["prevent"]))},"Create an account")])])],40,y6)])}}},x6=jt(R6,[["__scopeId","data-v-2c978d86"]]);const Cm=t=>(Ki("data-v-a7bbe367"),t=t(),Gi(),t),N6={class:"container"},O6=Cm(()=>S("div",null,[S("h3",{class:"subtitle"},"Reset password!"),S("h1",{class:"title"},"Password recovery")],-1)),P6=["onSubmit"],D6={class:"inputfield"},M6=Cm(()=>S("label",{for:"email"},"Email",-1)),L6={key:0,class:"error"},F6={key:1,class:"success"},$6={class:"btn-wrapper"},U6=Cm(()=>S("button",{type:"submit"},"Reset Password",-1)),V6={__name:"ForgotPassword",props:{onForgotPasswordToggleClick:{type:Function,default:()=>{}}},setup(t){const e=Ie(""),n=Ie(""),i=Ie("");function s(){YR(Ht(),e.value).then(()=>{n.value="Password recovery email was sent"}).catch(r=>{switch(r.code){case"auth/invalid-email":i.value="Invalid email";break;case"auth/user-not-found":i.value="No account with that email was found";break;default:i.value="Something went wrong";break}})}return(r,o)=>(X(),le("div",N6,[O6,S("form",{id:"form",onSubmit:et(s,["prevent"])},[S("div",D6,[M6,ni(S("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),required:""},null,512),[[$i,e.value]])]),i.value?(X(),le("p",L6,Ut(i.value),1)):Zt("",!0),n.value?(X(),le("p",F6,Ut(n.value),1)):Zt("",!0),S("div",$6,[U6,S("p",null,[_a("Password recovered? "),S("a",{onClick:o[1]||(o[1]=et((...a)=>t.onForgotPasswordToggleClick&&t.onForgotPasswordToggleClick(...a),["prevent"]))},"Sign In")])])],40,P6)]))}},B6=jt(V6,[["__scopeId","data-v-a7bbe367"]]),j6={id:"auth"},z6={key:0},H6={key:1},W6={__name:"Auth",setup(t){const e=Ie(!1),n=Ie(!1);function i(){e.value=!e.value}function s(){n.value=!n.value}return(r,o)=>(X(),le(Xe,null,[se(_T),S("section",j6,[n.value?(X(),le("div",z6,[se(B6,{onForgotPasswordToggleClick:s})])):(X(),le("div",H6,[e.value?(X(),on(m6,{key:0,onAuthToggleClick:i})):(X(),on(x6,{key:1,onAuthToggleClick:i,onForgotPasswordToggleClick:s}))]))])],64))}};const q6={},K6=t=>(Ki("data-v-4b9b2079"),t=t(),Gi(),t),G6={id:"error"},Y6=K6(()=>S("div",null,[S("h1",null,[_a("Error "),S("span",null,"404")]),S("p",null,"Page does not exist.")],-1)),Q6=[Y6];function X6(t,e){return X(),le("section",G6,Q6)}const J6=jt(q6,[["render",X6],["__scopeId","data-v-4b9b2079"]]),to=kk({history:HS("/training-lab/"),routes:[{path:"/",name:"home",component:wF},{path:"/auth",name:"auth",component:W6,meta:{requiresNoUser:!0}},{path:"/:patchMatch(.*)*",component:J6}]});to.beforeEach(async(t,e,n)=>{const i=await Vx();t.matched.some(r=>r.meta.requiresNoUser)&&i?n("/"):n()});function i_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i_(Object(n),!0).forEach(function(i){st(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Uc(t){"@babel/helpers - typeof";return Uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uc(t)}function Z6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s_(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e$(t,e,n){return e&&s_(t.prototype,e),n&&s_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Sm(t,e){return n$(t)||s$(t,e)||ST(t,e)||o$()}function Ga(t){return t$(t)||i$(t)||ST(t)||r$()}function t$(t){if(Array.isArray(t))return ad(t)}function n$(t){if(Array.isArray(t))return t}function i$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function s$(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],s=!0,r=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));s=!0);}catch(l){r=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw a}}return i}}function ST(t,e){if(t){if(typeof t=="string")return ad(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ad(t,e)}}function ad(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r_=function(){},km={},kT={},AT=null,RT={mark:r_,measure:r_};try{typeof window<"u"&&(km=window),typeof document<"u"&&(kT=document),typeof MutationObserver<"u"&&(AT=MutationObserver),typeof performance<"u"&&(RT=performance)}catch{}var a$=km.navigator||{},o_=a$.userAgent,a_=o_===void 0?"":o_,Hi=km,Fe=kT,l_=AT,bl=RT;Hi.document;var gi=!!Fe.documentElement&&!!Fe.head&&typeof Fe.addEventListener=="function"&&typeof Fe.createElement=="function",xT=~a_.indexOf("MSIE")||~a_.indexOf("Trident/"),El,Tl,Il,Cl,Sl,ui="___FONT_AWESOME___",ld=16,NT="fa",OT="svg-inline--fa",Ds="data-fa-i2svg",cd="data-fa-pseudo-element",l$="data-fa-pseudo-element-pending",Am="data-prefix",Rm="data-icon",c_="fontawesome-i2svg",c$="async",u$=["HTML","HEAD","STYLE","SCRIPT"],PT=function(){try{return!0}catch{return!1}}(),Le="classic",We="sharp",xm=[Le,We];function Ya(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[Le]}})}var da=Ya((El={},st(El,Le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),st(El,We,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),El)),pa=Ya((Tl={},st(Tl,Le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),st(Tl,We,{solid:"fass",regular:"fasr",light:"fasl"}),Tl)),ma=Ya((Il={},st(Il,Le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),st(Il,We,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Il)),h$=Ya((Cl={},st(Cl,Le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),st(Cl,We,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Cl)),f$=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,DT="fa-layers-text",d$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,p$=Ya((Sl={},st(Sl,Le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),st(Sl,We,{900:"fass",400:"fasr",300:"fasl"}),Sl)),MT=[1,2,3,4,5,6,7,8,9,10],m$=MT.concat([11,12,13,14,15,16,17,18,19,20]),g$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=new Set;Object.keys(pa[Le]).map(ga.add.bind(ga));Object.keys(pa[We]).map(ga.add.bind(ga));var v$=[].concat(xm,Ga(ga),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fs.GROUP,fs.SWAP_OPACITY,fs.PRIMARY,fs.SECONDARY]).concat(MT.map(function(t){return"".concat(t,"x")})).concat(m$.map(function(t){return"w-".concat(t)})),$o=Hi.FontAwesomeConfig||{};function y$(t){var e=Fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _$(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Fe&&typeof Fe.querySelector=="function"){var w$=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];w$.forEach(function(t){var e=Sm(t,2),n=e[0],i=e[1],s=_$(y$(n));s!=null&&($o[i]=s)})}var LT={styleDefault:"solid",familyDefault:"classic",cssPrefix:NT,replacementClass:OT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$o.familyPrefix&&($o.cssPrefix=$o.familyPrefix);var Fr=$($({},LT),$o);Fr.autoReplaceSvg||(Fr.observeMutations=!1);var B={};Object.keys(LT).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){Fr[t]=n,Uo.forEach(function(i){return i(B)})},get:function(){return Fr[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){Fr.cssPrefix=e,Uo.forEach(function(n){return n(B)})},get:function(){return Fr.cssPrefix}});Hi.FontAwesomeConfig=B;var Uo=[];function b$(t){return Uo.push(t),function(){Uo.splice(Uo.indexOf(t),1)}}var wi=ld,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E$(t){if(!(!t||!gi)){var e=Fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Fe.head.childNodes,i=null,s=n.length-1;s>-1;s--){var r=n[s],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=r)}return Fe.head.insertBefore(e,i),t}}var T$="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function va(){for(var t=12,e="";t-- >0;)e+=T$[Math.random()*62|0];return e}function no(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nm(t){return t.classList?no(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function FT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I$(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(FT(t[n]),'" ')},"").trim()}function zu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Om(t){return t.size!==On.size||t.x!==On.x||t.y!==On.y||t.rotate!==On.rotate||t.flipX||t.flipY}function C$(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:l,path:c}}function S$(t){var e=t.transform,n=t.width,i=n===void 0?ld:n,s=t.height,r=s===void 0?ld:s,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&xT?l+="translate(".concat(e.x/wi-i/2,"em, ").concat(e.y/wi-r/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/wi,"em), calc(-50% + ").concat(e.y/wi,"em)) "):l+="translate(".concat(e.x/wi,"em, ").concat(e.y/wi,"em) "),l+="scale(".concat(e.size/wi*(e.flipX?-1:1),", ").concat(e.size/wi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var k$=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $T(){var t=NT,e=OT,n=B.cssPrefix,i=B.replacementClass,s=k$;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return s}var u_=!1;function Fh(){B.autoAddCss&&!u_&&(E$($T()),u_=!0)}var A$={mixout:function(){return{dom:{css:$T,insertCss:Fh}}},hooks:function(){return{beforeDOMElementCreation:function(){Fh()},beforeI2svg:function(){Fh()}}}},hi=Hi||{};hi[ui]||(hi[ui]={});hi[ui].styles||(hi[ui].styles={});hi[ui].hooks||(hi[ui].hooks={});hi[ui].shims||(hi[ui].shims=[]);var vn=hi[ui],UT=[],R$=function t(){Fe.removeEventListener("DOMContentLoaded",t),Vc=1,UT.map(function(e){return e()})},Vc=!1;gi&&(Vc=(Fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fe.readyState),Vc||Fe.addEventListener("DOMContentLoaded",R$));function x$(t){gi&&(Vc?setTimeout(t,0):UT.push(t))}function Qa(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?FT(t):"<".concat(e," ").concat(I$(i),">").concat(r.map(Qa).join(""),"</").concat(e,">")}function h_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var N$=function(e,n){return function(i,s,r,o){return e.call(n,i,s,r,o)}},$h=function(e,n,i,s){var r=Object.keys(e),o=r.length,a=s!==void 0?N$(n,s):n,l,c,u;for(i===void 0?(l=1,u=e[r[0]]):(l=0,u=i);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function O$(t){for(var e=[],n=0,i=t.length;n<i;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function ud(t){var e=O$(t);return e.length===1?e[0].toString(16):null}function P$(t,e){var n=t.length,i=t.charCodeAt(e),s;return i>=55296&&i<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function f_(t){return Object.keys(t).reduce(function(e,n){var i=t[n],s=!!i.icon;return s?e[i.iconName]=i.icon:e[n]=i,e},{})}function hd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,s=i===void 0?!1:i,r=f_(e);typeof vn.hooks.addPack=="function"&&!s?vn.hooks.addPack(t,f_(e)):vn.styles[t]=$($({},vn.styles[t]||{}),r),t==="fas"&&hd("fa",e)}var kl,Al,Rl,sr=vn.styles,D$=vn.shims,M$=(kl={},st(kl,Le,Object.values(ma[Le])),st(kl,We,Object.values(ma[We])),kl),Pm=null,VT={},BT={},jT={},zT={},HT={},L$=(Al={},st(Al,Le,Object.keys(da[Le])),st(Al,We,Object.keys(da[We])),Al);function F$(t){return~v$.indexOf(t)}function $$(t,e){var n=e.split("-"),i=n[0],s=n.slice(1).join("-");return i===t&&s!==""&&!F$(s)?s:null}var WT=function(){var e=function(r){return $h(sr,function(o,a,l){return o[l]=$h(a,r,{}),o},{})};VT=e(function(s,r,o){if(r[3]&&(s[r[3]]=o),r[2]){var a=r[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),BT=e(function(s,r,o){if(s[o]=o,r[2]){var a=r[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),HT=e(function(s,r,o){var a=r[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in sr||B.autoFetchSvg,i=$h(D$,function(s,r){var o=r[0],a=r[1],l=r[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});jT=i.names,zT=i.unicodes,Pm=Hu(B.styleDefault,{family:B.familyDefault})};b$(function(t){Pm=Hu(t.styleDefault,{family:B.familyDefault})});WT();function Dm(t,e){return(VT[t]||{})[e]}function U$(t,e){return(BT[t]||{})[e]}function ds(t,e){return(HT[t]||{})[e]}function qT(t){return jT[t]||{prefix:null,iconName:null}}function V$(t){var e=zT[t],n=Dm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wi(){return Pm}var Mm=function(){return{prefix:null,iconName:null,rest:[]}};function Hu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?Le:n,s=da[i][t],r=pa[i][t]||pa[i][s],o=t in vn.styles?t:null;return r||o||null}var d_=(Rl={},st(Rl,Le,Object.keys(ma[Le])),st(Rl,We,Object.keys(ma[We])),Rl);function Wu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,s=i===void 0?!1:i,r=(e={},st(e,Le,"".concat(B.cssPrefix,"-").concat(Le)),st(e,We,"".concat(B.cssPrefix,"-").concat(We)),e),o=null,a=Le;(t.includes(r[Le])||t.some(function(c){return d_[Le].includes(c)}))&&(a=Le),(t.includes(r[We])||t.some(function(c){return d_[We].includes(c)}))&&(a=We);var l=t.reduce(function(c,u){var h=$$(B.cssPrefix,u);if(sr[u]?(u=M$[a].includes(u)?h$[a][u]:u,o=u,c.prefix=u):L$[a].indexOf(u)>-1?(o=u,c.prefix=Hu(u,{family:a})):h?c.iconName=h:u!==B.replacementClass&&u!==r[Le]&&u!==r[We]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?qT(c.iconName):{},d=ds(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||d||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!sr.far&&sr.fas&&!B.autoFetchSvg&&(c.prefix="fas")}return c},Mm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===We&&(sr.fass||B.autoFetchSvg)&&(l.prefix="fass",l.iconName=ds(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Wi()||"fas"),l}var B$=function(){function t(){Z6(this,t),this.definitions={}}return e$(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),o[a]),hd(a,o[a]);var l=ma[Le][a];l&&hd(l,o[a]),WT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var s=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(s).map(function(r){var o=s[r],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),p_=[],rr={},yr={},j$=Object.keys(yr);function z$(t,e){var n=e.mixoutsTo;return p_=t,rr={},Object.keys(yr).forEach(function(i){j$.indexOf(i)===-1&&delete yr[i]}),p_.forEach(function(i){var s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Uc(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(o){rr[o]||(rr[o]=[]),rr[o].push(r[o])})}i.provides&&i.provides(yr)}),n}function fd(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var r=rr[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Ms(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var s=rr[t]||[];s.forEach(function(r){r.apply(null,n)})}function fi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return yr[t]?yr[t].apply(null,e):void 0}function dd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wi();if(e)return e=ds(n,e)||e,h_(KT.definitions,n,e)||h_(vn.styles,n,e)}var KT=new B$,H$=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,Ms("noAuto")},W$={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gi?(Ms("beforeI2svg",e),fi("pseudoElements2svg",e),fi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,x$(function(){K$({autoReplaceSvgRoot:n}),Ms("watch",e)})}},q$={icon:function(e){if(e===null)return null;if(Uc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ds(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Hu(e[0]);return{prefix:i,iconName:ds(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(f$))){var s=Wu(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Wi(),iconName:ds(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=Wi();return{prefix:r,iconName:ds(r,e)||e}}}},Qt={noAuto:H$,config:B,dom:W$,parse:q$,library:KT,findIconDefinition:dd,toHtml:Qa},K$=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Fe:n;(Object.keys(vn.styles).length>0||B.autoFetchSvg)&&gi&&B.autoReplaceSvg&&Qt.dom.i2svg({node:i})};function qu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Qa(i)})}}),Object.defineProperty(t,"node",{get:function(){if(gi){var i=Fe.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function G$(t){var e=t.children,n=t.main,i=t.mask,s=t.attributes,r=t.styles,o=t.transform;if(Om(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=zu($($({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Y$(t){var e=t.prefix,n=t.iconName,i=t.children,s=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},s),{},{id:o}),children:i}]}]}function Lm(t){var e=t.icons,n=e.main,i=e.mask,s=t.prefix,r=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,p=i.found?i:n,v=p.width,y=p.height,_=s==="fak",b=[B.replacementClass,r?"".concat(B.cssPrefix,"-").concat(r):""].filter(function(Ve){return h.classes.indexOf(Ve)===-1}).filter(function(Ve){return Ve!==""||!!Ve}).concat(h.classes).join(" "),x={children:[],attributes:$($({},h.attributes),{},{"data-prefix":s,"data-icon":r,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(y)})},C=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/y*16*.0625,"em")}:{};d&&(x.attributes[Ds]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||va())},children:[l]}),delete x.attributes.title);var K=$($({},x),{},{prefix:s,iconName:r,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:$($({},C),h.styles)}),re=i.found&&n.found?fi("generateAbstractMask",K)||{children:[],attributes:{}}:fi("generateAbstractIcon",K)||{children:[],attributes:{}},ve=re.children,Oe=re.attributes;return K.children=ve,K.attributes=Oe,a?Y$(K):G$(K)}function m_(t){var e=t.content,n=t.width,i=t.height,s=t.transform,r=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=$($($({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(c[Ds]="");var u=$({},o.styles);Om(s)&&(u.transform=S$({transform:s,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var h=zu(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function Q$(t){var e=t.content,n=t.title,i=t.extra,s=$($($({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=zu(i.styles);r.length>0&&(s.style=r);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Uh=vn.styles;function pd(t){var e=t[0],n=t[1],i=t.slice(4),s=Sm(i,1),r=s[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(fs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(fs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(fs.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var X$={found:!1,width:512,height:512};function J$(t,e){!PT&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function md(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=Wi()),new Promise(function(i,s){if(fi("missingIconAbstract"),n==="fa"){var r=qT(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Uh[e]&&Uh[e][t]){var o=Uh[e][t];return i(pd(o))}J$(t,e),i($($({},X$),{},{icon:B.showMissingIcons&&t?fi("missingIconAbstract")||{}:{}}))})}var g_=function(){},gd=B.measurePerformance&&bl&&bl.mark&&bl.measure?bl:{mark:g_,measure:g_},To='FA "6.4.0"',Z$=function(e){return gd.mark("".concat(To," ").concat(e," begins")),function(){return GT(e)}},GT=function(e){gd.mark("".concat(To," ").concat(e," ends")),gd.measure("".concat(To," ").concat(e),"".concat(To," ").concat(e," begins"),"".concat(To," ").concat(e," ends"))},Fm={begin:Z$,end:GT},zl=function(){};function v_(t){var e=t.getAttribute?t.getAttribute(Ds):null;return typeof e=="string"}function e9(t){var e=t.getAttribute?t.getAttribute(Am):null,n=t.getAttribute?t.getAttribute(Rm):null;return e&&n}function t9(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function n9(){if(B.autoReplaceSvg===!0)return Hl.replace;var t=Hl[B.autoReplaceSvg];return t||Hl.replace}function i9(t){return Fe.createElementNS("http://www.w3.org/2000/svg",t)}function s9(t){return Fe.createElement(t)}function YT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?i9:s9:n;if(typeof t=="string")return Fe.createTextNode(t);var s=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){s.appendChild(YT(o,{ceFn:i}))}),s}function r9(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Hl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(YT(s),n)}),n.getAttribute(Ds)===null&&B.keepOriginalSource){var i=Fe.createComment(r9(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Nm(n).indexOf(B.replacementClass))return Hl.replace(e);var s=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(a,l){return l===B.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=i.map(function(a){return Qa(a)}).join(`
`);n.setAttribute(Ds,""),n.innerHTML=o}};function y_(t){t()}function QT(t,e){var n=typeof e=="function"?e:zl;if(t.length===0)n();else{var i=y_;B.mutateApproach===c$&&(i=Hi.requestAnimationFrame||y_),i(function(){var s=n9(),r=Fm.begin("mutate");t.map(s),r(),n()})}}var $m=!1;function XT(){$m=!0}function vd(){$m=!1}var Bc=null;function __(t){if(l_&&B.observeMutations){var e=t.treeCallback,n=e===void 0?zl:e,i=t.nodeCallback,s=i===void 0?zl:i,r=t.pseudoElementsCallback,o=r===void 0?zl:r,a=t.observeMutationsRoot,l=a===void 0?Fe:a;Bc=new l_(function(c){if(!$m){var u=Wi();no(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!v_(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&v_(h.target)&&~g$.indexOf(h.attributeName))if(h.attributeName==="class"&&e9(h.target)){var f=Wu(Nm(h.target)),d=f.prefix,p=f.iconName;h.target.setAttribute(Am,d||u),p&&h.target.setAttribute(Rm,p)}else t9(h.target)&&s(h.target)})}}),gi&&Bc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function o9(){Bc&&Bc.disconnect()}function a9(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,s){var r=s.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function l9(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",s=Wu(Nm(t));return s.prefix||(s.prefix=Wi()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=U$(s.prefix,t.innerText)||Dm(s.prefix,ud(t.innerText))),!s.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function c9(t){var e=no(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(i||va()):(e["aria-hidden"]="true",e.focusable="false")),e}function u9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function w_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=l9(t),i=n.iconName,s=n.prefix,r=n.rest,o=c9(t),a=fd("parseNodeAttributes",{},t),l=e.styleParser?a9(t):[];return $({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},a)}var h9=vn.styles;function JT(t){var e=B.autoReplaceSvg==="nest"?w_(t,{styleParser:!1}):w_(t);return~e.extra.classes.indexOf(DT)?fi("generateLayersText",t,e):fi("generateSvgReplacementMutation",t,e)}var qi=new Set;xm.map(function(t){qi.add("fa-".concat(t))});Object.keys(da[Le]).map(qi.add.bind(qi));Object.keys(da[We]).map(qi.add.bind(qi));qi=Ga(qi);function b_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gi)return Promise.resolve();var n=Fe.documentElement.classList,i=function(h){return n.add("".concat(c_,"-").concat(h))},s=function(h){return n.remove("".concat(c_,"-").concat(h))},r=B.autoFetchSvg?qi:xm.map(function(u){return"fa-".concat(u)}).concat(Object.keys(h9));r.includes("fa")||r.push("fa");var o=[".".concat(DT,":not([").concat(Ds,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Ds,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=no(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),s("complete");else return Promise.resolve();var l=Fm.begin("onTree"),c=a.reduce(function(u,h){try{var f=JT(h);f&&u.push(f)}catch(d){PT||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){QT(f,function(){i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),h(f)})})}function f9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;JT(t).then(function(n){n&&QT([n],e)})}function d9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:dd(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:dd(s||{})),t(i,$($({},n),{},{mask:s}))}}var p9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,s=i===void 0?On:i,r=n.symbol,o=r===void 0?!1:r,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,d=n.titleId,p=d===void 0?null:d,v=n.classes,y=v===void 0?[]:v,_=n.attributes,b=_===void 0?{}:_,x=n.styles,C=x===void 0?{}:x;if(e){var K=e.prefix,re=e.iconName,ve=e.icon;return qu($({type:"icon"},e),function(){return Ms("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?b["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(p||va()):(b["aria-hidden"]="true",b.focusable="false")),Lm({icons:{main:pd(ve),mask:l?pd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:re,transform:$($({},On),s),symbol:o,title:f,maskId:u,titleId:p,extra:{attributes:b,styles:C,classes:y}})})}},m9={mixout:function(){return{icon:d9(p9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=b_,n.nodeCallback=f9,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,s=i===void 0?Fe:i,r=n.callback,o=r===void 0?function(){}:r;return b_(s,o)},e.generateSvgReplacementMutation=function(n,i){var s=i.iconName,r=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,h=i.maskId,f=i.extra;return new Promise(function(d,p){Promise.all([md(s,a),u.iconName?md(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=Sm(v,2),_=y[0],b=y[1];d([n,Lm({icons:{main:_,mask:b},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:r,titleId:o,extra:f,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.transform,a=n.styles,l=zu(a);l.length>0&&(s.style=l);var c;return Om(o)&&(c=fi("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),i.push(c||r.icon),{children:i,attributes:s}}}},g9={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.classes,r=s===void 0?[]:s;return qu({type:"layer"},function(){Ms("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Ga(r)).join(" ")},children:o}]})}}}},v9={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.title,r=s===void 0?null:s,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,h=u===void 0?{}:u;return qu({type:"counter",content:n},function(){return Ms("beforeDOMElementCreation",{content:n,params:i}),Q$({content:n.toString(),title:r,extra:{attributes:c,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Ga(a))}})})}}}},y9={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,r=s===void 0?On:s,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,h=u===void 0?{}:u,f=i.styles,d=f===void 0?{}:f;return qu({type:"text",content:n},function(){return Ms("beforeDOMElementCreation",{content:n,params:i}),m_({content:n,transform:$($({},On),r),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Ga(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var s=i.title,r=i.transform,o=i.extra,a=null,l=null;if(xT){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return B.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,m_({content:n.innerHTML,width:a,height:l,transform:r,title:s,extra:o,watchable:!0})])}}},_9=new RegExp('"',"ug"),E_=[1105920,1112319];function w9(t){var e=t.replace(_9,""),n=P$(e,0),i=n>=E_[0]&&n<=E_[1],s=e.length===2?e[0]===e[1]:!1;return{value:ud(s?e[0]:e),isSecondary:i||s}}function T_(t,e){var n="".concat(l$).concat(e.replace(":","-"));return new Promise(function(i,s){if(t.getAttribute(n)!==null)return i();var r=no(t.children),o=r.filter(function(ve){return ve.getAttribute(cd)===e})[0],a=Hi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(d$),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?We:Le,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pa[f][l[2].toLowerCase()]:p$[f][c],p=w9(h),v=p.value,y=p.isSecondary,_=l[0].startsWith("FontAwesome"),b=Dm(d,v),x=b;if(_){var C=V$(v);C.iconName&&C.prefix&&(b=C.iconName,d=C.prefix)}if(b&&!y&&(!o||o.getAttribute(Am)!==d||o.getAttribute(Rm)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var K=u9(),re=K.extra;re.attributes[cd]=e,md(b,d).then(function(ve){var Oe=Lm($($({},K),{},{icons:{main:ve,mask:Mm()},prefix:d,iconName:x,extra:re,watchable:!0})),Ve=Fe.createElement("svg");e==="::before"?t.insertBefore(Ve,t.firstChild):t.appendChild(Ve),Ve.outerHTML=Oe.map(function(yt){return Qa(yt)}).join(`
`),t.removeAttribute(n),i()}).catch(s)}else i()}else i()})}function b9(t){return Promise.all([T_(t,"::before"),T_(t,"::after")])}function E9(t){return t.parentNode!==document.head&&!~u$.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function I_(t){if(gi)return new Promise(function(e,n){var i=no(t.querySelectorAll("*")).filter(E9).map(b9),s=Fm.begin("searchPseudoElements");XT(),Promise.all(i).then(function(){s(),vd(),e()}).catch(function(){s(),vd(),n()})})}var T9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=I_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,s=i===void 0?Fe:i;B.searchPseudoElements&&I_(s)}}},C_=!1,I9={mixout:function(){return{dom:{unwatch:function(){XT(),C_=!0}}}},hooks:function(){return{bootstrap:function(){__(fd("mutationObserverCallbacks",{}))},noAuto:function(){o9()},watch:function(n){var i=n.observeMutationsRoot;C_?vd():__(fd("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},S_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,s){var r=s.toLowerCase().split("-"),o=r[0],a=r.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},C9={mixout:function(){return{parse:{transform:function(n){return S_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-transform");return s&&(n.transform=S_(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,s=n.transform,r=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:$({},d.outer),children:[{tag:"g",attributes:$({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:$($({},i.icon.attributes),d.path)}]}]}}}},Vh={x:0,y:0,width:"100%",height:"100%"};function k_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function S9(t){return t.tag==="g"?t.children:[t]}var k9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-mask"),r=s?Wu(s.split(" ").map(function(o){return o.trim()})):Mm();return r.prefix||(r.prefix=Wi()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,s=n.attributes,r=n.main,o=n.mask,a=n.maskId,l=n.transform,c=r.width,u=r.icon,h=o.width,f=o.icon,d=C$({transform:l,containerWidth:h,iconWidth:c}),p={tag:"rect",attributes:$($({},Vh),{},{fill:"white"})},v=u.children?{children:u.children.map(k_)}:{},y={tag:"g",attributes:$({},d.inner),children:[k_($({tag:u.tag,attributes:$($({},u.attributes),d.path)},v))]},_={tag:"g",attributes:$({},d.outer),children:[y]},b="mask-".concat(a||va()),x="clip-".concat(a||va()),C={tag:"mask",attributes:$($({},Vh),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,_]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:S9(f)},C]};return i.push(K,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(b,")")},Vh)}),{children:i,attributes:s}}}},A9={provides:function(e){var n=!1;Hi.matchMedia&&(n=Hi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:$($({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:$($({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:$($({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},R9={hooks:function(){return{parseNodeAttributes:function(n,i){var s=i.getAttribute("data-fa-symbol"),r=s===null?!1:s===""?!0:s;return n.symbol=r,n}}}},x9=[A$,m9,g9,v9,y9,T9,I9,C9,k9,A9,R9];z$(x9,{mixoutsTo:Qt});Qt.noAuto;Qt.config;var N9=Qt.library;Qt.dom;var yd=Qt.parse;Qt.findIconDefinition;Qt.toHtml;var O9=Qt.icon;Qt.layer;Qt.text;Qt.counter;function A_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Qn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A_(Object(n),!0).forEach(function(i){Lt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function jc(t){"@babel/helpers - typeof";return jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jc(t)}function Lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P9(t,e){if(t==null)return{};var n={},i=Object.keys(t),s,r;for(r=0;r<i.length;r++)s=i[r],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function D9(t,e){if(t==null)return{};var n=P9(t,e),i,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var M9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ZT={exports:{}};(function(t){(function(e){var n=function(_,b,x){if(!c(b)||h(b)||f(b)||d(b)||l(b))return b;var C,K=0,re=0;if(u(b))for(C=[],re=b.length;K<re;K++)C.push(n(_,b[K],x));else{C={};for(var ve in b)Object.prototype.hasOwnProperty.call(b,ve)&&(C[_(ve,x)]=n(_,b[ve],x))}return C},i=function(_,b){b=b||{};var x=b.separator||"_",C=b.split||/(?=[A-Z])/;return _.split(C).join(x)},s=function(_){return p(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(b,x){return x?x.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},r=function(_){var b=s(_);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(_,b){return i(_,b).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},p=function(_){return _=_-0,_===_},v=function(_,b){var x=b&&"process"in b?b.process:b;return typeof x!="function"?_:function(C,K){return x(C,_,K)}},y={camelize:s,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(_,b){return n(v(s,b),_)},decamelizeKeys:function(_,b){return n(v(o,b),_,b)},pascalizeKeys:function(_,b){return n(v(r,b),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=y:e.humps=y})(M9)})(ZT);var L9=ZT.exports,F9=["class","style"];function $9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),s=L9.camelize(n.slice(0,i)),r=n.slice(i+1).trim();return e[s]=r,e},{})}function U9(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function eI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return eI(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=U9(u);break;case"style":l.style=$9(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=D9(n,F9);return Ud(t.tag,Qn(Qn(Qn({},e),{},{class:s.class,style:Qn(Qn({},s.style),o)},s.attrs),a),i)}var tI=!1;try{tI=!0}catch{}function V9(){if(!tI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Bh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lt({},t,e):{}}function B9(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Lt(e,"fa-".concat(t.size),t.size!==null),Lt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Lt(e,"fa-pull-".concat(t.pull),t.pull!==null),Lt(e,"fa-swap-opacity",t.swapOpacity),Lt(e,"fa-bounce",t.bounce),Lt(e,"fa-shake",t.shake),Lt(e,"fa-beat",t.beat),Lt(e,"fa-fade",t.fade),Lt(e,"fa-beat-fade",t.beatFade),Lt(e,"fa-flash",t.flash),Lt(e,"fa-spin-pulse",t.spinPulse),Lt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function R_(t){if(t&&jc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(yd.icon)return yd.icon(t);if(t===null)return null;if(jc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var j9=Dd({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,s=ie(function(){return R_(e.icon)}),r=ie(function(){return Bh("classes",B9(e))}),o=ie(function(){return Bh("transform",typeof e.transform=="string"?yd.transform(e.transform):e.transform)}),a=ie(function(){return Bh("mask",R_(e.mask))}),l=ie(function(){return O9(s.value,Qn(Qn(Qn(Qn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Pn(l,function(u){if(!u)return V9("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=ie(function(){return l.value?eI(l.value.abstract[0],{},i):null});return function(){return c.value}}}),z9={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},H9={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},W9=H9,q9={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},K9={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},G9={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Y9={prefix:"fas",iconName:"money-bill-wave",icon:[576,512,[],"f53a","M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"]},Q9={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"]},X9={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},J9={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Z9=J9,eU={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"]},tU={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},nU={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},iU={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},sU={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},rU={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},oU={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},aU={prefix:"fas",iconName:"calendar-day",icon:[448,512,[],"f783","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"]};N9.add(G9,iU,eU,oU,Y9,W9,X9,q9,Q9,aU,nU,K9,sU,tU,rU,Z9,z9);const Ku=CS(Rk);Ku.use(to);Ku.use(t3,{firebaseApp:wT,modules:[e3()]});Ku.component("font-awesome-icon",j9);Ku.mount("#app");
