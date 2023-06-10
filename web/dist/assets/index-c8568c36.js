(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fh(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ct={},No=[],br=()=>{},Ix=()=>!1,Cx=/^on[^a-z]/,hc=t=>Cx.test(t),vg=t=>t.startsWith("onUpdate:"),mt=Object.assign,yg=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ax=Object.prototype.hasOwnProperty,nt=(t,e)=>Ax.call(t,e),le=Array.isArray,Do=t=>pa(t)==="[object Map]",ro=t=>pa(t)==="[object Set]",Qy=t=>pa(t)==="[object Date]",xx=t=>pa(t)==="[object RegExp]",Ae=t=>typeof t=="function",Rt=t=>typeof t=="string",Ol=t=>typeof t=="symbol",ft=t=>t!==null&&typeof t=="object",bg=t=>ft(t)&&Ae(t.then)&&Ae(t.catch),ew=Object.prototype.toString,pa=t=>ew.call(t),Rx=t=>pa(t).slice(8,-1),tw=t=>pa(t)==="[object Object]",Eg=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ol=fh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hh=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ox=/-(\w)/g,Fn=hh(t=>t.replace(Ox,(e,n)=>n?n.toUpperCase():"")),Px=/\B([A-Z])/g,rr=hh(t=>t.replace(Px,"-$1").toLowerCase()),dc=hh(t=>t.charAt(0).toUpperCase()+t.slice(1)),al=hh(t=>t?`on${dc(t)}`:""),Go=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},af=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lf=t=>{const e=parseFloat(t);return isNaN(e)?t:e},cf=t=>{const e=Rt(t)?Number(t):NaN;return isNaN(e)?t:e};let qy;const Pp=()=>qy||(qy=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),kx="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",Nx=fh(kx);function Qi(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Rt(r)?Fx(r):Qi(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Rt(t))return t;if(ft(t))return t}}const Dx=/;(?![^(]*\))/g,Mx=/:([^]+)/,Lx=new RegExp("\\/\\*.*?\\*\\/","gs");function Fx(t){const e={};return t.replace(Lx,"").split(Dx).forEach(n=>{if(n){const r=n.split(Mx);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fs(t){let e="";if(Rt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=fs(t[n]);r&&(e+=r+" ")}else if(ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function $x(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Rt(e)&&(t.class=fs(e)),n&&(t.style=Qi(n)),t}const Ux="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vx=fh(Ux);function nw(t){return!!t||t===""}function jx(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qi(t[r],e[r]);return n}function qi(t,e){if(t===e)return!0;let n=Qy(t),r=Qy(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ol(t),r=Ol(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?jx(t,e):!1;if(n=ft(t),r=ft(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!qi(t[o],e[o]))return!1}}return String(t)===String(e)}function dh(t,e){return t.findIndex(n=>qi(n,e))}const In=t=>Rt(t)?t:t==null?"":le(t)||ft(t)&&(t.toString===ew||!Ae(t.toString))?JSON.stringify(t,rw,2):String(t),rw=(t,e)=>e&&e.__v_isRef?rw(t,e.value):Do(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ro(e)?{[`Set(${e.size})`]:[...e.values()]}:ft(e)&&!le(e)&&!tw(e)?String(e):e;let Hn;class _g{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Hn;try{return Hn=this,e()}finally{Hn=n}}}on(){Hn=this}off(){Hn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function iw(t){return new _g(t)}function sw(t,e=Hn){e&&e.active&&e.effects.push(t)}function ow(){return Hn}function Bx(t){Hn&&Hn.cleanups.push(t)}const wg=t=>{const e=new Set(t);return e.w=0,e.n=0,e},aw=t=>(t.w&Ji)>0,lw=t=>(t.n&Ji)>0,Hx=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ji},zx=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];aw(i)&&!lw(i)?i.delete(t):e[n++]=i,i.w&=~Ji,i.n&=~Ji}e.length=n}},uf=new WeakMap;let za=0,Ji=1;const kp=30;let dr;const Ns=Symbol(""),Np=Symbol("");class pc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sw(this,r)}run(){if(!this.active)return this.fn();let e=dr,n=Bi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dr,dr=this,Bi=!0,Ji=1<<++za,za<=kp?Hx(this):Jy(this),this.fn()}finally{za<=kp&&zx(this),Ji=1<<--za,dr=this.parent,Bi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dr===this?this.deferStop=!0:this.active&&(Jy(this),this.onStop&&this.onStop(),this.active=!1)}}function Jy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Wx(t,e){t.effect&&(t=t.effect.fn);const n=new pc(t);e&&(mt(n,e),e.scope&&sw(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function Kx(t){t.effect.stop()}let Bi=!0;const cw=[];function ma(){cw.push(Bi),Bi=!1}function ga(){const t=cw.pop();Bi=t===void 0?!0:t}function Un(t,e,n){if(Bi&&dr){let r=uf.get(t);r||uf.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=wg()),uw(i)}}function uw(t,e){let n=!1;za<=kp?lw(t)||(t.n|=Ji,n=!aw(t)):n=!t.has(dr),n&&(t.add(dr),dr.deps.push(t))}function ui(t,e,n,r,i,s){const o=uf.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Eg(n)&&a.push(o.get("length")):(a.push(o.get(Ns)),Do(t)&&a.push(o.get(Np)));break;case"delete":le(t)||(a.push(o.get(Ns)),Do(t)&&a.push(o.get(Np)));break;case"set":Do(t)&&a.push(o.get(Ns));break}if(a.length===1)a[0]&&Dp(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Dp(wg(l))}}function Dp(t,e){const n=le(t)?t:[...t];for(const r of n)r.computed&&Zy(r);for(const r of n)r.computed||Zy(r)}function Zy(t,e){(t!==dr||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Gx(t,e){var n;return(n=uf.get(t))==null?void 0:n.get(e)}const Yx=fh("__proto__,__v_isRef,__isVue"),fw=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ol)),Xx=ph(),Qx=ph(!1,!0),qx=ph(!0),Jx=ph(!0,!0),e0=Zx();function Zx(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Qe(this);for(let s=0,o=this.length;s<o;s++)Un(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Qe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ma();const r=Qe(this)[e].apply(this,n);return ga(),r}}),t}function eR(t){const e=Qe(this);return Un(e,"has",t),e.hasOwnProperty(t)}function ph(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?yw:vw:e?gw:mw).get(r))return r;const o=le(r);if(!t){if(o&&nt(e0,i))return Reflect.get(e0,i,s);if(i==="hasOwnProperty")return eR}const a=Reflect.get(r,i,s);return(Ol(i)?fw.has(i):Yx(i))||(t||Un(r,"get",i),e)?a:Lt(a)?o&&Eg(i)?a:a.value:ft(a)?t?Sg(a):Kr(a):a}}const tR=hw(),nR=hw(!0);function hw(t=!1){return function(n,r,i,s){let o=n[r];if(Zi(o)&&Lt(o)&&!Lt(i))return!1;if(!t&&(!Pl(i)&&!Zi(i)&&(o=Qe(o),i=Qe(i)),!le(n)&&Lt(o)&&!Lt(i)))return o.value=i,!0;const a=le(n)&&Eg(r)?Number(r)<n.length:nt(n,r),l=Reflect.set(n,r,i,s);return n===Qe(s)&&(a?Go(i,o)&&ui(n,"set",r,i):ui(n,"add",r,i)),l}}function rR(t,e){const n=nt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ui(t,"delete",e,void 0),r}function iR(t,e){const n=Reflect.has(t,e);return(!Ol(e)||!fw.has(e))&&Un(t,"has",e),n}function sR(t){return Un(t,"iterate",le(t)?"length":Ns),Reflect.ownKeys(t)}const dw={get:Xx,set:tR,deleteProperty:rR,has:iR,ownKeys:sR},pw={get:qx,set(t,e){return!0},deleteProperty(t,e){return!0}},oR=mt({},dw,{get:Qx,set:nR}),aR=mt({},pw,{get:Jx}),Tg=t=>t,mh=t=>Reflect.getPrototypeOf(t);function eu(t,e,n=!1,r=!1){t=t.__v_raw;const i=Qe(t),s=Qe(e);n||(e!==s&&Un(i,"get",e),Un(i,"get",s));const{has:o}=mh(i),a=r?Tg:n?Ag:kl;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function tu(t,e=!1){const n=this.__v_raw,r=Qe(n),i=Qe(t);return e||(t!==i&&Un(r,"has",t),Un(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function nu(t,e=!1){return t=t.__v_raw,!e&&Un(Qe(t),"iterate",Ns),Reflect.get(t,"size",t)}function t0(t){t=Qe(t);const e=Qe(this);return mh(e).has.call(e,t)||(e.add(t),ui(e,"add",t,t)),this}function n0(t,e){e=Qe(e);const n=Qe(this),{has:r,get:i}=mh(n);let s=r.call(n,t);s||(t=Qe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Go(e,o)&&ui(n,"set",t,e):ui(n,"add",t,e),this}function r0(t){const e=Qe(this),{has:n,get:r}=mh(e);let i=n.call(e,t);i||(t=Qe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&ui(e,"delete",t,void 0),s}function i0(){const t=Qe(this),e=t.size!==0,n=t.clear();return e&&ui(t,"clear",void 0,void 0),n}function ru(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Qe(o),l=e?Tg:t?Ag:kl;return!t&&Un(a,"iterate",Ns),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function iu(t,e,n){return function(...r){const i=this.__v_raw,s=Qe(i),o=Do(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Tg:e?Ag:kl;return!e&&Un(s,"iterate",l?Np:Ns),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Si(t){return function(...e){return t==="delete"?!1:this}}function lR(){const t={get(s){return eu(this,s)},get size(){return nu(this)},has:tu,add:t0,set:n0,delete:r0,clear:i0,forEach:ru(!1,!1)},e={get(s){return eu(this,s,!1,!0)},get size(){return nu(this)},has:tu,add:t0,set:n0,delete:r0,clear:i0,forEach:ru(!1,!0)},n={get(s){return eu(this,s,!0)},get size(){return nu(this,!0)},has(s){return tu.call(this,s,!0)},add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear"),forEach:ru(!0,!1)},r={get(s){return eu(this,s,!0,!0)},get size(){return nu(this,!0)},has(s){return tu.call(this,s,!0)},add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear"),forEach:ru(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=iu(s,!1,!1),n[s]=iu(s,!0,!1),e[s]=iu(s,!1,!0),r[s]=iu(s,!0,!0)}),[t,n,e,r]}const[cR,uR,fR,hR]=lR();function gh(t,e){const n=e?t?hR:fR:t?uR:cR;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(nt(n,i)&&i in r?n:r,i,s)}const dR={get:gh(!1,!1)},pR={get:gh(!1,!0)},mR={get:gh(!0,!1)},gR={get:gh(!0,!0)},mw=new WeakMap,gw=new WeakMap,vw=new WeakMap,yw=new WeakMap;function vR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yR(t){return t.__v_skip||!Object.isExtensible(t)?0:vR(Rx(t))}function Kr(t){return Zi(t)?t:vh(t,!1,dw,dR,mw)}function bw(t){return vh(t,!1,oR,pR,gw)}function Sg(t){return vh(t,!0,pw,mR,vw)}function bR(t){return vh(t,!0,aR,gR,yw)}function vh(t,e,n,r,i){if(!ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=yR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Hi(t){return Zi(t)?Hi(t.__v_raw):!!(t&&t.__v_isReactive)}function Zi(t){return!!(t&&t.__v_isReadonly)}function Pl(t){return!!(t&&t.__v_isShallow)}function Ig(t){return Hi(t)||Zi(t)}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function Cg(t){return af(t,"__v_skip",!0),t}const kl=t=>ft(t)?Kr(t):t,Ag=t=>ft(t)?Sg(t):t;function xg(t){Bi&&dr&&(t=Qe(t),uw(t.dep||(t.dep=wg())))}function yh(t,e){t=Qe(t);const n=t.dep;n&&Dp(n)}function Lt(t){return!!(t&&t.__v_isRef===!0)}function Ge(t){return _w(t,!1)}function Ew(t){return _w(t,!0)}function _w(t,e){return Lt(t)?t:new ER(t,e)}class ER{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Qe(e),this._value=n?e:kl(e)}get value(){return xg(this),this._value}set value(e){const n=this.__v_isShallow||Pl(e)||Zi(e);e=n?e:Qe(e),Go(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kl(e),yh(this))}}function _R(t){yh(t)}function ye(t){return Lt(t)?t.value:t}function wR(t){return Ae(t)?t():ye(t)}const TR={get:(t,e,n)=>ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Rg(t){return Hi(t)?t:new Proxy(t,TR)}class SR{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>xg(this),()=>yh(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function IR(t){return new SR(t)}function CR(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=ww(t,n);return e}class AR{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gx(Qe(this._object),this._key)}}class xR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function RR(t,e,n){return Lt(t)?t:Ae(t)?new xR(t):ft(t)&&arguments.length>1?ww(t,e,n):Ge(t)}function ww(t,e,n){const r=t[e];return Lt(r)?r:new AR(t,e,n)}class OR{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pc(e,()=>{this._dirty||(this._dirty=!0,yh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Qe(this);return xg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function PR(t,e,n=!1){let r,i;const s=Ae(t);return s?(r=t,i=br):(r=t.get,i=t.set),new OR(r,i,s||!i,n)}function kR(t,...e){}function NR(t,e){}function ai(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){io(s,e,n)}return i}function Yn(t,e,n,r){if(Ae(t)){const s=ai(t,e,n,r);return s&&bg(s)&&s.catch(o=>{io(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Yn(t[s],e,n,r));return i}function io(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ai(l,null,10,[t,o,a]);return}}DR(t,n,i,r)}function DR(t,e,n,r=!0){console.error(t)}let Nl=!1,Mp=!1;const dn=[];let xr=0;const Lo=[];let Zr=null,Ts=0;const Tw=Promise.resolve();let Og=null;function Yo(t){const e=Og||Tw;return t?e.then(this?t.bind(this):t):e}function MR(t){let e=xr+1,n=dn.length;for(;e<n;){const r=e+n>>>1;Dl(dn[r])<t?e=r+1:n=r}return e}function bh(t){(!dn.length||!dn.includes(t,Nl&&t.allowRecurse?xr+1:xr))&&(t.id==null?dn.push(t):dn.splice(MR(t.id),0,t),Sw())}function Sw(){!Nl&&!Mp&&(Mp=!0,Og=Tw.then(Iw))}function LR(t){const e=dn.indexOf(t);e>xr&&dn.splice(e,1)}function Pg(t){le(t)?Lo.push(...t):(!Zr||!Zr.includes(t,t.allowRecurse?Ts+1:Ts))&&Lo.push(t),Sw()}function s0(t,e=Nl?xr+1:0){for(;e<dn.length;e++){const n=dn[e];n&&n.pre&&(dn.splice(e,1),e--,n())}}function ff(t){if(Lo.length){const e=[...new Set(Lo)];if(Lo.length=0,Zr){Zr.push(...e);return}for(Zr=e,Zr.sort((n,r)=>Dl(n)-Dl(r)),Ts=0;Ts<Zr.length;Ts++)Zr[Ts]();Zr=null,Ts=0}}const Dl=t=>t.id==null?1/0:t.id,FR=(t,e)=>{const n=Dl(t)-Dl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Iw(t){Mp=!1,Nl=!0,dn.sort(FR);const e=br;try{for(xr=0;xr<dn.length;xr++){const n=dn[xr];n&&n.active!==!1&&ai(n,null,14)}}finally{xr=0,dn.length=0,ff(),Nl=!1,Og=null,(dn.length||Lo.length)&&Iw()}}let _o,su=[];function Cw(t,e){var n,r;_o=t,_o?(_o.enabled=!0,su.forEach(({event:i,args:s})=>_o.emit(i,...s)),su=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Cw(s,e)}),setTimeout(()=>{_o||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,su=[])},3e3)):su=[]}function $R(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ct;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ct;h&&(i=n.map(d=>Rt(d)?d.trim():d)),f&&(i=n.map(lf))}let a,l=r[a=al(e)]||r[a=al(Fn(e))];!l&&s&&(l=r[a=al(rr(e))]),l&&Yn(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Yn(c,t,6,i)}}function Aw(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Ae(t)){const l=c=>{const u=Aw(c,e,!0);u&&(a=!0,mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ft(t)&&r.set(t,null),null):(le(s)?s.forEach(l=>o[l]=null):mt(o,s),ft(t)&&r.set(t,o),o)}function Eh(t,e){return!t||!hc(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,rr(e))||nt(t,e))}let qt=null,_h=null;function Ml(t){const e=qt;return qt=t,_h=t&&t.type.__scopeId||null,e}function Gr(t){_h=t}function Yr(){_h=null}const UR=t=>fi;function fi(t,e=qt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Bp(-1);const s=Ml(e);let o;try{o=t(...i)}finally{Ml(s),r._d&&Bp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Bu(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:p,inheritAttrs:m}=t;let y,v;const g=Ml(t);try{if(n.shapeFlag&4){const b=i||r;y=Wn(u.call(b,b,f,s,d,h,p)),v=l}else{const b=e;y=Wn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),v=e.props?l:jR(l)}}catch(b){ul.length=0,io(b,t,1),y=fe(vn)}let E=y;if(v&&m!==!1){const b=Object.keys(v),{shapeFlag:T}=E;b.length&&T&7&&(o&&b.some(vg)&&(v=BR(v,o)),E=$r(E,v))}return n.dirs&&(E=$r(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,Ml(g),y}function VR(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(es(r)){if(r.type!==vn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const jR=t=>{let e;for(const n in t)(n==="class"||n==="style"||hc(n))&&((e||(e={}))[n]=t[n]);return e},BR=(t,e)=>{const n={};for(const r in t)(!vg(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function HR(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?o0(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Eh(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?o0(r,o,c):!0:!!o;return!1}function o0(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Eh(n,s))return!0}return!1}function kg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xw=t=>t.__isSuspense,zR={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,l,c){t==null?KR(e,n,r,i,s,o,a,l,c):GR(t,e,n,r,i,o,a,l,c)},hydrate:YR,create:Ng,normalize:XR},WR=zR;function Ll(t,e){const n=t.props&&t.props[e];Ae(n)&&n()}function KR(t,e,n,r,i,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Ng(t,i,r,e,f,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,r,h,s,o),h.deps>0?(Ll(t,"onPending"),Ll(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,s,o),Fo(h,t.ssFallback)):h.resolve(!1,!0)}function GR(t,e,n,r,i,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:y,isHydrating:v}=f;if(m)f.pendingBranch=h,pr(h,m)?(l(m,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0?f.resolve():y&&(l(p,d,n,r,i,null,s,o,a),Fo(f,d))):(f.pendingId++,v?(f.isHydrating=!1,f.activeBranch=m):c(m,i,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),y?(l(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0?f.resolve():(l(p,d,n,r,i,null,s,o,a),Fo(f,d))):p&&pr(h,p)?(l(p,h,n,r,i,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0&&f.resolve()));else if(p&&pr(h,p))l(p,h,n,r,i,f,s,o,a),Fo(f,h);else if(Ll(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:g,pendingId:E}=f;g>0?setTimeout(()=>{f.pendingId===E&&f.fallback(d)},g):g===0&&f.fallback(d)}}function Ng(t,e,n,r,i,s,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:p,o:{parentNode:m,remove:y}}=c;let v;const g=QR(t);g&&e!=null&&e.pendingBranch&&(v=e.pendingId,e.deps++);const E=t.props?cf(t.props.timeout):void 0,b={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,S=!1){const{vnode:O,activeBranch:A,pendingBranch:I,pendingId:k,effects:F,parentComponent:U,container:M}=b;if(b.isHydrating)b.isHydrating=!1;else if(!T){const j=A&&I.transition&&I.transition.mode==="out-in";j&&(A.transition.afterLeave=()=>{k===b.pendingId&&h(I,M,Q,0)});let{anchor:Q}=b;A&&(Q=p(A),d(A,U,b,!0)),j||h(I,M,Q,0)}Fo(b,I),b.pendingBranch=null,b.isInFallback=!1;let P=b.parent,ne=!1;for(;P;){if(P.pendingBranch){P.effects.push(...F),ne=!0;break}P=P.parent}ne||Pg(F),b.effects=[],g&&e&&e.pendingBranch&&v===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),Ll(O,"onResolve")},fallback(T){if(!b.pendingBranch)return;const{vnode:S,activeBranch:O,parentComponent:A,container:I,isSVG:k}=b;Ll(S,"onFallback");const F=p(O),U=()=>{b.isInFallback&&(f(null,T,I,F,A,null,k,a,l),Fo(b,T))},M=T.transition&&T.transition.mode==="out-in";M&&(O.transition.afterLeave=U),b.isInFallback=!0,d(O,A,null,!0),M||U()},move(T,S,O){b.activeBranch&&h(b.activeBranch,T,S,O),b.container=T},next(){return b.activeBranch&&p(b.activeBranch)},registerDep(T,S){const O=!!b.pendingBranch;O&&b.deps++;const A=T.vnode.el;T.asyncDep.catch(I=>{io(I,T,0)}).then(I=>{if(T.isUnmounted||b.isUnmounted||b.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:k}=T;Hp(T,I,!1),A&&(k.el=A);const F=!A&&T.subTree.el;S(T,k,m(A||T.subTree.el),A?null:p(T.subTree),b,o,l),F&&y(F),kg(T,k.el),O&&--b.deps===0&&b.resolve()})},unmount(T,S){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,T,S),b.pendingBranch&&d(b.pendingBranch,n,T,S)}};return b}function YR(t,e,n,r,i,s,o,a,l){const c=e.suspense=Ng(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function XR(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=a0(r?n.default:n),t.ssFallback=r?a0(n.fallback):fe(vn)}function a0(t){let e;if(Ae(t)){const n=zs&&t._c;n&&(t._d=!1,Ee()),t=t(),n&&(t._d=!0,e=Mn,n1())}return le(t)&&(t=VR(t)),t=Wn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Rw(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Pg(t)}function Fo(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,kg(r,i))}function QR(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function qR(t,e){return mc(t,null,e)}function Ow(t,e){return mc(t,null,{flush:"post"})}function JR(t,e){return mc(t,null,{flush:"sync"})}const ou={};function $n(t,e,n){return mc(t,e,n)}function mc(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ct){var a;const l=ow()===((a=jt)==null?void 0:a.scope)?jt:null;let c,u=!1,f=!1;if(Lt(t)?(c=()=>t.value,u=Pl(t)):Hi(t)?(c=()=>t,r=!0):le(t)?(f=!0,u=t.some(b=>Hi(b)||Pl(b)),c=()=>t.map(b=>{if(Lt(b))return b.value;if(Hi(b))return Cs(b);if(Ae(b))return ai(b,l,2)})):Ae(t)?e?c=()=>ai(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Yn(t,l,3,[d])}:c=br,e&&r){const b=c;c=()=>Cs(b())}let h,d=b=>{h=g.onStop=()=>{ai(b,l,4)}},p;if(Qo)if(d=br,e?n&&Yn(e,l,3,[c(),f?[]:void 0,d]):c(),i==="sync"){const b=d1();p=b.__watcherHandles||(b.__watcherHandles=[])}else return br;let m=f?new Array(t.length).fill(ou):ou;const y=()=>{if(g.active)if(e){const b=g.run();(r||u||(f?b.some((T,S)=>Go(T,m[S])):Go(b,m)))&&(h&&h(),Yn(e,l,3,[b,m===ou?void 0:f&&m[0]===ou?[]:m,d]),m=b)}else g.run()};y.allowRecurse=!!e;let v;i==="sync"?v=y:i==="post"?v=()=>tn(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),v=()=>bh(y));const g=new pc(c,v);e?n?y():m=g.run():i==="post"?tn(g.run.bind(g),l&&l.suspense):g.run();const E=()=>{g.stop(),l&&l.scope&&yg(l.scope.effects,g)};return p&&p.push(E),E}function ZR(t,e,n){const r=this.proxy,i=Rt(t)?t.includes(".")?Pw(r,t):()=>r[t]:t.bind(r,r);let s;Ae(e)?s=e:(s=e.handler,n=e);const o=jt;ts(this);const a=mc(i,s.bind(r),n);return o?ts(o):zi(),a}function Pw(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Cs(t,e){if(!ft(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Lt(t))Cs(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)Cs(t[n],e);else if(ro(t)||Do(t))t.forEach(n=>{Cs(n,e)});else if(tw(t))for(const n in t)Cs(t[n],e);return t}function Nr(t,e){const n=qt;if(n===null)return t;const r=Ah(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ct]=e[s];o&&(Ae(o)&&(o={mounted:o,updated:o}),o.deep&&Cs(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ar(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ma(),Yn(l,n,8,[t.el,a,t,e]),ga())}}function Dg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vc(()=>{t.isMounted=!0}),yc(()=>{t.isUnmounting=!0}),t}const tr=[Function,Array],Mg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tr,onEnter:tr,onAfterEnter:tr,onEnterCancelled:tr,onBeforeLeave:tr,onLeave:tr,onAfterLeave:tr,onLeaveCancelled:tr,onBeforeAppear:tr,onAppear:tr,onAfterAppear:tr,onAppearCancelled:tr},e2={name:"BaseTransition",props:Mg,setup(t,{slots:e}){const n=Cr(),r=Dg();let i;return()=>{const s=e.default&&wh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==vn){o=m;break}}const a=Qe(t),{mode:l}=a;if(r.isLeaving)return Id(o);const c=l0(o);if(!c)return Id(o);const u=Xo(c,a,r,n);Bs(c,u);const f=n.subTree,h=f&&l0(f);let d=!1;const{getTransitionKey:p}=c.type;if(p){const m=p();i===void 0?i=m:m!==i&&(i=m,d=!0)}if(h&&h.type!==vn&&(!pr(c,h)||d)){const m=Xo(h,a,r,n);if(Bs(h,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Id(o);l==="in-out"&&c.type!==vn&&(m.delayLeave=(y,v,g)=>{const E=Nw(r,h);E[String(h.key)]=h,y._leaveCb=()=>{v(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},kw=e2;function Nw(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Xo(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:g}=e,E=String(t.key),b=Nw(n,t),T=(A,I)=>{A&&Yn(A,r,9,I)},S=(A,I)=>{const k=I[1];T(A,I),le(A)?A.every(F=>F.length<=1)&&k():A.length<=1&&k()},O={mode:s,persisted:o,beforeEnter(A){let I=a;if(!n.isMounted)if(i)I=m||a;else return;A._leaveCb&&A._leaveCb(!0);const k=b[E];k&&pr(t,k)&&k.el._leaveCb&&k.el._leaveCb(),T(I,[A])},enter(A){let I=l,k=c,F=u;if(!n.isMounted)if(i)I=y||l,k=v||c,F=g||u;else return;let U=!1;const M=A._enterCb=P=>{U||(U=!0,P?T(F,[A]):T(k,[A]),O.delayedLeave&&O.delayedLeave(),A._enterCb=void 0)};I?S(I,[A,M]):M()},leave(A,I){const k=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return I();T(f,[A]);let F=!1;const U=A._leaveCb=M=>{F||(F=!0,I(),M?T(p,[A]):T(d,[A]),A._leaveCb=void 0,b[k]===t&&delete b[k])};b[k]=t,h?S(h,[A,U]):U()},clone(A){return Xo(A,e,n,r)}};return O}function Id(t){if(gc(t))return t=$r(t),t.children=null,t}function l0(t){return gc(t)?t.children?t.children[0]:void 0:t}function Bs(t,e){t.shapeFlag&6&&t.component?Bs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wh(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ht?(o.patchFlag&128&&i++,r=r.concat(wh(o.children,e,a))):(e||o.type!==vn)&&r.push(a!=null?$r(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function va(t,e){return Ae(t)?(()=>mt({name:t.name},e,{setup:t}))():t}const Ds=t=>!!t.type.__asyncLoader;function t2(t){Ae(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((m,y)=>{a(p,()=>m(f()),()=>y(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return va({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=jt;if(c)return()=>Cd(c,d);const p=g=>{l=null,io(g,d,13,!r)};if(o&&d.suspense||Qo)return h().then(g=>()=>Cd(g,d)).catch(g=>(p(g),()=>r?fe(r,{error:g}):null));const m=Ge(!1),y=Ge(),v=Ge(!!i);return i&&setTimeout(()=>{v.value=!1},i),s!=null&&setTimeout(()=>{if(!m.value&&!y.value){const g=new Error(`Async component timed out after ${s}ms.`);p(g),y.value=g}},s),h().then(()=>{m.value=!0,d.parent&&gc(d.parent.vnode)&&bh(d.parent.update)}).catch(g=>{p(g),y.value=g}),()=>{if(m.value&&c)return Cd(c,d);if(y.value&&r)return fe(r,{error:y.value});if(n&&!v.value)return fe(n)}}})}function Cd(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=fe(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const gc=t=>t.type.__isKeepAlive,n2={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Cr(),r=n.ctx;if(!r.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=r,h=f("div");r.activate=(g,E,b,T,S)=>{const O=g.component;c(g,E,b,0,a),l(O.vnode,g,E,b,O,a,T,g.slotScopeIds,S),tn(()=>{O.isDeactivated=!1,O.a&&Mo(O.a);const A=g.props&&g.props.onVnodeMounted;A&&Nn(A,O.parent,g)},a)},r.deactivate=g=>{const E=g.component;c(g,h,null,1,a),tn(()=>{E.da&&Mo(E.da);const b=g.props&&g.props.onVnodeUnmounted;b&&Nn(b,E.parent,g),E.isDeactivated=!0},a)};function d(g){Ad(g),u(g,n,a,!0)}function p(g){i.forEach((E,b)=>{const T=Wp(E.type);T&&(!g||!g(T))&&m(b)})}function m(g){const E=i.get(g);!o||!pr(E,o)?d(E):o&&Ad(o),i.delete(g),s.delete(g)}$n(()=>[t.include,t.exclude],([g,E])=>{g&&p(b=>Wa(g,b)),E&&p(b=>!Wa(E,b))},{flush:"post",deep:!0});let y=null;const v=()=>{y!=null&&i.set(y,xd(n.subTree))};return vc(v),Sh(v),yc(()=>{i.forEach(g=>{const{subTree:E,suspense:b}=n,T=xd(E);if(g.type===T.type&&g.key===T.key){Ad(T);const S=T.component.da;S&&tn(S,b);return}d(g)})}),()=>{if(y=null,!e.default)return null;const g=e.default(),E=g[0];if(g.length>1)return o=null,g;if(!es(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let b=xd(E);const T=b.type,S=Wp(Ds(b)?b.type.__asyncResolved||{}:T),{include:O,exclude:A,max:I}=t;if(O&&(!S||!Wa(O,S))||A&&S&&Wa(A,S))return o=b,E;const k=b.key==null?T:b.key,F=i.get(k);return b.el&&(b=$r(b),E.shapeFlag&128&&(E.ssContent=b)),y=k,F?(b.el=F.el,b.component=F.component,b.transition&&Bs(b,b.transition),b.shapeFlag|=512,s.delete(k),s.add(k)):(s.add(k),I&&s.size>parseInt(I,10)&&m(s.values().next().value)),b.shapeFlag|=256,o=b,xw(E.type)?E:b}}},r2=n2;function Wa(t,e){return le(t)?t.some(n=>Wa(n,e)):Rt(t)?t.split(",").includes(e):xx(t)?t.test(e):!1}function Dw(t,e){Lw(t,"a",e)}function Mw(t,e){Lw(t,"da",e)}function Lw(t,e,n=jt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Th(e,r,n),n){let i=n.parent;for(;i&&i.parent;)gc(i.parent.vnode)&&i2(r,e,n,i),i=i.parent}}function i2(t,e,n,r){const i=Th(e,t,r,!0);Ih(()=>{yg(r[e],i)},n)}function Ad(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function xd(t){return t.shapeFlag&128?t.ssContent:t}function Th(t,e,n=jt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ma(),ts(n);const a=Yn(e,n,t,o);return zi(),ga(),a});return r?i.unshift(s):i.push(s),s}}const Ei=t=>(e,n=jt)=>(!Qo||t==="sp")&&Th(t,(...r)=>e(...r),n),Lg=Ei("bm"),vc=Ei("m"),Fw=Ei("bu"),Sh=Ei("u"),yc=Ei("bum"),Ih=Ei("um"),$w=Ei("sp"),Uw=Ei("rtg"),Vw=Ei("rtc");function jw(t,e=jt){Th("ec",t,e)}const Fg="components",s2="directives";function Jn(t,e){return $g(Fg,t,!0,e)||t}const Bw=Symbol.for("v-ndc");function o2(t){return Rt(t)?$g(Fg,t,!1)||t:t||Bw}function a2(t){return $g(s2,t)}function $g(t,e,n=!0,r=!1){const i=qt||jt;if(i){const s=i.type;if(t===Fg){const a=Wp(s,!1);if(a&&(a===e||a===Fn(e)||a===dc(Fn(e))))return s}const o=c0(i[t]||s[t],e)||c0(i.appContext[t],e);return!o&&r?s:o}}function c0(t,e){return t&&(t[e]||t[Fn(e)]||t[dc(Fn(e))])}function Fl(t,e,n,r){let i;const s=n&&n[r];if(le(t)||Rt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ft(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function l2(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(le(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function c2(t,e,n={},r,i){if(qt.isCE||qt.parent&&Ds(qt.parent)&&qt.parent.isCE)return e!=="default"&&(n.name=e),fe("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Ee();const o=s&&Hw(s(n)),a=Vn(ht,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Hw(t){return t.some(e=>es(e)?!(e.type===vn||e.type===ht&&!Hw(e.children)):!0)?t:null}function u2(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:al(r)]=t[r];return n}const Lp=t=>t?l1(t)?Ah(t)||t.proxy:Lp(t.parent):null,ll=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lp(t.parent),$root:t=>Lp(t.root),$emit:t=>t.emit,$options:t=>Ug(t),$forceUpdate:t=>t.f||(t.f=()=>bh(t.update)),$nextTick:t=>t.n||(t.n=Yo.bind(t.proxy)),$watch:t=>ZR.bind(t)}),Rd=(t,e)=>t!==ct&&!t.__isScriptSetup&&nt(t,e),Fp={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Rd(r,e))return o[e]=1,r[e];if(i!==ct&&nt(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(n!==ct&&nt(n,e))return o[e]=4,n[e];$p&&(o[e]=0)}}const u=ll[e];let f,h;if(u)return e==="$attrs"&&Un(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ct&&nt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Rd(i,e)?(i[e]=n,!0):r!==ct&&nt(r,e)?(r[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ct&&nt(t,o)||Rd(e,o)||(a=s[0])&&nt(a,o)||nt(r,o)||nt(ll,o)||nt(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},f2=mt({},Fp,{get(t,e){if(e!==Symbol.unscopables)return Fp.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Nx(e)}});function h2(){return null}function d2(){return null}function p2(t){}function m2(t){}function g2(){return null}function v2(){}function y2(t,e){return null}function b2(){return zw().slots}function E2(){return zw().attrs}function _2(t,e,n){const r=Cr();if(n&&n.local){const i=Ge(t[e]);return $n(()=>t[e],s=>i.value=s),$n(i,s=>{s!==t[e]&&r.emit(`update:${e}`,s)}),i}else return{__v_isRef:!0,get value(){return t[e]},set value(i){r.emit(`update:${e}`,i)}}}function zw(){const t=Cr();return t.setupContext||(t.setupContext=f1(t))}function $l(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function w2(t,e){const n=$l(t);for(const r in e){if(r.startsWith("__skip"))continue;let i=n[r];i?le(i)||Ae(i)?i=n[r]={type:i,default:e[r]}:i.default=e[r]:i===null&&(i=n[r]={default:e[r]}),i&&e[`__skip_${r}`]&&(i.skipFactory=!0)}return n}function T2(t,e){return!t||!e?t||e:le(t)&&le(e)?t.concat(e):mt({},$l(t),$l(e))}function S2(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function I2(t){const e=Cr();let n=t();return zi(),bg(n)&&(n=n.catch(r=>{throw ts(e),r})),[n,()=>ts(e)]}let $p=!0;function C2(t){const e=Ug(t),n=t.proxy,r=t.ctx;$p=!1,e.beforeCreate&&u0(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:g,destroyed:E,unmounted:b,render:T,renderTracked:S,renderTriggered:O,errorCaptured:A,serverPrefetch:I,expose:k,inheritAttrs:F,components:U,directives:M,filters:P}=e;if(c&&A2(c,r,null),o)for(const Q in o){const oe=o[Q];Ae(oe)&&(r[Q]=oe.bind(n))}if(i){const Q=i.call(n,n);ft(Q)&&(t.data=Kr(Q))}if($p=!0,s)for(const Q in s){const oe=s[Q],ze=Ae(oe)?oe.bind(n,n):Ae(oe.get)?oe.get.bind(n,n):br,Ce=!Ae(oe)&&Ae(oe.set)?oe.set.bind(n):br,Ue=De({get:ze,set:Ce});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:xe=>Ue.value=xe})}if(a)for(const Q in a)Ww(a[Q],r,n,Q);if(l){const Q=Ae(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(oe=>{Ms(oe,Q[oe])})}u&&u0(u,t,"c");function j(Q,oe){le(oe)?oe.forEach(ze=>Q(ze.bind(n))):oe&&Q(oe.bind(n))}if(j(Lg,f),j(vc,h),j(Fw,d),j(Sh,p),j(Dw,m),j(Mw,y),j(jw,A),j(Vw,S),j(Uw,O),j(yc,g),j(Ih,b),j($w,I),le(k))if(k.length){const Q=t.exposed||(t.exposed={});k.forEach(oe=>{Object.defineProperty(Q,oe,{get:()=>n[oe],set:ze=>n[oe]=ze})})}else t.exposed||(t.exposed={});T&&t.render===br&&(t.render=T),F!=null&&(t.inheritAttrs=F),U&&(t.components=U),M&&(t.directives=M)}function A2(t,e,n=br){le(t)&&(t=Up(t));for(const r in t){const i=t[r];let s;ft(i)?"default"in i?s=Xn(i.from||r,i.default,!0):s=Xn(i.from||r):s=Xn(i),Lt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function u0(t,e,n){Yn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ww(t,e,n,r){const i=r.includes(".")?Pw(n,r):()=>n[r];if(Rt(t)){const s=e[t];Ae(s)&&$n(i,s)}else if(Ae(t))$n(i,t.bind(n));else if(ft(t))if(le(t))t.forEach(s=>Ww(s,e,n,r));else{const s=Ae(t.handler)?t.handler.bind(n):e[t.handler];Ae(s)&&$n(i,s,t)}}function Ug(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>hf(l,c,o,!0)),hf(l,e,o)),ft(e)&&s.set(e,l),l}function hf(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&hf(t,s,n,!0),i&&i.forEach(o=>hf(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=x2[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const x2={data:f0,props:h0,emits:h0,methods:Ka,computed:Ka,beforeCreate:Tn,created:Tn,beforeMount:Tn,mounted:Tn,beforeUpdate:Tn,updated:Tn,beforeDestroy:Tn,beforeUnmount:Tn,destroyed:Tn,unmounted:Tn,activated:Tn,deactivated:Tn,errorCaptured:Tn,serverPrefetch:Tn,components:Ka,directives:Ka,watch:O2,provide:f0,inject:R2};function f0(t,e){return e?t?function(){return mt(Ae(t)?t.call(this,this):t,Ae(e)?e.call(this,this):e)}:e:t}function R2(t,e){return Ka(Up(t),Up(e))}function Up(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ka(t,e){return t?mt(Object.create(null),t,e):e}function h0(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:mt(Object.create(null),$l(t),$l(e??{})):e}function O2(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const r in e)n[r]=Tn(t[r],e[r]);return n}function Kw(){return{app:null,config:{isNativeTag:Ix,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P2=0;function k2(t,e){return function(r,i=null){Ae(r)||(r=mt({},r)),i!=null&&!ft(i)&&(i=null);const s=Kw(),o=new Set;let a=!1;const l=s.app={_uid:P2++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:m1,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ae(c.install)?(o.add(c),c.install(l,...u)):Ae(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=fe(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ah(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ul=l;try{return c()}finally{Ul=null}}};return l}}let Ul=null;function Ms(t,e){if(jt){let n=jt.provides;const r=jt.parent&&jt.parent.provides;r===n&&(n=jt.provides=Object.create(r)),n[t]=e}}function Xn(t,e,n=!1){const r=jt||qt;if(r||Ul){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ul._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ae(e)?e.call(r&&r.proxy):e}}function N2(){return!!(jt||qt||Ul)}function D2(t,e,n,r=!1){const i={},s={};af(s,Ch,1),t.propsDefaults=Object.create(null),Gw(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:bw(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function M2(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Qe(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Eh(t.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const p=Fn(h);i[p]=Vp(l,a,p,d,t,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Gw(t,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=rr(f))===f||!nt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Vp(l,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&ui(t,"set","$attrs")}function Gw(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ol(l))continue;const c=e[l];let u;i&&nt(i,u=Fn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Eh(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Qe(n),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Vp(i,l,f,c[f],t,!nt(c,f))}}return o}function Vp(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ae(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(ts(i),r=c[n]=l.call(null,e),zi())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===rr(n))&&(r=!0))}return r}function Yw(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Ae(t)){const u=f=>{l=!0;const[h,d]=Yw(f,e,!0);mt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ft(t)&&r.set(t,No),No;if(le(s))for(let u=0;u<s.length;u++){const f=Fn(s[u]);d0(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=Fn(u);if(d0(f)){const h=s[u],d=o[f]=le(h)||Ae(h)?{type:h}:mt({},h);if(d){const p=g0(Boolean,d.type),m=g0(String,d.type);d[0]=p>-1,d[1]=m<0||p<m,(p>-1||nt(d,"default"))&&a.push(f)}}}const c=[o,a];return ft(t)&&r.set(t,c),c}function d0(t){return t[0]!=="$"}function p0(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function m0(t,e){return p0(t)===p0(e)}function g0(t,e){return le(e)?e.findIndex(n=>m0(n,t)):Ae(e)&&m0(e,t)?0:-1}const Xw=t=>t[0]==="_"||t==="$stable",Vg=t=>le(t)?t.map(Wn):[Wn(t)],L2=(t,e,n)=>{if(e._n)return e;const r=fi((...i)=>Vg(e(...i)),n);return r._c=!1,r},Qw=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Xw(i))continue;const s=t[i];if(Ae(s))e[i]=L2(i,s,r);else if(s!=null){const o=Vg(s);e[i]=()=>o}}},qw=(t,e)=>{const n=Vg(e);t.slots.default=()=>n},F2=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Qe(e),af(e,"_",n)):Qw(e,t.slots={})}else t.slots={},e&&qw(t,e);af(t.slots,Ch,1)},$2=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ct;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(mt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Qw(e,i)),o=e}else e&&(qw(t,e),o={default:1});if(s)for(const a in i)!Xw(a)&&!(a in o)&&delete i[a]};function df(t,e,n,r,i=!1){if(le(t)){t.forEach((h,d)=>df(h,e&&(le(e)?e[d]:e),n,r,i));return}if(Ds(r)&&!i)return;const s=r.shapeFlag&4?Ah(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,nt(f,c)&&(f[c]=null)):Lt(c)&&(c.value=null)),Ae(l))ai(l,a,12,[o,u]);else{const h=Rt(l),d=Lt(l);if(h||d){const p=()=>{if(t.f){const m=h?nt(f,l)?f[l]:u[l]:l.value;i?le(m)&&yg(m,s):le(m)?m.includes(s)||m.push(s):h?(u[l]=[s],nt(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,nt(f,l)&&(f[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,tn(p,n)):p()}}}let Ii=!1;const au=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",lu=t=>t.nodeType===8;function U2(t){const{mt:e,p:n,o:{patchProp:r,createText:i,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),ff(),g._vnode=v;return}Ii=!1,f(g.firstChild,v,null,null,null),ff(),g._vnode=v,Ii&&console.error("Hydration completed but contains mismatches.")},f=(v,g,E,b,T,S=!1)=>{const O=lu(v)&&v.data==="[",A=()=>m(v,g,E,b,T,O),{type:I,ref:k,shapeFlag:F,patchFlag:U}=g;let M=v.nodeType;g.el=v,U===-2&&(S=!1,g.dynamicChildren=null);let P=null;switch(I){case Hs:M!==3?g.children===""?(l(g.el=i(""),o(v),v),P=v):P=A():(v.data!==g.children&&(Ii=!0,v.data=g.children),P=s(v));break;case vn:M!==8||O?P=A():P=s(v);break;case Ls:if(O&&(v=s(v),M=v.nodeType),M===1||M===3){P=v;const ne=!g.children.length;for(let j=0;j<g.staticCount;j++)ne&&(g.children+=P.nodeType===1?P.outerHTML:P.data),j===g.staticCount-1&&(g.anchor=P),P=s(P);return O?s(P):P}else A();break;case ht:O?P=p(v,g,E,b,T,S):P=A();break;default:if(F&1)M!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?P=A():P=h(v,g,E,b,T,S);else if(F&6){g.slotScopeIds=T;const ne=o(v);if(e(g,ne,null,E,b,au(ne),S),P=O?y(v):s(v),P&&lu(P)&&P.data==="teleport end"&&(P=s(P)),Ds(g)){let j;O?(j=fe(ht),j.anchor=P?P.previousSibling:ne.lastChild):j=v.nodeType===3?_r(""):fe("div"),j.el=v,g.component.subTree=j}}else F&64?M!==8?P=A():P=g.type.hydrate(v,g,E,b,T,S,t,d):F&128&&(P=g.type.hydrate(v,g,E,b,au(o(v)),T,S,t,f))}return k!=null&&df(k,null,b,g),P},h=(v,g,E,b,T,S)=>{S=S||!!g.dynamicChildren;const{type:O,props:A,patchFlag:I,shapeFlag:k,dirs:F}=g,U=O==="input"&&F||O==="option";if(U||I!==-1){if(F&&Ar(g,null,E,"created"),A)if(U||!S||I&48)for(const P in A)(U&&P.endsWith("value")||hc(P)&&!ol(P))&&r(v,P,null,A[P],!1,void 0,E);else A.onClick&&r(v,"onClick",null,A.onClick,!1,void 0,E);let M;if((M=A&&A.onVnodeBeforeMount)&&Nn(M,E,g),F&&Ar(g,null,E,"beforeMount"),((M=A&&A.onVnodeMounted)||F)&&Rw(()=>{M&&Nn(M,E,g),F&&Ar(g,null,E,"mounted")},b),k&16&&!(A&&(A.innerHTML||A.textContent))){let P=d(v.firstChild,g,v,E,b,T,S);for(;P;){Ii=!0;const ne=P;P=P.nextSibling,a(ne)}}else k&8&&v.textContent!==g.children&&(Ii=!0,v.textContent=g.children)}return v.nextSibling},d=(v,g,E,b,T,S,O)=>{O=O||!!g.dynamicChildren;const A=g.children,I=A.length;for(let k=0;k<I;k++){const F=O?A[k]:A[k]=Wn(A[k]);if(v)v=f(v,F,b,T,S,O);else{if(F.type===Hs&&!F.children)continue;Ii=!0,n(null,F,E,null,b,T,au(E),S)}}return v},p=(v,g,E,b,T,S)=>{const{slotScopeIds:O}=g;O&&(T=T?T.concat(O):O);const A=o(v),I=d(s(v),g,A,E,b,T,S);return I&&lu(I)&&I.data==="]"?s(g.anchor=I):(Ii=!0,l(g.anchor=c("]"),A,I),I)},m=(v,g,E,b,T,S)=>{if(Ii=!0,g.el=null,S){const I=y(v);for(;;){const k=s(v);if(k&&k!==I)a(k);else break}}const O=s(v),A=o(v);return a(v),n(null,g,A,O,E,b,au(A),T),O},y=v=>{let g=0;for(;v;)if(v=s(v),v&&lu(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return s(v);g--}return v};return[u,f]}const tn=Rw;function Jw(t){return e1(t)}function Zw(t){return e1(t,U2)}function e1(t,e){const n=Pp();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=br,insertStaticContent:p}=t,m=(_,w,C,L=null,$=null,B=null,Z=!1,X=null,Y=!!w.dynamicChildren)=>{if(_===w)return;_&&!pr(_,w)&&(L=D(_),xe(_,$,B,!0),_=null),w.patchFlag===-2&&(Y=!1,w.dynamicChildren=null);const{type:H,ref:ue,shapeFlag:se}=w;switch(H){case Hs:y(_,w,C,L);break;case vn:v(_,w,C,L);break;case Ls:_==null&&g(w,C,L,Z);break;case ht:U(_,w,C,L,$,B,Z,X,Y);break;default:se&1?T(_,w,C,L,$,B,Z,X,Y):se&6?M(_,w,C,L,$,B,Z,X,Y):(se&64||se&128)&&H.process(_,w,C,L,$,B,Z,X,Y,K)}ue!=null&&$&&df(ue,_&&_.ref,B,w||_,!w)},y=(_,w,C,L)=>{if(_==null)r(w.el=a(w.children),C,L);else{const $=w.el=_.el;w.children!==_.children&&c($,w.children)}},v=(_,w,C,L)=>{_==null?r(w.el=l(w.children||""),C,L):w.el=_.el},g=(_,w,C,L)=>{[_.el,_.anchor]=p(_.children,w,C,L,_.el,_.anchor)},E=({el:_,anchor:w},C,L)=>{let $;for(;_&&_!==w;)$=h(_),r(_,C,L),_=$;r(w,C,L)},b=({el:_,anchor:w})=>{let C;for(;_&&_!==w;)C=h(_),i(_),_=C;i(w)},T=(_,w,C,L,$,B,Z,X,Y)=>{Z=Z||w.type==="svg",_==null?S(w,C,L,$,B,Z,X,Y):I(_,w,$,B,Z,X,Y)},S=(_,w,C,L,$,B,Z,X)=>{let Y,H;const{type:ue,props:se,shapeFlag:de,transition:_e,dirs:Me}=_;if(Y=_.el=o(_.type,B,se&&se.is,se),de&8?u(Y,_.children):de&16&&A(_.children,Y,null,L,$,B&&ue!=="foreignObject",Z,X),Me&&Ar(_,null,L,"created"),O(Y,_,_.scopeId,Z,L),se){for(const qe in se)qe!=="value"&&!ol(qe)&&s(Y,qe,null,se[qe],B,_.children,L,$,Ve);"value"in se&&s(Y,"value",null,se.value),(H=se.onVnodeBeforeMount)&&Nn(H,L,_)}Me&&Ar(_,null,L,"beforeMount");const it=(!$||$&&!$.pendingBranch)&&_e&&!_e.persisted;it&&_e.beforeEnter(Y),r(Y,w,C),((H=se&&se.onVnodeMounted)||it||Me)&&tn(()=>{H&&Nn(H,L,_),it&&_e.enter(Y),Me&&Ar(_,null,L,"mounted")},$)},O=(_,w,C,L,$)=>{if(C&&d(_,C),L)for(let B=0;B<L.length;B++)d(_,L[B]);if($){let B=$.subTree;if(w===B){const Z=$.vnode;O(_,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},A=(_,w,C,L,$,B,Z,X,Y=0)=>{for(let H=Y;H<_.length;H++){const ue=_[H]=X?Pi(_[H]):Wn(_[H]);m(null,ue,w,C,L,$,B,Z,X)}},I=(_,w,C,L,$,B,Z)=>{const X=w.el=_.el;let{patchFlag:Y,dynamicChildren:H,dirs:ue}=w;Y|=_.patchFlag&16;const se=_.props||ct,de=w.props||ct;let _e;C&&gs(C,!1),(_e=de.onVnodeBeforeUpdate)&&Nn(_e,C,w,_),ue&&Ar(w,_,C,"beforeUpdate"),C&&gs(C,!0);const Me=$&&w.type!=="foreignObject";if(H?k(_.dynamicChildren,H,X,C,L,Me,B):Z||oe(_,w,X,null,C,L,Me,B,!1),Y>0){if(Y&16)F(X,w,se,de,C,L,$);else if(Y&2&&se.class!==de.class&&s(X,"class",null,de.class,$),Y&4&&s(X,"style",se.style,de.style,$),Y&8){const it=w.dynamicProps;for(let qe=0;qe<it.length;qe++){const x=it[qe],R=se[x],N=de[x];(N!==R||x==="value")&&s(X,x,R,N,$,_.children,C,L,Ve)}}Y&1&&_.children!==w.children&&u(X,w.children)}else!Z&&H==null&&F(X,w,se,de,C,L,$);((_e=de.onVnodeUpdated)||ue)&&tn(()=>{_e&&Nn(_e,C,w,_),ue&&Ar(w,_,C,"updated")},L)},k=(_,w,C,L,$,B,Z)=>{for(let X=0;X<w.length;X++){const Y=_[X],H=w[X],ue=Y.el&&(Y.type===ht||!pr(Y,H)||Y.shapeFlag&70)?f(Y.el):C;m(Y,H,ue,null,L,$,B,Z,!0)}},F=(_,w,C,L,$,B,Z)=>{if(C!==L){if(C!==ct)for(const X in C)!ol(X)&&!(X in L)&&s(_,X,C[X],null,Z,w.children,$,B,Ve);for(const X in L){if(ol(X))continue;const Y=L[X],H=C[X];Y!==H&&X!=="value"&&s(_,X,H,Y,Z,w.children,$,B,Ve)}"value"in L&&s(_,"value",C.value,L.value)}},U=(_,w,C,L,$,B,Z,X,Y)=>{const H=w.el=_?_.el:a(""),ue=w.anchor=_?_.anchor:a("");let{patchFlag:se,dynamicChildren:de,slotScopeIds:_e}=w;_e&&(X=X?X.concat(_e):_e),_==null?(r(H,C,L),r(ue,C,L),A(w.children,C,ue,$,B,Z,X,Y)):se>0&&se&64&&de&&_.dynamicChildren?(k(_.dynamicChildren,de,C,$,B,Z,X),(w.key!=null||$&&w===$.subTree)&&jg(_,w,!0)):oe(_,w,C,ue,$,B,Z,X,Y)},M=(_,w,C,L,$,B,Z,X,Y)=>{w.slotScopeIds=X,_==null?w.shapeFlag&512?$.ctx.activate(w,C,L,Z,Y):P(w,C,L,$,B,Z,Y):ne(_,w,Y)},P=(_,w,C,L,$,B,Z)=>{const X=_.component=a1(_,L,$);if(gc(_)&&(X.ctx.renderer=K),c1(X),X.asyncDep){if($&&$.registerDep(X,j),!_.el){const Y=X.subTree=fe(vn);v(null,Y,w,C)}return}j(X,_,w,C,$,B,Z)},ne=(_,w,C)=>{const L=w.component=_.component;if(HR(_,w,C))if(L.asyncDep&&!L.asyncResolved){Q(L,w,C);return}else L.next=w,LR(L.update),L.update();else w.el=_.el,L.vnode=w},j=(_,w,C,L,$,B,Z)=>{const X=()=>{if(_.isMounted){let{next:ue,bu:se,u:de,parent:_e,vnode:Me}=_,it=ue,qe;gs(_,!1),ue?(ue.el=Me.el,Q(_,ue,Z)):ue=Me,se&&Mo(se),(qe=ue.props&&ue.props.onVnodeBeforeUpdate)&&Nn(qe,_e,ue,Me),gs(_,!0);const x=Bu(_),R=_.subTree;_.subTree=x,m(R,x,f(R.el),D(R),_,$,B),ue.el=x.el,it===null&&kg(_,x.el),de&&tn(de,$),(qe=ue.props&&ue.props.onVnodeUpdated)&&tn(()=>Nn(qe,_e,ue,Me),$)}else{let ue;const{el:se,props:de}=w,{bm:_e,m:Me,parent:it}=_,qe=Ds(w);if(gs(_,!1),_e&&Mo(_e),!qe&&(ue=de&&de.onVnodeBeforeMount)&&Nn(ue,it,w),gs(_,!0),se&&je){const x=()=>{_.subTree=Bu(_),je(se,_.subTree,_,$,null)};qe?w.type.__asyncLoader().then(()=>!_.isUnmounted&&x()):x()}else{const x=_.subTree=Bu(_);m(null,x,C,L,_,$,B),w.el=x.el}if(Me&&tn(Me,$),!qe&&(ue=de&&de.onVnodeMounted)){const x=w;tn(()=>Nn(ue,it,x),$)}(w.shapeFlag&256||it&&Ds(it.vnode)&&it.vnode.shapeFlag&256)&&_.a&&tn(_.a,$),_.isMounted=!0,w=C=L=null}},Y=_.effect=new pc(X,()=>bh(H),_.scope),H=_.update=()=>Y.run();H.id=_.uid,gs(_,!0),H()},Q=(_,w,C)=>{w.component=_;const L=_.vnode.props;_.vnode=w,_.next=null,M2(_,w.props,L,C),$2(_,w.children,C),ma(),s0(),ga()},oe=(_,w,C,L,$,B,Z,X,Y=!1)=>{const H=_&&_.children,ue=_?_.shapeFlag:0,se=w.children,{patchFlag:de,shapeFlag:_e}=w;if(de>0){if(de&128){Ce(H,se,C,L,$,B,Z,X,Y);return}else if(de&256){ze(H,se,C,L,$,B,Z,X,Y);return}}_e&8?(ue&16&&Ve(H,$,B),se!==H&&u(C,se)):ue&16?_e&16?Ce(H,se,C,L,$,B,Z,X,Y):Ve(H,$,B,!0):(ue&8&&u(C,""),_e&16&&A(se,C,L,$,B,Z,X,Y))},ze=(_,w,C,L,$,B,Z,X,Y)=>{_=_||No,w=w||No;const H=_.length,ue=w.length,se=Math.min(H,ue);let de;for(de=0;de<se;de++){const _e=w[de]=Y?Pi(w[de]):Wn(w[de]);m(_[de],_e,C,null,$,B,Z,X,Y)}H>ue?Ve(_,$,B,!0,!1,se):A(w,C,L,$,B,Z,X,Y,se)},Ce=(_,w,C,L,$,B,Z,X,Y)=>{let H=0;const ue=w.length;let se=_.length-1,de=ue-1;for(;H<=se&&H<=de;){const _e=_[H],Me=w[H]=Y?Pi(w[H]):Wn(w[H]);if(pr(_e,Me))m(_e,Me,C,null,$,B,Z,X,Y);else break;H++}for(;H<=se&&H<=de;){const _e=_[se],Me=w[de]=Y?Pi(w[de]):Wn(w[de]);if(pr(_e,Me))m(_e,Me,C,null,$,B,Z,X,Y);else break;se--,de--}if(H>se){if(H<=de){const _e=de+1,Me=_e<ue?w[_e].el:L;for(;H<=de;)m(null,w[H]=Y?Pi(w[H]):Wn(w[H]),C,Me,$,B,Z,X,Y),H++}}else if(H>de)for(;H<=se;)xe(_[H],$,B,!0),H++;else{const _e=H,Me=H,it=new Map;for(H=Me;H<=de;H++){const ge=w[H]=Y?Pi(w[H]):Wn(w[H]);ge.key!=null&&it.set(ge.key,H)}let qe,x=0;const R=de-Me+1;let N=!1,W=0;const re=new Array(R);for(H=0;H<R;H++)re[H]=0;for(H=_e;H<=se;H++){const ge=_[H];if(x>=R){xe(ge,$,B,!0);continue}let Le;if(ge.key!=null)Le=it.get(ge.key);else for(qe=Me;qe<=de;qe++)if(re[qe-Me]===0&&pr(ge,w[qe])){Le=qe;break}Le===void 0?xe(ge,$,B,!0):(re[Le-Me]=H+1,Le>=W?W=Le:N=!0,m(ge,w[Le],C,null,$,B,Z,X,Y),x++)}const we=N?V2(re):No;for(qe=we.length-1,H=R-1;H>=0;H--){const ge=Me+H,Le=w[ge],St=ge+1<ue?w[ge+1].el:L;re[H]===0?m(null,Le,C,St,$,B,Z,X,Y):N&&(qe<0||H!==we[qe]?Ue(Le,C,St,2):qe--)}}},Ue=(_,w,C,L,$=null)=>{const{el:B,type:Z,transition:X,children:Y,shapeFlag:H}=_;if(H&6){Ue(_.component.subTree,w,C,L);return}if(H&128){_.suspense.move(w,C,L);return}if(H&64){Z.move(_,w,C,K);return}if(Z===ht){r(B,w,C);for(let se=0;se<Y.length;se++)Ue(Y[se],w,C,L);r(_.anchor,w,C);return}if(Z===Ls){E(_,w,C);return}if(L!==2&&H&1&&X)if(L===0)X.beforeEnter(B),r(B,w,C),tn(()=>X.enter(B),$);else{const{leave:se,delayLeave:de,afterLeave:_e}=X,Me=()=>r(B,w,C),it=()=>{se(B,()=>{Me(),_e&&_e()})};de?de(B,Me,it):it()}else r(B,w,C)},xe=(_,w,C,L=!1,$=!1)=>{const{type:B,props:Z,ref:X,children:Y,dynamicChildren:H,shapeFlag:ue,patchFlag:se,dirs:de}=_;if(X!=null&&df(X,null,C,_,!0),ue&256){w.ctx.deactivate(_);return}const _e=ue&1&&de,Me=!Ds(_);let it;if(Me&&(it=Z&&Z.onVnodeBeforeUnmount)&&Nn(it,w,_),ue&6)vt(_.component,C,L);else{if(ue&128){_.suspense.unmount(C,L);return}_e&&Ar(_,null,w,"beforeUnmount"),ue&64?_.type.remove(_,w,C,$,K,L):H&&(B!==ht||se>0&&se&64)?Ve(H,w,C,!1,!0):(B===ht&&se&384||!$&&ue&16)&&Ve(Y,w,C),L&&dt(_)}(Me&&(it=Z&&Z.onVnodeUnmounted)||_e)&&tn(()=>{it&&Nn(it,w,_),_e&&Ar(_,null,w,"unmounted")},C)},dt=_=>{const{type:w,el:C,anchor:L,transition:$}=_;if(w===ht){gt(C,L);return}if(w===Ls){b(_);return}const B=()=>{i(C),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(_.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:X}=$,Y=()=>Z(C,B);X?X(_.el,B,Y):Y()}else B()},gt=(_,w)=>{let C;for(;_!==w;)C=h(_),i(_),_=C;i(w)},vt=(_,w,C)=>{const{bum:L,scope:$,update:B,subTree:Z,um:X}=_;L&&Mo(L),$.stop(),B&&(B.active=!1,xe(Z,_,w,C)),X&&tn(X,w),tn(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ve=(_,w,C,L=!1,$=!1,B=0)=>{for(let Z=B;Z<_.length;Z++)xe(_[Z],w,C,L,$)},D=_=>_.shapeFlag&6?D(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),J=(_,w,C)=>{_==null?w._vnode&&xe(w._vnode,null,null,!0):m(w._vnode||null,_,w,null,null,null,C),s0(),ff(),w._vnode=_},K={p:m,um:xe,m:Ue,r:dt,mt:P,mc:A,pc:oe,pbc:k,n:D,o:t};let ae,je;return e&&([ae,je]=e(K)),{render:J,hydrate:ae,createApp:k2(J,ae)}}function gs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jg(t,e,n=!1){const r=t.children,i=e.children;if(le(r)&&le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Pi(i[s]),a.el=o.el),n||jg(o,a)),a.type===Hs&&(a.el=o.el)}}function V2(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const j2=t=>t.__isTeleport,cl=t=>t&&(t.disabled||t.disabled===""),v0=t=>typeof SVGElement<"u"&&t instanceof SVGElement,jp=(t,e)=>{const n=t&&t.to;return Rt(n)?e?e(n):null:n},B2={__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:p,createText:m,createComment:y}}=c,v=cl(e.props);let{shapeFlag:g,children:E,dynamicChildren:b}=e;if(t==null){const T=e.el=m(""),S=e.anchor=m("");d(T,n,r),d(S,n,r);const O=e.target=jp(e.props,p),A=e.targetAnchor=m("");O&&(d(A,O),o=o||v0(O));const I=(k,F)=>{g&16&&u(E,k,F,i,s,o,a,l)};v?I(n,S):O&&I(O,A)}else{e.el=t.el;const T=e.anchor=t.anchor,S=e.target=t.target,O=e.targetAnchor=t.targetAnchor,A=cl(t.props),I=A?n:S,k=A?T:O;if(o=o||v0(S),b?(h(t.dynamicChildren,b,I,i,s,o,a),jg(t,e,!0)):l||f(t,e,I,k,i,s,o,a,!1),v)A||cu(e,n,T,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const F=e.target=jp(e.props,p);F&&cu(e,F,null,c,0)}else A&&cu(e,S,O,c,1)}t1(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=t;if(f&&s(u),(o||!cl(h))&&(s(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];i(p,e,n,!0,!!p.dynamicChildren)}},move:cu,hydrate:H2};function cu(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&r(o,e,n),(!f||cl(u))&&l&16)for(let h=0;h<c.length;h++)i(c[h],e,n,2);f&&r(a,e,n)}function H2(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=jp(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(cl(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,r,i,s)}t1(e)}return e.anchor&&o(e.anchor)}const z2=B2;function t1(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ht=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),ul=[];let Mn=null;function Ee(t=!1){ul.push(Mn=t?null:[])}function n1(){ul.pop(),Mn=ul[ul.length-1]||null}let zs=1;function Bp(t){zs+=t}function r1(t){return t.dynamicChildren=zs>0?Mn||No:null,n1(),zs>0&&Mn&&Mn.push(t),t}function He(t,e,n,r,i,s){return r1(V(t,e,n,r,i,s,!0))}function Vn(t,e,n,r,i){return r1(fe(t,e,n,r,i,!0))}function es(t){return t?t.__v_isVNode===!0:!1}function pr(t,e){return t.type===e.type&&t.key===e.key}function W2(t){}const Ch="__vInternal",i1=({key:t})=>t??null,Hu=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||Lt(t)||Ae(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,i=null,s=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&i1(e),ref:e&&Hu(e),scopeId:_h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qt};return a?(Bg(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),zs>0&&!o&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const fe=K2;function K2(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Bw)&&(t=vn),es(t)){const a=$r(t,e,!0);return n&&Bg(a,n),zs>0&&!s&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(t)]=a:Mn.push(a)),a.patchFlag|=-2,a}if(eO(t)&&(t=t.__vccOpts),e){e=s1(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=fs(a)),ft(l)&&(Ig(l)&&!le(l)&&(l=mt({},l)),e.style=Qi(l))}const o=Rt(t)?1:xw(t)?128:j2(t)?64:ft(t)?4:Ae(t)?2:0;return V(t,e,n,r,i,o,s,!0)}function s1(t){return t?Ig(t)||Ch in t?mt({},t):t:null}function $r(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?o1(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&i1(a),ref:e&&e.ref?n&&i?le(i)?i.concat(Hu(e)):[i,Hu(e)]:Hu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$r(t.ssContent),ssFallback:t.ssFallback&&$r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function _r(t=" ",e=0){return fe(Hs,null,t,e)}function G2(t,e){const n=fe(Ls,null,t);return n.staticCount=e,n}function zn(t="",e=!1){return e?(Ee(),Vn(vn,null,t)):fe(vn,null,t)}function Wn(t){return t==null||typeof t=="boolean"?fe(vn):le(t)?fe(ht,null,t.slice()):typeof t=="object"?Pi(t):fe(Hs,null,String(t))}function Pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$r(t)}function Bg(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Bg(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ch in e)?e._ctx=qt:i===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ae(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[_r(e)]):n=8);t.children=e,t.shapeFlag|=n}function o1(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=fs([e.class,r.class]));else if(i==="style")e.style=Qi([e.style,r.style]);else if(hc(i)){const s=e[i],o=r[i];o&&s!==o&&!(le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Nn(t,e,n,r=null){Yn(t,e,7,[n,r])}const Y2=Kw();let X2=0;function a1(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Y2,s={uid:X2++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yw(r,i),emitsOptions:Aw(r,i),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:r.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$R.bind(null,s),t.ce&&t.ce(s),s}let jt=null;const Cr=()=>jt||qt;let Hg,mo,y0="__VUE_INSTANCE_SETTERS__";(mo=Pp()[y0])||(mo=Pp()[y0]=[]),mo.push(t=>jt=t),Hg=t=>{mo.length>1?mo.forEach(e=>e(t)):mo[0](t)};const ts=t=>{Hg(t),t.scope.on()},zi=()=>{jt&&jt.scope.off(),Hg(null)};function l1(t){return t.vnode.shapeFlag&4}let Qo=!1;function c1(t,e=!1){Qo=e;const{props:n,children:r}=t.vnode,i=l1(t);D2(t,n,i,e),F2(t,r);const s=i?Q2(t,e):void 0;return Qo=!1,s}function Q2(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cg(new Proxy(t.ctx,Fp));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?f1(t):null;ts(t),ma();const s=ai(r,t,0,[t.props,i]);if(ga(),zi(),bg(s)){if(s.then(zi,zi),e)return s.then(o=>{Hp(t,o,e)}).catch(o=>{io(o,t,0)});t.asyncDep=s}else Hp(t,s,e)}else u1(t,e)}function Hp(t,e,n){Ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ft(e)&&(t.setupState=Rg(e)),u1(t,n)}let pf,zp;function q2(t){pf=t,zp=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,f2))}}const J2=()=>!pf;function u1(t,e,n){const r=t.type;if(!t.render){if(!e&&pf&&!r.render){const i=r.template||Ug(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=mt(mt({isCustomElement:s,delimiters:a},o),l);r.render=pf(i,c)}}t.render=r.render||br,zp&&zp(t)}ts(t),ma(),C2(t),ga(),zi()}function Z2(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Un(t,"get","$attrs"),e[n]}}))}function f1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Z2(t)},slots:t.slots,emit:t.emit,expose:e}}function Ah(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rg(Cg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ll)return ll[n](t)},has(e,n){return n in e||n in ll}}))}function Wp(t,e=!0){return Ae(t)?t.displayName||t.name:t.name||e&&t.__name}function eO(t){return Ae(t)&&"__vccOpts"in t}const De=(t,e)=>PR(t,e,Qo);function bc(t,e,n){const r=arguments.length;return r===2?ft(e)&&!le(e)?es(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&es(n)&&(n=[n]),fe(t,e,n))}const h1=Symbol.for("v-scx"),d1=()=>Xn(h1);function tO(){}function nO(t,e,n,r){const i=n[r];if(i&&p1(i,t))return i;const s=e();return s.memo=t.slice(),n[r]=s}function p1(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(Go(n[r],e[r]))return!1;return zs>0&&Mn&&Mn.push(t),!0}const m1="3.3.2",rO={createComponentInstance:a1,setupComponent:c1,renderComponentRoot:Bu,setCurrentRenderingInstance:Ml,isVNode:es,normalizeVNode:Wn},iO=rO,sO=null,oO=null,aO="http://www.w3.org/2000/svg",Ss=typeof document<"u"?document:null,b0=Ss&&Ss.createElement("template"),lO={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ss.createElementNS(aO,t):Ss.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ss.createTextNode(t),createComment:t=>Ss.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ss.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{b0.innerHTML=r?`<svg>${t}</svg>`:t;const a=b0.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cO(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uO(t,e,n){const r=t.style,i=Rt(n);if(n&&!i){if(e&&!Rt(e))for(const s in e)n[s]==null&&Kp(r,s,"");for(const s in n)Kp(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const E0=/\s*!important$/;function Kp(t,e,n){if(le(n))n.forEach(r=>Kp(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fO(t,e);E0.test(n)?t.setProperty(rr(r),n.replace(E0,""),"important"):t[r]=n}}const _0=["Webkit","Moz","ms"],Od={};function fO(t,e){const n=Od[e];if(n)return n;let r=Fn(e);if(r!=="filter"&&r in t)return Od[e]=r;r=dc(r);for(let i=0;i<_0.length;i++){const s=_0[i]+r;if(s in t)return Od[e]=s}return e}const w0="http://www.w3.org/1999/xlink";function hO(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(w0,e.slice(6,e.length)):t.setAttributeNS(w0,e,n);else{const s=Vx(e);n==null||s&&!nw(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function dO(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=nw(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ei(t,e,n,r){t.addEventListener(e,n,r)}function pO(t,e,n,r){t.removeEventListener(e,n,r)}function mO(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=gO(e);if(r){const c=s[e]=bO(r,i);ei(t,a,c,l)}else o&&(pO(t,a,o,l),s[e]=void 0)}}const T0=/(?:Once|Passive|Capture)$/;function gO(t){let e;if(T0.test(t)){e={};let r;for(;r=t.match(T0);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rr(t.slice(2)),e]}let Pd=0;const vO=Promise.resolve(),yO=()=>Pd||(vO.then(()=>Pd=0),Pd=Date.now());function bO(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yn(EO(r,n.value),e,5,[r])};return n.value=t,n.attached=yO(),n}function EO(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const S0=/^on[a-z]/,_O=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?cO(t,r,i):e==="style"?uO(t,n,r):hc(e)?vg(e)||mO(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wO(t,e,r,i))?dO(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hO(t,e,r,i))};function wO(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&S0.test(e)&&Ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||S0.test(e)&&Rt(n)?!1:e in t}function g1(t,e){const n=va(t);class r extends xh{constructor(s){super(n,s,e)}}return r.def=n,r}const TO=t=>g1(t,P1),SO=typeof HTMLElement<"u"?HTMLElement:class{};class xh extends SO{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Yo(()=>{this._connected||(Xp(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const i of r)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(r,i=!1)=>{const{props:s,styles:o}=r;let a;if(s&&!le(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=cf(this._props[l])),(a||(a=Object.create(null)))[Fn(l)]=!0)}this._numberProps=a,i&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=le(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&r.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of r.map(Fn))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(s){this._setProp(i,s)}})}_setAttr(e){let n=this.getAttribute(e);const r=Fn(e);this._numberProps&&this._numberProps[r]&&(n=cf(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(rr(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(rr(e),n+""):n||this.removeAttribute(rr(e))))}_update(){Xp(this._createVNode(),this.shadowRoot)}_createVNode(){const e=fe(this._def,mt({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(s,o)=>{this.dispatchEvent(new CustomEvent(s,{detail:o}))};n.emit=(s,...o)=>{r(s,o),rr(s)!==s&&r(rr(s),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof xh){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function IO(t="$style"){{const e=Cr();if(!e)return ct;const n=e.type.__cssModules;if(!n)return ct;const r=n[t];return r||ct}}function CO(t){const e=Cr();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>Yp(s,i))},r=()=>{const i=t(e.proxy);Gp(e.subTree,i),n(i)};Ow(r),vc(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Ih(()=>i.disconnect())})}function Gp(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Gp(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Yp(t.el,e);else if(t.type===ht)t.children.forEach(n=>Gp(n,e));else if(t.type===Ls){let{el:n,anchor:r}=t;for(;n&&(Yp(n,e),n!==r);)n=n.nextSibling}}function Yp(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const Ci="transition",ka="animation",zg=(t,{slots:e})=>bc(kw,y1(t),e);zg.displayName="Transition";const v1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},AO=zg.props=mt({},Mg,v1),vs=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},I0=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function y1(t){const e={};for(const U in t)U in v1||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=xO(i),m=p&&p[0],y=p&&p[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:E,onLeave:b,onLeaveCancelled:T,onBeforeAppear:S=v,onAppear:O=g,onAppearCancelled:A=E}=e,I=(U,M,P)=>{Oi(U,M?u:a),Oi(U,M?c:o),P&&P()},k=(U,M)=>{U._isLeaving=!1,Oi(U,f),Oi(U,d),Oi(U,h),M&&M()},F=U=>(M,P)=>{const ne=U?O:g,j=()=>I(M,U,P);vs(ne,[M,j]),C0(()=>{Oi(M,U?l:s),Jr(M,U?u:a),I0(ne)||A0(M,r,m,j)})};return mt(e,{onBeforeEnter(U){vs(v,[U]),Jr(U,s),Jr(U,o)},onBeforeAppear(U){vs(S,[U]),Jr(U,l),Jr(U,c)},onEnter:F(!1),onAppear:F(!0),onLeave(U,M){U._isLeaving=!0;const P=()=>k(U,M);Jr(U,f),E1(),Jr(U,h),C0(()=>{U._isLeaving&&(Oi(U,f),Jr(U,d),I0(b)||A0(U,r,y,P))}),vs(b,[U,P])},onEnterCancelled(U){I(U,!1),vs(E,[U])},onAppearCancelled(U){I(U,!0),vs(A,[U])},onLeaveCancelled(U){k(U),vs(T,[U])}})}function xO(t){if(t==null)return null;if(ft(t))return[kd(t.enter),kd(t.leave)];{const e=kd(t);return[e,e]}}function kd(t){return cf(t)}function Jr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Oi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function C0(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let RO=0;function A0(t,e,n,r){const i=t._endId=++RO,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=b1(t,e);if(!o)return r();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=d=>{d.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function b1(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${Ci}Delay`),s=r(`${Ci}Duration`),o=x0(i,s),a=r(`${ka}Delay`),l=r(`${ka}Duration`),c=x0(a,l);let u=null,f=0,h=0;e===Ci?o>0&&(u=Ci,f=o,h=s.length):e===ka?c>0&&(u=ka,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ci:ka:null,h=u?u===Ci?s.length:l.length:0);const d=u===Ci&&/\b(transform|all)(,|$)/.test(r(`${Ci}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function x0(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>R0(n)+R0(t[r])))}function R0(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function E1(){return document.body.offsetHeight}const _1=new WeakMap,w1=new WeakMap,T1={name:"TransitionGroup",props:mt({},AO,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Cr(),r=Dg();let i,s;return Sh(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!MO(i[0].el,n.vnode.el,o))return;i.forEach(kO),i.forEach(NO);const a=i.filter(DO);E1(),a.forEach(l=>{const c=l.el,u=c.style;Jr(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Oi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Qe(t),a=y1(o);let l=o.tag||ht;i=s,s=e.default?wh(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Bs(u,Xo(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Bs(u,Xo(u,a,r,n)),_1.set(u,u.el.getBoundingClientRect())}return fe(l,null,s)}}},OO=t=>delete t.mode;T1.props;const PO=T1;function kO(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function NO(t){w1.set(t,t.el.getBoundingClientRect())}function DO(t){const e=_1.get(t),n=w1.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function MO(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=b1(r);return i.removeChild(r),s}const ns=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Mo(e,n):e};function LO(t){t.target.composing=!0}function O0(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ur={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=ns(i);const s=r||i.props&&i.props.type==="number";ei(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=lf(a)),t._assign(a)}),n&&ei(t,"change",()=>{t.value=t.value.trim()}),e||(ei(t,"compositionstart",LO),ei(t,"compositionend",O0),ei(t,"change",O0))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=ns(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&lf(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Wg={deep:!0,created(t,e,n){t._assign=ns(n),ei(t,"change",()=>{const r=t._modelValue,i=qo(t),s=t.checked,o=t._assign;if(le(r)){const a=dh(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(ro(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(I1(t,s))})},mounted:P0,beforeUpdate(t,e,n){t._assign=ns(n),P0(t,e,n)}};function P0(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=dh(e,r.props.value)>-1:ro(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=qi(e,I1(t,!0)))}const Kg={created(t,{value:e},n){t.checked=qi(e,n.props.value),t._assign=ns(n),ei(t,"change",()=>{t._assign(qo(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=ns(r),e!==n&&(t.checked=qi(e,r.props.value))}},S1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=ro(e);ei(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?lf(qo(o)):qo(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=ns(r)},mounted(t,{value:e}){k0(t,e)},beforeUpdate(t,e,n){t._assign=ns(n)},updated(t,{value:e}){k0(t,e)}};function k0(t,e){const n=t.multiple;if(!(n&&!le(e)&&!ro(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=qo(s);if(n)le(e)?s.selected=dh(e,o)>-1:s.selected=e.has(o);else if(qi(qo(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qo(t){return"_value"in t?t._value:t.value}function I1(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Vl={created(t,e,n){uu(t,e,n,null,"created")},mounted(t,e,n){uu(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){uu(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){uu(t,e,n,r,"updated")}};function C1(t,e){switch(t){case"SELECT":return S1;case"TEXTAREA":return Ur;default:switch(e){case"checkbox":return Wg;case"radio":return Kg;default:return Ur}}}function uu(t,e,n,r,i){const o=C1(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}function FO(){Ur.getSSRProps=({value:t})=>({value:t}),Kg.getSSRProps=({value:t},e)=>{if(e.props&&qi(e.props.value,t))return{checked:!0}},Wg.getSSRProps=({value:t},e)=>{if(le(t)){if(e.props&&dh(t,e.props.value)>-1)return{checked:!0}}else if(ro(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Vl.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=C1(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const $O=["ctrl","shift","alt","meta"],UO={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$O.some(n=>t[`${n}Key`]&&!e.includes(n))},Bt=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=UO[e[i]];if(s&&s(n,e))return}return t(n,...r)},VO={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jO=(t,e)=>n=>{if(!("key"in n))return;const r=rr(n.key);if(e.some(i=>i===r||VO[i]===r))return t(n)},A1={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Na(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Na(t,!0),r.enter(t)):r.leave(t,()=>{Na(t,!1)}):Na(t,e))},beforeUnmount(t,{value:e}){Na(t,e)}};function Na(t,e){t.style.display=e?t._vod:"none"}function BO(){A1.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const x1=mt({patchProp:_O},lO);let fl,N0=!1;function R1(){return fl||(fl=Jw(x1))}function O1(){return fl=N0?fl:Zw(x1),N0=!0,fl}const Xp=(...t)=>{R1().render(...t)},P1=(...t)=>{O1().hydrate(...t)},k1=(...t)=>{const e=R1().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=N1(r);if(!i)return;const s=e._component;!Ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},HO=(...t)=>{const e=O1().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=N1(r);if(i)return n(i,!0,i instanceof SVGElement)},e};function N1(t){return Rt(t)?document.querySelector(t):t}let D0=!1;const zO=()=>{D0||(D0=!0,FO(),BO())},WO=()=>{},KO=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:kw,BaseTransitionPropsValidators:Mg,Comment:vn,EffectScope:_g,Fragment:ht,KeepAlive:r2,ReactiveEffect:pc,Static:Ls,Suspense:WR,Teleport:z2,Text:Hs,Transition:zg,TransitionGroup:PO,VueElement:xh,assertNumber:NR,callWithAsyncErrorHandling:Yn,callWithErrorHandling:ai,camelize:Fn,capitalize:dc,cloneVNode:$r,compatUtils:oO,compile:WO,computed:De,createApp:k1,createBlock:Vn,createCommentVNode:zn,createElementBlock:He,createElementVNode:V,createHydrationRenderer:Zw,createPropsRestProxy:S2,createRenderer:Jw,createSSRApp:HO,createSlots:l2,createStaticVNode:G2,createTextVNode:_r,createVNode:fe,customRef:IR,defineAsyncComponent:t2,defineComponent:va,defineCustomElement:g1,defineEmits:d2,defineExpose:p2,defineModel:v2,defineOptions:m2,defineProps:h2,defineSSRCustomElement:TO,defineSlots:g2,get devtools(){return _o},effect:Wx,effectScope:iw,getCurrentInstance:Cr,getCurrentScope:ow,getTransitionRawChildren:wh,guardReactiveProps:s1,h:bc,handleError:io,hasInjectionContext:N2,hydrate:P1,initCustomFormatter:tO,initDirectivesForSSR:zO,inject:Xn,isMemoSame:p1,isProxy:Ig,isReactive:Hi,isReadonly:Zi,isRef:Lt,isRuntimeOnly:J2,isShallow:Pl,isVNode:es,markRaw:Cg,mergeDefaults:w2,mergeModels:T2,mergeProps:o1,nextTick:Yo,normalizeClass:fs,normalizeProps:$x,normalizeStyle:Qi,onActivated:Dw,onBeforeMount:Lg,onBeforeUnmount:yc,onBeforeUpdate:Fw,onDeactivated:Mw,onErrorCaptured:jw,onMounted:vc,onRenderTracked:Vw,onRenderTriggered:Uw,onScopeDispose:Bx,onServerPrefetch:$w,onUnmounted:Ih,onUpdated:Sh,openBlock:Ee,popScopeId:Yr,provide:Ms,proxyRefs:Rg,pushScopeId:Gr,queuePostFlushCb:Pg,reactive:Kr,readonly:Sg,ref:Ge,registerRuntimeCompiler:q2,render:Xp,renderList:Fl,renderSlot:c2,resolveComponent:Jn,resolveDirective:a2,resolveDynamicComponent:o2,resolveFilter:sO,resolveTransitionHooks:Xo,setBlockTracking:Bp,setDevtoolsHook:Cw,setTransitionHooks:Bs,shallowReactive:bw,shallowReadonly:bR,shallowRef:Ew,ssrContextKey:h1,ssrUtils:iO,stop:Kx,toDisplayString:In,toHandlerKey:al,toHandlers:u2,toRaw:Qe,toRef:RR,toRefs:CR,toValue:wR,transformVNodeArgs:W2,triggerRef:_R,unref:ye,useAttrs:E2,useCssModule:IO,useCssVars:CO,useModel:_2,useSSRContext:d1,useSlots:b2,useTransitionState:Dg,vModelCheckbox:Wg,vModelDynamic:Vl,vModelRadio:Kg,vModelSelect:S1,vModelText:Ur,vShow:A1,version:m1,warn:kR,watch:$n,watchEffect:qR,watchPostEffect:Ow,watchSyncEffect:JR,withAsyncContext:I2,withCtx:fi,withDefaults:y2,withDirectives:Nr,withKeys:jO,withMemo:nO,withModifiers:Bt,withScopeId:UR},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const wo=typeof window<"u";function GO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const at=Object.assign;function Nd(t,e){const n={};for(const r in e){const i=e[r];n[r]=wr(i)?i.map(t):t(i)}return n}const hl=()=>{},wr=Array.isArray,YO=/\/$/,XO=t=>t.replace(YO,"");function Dd(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ZO(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function QO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function M0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qO(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Jo(e.matched[r],n.matched[i])&&D1(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function D1(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JO(t[n],e[n]))return!1;return!0}function JO(t,e){return wr(t)?L0(t,e):wr(e)?L0(e,t):t===e}function L0(t,e){return wr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var jl;(function(t){t.pop="pop",t.push="push"})(jl||(jl={}));var dl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(dl||(dl={}));function eP(t){if(!t)if(wo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XO(t)}const tP=/^[^#]+#/;function nP(t,e){return t.replace(tP,"#")+e}function rP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rh=()=>({left:window.pageXOffset,top:window.pageYOffset});function iP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=rP(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function F0(t,e){return(history.state?history.state.position-e:-1)+t}const Qp=new Map;function sP(t,e){Qp.set(t,e)}function oP(t){const e=Qp.get(t);return Qp.delete(t),e}let aP=()=>location.protocol+"//"+location.host;function M1(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),M0(l,"")}return M0(n,t)+r+i}function lP(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const d=M1(t,location),p=n.value,m=e.value;let y=0;if(h){if(n.value=d,e.value=h,o&&o===p){o=null;return}y=m?h.position-m.position:0}else r(d);i.forEach(v=>{v(n.value,p,{delta:y,type:jl.pop,direction:y?y>0?dl.forward:dl.back:dl.unknown})})};function l(){o=n.value}function c(h){i.push(h);const d=()=>{const p=i.indexOf(h);p>-1&&i.splice(p,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(at({},h.state,{scroll:Rh()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function $0(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Rh():null}}function cP(t){const{history:e,location:n}=window,r={value:M1(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:aP()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(l,c){const u=at({},e.state,$0(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=at({},i.value,e.state,{forward:l,scroll:Rh()});s(u.current,u,!0);const f=at({},$0(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function uP(t){t=eP(t);const e=cP(t),n=lP(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=at({location:"",base:t,go:r,createHref:nP.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function fP(t){return typeof t=="string"||t&&typeof t=="object"}function L1(t){return typeof t=="string"||typeof t=="symbol"}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F1=Symbol("");var U0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(U0||(U0={}));function Zo(t,e){return at(new Error,{type:t,[F1]:!0},e)}function qr(t,e){return t instanceof Error&&F1 in t&&(e==null||!!(t.type&e))}const V0="[^/]+?",hP={sensitive:!1,strict:!1,start:!0,end:!0},dP=/[.+*?^${}()[\]/\\]/g;function pP(t,e){const n=at({},hP,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(dP,"\\$&"),d+=40;else if(h.type===1){const{value:p,repeatable:m,optional:y,regexp:v}=h;s.push({name:p,repeatable:m,optional:y});const g=v||V0;if(g!==V0){d+=10;try{new RegExp(`(${g})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${p}" (${g}): `+b.message)}}let E=m?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),i+=E,d+=20,y&&(d+=-8),m&&(d+=-20),g===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",p=s[h-1];f[p.name]=d&&p.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:y}=d,v=p in c?c[p]:"";if(wr(v)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const g=wr(v)?v.join("/"):v;if(!g)if(y)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${p}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function mP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gP(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=mP(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(j0(r))return 1;if(j0(i))return-1}return i.length-r.length}function j0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vP={type:0,value:""},yP=/[a-zA-Z0-9_]/;function bP(t){if(!t)return[[]];if(t==="/")return[[vP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:yP.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function EP(t,e,n){const r=pP(bP(t.path),n),i=at(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function _P(t,e){const n=[],r=new Map;e=z0({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,h){const d=!h,p=wP(u);p.aliasOf=h&&h.record;const m=z0(e,u),y=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of E)y.push(at({},p,{components:h?h.record.components:p.components,path:b,aliasOf:h?h.record:p}))}let v,g;for(const E of y){const{path:b}=E;if(f&&b[0]!=="/"){const T=f.record.path,S=T[T.length-1]==="/"?"":"/";E.path=f.record.path+(b&&S+b)}if(v=EP(E,f,m),h?h.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),d&&u.name&&!H0(v)&&o(u.name)),p.children){const T=p.children;for(let S=0;S<T.length;S++)s(T[S],v,h&&h.children[S])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return g?()=>{o(g)}:hl}function o(u){if(L1(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&gP(u,n[f])>=0&&(u.record.path!==n[f].record.path||!$1(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!H0(u)&&r.set(u.record.name,u)}function c(u,f){let h,d={},p,m;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Zo(1,{location:u});m=h.record.name,d=at(B0(f.params,h.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&B0(u.params,h.keys.map(g=>g.name))),p=h.stringify(d)}else if("path"in u)p=u.path,h=n.find(g=>g.re.test(p)),h&&(d=h.parse(p),m=h.record.name);else{if(h=f.name?r.get(f.name):n.find(g=>g.re.test(f.path)),!h)throw Zo(1,{location:u,currentLocation:f});m=h.record.name,d=at({},f.params,u.params),p=h.stringify(d)}const y=[];let v=h;for(;v;)y.unshift(v.record),v=v.parent;return{name:m,path:p,params:d,matched:y,meta:SP(y)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function B0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:TP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function TP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function H0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SP(t){return t.reduce((e,n)=>at(e,n.meta),{})}function z0(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $1(t,e){return e.children.some(n=>n===t||$1(t,n))}const U1=/#/g,IP=/&/g,CP=/\//g,AP=/=/g,xP=/\?/g,V1=/\+/g,RP=/%5B/g,OP=/%5D/g,j1=/%5E/g,PP=/%60/g,B1=/%7B/g,kP=/%7C/g,H1=/%7D/g,NP=/%20/g;function Gg(t){return encodeURI(""+t).replace(kP,"|").replace(RP,"[").replace(OP,"]")}function DP(t){return Gg(t).replace(B1,"{").replace(H1,"}").replace(j1,"^")}function qp(t){return Gg(t).replace(V1,"%2B").replace(NP,"+").replace(U1,"%23").replace(IP,"%26").replace(PP,"`").replace(B1,"{").replace(H1,"}").replace(j1,"^")}function MP(t){return qp(t).replace(AP,"%3D")}function LP(t){return Gg(t).replace(U1,"%23").replace(xP,"%3F")}function FP(t){return t==null?"":LP(t).replace(CP,"%2F")}function mf(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $P(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(V1," "),o=s.indexOf("="),a=mf(o<0?s:s.slice(0,o)),l=o<0?null:mf(s.slice(o+1));if(a in e){let c=e[a];wr(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function W0(t){let e="";for(let n in t){const r=t[n];if(n=MP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wr(r)?r.map(s=>s&&qp(s)):[r&&qp(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function UP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const VP=Symbol(""),K0=Symbol(""),Yg=Symbol(""),z1=Symbol(""),Jp=Symbol("");function Da(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ki(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Zo(4,{from:n,to:e})):f instanceof Error?a(f):fP(f)?a(Zo(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Md(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jP(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ki(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=GO(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&ki(h,n,r,s,o)()}))}}return i}function jP(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function G0(t){const e=Xn(Yg),n=Xn(z1),r=De(()=>e.resolve(ye(t.to))),i=De(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Jo.bind(null,u));if(h>-1)return h;const d=Y0(l[c-2]);return c>1&&Y0(u)===d&&f[f.length-1].path!==d?f.findIndex(Jo.bind(null,l[c-2])):h}),s=De(()=>i.value>-1&&WP(n.params,r.value.params)),o=De(()=>i.value>-1&&i.value===n.matched.length-1&&D1(n.params,r.value.params));function a(l={}){return zP(l)?e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(hl):Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const BP=va({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:G0,setup(t,{slots:e}){const n=Kr(G0(t)),{options:r}=Xn(Yg),i=De(()=>({[X0(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[X0(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),HP=BP;function zP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WP(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!wr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Y0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const X0=(t,e,n)=>t??e??n,KP=va({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xn(Jp),i=De(()=>t.route||r.value),s=Xn(K0,0),o=De(()=>{let c=ye(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=De(()=>i.value.matched[o.value]);Ms(K0,De(()=>o.value+1)),Ms(VP,a),Ms(Jp,i);const l=Ge();return $n(()=>[l.value,a.value,t.name],([c,u,f],[h,d,p])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Jo(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Q0(n.default,{Component:h,route:c});const d=f.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=bc(h,at({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Q0(n.default,{Component:y,route:c})||y}}});function Q0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const W1=KP;function GP(t){const e=_P(t.routes,t),n=t.parseQuery||$P,r=t.stringifyQuery||W0,i=t.history,s=Da(),o=Da(),a=Da(),l=Ew(Ai);let c=Ai;wo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nd.bind(null,D=>""+D),f=Nd.bind(null,FP),h=Nd.bind(null,mf);function d(D,J){let K,ae;return L1(D)?(K=e.getRecordMatcher(D),ae=J):ae=D,e.addRoute(ae,K)}function p(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function m(){return e.getRoutes().map(D=>D.record)}function y(D){return!!e.getRecordMatcher(D)}function v(D,J){if(J=at({},J||l.value),typeof D=="string"){const C=Dd(n,D,J.path),L=e.resolve({path:C.path},J),$=i.createHref(C.fullPath);return at(C,L,{params:h(L.params),hash:mf(C.hash),redirectedFrom:void 0,href:$})}let K;if("path"in D)K=at({},D,{path:Dd(n,D.path,J.path).path});else{const C=at({},D.params);for(const L in C)C[L]==null&&delete C[L];K=at({},D,{params:f(C)}),J.params=f(J.params)}const ae=e.resolve(K,J),je=D.hash||"";ae.params=u(h(ae.params));const _=QO(r,at({},D,{hash:DP(je),path:ae.path})),w=i.createHref(_);return at({fullPath:_,hash:je,query:r===W0?UP(D.query):D.query||{}},ae,{redirectedFrom:void 0,href:w})}function g(D){return typeof D=="string"?Dd(n,D,l.value.path):at({},D)}function E(D,J){if(c!==D)return Zo(8,{from:J,to:D})}function b(D){return O(D)}function T(D){return b(at(g(D),{replace:!0}))}function S(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:K}=J;let ae=typeof K=="function"?K(D):K;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=g(ae):{path:ae},ae.params={}),at({query:D.query,hash:D.hash,params:"path"in ae?{}:D.params},ae)}}function O(D,J){const K=c=v(D),ae=l.value,je=D.state,_=D.force,w=D.replace===!0,C=S(K);if(C)return O(at(g(C),{state:typeof C=="object"?at({},je,C.state):je,force:_,replace:w}),J||K);const L=K;L.redirectedFrom=J;let $;return!_&&qO(r,ae,K)&&($=Zo(16,{to:L,from:ae}),Ue(ae,ae,!0,!1)),($?Promise.resolve($):k(L,ae)).catch(B=>qr(B)?qr(B,2)?B:Ce(B):oe(B,L,ae)).then(B=>{if(B){if(qr(B,2))return O(at({replace:w},g(B.to),{state:typeof B.to=="object"?at({},je,B.to.state):je,force:_}),J||L)}else B=U(L,ae,!0,w,je);return F(L,ae,B),B})}function A(D,J){const K=E(D,J);return K?Promise.reject(K):Promise.resolve()}function I(D){const J=gt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function k(D,J){let K;const[ae,je,_]=YP(D,J);K=Md(ae.reverse(),"beforeRouteLeave",D,J);for(const C of ae)C.leaveGuards.forEach(L=>{K.push(ki(L,D,J))});const w=A.bind(null,D,J);return K.push(w),Ve(K).then(()=>{K=[];for(const C of s.list())K.push(ki(C,D,J));return K.push(w),Ve(K)}).then(()=>{K=Md(je,"beforeRouteUpdate",D,J);for(const C of je)C.updateGuards.forEach(L=>{K.push(ki(L,D,J))});return K.push(w),Ve(K)}).then(()=>{K=[];for(const C of D.matched)if(C.beforeEnter&&!J.matched.includes(C))if(wr(C.beforeEnter))for(const L of C.beforeEnter)K.push(ki(L,D,J));else K.push(ki(C.beforeEnter,D,J));return K.push(w),Ve(K)}).then(()=>(D.matched.forEach(C=>C.enterCallbacks={}),K=Md(_,"beforeRouteEnter",D,J),K.push(w),Ve(K))).then(()=>{K=[];for(const C of o.list())K.push(ki(C,D,J));return K.push(w),Ve(K)}).catch(C=>qr(C,8)?C:Promise.reject(C))}function F(D,J,K){for(const ae of a.list())I(()=>ae(D,J,K))}function U(D,J,K,ae,je){const _=E(D,J);if(_)return _;const w=J===Ai,C=wo?history.state:{};K&&(ae||w?i.replace(D.fullPath,at({scroll:w&&C&&C.scroll},je)):i.push(D.fullPath,je)),l.value=D,Ue(D,J,K,w),Ce()}let M;function P(){M||(M=i.listen((D,J,K)=>{if(!vt.listening)return;const ae=v(D),je=S(ae);if(je){O(at(je,{replace:!0}),ae).catch(hl);return}c=ae;const _=l.value;wo&&sP(F0(_.fullPath,K.delta),Rh()),k(ae,_).catch(w=>qr(w,12)?w:qr(w,2)?(O(w.to,ae).then(C=>{qr(C,20)&&!K.delta&&K.type===jl.pop&&i.go(-1,!1)}).catch(hl),Promise.reject()):(K.delta&&i.go(-K.delta,!1),oe(w,ae,_))).then(w=>{w=w||U(ae,_,!1),w&&(K.delta&&!qr(w,8)?i.go(-K.delta,!1):K.type===jl.pop&&qr(w,20)&&i.go(-1,!1)),F(ae,_,w)}).catch(hl)}))}let ne=Da(),j=Da(),Q;function oe(D,J,K){Ce(D);const ae=j.list();return ae.length?ae.forEach(je=>je(D,J,K)):console.error(D),Promise.reject(D)}function ze(){return Q&&l.value!==Ai?Promise.resolve():new Promise((D,J)=>{ne.add([D,J])})}function Ce(D){return Q||(Q=!D,P(),ne.list().forEach(([J,K])=>D?K(D):J()),ne.reset()),D}function Ue(D,J,K,ae){const{scrollBehavior:je}=t;if(!wo||!je)return Promise.resolve();const _=!K&&oP(F0(D.fullPath,0))||(ae||!K)&&history.state&&history.state.scroll||null;return Yo().then(()=>je(D,J,_)).then(w=>w&&iP(w)).catch(w=>oe(w,D,J))}const xe=D=>i.go(D);let dt;const gt=new Set,vt={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:y,getRoutes:m,resolve:v,options:t,push:b,replace:T,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:ze,install(D){const J=this;D.component("RouterLink",HP),D.component("RouterView",W1),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(l)}),wo&&!dt&&l.value===Ai&&(dt=!0,b(i.location).catch(je=>{}));const K={};for(const je in Ai)K[je]=De(()=>l.value[je]);D.provide(Yg,J),D.provide(z1,Kr(K)),D.provide(Jp,l);const ae=D.unmount;gt.add(D),D.unmount=function(){gt.delete(D),gt.size<1&&(c=Ai,M&&M(),M=null,l.value=Ai,dt=!1,Q=!1),ae()}}};function Ve(D){return D.reduce((J,K)=>J.then(()=>I(K)),Promise.resolve())}return vt}function YP(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Jo(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Jo(c,l))||i.push(l))}return[n,r,i]}const XP={__name:"App",setup(t){return(e,n)=>(Ee(),Vn(ye(W1)))}};/**
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
 */const K1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ee=function(t,e){if(!t)throw ya(e)},ya=function(t){return new Error("Firebase Database ("+K1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const G1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(h=64)),r.push(n[u],n[f],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new qP;const h=s<<2|a>>4;if(r.push(h),c!==64){const d=a<<4&240|c>>2;if(r.push(d),f!==64){const p=c<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y1=function(t){const e=G1(t);return Oh.encodeByteArray(e,!0)},gf=function(t){return Y1(t).replace(/\./g,"")},vf=function(t){try{return Oh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JP(t){return X1(void 0,t)}function X1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZP(n)||(t[n]=X1(t[n],e[n]));return t}function ZP(t){return t!=="__proto__"}/**
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
 */function ek(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tk=()=>ek().__FIREBASE_DEFAULTS__,nk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vf(t[1]);return e&&JSON.parse(e)},Xg=()=>{try{return tk()||nk()||rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q1=t=>{var e,n;return(n=(e=Xg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ik=t=>{const e=Q1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},q1=()=>{var t;return(t=Xg())===null||t===void 0?void 0:t.config},J1=t=>{var e;return(e=Xg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gf(JSON.stringify(n)),gf(JSON.stringify(o)),a].join(".")}/**
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
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function ok(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ak(){const t=_n();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eT(){return K1.NODE_ADMIN===!0}function tT(){try{return typeof indexedDB=="object"}catch{return!1}}function lk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ck="FirebaseError";class Xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ck,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xr(i,a,r)}}function uk(t,e){return t.replace(fk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fk=/\{\$([^}]+)}/g;/**
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
 */function Hl(t){return JSON.parse(t)}function sn(t){return JSON.stringify(t)}/**
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
 */const nT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Hl(vf(s[0])||""),n=Hl(vf(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},hk=function(t){const e=nT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dk=function(t){const e=nT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ea(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yf(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function bf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(q0(s)&&q0(o)){if(!bf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class pk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mk(t,e){const n=new gk(t,e);return n.subscribe.bind(n)}class gk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ld),i.error===void 0&&(i.error=Ld),i.complete===void 0&&(i.complete=Ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}function yk(t,e){return`${t} failed: ${e} argument `}/**
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
 */const bk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,ee(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ph=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Wt(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class Ek{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wk(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_k(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _k(t){return t===Es?void 0:t}function wk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ek(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(rt||(rt={}));const Sk={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},Ik=rt.INFO,Ck={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},Ak=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ck[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=Ik,this._logHandler=Ak,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in rt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...e),this._logHandler(this,rt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...e),this._logHandler(this,rt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...e),this._logHandler(this,rt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...e),this._logHandler(this,rt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...e),this._logHandler(this,rt.ERROR,...e)}}const xk=(t,e)=>e.some(n=>t instanceof n);let J0,Z0;function Rk(){return J0||(J0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ok(){return Z0||(Z0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,em=new WeakMap,iT=new WeakMap,Fd=new WeakMap,qg=new WeakMap;function Pk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rT.set(n,t)}).catch(()=>{}),qg.set(e,t),e}function kk(t){if(em.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});em.set(t,e)}let tm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return em.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nk(t){tm=t(tm)}function Dk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($d(this),e,...n);return iT.set(r,e.sort?e.sort():[e]),Wi(r)}:Ok().includes(t)?function(...e){return t.apply($d(this),e),Wi(rT.get(this))}:function(...e){return Wi(t.apply($d(this),e))}}function Mk(t){return typeof t=="function"?Dk(t):(t instanceof IDBTransaction&&kk(t),xk(t,Rk())?new Proxy(t,tm):t)}function Wi(t){if(t instanceof IDBRequest)return Pk(t);if(Fd.has(t))return Fd.get(t);const e=Mk(t);return e!==t&&(Fd.set(t,e),qg.set(e,t)),e}const $d=t=>qg.get(t);function Lk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wi(o.result),l.oldVersion,l.newVersion,Wi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Fk=["get","getKey","getAll","getAllKeys","count"],$k=["put","add","delete","clear"],Ud=new Map;function eb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ud.set(e,s),s}Nk(t=>({...t,get:(e,n,r)=>eb(e,n)||t.get(e,n,r),has:(e,n)=>!!eb(e,n)||t.has(e,n)}));/**
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
 */class Uk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nm="@firebase/app",tb="0.9.10";/**
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
 */const Ws=new Ec("@firebase/app"),jk="@firebase/app-compat",Bk="@firebase/analytics-compat",Hk="@firebase/analytics",zk="@firebase/app-check-compat",Wk="@firebase/app-check",Kk="@firebase/auth",Gk="@firebase/auth-compat",Yk="@firebase/database",Xk="@firebase/database-compat",Qk="@firebase/functions",qk="@firebase/functions-compat",Jk="@firebase/installations",Zk="@firebase/installations-compat",eN="@firebase/messaging",tN="@firebase/messaging-compat",nN="@firebase/performance",rN="@firebase/performance-compat",iN="@firebase/remote-config",sN="@firebase/remote-config-compat",oN="@firebase/storage",aN="@firebase/storage-compat",lN="@firebase/firestore",cN="@firebase/firestore-compat",uN="firebase",fN="9.22.0";/**
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
 */const rm="[DEFAULT]",hN={[nm]:"fire-core",[jk]:"fire-core-compat",[Hk]:"fire-analytics",[Bk]:"fire-analytics-compat",[Wk]:"fire-app-check",[zk]:"fire-app-check-compat",[Kk]:"fire-auth",[Gk]:"fire-auth-compat",[Yk]:"fire-rtdb",[Xk]:"fire-rtdb-compat",[Qk]:"fire-fn",[qk]:"fire-fn-compat",[Jk]:"fire-iid",[Zk]:"fire-iid-compat",[eN]:"fire-fcm",[tN]:"fire-fcm-compat",[nN]:"fire-perf",[rN]:"fire-perf-compat",[iN]:"fire-rc",[sN]:"fire-rc-compat",[oN]:"fire-gcs",[aN]:"fire-gcs-compat",[lN]:"fire-fst",[cN]:"fire-fst-compat","fire-js":"fire-js",[uN]:"fire-js-all"};/**
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
 */const Ef=new Map,im=new Map;function dN(t,e){try{t.container.addComponent(e)}catch(n){Ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(im.has(e))return Ws.debug(`There were multiple attempts to register component ${e}.`),!1;im.set(e,t);for(const n of Ef.values())dN(n,t);return!0}function Jg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ki=new ba("app","Firebase",pN);/**
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
 */class mN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ki.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=fN;function sT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ki.create("bad-app-name",{appName:String(i)});if(n||(n=q1()),!n)throw Ki.create("no-options");const s=Ef.get(i);if(s){if(bf(n,s.options)&&bf(r,s.config))return s;throw Ki.create("duplicate-app",{appName:i})}const o=new Tk(i);for(const l of im.values())o.addComponent(l);const a=new mN(n,r,o);return Ef.set(i,a),a}function Zg(t=rm){const e=Ef.get(t);if(!e&&t===rm&&q1())return sT();if(!e)throw Ki.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let i=(r=hN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ws.warn(a.join(" "));return}Vr(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gN="firebase-heartbeat-database",vN=1,zl="firebase-heartbeat-store";let Vd=null;function oT(){return Vd||(Vd=Lk(gN,vN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zl)}}}).catch(t=>{throw Ki.create("idb-open",{originalErrorMessage:t.message})})),Vd}async function yN(t){try{return await(await oT()).transaction(zl).objectStore(zl).get(aT(t))}catch(e){if(e instanceof Xr)Ws.warn(e.message);else{const n=Ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ws.warn(n.message)}}}async function nb(t,e){try{const r=(await oT()).transaction(zl,"readwrite");await r.objectStore(zl).put(e,aT(t)),await r.done}catch(n){if(n instanceof Xr)Ws.warn(n.message);else{const r=Ki.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ws.warn(r.message)}}}function aT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bN=1024,EN=30*24*60*60*1e3;class _N{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rb();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=EN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rb(),{heartbeatsToSend:n,unsentEntries:r}=wN(this._heartbeatsCache.heartbeats),i=gf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rb(){return new Date().toISOString().substring(0,10)}function wN(t,e=bN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ib(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ib(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tT()?lk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ib(t){return gf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SN(t){Vr(new Tr("platform-logger",e=>new Uk(e),"PRIVATE")),Vr(new Tr("heartbeat",e=>new _N(e),"PRIVATE")),Qn(nm,tb,t),Qn(nm,tb,"esm2017"),Qn("fire-js","")}SN("");function ev(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IN=lT,cT=new ba("auth","Firebase",lT());/**
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
 */const _f=new Ec("@firebase/auth");function CN(t,...e){_f.logLevel<=rt.WARN&&_f.warn(`Auth (${hs}): ${t}`,...e)}function zu(t,...e){_f.logLevel<=rt.ERROR&&_f.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Sr(t,...e){throw tv(t,...e)}function Dr(t,...e){return tv(t,...e)}function AN(t,e,n){const r=Object.assign(Object.assign({},IN()),{[e]:n});return new ba("auth","Firebase",r).create(e,{appName:t.name})}function tv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cT.create(t,...e)}function Se(t,e,...n){if(!t)throw tv(e,...n)}function ni(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zu(e),new Error(e)}function hi(t,e){t||ni(e)}/**
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
 */function sm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xN(){return sb()==="http:"||sb()==="https:"}function sb(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xN()||ok()||"connection"in navigator)?navigator.onLine:!0}function ON(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _c{constructor(e,n){this.shortDelay=e,this.longDelay=n,hi(n>e,"Short delay should be less than long delay!"),this.isMobile=Qg()||Z1()}get(){return RN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nv(t,e){hi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ni("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ni("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ni("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kN=new _c(3e4,6e4);function so(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oo(t,e,n,r,i={}){return fT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ea(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uT.fetch()(hT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function fT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PN),e);try{const i=new NN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fu(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw AN(t,u,c);Sr(t,u)}}catch(i){if(i instanceof Xr)throw i;Sr(t,"network-request-failed",{message:String(i)})}}async function wc(t,e,n,r,i={}){const s=await oo(t,e,n,r,i);return"mfaPendingCredential"in s&&Sr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nv(t.config,i):`${t.config.apiScheme}://${i}`}class NN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dr(this.auth,"network-request-failed")),kN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dr(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function DN(t,e){return oo(t,"POST","/v1/accounts:delete",e)}async function MN(t,e){return oo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LN(t,e=!1){const n=Wt(t),r=await n.getIdToken(e),i=rv(r);Se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pl(jd(i.auth_time)),issuedAtTime:pl(jd(i.iat)),expirationTime:pl(jd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jd(t){return Number(t)*1e3}function rv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=vf(n);return i?JSON.parse(i):(zu("Failed to decode base64 JWT payload"),null)}catch(i){return zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function FN(t){const e=rv(t);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xr&&$N(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $N({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wf(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wl(t,MN(n,{idToken:r}));Se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BN(s.providerUserInfo):[],a=jN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dT(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function VN(t){const e=Wt(t);await wf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BN(t){return t.map(e=>{var{providerId:n}=e,r=ev(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HN(t,e){const n=await fT(t,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Kl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Kl;return r&&(Se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kl,this.toJSON())}_performRefresh(){return ni("not implemented")}}/**
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
 */function xi(t,e){Se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ev(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wl(this,this.stsTokenManager.getToken(this.auth,e));return Se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LN(this,e)}reload(){return VN(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wl(this,DN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:b,isAnonymous:T,providerData:S,stsTokenManager:O}=n;Se(E&&O,e,"internal-error");const A=Kl.fromJSON(this.name,O);Se(typeof E=="string",e,"internal-error"),xi(f,e.name),xi(h,e.name),Se(typeof b=="boolean",e,"internal-error"),Se(typeof T=="boolean",e,"internal-error"),xi(d,e.name),xi(p,e.name),xi(m,e.name),xi(y,e.name),xi(v,e.name),xi(g,e.name);const I=new Fs({uid:E,auth:e,email:h,emailVerified:b,displayName:f,isAnonymous:T,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:A,createdAt:v,lastLoginAt:g});return S&&Array.isArray(S)&&(I.providerData=S.map(k=>Object.assign({},k))),y&&(I._redirectEventId=y),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Kl;i.updateFromServerResponse(n);const s=new Fs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wf(s),s}}/**
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
 */const ob=new Map;function ri(t){hi(t instanceof Function,"Expected a class definition");let e=ob.get(t);return e?(hi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ob.set(t,e),e)}/**
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
 */class pT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pT.type="NONE";const ab=pT;/**
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
 */function Wu(t,e,n){return`firebase:${t}:${e}:${n}`}class $o{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $o(ri(ab),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ri(ab);const o=Wu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Fs._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $o(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $o(s,e,r))}}/**
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
 */function lb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bT(e))return"Blackberry";if(ET(e))return"Webos";if(iv(e))return"Safari";if((e.includes("chrome/")||gT(e))&&!e.includes("edge/"))return"Chrome";if(yT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mT(t=_n()){return/firefox\//i.test(t)}function iv(t=_n()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gT(t=_n()){return/crios\//i.test(t)}function vT(t=_n()){return/iemobile/i.test(t)}function yT(t=_n()){return/android/i.test(t)}function bT(t=_n()){return/blackberry/i.test(t)}function ET(t=_n()){return/webos/i.test(t)}function kh(t=_n()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zN(t=_n()){var e;return kh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WN(){return ak()&&document.documentMode===10}function _T(t=_n()){return kh(t)||yT(t)||ET(t)||bT(t)||/windows phone/i.test(t)||vT(t)}function KN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wT(t,e=[]){let n;switch(t){case"Browser":n=lb(_n());break;case"Worker":n=`${lb(_n())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}async function TT(t,e){return oo(t,"GET","/v2/recaptchaConfig",so(t,e))}function cb(t){return t!==void 0&&t.enterprise!==void 0}class ST{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function GN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GN().appendChild(r)})}function YN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XN="https://www.google.com/recaptcha/enterprise.js?render=",QN="recaptcha-enterprise",qN="NO_RECAPTCHA";class CT{constructor(e){this.type=QN,this.auth=ao(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{TT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ST(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cb(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cb(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}IT(XN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ta(t,e,n,r=!1){const i=new CT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class JN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ZN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ub(this),this.idTokenSubscription=new ub(this),this.beforeStateQueue=new JN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ri(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wf(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ON()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Wt(e):null;return n&&Se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ri(e))})}async initializeRecaptchaConfig(){const e=await TT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ST(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new CT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ri(e)||this._popupRedirectResolver;Se(n,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Se(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ao(t){return Wt(t)}class ub{constructor(e){this.auth=e,this.observer=null,this.addObserver=mk(n=>this.observer=n)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function eD(t,e){const n=Jg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(bf(s,e??{}))return i;Sr(i,"already-initialized")}return n.initialize({options:e})}function tD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nD(t,e,n){const r=ao(t);Se(r._canInitEmulator,r,"emulator-config-failed"),Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=AT(e),{host:o,port:a}=rD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iD()}function AT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rD(t){const e=AT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fb(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fb(o)}}}function fb(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ni("not implemented")}_getIdTokenResponse(e){return ni("not implemented")}_linkToIdToken(e,n){return ni("not implemented")}_getReauthenticationResolver(e){return ni("not implemented")}}async function sD(t,e){return oo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Bd(t,e){return wc(t,"POST","/v1/accounts:signInWithPassword",so(t,e))}async function oD(t,e){return oo(t,"POST","/v1/accounts:sendOobCode",so(t,e))}async function Hd(t,e){return oD(t,e)}/**
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
 */async function aD(t,e){return wc(t,"POST","/v1/accounts:signInWithEmailLink",so(t,e))}async function lD(t,e){return wc(t,"POST","/v1/accounts:signInWithEmailLink",so(t,e))}/**
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
 */class Gl extends sv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ta(e,r,"signInWithPassword");return Bd(e,i)}else return Bd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ta(e,r,"signInWithPassword");return Bd(e,s)}else return Promise.reject(i)});case"emailLink":return aD(e,{email:this._email,oobCode:this._password});default:Sr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lD(e,{idToken:n,email:this._email,oobCode:this._password});default:Sr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Uo(t,e){return wc(t,"POST","/v1/accounts:signInWithIdp",so(t,e))}/**
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
 */const cD="http://localhost";class Ks extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ev(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ks(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Uo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Uo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Uo(e,n)}buildRequest(){const e={requestUri:cD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ea(n)}return e}}/**
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
 */function uD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fD(t){const e=Ga(Ya(t)).link,n=e?Ga(Ya(e)).deep_link_id:null,r=Ga(Ya(t)).deep_link_id;return(r?Ga(Ya(r)).link:null)||r||n||e||t}class ov{constructor(e){var n,r,i,s,o,a;const l=Ga(Ya(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=uD((i=l.mode)!==null&&i!==void 0?i:null);Se(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fD(e);try{return new ov(n)}catch{return null}}}/**
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
 */class _a{constructor(){this.providerId=_a.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ov.parseLink(n);return Se(r,"argument-error"),Gl._fromEmailAndCode(e,r.code,r.tenantId)}}_a.PROVIDER_ID="password";_a.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_a.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tc extends xT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mi extends Tc{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mi.credential(e.oauthAccessToken)}catch{return null}}}Mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mi.PROVIDER_ID="facebook.com";/**
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
 */class Li extends Tc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ks._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Li.credential(n,r)}catch{return null}}}Li.GOOGLE_SIGN_IN_METHOD="google.com";Li.PROVIDER_ID="google.com";/**
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
 */class Fi extends Tc{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fi.credential(e.oauthAccessToken)}catch{return null}}}Fi.GITHUB_SIGN_IN_METHOD="github.com";Fi.PROVIDER_ID="github.com";/**
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
 */class $i extends Tc{constructor(){super("twitter.com")}static credential(e,n){return Ks._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $i.credential(n,r)}catch{return null}}}$i.TWITTER_SIGN_IN_METHOD="twitter.com";$i.PROVIDER_ID="twitter.com";/**
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
 */async function zd(t,e){return wc(t,"POST","/v1/accounts:signUp",so(t,e))}/**
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
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fs._fromIdTokenResponse(e,r,i),o=hb(r);return new Gs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hb(r);return new Gs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hb(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tf extends Xr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tf.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tf(e,n,r,i)}}function RT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tf._fromErrorAndOperation(t,s,e,r):s})}async function hD(t,e,n=!1){const r=await Wl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",r)}/**
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
 */async function dD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Wl(t,RT(r,i,e,t),n);Se(s.idToken,r,"internal-error");const o=rv(s.idToken);Se(o,r,"internal-error");const{sub:a}=o;return Se(t.uid===a,r,"user-mismatch"),Gs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sr(r,"user-mismatch"),s}}/**
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
 */async function OT(t,e,n=!1){const r="signIn",i=await RT(t,r,e),s=await Gs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function pD(t,e){return OT(ao(t),e)}/**
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
 */function Wd(t,e,n){var r;Se(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Se(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Se(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Se(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function mD(t,e,n){var r;const i=ao(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ta(i,s,"getOobCode",!0);n&&Wd(i,o,n),await Hd(i,o)}else n&&Wd(i,s,n),await Hd(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ta(i,s,"getOobCode",!0);n&&Wd(i,a,n),await Hd(i,a)}else return Promise.reject(o)})}async function gD(t,e,n){var r;const i=ao(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await ta(i,s,"signUpPassword");o=zd(i,c)}else o=zd(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ta(i,s,"signUpPassword");return zd(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Gs._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function vD(t,e,n){return pD(Wt(t),_a.credential(e,n))}function PT(t,e,n,r){return Wt(t).onIdTokenChanged(e,n,r)}function yD(t,e,n){return Wt(t).beforeAuthStateChanged(e,n)}function bD(t,e,n,r){return Wt(t).onAuthStateChanged(e,n,r)}function av(t){return Wt(t).signOut()}const Sf="__sak";/**
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
 */class kT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sf,"1"),this.storage.removeItem(Sf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ED(){const t=_n();return iv(t)||kh(t)}const _D=1e3,wD=10;class NT extends kT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ED()&&KN(),this.fallbackToPolling=_T(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NT.type="LOCAL";const TD=NT;/**
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
 */class DT extends kT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DT.type="SESSION";const MT=DT;/**
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
 */function SD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await SD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nh.receivers=[];/**
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
 */function lv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ID{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=lv("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mr(){return window}function CD(t){Mr().location.href=t}/**
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
 */function LT(){return typeof Mr().WorkerGlobalScope<"u"&&typeof Mr().importScripts=="function"}async function AD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RD(){return LT()?self:null}/**
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
 */const FT="firebaseLocalStorageDb",OD=1,If="firebaseLocalStorage",$T="fbase_key";class Sc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(t,e){return t.transaction([If],e?"readwrite":"readonly").objectStore(If)}function PD(){const t=indexedDB.deleteDatabase(FT);return new Sc(t).toPromise()}function om(){const t=indexedDB.open(FT,OD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(If,{keyPath:$T})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(If)?e(r):(r.close(),await PD(),e(await om()))})})}async function db(t,e,n){const r=Dh(t,!0).put({[$T]:e,value:n});return new Sc(r).toPromise()}async function kD(t,e){const n=Dh(t,!1).get(e),r=await new Sc(n).toPromise();return r===void 0?null:r.value}function pb(t,e){const n=Dh(t,!0).delete(e);return new Sc(n).toPromise()}const ND=800,DD=3;class UT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nh._getInstance(RD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AD(),!this.activeServiceWorker)return;this.sender=new ID(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await om();return await db(e,Sf,"1"),await pb(e,Sf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>db(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dh(i,!1).getAll();return new Sc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ND)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UT.type="LOCAL";const MD=UT;new _c(3e4,6e4);/**
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
 */function LD(t,e){return e?ri(e):(Se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cv extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Uo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Uo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FD(t){return OT(t.auth,new cv(t),t.bypassAuthState)}function $D(t){const{auth:e,user:n}=t;return Se(n,e,"internal-error"),dD(n,new cv(t),t.bypassAuthState)}async function UD(t){const{auth:e,user:n}=t;return Se(n,e,"internal-error"),hD(n,new cv(t),t.bypassAuthState)}/**
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
 */class VT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FD;case"linkViaPopup":case"linkViaRedirect":return UD;case"reauthViaPopup":case"reauthViaRedirect":return $D;default:Sr(this.auth,"internal-error")}}resolve(e){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VD=new _c(2e3,1e4);class Co extends VT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Co.currentPopupAction&&Co.currentPopupAction.cancel(),Co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){hi(this.filter.length===1,"Popup operations only handle one event");const e=lv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VD.get())};e()}}Co.currentPopupAction=null;/**
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
 */const jD="pendingRedirect",Ku=new Map;class BD extends VT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const r=await HD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HD(t,e){const n=KD(e),r=WD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zD(t,e){Ku.set(t._key(),e)}function WD(t){return ri(t._redirectPersistence)}function KD(t){return Wu(jD,t.config.apiKey,t.name)}async function GD(t,e,n=!1){const r=ao(t),i=LD(r,e),o=await new BD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YD=10*60*1e3;class XD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YD&&this.cachedEventUids.clear(),this.cachedEventUids.has(mb(e))}saveEventToCache(e){this.cachedEventUids.add(mb(e)),this.lastProcessedEventTime=Date.now()}}function mb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jT(t);default:return!1}}/**
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
 */async function qD(t,e={}){return oo(t,"GET","/v1/projects",e)}/**
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
 */const JD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function eM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qD(t);for(const n of e)try{if(tM(n))return}catch{}Sr(t,"unauthorized-domain")}function tM(t){const e=sm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZD.test(n))return!1;if(JD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nM=new _c(3e4,6e4);function gb(){const t=Mr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rM(t){return new Promise((e,n)=>{var r,i,s;function o(){gb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gb(),n(Dr(t,"network-request-failed"))},timeout:nM.get()})}if(!((i=(r=Mr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mr().gapi)===null||s===void 0)&&s.load)o();else{const a=YN("iframefcb");return Mr()[a]=()=>{gapi.load?o():n(Dr(t,"network-request-failed"))},IT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function iM(t){return Gu=Gu||rM(t),Gu}/**
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
 */const sM=new _c(5e3,15e3),oM="__/auth/iframe",aM="emulator/auth/iframe",lM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uM(t){const e=t.config;Se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nv(e,aM):`https://${t.config.authDomain}/${oM}`,r={apiKey:e.apiKey,appName:t.name,v:hs},i=cM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ea(r).slice(1)}`}async function fM(t){const e=await iM(t),n=Mr().gapi;return Se(n,t,"internal-error"),e.open({where:document.body,url:uM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dr(t,"network-request-failed"),a=Mr().setTimeout(()=>{s(o)},sM.get());function l(){Mr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const hM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dM=500,pM=600,mM="_blank",gM="http://localhost";class vb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vM(t,e,n,r=dM,i=pM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=_n().toLowerCase();n&&(a=gT(c)?mM:n),mT(c)&&(e=e||gM,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[d,p])=>`${h}${d}=${p},`,"");if(zN(c)&&a!=="_self")return yM(e||"",a),new vb(null);const f=window.open(e||"",a,u);Se(f,t,"popup-blocked");try{f.focus()}catch{}return new vb(f)}function yM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bM="__/auth/handler",EM="emulator/auth/handler",_M=encodeURIComponent("fac");async function yb(t,e,n,r,i,s){Se(t.config.authDomain,t,"auth-domain-config-required"),Se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:i};if(e instanceof xT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))o[u]=f}if(e instanceof Tc){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${_M}=${encodeURIComponent(l)}`:"";return`${wM(t)}?${Ea(a).slice(1)}${c}`}function wM({config:t}){return t.emulator?nv(t,EM):`https://${t.authDomain}/${bM}`}/**
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
 */const Kd="webStorageSupport";class TM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=MT,this._completeRedirectFn=GD,this._overrideRedirectResult=zD}async _openPopup(e,n,r,i){var s;hi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yb(e,n,r,sm(),i);return vM(e,o,lv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yb(e,n,r,sm(),i);return CD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fM(e),r=new XD(e);return n.register("authEvent",i=>(Se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kd,{type:Kd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Kd];o!==void 0&&n(!!o),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _T()||iv()||kh()}}const SM=TM;var bb="@firebase/auth",Eb="0.23.2";/**
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
 */class IM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AM(t){Vr(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wT(t)},c=new ZN(r,i,s,l);return tD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Tr("auth-internal",e=>{const n=ao(e.getProvider("auth").getImmediate());return(r=>new IM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(bb,Eb,CM(t)),Qn(bb,Eb,"esm2017")}/**
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
 */const xM=5*60,RM=J1("authIdTokenMaxAge")||xM;let _b=null;const OM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RM)return;const i=n==null?void 0:n.token;_b!==i&&(_b=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kn(t=Zg()){const e=Jg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eD(t,{popupRedirectResolver:SM,persistence:[MD,TD,MT]}),r=J1("authTokenSyncURL");if(r){const s=OM(r);yD(n,s,()=>s(n.currentUser)),PT(n,o=>s(o))}const i=Q1("auth");return i&&nD(n,`http://${i}`),n}AM("Browser");/**
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
 */const PM=new Map,kM={activated:!1,tokenObservers:[]};function jr(t){return PM.get(t)||Object.assign({},kM)}const wb={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class NM{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Bl,await DM(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Bl,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function DM(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const MM={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Cf=new ba("appCheck","AppCheck",MM);function LM(t){if(!jr(t).activated)throw Cf.create("use-before-activation",{appName:t.name})}/**
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
 */const FM="firebase-app-check-database",$M=1,am="firebase-app-check-store";let hu=null;function UM(){return hu||(hu=new Promise((t,e)=>{try{const n=indexedDB.open(FM,$M);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e(Cf.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(am,{keyPath:"compositeKey"})}}}catch(n){e(Cf.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),hu)}function VM(t,e){return jM(BM(t),e)}async function jM(t,e){const r=(await UM()).transaction(am,"readwrite"),s=r.objectStore(am).put({compositeKey:t,value:e});return new Promise((o,a)=>{s.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Cf.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function BM(t){return`${t.options.appId}-${t.name}`}/**
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
 */const lm=new Ec("@firebase/app-check");function Tb(t,e){return tT()?VM(t,e).catch(n=>{lm.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const HM={error:"UNKNOWN_ERROR"};function zM(t){return Oh.encodeString(JSON.stringify(t),!1)}async function cm(t,e=!1){const n=t.app;LM(n);const r=jr(n);let i=r.token,s;if(i&&!Xa(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(Xa(l)?i=l:await Tb(n,void 0))}if(!e&&i&&Xa(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await jr(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?lm.warn(l.message):lm.error(l),s=l}let a;return i?s?Xa(i)?a={token:i.token,internalError:s}:a=Ib(s):(a={token:i.token},r.token=i,await Tb(n,i)):a=Ib(s),o&&GM(n,a),a}function WM(t,e,n,r){const{app:i}=t,s=jr(i),o={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Xa(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Sb(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Sb(t))}function BT(t,e){const n=jr(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Sb(t){const{app:e}=t,n=jr(e);let r=n.tokenRefresher;r||(r=KM(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function KM(t){const{app:e}=t;return new NM(async()=>{const n=jr(e);let r;if(n.token?r=await cm(t,!0):r=await cm(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=jr(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},wb.RETRIAL_MIN_WAIT,wb.RETRIAL_MAX_WAIT)}function GM(t,e){const n=jr(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Xa(t){return t.expireTimeMillis-Date.now()>0}function Ib(t){return{token:zM(HM),error:t}}/**
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
 */class YM{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=jr(this.app);for(const n of e)BT(this.app,n.next);return Promise.resolve()}}function XM(t,e){return new YM(t,e)}function QM(t){return{getToken:e=>cm(t,e),addTokenListener:e=>WM(t,"INTERNAL",e),removeTokenListener:e=>BT(t.app,e)}}const qM="@firebase/app-check",JM="0.7.0",ZM="app-check",Cb="app-check-internal";function eL(){Vr(new Tr(ZM,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return XM(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Cb).initialize()})),Vr(new Tr(Cb,t=>{const e=t.getProvider("app-check").getImmediate();return QM(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qn(qM,JM)}eL();var tL="firebase",nL="9.22.0";/**
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
 */Qn(tL,nL,"app");const HT=Symbol("firebaseApp");function rL(t){return Cr()&&Xn(HT,null)||Zg(t)}const du=new WeakMap;function iL(t,e){if(!du.has(t)){const n=iw(!0);du.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),du.delete(t)}}return du.get(t)}const sL=new WeakMap,pu=new WeakMap;function zT(t){const e=rL(t);if(!pu.has(e)){let n;const i=[new Promise(s=>{n=s}),s=>{pu.set(e,s),n(s.value)}];pu.set(e,i)}return pu.get(e)}function oL(t){const e=zT(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function aL(t,e){const n=Kn(e);PT(n,r=>{const i=zT();t.value=r,Array.isArray(i)&&i[1](t)})}const Ab="@firebase/database",xb="0.14.4";/**
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
 */let WT="";function lL(t){WT=t}/**
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
 */class cL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),sn(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class uL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _i(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const KT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cL(e)}}catch{}return new uL},As=KT("localStorage"),um=KT("sessionStorage");/**
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
 */const Vo=new Ec("@firebase/database"),fL=function(){let t=1;return function(){return t++}}(),GT=function(t){const e=bk(t),n=new pk;n.update(e);const r=n.digest();return Oh.encodeByteArray(r)},Ic=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ic.apply(null,r):typeof r=="object"?e+=sn(r):e+=r,e+=" "}return e};let $s=null,Rb=!0;const hL=function(t,e){ee(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Vo.logLevel=rt.VERBOSE,$s=Vo.log.bind(Vo),e&&um.set("logging_enabled",!0)):typeof t=="function"?$s=t:($s=null,um.remove("logging_enabled"))},un=function(...t){if(Rb===!0&&(Rb=!1,$s===null&&um.get("logging_enabled")===!0&&hL(!0)),$s){const e=Ic.apply(null,t);$s(e)}},Cc=function(t){return function(...e){un(t,...e)}},fm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ic(...t);Vo.error(e)},Ys=function(...t){const e=`FIREBASE FATAL ERROR: ${Ic(...t)}`;throw Vo.error(e),new Error(e)},qn=function(...t){const e="FIREBASE WARNING: "+Ic(...t);Vo.warn(e)},dL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},YT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},na="[MIN_NAME]",Xs="[MAX_NAME]",wa=function(t,e){if(t===e)return 0;if(t===na||e===Xs)return-1;if(e===na||t===Xs)return 1;{const n=Ob(t),r=Ob(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mL=function(t,e){return t===e?0:t<e?-1:1},Ma=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+sn(e))},uv=function(t){if(typeof t!="object"||t===null)return sn(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=sn(e[r]),n+=":",n+=uv(t[e[r]]);return n+="}",n},XT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function lr(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const QT=function(t){ee(!YT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},gL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},yL=new RegExp("^-?(0*)\\d{1,10}$"),bL=-2147483648,EL=2147483647,Ob=function(t){if(yL.test(t)){const e=Number(t);if(e>=bL&&e<=EL)return e}return null},Ac=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qn("Exception was thrown by user callback.",n),e},Math.floor(0))}},_L=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ml=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class TL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qn(e)}}class hm{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hm.OWNER="owner";/**
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
 */const fv="5",qT="v",JT="s",ZT="r",eS="f",tS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nS="ls",rS="p",dm="ac",iS="websocket",sS="long_polling";/**
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
 */class SL{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=As.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&As.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function IL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function oS(t,e,n){ee(typeof e=="string","typeof type must == string"),ee(typeof n=="object","typeof params must == object");let r;if(e===iS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IL(t)&&(n.ns=t.namespace);const i=[];return lr(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class CL{constructor(){this.counters_={}}incrementCounter(e,n=1){_i(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JP(this.counters_)}}/**
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
 */const Gd={},Yd={};function hv(t){const e=t.toString();return Gd[e]||(Gd[e]=new CL),Gd[e]}function AL(t,e){const n=t.toString();return Yd[n]||(Yd[n]=e()),Yd[n]}/**
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
 */class xL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ac(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pb="start",RL="close",OL="pLPCommand",PL="pRTLPCB",aS="id",lS="pw",cS="ser",kL="cb",NL="seg",DL="ts",ML="d",LL="dframe",uS=1870,fS=30,FL=uS-fS,$L=25e3,UL=3e4;class Ao{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cc(e),this.stats_=hv(n),this.urlFn=l=>(this.appCheckToken&&(l[dm]=this.appCheckToken),oS(n,sS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UL)),pL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dv((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pb)this.id=a,this.password=l;else if(o===RL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Pb]="t",r[cS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[kL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[qT]=fv,this.transportSessionId&&(r[JT]=this.transportSessionId),this.lastSessionId&&(r[nS]=this.lastSessionId),this.applicationId&&(r[rS]=this.applicationId),this.appCheckToken&&(r[dm]=this.appCheckToken),typeof location<"u"&&location.hostname&&tS.test(location.hostname)&&(r[ZT]=eS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ao.forceAllow_=!0}static forceDisallow(){Ao.forceDisallow_=!0}static isAvailable(){return Ao.forceAllow_?!0:!Ao.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gL()&&!vL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=sn(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Y1(n),i=XT(r,FL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[LL]="t",r[aS]=e,r[lS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=sn(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fL(),window[OL+this.uniqueCallbackIdentifier]=e,window[PL+this.uniqueCallbackIdentifier]=n,this.myIFrame=dv.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){un("frame writing exception"),a.stack&&un(a.stack),un(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[aS]=this.myID,e[lS]=this.myPW,e[cS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fS+r.length<=uS;){const o=this.pendingSegs.shift();r=r+"&"+NL+i+"="+o.seg+"&"+DL+i+"="+o.ts+"&"+ML+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($L)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const VL=16384,jL=45e3;let Af=null;typeof MozWebSocket<"u"?Af=MozWebSocket:typeof WebSocket<"u"&&(Af=WebSocket);class mr{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cc(this.connId),this.stats_=hv(n),this.connURL=mr.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[qT]=fv,typeof location<"u"&&location.hostname&&tS.test(location.hostname)&&(o[ZT]=eS),n&&(o[JT]=n),r&&(o[nS]=r),i&&(o[dm]=i),s&&(o[rS]=s),oS(e,iS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,As.set("previous_websocket_failure",!0);try{let r;eT(),this.mySock=new Af(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Af!==null&&!mr.forceDisallow_}static previouslyFailed(){return As.isInMemoryStorage||As.get("previous_websocket_failure")===!0}markConnectionHealthy(){As.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=sn(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=XT(n,VL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mr.responsesRequiredToBeHealthy=2;mr.healthyTimeout=3e4;/**
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
 */class Yl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ao,mr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mr&&mr.isAvailable();let r=n&&!mr.previouslyFailed();if(e.webSocketOnly&&(n||qn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mr];else{const i=this.transports_=[];for(const s of Yl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yl.globalTransportInitialized_=!1;/**
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
 */const BL=6e4,HL=5e3,zL=10*1024,WL=100*1024,Xd="t",kb="d",KL="s",Nb="r",GL="e",Db="o",Mb="a",Lb="n",Fb="p",YL="h";class XL{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cc("c:"+this.id+":"),this.transportManager_=new Yl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ml(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xd in e){const n=e[Xd];n===Mb?this.upgradeIfSecondaryHealthy_():n===Nb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Db&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ma("t",e),r=Ma("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ma("t",e),r=Ma("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ma(Xd,e);if(kb in e){const r=e[kb];if(n===YL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KL?this.onConnectionShutdown_(r):n===Nb?this.onReset_(r):n===GL?fm("Server Error: "+r):n===Db?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fv!==r&&qn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ml(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ml(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(As.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class hS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class dS{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xf extends dS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xf}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $b=32,Ub=768;class Tt{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ut(){return new Tt("")}function Ze(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rs(t){return t.pieces_.length-t.pieceNum_}function bt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Tt(t.pieces_,e)}function pS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function mS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Tt(e,0)}function Qt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Tt(n,0)}function Xe(t){return t.pieceNum_>=t.pieces_.length}function sr(t,e){const n=Ze(t),r=Ze(e);if(n===null)return e;if(n===r)return sr(bt(t),bt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vS(t,e){if(rs(t)!==rs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gr(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(rs(t)>rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class qL{constructor(e,n){this.errorPrefix_=n,this.parts_=mS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ph(this.parts_[r]);yS(this)}}function JL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ph(e),yS(t)}function ZL(t){const e=t.parts_.pop();t.byteLength_-=Ph(e),t.parts_.length>0&&(t.byteLength_-=1)}function yS(t){if(t.byteLength_>Ub)throw new Error(t.errorPrefix_+"has a key path longer than "+Ub+" bytes ("+t.byteLength_+").");if(t.parts_.length>$b)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$b+") or object contains a cycle "+_s(t))}function _s(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class pv extends dS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new pv}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const La=1e3,e4=60*5*1e3,Vb=30*1e3,t4=1.3,n4=3e4,r4="server_kill",jb=3;class li extends hS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=li.nextPersistentConnectionId_++,this.log_=Cc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=La,this.maxReconnectDelay_=e4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!eT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(sn(s)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Bl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;li.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_i(e,"w")){const r=ea(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();qn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+sn(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fm("Unrecognized action received from server: "+sn(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=La,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=La,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>n4&&(this.reconnectDelay_=La),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*t4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+li.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new XL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{qn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(r4)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&qn(f),l())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zp(this.interruptReasons_)&&(this.reconnectDelay_=La,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>uv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Tt(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){un("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jb&&(this.reconnectDelay_=Vb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){un("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+WT.replace(/\./g,"-")]=1,Qg()?e["framework.cordova"]=1:Z1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xf.getInstance().currentlyOnline();return Zp(this.interruptReasons_)&&e}}li.nextPersistentConnectionId_=0;li.nextConnectionId_=0;/**
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
 */class et{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new et(e,n)}}/**
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
 */class Mh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new et(na,e),i=new et(na,n);return this.compare(r,i)!==0}minPost(){return et.MIN}}/**
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
 */let mu;class bS extends Mh{static get __EMPTY_NODE(){return mu}static set __EMPTY_NODE(e){mu=e}compare(e,n){return wa(e.name,n.name)}isDefinedOn(e){throw ya("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return et.MIN}maxPost(){return new et(Xs,mu)}makePost(e,n){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new et(e,mu)}toString(){return".key"}}const jo=new bS;/**
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
 */class gu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xt.RED,this.left=i??Ln.EMPTY_NODE,this.right=s??Ln.EMPTY_NODE}copy(e,n,r,i,s){return new Xt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ln.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ln.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xt.RED=!0;Xt.BLACK=!1;class i4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Xt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ln{constructor(e,n=Ln.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ln(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xt.BLACK,null,null))}remove(e){return new Ln(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gu(this.root_,null,this.comparator_,!0,e)}}Ln.EMPTY_NODE=new i4;/**
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
 */function s4(t,e){return wa(t.name,e.name)}function mv(t,e){return wa(t,e)}/**
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
 */let pm;function o4(t){pm=t}const ES=function(t){return typeof t=="number"?"number:"+QT(t):"string:"+t},_S=function(t){if(t.isLeafNode()){const e=t.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_i(e,".sv"),"Priority must be a string or number.")}else ee(t===pm||t.isEmpty(),"priority of unexpected type.");ee(t===pm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bb;class Gt{constructor(e,n=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_S(this.priorityNode_)}static set __childrenNodeConstructor(e){Bb=e}static get __childrenNodeConstructor(){return Bb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Xe(e)?this:Ze(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ze(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(bt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ES(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=QT(this.value_):e+=this.value_,this.lazyHash_=GT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Gt.VALUE_TYPE_ORDER.indexOf(n),s=Gt.VALUE_TYPE_ORDER.indexOf(r);return ee(i>=0,"Unknown leaf type: "+n),ee(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let wS,TS;function a4(t){wS=t}function l4(t){TS=t}class c4 extends Mh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?wa(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return et.MIN}maxPost(){return new et(Xs,new Gt("[PRIORITY-POST]",TS))}makePost(e,n){const r=wS(e);return new et(n,new Gt("[PRIORITY-POST]",r))}toString(){return".priority"}}const gn=new c4;/**
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
 */const u4=Math.log(2);class f4{constructor(e){const n=s=>parseInt(Math.log(s)/u4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rf=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new Xt(h,f.node,Xt.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=i(l,d),m=i(d+1,c);return f=t[d],h=n?n(f):f,new Xt(h,f.node,Xt.BLACK,p,m)}},s=function(l){let c=null,u=null,f=t.length;const h=function(p,m){const y=f-p,v=f;f-=p;const g=i(y+1,v),E=t[y],b=n?n(E):E;d(new Xt(b,E.node,m,null,g))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));m?h(y,Xt.BLACK):(h(y,Xt.BLACK),h(y,Xt.RED))}return u},o=new f4(t.length),a=s(o);return new Ln(r||e,a)};/**
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
 */let Qd;const go={};class ii{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return ee(go&&gn,"ChildrenNode.ts has not been loaded"),Qd=Qd||new ii({".priority":go},{".priority":gn}),Qd}get(e){const n=ea(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ln?n:null}hasIndex(e){return _i(this.indexSet_,e.toString())}addIndex(e,n){ee(e!==jo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(et.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Rf(r,e.getCompare()):a=go;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ii(u,c)}addToIndexes(e,n){const r=yf(this.indexes_,(i,s)=>{const o=ea(this.indexSet_,s);if(ee(o,"Missing index implementation for "+s),i===go)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(et.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rf(a,o.getCompare())}else return go;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new et(e.name,a))),l.insert(e,e.node)}});return new ii(r,this.indexSet_)}removeFromIndexes(e,n){const r=yf(this.indexes_,i=>{if(i===go)return i;{const s=n.get(e.name);return s?i.remove(new et(e.name,s)):i}});return new ii(r,this.indexSet_)}}/**
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
 */let Fa;class ot{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&_S(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fa||(Fa=new ot(new Ln(mv),null,ii.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fa}updatePriority(e){return this.children_.isEmpty()?this:new ot(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fa:n}}getChild(e){const n=Ze(e);return n===null?this:this.getImmediateChild(n).getChild(bt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(ee(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new et(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Fa:this.priorityNode_;return new ot(i,o,s)}}updateChild(e,n){const r=Ze(e);if(r===null)return n;{ee(Ze(e)!==".priority"||rs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(bt(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(gn,(o,a)=>{n[o]=a.val(e),r++,s&&ot.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ES(this.getPriority().val())+":"),this.forEachChild(gn,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":GT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new et(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new et(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new et(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,et.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,et.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xc?-1:0}withIndex(e){if(e===jo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ot(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(gn),i=n.getIterator(gn);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jo?null:this.indexMap_.get(e.toString())}}ot.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class h4 extends ot{constructor(){super(new Ln(mv),ot.EMPTY_NODE,ii.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ot.EMPTY_NODE}isEmpty(){return!1}}const xc=new h4;Object.defineProperties(et,{MIN:{value:new et(na,ot.EMPTY_NODE)},MAX:{value:new et(Xs,xc)}});bS.__EMPTY_NODE=ot.EMPTY_NODE;Gt.__childrenNodeConstructor=ot;o4(xc);l4(xc);/**
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
 */const d4=!0;function fn(t,e=null){if(t===null)return ot.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Gt(n,fn(e))}if(!(t instanceof Array)&&d4){const n=[];let r=!1;if(lr(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=fn(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new et(o,l)))}}),n.length===0)return ot.EMPTY_NODE;const s=Rf(n,s4,o=>o.name,mv);if(r){const o=Rf(n,gn.getCompare());return new ot(s,fn(e),new ii({".priority":o},{".priority":gn}))}else return new ot(s,fn(e),ii.Default)}else{let n=ot.EMPTY_NODE;return lr(t,(r,i)=>{if(_i(t,r)&&r.substring(0,1)!=="."){const s=fn(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(fn(e))}}a4(fn);/**
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
 */class p4 extends Mh{constructor(e){super(),this.indexPath_=e,ee(!Xe(e)&&Ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?wa(e.name,n.name):s}makePost(e,n){const r=fn(e),i=ot.EMPTY_NODE.updateChild(this.indexPath_,r);return new et(n,i)}maxPost(){const e=ot.EMPTY_NODE.updateChild(this.indexPath_,xc);return new et(Xs,e)}toString(){return mS(this.indexPath_,0).join("/")}}/**
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
 */class m4 extends Mh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wa(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return et.MIN}maxPost(){return et.MAX}makePost(e,n){const r=fn(e);return new et(n,r)}toString(){return".value"}}const g4=new m4;/**
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
 */function v4(t){return{type:"value",snapshotNode:t}}function y4(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function b4(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hb(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function E4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:na}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gn}copy(){const e=new gv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zb(t){const e={};if(t.isDefault())return e;let n;if(t.index_===gn?n="$priority":t.index_===g4?n="$value":t.index_===jo?n="$key":(ee(t.index_ instanceof p4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=sn(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=sn(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+sn(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=sn(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+sn(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wb(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==gn&&(e.i=t.index_.toString()),e}/**
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
 */class Of extends hS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Cc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Of.getListenId_(e,r),a={};this.listens_[o]=a;const l=zb(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),ea(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Of.getListenId_(e,n);delete this.listens_[r]}get(e){const n=zb(e._queryParams),r=e._path.toString(),i=new Bl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ea(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hl(a.responseText)}catch{qn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&qn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class _4{constructor(){this.rootNode_=ot.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Pf(){return{value:null,children:new Map}}function SS(t,e,n){if(Xe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ze(e);t.children.has(r)||t.children.set(r,Pf());const i=t.children.get(r);e=bt(e),SS(i,e,n)}}function mm(t,e,n){t.value!==null?n(e,t.value):w4(t,(r,i)=>{const s=new Tt(e.toString()+"/"+r);mm(i,s,n)})}function w4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class T4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lr(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Kb=10*1e3,S4=30*1e3,I4=5*60*1e3;class C4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new T4(e);const r=Kb+(S4-Kb)*Math.random();ml(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;lr(e,(i,s)=>{s>0&&_i(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ml(this.reportStats_.bind(this),Math.floor(Math.random()*2*I4))}}/**
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
 */var Or;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Or||(Or={}));function IS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function CS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function AS(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class kf{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Or.ACK_USER_WRITE,this.source=IS()}operationForChild(e){if(Xe(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Tt(e));return new kf(ut(),n,this.revert)}}else return ee(Ze(this.path)===e,"operationForChild called for unrelated child."),new kf(bt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Or.OVERWRITE}operationForChild(e){return Xe(this.path)?new Qs(this.source,ut(),this.snap.getImmediateChild(e)):new Qs(this.source,bt(this.path),this.snap)}}/**
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
 */class Xl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Or.MERGE}operationForChild(e){if(Xe(this.path)){const n=this.children.subtree(new Tt(e));return n.isEmpty()?null:n.value?new Qs(this.source,ut(),n.value):new Xl(this.source,ut(),n)}else return ee(Ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xl(this.source,bt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vv{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Xe(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ze(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function A4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(E4(o.childName,o.snapshotNode))}),$a(t,i,"child_removed",e,r,n),$a(t,i,"child_added",e,r,n),$a(t,i,"child_moved",s,r,n),$a(t,i,"child_changed",e,r,n),$a(t,i,"value",e,r,n),i}function $a(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>R4(t,a,l)),o.forEach(a=>{const l=x4(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function x4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function R4(t,e,n){if(e.childName==null||n.childName==null)throw ya("Should only compare child_ events.");const r=new et(e.childName,e.snapshotNode),i=new et(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function xS(t,e){return{eventCache:t,serverCache:e}}function gl(t,e,n,r){return xS(new vv(e,n,r),t.serverCache)}function RS(t,e,n,r){return xS(t.eventCache,new vv(e,n,r))}function gm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let qd;const O4=()=>(qd||(qd=new Ln(mL)),qd);class yt{constructor(e,n=O4()){this.value=e,this.children=n}static fromObject(e){let n=new yt(null);return lr(e,(r,i)=>{n=n.set(new Tt(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ut(),value:this.value};if(Xe(e))return null;{const r=Ze(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(bt(e),n);return s!=null?{path:Qt(new Tt(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Xe(e))return this;{const n=Ze(e),r=this.children.get(n);return r!==null?r.subtree(bt(e)):new yt(null)}}set(e,n){if(Xe(e))return new yt(n,this.children);{const r=Ze(e),s=(this.children.get(r)||new yt(null)).set(bt(e),n),o=this.children.insert(r,s);return new yt(this.value,o)}}remove(e){if(Xe(e))return this.children.isEmpty()?new yt(null):new yt(null,this.children);{const n=Ze(e),r=this.children.get(n);if(r){const i=r.remove(bt(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new yt(null):new yt(this.value,s)}else return this}}get(e){if(Xe(e))return this.value;{const n=Ze(e),r=this.children.get(n);return r?r.get(bt(e)):null}}setTree(e,n){if(Xe(e))return n;{const r=Ze(e),s=(this.children.get(r)||new yt(null)).setTree(bt(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new yt(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Qt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ut(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Xe(e))return null;{const s=Ze(e),o=this.children.get(s);return o?o.findOnPath_(bt(e),Qt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ut(),n)}foreachOnPath_(e,n,r){if(Xe(e))return this;{this.value&&r(n,this.value);const i=Ze(e),s=this.children.get(i);return s?s.foreachOnPath_(bt(e),Qt(n,i),r):new yt(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Er{constructor(e){this.writeTree_=e}static empty(){return new Er(new yt(null))}}function vl(t,e,n){if(Xe(e))return new Er(new yt(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=sr(i,e);return s=s.updateChild(o,n),new Er(t.writeTree_.set(i,s))}else{const i=new yt(n),s=t.writeTree_.setTree(e,i);return new Er(s)}}}function Gb(t,e,n){let r=t;return lr(n,(i,s)=>{r=vl(r,Qt(e,i),s)}),r}function Yb(t,e){if(Xe(e))return Er.empty();{const n=t.writeTree_.setTree(e,new yt(null));return new Er(n)}}function vm(t,e){return lo(t,e)!=null}function lo(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(sr(n.path,e)):null}function Xb(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(gn,(r,i)=>{e.push(new et(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new et(r,i.value))}),e}function Gi(t,e){if(Xe(e))return t;{const n=lo(t,e);return n!=null?new Er(new yt(n)):new Er(t.writeTree_.subtree(e))}}function ym(t){return t.writeTree_.isEmpty()}function ra(t,e){return OS(ut(),t.writeTree_,e)}function OS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(ee(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=OS(Qt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qt(t,".priority"),r)),n}}/**
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
 */function PS(t,e){return LS(e,t)}function P4(t,e,n,r,i){ee(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=vl(t.visibleWrites,e,n)),t.lastWriteId=r}function k4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function N4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);ee(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&D4(a,r.path)?i=!1:gr(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return M4(t),!0;if(r.snap)t.visibleWrites=Yb(t.visibleWrites,r.path);else{const a=r.children;lr(a,l=>{t.visibleWrites=Yb(t.visibleWrites,Qt(r.path,l))})}return!0}else return!1}function D4(t,e){if(t.snap)return gr(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gr(Qt(t.path,n),e))return!0;return!1}function M4(t){t.visibleWrites=kS(t.allWrites,L4,ut()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function L4(t){return t.visible}function kS(t,e,n){let r=Er.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gr(n,o)?(a=sr(n,o),r=vl(r,a,s.snap)):gr(o,n)&&(a=sr(o,n),r=vl(r,ut(),s.snap.getChild(a)));else if(s.children){if(gr(n,o))a=sr(n,o),r=Gb(r,a,s.children);else if(gr(o,n))if(a=sr(o,n),Xe(a))r=Gb(r,ut(),s.children);else{const l=ea(s.children,Ze(a));if(l){const c=l.getChild(bt(a));r=vl(r,ut(),c)}}}else throw ya("WriteRecord should have .snap or .children")}}return r}function NS(t,e,n,r,i){if(!r&&!i){const s=lo(t.visibleWrites,e);if(s!=null)return s;{const o=Gi(t.visibleWrites,e);if(ym(o))return n;if(n==null&&!vm(o,ut()))return null;{const a=n||ot.EMPTY_NODE;return ra(o,a)}}}else{const s=Gi(t.visibleWrites,e);if(!i&&ym(s))return n;if(!i&&n==null&&!vm(s,ut()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(gr(c.path,e)||gr(e,c.path))},a=kS(t.allWrites,o,e),l=n||ot.EMPTY_NODE;return ra(a,l)}}}function F4(t,e,n){let r=ot.EMPTY_NODE;const i=lo(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(gn,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Gi(t.visibleWrites,e);return n.forEachChild(gn,(o,a)=>{const l=ra(Gi(s,new Tt(o)),a);r=r.updateImmediateChild(o,l)}),Xb(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Gi(t.visibleWrites,e);return Xb(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $4(t,e,n,r,i){ee(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Qt(e,n);if(vm(t.visibleWrites,s))return null;{const o=Gi(t.visibleWrites,s);return ym(o)?i.getChild(n):ra(o,i.getChild(n))}}function U4(t,e,n,r){const i=Qt(e,n),s=lo(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Gi(t.visibleWrites,i);return ra(o,r.getNode().getImmediateChild(n))}else return null}function V4(t,e){return lo(t.visibleWrites,e)}function j4(t,e,n,r,i,s,o){let a;const l=Gi(t.visibleWrites,e),c=lo(l,ut());if(c!=null)a=c;else if(n!=null)a=ra(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=h.getNext();for(;d&&u.length<i;)f(d,r)!==0&&u.push(d),d=h.getNext();return u}else return[]}function B4(){return{visibleWrites:Er.empty(),allWrites:[],lastWriteId:-1}}function bm(t,e,n,r){return NS(t.writeTree,t.treePath,e,n,r)}function DS(t,e){return F4(t.writeTree,t.treePath,e)}function Qb(t,e,n,r){return $4(t.writeTree,t.treePath,e,n,r)}function Nf(t,e){return V4(t.writeTree,Qt(t.treePath,e))}function H4(t,e,n,r,i,s){return j4(t.writeTree,t.treePath,e,n,r,i,s)}function yv(t,e,n){return U4(t.writeTree,t.treePath,e,n)}function MS(t,e){return LS(Qt(t.treePath,e),t.writeTree)}function LS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class z4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;ee(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Hb(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,b4(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,y4(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Hb(r,e.snapshotNode,i.oldSnap));else throw ya("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class W4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const FS=new W4;class bv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vv(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qs(this.viewCache_),s=H4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function K4(t,e){ee(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function G4(t,e,n,r,i){const s=new z4;let o,a;if(n.type===Or.OVERWRITE){const c=n;c.source.fromUser?o=Em(t,e,c.path,c.snap,r,i,s):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Xe(c.path),o=Df(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Or.MERGE){const c=n;c.source.fromUser?o=X4(t,e,c.path,c.children,r,i,s):(ee(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_m(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Or.ACK_USER_WRITE){const c=n;c.revert?o=J4(t,e,c.path,r,i,s):o=Q4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Or.LISTEN_COMPLETE)o=q4(t,e,n.path,r,s);else throw ya("Unknown operation type: "+n.type);const l=s.getChanges();return Y4(e,o,l),{viewCache:o,changes:l}}function Y4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=gm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(v4(gm(e)))}}function $S(t,e,n,r,i,s){const o=e.eventCache;if(Nf(r,n)!=null)return e;{let a,l;if(Xe(n))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qs(e),u=c instanceof ot?c:ot.EMPTY_NODE,f=DS(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=bm(r,qs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Ze(n);if(c===".priority"){ee(rs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Qb(r,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=bt(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Qb(r,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=yv(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,s):a=o.getNode()}}return gl(e,a,o.isFullyInitialized()||Xe(n),t.filter.filtersNodes())}}function Df(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Xe(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Ze(n);if(!l.isCompleteForPath(n)&&rs(n)>1)return e;const p=bt(n),y=l.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,p,FS,null)}const f=RS(e,c,l.isFullyInitialized()||Xe(n),u.filtersNodes()),h=new bv(i,f,s);return $S(t,f,n,i,h,a)}function Em(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new bv(i,e,s);if(Xe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=gl(e,c,!0,t.filter.filtersNodes());else{const f=Ze(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=gl(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=bt(n),d=a.getNode().getImmediateChild(f);let p;if(Xe(h))p=r;else{const m=u.getCompleteChild(f);m!=null?pS(h)===".priority"&&m.getChild(gS(h)).isEmpty()?p=m:p=m.updateChild(h,r):p=ot.EMPTY_NODE}if(d.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),f,p,h,u,o);l=gl(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function qb(t,e){return t.eventCache.isCompleteForChild(e)}function X4(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Qt(n,l);qb(e,Ze(u))&&(a=Em(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Qt(n,l);qb(e,Ze(u))||(a=Em(t,a,u,c,i,s,o))}),a}function Jb(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _m(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Xe(n)?c=r:c=new yt(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const d=e.serverCache.getNode().getImmediateChild(f),p=Jb(t,d,h);l=Df(t,l,new Tt(f),p,i,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const d=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!d){const p=e.serverCache.getNode().getImmediateChild(f),m=Jb(t,p,h);l=Df(t,l,new Tt(f),m,i,s,o,a)}}),l}function Q4(t,e,n,r,i,s,o){if(Nf(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Xe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Df(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Xe(n)){let c=new yt(null);return l.getNode().forEachChild(jo,(u,f)=>{c=c.set(new Tt(u),f)}),_m(t,e,n,c,i,s,a,o)}else return e}else{let c=new yt(null);return r.foreach((u,f)=>{const h=Qt(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),_m(t,e,n,c,i,s,a,o)}}function q4(t,e,n,r,i){const s=e.serverCache,o=RS(e,s.getNode(),s.isFullyInitialized()||Xe(n),s.isFiltered());return $S(t,o,n,r,FS,i)}function J4(t,e,n,r,i,s){let o;if(Nf(r,n)!=null)return e;{const a=new bv(r,e,i),l=e.eventCache.getNode();let c;if(Xe(n)||Ze(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bm(r,qs(e));else{const f=e.serverCache.getNode();ee(f instanceof ot,"serverChildren would be complete if leaf node"),u=DS(r,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Ze(n);let f=yv(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,bt(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ot.EMPTY_NODE,bt(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bm(r,qs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Nf(r,ut())!=null,gl(e,c,o,t.filter.filtersNodes())}}function Z4(t,e){const n=qs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Xe(e)&&!n.getImmediateChild(Ze(e)).isEmpty())?n.getChild(e):null}function Zb(t,e,n,r){e.type===Or.MERGE&&e.source.queryId!==null&&(ee(qs(t.viewCache_),"We should always have a full cache before handling merges"),ee(gm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=G4(t.processor_,i,e,n,r);return K4(t.processor_,s.viewCache),ee(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,e3(t,s.changes,s.viewCache.eventCache.getNode(),null)}function e3(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return A4(t.eventGenerator_,e,n,i)}/**
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
 */let eE;function t3(t){ee(!eE,"__referenceConstructor has already been defined"),eE=t}function Ev(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return ee(s!=null,"SyncTree gave us an op for an invalid query."),Zb(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zb(o,e,n,r));return s}}function _v(t,e){let n=null;for(const r of t.views.values())n=n||Z4(r,e);return n}/**
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
 */let tE;function n3(t){ee(!tE,"__referenceConstructor has already been defined"),tE=t}class nE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new yt(null),this.pendingWriteTree_=B4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r3(t,e,n,r,i){return P4(t.pendingWriteTree_,e,n,r,i),i?Fh(t,new Qs(IS(),e,n)):[]}function xo(t,e,n=!1){const r=k4(t.pendingWriteTree_,e);if(N4(t.pendingWriteTree_,e)){let s=new yt(null);return r.snap!=null?s=s.set(ut(),!0):lr(r.children,o=>{s=s.set(new Tt(o),!0)}),Fh(t,new kf(r.path,s,n))}else return[]}function Lh(t,e,n){return Fh(t,new Qs(CS(),e,n))}function i3(t,e,n){const r=yt.fromObject(n);return Fh(t,new Xl(CS(),e,r))}function s3(t,e,n,r){const i=BS(t,r);if(i!=null){const s=HS(i),o=s.path,a=s.queryId,l=sr(o,e),c=new Qs(AS(a),l,n);return zS(t,o,c)}else return[]}function o3(t,e,n,r){const i=BS(t,r);if(i){const s=HS(i),o=s.path,a=s.queryId,l=sr(o,e),c=yt.fromObject(n),u=new Xl(AS(a),l,c);return zS(t,o,u)}else return[]}function US(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=sr(o,e),c=_v(a,l);if(c)return c});return NS(i,e,s,n,!0)}function Fh(t,e){return VS(e,t.syncPointTree_,null,PS(t.pendingWriteTree_,ut()))}function VS(t,e,n,r){if(Xe(t.path))return jS(t,e,n,r);{const i=e.get(ut());n==null&&i!=null&&(n=_v(i,ut()));let s=[];const o=Ze(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=MS(r,o);s=s.concat(VS(a,l,c,u))}return i&&(s=s.concat(Ev(i,t,r,n))),s}}function jS(t,e,n,r){const i=e.get(ut());n==null&&i!=null&&(n=_v(i,ut()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=MS(r,o),u=t.operationForChild(o);u&&(s=s.concat(jS(u,a,l,c)))}),i&&(s=s.concat(Ev(i,t,r,n))),s}function BS(t,e){return t.tagToQueryMap.get(e)}function HS(t){const e=t.indexOf("$");return ee(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Tt(t.substr(0,e))}}function zS(t,e,n){const r=t.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const i=PS(t.pendingWriteTree_,e);return Ev(r,n,i,null)}/**
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
 */class wv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wv(n)}node(){return this.node_}}class Tv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qt(this.path_,e);return new Tv(this.syncTree_,n)}node(){return US(this.syncTree_,this.path_)}}const a3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rE=function(t,e,n){if(!t||typeof t!="object")return t;if(ee(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return l3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return c3(t[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},l3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:ee(!1,"Unexpected server value: "+t)}},c3=function(t,e,n){t.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const i=e.node();if(ee(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},u3=function(t,e,n,r){return Sv(e,new Tv(n,t),r)},f3=function(t,e,n){return Sv(t,new wv(e),n)};function Sv(t,e,n){const r=t.getPriority().val(),i=rE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=rE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Gt(a,fn(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Gt(i))),o.forEachChild(gn,(a,l)=>{const c=Sv(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Iv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Cv(t,e){let n=e instanceof Tt?e:new Tt(e),r=t,i=Ze(n);for(;i!==null;){const s=ea(r.node.children,i)||{children:{},childCount:0};r=new Iv(i,r,s),n=bt(n),i=Ze(n)}return r}function Ta(t){return t.node.value}function WS(t,e){t.node.value=e,wm(t)}function KS(t){return t.node.childCount>0}function h3(t){return Ta(t)===void 0&&!KS(t)}function $h(t,e){lr(t.node.children,(n,r)=>{e(new Iv(n,t,r))})}function GS(t,e,n,r){n&&!r&&e(t),$h(t,i=>{GS(i,e,!0,r)}),n&&r&&e(t)}function d3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Rc(t){return new Tt(t.parent===null?t.name:Rc(t.parent)+"/"+t.name)}function wm(t){t.parent!==null&&p3(t.parent,t.name,t)}function p3(t,e,n){const r=h3(n),i=_i(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wm(t))}/**
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
 */const m3=/[\[\].#$\/\u0000-\u001F\u007F]/,g3=/[\[\].#$\u0000-\u001F\u007F]/,Jd=10*1024*1024,YS=function(t){return typeof t=="string"&&t.length!==0&&!m3.test(t)},v3=function(t){return typeof t=="string"&&t.length!==0&&!g3.test(t)},y3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),v3(t)},XS=function(t,e,n){const r=n instanceof Tt?new qL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_s(r));if(typeof e=="function")throw new Error(t+"contains a function "+_s(r)+" with contents = "+e.toString());if(YT(e))throw new Error(t+"contains "+e.toString()+" "+_s(r));if(typeof e=="string"&&e.length>Jd/3&&Ph(e)>Jd)throw new Error(t+"contains a string greater than "+Jd+" utf8 bytes "+_s(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(lr(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!YS(o)))throw new Error(t+" contains an invalid key ("+o+") "+_s(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JL(r,o),XS(t,a,r),ZL(r)}),i&&s)throw new Error(t+' contains ".value" child '+_s(r)+" in addition to actual children.")}},b3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!YS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!y3(n))throw new Error(yk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class E3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _3(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!vS(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function co(t,e,n){_3(t,n),w3(t,r=>gr(r,e)||gr(e,r))}function w3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(T3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function T3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();$s&&un("event: "+n.toString()),Ac(r)}}}/**
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
 */const S3="repo_interrupt",I3=25;class C3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new E3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pf(),this.transactionQueueTree_=new Iv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function A3(t,e,n){if(t.stats_=hv(t.repoInfo_),t.forceRestClient_||_L())t.server_=new Of(t.repoInfo_,(r,i,s,o)=>{iE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{sn(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new li(t.repoInfo_,e,(r,i,s,o)=>{iE(t,r,i,s,o)},r=>{sE(t,r)},r=>{R3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=AL(t.repoInfo_,()=>new C4(t.stats_,t.server_)),t.infoData_=new _4,t.infoSyncTree_=new nE({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Lh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Av(t,"connected",!1),t.serverSyncTree_=new nE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);co(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function x3(t){const n=t.infoData_.getNode(new Tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function QS(t){return a3({timestamp:x3(t)})}function iE(t,e,n,r,i){t.dataUpdateCount++;const s=new Tt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=yf(n,c=>fn(c));o=o3(t.serverSyncTree_,s,l,i)}else{const l=fn(n);o=s3(t.serverSyncTree_,s,l,i)}else if(r){const l=yf(n,c=>fn(c));o=i3(t.serverSyncTree_,s,l)}else{const l=fn(n);o=Lh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Rv(t,s)),co(t.eventQueue_,a,o)}function sE(t,e){Av(t,"connected",e),e===!1&&P3(t)}function R3(t,e){lr(e,(n,r)=>{Av(t,n,r)})}function Av(t,e,n){const r=new Tt("/.info/"+e),i=fn(n);t.infoData_.updateSnapshot(r,i);const s=Lh(t.infoSyncTree_,r,i);co(t.eventQueue_,r,s)}function O3(t){return t.nextWriteId_++}function P3(t){qS(t,"onDisconnectEvents");const e=QS(t),n=Pf();mm(t.onDisconnect_,ut(),(i,s)=>{const o=u3(i,s,t.serverSyncTree_,e);SS(n,i,o)});let r=[];mm(n,ut(),(i,s)=>{r=r.concat(Lh(t.serverSyncTree_,i,s));const o=M3(t,i);Rv(t,o)}),t.onDisconnect_=Pf(),co(t.eventQueue_,ut(),r)}function k3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(S3)}function qS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),un(n,...e)}function JS(t,e,n){return US(t.serverSyncTree_,e,n)||ot.EMPTY_NODE}function xv(t,e=t.transactionQueueTree_){if(e||Uh(t,e),Ta(e)){const n=eI(t,e);ee(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&N3(t,Rc(e),n)}else KS(e)&&$h(e,n=>{xv(t,n)})}function N3(t,e,n){const r=n.map(c=>c.currentWriteId),i=JS(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];ee(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=sr(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qS(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(xo(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Uh(t,Cv(t.transactionQueueTree_,e)),xv(t,t.transactionQueueTree_),co(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)Ac(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{qn("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Rv(t,e)}},o)}function Rv(t,e){const n=ZS(t,e),r=Rc(n),i=eI(t,n);return D3(t,i,r),r}function D3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=sr(n,l.path);let u=!1,f;if(ee(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(xo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=I3)u=!0,f="maxretry",i=i.concat(xo(t.serverSyncTree_,l.currentWriteId,!0));else{const h=JS(t,l.path,o);l.currentInputSnapshot=h;const d=e[a].update(h.val());if(d!==void 0){XS("transaction failed: Data returned ",d,l.path);let p=fn(d);typeof d=="object"&&d!=null&&_i(d,".priority")||(p=p.updatePriority(h.getPriority()));const y=l.currentWriteId,v=QS(t),g=f3(p,h,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=g,l.currentWriteId=O3(t),o.splice(o.indexOf(y),1),i=i.concat(r3(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(xo(t.serverSyncTree_,y,!0))}else u=!0,f="nodata",i=i.concat(xo(t.serverSyncTree_,l.currentWriteId,!0))}co(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Uh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ac(r[a]);xv(t,t.transactionQueueTree_)}function ZS(t,e){let n,r=t.transactionQueueTree_;for(n=Ze(e);n!==null&&Ta(r)===void 0;)r=Cv(r,n),e=bt(e),n=Ze(e);return r}function eI(t,e){const n=[];return tI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function tI(t,e,n){const r=Ta(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);$h(e,i=>{tI(t,i,n)})}function Uh(t,e){const n=Ta(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,WS(e,n.length>0?n:void 0)}$h(e,r=>{Uh(t,r)})}function M3(t,e){const n=Rc(ZS(t,e)),r=Cv(t.transactionQueueTree_,e);return d3(r,i=>{Zd(t,i)}),Zd(t,r),GS(r,i=>{Zd(t,i)}),n}function Zd(t,e){const n=Ta(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ee(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(ee(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?WS(e,void 0):n.length=s+1,co(t.eventQueue_,Rc(e),i);for(let o=0;o<r.length;o++)Ac(r[o])}}/**
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
 */function L3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function F3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qn(`Invalid query segment '${n}' in query '${t}'`)}return e}const oE=function(t,e){const n=$3(t),r=n.namespace;n.domain==="firebase.com"&&Ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SL(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Tt(n.pathString)}},$3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=L3(t.substring(u,f)));const h=F3(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Ov{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Xe(this._path)?null:pS(this._path)}get ref(){return new Sa(this._repo,this._path)}get _queryIdentifier(){const e=Wb(this._queryParams),n=uv(e);return n==="{}"?"default":n}get _queryObject(){return Wb(this._queryParams)}isEqual(e){if(e=Wt(e),!(e instanceof Ov))return!1;const n=this._repo===e._repo,r=vS(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+QL(this._path)}}class Sa extends Ov{constructor(e,n){super(e,n,new gv,!1)}get parent(){const e=gS(this._path);return e===null?null:new Sa(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}t3(Sa);n3(Sa);/**
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
 */const U3="FIREBASE_DATABASE_EMULATOR_HOST",Tm={};let V3=!1;function j3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oE(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[U3]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=oE(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new hm(hm.OWNER):new TL(t.name,t.options,e);b3("Invalid Firebase Database URL",o),Xe(o.path)||Ys("Database URL must point to the root of a Firebase Database (not including a child path).");const f=H3(a,t,u,new wL(t.name,n));return new z3(f,t)}function B3(t,e){const n=Tm[e];(!n||n[t.key]!==t)&&Ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),k3(t),delete n[t.key]}function H3(t,e,n,r){let i=Tm[e.name];i||(i={},Tm[e.name]=i);let s=i[t.toURLString()];return s&&Ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new C3(t,V3,n,r),i[t.toURLString()]=s,s}class z3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(A3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sa(this._repo,ut())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ys("Cannot call "+e+" on a deleted database.")}}/**
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
 */function W3(t){lL(hs),Vr(new Tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return j3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Qn(Ab,xb,t),Qn(Ab,xb,"esm2017")}li.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};li.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};W3();var K3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,Pv=Pv||{},Pe=K3||self;function Mf(){}function Vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function G3(t){return Object.prototype.hasOwnProperty.call(t,ep)&&t[ep]||(t[ep]=++Y3)}var ep="closure_uid_"+(1e9*Math.random()>>>0),Y3=0;function X3(t,e,n){return t.call.apply(t.bind,arguments)}function Q3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yn=X3:yn=Q3,yn.apply(null,arguments)}function vu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Zt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ds(){this.s=this.s,this.o=this.o}var q3=0;ds.prototype.s=!1;ds.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),q3!=0)&&G3(this)};ds.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function aE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function bn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bn.prototype.h=function(){this.defaultPrevented=!0};var J3=function(){if(!Pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Pe.addEventListener("test",Mf,e),Pe.removeEventListener("test",Mf,e)}catch{}return t}();function Lf(t){return/^[\s\xa0]*$/.test(t)}var lE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tp(t,e){return t<e?-1:t>e?1:0}function jh(){var t=Pe.navigator;return t&&(t=t.userAgent)?t:""}function Rr(t){return jh().indexOf(t)!=-1}function Nv(t){return Nv[" "](t),t}Nv[" "]=Mf;function rI(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var Z3=Rr("Opera"),ia=Rr("Trident")||Rr("MSIE"),iI=Rr("Edge"),Sm=iI||ia,sI=Rr("Gecko")&&!(jh().toLowerCase().indexOf("webkit")!=-1&&!Rr("Edge"))&&!(Rr("Trident")||Rr("MSIE"))&&!Rr("Edge"),eF=jh().toLowerCase().indexOf("webkit")!=-1&&!Rr("Edge");function oI(){var t=Pe.document;return t?t.documentMode:void 0}var Ff;e:{var np="",rp=function(){var t=jh();if(sI)return/rv:([^\);]+)(\)|;)/.exec(t);if(iI)return/Edge\/([\d\.]+)/.exec(t);if(ia)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eF)return/WebKit\/(\S+)/.exec(t);if(Z3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rp&&(np=rp?rp[1]:""),ia){var ip=oI();if(ip!=null&&ip>parseFloat(np)){Ff=String(ip);break e}}Ff=np}var tF={};function nF(){return rI(tF,9,function(){let t=0;const e=lE(String(Ff)).split("."),n=lE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=tp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||tp(i[2].length==0,s[2].length==0)||tp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Im;if(Pe.document&&ia){var cE=oI();Im=cE||parseInt(Ff,10)||void 0}else Im=void 0;var rF=Im;function Ql(t,e){if(bn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sI){e:{try{Nv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ql.$.h.call(this)}}Zt(Ql,bn);var iF={2:"touch",3:"pen",4:"mouse"};Ql.prototype.h=function(){Ql.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pc="closure_listenable_"+(1e6*Math.random()|0),sF=0;function oF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++sF,this.fa=this.ia=!1}function Bh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Dv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function aI(t){const e={};for(const n in t)e[n]=t[n];return e}const uE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<uE.length;s++)n=uE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hh(t){this.src=t,this.g={},this.h=0}Hh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Am(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Cm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=nI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Bh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Am(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Mv="closure_lm_"+(1e6*Math.random()|0),sp={};function cI(t,e,n,r,i){if(r&&r.once)return fI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cI(t,e[s],n,r,i);return null}return n=$v(n),t&&t[Pc]?t.O(e,n,Oc(r)?!!r.capture:!!r,i):uI(t,e,n,!1,r,i)}function uI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Oc(i)?!!i.capture:!!i,a=Fv(t);if(a||(t[Mv]=a=new Hh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=aF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J3||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(dI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aF(){function t(n){return e.call(t.src,t.listener,n)}const e=lF;return t}function fI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)fI(t,e[s],n,r,i);return null}return n=$v(n),t&&t[Pc]?t.P(e,n,Oc(r)?!!r.capture:!!r,i):uI(t,e,n,!0,r,i)}function hI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)hI(t,e[s],n,r,i);else r=Oc(r)?!!r.capture:!!r,n=$v(n),t&&t[Pc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Am(s,n,r,i),-1<n&&(Bh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Am(e,n,r,i)),(n=-1<t?e[t]:null)&&Lv(n))}function Lv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pc])Cm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(dI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fv(e))?(Cm(n,t),n.h==0&&(n.src=null,e[Mv]=null)):Bh(t)}}}function dI(t){return t in sp?sp[t]:sp[t]="on"+t}function lF(t,e){if(t.fa)t=!0;else{e=new Ql(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Lv(t),t=n.call(r,e)}return t}function Fv(t){return t=t[Mv],t instanceof Hh?t:null}var op="__closure_events_fn_"+(1e9*Math.random()>>>0);function $v(t){return typeof t=="function"?t:(t[op]||(t[op]=function(e){return t.handleEvent(e)}),t[op])}function Jt(){ds.call(this),this.i=new Hh(this),this.S=this,this.J=null}Zt(Jt,ds);Jt.prototype[Pc]=!0;Jt.prototype.removeEventListener=function(t,e,n,r){hI(this,t,e,n,r)};function on(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new bn(e,t);else if(e instanceof bn)e.target=e.target||t;else{var i=e;e=new bn(r,t),lI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yu(o,r,!0,e)&&i}if(o=e.g=t,i=yu(o,r,!0,e)&&i,i=yu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yu(o,r,!1,e)&&i}Jt.prototype.N=function(){if(Jt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Bh(n[r]);delete t.g[e],t.h--}}this.J=null};Jt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Jt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Cm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Uv=Pe.JSON.stringify;function cF(){var t=gI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uF{constructor(){this.h=this.g=null}add(e,n){const r=pI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fF,t=>t.reset());class fF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hF(t){Pe.setTimeout(()=>{throw t},0)}function mI(t,e){xm||dF(),Rm||(xm(),Rm=!0),gI.add(t,e)}var xm;function dF(){var t=Pe.Promise.resolve(void 0);xm=function(){t.then(pF)}}var Rm=!1,gI=new uF;function pF(){for(var t;t=cF();){try{t.h.call(t.g)}catch(n){hF(n)}var e=pI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rm=!1}function zh(t,e){Jt.call(this),this.h=t||1,this.g=e||Pe,this.j=yn(this.qb,this),this.l=Date.now()}Zt(zh,Jt);te=zh.prototype;te.ga=!1;te.T=null;te.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),on(this,"tick"),this.ga&&(Vv(this),this.start()))}};te.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}te.N=function(){zh.$.N.call(this),Vv(this),delete this.g};function jv(t,e,n){if(typeof t=="function")n&&(t=yn(t,n));else if(t&&typeof t.handleEvent=="function")t=yn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Pe.setTimeout(t,e||0)}function vI(t){t.g=jv(()=>{t.g=null,t.i&&(t.i=!1,vI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mF extends ds{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vI(this)}N(){super.N(),this.g&&(Pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ql(t){ds.call(this),this.h=t,this.g={}}Zt(ql,ds);var fE=[];function yI(t,e,n,r){Array.isArray(n)||(n&&(fE[0]=n.toString()),n=fE);for(var i=0;i<n.length;i++){var s=cI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function bI(t){Dv(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lv(e)},t),t.g={}}ql.prototype.N=function(){ql.$.N.call(this),bI(this)};ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wh(){this.g=!0}Wh.prototype.Ea=function(){this.g=!1};function gF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function vF(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ro(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bF(t,n)+(r?" "+r:"")})}function yF(t,e){t.info(function(){return"TIMEOUT: "+e})}Wh.prototype.info=function(){};function bF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Uv(n)}catch{return e}}var uo={},hE=null;function Kh(){return hE=hE||new Jt}uo.Ta="serverreachability";function EI(t){bn.call(this,uo.Ta,t)}Zt(EI,bn);function Jl(t){const e=Kh();on(e,new EI(e))}uo.STAT_EVENT="statevent";function _I(t,e){bn.call(this,uo.STAT_EVENT,t),this.stat=e}Zt(_I,bn);function Cn(t){const e=Kh();on(e,new _I(e,t))}uo.Ua="timingevent";function wI(t,e){bn.call(this,uo.Ua,t),this.size=e}Zt(wI,bn);function kc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Pe.setTimeout(function(){t()},e)}var Gh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},TI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bv(){}Bv.prototype.h=null;function dE(t){return t.h||(t.h=t.i())}function SI(){}var Nc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hv(){bn.call(this,"d")}Zt(Hv,bn);function zv(){bn.call(this,"c")}Zt(zv,bn);var Om;function Yh(){}Zt(Yh,Bv);Yh.prototype.g=function(){return new XMLHttpRequest};Yh.prototype.i=function(){return{}};Om=new Yh;function Dc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ql(this),this.P=EF,t=Sm?125:void 0,this.V=new zh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new II}function II(){this.i=null,this.g="",this.h=!1}var EF=45e3,Pm={},$f={};te=Dc.prototype;te.setTimeout=function(t){this.P=t};function km(t,e,n){t.L=1,t.v=Qh(di(e)),t.s=n,t.S=!0,CI(t,null)}function CI(t,e){t.G=Date.now(),Mc(t),t.A=di(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),DI(n.i,"t",r),t.C=0,n=t.l.I,t.h=new II,t.g=tC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new mF(yn(t.Pa,t,t.g),t.O)),yI(t.U,t.g,"readystatechange",t.nb),e=t.I?aI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Jl(),gF(t.j,t.u,t.A,t.m,t.W,t.s)}te.nb=function(t){t=t.target;const e=this.M;e&&si(t)==3?e.l():this.Pa(t)};te.Pa=function(t){try{if(t==this.g)e:{const u=si(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||Sm||this.g&&(this.h.h||this.g.ja()||vE(this.g)))){this.J||u!=4||e==7||(e==8||0>=f?Jl(3):Jl(2)),Xh(this);var n=this.g.da();this.aa=n;t:if(AI(this)){var r=vE(this.g);t="";var i=r.length,s=si(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xs(this),yl(this);var o="";break t}this.h.i=new Pe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,vF(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lf(a)){var c=a;break t}}c=null}if(n=c)Ro(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nm(this,n);else{this.i=!1,this.o=3,Cn(12),xs(this),yl(this);break e}}this.S?(xI(this,u,o),Sm&&this.i&&u==3&&(yI(this.U,this.V,"tick",this.mb),this.V.start())):(Ro(this.j,this.m,o,null),Nm(this,o)),u==4&&xs(this),this.i&&!this.J&&(u==4?qI(this.l,this):(this.i=!1,Mc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Cn(12)):(this.o=0,Cn(13)),xs(this),yl(this)}}}catch{}finally{}};function AI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function xI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=_F(t,n),i==$f){e==4&&(t.o=4,Cn(14),r=!1),Ro(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Pm){t.o=4,Cn(15),Ro(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ro(t.j,t.m,i,null),Nm(t,i);AI(t)&&i!=$f&&i!=Pm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Cn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qv(e),e.L=!0,Cn(11))):(Ro(t.j,t.m,n,"[Invalid Chunked Response]"),xs(t),yl(t))}te.mb=function(){if(this.g){var t=si(this.g),e=this.g.ja();this.C<e.length&&(Xh(this),xI(this,t,e),this.i&&t!=4&&Mc(this))}};function _F(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$f:(n=Number(e.substring(n,r)),isNaN(n)?Pm:(r+=1,r+n>e.length?$f:(e=e.substr(r,n),t.C=r+n,e)))}te.cancel=function(){this.J=!0,xs(this)};function Mc(t){t.Y=Date.now()+t.P,RI(t,t.P)}function RI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kc(yn(t.lb,t),e)}function Xh(t){t.B&&(Pe.clearTimeout(t.B),t.B=null)}te.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(yF(this.j,this.A),this.L!=2&&(Jl(),Cn(17)),xs(this),this.o=2,yl(this)):RI(this,this.Y-t)};function yl(t){t.l.H==0||t.J||qI(t.l,t)}function xs(t){Xh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Vv(t.V),bI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Nm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dm(n.h,t))){if(!t.K&&Dm(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)jf(n),Zh(n);else break e;Qv(n),Cn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=kc(yn(n.ib,n),6e3));if(1>=FI(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Rs(n,11)}else if((t.K||n.g==t)&&jf(n),!Lf(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const f=c[4];f!=null&&(n.Ga=f,n.j.info("SVER="+n.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wv(s,s.h),s.h=null))}if(r.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,At(r.G,r.F,m))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=eC(r,r.I?r.oa:null,r.Y),o.K){$I(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Xh(a),Mc(a)),r.g=o}else XI(r);0<n.i.length&&ed(n)}else c[0]!="stop"&&c[0]!="close"||Rs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Rs(n,7):Xv(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Jl(4)}catch{}}function wF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TF(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function OI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TF(t),r=wF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var PI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Us(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Us){this.h=e!==void 0?e:t.h,Uf(this,t.j),this.s=t.s,this.g=t.g,Vf(this,t.m),this.l=t.l,e=t.i;var n=new Zl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pE(this,n),this.o=t.o}else t&&(n=String(t).match(PI))?(this.h=!!e,Uf(this,n[1]||"",!0),this.s=Qa(n[2]||""),this.g=Qa(n[3]||"",!0),Vf(this,n[4]),this.l=Qa(n[5]||"",!0),pE(this,n[6]||"",!0),this.o=Qa(n[7]||"")):(this.h=!!e,this.i=new Zl(null,this.h))}Us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qa(e,mE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qa(e,mE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qa(n,n.charAt(0)=="/"?AF:CF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qa(n,RF)),t.join("")};function di(t){return new Us(t)}function Uf(t,e,n){t.j=n?Qa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pE(t,e,n){e instanceof Zl?(t.i=e,OF(t.i,t.h)):(n||(e=qa(e,xF)),t.i=new Zl(e,t.h))}function At(t,e,n){t.i.set(e,n)}function Qh(t){return At(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mE=/[#\/\?@]/g,CF=/[#\?:]/g,AF=/[#\?]/g,xF=/[#\?@]/g,RF=/#/g;function Zl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ps(t){t.g||(t.g=new Map,t.h=0,t.i&&SF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}te=Zl.prototype;te.add=function(t,e){ps(this),this.i=null,t=Ia(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kI(t,e){ps(t),e=Ia(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function NI(t,e){return ps(t),e=Ia(t,e),t.g.has(e)}te.forEach=function(t,e){ps(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};te.sa=function(){ps(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};te.Z=function(t){ps(this);let e=[];if(typeof t=="string")NI(this,t)&&(e=e.concat(this.g.get(Ia(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};te.set=function(t,e){return ps(this),this.i=null,t=Ia(this,t),NI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};te.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function DI(t,e,n){kI(t,e),0<n.length&&(t.i=null,t.g.set(Ia(t,e),kv(n)),t.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ia(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OF(t,e){e&&!t.j&&(ps(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(kI(this,r),DI(this,i,n))},t)),t.j=e}var PF=class{constructor(t,e){this.h=t,this.g=e}};function MI(t){this.l=t||kF,Pe.PerformanceNavigationTiming?(t=Pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Pe.g&&Pe.g.Ka&&Pe.g.Ka()&&Pe.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kF=10;function LI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function FI(t){return t.h?1:t.g?t.g.size:0}function Dm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wv(t,e){t.g?t.g.add(e):t.h=e}function $I(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}MI.prototype.cancel=function(){if(this.i=UI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function UI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kv(t.i)}function Kv(){}Kv.prototype.stringify=function(t){return Pe.JSON.stringify(t,void 0)};Kv.prototype.parse=function(t){return Pe.JSON.parse(t,void 0)};function NF(){this.g=new Kv}function DF(t,e,n){const r=n||"";try{OI(t,function(i,s){let o=i;Oc(i)&&(o=Uv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function MF(t,e){const n=new Wh;if(Pe.Image){const r=new Image;r.onload=vu(bu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=vu(bu,n,r,"TestLoadImage: error",!1,e),r.onabort=vu(bu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=vu(bu,n,r,"TestLoadImage: timeout",!1,e),Pe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lc(t){this.l=t.fc||null,this.j=t.ob||!1}Zt(Lc,Bv);Lc.prototype.g=function(){return new qh(this.l,this.j)};Lc.prototype.i=function(t){return function(){return t}}({});function qh(t,e){Jt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zt(qh,Jt);var Gv=0;te=qh.prototype;te.open=function(t,e){if(this.readyState!=Gv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ec(this)};te.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Pe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fc(this)),this.readyState=Gv};te.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ec(this)),this.g&&(this.readyState=3,ec(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Pe.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;VI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function VI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}te.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fc(this):ec(this),this.readyState==3&&VI(this)}};te.Za=function(t){this.g&&(this.response=this.responseText=t,Fc(this))};te.Ya=function(t){this.g&&(this.response=t,Fc(this))};te.ka=function(){this.g&&Fc(this)};function Fc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ec(t)}te.setRequestHeader=function(t,e){this.v.append(t,e)};te.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ec(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LF=Pe.JSON.parse;function Ft(t){Jt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jI,this.L=this.M=!1}Zt(Ft,Jt);var jI="",FF=/^https?$/i,$F=["POST","PUT"];te=Ft.prototype;te.Oa=function(t){this.M=t};te.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Om.g(),this.C=this.u?dE(this.u):dE(Om),this.g.onreadystatechange=yn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){gE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Pe.FormData&&t instanceof Pe.FormData,!(0<=nI($F,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zI(this),0<this.B&&((this.L=UF(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yn(this.ua,this)):this.A=jv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gE(this,s)}};function UF(t){return ia&&nF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}te.ua=function(){typeof Pv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,on(this,"timeout"),this.abort(8))};function gE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BI(t),Jh(t)}function BI(t){t.F||(t.F=!0,on(t,"complete"),on(t,"error"))}te.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,on(this,"complete"),on(this,"abort"),Jh(this))};te.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jh(this,!0)),Ft.$.N.call(this)};te.La=function(){this.s||(this.G||this.v||this.l?HI(this):this.kb())};te.kb=function(){HI(this)};function HI(t){if(t.h&&typeof Pv<"u"&&(!t.C[1]||si(t)!=4||t.da()!=2)){if(t.v&&si(t)==4)jv(t.La,0,t);else if(on(t,"readystatechange"),si(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(PI)[1]||null;if(!i&&Pe.self&&Pe.self.location){var s=Pe.self.location.protocol;i=s.substr(0,s.length-1)}r=!FF.test(i?i.toLowerCase():"")}n=r}if(n)on(t,"complete"),on(t,"success");else{t.m=6;try{var o=2<si(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",BI(t)}}finally{Jh(t)}}}}function Jh(t,e){if(t.g){zI(t);const n=t.g,r=t.C[0]?Mf:null;t.g=null,t.C=null,e||on(t,"ready");try{n.onreadystatechange=r}catch{}}}function zI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Pe.clearTimeout(t.A),t.A=null)}function si(t){return t.g?t.g.readyState:0}te.da=function(){try{return 2<si(this)?this.g.status:-1}catch{return-1}};te.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LF(e)}};function vE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ia=function(){return this.m};te.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function WI(t){let e="";return Dv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=WI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):At(t,e,n))}function Ua(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function KI(t){this.Ga=0,this.i=[],this.j=new Wh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ua("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ua("baseRetryDelayMs",5e3,t),this.hb=Ua("retryDelaySeedMs",1e4,t),this.eb=Ua("forwardChannelMaxRetries",2,t),this.xa=Ua("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new MI(t&&t.concurrentRequestLimit),this.Ja=new NF,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}te=KI.prototype;te.qa=8;te.H=1;function Xv(t){if(GI(t),t.H==3){var e=t.W++,n=di(t.G);At(n,"SID",t.J),At(n,"RID",e),At(n,"TYPE","terminate"),$c(t,n),e=new Dc(t,t.j,e,void 0),e.L=2,e.v=Qh(di(n)),n=!1,Pe.navigator&&Pe.navigator.sendBeacon&&(n=Pe.navigator.sendBeacon(e.v.toString(),"")),!n&&Pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=tC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Mc(e)}ZI(t)}function Zh(t){t.g&&(qv(t),t.g.cancel(),t.g=null)}function GI(t){Zh(t),t.u&&(Pe.clearTimeout(t.u),t.u=null),jf(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Pe.clearTimeout(t.m),t.m=null)}function ed(t){LI(t.h)||t.m||(t.m=!0,mI(t.Na,t),t.C=0)}function VF(t,e){return FI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=kc(yn(t.Na,t,e),JI(t,t.C)),t.C++,!0)}te.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Dc(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=aI(s),lI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YI(this,i,e),n=di(this.G),At(n,"RID",t),At(n,"CVER",22),this.F&&At(n,"X-HTTP-Session-Id",this.F),$c(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(WI(s)))+"&"+e:this.o&&Yv(n,this.o,s)),Wv(this.h,i),this.bb&&At(n,"TYPE","init"),this.P?(At(n,"$req",e),At(n,"SID","null"),i.ba=!0,km(i,n,null)):km(i,n,e),this.H=2}}else this.H==3&&(t?yE(this,t):this.i.length==0||LI(this.h)||yE(this))};function yE(t,e){var n;e?n=e.m:n=t.W++;const r=di(t.G);At(r,"SID",t.J),At(r,"RID",n),At(r,"AID",t.V),$c(t,r),t.o&&t.s&&Yv(r,t.o,t.s),n=new Dc(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=YI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wv(t.h,n),km(n,r,e)}function $c(t,e){t.ma&&Dv(t.ma,function(n,r){At(e,r,n)}),t.l&&OI({},function(n,r){At(e,r,n)})}function YI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?yn(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{DF(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function XI(t){t.g||t.u||(t.ba=1,mI(t.Ma,t),t.A=0)}function Qv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=kc(yn(t.Ma,t),JI(t,t.A)),t.A++,!0)}te.Ma=function(){if(this.u=null,QI(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=kc(yn(this.jb,this),t)}};te.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Cn(10),Zh(this),QI(this))};function qv(t){t.B!=null&&(Pe.clearTimeout(t.B),t.B=null)}function QI(t){t.g=new Dc(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=di(t.wa);At(e,"RID","rpc"),At(e,"SID",t.J),At(e,"CI",t.M?"0":"1"),At(e,"AID",t.V),At(e,"TYPE","xmlhttp"),$c(t,e),t.o&&t.s&&Yv(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Qh(di(e)),n.s=null,n.S=!0,CI(n,t)}te.ib=function(){this.v!=null&&(this.v=null,Zh(this),Qv(this),Cn(19))};function jf(t){t.v!=null&&(Pe.clearTimeout(t.v),t.v=null)}function qI(t,e){var n=null;if(t.g==e){jf(t),qv(t),t.g=null;var r=2}else if(Dm(t.h,e))n=e.F,$I(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Kh(),on(r,new wI(r,n)),ed(t)}else XI(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&VF(t,e)||r==2&&Qv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Rs(t,5);break;case 4:Rs(t,10);break;case 3:Rs(t,6);break;default:Rs(t,2)}}}function JI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Rs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=yn(t.pb,t);n||(n=new Us("//www.google.com/images/cleardot.gif"),Pe.location&&Pe.location.protocol=="http"||Uf(n,"https"),Qh(n)),MF(n.toString(),r)}else Cn(2);t.H=0,t.l&&t.l.za(e),ZI(t),GI(t)}te.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Cn(2)):(this.j.info("Failed to ping google.com"),Cn(1))};function ZI(t){if(t.H=0,t.pa=[],t.l){const e=UI(t.h);(e.length!=0||t.i.length!=0)&&(aE(t.pa,e),aE(t.pa,t.i),t.h.i.length=0,kv(t.i),t.i.length=0),t.l.ya()}}function eC(t,e,n){var r=n instanceof Us?di(n):new Us(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Vf(r,r.m);else{var i=Pe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Us(null,void 0);r&&Uf(s,r),e&&(s.g=e),i&&Vf(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&At(r,n,e),At(r,"VER",t.qa),$c(t,r),r}function tC(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ft(new Lc({ob:!0})):new Ft(t.va),e.Oa(t.I),e}function nC(){}te=nC.prototype;te.Ba=function(){};te.Aa=function(){};te.za=function(){};te.ya=function(){};te.Va=function(){};function Bf(){if(ia&&!(10<=Number(rF)))throw Error("Environmental error: no available transport.")}Bf.prototype.g=function(t,e){return new Zn(t,e)};function Zn(t,e){Jt.call(this),this.g=new KI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lf(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lf(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ca(this)}Zt(Zn,Jt);Zn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Cn(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=eC(t,null,t.Y),ed(t)};Zn.prototype.close=function(){Xv(this.g)};Zn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Uv(t),t=n);e.i.push(new PF(e.fb++,t)),e.H==3&&ed(e)};Zn.prototype.N=function(){this.g.l=null,delete this.j,Xv(this.g),delete this.g,Zn.$.N.call(this)};function rC(t){Hv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Zt(rC,Hv);function iC(){zv.call(this),this.status=1}Zt(iC,zv);function Ca(t){this.g=t}Zt(Ca,nC);Ca.prototype.Ba=function(){on(this.g,"a")};Ca.prototype.Aa=function(t){on(this.g,new rC(t))};Ca.prototype.za=function(t){on(this.g,new iC)};Ca.prototype.ya=function(){on(this.g,"b")};function jF(){this.blockSize=-1}function Ir(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Zt(Ir,jF);Ir.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ap(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ir.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ap(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ap(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ap(this,r),i=0;break}}this.h=i,this.i+=e};Ir.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function lt(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var BF={};function Jv(t){return-128<=t&&128>t?rI(BF,t,function(e){return new lt([e|0],0>e?-1:0)}):new lt([t|0],0>t?-1:0)}function Pr(t){if(isNaN(t)||!isFinite(t))return Bo;if(0>t)return rn(Pr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mm;return new lt(e,0)}function sC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return rn(sC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Pr(Math.pow(e,8)),r=Bo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Pr(Math.pow(e,s)),r=r.R(s).add(Pr(o))):(r=r.R(n),r=r.add(Pr(o)))}return r}var Mm=4294967296,Bo=Jv(0),Lm=Jv(1),bE=Jv(16777216);te=lt.prototype;te.ea=function(){if(ir(this))return-rn(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mm+r)*e,e*=Mm}return t};te.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(oi(this))return"0";if(ir(this))return"-"+rn(this).toString(t);for(var e=Pr(Math.pow(t,6)),n=this,r="";;){var i=zf(n,e).g;n=Hf(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,oi(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};te.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function oi(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ir(t){return t.h==-1}te.X=function(t){return t=Hf(this,t),ir(t)?-1:oi(t)?0:1};function rn(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new lt(n,~t.h).add(Lm)}te.abs=function(){return ir(this)?rn(this):this};te.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new lt(n,n[n.length-1]&-2147483648?-1:0)};function Hf(t,e){return t.add(rn(e))}te.R=function(t){if(oi(this)||oi(t))return Bo;if(ir(this))return ir(t)?rn(this).R(rn(t)):rn(rn(this).R(t));if(ir(t))return rn(this.R(rn(t)));if(0>this.X(bE)&&0>t.X(bE))return Pr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Eu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Eu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Eu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Eu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new lt(n,0)};function Eu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Va(t,e){this.g=t,this.h=e}function zf(t,e){if(oi(e))throw Error("division by zero");if(oi(t))return new Va(Bo,Bo);if(ir(t))return e=zf(rn(t),e),new Va(rn(e.g),rn(e.h));if(ir(e))return e=zf(t,rn(e)),new Va(rn(e.g),e.h);if(30<t.g.length){if(ir(t)||ir(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lm,r=e;0>=r.X(t);)n=EE(n),r=EE(r);var i=vo(n,1),s=vo(r,1);for(r=vo(r,2),n=vo(n,2);!oi(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=vo(r,1),n=vo(n,1)}return e=Hf(t,i.R(e)),new Va(i,e)}for(i=Bo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Pr(n),o=s.R(e);ir(o)||0<o.X(t);)n-=r,s=Pr(n),o=s.R(e);oi(s)&&(s=Lm),i=i.add(s),t=Hf(t,o)}return new Va(i,t)}te.gb=function(t){return zf(this,t).h};te.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new lt(n,this.h&t.h)};te.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new lt(n,this.h|t.h)};te.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new lt(n,this.h^t.h)};function EE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new lt(n,t.h)}function vo(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new lt(i,t.h)}Bf.prototype.createWebChannel=Bf.prototype.g;Zn.prototype.send=Zn.prototype.u;Zn.prototype.open=Zn.prototype.m;Zn.prototype.close=Zn.prototype.close;Gh.NO_ERROR=0;Gh.TIMEOUT=8;Gh.HTTP_ERROR=6;TI.COMPLETE="complete";SI.EventType=Nc;Nc.OPEN="a";Nc.CLOSE="b";Nc.ERROR="c";Nc.MESSAGE="d";Jt.prototype.listen=Jt.prototype.O;Ft.prototype.listenOnce=Ft.prototype.P;Ft.prototype.getLastError=Ft.prototype.Sa;Ft.prototype.getLastErrorCode=Ft.prototype.Ia;Ft.prototype.getStatus=Ft.prototype.da;Ft.prototype.getResponseJson=Ft.prototype.Wa;Ft.prototype.getResponseText=Ft.prototype.ja;Ft.prototype.send=Ft.prototype.ha;Ft.prototype.setWithCredentials=Ft.prototype.Oa;Ir.prototype.digest=Ir.prototype.l;Ir.prototype.reset=Ir.prototype.reset;Ir.prototype.update=Ir.prototype.j;lt.prototype.add=lt.prototype.add;lt.prototype.multiply=lt.prototype.R;lt.prototype.modulo=lt.prototype.gb;lt.prototype.compare=lt.prototype.X;lt.prototype.toNumber=lt.prototype.ea;lt.prototype.toString=lt.prototype.toString;lt.prototype.getBits=lt.prototype.D;lt.fromNumber=Pr;lt.fromString=sC;var HF=function(){return new Bf},zF=function(){return Kh()},lp=Gh,WF=TI,KF=uo,_E={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},GF=Lc,_u=SI,YF=Ft,XF=Ir,Ho=lt;const wE="@firebase/firestore";/**
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
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
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
 */let Aa="9.22.0";/**
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
 */const Js=new Ec("@firebase/firestore");function TE(){return Js.logLevel}function me(t,...e){if(Js.logLevel<=rt.DEBUG){const n=e.map(Zv);Js.debug(`Firestore (${Aa}): ${t}`,...n)}}function pi(t,...e){if(Js.logLevel<=rt.ERROR){const n=e.map(Zv);Js.error(`Firestore (${Aa}): ${t}`,...n)}}function sa(t,...e){if(Js.logLevel<=rt.WARN){const n=e.map(Zv);Js.warn(`Firestore (${Aa}): ${t}`,...n)}}function Zv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Oe(t="Unexpected state"){const e=`FIRESTORE (${Aa}) INTERNAL ASSERTION FAILED: `+t;throw pi(e),new Error(e)}function wt(t,e){t||Oe()}function $e(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends Xr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class oC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(cn.UNAUTHENTICATED))}shutdown(){}}class qF{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JF{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wt(typeof r.accessToken=="string"),new oC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return wt(e===null||typeof e=="string"),new cn(e)}}class ZF{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class e6{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new ZF(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n6{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,me("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(wt(typeof n.token=="string"),this.T=n.token,new t6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function r6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class aC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=r6(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function st(t,e){return t<e?-1:t>e?1:0}function oa(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class zt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ve(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ve(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ve(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return zt.fromMillis(Date.now())}static fromDate(e){return zt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new zt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?st(this.nanoseconds,e.nanoseconds):st(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new zt(0,0))}static max(){return new Ne(new zt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tc{constructor(e,n,r){n===void 0?n=0:n>e.length&&Oe(),r===void 0?r=e.length-n:r>e.length-n&&Oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xt extends tc{construct(e,n,r){return new xt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ve(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xt(n)}static emptyPath(){return new xt([])}}const i6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pn extends tc{construct(e,n,r){return new pn(e,n,r)}static isValidIdentifier(e){return i6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ve(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ve(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ve(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ve(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pn(n)}static emptyPath(){return new pn([])}}/**
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
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(xt.fromString(e))}static fromName(e){return new be(xt.fromString(e).popFirst(5))}static empty(){return new be(xt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new xt(e.slice()))}}function s6(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ne.fromTimestamp(r===1e9?new zt(n+1,0):new zt(n,r));return new is(i,be.empty(),e)}function o6(t){return new is(t.readTime,t.key,-1)}class is{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new is(Ne.min(),be.empty(),-1)}static max(){return new is(Ne.max(),be.empty(),-1)}}function a6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=be.comparator(t.documentKey,e.documentKey),n!==0?n:st(t.largestBatchId,e.largestBatchId))}/**
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
 */const l6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Uc(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==l6)throw t;me("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new G((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof G?n:G.resolve(n)}catch(n){return G.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):G.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):G.reject(n)}static resolve(e){return new G((n,r)=>{n(e)})}static reject(e){return new G((n,r)=>{r(e)})}static waitFor(e){return new G((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=G.resolve(!1);for(const r of e)n=n.next(i=>i?G.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new G((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new G((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ey{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ey.ct=-1;function td(t){return t==null}function Wf(t){return t===0&&1/t==-1/0}function u6(t){return typeof t=="number"&&Number.isInteger(t)&&!Wf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function SE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pt{constructor(e,n){this.comparator=e,this.root=n||nn.EMPTY}insert(e,n){return new Pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new Pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nn.RED,this.left=i??nn.EMPTY,this.right=s??nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Oe();const e=this.left.check();if(e!==this.right.check())throw Oe();return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe()}get value(){throw Oe()}get color(){throw Oe()}get left(){throw Oe()}get right(){throw Oe()}copy(t,e,n,r,i){return this}insert(t,e,n){return new nn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class En{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new IE(this.data.getIterator())}getIteratorFrom(e){return new IE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof En)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new En(this.comparator);return n.data=e,n}}class IE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gn{constructor(e){this.fields=e,e.sort(pn.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new En(pn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cC("Invalid base64 string: "+i):i}}(e);return new wn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new wn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return st(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wn.EMPTY_BYTE_STRING=new wn("");const f6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(wt(!!t),typeof t=="string"){let e=0;const n=f6.exec(t);if(wt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Vt(t.seconds),nanos:Vt(t.nanos)}}function Vt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zs(t){return typeof t=="string"?wn.fromBase64String(t):wn.fromUint8Array(t)}/**
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
 */function ty(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ny(t){const e=t.mapValue.fields.__previous_value__;return ty(e)?ny(e):e}function nc(t){const e=ss(t.mapValue.fields.__local_write_time__.timestampValue);return new zt(e.seconds,e.nanos)}/**
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
 */class h6{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class rc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ty(t)?4:d6(t)?9007199254740991:10:Oe()}function Br(t,e){if(t===e)return!0;const n=eo(t);if(n!==eo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nc(t).isEqual(nc(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ss(r.timestampValue),o=ss(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zs(r.bytesValue).isEqual(Zs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Vt(r.geoPointValue.latitude)===Vt(i.geoPointValue.latitude)&&Vt(r.geoPointValue.longitude)===Vt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Vt(r.integerValue)===Vt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Vt(r.doubleValue),o=Vt(i.doubleValue);return s===o?Wf(s)===Wf(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return oa(t.arrayValue.values||[],e.arrayValue.values||[],Br);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(SE(s)!==SE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Br(s[a],o[a])))return!1;return!0}(t,e);default:return Oe()}}function ic(t,e){return(t.values||[]).find(n=>Br(n,e))!==void 0}function aa(t,e){if(t===e)return 0;const n=eo(t),r=eo(e);if(n!==r)return st(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return st(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Vt(i.integerValue||i.doubleValue),a=Vt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return CE(t.timestampValue,e.timestampValue);case 4:return CE(nc(t),nc(e));case 5:return st(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zs(i),a=Zs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=st(o[l],a[l]);if(c!==0)return c}return st(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=st(Vt(i.latitude),Vt(s.latitude));return o!==0?o:st(Vt(i.longitude),Vt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=aa(o[l],a[l]);if(c)return c}return st(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Tu.mapValue&&s===Tu.mapValue)return 0;if(i===Tu.mapValue)return 1;if(s===Tu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=st(a[u],c[u]);if(f!==0)return f;const h=aa(o[a[u]],l[c[u]]);if(h!==0)return h}return st(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Oe()}}function CE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return st(t,e);const n=ss(t),r=ss(e),i=st(n.seconds,r.seconds);return i!==0?i:st(n.nanos,r.nanos)}function la(t){return Fm(t)}function Fm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ss(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,be.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Fm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Fm(r.fields[a])}`;return s+"}"}(t.mapValue):Oe();var e,n}function $m(t){return!!t&&"integerValue"in t}function ry(t){return!!t&&"arrayValue"in t}function AE(t){return!!t&&"nullValue"in t}function xE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yu(t){return!!t&&"mapValue"in t}function bl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function d6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bl(n)}setAll(e){let n=pn.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=bl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Br(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dn(bl(this.value))}}function uC(t){const e=[];return fo(t.fields,(n,r)=>{const i=new pn([n]);if(Yu(r)){const s=uC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gn(e)}/**
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
 */class hn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new hn(e,0,Ne.min(),Ne.min(),Ne.min(),Dn.empty(),0)}static newFoundDocument(e,n,r,i){return new hn(e,1,n,Ne.min(),r,i,0)}static newNoDocument(e,n){return new hn(e,2,n,Ne.min(),Ne.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new hn(e,3,n,Ne.min(),Ne.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kf{constructor(e,n){this.position=e,this.inclusive=n}}function RE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=be.comparator(be.fromName(o.referenceValue),n.key):r=aa(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function OE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Br(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function p6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fC{}class Ht extends fC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new g6(e,n,r):n==="array-contains"?new b6(e,r):n==="in"?new E6(e,r):n==="not-in"?new _6(e,r):n==="array-contains-any"?new w6(e,r):new Ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new v6(e,r):new y6(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(aa(n,this.value)):n!==null&&eo(this.value)===eo(n)&&this.matchesComparison(aa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Hr extends fC{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Hr(e,n)}matches(e){return hC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hC(t){return t.op==="and"}function dC(t){return m6(t)&&hC(t)}function m6(t){for(const e of t.filters)if(e instanceof Hr)return!1;return!0}function Um(t){if(t instanceof Ht)return t.field.canonicalString()+t.op.toString()+la(t.value);if(dC(t))return t.filters.map(e=>Um(e)).join(",");{const e=t.filters.map(n=>Um(n)).join(",");return`${t.op}(${e})`}}function pC(t,e){return t instanceof Ht?function(n,r){return r instanceof Ht&&n.op===r.op&&n.field.isEqual(r.field)&&Br(n.value,r.value)}(t,e):t instanceof Hr?function(n,r){return r instanceof Hr&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&pC(s,r.filters[o]),!0):!1}(t,e):void Oe()}function mC(t){return t instanceof Ht?function(e){return`${e.field.canonicalString()} ${e.op} ${la(e.value)}`}(t):t instanceof Hr?function(e){return e.op.toString()+" {"+e.getFilters().map(mC).join(" ,")+"}"}(t):"Filter"}class g6 extends Ht{constructor(e,n,r){super(e,n,r),this.key=be.fromName(r.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.matchesComparison(n)}}class v6 extends Ht{constructor(e,n){super(e,"in",n),this.keys=gC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class y6 extends Ht{constructor(e,n){super(e,"not-in",n),this.keys=gC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>be.fromName(r.referenceValue))}class b6 extends Ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ry(n)&&ic(n.arrayValue,this.value)}}class E6 extends Ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ic(this.value.arrayValue,n)}}class _6 extends Ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(ic(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ic(this.value.arrayValue,n)}}class w6 extends Ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ry(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ic(this.value.arrayValue,r))}}/**
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
 */class T6{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function PE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new T6(t,e,n,r,i,s,o)}function iy(t){const e=$e(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Um(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),td(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>la(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>la(r)).join(",")),e.dt=n}return e.dt}function sy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!p6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!OE(t.startAt,e.startAt)&&OE(t.endAt,e.endAt)}function Vm(t){return be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class nd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function S6(t,e,n,r,i,s,o,a){return new nd(t,e,n,r,i,s,o,a)}function rd(t){return new nd(t)}function kE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function I6(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function C6(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function A6(t){return t.collectionGroup!==null}function zo(t){const e=$e(t);if(e.wt===null){e.wt=[];const n=C6(e),r=I6(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new El(n)),e.wt.push(new El(pn.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new El(pn.keyField(),s))}}}return e.wt}function mi(t){const e=$e(t);if(!e._t)if(e.limitType==="F")e._t=PE(e.path,e.collectionGroup,zo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of zo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new El(s.field,o))}const r=e.endAt?new Kf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Kf(e.startAt.position,e.startAt.inclusive):null;e._t=PE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function jm(t,e,n){return new nd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function id(t,e){return sy(mi(t),mi(e))&&t.limitType===e.limitType}function vC(t){return`${iy(mi(t))}|lt:${t.limitType}`}function Bm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>mC(r)).join(", ")}]`),td(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>la(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>la(r)).join(",")),`Target(${n})`}(mi(t))}; limitType=${t.limitType})`}function sd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):be.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of zo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=RE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,zo(n),r)||n.endAt&&!function(i,s,o){const a=RE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,zo(n),r))}(t,e)}function x6(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yC(t){return(e,n)=>{let r=!1;for(const i of zo(t)){const s=R6(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function R6(t,e,n){const r=t.field.isKeyField()?be.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?aa(a,l):Oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Oe()}}/**
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
 */class xa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lC(this.inner)}size(){return this.innerSize}}/**
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
 */const O6=new Pt(be.comparator);function gi(){return O6}const bC=new Pt(be.comparator);function Ja(...t){let e=bC;for(const n of t)e=e.insert(n.key,n);return e}function EC(t){let e=bC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Os(){return _l()}function _C(){return _l()}function _l(){return new xa(t=>t.toString(),(t,e)=>t.isEqual(e))}const P6=new Pt(be.comparator),k6=new En(be.comparator);function Ke(...t){let e=k6;for(const n of t)e=e.add(n);return e}const N6=new En(st);function D6(){return N6}/**
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
 */function wC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wf(e)?"-0":e}}function TC(t){return{integerValue:""+t}}function M6(t,e){return u6(e)?TC(e):wC(t,e)}/**
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
 */class od{constructor(){this._=void 0}}function L6(t,e,n){return t instanceof Gf?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ty(i)&&(i=ny(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof sc?IC(t,e):t instanceof oc?CC(t,e):function(r,i){const s=SC(r,i),o=NE(s)+NE(r.gt);return $m(s)&&$m(r.gt)?TC(o):wC(r.serializer,o)}(t,e)}function F6(t,e,n){return t instanceof sc?IC(t,e):t instanceof oc?CC(t,e):n}function SC(t,e){return t instanceof Yf?$m(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Gf extends od{}class sc extends od{constructor(e){super(),this.elements=e}}function IC(t,e){const n=AC(e);for(const r of t.elements)n.some(i=>Br(i,r))||n.push(r);return{arrayValue:{values:n}}}class oc extends od{constructor(e){super(),this.elements=e}}function CC(t,e){let n=AC(e);for(const r of t.elements)n=n.filter(i=>!Br(i,r));return{arrayValue:{values:n}}}class Yf extends od{constructor(e,n){super(),this.serializer=e,this.gt=n}}function NE(t){return Vt(t.integerValue||t.doubleValue)}function AC(t){return ry(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $6(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof sc&&r instanceof sc||n instanceof oc&&r instanceof oc?oa(n.elements,r.elements,Br):n instanceof Yf&&r instanceof Yf?Br(n.gt,r.gt):n instanceof Gf&&r instanceof Gf}(t.transform,e.transform)}class U6{constructor(e,n){this.version=e,this.transformResults=n}}class or{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new or}static exists(e){return new or(void 0,e)}static updateTime(e){return new or(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ad{}function xC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oy(t.key,or.none()):new jc(t.key,t.data,or.none());{const n=t.data,r=Dn.empty();let i=new En(pn.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ms(t.key,r,new Gn(i.toArray()),or.none())}}function V6(t,e,n){t instanceof jc?function(r,i,s){const o=r.value.clone(),a=ME(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(r,i,s){if(!Xu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ME(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(RC(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function wl(t,e,n,r){return t instanceof jc?function(i,s,o,a){if(!Xu(i.precondition,s))return o;const l=i.value.clone(),c=LE(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(i,s,o,a){if(!Xu(i.precondition,s))return o;const l=LE(i.fieldTransforms,a,s),c=s.data;return c.setAll(RC(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return Xu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function j6(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=SC(r.transform,i||null);s!=null&&(n===null&&(n=Dn.empty()),n.set(r.field,s))}return n||null}function DE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&oa(n,r,(i,s)=>$6(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jc extends ad{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ms extends ad{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ME(t,e,n){const r=new Map;wt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,F6(o,a,n[i]))}return r}function LE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,L6(s,o,e))}return r}class oy extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class B6 extends ad{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class H6{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&V6(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_C();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=xC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&oa(this.mutations,e.mutations,(n,r)=>DE(n,r))&&oa(this.baseMutations,e.baseMutations,(n,r)=>DE(n,r))}}class ay{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){wt(e.mutations.length===r.length);let i=P6;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ay(e,n,r,i)}}/**
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
 */class z6{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class W6{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $t,Je;function K6(t){switch(t){default:return Oe();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function OC(t){if(t===void 0)return pi("GRPC error has no .code"),z.UNKNOWN;switch(t){case $t.OK:return z.OK;case $t.CANCELLED:return z.CANCELLED;case $t.UNKNOWN:return z.UNKNOWN;case $t.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case $t.INTERNAL:return z.INTERNAL;case $t.UNAVAILABLE:return z.UNAVAILABLE;case $t.UNAUTHENTICATED:return z.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case $t.NOT_FOUND:return z.NOT_FOUND;case $t.ALREADY_EXISTS:return z.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return z.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case $t.ABORTED:return z.ABORTED;case $t.OUT_OF_RANGE:return z.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return z.UNIMPLEMENTED;case $t.DATA_LOSS:return z.DATA_LOSS;default:return Oe()}}(Je=$t||($t={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ly{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Su}static getOrCreateInstance(){return Su===null&&(Su=new ly),Su}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Su=null;/**
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
 */function G6(){return new TextEncoder}/**
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
 */const Y6=new Ho([4294967295,4294967295],0);function FE(t){const e=G6().encode(t),n=new XF;return n.update(e),new Uint8Array(n.digest())}function $E(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ho([n,r],0),new Ho([i,s],0)]}class cy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Za(`Invalid padding: ${n}`);if(r<0)throw new Za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Za(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ho.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ho.fromNumber(r)));return i.compare(Y6)===1&&(i=new Ho([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=FE(e),[r,i]=$E(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=FE(e),[r,i]=$E(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ld{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Bc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ld(Ne.min(),i,new Pt(st),gi(),Ke())}}class Bc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bc(r,n,Ke(),Ke(),Ke())}}/**
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
 */class Qu{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class PC{constructor(e,n){this.targetId=e,this.Vt=n}}class kC{constructor(e,n,r=wn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class UE{constructor(){this.St=0,this.Dt=jE(),this.Ct=wn.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ke(),n=Ke(),r=Ke();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Oe()}}),new Bc(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=jE()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class X6{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=gi(),this.zt=VE(),this.Wt=new Pt(st)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:Oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Vm(o))if(i===0){const a=new be(o.path);this.Yt(r,a,hn.newNoDocument(a,Ne.min()))}else wt(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,c)}(n=ly.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,f){var h,d,p,m,y,v;const g={localCacheCount:u,existenceFilterCount:f.count},E=f.unchangedNames;return E&&(g.bloomFilter={applied:c===0,hashCount:(h=E==null?void 0:E.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(m=(p=(d=E==null?void 0:E.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(v=(y=E==null?void 0:E.bits)===null||y===void 0?void 0:y.padding)!==null&&v!==void 0?v:0}),g}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Zs(s).toUint8Array()}catch(u){if(u instanceof cC)return sa("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new cy(l,o,a)}catch(u){return sa(u instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:i!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Vm(a.target)){const l=new be(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,hn.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Ke();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ld(e,n,this.Wt,this.jt,r);return this.jt=gi(),this.zt=VE(),this.Wt=new Pt(st),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new UE,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new En(st),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||me("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new UE),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function VE(){return new Pt(be.comparator)}function jE(){return new Pt(be.comparator)}const Q6=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),q6=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),J6=(()=>({and:"AND",or:"OR"}))();class Z6{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hm(t,e){return t.useProto3Json||td(e)?e:{value:e}}function Xf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function e$(t,e){return Xf(t,e.toTimestamp())}function Lr(t){return wt(!!t),Ne.fromTimestamp(function(e){const n=ss(e);return new zt(n.seconds,n.nanos)}(t))}function uy(t,e){return function(n){return new xt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function DC(t){const e=xt.fromString(t);return wt($C(e)),e}function zm(t,e){return uy(t.databaseId,e.path)}function cp(t,e){const n=DC(e);if(n.get(1)!==t.databaseId.projectId)throw new ve(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ve(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(MC(n))}function Wm(t,e){return uy(t.databaseId,e)}function t$(t){const e=DC(t);return e.length===4?xt.emptyPath():MC(e)}function Km(t){return new xt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MC(t){return wt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function BE(t,e,n){return{name:zm(t,e),fields:n.value.mapValue.fields}}function n$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(wt(c===void 0||typeof c=="string"),wn.fromBase64String(c||"")):(wt(c===void 0||c instanceof Uint8Array),wn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?z.UNKNOWN:OC(l.code);return new ve(c,l.message||"")}(o);n=new kC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cp(t,r.document.name),s=Lr(r.document.updateTime),o=r.document.createTime?Lr(r.document.createTime):Ne.min(),a=new Dn({mapValue:{fields:r.document.fields}}),l=hn.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Qu(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cp(t,r.document),s=r.readTime?Lr(r.readTime):Ne.min(),o=hn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cp(t,r.document),s=r.removedTargetIds||[];n=new Qu([],s,i,null)}else{if(!("filter"in e))return Oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new W6(i,s),a=r.targetId;n=new PC(a,o)}}return n}function r$(t,e){let n;if(e instanceof jc)n={update:BE(t,e.key,e.value)};else if(e instanceof oy)n={delete:zm(t,e.key)};else if(e instanceof ms)n={update:BE(t,e.key,e.data),updateMask:h$(e.fieldMask)};else{if(!(e instanceof B6))return Oe();n={verify:zm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Gf)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof sc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oc)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yf)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw Oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:e$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Oe()}(t,e.precondition)),n}function i$(t,e){return t&&t.length>0?(wt(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Lr(r.updateTime):Lr(i);return s.isEqual(Ne.min())&&(s=Lr(i)),new U6(s,r.transformResults||[])}(n,e))):[]}function s$(t,e){return{documents:[Wm(t,e.path)]}}function o$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Wm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return FC(Hr.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:To(u.field),direction:c$(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Hm(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function a$(t){let e=t$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){wt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const f=LC(u);return f instanceof Hr&&dC(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new El(So(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,td(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(u){const f=!!u.before,h=u.values||[];return new Kf(h,f)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const f=!u.before,h=u.values||[];return new Kf(h,f)}(n.endAt)),S6(e,i,o,s,a,"F",l,c)}function l$(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LC(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=So(e.unaryFilter.field);return Ht.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=So(e.unaryFilter.field);return Ht.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=So(e.unaryFilter.field);return Ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=So(e.unaryFilter.field);return Ht.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Oe()}}(t):t.fieldFilter!==void 0?function(e){return Ht.create(So(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Hr.create(e.compositeFilter.filters.map(n=>LC(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Oe()}}(e.compositeFilter.op))}(t):Oe()}function c$(t){return Q6[t]}function u$(t){return q6[t]}function f$(t){return J6[t]}function To(t){return{fieldPath:t.canonicalString()}}function So(t){return pn.fromServerFormat(t.fieldPath)}function FC(t){return t instanceof Ht?function(e){if(e.op==="=="){if(xE(e.value))return{unaryFilter:{field:To(e.field),op:"IS_NAN"}};if(AE(e.value))return{unaryFilter:{field:To(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xE(e.value))return{unaryFilter:{field:To(e.field),op:"IS_NOT_NAN"}};if(AE(e.value))return{unaryFilter:{field:To(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(e.field),op:u$(e.op),value:e.value}}}(t):t instanceof Hr?function(e){const n=e.getFilters().map(r=>FC(r));return n.length===1?n[0]:{compositeFilter:{op:f$(e.op),filters:n}}}(t):Oe()}function h$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $C(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vi{constructor(e,n,r,i,s=Ne.min(),o=Ne.min(),a=wn.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class d${constructor(e){this.fe=e}}function p$(t){const e=a$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jm(e,e.limit,"L"):e}/**
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
 */class m${constructor(){this.rn=new g$}addToCollectionParentIndex(e,n){return this.rn.add(n),G.resolve()}getCollectionParents(e,n){return G.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return G.resolve()}deleteFieldIndex(e,n){return G.resolve()}getDocumentsMatchingTarget(e,n){return G.resolve(null)}getIndexType(e,n){return G.resolve(0)}getFieldIndexes(e,n){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,n){return G.resolve(is.min())}getMinOffsetFromCollectionGroup(e,n){return G.resolve(is.min())}updateCollectionGroup(e,n,r){return G.resolve()}updateIndexEntries(e,n){return G.resolve()}}class g${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new En(xt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new En(xt.comparator)).toArray()}}/**
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
 */class ca{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ca(0)}static Mn(){return new ca(-1)}}/**
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
 */class v${constructor(){this.changes=new xa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?G.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class y${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class b${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wl(r.mutation,i,Gn.empty(),zt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ke()){const i=Os();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ja();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=gi();const o=_l(),a=_l();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ms)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),wl(u.mutation,c,u.mutation.getFieldMask(),zt.now())):o.set(c.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new y$(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_l();let i=new Pt((o,a)=>o-a),s=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Gn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const f=(i.get(a.batchId)||Ke()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=_C();u.forEach(h=>{if(!s.has(h)){const d=xC(n.get(h),r.get(h));d!==null&&f.set(h,d),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return G.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return be.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):A6(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):G.resolve(Os());let a=-1,l=s;return o.next(c=>G.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?G.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Ke())).next(u=>({batchId:a,changes:EC(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new be(n)).next(r=>{let i=Ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ja();return this.indexManager.getCollectionParents(e,i).next(o=>G.forEach(o,a=>{const l=function(c,u){return new nd(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,hn.newInvalidDocument(c)))});let o=Ja();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&wl(c.mutation,l,Gn.empty(),zt.now()),sd(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class E${constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return G.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Lr(r.createTime)}),G.resolve()}getNamedQuery(e,n){return G.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:p$(r.bundledQuery),readTime:Lr(r.readTime)}}(n)),G.resolve()}}/**
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
 */class _${constructor(){this.overlays=new Pt(be.comparator),this.ls=new Map}getOverlay(e,n){return G.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Os();return G.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),G.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),G.resolve()}getOverlaysForCollection(e,n,r){const i=Os(),s=n.length+1,o=new be(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return G.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Os(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Os(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return G.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new z6(n,r));let s=this.ls.get(n);s===void 0&&(s=Ke(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class fy{constructor(){this.fs=new En(Yt.ds),this.ws=new En(Yt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Yt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Yt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new be(new xt([])),r=new Yt(n,e),i=new Yt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new be(new xt([])),r=new Yt(n,e),i=new Yt(n,e+1);let s=Ke();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Yt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Yt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return be.comparator(e.key,n.key)||st(e.As,n.As)}static _s(e,n){return st(e.As,n.As)||be.comparator(e.key,n.key)}}/**
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
 */class w${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new En(Yt.ds)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new H6(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,n){return G.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return G.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Yt(n,0),i=new Yt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),G.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new En(st);return n.forEach(i=>{const s=new Yt(i,0),o=new Yt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),G.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;be.isDocumentKey(s)||(s=s.child(""));const o=new Yt(new be(s),0);let a=new En(st);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),G.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){wt(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return G.forEach(n.mutations,i=>{const s=new Yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Yt(n,0),i=this.Rs.firstAfterOrEqual(r);return G.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class T${constructor(e){this.Ds=e,this.docs=new Pt(be.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return G.resolve(r?r.document.mutableCopy():hn.newInvalidDocument(n))}getEntries(e,n){let r=gi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():hn.newInvalidDocument(i))}),G.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=gi();const o=n.path,a=new be(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||a6(o6(u),r)<=0||(i.has(u.key)||sd(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return G.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Oe()}Cs(e,n){return G.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new S$(this)}getSize(e){return G.resolve(this.size)}}class S$ extends v${constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),G.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class I${constructor(e){this.persistence=e,this.xs=new xa(n=>iy(n),sy),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.Ns=0,this.ks=new fy,this.targetCount=0,this.Ms=ca.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),G.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ca(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,G.resolve()}updateTargetData(e,n){return this.Fn(n),G.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),G.waitFor(s).next(()=>i)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return G.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),G.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),G.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),G.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return G.resolve(r)}containsKey(e,n){return G.resolve(this.ks.containsKey(n))}}/**
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
 */class C${constructor(e,n){this.$s={},this.overlays={},this.Os=new ey(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new I$(this),this.indexManager=new m$,this.remoteDocumentCache=function(r){return new T$(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new d$(n),this.qs=new E$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new w$(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){me("MemoryPersistence","Starting transaction:",e);const i=new A$(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return G.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class A$ extends c6{constructor(e){super(),this.currentSequenceNumber=e}}class hy{constructor(e){this.persistence=e,this.Qs=new fy,this.js=null}static zs(e){return new hy(e)}get Ws(){if(this.js)return this.js;throw Oe()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),G.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),G.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Ws,r=>{const i=be.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,Ne.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return G.or([()=>G.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class dy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Ke(),i=Ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dy(e,n.fromCache,r,i)}}/**
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
 */class x${constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(kE(n))return G.resolve(null);let r=mi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jm(n,null,"F"),r=mi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ke(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,jm(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,r,i){return kE(n)||i.isEqual(Ne.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(TE()<=rt.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bm(n)),this.Wi(e,o,n,s6(i,-1)))})}ji(e,n){let r=new En(yC(e));return n.forEach((i,s)=>{sd(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return TE()<=rt.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",Bm(n)),this.Ui.getDocumentsMatchingQuery(e,n,is.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class R${constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Pt(st),this.Yi=new xa(s=>iy(s),sy),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b$(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function O$(t,e,n,r){return new R$(t,e,n,r)}async function UC(t,e){const n=$e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ke();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function P$(t,e){const n=$e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,f=u.keys();let h=G.resolve();return f.forEach(d=>{h=h.next(()=>c.getEntry(a,d)).next(p=>{const m=l.docVersions.get(d);wt(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Ke();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VC(t){const e=$e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function k$(t,e){const n=$e(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,f)=>{const h=i.get(f);if(!h)return;a.push(n.Bs.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(s,u.addedDocuments,f)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?d=d.withResumeToken(wn.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(f,d),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,d,u)&&a.push(n.Bs.updateTargetData(s,d))});let l=gi(),c=Ke();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(N$(s,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!r.isEqual(Ne.min())){const u=n.Bs.getLastRemoteSnapshotVersion(s).next(f=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return G.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ji=i,s))}function N$(t,e,n){let r=Ke(),i=Ke();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=gi();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):me("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:i}})}function D$(t,e){const n=$e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function M$(t,e){const n=$e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,G.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Vi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Gm(t,e,n){const r=$e(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vc(o))throw o;me("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function HE(t,e,n){const r=$e(t);let i=Ne.min(),s=Ke();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=$e(a),f=u.Yi.get(c);return f!==void 0?G.resolve(u.Ji.get(f)):u.Bs.getTargetData(l,c)}(r,o,mi(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:Ne.min(),n?s:Ke())).next(a=>(L$(r,x6(e),a),{documents:a,ir:s})))}function L$(t,e,n){let r=t.Xi.get(e)||Ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class zE{constructor(){this.activeTargetIds=D6()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F${constructor(){this.Hr=new zE,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new zE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $${Yr(e){}shutdown(){}}/**
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
 */class WE{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){me("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){me("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function up(){return Iu===null?Iu=268435456+Math.round(2147483648*Math.random()):Iu++,"0x"+Iu.toString(16)}/**
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
 */const U$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class V${constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const an="WebChannelConnection";class j$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=up(),a=this.To(e,n);me("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(c=>(me("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw sa("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Aa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=U$[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=up();return new Promise((o,a)=>{const l=new YF;l.setWithCredentials(!0),l.listenOnce(WF.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case lp.NO_ERROR:const u=l.getResponseJson();me(an,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case lp.TIMEOUT:me(an,`RPC '${e}' ${s} timed out`),a(new ve(z.DEADLINE_EXCEEDED,"Request time out"));break;case lp.HTTP_ERROR:const f=l.getStatus();if(me(an,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(y)>=0?y:z.UNKNOWN}(d.status);a(new ve(p,d.message))}else a(new ve(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ve(z.UNAVAILABLE,"Connection failed."));break;default:Oe()}}finally{me(an,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);me(an,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Ro(e,n,r){const i=up(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HF(),a=zF(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new GF({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");me(an,`Creating RPC '${e}' stream ${i}: ${u}`,l);const f=o.createWebChannel(u,l);let h=!1,d=!1;const p=new V$({ro:y=>{d?me(an,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(me(an,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),me(an,`RPC '${e}' stream ${i} sending:`,y),f.send(y))},oo:()=>f.close()}),m=(y,v,g)=>{y.listen(v,E=>{try{g(E)}catch(b){setTimeout(()=>{throw b},0)}})};return m(f,_u.EventType.OPEN,()=>{d||me(an,`RPC '${e}' stream ${i} transport opened.`)}),m(f,_u.EventType.CLOSE,()=>{d||(d=!0,me(an,`RPC '${e}' stream ${i} transport closed`),p.wo())}),m(f,_u.EventType.ERROR,y=>{d||(d=!0,sa(an,`RPC '${e}' stream ${i} transport errored:`,y),p.wo(new ve(z.UNAVAILABLE,"The operation could not be completed")))}),m(f,_u.EventType.MESSAGE,y=>{var v;if(!d){const g=y.data[0];wt(!!g);const E=g,b=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(b){me(an,`RPC '${e}' stream ${i} received error:`,b);const T=b.status;let S=function(A){const I=$t[A];if(I!==void 0)return OC(I)}(T),O=b.message;S===void 0&&(S=z.INTERNAL,O="Unknown error status: "+T+" with message "+b.message),d=!0,p.wo(new ve(S,O)),f.close()}else me(an,`RPC '${e}' stream ${i} received:`,g),p._o(g)}}),m(a,KF.STAT_EVENT,y=>{y.stat===_E.PROXY?me(an,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===_E.NOPROXY&&me(an,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function fp(){return typeof document<"u"?document:null}/**
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
 */function cd(t){return new Z6(t,!0)}/**
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
 */class jC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&me("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class BC{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new jC(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(pi(n.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new ve(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return me("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(me("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B$ extends BC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=n$(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ne.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ne.min():s.readTime?Lr(s.readTime):Ne.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Km(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Vm(a)?{documents:s$(i,a)}:{query:o$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=NC(i,s.resumeToken);const l=Hm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(Ne.min())>0){o.readTime=Xf(i,s.snapshotVersion.toTimestamp());const l=Hm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=l$(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Km(this.serializer),n.removeTarget=e,this.Wo(n)}}class H$ extends BC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(wt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=i$(e.writeResults,e.commitTime),r=Lr(e.commitTime);return this.listener.cu(r,n)}return wt(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Km(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>r$(this.serializer,r))};this.Wo(n)}}/**
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
 */class z$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new ve(z.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ve(z.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ve(z.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class W${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(pi(n),this.mu=!1):me("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class K${constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{ho(this)&&(me("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=$e(a);l.vu.add(4),await Hc(l),l.bu.set("Unknown"),l.vu.delete(4),await ud(l)}(this))})}),this.bu=new W$(r,i)}}async function ud(t){if(ho(t))for(const e of t.Ru)await e(!0)}async function Hc(t){for(const e of t.Ru)await e(!1)}function HC(t,e){const n=$e(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),gy(n)?my(n):Ra(n).Ko()&&py(n,e))}function zC(t,e){const n=$e(t),r=Ra(n);n.Au.delete(e),r.Ko()&&WC(n,e),n.Au.size===0&&(r.Ko()?r.jo():ho(n)&&n.bu.set("Unknown"))}function py(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ra(t).su(e)}function WC(t,e){t.Vu.qt(e),Ra(t).iu(e)}function my(t){t.Vu=new X6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ra(t).start(),t.bu.gu()}function gy(t){return ho(t)&&!Ra(t).Uo()&&t.Au.size>0}function ho(t){return $e(t).vu.size===0}function KC(t){t.Vu=void 0}async function G$(t){t.Au.forEach((e,n)=>{py(t,e)})}async function Y$(t,e){KC(t),gy(t)?(t.bu.Iu(e),my(t)):t.bu.set("Unknown")}async function X$(t,e,n){if(t.bu.set("Online"),e instanceof kC&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){me("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qf(t,r)}else if(e instanceof Qu?t.Vu.Ht(e):e instanceof PC?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Ne.min()))try{const r=await VC(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Au.get(l);c&&i.Au.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Au.get(a);if(!c)return;i.Au.set(a,c.withResumeToken(wn.EMPTY_BYTE_STRING,c.snapshotVersion)),WC(i,a);const u=new Vi(c.target,a,l,c.sequenceNumber);py(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){me("RemoteStore","Failed to raise snapshot:",r),await Qf(t,r)}}async function Qf(t,e,n){if(!Vc(e))throw e;t.vu.add(1),await Hc(t),t.bu.set("Offline"),n||(n=()=>VC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{me("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ud(t)})}function GC(t,e){return e().catch(n=>Qf(t,n,e))}async function fd(t){const e=$e(t),n=os(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Q$(e);)try{const i=await D$(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,q$(e,i)}catch(i){await Qf(e,i)}YC(e)&&XC(e)}function Q$(t){return ho(t)&&t.Eu.length<10}function q$(t,e){t.Eu.push(e);const n=os(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function YC(t){return ho(t)&&!os(t).Uo()&&t.Eu.length>0}function XC(t){os(t).start()}async function J$(t){os(t).hu()}async function Z$(t){const e=os(t);for(const n of t.Eu)e.uu(n.mutations)}async function e5(t,e,n){const r=t.Eu.shift(),i=ay.from(r,e,n);await GC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fd(t)}async function t5(t,e){e&&os(t).ou&&await async function(n,r){if(i=r.code,K6(i)&&i!==z.ABORTED){const s=n.Eu.shift();os(n).Qo(),await GC(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await fd(n)}var i}(t,e),YC(t)&&XC(t)}async function KE(t,e){const n=$e(t);n.asyncQueue.verifyOperationInProgress(),me("RemoteStore","RemoteStore received new credentials");const r=ho(n);n.vu.add(3),await Hc(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ud(n)}async function n5(t,e){const n=$e(t);e?(n.vu.delete(2),await ud(n)):e||(n.vu.add(2),await Hc(n),n.bu.set("Unknown"))}function Ra(t){return t.Su||(t.Su=function(e,n,r){const i=$e(e);return i.fu(),new B$(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:G$.bind(null,t),ao:Y$.bind(null,t),nu:X$.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),gy(t)?my(t):t.bu.set("Unknown")):(await t.Su.stop(),KC(t))})),t.Su}function os(t){return t.Du||(t.Du=function(e,n,r){const i=$e(e);return i.fu(),new H$(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:J$.bind(null,t),ao:t5.bind(null,t),au:Z$.bind(null,t),cu:e5.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await fd(t)):(await t.Du.stop(),t.Eu.length>0&&(me("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class vy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yy(t,e){if(pi("AsyncQueue",`${e}: ${t}`),Vc(t))return new ve(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||be.comparator(n.key,r.key):(n,r)=>be.comparator(n.key,r.key),this.keyedMap=Ja(),this.sortedSet=new Pt(this.comparator)}static emptySet(e){return new Wo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class GE{constructor(){this.Cu=new Pt(be.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Oe():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ua{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ua(e,n,Wo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class r5{constructor(){this.Nu=void 0,this.listeners=[]}}class i5{constructor(){this.queries=new xa(e=>vC(e),id),this.onlineState="Unknown",this.ku=new Set}}async function QC(t,e){const n=$e(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new r5),i)try{s.Nu=await n.onListen(r)}catch(o){const a=yy(o,`Initialization of query '${Bm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&by(n)}async function qC(t,e){const n=$e(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function s5(t,e){const n=$e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&by(n)}function o5(t,e,n){const r=$e(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function by(t){t.ku.forEach(e=>{e.next()})}class JC{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ua(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ua.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class ZC{constructor(e){this.key=e}}class eA{constructor(e){this.key=e}}class a5{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ke(),this.mutatedKeys=Ke(),this.tc=yC(e),this.ec=new Wo(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new GE,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const h=i.get(u),d=sd(this.query,f)?f:null,p=!!h&&this.mutatedKeys.has(h.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;h&&d?h.data.isEqual(d.data)?p!==m&&(r.track({type:3,doc:d}),y=!0):this.rc(h,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.tc(d,l)>0||c&&this.tc(d,c)<0)&&(a=!0)):!h&&d?(r.track({type:0,doc:d}),y=!0):h&&!d&&(r.track({type:1,doc:h}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((c,u)=>function(f,h){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe()}};return d(f)-d(h)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new ua(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new GE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ke(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new eA(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new ZC(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Ke();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ua.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class l5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class c5{constructor(e){this.key=e,this.fc=!1}}class u5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new xa(a=>vC(a),id),this._c=new Map,this.mc=new Set,this.gc=new Pt(be.comparator),this.yc=new Map,this.Ic=new fy,this.Tc={},this.Ec=new Map,this.Ac=ca.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function f5(t,e){const n=_5(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await M$(n.localStore,mi(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await h5(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&HC(n.remoteStore,o)}return i}async function h5(t,e,n,r,i){t.Rc=(f,h,d)=>async function(p,m,y,v){let g=m.view.sc(y);g.zi&&(g=await HE(p.localStore,m.query,!1).then(({documents:T})=>m.view.sc(T,g)));const E=v&&v.targetChanges.get(m.targetId),b=m.view.applyChanges(g,p.isPrimaryClient,E);return XE(p,m.targetId,b.cc),b.snapshot}(t,f,h,d);const s=await HE(t.localStore,e,!0),o=new a5(e,s.ir),a=o.sc(s.documents),l=Bc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);XE(t,n,c.cc);const u=new l5(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function d5(t,e){const n=$e(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!id(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zC(n.remoteStore,r.targetId),Ym(n,r.targetId)}).catch(Uc)):(Ym(n,r.targetId),await Gm(n.localStore,r.targetId,!0))}async function p5(t,e,n){const r=w5(t);try{const i=await function(s,o){const a=$e(s),l=zt.now(),c=o.reduce((h,d)=>h.add(d.key),Ke());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=gi(),p=Ke();return a.Zi.getEntries(h,c).next(m=>{d=m,d.forEach((y,v)=>{v.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,d)).next(m=>{u=m;const y=[];for(const v of o){const g=j6(v,u.get(v.key).overlayedDocument);g!=null&&y.push(new ms(v.key,g,uC(g.value.mapValue),or.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,y,o)}).next(m=>{f=m;const y=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(h,m.batchId,y)})}).then(()=>({batchId:f.batchId,changes:EC(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Pt(st)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await zc(r,i.changes),await fd(r.remoteStore)}catch(i){const s=yy(i,"Failed to persist write");n.reject(s)}}async function tA(t,e){const n=$e(t);try{const r=await k$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(wt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?wt(o.fc):i.removedDocuments.size>0&&(wt(o.fc),o.fc=!1))}),await zc(n,r,e)}catch(r){await Uc(r)}}function YE(t,e,n){const r=$e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=$e(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const f of u.listeners)f.Mu(o)&&(l=!0)}),l&&by(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function m5(t,e,n){const r=$e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Pt(be.comparator);o=o.insert(s,hn.newNoDocument(s,Ne.min()));const a=Ke().add(s),l=new ld(Ne.min(),new Map,new Pt(st),o,a);await tA(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Ey(r)}else await Gm(r.localStore,e,!1).then(()=>Ym(r,e,n)).catch(Uc)}async function g5(t,e){const n=$e(t),r=e.batch.batchId;try{const i=await P$(n.localStore,e);rA(n,r,null),nA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zc(n,i)}catch(i){await Uc(i)}}async function v5(t,e,n){const r=$e(t);try{const i=await function(s,o){const a=$e(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(wt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);rA(r,e,n),nA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zc(r,i)}catch(i){await Uc(i)}}function nA(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function rA(t,e,n){const r=$e(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ym(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||iA(t,r)})}function iA(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(zC(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ey(t))}function XE(t,e,n){for(const r of n)r instanceof ZC?(t.Ic.addReference(r.key,e),y5(t,r)):r instanceof eA?(me("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||iA(t,r.key)):Oe()}function y5(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(me("SyncEngine","New document in limbo: "+n),t.mc.add(r),Ey(t))}function Ey(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new be(xt.fromString(e)),r=t.Ac.next();t.yc.set(r,new c5(n)),t.gc=t.gc.insert(n,r),HC(t.remoteStore,new Vi(mi(rd(n.path)),r,"TargetPurposeLimboResolution",ey.ct))}}async function zc(t,e,n){const r=$e(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=dy.Li(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const c=$e(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>G.forEach(l,f=>G.forEach(f.Fi,h=>c.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>G.forEach(f.Bi,h=>c.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!Vc(u))throw u;me("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const f=u.targetId;if(!u.fromCache){const h=c.Ji.get(f),d=h.snapshotVersion,p=h.withLastLimboFreeSnapshotVersion(d);c.Ji=c.Ji.insert(f,p)}}}(r.localStore,s))}async function b5(t,e){const n=$e(t);if(!n.currentUser.isEqual(e)){me("SyncEngine","User change. New user:",e.toKey());const r=await UC(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new ve(z.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zc(n,r.er)}}function E5(t,e){const n=$e(t),r=n.yc.get(e);if(r&&r.fc)return Ke().add(r.key);{let i=Ke();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function _5(t){const e=$e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=m5.bind(null,e),e.dc.nu=s5.bind(null,e.eventManager),e.dc.Pc=o5.bind(null,e.eventManager),e}function w5(t){const e=$e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=g5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v5.bind(null,e),e}class QE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return O$(this.persistence,new x$,e.initialUser,this.serializer)}createPersistence(e){return new C$(hy.zs,this.serializer)}createSharedClientState(e){return new F$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class T5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>YE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b5.bind(null,this.syncEngine),await n5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new i5}createDatastore(e){const n=cd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new j$(i));var i;return function(s,o,a,l){return new z$(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>YE(this.syncEngine,a,0),o=WE.D()?new WE:new $$,new K$(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new u5(r,i,s,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$e(e);me("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Hc(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class sA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):pi("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class S5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=cn.UNAUTHENTICATED,this.clientId=aC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{me("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(me("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ve(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hp(t,e){t.asyncQueue.verifyOperationInProgress(),me("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await UC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await C5(t);me("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>KE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>KE(e.remoteStore,s)),t._onlineComponents=e}function I5(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function C5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){me("FirestoreClient","Using user provided OfflineComponentProvider");try{await hp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!I5(n))throw n;sa("Error using user provided cache. Falling back to memory cache: "+n),await hp(t,new QE)}}else me("FirestoreClient","Using default OfflineComponentProvider"),await hp(t,new QE);return t._offlineComponents}async function oA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(me("FirestoreClient","Using user provided OnlineComponentProvider"),await qE(t,t._uninitializedComponentsProvider._online)):(me("FirestoreClient","Using default OnlineComponentProvider"),await qE(t,new T5))),t._onlineComponents}function A5(t){return oA(t).then(e=>e.syncEngine)}async function Xm(t){const e=await oA(t),n=e.eventManager;return n.onListen=f5.bind(null,e.syncEngine),n.onUnlisten=d5.bind(null,e.syncEngine),n}function x5(t,e,n={}){const r=new Yi;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new sA({next:f=>{s.enqueueAndForget(()=>qC(i,u));const h=f.docs.has(o);!h&&f.fromCache?l.reject(new ve(z.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&a&&a.source==="server"?l.reject(new ve(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),u=new JC(rd(o.path),c,{includeMetadataChanges:!0,Ku:!0});return QC(i,u)}(await Xm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function aA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const JE=new Map;/**
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
 */function lA(t,e,n){if(!n)throw new ve(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function R5(t,e,n,r){if(e===!0&&r===!0)throw new ve(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ZE(t){if(!be.isDocumentKey(t))throw new ve(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e_(t){if(be.isDocumentKey(t))throw new ve(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _y(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe()}function ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ve(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_y(t);throw new ve(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class t_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ve(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ve(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ve(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class hd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ve(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ve(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QF;switch(n.type){case"firstParty":return new e6(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ve(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=JE.get(e);n&&(me("ComponentProvider","Removing Datastore"),JE.delete(e),n.terminate())}(this),Promise.resolve()}}function O5(t,e,n,r={}){var i;const s=(t=ar(t,hd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&sa("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=cn.MOCK_USER;else{o=sk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ve(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new cn(l)}t._authCredentials=new qF(new oC(o,a))}}/**
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
 */class An{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class dd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dd(this.firestore,e,this._query)}}class Xi extends dd{constructor(e,n,r){super(e,n,rd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new be(e))}withConverter(e){return new Xi(this.firestore,e,this._path)}}function cA(t,e,...n){if(t=Wt(t),lA("collection","path",e),t instanceof hd){const r=xt.fromString(e,...n);return e_(r),new Xi(t,null,r)}{if(!(t instanceof An||t instanceof Xi))throw new ve(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xt.fromString(e,...n));return e_(r),new Xi(t.firestore,null,r)}}function wy(t,e,...n){if(t=Wt(t),arguments.length===1&&(e=aC.A()),lA("doc","path",e),t instanceof hd){const r=xt.fromString(e,...n);return ZE(r),new An(t,null,new be(r))}{if(!(t instanceof An||t instanceof Xi))throw new ve(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xt.fromString(e,...n));return ZE(r),new An(t.firestore,t instanceof Xi?t.converter:null,new be(r))}}/**
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
 */class P5{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new jC(this,"async_queue_retry"),this.Xc=()=>{const n=fp();n&&me("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=fp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=fp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Yi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Vc(e))throw e;me("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw pi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=vy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&Oe()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function n_(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends hd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new P5,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uA(this),this._firestoreClient.terminate()}}function k5(t,e){const n=typeof t=="object"?t:Zg(),r=typeof t=="string"?t:e||"(default)",i=Jg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ik("firestore");s&&O5(i,...s)}return i}function Ty(t){return t._firestoreClient||uA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uA(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,c){return new h6(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,aA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new S5(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class fa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fa(wn.fromBase64String(e))}catch(n){throw new ve(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fa(wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ve(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sy{constructor(e){this._methodName=e}}/**
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
 */class Iy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ve(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ve(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return st(this._lat,e._lat)||st(this._long,e._long)}}/**
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
 */const N5=/^__.*__$/;class D5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new jc(e,this.data,n,this.fieldTransforms)}}class fA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Oe()}}class Cy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Cy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return qf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(hA(this.ca)&&N5.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class M5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cd(e)}ya(e,n,r,i=!1){return new Cy({ca:e,methodName:n,ga:r,path:pn.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ay(t){const e=t._freezeSettings(),n=cd(t._databaseId);return new M5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dA(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);xy("Data must be an object, but it was:",o,r);const a=pA(r,o);let l,c;if(s.merge)l=new Gn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=Qm(e,f,n);if(!o.contains(h))throw new ve(z.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);gA(u,h)||u.push(h)}l=new Gn(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new D5(new Dn(a),l,c)}class Wc extends Sy{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function L5(t,e,n,r){const i=t.ya(1,e,n);xy("Data must be an object, but it was:",i,r);const s=[],o=Dn.empty();fo(r,(l,c)=>{const u=Ry(e,l,n);c=Wt(c);const f=i.da(u);if(c instanceof Wc)s.push(u);else{const h=md(c,f);h!=null&&(s.push(u),o.set(u,h))}});const a=new Gn(s);return new fA(o,a,i.fieldTransforms)}function F5(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Qm(e,r,n)],l=[i];if(s.length%2!=0)throw new ve(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Qm(e,s[h])),l.push(s[h+1]);const c=[],u=Dn.empty();for(let h=a.length-1;h>=0;--h)if(!gA(c,a[h])){const d=a[h];let p=l[h];p=Wt(p);const m=o.da(d);if(p instanceof Wc)c.push(d);else{const y=md(p,m);y!=null&&(c.push(d),u.set(d,y))}}const f=new Gn(c);return new fA(u,f,o.fieldTransforms)}function md(t,e){if(mA(t=Wt(t)))return xy("Unsupported field value:",e,t),pA(t,e);if(t instanceof Sy)return function(n,r){if(!hA(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=md(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return M6(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=zt.fromDate(n);return{timestampValue:Xf(r.serializer,i)}}if(n instanceof zt){const i=new zt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xf(r.serializer,i)}}if(n instanceof Iy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fa)return{bytesValue:NC(r.serializer,n._byteString)};if(n instanceof An){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${_y(n)}`)}(t,e)}function pA(t,e){const n={};return lC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fo(t,(r,i)=>{const s=md(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof zt||t instanceof Iy||t instanceof fa||t instanceof An||t instanceof Sy)}function xy(t,e,n){if(!mA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=_y(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Qm(t,e,n){if((e=Wt(e))instanceof pd)return e._internalPath;if(typeof e=="string")return Ry(t,e);throw qf("Field path arguments must be of type string or ",t,!1,void 0,n)}const $5=new RegExp("[~\\*/\\[\\]]");function Ry(t,e,n){if(e.search($5)>=0)throw qf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pd(...e.split("."))._internalPath}catch{throw qf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ve(z.INVALID_ARGUMENT,a+t+l)}function gA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class vA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U5 extends vA{data(){return super.data()}}function yA(t,e){return typeof e=="string"?Ry(t,e):e instanceof pd?e._internalPath:e._delegate._internalPath}/**
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
 */function V5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ve(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class j5{convertValue(e,n="none"){switch(eo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Iy(Vt(e.latitude),Vt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ny(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const n=ss(e);return new zt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xt.fromString(e);wt($C(r));const i=new rc(r.get(1),r.get(3)),s=new be(r.popFirst(5));return i.isEqual(n)||pi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function bA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class el{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EA extends vA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends EA{data(e={}){return super.data(e)}}class B5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new el(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new el(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ve(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new el(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new el(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:H5(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function H5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe()}}/**
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
 */function z5(t){t=ar(t,An);const e=ar(t.firestore,as);return x5(Ty(e),t._key).then(n=>SA(e,t,n))}class _A extends j5{constructor(e){super(),this.firestore=e}convertBytes(e){return new fa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,n)}}function wA(t,e,n){t=ar(t,An);const r=ar(t.firestore,as),i=bA(t.converter,e,n);return gd(r,[dA(Ay(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,or.none())])}function qm(t,e,n,...r){t=ar(t,An);const i=ar(t.firestore,as),s=Ay(i);let o;return o=typeof(e=Wt(e))=="string"||e instanceof pd?F5(s,"updateDoc",t._key,e,n,r):L5(s,"updateDoc",t._key,e),gd(i,[o.toMutation(t._key,or.exists(!0))])}function W5(t){return gd(ar(t.firestore,as),[new oy(t._key,or.none())])}function K5(t,e){const n=ar(t.firestore,as),r=wy(t),i=bA(t.converter,e);return gd(n,[dA(Ay(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,or.exists(!1))]).then(()=>r)}function TA(t,...e){var n,r,i;t=Wt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||n_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(n_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,u;if(t instanceof An)c=ar(t.firestore,as),u=rd(t._key.path),l={next:f=>{e[o]&&e[o](SA(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ar(t,dd);c=ar(f.firestore,as),u=f._query;const h=new _A(c);l={next:d=>{e[o]&&e[o](new B5(c,h,f,d))},error:e[o+1],complete:e[o+2]},V5(t._query)}return function(f,h,d,p){const m=new sA(p),y=new JC(h,m,d);return f.asyncQueue.enqueueAndForget(async()=>QC(await Xm(f),y)),()=>{m.Dc(),f.asyncQueue.enqueueAndForget(async()=>qC(await Xm(f),y))}}(Ty(c),u,a,l)}function gd(t,e){return function(n,r){const i=new Yi;return n.asyncQueue.enqueueAndForget(async()=>p5(await A5(n),r,i)),i.promise}(Ty(t),e)}function SA(t,e,n){const r=n.docs.get(e._key),i=new _A(t);return new EA(t,i,e._key,r,new el(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function r_(){return new Wc("deleteField")}(function(t,e=!0){(function(n){Aa=n})(hs),Vr(new Tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new as(new JF(n.getProvider("auth-internal")),new n6(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ve(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qn(wE,"3.12.0",t),Qn(wE,"3.12.0","esm2017")})();/**
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
 */const IA="firebasestorage.googleapis.com",G5="storageBucket",Y5=2*60*1e3,X5=10*60*1e3;/**
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
 */class Qr extends Xr{constructor(e,n,r=0){super(dp(e),`Firebase Storage: ${n} (${dp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zr||(zr={}));function dp(t){return"storage/"+t}function Q5(){const t="An unknown error occurred, please check the error payload for server response.";return new Qr(zr.UNKNOWN,t)}function q5(){return new Qr(zr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function J5(){return new Qr(zr.CANCELED,"User canceled the upload/download.")}function Z5(t){return new Qr(zr.INVALID_URL,"Invalid URL '"+t+"'.")}function eU(t){return new Qr(zr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function i_(t){return new Qr(zr.INVALID_ARGUMENT,t)}function CA(){return new Qr(zr.APP_DELETED,"The Firebase app was deleted.")}function tU(t){return new Qr(zr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vr{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=vr.makeFromUrl(e,n)}catch{return new vr(e,"")}if(r.path==="")return r;throw eU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${f}/${u}/b/${i}/o${h}`,"i"),p={bucket:1,path:3},m=n===IA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${y}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:d,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<E.length;b++){const T=E[b],S=T.regex.exec(e);if(S){const O=S[T.indices.bucket];let A=S[T.indices.path];A||(A=""),r=new vr(O,A),T.postModify(r);break}}if(r==null)throw Z5(e);return r}}class nU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function f(y){i=setTimeout(()=>{i=null,t(d,l())},y)}function h(){s&&clearTimeout(s)}function d(y,...v){if(c){h();return}if(y){h(),u.call(null,y,...v);return}if(l()||o){h(),u.call(null,y,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let p=!1;function m(y){p||(p=!0,h(),!c&&(i!==null?(y||(a=2),clearTimeout(i),f(0)):y||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function iU(t){t(!1)}/**
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
 */function sU(t){return t!==void 0}function s_(t,e,n,r){if(r<e)throw i_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw i_(`Invalid value for '${t}'. Expected ${n} or less.`)}function oU(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Jf;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jf||(Jf={}));/**
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
 */function aU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class lU{constructor(e,n,r,i,s,o,a,l,c,u,f,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Jf.NO_ERROR,l=s.getStatus();if(!a||aU(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Jf.ABORT;r(!1,new Cu(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Cu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Q5();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?CA():J5();o(l)}else{const l=q5();o(l)}};this.canceled_?n(!1,new Cu(!1,null,!0)):this.backoffId_=rU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function uU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dU(t,e,n,r,i,s,o=!0){const a=oU(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fU(c,e),cU(c,n),uU(c,s),hU(c,r),new lU(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function pU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mU(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Zf{constructor(e,n){this._service=e,n instanceof vr?this._location=n:this._location=vr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zf(e,n)}get root(){const e=new vr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mU(this._location.path)}get storage(){return this._service}get parent(){const e=pU(this._location.path);if(e===null)return null;const n=new vr(this._location.bucket,e);return new Zf(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tU(e)}}function o_(t,e){const n=e==null?void 0:e[G5];return n==null?null:vr.makeFromBucketSpec(n,t)}class gU{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=IA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Y5,this._maxUploadRetryTime=X5,this._requests=new Set,i!=null?this._bucket=vr.makeFromBucketSpec(i,this._host):this._bucket=o_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vr.makeFromBucketSpec(this._url,e):this._bucket=o_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zf(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new nU(CA());{const o=dU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const a_="@firebase/storage",l_="0.11.2";/**
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
 */const vU="storage";function yU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gU(n,r,i,e,hs)}function bU(){Vr(new Tr(vU,yU,"PUBLIC").setMultipleInstances(!0)),Qn(a_,l_,""),Qn(a_,l_,"esm2017")}bU();function EU(t){return(e,n)=>{const r=iL(e,n).run(()=>Ge(t));sL.set(e,r),aL(r,e)}}function _U(t,{firebaseApp:e,modules:n=[]}){t.provide(HT,e);for(const r of n)t.use(r.bind(null,e))}const xn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},wU={},TU=t=>(Gr("data-v-f7397049"),t=t(),Yr(),t),SU=TU(()=>V("span",null,"Training Lab",-1));function IU(t,e){const n=Jn("font-awesome-icon"),r=Jn("RouterLink");return Ee(),Vn(r,{to:"/",class:"logo"},{default:fi(()=>[fe(n,{icon:"fa-solid fa-dumbbell"}),SU]),_:1})}const CU=xn(wU,[["render",IU],["__scopeId","data-v-f7397049"]]);const AU={__name:"TextButton",props:{label:{type:String,default:"Default"},isOutlined:{type:Boolean,default:!1},fSize:{type:String,default:"1rem"},onClick:{type:Function,default:()=>{}}},setup(t){return(e,n)=>(Ee(),He("button",{type:"submit",class:fs({outlined:t.isOutlined}),style:Qi({fontSize:t.fSize}),onClick:n[0]||(n[0]=Bt((...r)=>t.onClick&&t.onClick(...r),["prevent"]))},In(t.label),7))}},xU=xn(AU,[["__scopeId","data-v-8adc40bb"]]);const RU={id:"navbar",class:"navbar"},OU={__name:"Navbar",setup(t){function e(){Oa.push("/auth")}return(n,r)=>(Ee(),He("nav",RU,[fe(CU),fe(xU,{label:"Sign In",onClick:e})]))}},AA=xn(OU,[["__scopeId","data-v-b4fe2f2a"]]);const xA=t=>(Gr("data-v-411f4185"),t=t(),Yr(),t),PU={id:"hero"},kU=xA(()=>V("div",{class:"background"},null,-1)),NU={class:"content"},DU=xA(()=>V("div",{class:"text"},[V("h1",{class:"header"},"Personal Workout Architect"),V("p",{class:"description"},[_r(" We help you to craft customized routines tailored to your goals."),V("br"),_r(" Only then you can unleash your true fitness potential. ")])],-1)),MU={class:"cta"},LU={__name:"Hero",setup(t){return(e,n)=>{const r=Jn("font-awesome-icon"),i=Jn("RouterLink");return Ee(),He(ht,null,[fe(AA),V("section",PU,[kU,V("div",NU,[DU,V("div",MU,[fe(i,{to:"/auth",class:"btn btn-main"},{default:fi(()=>[_r(" CREATE PLAN "),fe(r,{icon:"fa-solid fa-arrow-right"})]),_:1}),fe(i,{to:"/auth",class:"btn btn-alt"},{default:fi(()=>[_r("SIGN IN")]),_:1})])])])],64)}}},FU=xn(LU,[["__scopeId","data-v-411f4185"]]),$U={apiKey:"AIzaSyAMOWNm3niijQYcjYUdSO3TJjBo01-bVto",authDomain:"training-lab-c6fc8.firebaseapp.com",projectId:"training-lab-c6fc8",storageBucket:"training-lab-c6fc8.appspot.com",messagingSenderId:"384578017553",appId:"1:384578017553:web:fe578ea402ba8d350654b0",measurementId:"G-9HXV1QFX7R"},RA=sT($U),UU=k5(RA),VU=cA(UU,"users");let Oy=Kn(),Jm,eh;function Vs(t){if(Oy.currentUser)return wy(eh,t)}bD(Oy,t=>{t&&(Jm=wy(VU,t.uid),eh=cA(Jm,"plans"))});function c_(){av(Oy).then(()=>{Oa.push("/auth")})}const Kc=t=>(Gr("data-v-bd08aab9"),t=t(),Yr(),t),jU={class:"event-catcher"},BU=["onClick"],HU={id:"nav",class:"nav"},zU={class:"nav-list"},WU={class:"logo"},KU=Kc(()=>V("span",null,"Training Lab",-1)),GU=Kc(()=>V("hr",null,null,-1)),YU=["onClick"],XU={class:"bottom"},QU={class:"nav-item"},qU=Kc(()=>V("span",null,"Logout",-1)),JU=Kc(()=>V("hr",null,null,-1)),ZU={class:"account"},e9={class:"nav-link",href:""},t9=Kc(()=>V("p",null,"Logged as",-1)),n9={class:"email"},r9={__name:"Sidebar",props:{pages:{type:Array,default:[]},selectedPageIndex:{type:Number,default:0},selectPageIndex:{type:Function,default:()=>{}}},setup(t){function e(){const n=document.getElementById("nav"),r=document.querySelector(".toggle-btn");n.classList.toggle("active"),r.classList.toggle("active")}return window.addEventListener("click",function(n){if(!n.target.closest(".event-catcher")){const r=document.getElementById("nav"),i=document.querySelector(".toggle-btn");r&&r.classList.contains("active")&&r.classList.remove("active"),i&&i.classList.contains("active")&&i.classList.remove("active")}}),(n,r)=>{const i=Jn("font-awesome-icon"),s=Jn("RouterLink");return Ee(),He("div",jU,[V("a",{onClick:Bt(e,["prevent"]),class:"toggle-btn"},[fe(i,{icon:"fa-solid fa-angle-right"})],8,BU),V("nav",HU,[V("ul",zU,[V("li",WU,[fe(s,{to:"/",class:"nav-link"},{default:fi(()=>[fe(i,{icon:"fa-solid fa-dumbbell"}),KU]),_:1})]),GU,(Ee(!0),He(ht,null,Fl(t.pages,(o,a)=>(Ee(),He("li",{key:a,class:"nav-item"},[V("a",{class:fs(["nav-link",{active:t.selectedPageIndex==a}]),onClick:Bt(l=>t.selectPageIndex(a),["prevent"])},[fe(i,{icon:"fa-solid "+o.icon},null,8,["icon"]),V("span",null,In(o.title),1)],10,YU)]))),128)),V("ul",XU,[V("li",QU,[V("a",{class:"nav-link",onClick:r[0]||(r[0]=Bt((...o)=>ye(c_)&&ye(c_)(...o),["prevent"]))},[fe(i,{icon:"fa-solid fa-sign-out-alt"}),qU])]),JU,V("li",ZU,[V("p",e9,[fe(i,{icon:"fa-solid fa-circle-user",size:"lg"}),V("span",null,[t9,V("p",n9,In(ye(Kn)().currentUser.email),1)])])])])])])])}}},i9=xn(r9,[["__scopeId","data-v-bd08aab9"]]);const s9=t=>(Gr("data-v-367aea69"),t=t(),Yr(),t),o9={class:"content title"},a9=s9(()=>V("hr",null,null,-1)),l9={__name:"Header",props:{title:{type:String,default:"Title"}},setup(t){return(e,n)=>(Ee(),He(ht,null,[V("h1",o9,In(t.title),1),a9],64))}},OA=xn(l9,[["__scopeId","data-v-367aea69"]]);const c9={__name:"IconButton",props:{icon:{type:String,default:"fa-xmark"},iconSize:{type:String,default:"fa-lg"},backgroundColorVar:{type:String,default:"color60"},onClick:{type:Function,default:()=>{}}},setup(t){return(e,n)=>{const r=Jn("font-awesome-icon");return Ee(),He("a",{onClick:n[0]||(n[0]=Bt((...i)=>t.onClick&&t.onClick(...i),["prevent"])),class:fs(["icon-button",t.backgroundColorVar])},[fe(r,{icon:["fa-solid",t.icon],size:t.iconSize},null,8,["icon","size"])],2)}}},Is=xn(c9,[["__scopeId","data-v-1ffa6622"]]);const u9={class:"plan-item"},f9={class:"plan-section"},h9={class:"plan-indicators"},d9={class:"plan-section"},p9={class:"text"},m9={__name:"PlanTile",props:{plan:{type:Object,default:{}},selectPlan:{type:Function,default:()=>{}},totalVolume:{type:Number,default:0}},setup(t){const e=t;function n(s){qm(Vs(e.plan.id),{title:s===""?r_():s})}function r(s){qm(Vs(e.plan.id),{description:s===""?r_():s})}function i(){W5(Vs(e.plan.id))}return(s,o)=>{const a=Jn("font-awesome-icon");return Ee(),He("li",u9,[V("div",f9,[V("div",h9,[V("span",null,[fe(a,{icon:"fa-solid fa-calendar-day"}),V("p",null,In(t.plan.days?t.plan.days.length:0),1)]),V("span",null,[fe(a,{icon:"fa-solid fa-bolt"}),V("p",null,In(t.plan.days?t.totalVolume:0),1)])]),fe(Is,{onClick:Bt(i,["prevent"]),icon:"fa-trash-can"},null,8,["onClick"])]),V("div",d9,[V("div",p9,[Nr(V("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.plan.title=l),class:"plan-title",type:"text",maxlength:"16",spellcheck:"false",onInput:o[1]||(o[1]=l=>n(l.target.value))},null,544),[[Ur,t.plan.title]]),Nr(V("input",{"onUpdate:modelValue":o[2]||(o[2]=l=>t.plan.description=l),class:"plan-description",type:"text",maxlength:"32",spellcheck:"false",onInput:o[3]||(o[3]=l=>r(l.target.value))},null,544),[[Ur,t.plan.description]])]),fe(Is,{onClick:()=>t.selectPlan(t.plan.id),icon:"fa-angle-right"},null,8,["onClick"])])])}}},g9=xn(m9,[["__scopeId","data-v-52aa4ddb"]]);var v9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y9(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function PA(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var kA={exports:{}};const b9=PA(KO);/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function u_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u_(Object(n),!0).forEach(function(r){E9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ju(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ju=function(e){return typeof e}:Ju=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ju(t)}function E9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cr(){return cr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cr.apply(this,arguments)}function _9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function w9(t,e){if(t==null)return{};var n=_9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function T9(t){return S9(t)||I9(t)||C9(t)||A9()}function S9(t){if(Array.isArray(t))return Zm(t)}function I9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function C9(t,e){if(t){if(typeof t=="string")return Zm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zm(t,e)}}function Zm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var x9="1.14.0";function ci(t){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(t)}var wi=ci(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Gc=ci(/Edge/i),f_=ci(/firefox/i),Tl=ci(/safari/i)&&!ci(/chrome/i)&&!ci(/android/i),NA=ci(/iP(ad|od|hone)/i),R9=ci(/chrome/i)&&ci(/android/i),DA={capture:!1,passive:!1};function We(t,e,n){t.addEventListener(e,n,!wi&&DA)}function Be(t,e,n){t.removeEventListener(e,n,!wi&&DA)}function th(t,e){if(e){if(e[0]===">"&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch{return!1}return!1}}function O9(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function hr(t,e,n,r){if(t){n=n||document;do{if(e!=null&&(e[0]===">"?t.parentNode===n&&th(t,e):th(t,e))||r&&t===n)return t;if(t===n)break}while(t=O9(t))}return null}var h_=/\s+/g;function Ot(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(h_," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(h_," ")}}function ce(t,e,n){var r=t&&t.style;if(r){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),e===void 0?n:n[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=n+(typeof n=="string"?"":"px")}}function js(t,e){var n="";if(typeof t=="string")n=t;else do{var r=ce(t,"transform");r&&r!=="none"&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function MA(t,e,n){if(t){var r=t.getElementsByTagName(e),i=0,s=r.length;if(n)for(;i<s;i++)n(r[i],i);return r}return[]}function Fr(){var t=document.scrollingElement;return t||document.documentElement}function Ct(t,e,n,r,i){if(!(!t.getBoundingClientRect&&t!==window)){var s,o,a,l,c,u,f;if(t!==window&&t.parentNode&&t!==Fr()?(s=t.getBoundingClientRect(),o=s.top,a=s.left,l=s.bottom,c=s.right,u=s.height,f=s.width):(o=0,a=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,f=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!wi))do if(i&&i.getBoundingClientRect&&(ce(i,"transform")!=="none"||n&&ce(i,"position")!=="static")){var h=i.getBoundingClientRect();o-=h.top+parseInt(ce(i,"border-top-width")),a-=h.left+parseInt(ce(i,"border-left-width")),l=o+s.height,c=a+s.width;break}while(i=i.parentNode);if(r&&t!==window){var d=js(i||t),p=d&&d.a,m=d&&d.d;d&&(o/=m,a/=p,f/=p,u/=m,l=o+u,c=a+f)}return{top:o,left:a,bottom:l,right:c,width:f,height:u}}}function d_(t,e,n){for(var r=ji(t,!0),i=Ct(t)[e];r;){var s=Ct(r)[n],o=void 0;if(n==="top"||n==="left"?o=i>=s:o=i<=s,!o)return r;if(r===Fr())break;r=ji(r,!1)}return!1}function ha(t,e,n,r){for(var i=0,s=0,o=t.children;s<o.length;){if(o[s].style.display!=="none"&&o[s]!==Ie.ghost&&(r||o[s]!==Ie.dragged)&&hr(o[s],n.draggable,t,!1)){if(i===e)return o[s];i++}s++}return null}function Py(t,e){for(var n=t.lastElementChild;n&&(n===Ie.ghost||ce(n,"display")==="none"||e&&!th(n,e));)n=n.previousElementSibling;return n||null}function Dt(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)t.nodeName.toUpperCase()!=="TEMPLATE"&&t!==Ie.clone&&(!e||th(t,e))&&n++;return n}function p_(t){var e=0,n=0,r=Fr();if(t)do{var i=js(t),s=i.a,o=i.d;e+=t.scrollLeft*s,n+=t.scrollTop*o}while(t!==r&&(t=t.parentNode));return[e,n]}function P9(t,e){for(var n in t)if(t.hasOwnProperty(n)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n)}return-1}function ji(t,e){if(!t||!t.getBoundingClientRect)return Fr();var n=t,r=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=ce(n);if(n.clientWidth<n.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return Fr();if(r||e)return n;r=!0}}while(n=n.parentNode);return Fr()}function k9(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function pp(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}var Sl;function LA(t,e){return function(){if(!Sl){var n=arguments,r=this;n.length===1?t.call(r,n[0]):t.apply(r,n),Sl=setTimeout(function(){Sl=void 0},e)}}}function N9(){clearTimeout(Sl),Sl=void 0}function FA(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function ky(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function m_(t,e){ce(t,"position","absolute"),ce(t,"top",e.top),ce(t,"left",e.left),ce(t,"width",e.width),ce(t,"height",e.height)}function mp(t){ce(t,"position",""),ce(t,"top",""),ce(t,"left",""),ce(t,"width",""),ce(t,"height","")}var mn="Sortable"+new Date().getTime();function D9(){var t=[],e;return{captureAnimationState:function(){if(t=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(i){if(!(ce(i,"display")==="none"||i===Ie.ghost)){t.push({target:i,rect:Ct(i)});var s=Wr({},t[t.length-1].rect);if(i.thisAnimationDuration){var o=js(i,!0);o&&(s.top-=o.f,s.left-=o.e)}i.fromRect=s}})}},addAnimationState:function(r){t.push(r)},removeAnimationState:function(r){t.splice(P9(t,{target:r}),1)},animateAll:function(r){var i=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var s=!1,o=0;t.forEach(function(a){var l=0,c=a.target,u=c.fromRect,f=Ct(c),h=c.prevFromRect,d=c.prevToRect,p=a.rect,m=js(c,!0);m&&(f.top-=m.f,f.left-=m.e),c.toRect=f,c.thisAnimationDuration&&pp(h,f)&&!pp(u,f)&&(p.top-f.top)/(p.left-f.left)===(u.top-f.top)/(u.left-f.left)&&(l=L9(p,h,d,i.options)),pp(f,u)||(c.prevFromRect=u,c.prevToRect=f,l||(l=i.options.animation),i.animate(c,p,f,l)),l&&(s=!0,o=Math.max(o,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(e),s?e=setTimeout(function(){typeof r=="function"&&r()},o):typeof r=="function"&&r(),t=[]},animate:function(r,i,s,o){if(o){ce(r,"transition",""),ce(r,"transform","");var a=js(this.el),l=a&&a.a,c=a&&a.d,u=(i.left-s.left)/(l||1),f=(i.top-s.top)/(c||1);r.animatingX=!!u,r.animatingY=!!f,ce(r,"transform","translate3d("+u+"px,"+f+"px,0)"),this.forRepaintDummy=M9(r),ce(r,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),ce(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){ce(r,"transition",""),ce(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},o)}}}}function M9(t){return t.offsetWidth}function L9(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var yo=[],gp={initializeByDefault:!0},Yc={mount:function(e){for(var n in gp)gp.hasOwnProperty(n)&&!(n in e)&&(e[n]=gp[n]);yo.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),yo.push(e)},pluginEvent:function(e,n,r){var i=this;this.eventCanceled=!1,r.cancel=function(){i.eventCanceled=!0};var s=e+"Global";yo.forEach(function(o){n[o.pluginName]&&(n[o.pluginName][s]&&n[o.pluginName][s](Wr({sortable:n},r)),n.options[o.pluginName]&&n[o.pluginName][e]&&n[o.pluginName][e](Wr({sortable:n},r)))})},initializePlugins:function(e,n,r,i){yo.forEach(function(a){var l=a.pluginName;if(!(!e.options[l]&&!a.initializeByDefault)){var c=new a(e,n,e.options);c.sortable=e,c.options=e.options,e[l]=c,cr(r,c.defaults)}});for(var s in e.options)if(e.options.hasOwnProperty(s)){var o=this.modifyOption(e,s,e.options[s]);typeof o<"u"&&(e.options[s]=o)}},getEventProperties:function(e,n){var r={};return yo.forEach(function(i){typeof i.eventProperties=="function"&&cr(r,i.eventProperties.call(n[i.pluginName],e))}),r},modifyOption:function(e,n,r){var i;return yo.forEach(function(s){e[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[n]=="function"&&(i=s.optionListeners[n].call(e[s.pluginName],r))}),i}};function tl(t){var e=t.sortable,n=t.rootEl,r=t.name,i=t.targetEl,s=t.cloneEl,o=t.toEl,a=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,f=t.newDraggableIndex,h=t.originalEvent,d=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[mn],!!e){var m,y=e.options,v="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!wi&&!Gc?m=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(r,!0,!0)),m.to=o||n,m.from=a||n,m.item=i||n,m.clone=s,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=u,m.newDraggableIndex=f,m.originalEvent=h,m.pullMode=d?d.lastPutMode:void 0;var g=Wr(Wr({},p),Yc.getEventProperties(r,e));for(var E in g)m[E]=g[E];n&&n.dispatchEvent(m),y[v]&&y[v].call(e,m)}}var F9=["evt"],On=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.evt,s=w9(r,F9);Yc.pluginEvent.bind(Ie)(e,n,Wr({dragEl:q,parentEl:kt,ghostEl:Fe,rootEl:It,nextEl:ws,lastDownEl:Zu,cloneEl:Nt,cloneHidden:Ui,dragStarted:nl,putSortable:en,activeSortable:Ie.active,originalEvent:i,oldIndex:Oo,oldDraggableIndex:Il,newIndex:Bn,newDraggableIndex:Ni,hideGhostForTarget:jA,unhideGhostForTarget:BA,cloneNowHidden:function(){Ui=!0},cloneNowShown:function(){Ui=!1},dispatchSortableEvent:function(a){Sn({sortable:n,name:a,originalEvent:i})}},s))};function Sn(t){tl(Wr({putSortable:en,cloneEl:Nt,targetEl:q,rootEl:It,oldIndex:Oo,oldDraggableIndex:Il,newIndex:Bn,newDraggableIndex:Ni},t))}var q,kt,Fe,It,ws,Zu,Nt,Ui,Oo,Bn,Il,Ni,Au,en,Io=!1,nh=!1,rh=[],ys,ur,vp,yp,g_,v_,nl,bo,Cl,Al=!1,xu=!1,ef,ln,bp=[],eg=!1,ih=[],vd=typeof document<"u",Ru=NA,y_=Gc||wi?"cssFloat":"float",$9=vd&&!R9&&!NA&&"draggable"in document.createElement("div"),$A=function(){if(vd){if(wi)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto",t.style.pointerEvents==="auto"}}(),UA=function(e,n){var r=ce(e),i=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),s=ha(e,0,n),o=ha(e,1,n),a=s&&ce(s),l=o&&ce(o),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ct(s).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+Ct(o).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&a.float&&a.float!=="none"){var f=a.float==="left"?"left":"right";return o&&(l.clear==="both"||l.clear===f)?"vertical":"horizontal"}return s&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=i&&r[y_]==="none"||o&&r[y_]==="none"&&c+u>i)?"vertical":"horizontal"},U9=function(e,n,r){var i=r?e.left:e.top,s=r?e.right:e.bottom,o=r?e.width:e.height,a=r?n.left:n.top,l=r?n.right:n.bottom,c=r?n.width:n.height;return i===a||s===l||i+o/2===a+c/2},V9=function(e,n){var r;return rh.some(function(i){var s=i[mn].options.emptyInsertThreshold;if(!(!s||Py(i))){var o=Ct(i),a=e>=o.left-s&&e<=o.right+s,l=n>=o.top-s&&n<=o.bottom+s;if(a&&l)return r=i}}),r},VA=function(e){function n(s,o){return function(a,l,c,u){var f=a.options.group.name&&l.options.group.name&&a.options.group.name===l.options.group.name;if(s==null&&(o||f))return!0;if(s==null||s===!1)return!1;if(o&&s==="clone")return s;if(typeof s=="function")return n(s(a,l,c,u),o)(a,l,c,u);var h=(o?a:l).options.group.name;return s===!0||typeof s=="string"&&s===h||s.join&&s.indexOf(h)>-1}}var r={},i=e.group;(!i||Ju(i)!="object")&&(i={name:i}),r.name=i.name,r.checkPull=n(i.pull,!0),r.checkPut=n(i.put),r.revertClone=i.revertClone,e.group=r},jA=function(){!$A&&Fe&&ce(Fe,"display","none")},BA=function(){!$A&&Fe&&ce(Fe,"display","")};vd&&document.addEventListener("click",function(t){if(nh)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),nh=!1,!1},!0);var bs=function(e){if(q){e=e.touches?e.touches[0]:e;var n=V9(e.clientX,e.clientY);if(n){var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);r.target=r.rootEl=n,r.preventDefault=void 0,r.stopPropagation=void 0,n[mn]._onDragOver(r)}}},j9=function(e){q&&q.parentNode[mn]._isOutsideThisEl(e.target)};function Ie(t,e){if(!(t&&t.nodeType&&t.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=cr({},e),t[mn]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return UA(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,a){o.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:Ie.supportPointer!==!1&&"PointerEvent"in window&&!Tl,emptyInsertThreshold:5};Yc.initializePlugins(this,t,n);for(var r in n)!(r in e)&&(e[r]=n[r]);VA(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:$9,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?We(t,"pointerdown",this._onTapStart):(We(t,"mousedown",this._onTapStart),We(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(We(t,"dragover",this),We(t,"dragenter",this)),rh.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),cr(this,D9())}Ie.prototype={constructor:Ie,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(bo=null)},_getDirection:function(e,n){return typeof this.options.direction=="function"?this.options.direction.call(this,e,n,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,r=this.el,i=this.options,s=i.preventOnFilter,o=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,l=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,u=i.filter;if(X9(r),!q&&!(/mousedown|pointerdown/.test(o)&&e.button!==0||i.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Tl&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=hr(l,i.draggable,r,!1),!(l&&l.animated)&&Zu!==l)){if(Oo=Dt(l),Il=Dt(l,i.draggable),typeof u=="function"){if(u.call(this,e,l,this)){Sn({sortable:n,rootEl:c,name:"filter",targetEl:l,toEl:r,fromEl:r}),On("filter",n,{evt:e}),s&&e.cancelable&&e.preventDefault();return}}else if(u&&(u=u.split(",").some(function(f){if(f=hr(c,f.trim(),r,!1),f)return Sn({sortable:n,rootEl:f,name:"filter",targetEl:l,fromEl:r,toEl:r}),On("filter",n,{evt:e}),!0}),u)){s&&e.cancelable&&e.preventDefault();return}i.handle&&!hr(c,i.handle,r,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(e,n,r){var i=this,s=i.el,o=i.options,a=s.ownerDocument,l;if(r&&!q&&r.parentNode===s){var c=Ct(r);if(It=s,q=r,kt=q.parentNode,ws=q.nextSibling,Zu=r,Au=o.group,Ie.dragged=q,ys={target:q,clientX:(n||e).clientX,clientY:(n||e).clientY},g_=ys.clientX-c.left,v_=ys.clientY-c.top,this._lastX=(n||e).clientX,this._lastY=(n||e).clientY,q.style["will-change"]="all",l=function(){if(On("delayEnded",i,{evt:e}),Ie.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!f_&&i.nativeDraggable&&(q.draggable=!0),i._triggerDragStart(e,n),Sn({sortable:i,name:"choose",originalEvent:e}),Ot(q,o.chosenClass,!0)},o.ignore.split(",").forEach(function(u){MA(q,u.trim(),Ep)}),We(a,"dragover",bs),We(a,"mousemove",bs),We(a,"touchmove",bs),We(a,"mouseup",i._onDrop),We(a,"touchend",i._onDrop),We(a,"touchcancel",i._onDrop),f_&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=!0),On("delayStart",this,{evt:e}),o.delay&&(!o.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(Gc||wi))){if(Ie.eventCanceled){this._onDrop();return}We(a,"mouseup",i._disableDelayedDrag),We(a,"touchend",i._disableDelayedDrag),We(a,"touchcancel",i._disableDelayedDrag),We(a,"mousemove",i._delayedDragTouchMoveHandler),We(a,"touchmove",i._delayedDragTouchMoveHandler),o.supportPointer&&We(a,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,o.delay)}else l()}},_delayedDragTouchMoveHandler:function(e){var n=e.touches?e.touches[0]:e;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){q&&Ep(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Be(e,"mouseup",this._disableDelayedDrag),Be(e,"touchend",this._disableDelayedDrag),Be(e,"touchcancel",this._disableDelayedDrag),Be(e,"mousemove",this._delayedDragTouchMoveHandler),Be(e,"touchmove",this._delayedDragTouchMoveHandler),Be(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,n){n=n||e.pointerType=="touch"&&e,!this.nativeDraggable||n?this.options.supportPointer?We(document,"pointermove",this._onTouchMove):n?We(document,"touchmove",this._onTouchMove):We(document,"mousemove",this._onTouchMove):(We(q,"dragend",this),We(It,"dragstart",this._onDragStart));try{document.selection?tf(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,n){if(Io=!1,It&&q){On("dragStarted",this,{evt:n}),this.nativeDraggable&&We(document,"dragover",j9);var r=this.options;!e&&Ot(q,r.dragClass,!1),Ot(q,r.ghostClass,!0),Ie.active=this,e&&this._appendGhost(),Sn({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(ur){this._lastX=ur.clientX,this._lastY=ur.clientY,jA();for(var e=document.elementFromPoint(ur.clientX,ur.clientY),n=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(ur.clientX,ur.clientY),e!==n);)n=e;if(q.parentNode[mn]._isOutsideThisEl(e),n)do{if(n[mn]){var r=void 0;if(r=n[mn]._onDragOver({clientX:ur.clientX,clientY:ur.clientY,target:e,rootEl:n}),r&&!this.options.dragoverBubble)break}e=n}while(n=n.parentNode);BA()}},_onTouchMove:function(e){if(ys){var n=this.options,r=n.fallbackTolerance,i=n.fallbackOffset,s=e.touches?e.touches[0]:e,o=Fe&&js(Fe,!0),a=Fe&&o&&o.a,l=Fe&&o&&o.d,c=Ru&&ln&&p_(ln),u=(s.clientX-ys.clientX+i.x)/(a||1)+(c?c[0]-bp[0]:0)/(a||1),f=(s.clientY-ys.clientY+i.y)/(l||1)+(c?c[1]-bp[1]:0)/(l||1);if(!Ie.active&&!Io){if(r&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(Fe){o?(o.e+=u-(vp||0),o.f+=f-(yp||0)):o={a:1,b:0,c:0,d:1,e:u,f};var h="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");ce(Fe,"webkitTransform",h),ce(Fe,"mozTransform",h),ce(Fe,"msTransform",h),ce(Fe,"transform",h),vp=u,yp=f,ur=s}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!Fe){var e=this.options.fallbackOnBody?document.body:It,n=Ct(q,!0,Ru,!0,e),r=this.options;if(Ru){for(ln=e;ce(ln,"position")==="static"&&ce(ln,"transform")==="none"&&ln!==document;)ln=ln.parentNode;ln!==document.body&&ln!==document.documentElement?(ln===document&&(ln=Fr()),n.top+=ln.scrollTop,n.left+=ln.scrollLeft):ln=Fr(),bp=p_(ln)}Fe=q.cloneNode(!0),Ot(Fe,r.ghostClass,!1),Ot(Fe,r.fallbackClass,!0),Ot(Fe,r.dragClass,!0),ce(Fe,"transition",""),ce(Fe,"transform",""),ce(Fe,"box-sizing","border-box"),ce(Fe,"margin",0),ce(Fe,"top",n.top),ce(Fe,"left",n.left),ce(Fe,"width",n.width),ce(Fe,"height",n.height),ce(Fe,"opacity","0.8"),ce(Fe,"position",Ru?"absolute":"fixed"),ce(Fe,"zIndex","100000"),ce(Fe,"pointerEvents","none"),Ie.ghost=Fe,e.appendChild(Fe),ce(Fe,"transform-origin",g_/parseInt(Fe.style.width)*100+"% "+v_/parseInt(Fe.style.height)*100+"%")}},_onDragStart:function(e,n){var r=this,i=e.dataTransfer,s=r.options;if(On("dragStart",this,{evt:e}),Ie.eventCanceled){this._onDrop();return}On("setupClone",this),Ie.eventCanceled||(Nt=ky(q),Nt.draggable=!1,Nt.style["will-change"]="",this._hideClone(),Ot(Nt,this.options.chosenClass,!1),Ie.clone=Nt),r.cloneId=tf(function(){On("clone",r),!Ie.eventCanceled&&(r.options.removeCloneOnHide||It.insertBefore(Nt,q),r._hideClone(),Sn({sortable:r,name:"clone"}))}),!n&&Ot(q,s.dragClass,!0),n?(nh=!0,r._loopId=setInterval(r._emulateDragOver,50)):(Be(document,"mouseup",r._onDrop),Be(document,"touchend",r._onDrop),Be(document,"touchcancel",r._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(r,i,q)),We(document,"drop",r),ce(q,"transform","translateZ(0)")),Io=!0,r._dragStartId=tf(r._dragStarted.bind(r,n,e)),We(document,"selectstart",r),nl=!0,Tl&&ce(document.body,"user-select","none")},_onDragOver:function(e){var n=this.el,r=e.target,i,s,o,a=this.options,l=a.group,c=Ie.active,u=Au===l,f=a.sort,h=en||c,d,p=this,m=!1;if(eg)return;function y(oe,ze){On(oe,p,Wr({evt:e,isOwner:u,axis:d?"vertical":"horizontal",revert:o,dragRect:i,targetRect:s,canSort:f,fromSortable:h,target:r,completed:g,onMove:function(Ue,xe){return Ou(It,n,q,i,Ue,Ct(Ue),e,xe)},changed:E},ze))}function v(){y("dragOverAnimationCapture"),p.captureAnimationState(),p!==h&&h.captureAnimationState()}function g(oe){return y("dragOverCompleted",{insertion:oe}),oe&&(u?c._hideClone():c._showClone(p),p!==h&&(Ot(q,en?en.options.ghostClass:c.options.ghostClass,!1),Ot(q,a.ghostClass,!0)),en!==p&&p!==Ie.active?en=p:p===Ie.active&&en&&(en=null),h===p&&(p._ignoreWhileAnimating=r),p.animateAll(function(){y("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(r===q&&!q.animated||r===n&&!r.animated)&&(bo=null),!a.dragoverBubble&&!e.rootEl&&r!==document&&(q.parentNode[mn]._isOutsideThisEl(e.target),!oe&&bs(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function E(){Bn=Dt(q),Ni=Dt(q,a.draggable),Sn({sortable:p,name:"change",toEl:n,newIndex:Bn,newDraggableIndex:Ni,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=hr(r,a.draggable,n,!0),y("dragOver"),Ie.eventCanceled)return m;if(q.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return g(!1);if(nh=!1,c&&!a.disabled&&(u?f||(o=kt!==It):en===this||(this.lastPutMode=Au.checkPull(this,c,q,e))&&l.checkPut(this,c,q,e))){if(d=this._getDirection(e,r)==="vertical",i=Ct(q),y("dragOverValid"),Ie.eventCanceled)return m;if(o)return kt=It,v(),this._hideClone(),y("revert"),Ie.eventCanceled||(ws?It.insertBefore(q,ws):It.appendChild(q)),g(!0);var b=Py(n,a.draggable);if(!b||W9(e,d,this)&&!b.animated){if(b===q)return g(!1);if(b&&n===e.target&&(r=b),r&&(s=Ct(r)),Ou(It,n,q,i,r,s,e,!!r)!==!1)return v(),n.appendChild(q),kt=n,E(),g(!0)}else if(b&&z9(e,d,this)){var T=ha(n,0,a,!0);if(T===q)return g(!1);if(r=T,s=Ct(r),Ou(It,n,q,i,r,s,e,!1)!==!1)return v(),n.insertBefore(q,T),kt=n,E(),g(!0)}else if(r.parentNode===n){s=Ct(r);var S=0,O,A=q.parentNode!==n,I=!U9(q.animated&&q.toRect||i,r.animated&&r.toRect||s,d),k=d?"top":"left",F=d_(r,"top","top")||d_(q,"top","top"),U=F?F.scrollTop:void 0;bo!==r&&(O=s[k],Al=!1,xu=!I&&a.invertSwap||A),S=K9(e,r,s,d,I?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,xu,bo===r);var M;if(S!==0){var P=Dt(q);do P-=S,M=kt.children[P];while(M&&(ce(M,"display")==="none"||M===Fe))}if(S===0||M===r)return g(!1);bo=r,Cl=S;var ne=r.nextElementSibling,j=!1;j=S===1;var Q=Ou(It,n,q,i,r,s,e,j);if(Q!==!1)return(Q===1||Q===-1)&&(j=Q===1),eg=!0,setTimeout(H9,30),v(),j&&!ne?n.appendChild(q):r.parentNode.insertBefore(q,j?ne:r),F&&FA(F,0,U-F.scrollTop),kt=q.parentNode,O!==void 0&&!xu&&(ef=Math.abs(O-Ct(r)[k])),E(),g(!0)}if(n.contains(q))return g(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){Be(document,"mousemove",this._onTouchMove),Be(document,"touchmove",this._onTouchMove),Be(document,"pointermove",this._onTouchMove),Be(document,"dragover",bs),Be(document,"mousemove",bs),Be(document,"touchmove",bs)},_offUpEvents:function(){var e=this.el.ownerDocument;Be(e,"mouseup",this._onDrop),Be(e,"touchend",this._onDrop),Be(e,"pointerup",this._onDrop),Be(e,"touchcancel",this._onDrop),Be(document,"selectstart",this)},_onDrop:function(e){var n=this.el,r=this.options;if(Bn=Dt(q),Ni=Dt(q,r.draggable),On("drop",this,{evt:e}),kt=q&&q.parentNode,Bn=Dt(q),Ni=Dt(q,r.draggable),Ie.eventCanceled){this._nulling();return}Io=!1,xu=!1,Al=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),tg(this.cloneId),tg(this._dragStartId),this.nativeDraggable&&(Be(document,"drop",this),Be(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Tl&&ce(document.body,"user-select",""),ce(q,"transform",""),e&&(nl&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),Fe&&Fe.parentNode&&Fe.parentNode.removeChild(Fe),(It===kt||en&&en.lastPutMode!=="clone")&&Nt&&Nt.parentNode&&Nt.parentNode.removeChild(Nt),q&&(this.nativeDraggable&&Be(q,"dragend",this),Ep(q),q.style["will-change"]="",nl&&!Io&&Ot(q,en?en.options.ghostClass:this.options.ghostClass,!1),Ot(q,this.options.chosenClass,!1),Sn({sortable:this,name:"unchoose",toEl:kt,newIndex:null,newDraggableIndex:null,originalEvent:e}),It!==kt?(Bn>=0&&(Sn({rootEl:kt,name:"add",toEl:kt,fromEl:It,originalEvent:e}),Sn({sortable:this,name:"remove",toEl:kt,originalEvent:e}),Sn({rootEl:kt,name:"sort",toEl:kt,fromEl:It,originalEvent:e}),Sn({sortable:this,name:"sort",toEl:kt,originalEvent:e})),en&&en.save()):Bn!==Oo&&Bn>=0&&(Sn({sortable:this,name:"update",toEl:kt,originalEvent:e}),Sn({sortable:this,name:"sort",toEl:kt,originalEvent:e})),Ie.active&&((Bn==null||Bn===-1)&&(Bn=Oo,Ni=Il),Sn({sortable:this,name:"end",toEl:kt,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){On("nulling",this),It=q=kt=Fe=ws=Nt=Zu=Ui=ys=ur=nl=Bn=Ni=Oo=Il=bo=Cl=en=Au=Ie.dragged=Ie.ghost=Ie.clone=Ie.active=null,ih.forEach(function(e){e.checked=!0}),ih.length=vp=yp=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":q&&(this._onDragOver(e),B9(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],n,r=this.el.children,i=0,s=r.length,o=this.options;i<s;i++)n=r[i],hr(n,o.draggable,this.el,!1)&&e.push(n.getAttribute(o.dataIdAttr)||Y9(n));return e},sort:function(e,n){var r={},i=this.el;this.toArray().forEach(function(s,o){var a=i.children[o];hr(a,this.options.draggable,i,!1)&&(r[s]=a)},this),n&&this.captureAnimationState(),e.forEach(function(s){r[s]&&(i.removeChild(r[s]),i.appendChild(r[s]))}),n&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,n){return hr(e,n||this.options.draggable,this.el,!1)},option:function(e,n){var r=this.options;if(n===void 0)return r[e];var i=Yc.modifyOption(this,e,n);typeof i<"u"?r[e]=i:r[e]=n,e==="group"&&VA(r)},destroy:function(){On("destroy",this);var e=this.el;e[mn]=null,Be(e,"mousedown",this._onTapStart),Be(e,"touchstart",this._onTapStart),Be(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Be(e,"dragover",this),Be(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),rh.splice(rh.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Ui){if(On("hideClone",this),Ie.eventCanceled)return;ce(Nt,"display","none"),this.options.removeCloneOnHide&&Nt.parentNode&&Nt.parentNode.removeChild(Nt),Ui=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Ui){if(On("showClone",this),Ie.eventCanceled)return;q.parentNode==It&&!this.options.group.revertClone?It.insertBefore(Nt,q):ws?It.insertBefore(Nt,ws):It.appendChild(Nt),this.options.group.revertClone&&this.animate(q,Nt),ce(Nt,"display",""),Ui=!1}}};function B9(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function Ou(t,e,n,r,i,s,o,a){var l,c=t[mn],u=c.options.onMove,f;return window.CustomEvent&&!wi&&!Gc?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=e,l.from=t,l.dragged=n,l.draggedRect=r,l.related=i||e,l.relatedRect=s||Ct(e),l.willInsertAfter=a,l.originalEvent=o,t.dispatchEvent(l),u&&(f=u.call(c,l,o)),f}function Ep(t){t.draggable=!1}function H9(){eg=!1}function z9(t,e,n){var r=Ct(ha(n.el,0,n.options,!0)),i=10;return e?t.clientX<r.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-i||t.clientY<r.bottom&&t.clientX<r.left}function W9(t,e,n){var r=Ct(Py(n.el,n.options.draggable)),i=10;return e?t.clientX>r.right+i||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+i}function K9(t,e,n,r,i,s,o,a){var l=r?t.clientY:t.clientX,c=r?n.height:n.width,u=r?n.top:n.left,f=r?n.bottom:n.right,h=!1;if(!o){if(a&&ef<c*i){if(!Al&&(Cl===1?l>u+c*s/2:l<f-c*s/2)&&(Al=!0),Al)h=!0;else if(Cl===1?l<u+ef:l>f-ef)return-Cl}else if(l>u+c*(1-i)/2&&l<f-c*(1-i)/2)return G9(e)}return h=h||o,h&&(l<u+c*s/2||l>f-c*s/2)?l>u+c/2?1:-1:0}function G9(t){return Dt(q)<Dt(t)?1:-1}function Y9(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;n--;)r+=e.charCodeAt(n);return r.toString(36)}function X9(t){ih.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var r=e[n];r.checked&&ih.push(r)}}function tf(t){return setTimeout(t,0)}function tg(t){return clearTimeout(t)}vd&&We(document,"touchmove",function(t){(Ie.active||Io)&&t.cancelable&&t.preventDefault()});Ie.utils={on:We,off:Be,css:ce,find:MA,is:function(e,n){return!!hr(e,n,e,!1)},extend:k9,throttle:LA,closest:hr,toggleClass:Ot,clone:ky,index:Dt,nextTick:tf,cancelNextTick:tg,detectDirection:UA,getChild:ha};Ie.get=function(t){return t[mn]};Ie.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(Ie.utils=Wr(Wr({},Ie.utils),r.utils)),Yc.mount(r)})};Ie.create=function(t,e){return new Ie(t,e)};Ie.version=x9;var Ut=[],rl,ng,rg=!1,_p,wp,sh,il;function Q9(){function t(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return t.prototype={dragStarted:function(n){var r=n.originalEvent;this.sortable.nativeDraggable?We(document,"dragover",this._handleAutoScroll):this.options.supportPointer?We(document,"pointermove",this._handleFallbackAutoScroll):r.touches?We(document,"touchmove",this._handleFallbackAutoScroll):We(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var r=n.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?Be(document,"dragover",this._handleAutoScroll):(Be(document,"pointermove",this._handleFallbackAutoScroll),Be(document,"touchmove",this._handleFallbackAutoScroll),Be(document,"mousemove",this._handleFallbackAutoScroll)),b_(),nf(),N9()},nulling:function(){sh=ng=rl=rg=il=_p=wp=null,Ut.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,r){var i=this,s=(n.touches?n.touches[0]:n).clientX,o=(n.touches?n.touches[0]:n).clientY,a=document.elementFromPoint(s,o);if(sh=n,r||this.options.forceAutoScrollFallback||Gc||wi||Tl){Tp(n,this.options,a,r);var l=ji(a,!0);rg&&(!il||s!==_p||o!==wp)&&(il&&b_(),il=setInterval(function(){var c=ji(document.elementFromPoint(s,o),!0);c!==l&&(l=c,nf()),Tp(n,i.options,c,r)},10),_p=s,wp=o)}else{if(!this.options.bubbleScroll||ji(a,!0)===Fr()){nf();return}Tp(n,this.options,ji(a,!1),!1)}}},cr(t,{pluginName:"scroll",initializeByDefault:!0})}function nf(){Ut.forEach(function(t){clearInterval(t.pid)}),Ut=[]}function b_(){clearInterval(il)}var Tp=LA(function(t,e,n,r){if(e.scroll){var i=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,l=Fr(),c=!1,u;ng!==n&&(ng=n,nf(),rl=e.scroll,u=e.scrollFn,rl===!0&&(rl=ji(n,!0)));var f=0,h=rl;do{var d=h,p=Ct(d),m=p.top,y=p.bottom,v=p.left,g=p.right,E=p.width,b=p.height,T=void 0,S=void 0,O=d.scrollWidth,A=d.scrollHeight,I=ce(d),k=d.scrollLeft,F=d.scrollTop;d===l?(T=E<O&&(I.overflowX==="auto"||I.overflowX==="scroll"||I.overflowX==="visible"),S=b<A&&(I.overflowY==="auto"||I.overflowY==="scroll"||I.overflowY==="visible")):(T=E<O&&(I.overflowX==="auto"||I.overflowX==="scroll"),S=b<A&&(I.overflowY==="auto"||I.overflowY==="scroll"));var U=T&&(Math.abs(g-i)<=o&&k+E<O)-(Math.abs(v-i)<=o&&!!k),M=S&&(Math.abs(y-s)<=o&&F+b<A)-(Math.abs(m-s)<=o&&!!F);if(!Ut[f])for(var P=0;P<=f;P++)Ut[P]||(Ut[P]={});(Ut[f].vx!=U||Ut[f].vy!=M||Ut[f].el!==d)&&(Ut[f].el=d,Ut[f].vx=U,Ut[f].vy=M,clearInterval(Ut[f].pid),(U!=0||M!=0)&&(c=!0,Ut[f].pid=setInterval(function(){r&&this.layer===0&&Ie.active._onTouchMove(sh);var ne=Ut[this.layer].vy?Ut[this.layer].vy*a:0,j=Ut[this.layer].vx?Ut[this.layer].vx*a:0;typeof u=="function"&&u.call(Ie.dragged.parentNode[mn],j,ne,t,sh,Ut[this.layer].el)!=="continue"||FA(Ut[this.layer].el,j,ne)}.bind({layer:f}),24))),f++}while(e.bubbleScroll&&h!==l&&(h=ji(h,!1)));rg=c}},30),HA=function(e){var n=e.originalEvent,r=e.putSortable,i=e.dragEl,s=e.activeSortable,o=e.dispatchSortableEvent,a=e.hideGhostForTarget,l=e.unhideGhostForTarget;if(n){var c=r||s;a();var u=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,f=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(f)&&(o("spill"),this.onSpill({dragEl:i,putSortable:r}))}};function Ny(){}Ny.prototype={startIndex:null,dragStart:function(e){var n=e.oldDraggableIndex;this.startIndex=n},onSpill:function(e){var n=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var i=ha(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(n,i):this.sortable.el.appendChild(n),this.sortable.animateAll(),r&&r.animateAll()},drop:HA};cr(Ny,{pluginName:"revertOnSpill"});function Dy(){}Dy.prototype={onSpill:function(e){var n=e.dragEl,r=e.putSortable,i=r||this.sortable;i.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),i.animateAll()},drop:HA};cr(Dy,{pluginName:"removeOnSpill"});var nr;function q9(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(n){var r=n.dragEl;nr=r},dragOverValid:function(n){var r=n.completed,i=n.target,s=n.onMove,o=n.activeSortable,a=n.changed,l=n.cancel;if(o.options.swap){var c=this.sortable.el,u=this.options;if(i&&i!==c){var f=nr;s(i)!==!1?(Ot(i,u.swapClass,!0),nr=i):nr=null,f&&f!==nr&&Ot(f,u.swapClass,!1)}a(),r(!0),l()}},drop:function(n){var r=n.activeSortable,i=n.putSortable,s=n.dragEl,o=i||this.sortable,a=this.options;nr&&Ot(nr,a.swapClass,!1),nr&&(a.swap||i&&i.options.swap)&&s!==nr&&(o.captureAnimationState(),o!==r&&r.captureAnimationState(),J9(s,nr),o.animateAll(),o!==r&&r.animateAll())},nulling:function(){nr=null}},cr(t,{pluginName:"swap",eventProperties:function(){return{swapItem:nr}}})}function J9(t,e){var n=t.parentNode,r=e.parentNode,i,s;!n||!r||n.isEqualNode(e)||r.isEqualNode(t)||(i=Dt(t),s=Dt(e),n.isEqualNode(r)&&i<s&&s++,n.insertBefore(e,n.children[i]),r.insertBefore(t,r.children[s]))}var ke=[],jn=[],ja,fr,Ba=!1,Pn=!1,Eo=!1,pt,Ha,Pu;function Z9(){function t(e){for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));e.options.supportPointer?We(document,"pointerup",this._deselectMultiDrag):(We(document,"mouseup",this._deselectMultiDrag),We(document,"touchend",this._deselectMultiDrag)),We(document,"keydown",this._checkKeyDown),We(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(i,s){var o="";ke.length&&fr===e?ke.forEach(function(a,l){o+=(l?", ":"")+a.textContent}):o=s.textContent,i.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(n){var r=n.dragEl;pt=r},delayEnded:function(){this.isMultiDrag=~ke.indexOf(pt)},setupClone:function(n){var r=n.sortable,i=n.cancel;if(this.isMultiDrag){for(var s=0;s<ke.length;s++)jn.push(ky(ke[s])),jn[s].sortableIndex=ke[s].sortableIndex,jn[s].draggable=!1,jn[s].style["will-change"]="",Ot(jn[s],this.options.selectedClass,!1),ke[s]===pt&&Ot(jn[s],this.options.chosenClass,!1);r._hideClone(),i()}},clone:function(n){var r=n.sortable,i=n.rootEl,s=n.dispatchSortableEvent,o=n.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ke.length&&fr===r&&(E_(!0,i),s("clone"),o()))},showClone:function(n){var r=n.cloneNowShown,i=n.rootEl,s=n.cancel;this.isMultiDrag&&(E_(!1,i),jn.forEach(function(o){ce(o,"display","")}),r(),Pu=!1,s())},hideClone:function(n){var r=this;n.sortable;var i=n.cloneNowHidden,s=n.cancel;this.isMultiDrag&&(jn.forEach(function(o){ce(o,"display","none"),r.options.removeCloneOnHide&&o.parentNode&&o.parentNode.removeChild(o)}),i(),Pu=!0,s())},dragStartGlobal:function(n){n.sortable,!this.isMultiDrag&&fr&&fr.multiDrag._deselectMultiDrag(),ke.forEach(function(r){r.sortableIndex=Dt(r)}),ke=ke.sort(function(r,i){return r.sortableIndex-i.sortableIndex}),Eo=!0},dragStarted:function(n){var r=this,i=n.sortable;if(this.isMultiDrag){if(this.options.sort&&(i.captureAnimationState(),this.options.animation)){ke.forEach(function(o){o!==pt&&ce(o,"position","absolute")});var s=Ct(pt,!1,!0,!0);ke.forEach(function(o){o!==pt&&m_(o,s)}),Pn=!0,Ba=!0}i.animateAll(function(){Pn=!1,Ba=!1,r.options.animation&&ke.forEach(function(o){mp(o)}),r.options.sort&&ku()})}},dragOver:function(n){var r=n.target,i=n.completed,s=n.cancel;Pn&&~ke.indexOf(r)&&(i(!1),s())},revert:function(n){var r=n.fromSortable,i=n.rootEl,s=n.sortable,o=n.dragRect;ke.length>1&&(ke.forEach(function(a){s.addAnimationState({target:a,rect:Pn?Ct(a):o}),mp(a),a.fromRect=o,r.removeAnimationState(a)}),Pn=!1,e8(!this.options.removeCloneOnHide,i))},dragOverCompleted:function(n){var r=n.sortable,i=n.isOwner,s=n.insertion,o=n.activeSortable,a=n.parentEl,l=n.putSortable,c=this.options;if(s){if(i&&o._hideClone(),Ba=!1,c.animation&&ke.length>1&&(Pn||!i&&!o.options.sort&&!l)){var u=Ct(pt,!1,!0,!0);ke.forEach(function(h){h!==pt&&(m_(h,u),a.appendChild(h))}),Pn=!0}if(!i)if(Pn||ku(),ke.length>1){var f=Pu;o._showClone(r),o.options.animation&&!Pu&&f&&jn.forEach(function(h){o.addAnimationState({target:h,rect:Ha}),h.fromRect=Ha,h.thisAnimationDuration=null})}else o._showClone(r)}},dragOverAnimationCapture:function(n){var r=n.dragRect,i=n.isOwner,s=n.activeSortable;if(ke.forEach(function(a){a.thisAnimationDuration=null}),s.options.animation&&!i&&s.multiDrag.isMultiDrag){Ha=cr({},r);var o=js(pt,!0);Ha.top-=o.f,Ha.left-=o.e}},dragOverAnimationComplete:function(){Pn&&(Pn=!1,ku())},drop:function(n){var r=n.originalEvent,i=n.rootEl,s=n.parentEl,o=n.sortable,a=n.dispatchSortableEvent,l=n.oldIndex,c=n.putSortable,u=c||this.sortable;if(r){var f=this.options,h=s.children;if(!Eo)if(f.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),Ot(pt,f.selectedClass,!~ke.indexOf(pt)),~ke.indexOf(pt))ke.splice(ke.indexOf(pt),1),ja=null,tl({sortable:o,rootEl:i,name:"deselect",targetEl:pt,originalEvt:r});else{if(ke.push(pt),tl({sortable:o,rootEl:i,name:"select",targetEl:pt,originalEvt:r}),r.shiftKey&&ja&&o.el.contains(ja)){var d=Dt(ja),p=Dt(pt);if(~d&&~p&&d!==p){var m,y;for(p>d?(y=d,m=p):(y=p,m=d+1);y<m;y++)~ke.indexOf(h[y])||(Ot(h[y],f.selectedClass,!0),ke.push(h[y]),tl({sortable:o,rootEl:i,name:"select",targetEl:h[y],originalEvt:r}))}}else ja=pt;fr=u}if(Eo&&this.isMultiDrag){if(Pn=!1,(s[mn].options.sort||s!==i)&&ke.length>1){var v=Ct(pt),g=Dt(pt,":not(."+this.options.selectedClass+")");if(!Ba&&f.animation&&(pt.thisAnimationDuration=null),u.captureAnimationState(),!Ba&&(f.animation&&(pt.fromRect=v,ke.forEach(function(b){if(b.thisAnimationDuration=null,b!==pt){var T=Pn?Ct(b):v;b.fromRect=T,u.addAnimationState({target:b,rect:T})}})),ku(),ke.forEach(function(b){h[g]?s.insertBefore(b,h[g]):s.appendChild(b),g++}),l===Dt(pt))){var E=!1;ke.forEach(function(b){if(b.sortableIndex!==Dt(b)){E=!0;return}}),E&&a("update")}ke.forEach(function(b){mp(b)}),u.animateAll()}fr=u}(i===s||c&&c.lastPutMode!=="clone")&&jn.forEach(function(b){b.parentNode&&b.parentNode.removeChild(b)})}},nullingGlobal:function(){this.isMultiDrag=Eo=!1,jn.length=0},destroyGlobal:function(){this._deselectMultiDrag(),Be(document,"pointerup",this._deselectMultiDrag),Be(document,"mouseup",this._deselectMultiDrag),Be(document,"touchend",this._deselectMultiDrag),Be(document,"keydown",this._checkKeyDown),Be(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(n){if(!(typeof Eo<"u"&&Eo)&&fr===this.sortable&&!(n&&hr(n.target,this.options.draggable,this.sortable.el,!1))&&!(n&&n.button!==0))for(;ke.length;){var r=ke[0];Ot(r,this.options.selectedClass,!1),ke.shift(),tl({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:r,originalEvt:n})}},_checkKeyDown:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(n){n.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},cr(t,{pluginName:"multiDrag",utils:{select:function(n){var r=n.parentNode[mn];!r||!r.options.multiDrag||~ke.indexOf(n)||(fr&&fr!==r&&(fr.multiDrag._deselectMultiDrag(),fr=r),Ot(n,r.options.selectedClass,!0),ke.push(n))},deselect:function(n){var r=n.parentNode[mn],i=ke.indexOf(n);!r||!r.options.multiDrag||!~i||(Ot(n,r.options.selectedClass,!1),ke.splice(i,1))}},eventProperties:function(){var n=this,r=[],i=[];return ke.forEach(function(s){r.push({multiDragElement:s,index:s.sortableIndex});var o;Pn&&s!==pt?o=-1:Pn?o=Dt(s,":not(."+n.options.selectedClass+")"):o=Dt(s),i.push({multiDragElement:s,index:o})}),{items:T9(ke),clones:[].concat(jn),oldIndicies:r,newIndicies:i}},optionListeners:{multiDragKey:function(n){return n=n.toLowerCase(),n==="ctrl"?n="Control":n.length>1&&(n=n.charAt(0).toUpperCase()+n.substr(1)),n}}})}function e8(t,e){ke.forEach(function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function E_(t,e){jn.forEach(function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function ku(){ke.forEach(function(t){t!==pt&&t.parentNode&&t.parentNode.removeChild(t)})}Ie.mount(new Q9);Ie.mount(Dy,Ny);const t8=Object.freeze(Object.defineProperty({__proto__:null,MultiDrag:Z9,Sortable:Ie,Swap:q9,default:Ie},Symbol.toStringTag,{value:"Module"})),n8=PA(t8);(function(t,e){(function(r,i){t.exports=i(b9,n8)})(typeof self<"u"?self:v9,function(n,r){return function(i){var s={};function o(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return i[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=i,o.c=s,o.d=function(a,l,c){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(l&1&&(a=o(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var u in a)o.d(c,u,function(f){return a[f]}.bind(null,u));return c},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")}({"00ee":function(i,s,o){var a=o("b622"),l=a("toStringTag"),c={};c[l]="z",i.exports=String(c)==="[object z]"},"0366":function(i,s,o){var a=o("1c0b");i.exports=function(l,c,u){if(a(l),c===void 0)return l;switch(u){case 0:return function(){return l.call(c)};case 1:return function(f){return l.call(c,f)};case 2:return function(f,h){return l.call(c,f,h)};case 3:return function(f,h,d){return l.call(c,f,h,d)}}return function(){return l.apply(c,arguments)}}},"057f":function(i,s,o){var a=o("fc6a"),l=o("241c").f,c={}.toString,u=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(h){try{return l(h)}catch{return u.slice()}};i.exports.f=function(d){return u&&c.call(d)=="[object Window]"?f(d):l(a(d))}},"06cf":function(i,s,o){var a=o("83ab"),l=o("d1e7"),c=o("5c6c"),u=o("fc6a"),f=o("c04e"),h=o("5135"),d=o("0cfb"),p=Object.getOwnPropertyDescriptor;s.f=a?p:function(y,v){if(y=u(y),v=f(v,!0),d)try{return p(y,v)}catch{}if(h(y,v))return c(!l.f.call(y,v),y[v])}},"0cfb":function(i,s,o){var a=o("83ab"),l=o("d039"),c=o("cc12");i.exports=!a&&!l(function(){return Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a!=7})},"13d5":function(i,s,o){var a=o("23e7"),l=o("d58f").left,c=o("a640"),u=o("ae40"),f=c("reduce"),h=u("reduce",{1:0});a({target:"Array",proto:!0,forced:!f||!h},{reduce:function(p){return l(this,p,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(i,s,o){var a=o("c6b6"),l=o("9263");i.exports=function(c,u){var f=c.exec;if(typeof f=="function"){var h=f.call(c,u);if(typeof h!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return h}if(a(c)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return l.call(c,u)}},"159b":function(i,s,o){var a=o("da84"),l=o("fdbc"),c=o("17c2"),u=o("9112");for(var f in l){var h=a[f],d=h&&h.prototype;if(d&&d.forEach!==c)try{u(d,"forEach",c)}catch{d.forEach=c}}},"17c2":function(i,s,o){var a=o("b727").forEach,l=o("a640"),c=o("ae40"),u=l("forEach"),f=c("forEach");i.exports=!u||!f?function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(i,s,o){var a=o("d066");i.exports=a("document","documentElement")},"1c0b":function(i,s){i.exports=function(o){if(typeof o!="function")throw TypeError(String(o)+" is not a function");return o}},"1c7e":function(i,s,o){var a=o("b622"),l=a("iterator"),c=!1;try{var u=0,f={next:function(){return{done:!!u++}},return:function(){c=!0}};f[l]=function(){return this},Array.from(f,function(){throw 2})}catch{}i.exports=function(h,d){if(!d&&!c)return!1;var p=!1;try{var m={};m[l]=function(){return{next:function(){return{done:p=!0}}}},h(m)}catch{}return p}},"1d80":function(i,s){i.exports=function(o){if(o==null)throw TypeError("Can't call method on "+o);return o}},"1dde":function(i,s,o){var a=o("d039"),l=o("b622"),c=o("2d00"),u=l("species");i.exports=function(f){return c>=51||!a(function(){var h=[],d=h.constructor={};return d[u]=function(){return{foo:1}},h[f](Boolean).foo!==1})}},"23cb":function(i,s,o){var a=o("a691"),l=Math.max,c=Math.min;i.exports=function(u,f){var h=a(u);return h<0?l(h+f,0):c(h,f)}},"23e7":function(i,s,o){var a=o("da84"),l=o("06cf").f,c=o("9112"),u=o("6eeb"),f=o("ce4e"),h=o("e893"),d=o("94ca");i.exports=function(p,m){var y=p.target,v=p.global,g=p.stat,E,b,T,S,O,A;if(v?b=a:g?b=a[y]||f(y,{}):b=(a[y]||{}).prototype,b)for(T in m){if(O=m[T],p.noTargetGet?(A=l(b,T),S=A&&A.value):S=b[T],E=d(v?T:y+(g?".":"#")+T,p.forced),!E&&S!==void 0){if(typeof O==typeof S)continue;h(O,S)}(p.sham||S&&S.sham)&&c(O,"sham",!0),u(b,T,O,p)}}},"241c":function(i,s,o){var a=o("ca84"),l=o("7839"),c=l.concat("length","prototype");s.f=Object.getOwnPropertyNames||function(f){return a(f,c)}},"25f0":function(i,s,o){var a=o("6eeb"),l=o("825a"),c=o("d039"),u=o("ad6d"),f="toString",h=RegExp.prototype,d=h[f],p=c(function(){return d.call({source:"a",flags:"b"})!="/a/b"}),m=d.name!=f;(p||m)&&a(RegExp.prototype,f,function(){var v=l(this),g=String(v.source),E=v.flags,b=String(E===void 0&&v instanceof RegExp&&!("flags"in h)?u.call(v):E);return"/"+g+"/"+b},{unsafe:!0})},"2ca0":function(i,s,o){var a=o("23e7"),l=o("06cf").f,c=o("50c4"),u=o("5a34"),f=o("1d80"),h=o("ab13"),d=o("c430"),p="".startsWith,m=Math.min,y=h("startsWith"),v=!d&&!y&&!!function(){var g=l(String.prototype,"startsWith");return g&&!g.writable}();a({target:"String",proto:!0,forced:!v&&!y},{startsWith:function(E){var b=String(f(this));u(E);var T=c(m(arguments.length>1?arguments[1]:void 0,b.length)),S=String(E);return p?p.call(b,S,T):b.slice(T,T+S.length)===S}})},"2d00":function(i,s,o){var a=o("da84"),l=o("342f"),c=a.process,u=c&&c.versions,f=u&&u.v8,h,d;f?(h=f.split("."),d=h[0]+h[1]):l&&(h=l.match(/Edge\/(\d+)/),(!h||h[1]>=74)&&(h=l.match(/Chrome\/(\d+)/),h&&(d=h[1]))),i.exports=d&&+d},"342f":function(i,s,o){var a=o("d066");i.exports=a("navigator","userAgent")||""},"35a1":function(i,s,o){var a=o("f5df"),l=o("3f8c"),c=o("b622"),u=c("iterator");i.exports=function(f){if(f!=null)return f[u]||f["@@iterator"]||l[a(f)]}},"37e8":function(i,s,o){var a=o("83ab"),l=o("9bf2"),c=o("825a"),u=o("df75");i.exports=a?Object.defineProperties:function(h,d){c(h);for(var p=u(d),m=p.length,y=0,v;m>y;)l.f(h,v=p[y++],d[v]);return h}},"3bbe":function(i,s,o){var a=o("861d");i.exports=function(l){if(!a(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype");return l}},"3ca3":function(i,s,o){var a=o("6547").charAt,l=o("69f3"),c=o("7dd0"),u="String Iterator",f=l.set,h=l.getterFor(u);c(String,"String",function(d){f(this,{type:u,string:String(d),index:0})},function(){var p=h(this),m=p.string,y=p.index,v;return y>=m.length?{value:void 0,done:!0}:(v=a(m,y),p.index+=v.length,{value:v,done:!1})})},"3f8c":function(i,s){i.exports={}},4160:function(i,s,o){var a=o("23e7"),l=o("17c2");a({target:"Array",proto:!0,forced:[].forEach!=l},{forEach:l})},"428f":function(i,s,o){var a=o("da84");i.exports=a},"44ad":function(i,s,o){var a=o("d039"),l=o("c6b6"),c="".split;i.exports=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(u){return l(u)=="String"?c.call(u,""):Object(u)}:Object},"44d2":function(i,s,o){var a=o("b622"),l=o("7c73"),c=o("9bf2"),u=a("unscopables"),f=Array.prototype;f[u]==null&&c.f(f,u,{configurable:!0,value:l(null)}),i.exports=function(h){f[u][h]=!0}},"44e7":function(i,s,o){var a=o("861d"),l=o("c6b6"),c=o("b622"),u=c("match");i.exports=function(f){var h;return a(f)&&((h=f[u])!==void 0?!!h:l(f)=="RegExp")}},4930:function(i,s,o){var a=o("d039");i.exports=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())})},"4d64":function(i,s,o){var a=o("fc6a"),l=o("50c4"),c=o("23cb"),u=function(f){return function(h,d,p){var m=a(h),y=l(m.length),v=c(p,y),g;if(f&&d!=d){for(;y>v;)if(g=m[v++],g!=g)return!0}else for(;y>v;v++)if((f||v in m)&&m[v]===d)return f||v||0;return!f&&-1}};i.exports={includes:u(!0),indexOf:u(!1)}},"4de4":function(i,s,o){var a=o("23e7"),l=o("b727").filter,c=o("1dde"),u=o("ae40"),f=c("filter"),h=u("filter");a({target:"Array",proto:!0,forced:!f||!h},{filter:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(i,s,o){var a=o("0366"),l=o("7b0b"),c=o("9bdd"),u=o("e95a"),f=o("50c4"),h=o("8418"),d=o("35a1");i.exports=function(m){var y=l(m),v=typeof this=="function"?this:Array,g=arguments.length,E=g>1?arguments[1]:void 0,b=E!==void 0,T=d(y),S=0,O,A,I,k,F,U;if(b&&(E=a(E,g>2?arguments[2]:void 0,2)),T!=null&&!(v==Array&&u(T)))for(k=T.call(y),F=k.next,A=new v;!(I=F.call(k)).done;S++)U=b?c(k,E,[I.value,S],!0):I.value,h(A,S,U);else for(O=f(y.length),A=new v(O);O>S;S++)U=b?E(y[S],S):y[S],h(A,S,U);return A.length=S,A}},"4fad":function(i,s,o){var a=o("23e7"),l=o("6f53").entries;a({target:"Object",stat:!0},{entries:function(u){return l(u)}})},"50c4":function(i,s,o){var a=o("a691"),l=Math.min;i.exports=function(c){return c>0?l(a(c),9007199254740991):0}},5135:function(i,s){var o={}.hasOwnProperty;i.exports=function(a,l){return o.call(a,l)}},5319:function(i,s,o){var a=o("d784"),l=o("825a"),c=o("7b0b"),u=o("50c4"),f=o("a691"),h=o("1d80"),d=o("8aa5"),p=o("14c3"),m=Math.max,y=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,E=/\$([$&'`]|\d\d?)/g,b=function(T){return T===void 0?T:String(T)};a("replace",2,function(T,S,O,A){var I=A.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,k=A.REPLACE_KEEPS_$0,F=I?"$":"$0";return[function(P,ne){var j=h(this),Q=P==null?void 0:P[T];return Q!==void 0?Q.call(P,j,ne):S.call(String(j),P,ne)},function(M,P){if(!I&&k||typeof P=="string"&&P.indexOf(F)===-1){var ne=O(S,M,this,P);if(ne.done)return ne.value}var j=l(M),Q=String(this),oe=typeof P=="function";oe||(P=String(P));var ze=j.global;if(ze){var Ce=j.unicode;j.lastIndex=0}for(var Ue=[];;){var xe=p(j,Q);if(xe===null||(Ue.push(xe),!ze))break;var dt=String(xe[0]);dt===""&&(j.lastIndex=d(Q,u(j.lastIndex),Ce))}for(var gt="",vt=0,Ve=0;Ve<Ue.length;Ve++){xe=Ue[Ve];for(var D=String(xe[0]),J=m(y(f(xe.index),Q.length),0),K=[],ae=1;ae<xe.length;ae++)K.push(b(xe[ae]));var je=xe.groups;if(oe){var _=[D].concat(K,J,Q);je!==void 0&&_.push(je);var w=String(P.apply(void 0,_))}else w=U(D,Q,J,K,je,P);J>=vt&&(gt+=Q.slice(vt,J)+w,vt=J+D.length)}return gt+Q.slice(vt)}];function U(M,P,ne,j,Q,oe){var ze=ne+M.length,Ce=j.length,Ue=E;return Q!==void 0&&(Q=c(Q),Ue=g),S.call(oe,Ue,function(xe,dt){var gt;switch(dt.charAt(0)){case"$":return"$";case"&":return M;case"`":return P.slice(0,ne);case"'":return P.slice(ze);case"<":gt=Q[dt.slice(1,-1)];break;default:var vt=+dt;if(vt===0)return xe;if(vt>Ce){var Ve=v(vt/10);return Ve===0?xe:Ve<=Ce?j[Ve-1]===void 0?dt.charAt(1):j[Ve-1]+dt.charAt(1):xe}gt=j[vt-1]}return gt===void 0?"":gt})}})},5692:function(i,s,o){var a=o("c430"),l=o("c6cd");(i.exports=function(c,u){return l[c]||(l[c]=u!==void 0?u:{})})("versions",[]).push({version:"3.6.5",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(i,s,o){var a=o("d066"),l=o("241c"),c=o("7418"),u=o("825a");i.exports=a("Reflect","ownKeys")||function(h){var d=l.f(u(h)),p=c.f;return p?d.concat(p(h)):d}},"5a34":function(i,s,o){var a=o("44e7");i.exports=function(l){if(a(l))throw TypeError("The method doesn't accept regular expressions");return l}},"5c6c":function(i,s){i.exports=function(o,a){return{enumerable:!(o&1),configurable:!(o&2),writable:!(o&4),value:a}}},"5db7":function(i,s,o){var a=o("23e7"),l=o("a2bf"),c=o("7b0b"),u=o("50c4"),f=o("1c0b"),h=o("65f0");a({target:"Array",proto:!0},{flatMap:function(p){var m=c(this),y=u(m.length),v;return f(p),v=h(m,0),v.length=l(v,m,m,y,0,1,p,arguments.length>1?arguments[1]:void 0),v}})},6547:function(i,s,o){var a=o("a691"),l=o("1d80"),c=function(u){return function(f,h){var d=String(l(f)),p=a(h),m=d.length,y,v;return p<0||p>=m?u?"":void 0:(y=d.charCodeAt(p),y<55296||y>56319||p+1===m||(v=d.charCodeAt(p+1))<56320||v>57343?u?d.charAt(p):y:u?d.slice(p,p+2):(y-55296<<10)+(v-56320)+65536)}};i.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(i,s,o){var a=o("861d"),l=o("e8b5"),c=o("b622"),u=c("species");i.exports=function(f,h){var d;return l(f)&&(d=f.constructor,typeof d=="function"&&(d===Array||l(d.prototype))?d=void 0:a(d)&&(d=d[u],d===null&&(d=void 0))),new(d===void 0?Array:d)(h===0?0:h)}},"69f3":function(i,s,o){var a=o("7f9a"),l=o("da84"),c=o("861d"),u=o("9112"),f=o("5135"),h=o("f772"),d=o("d012"),p=l.WeakMap,m,y,v,g=function(I){return v(I)?y(I):m(I,{})},E=function(I){return function(k){var F;if(!c(k)||(F=y(k)).type!==I)throw TypeError("Incompatible receiver, "+I+" required");return F}};if(a){var b=new p,T=b.get,S=b.has,O=b.set;m=function(I,k){return O.call(b,I,k),k},y=function(I){return T.call(b,I)||{}},v=function(I){return S.call(b,I)}}else{var A=h("state");d[A]=!0,m=function(I,k){return u(I,A,k),k},y=function(I){return f(I,A)?I[A]:{}},v=function(I){return f(I,A)}}i.exports={set:m,get:y,has:v,enforce:g,getterFor:E}},"6eeb":function(i,s,o){var a=o("da84"),l=o("9112"),c=o("5135"),u=o("ce4e"),f=o("8925"),h=o("69f3"),d=h.get,p=h.enforce,m=String(String).split("String");(i.exports=function(y,v,g,E){var b=E?!!E.unsafe:!1,T=E?!!E.enumerable:!1,S=E?!!E.noTargetGet:!1;if(typeof g=="function"&&(typeof v=="string"&&!c(g,"name")&&l(g,"name",v),p(g).source=m.join(typeof v=="string"?v:"")),y===a){T?y[v]=g:u(v,g);return}else b?!S&&y[v]&&(T=!0):delete y[v];T?y[v]=g:l(y,v,g)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||f(this)})},"6f53":function(i,s,o){var a=o("83ab"),l=o("df75"),c=o("fc6a"),u=o("d1e7").f,f=function(h){return function(d){for(var p=c(d),m=l(p),y=m.length,v=0,g=[],E;y>v;)E=m[v++],(!a||u.call(p,E))&&g.push(h?[E,p[E]]:p[E]);return g}};i.exports={entries:f(!0),values:f(!1)}},"73d9":function(i,s,o){var a=o("44d2");a("flatMap")},7418:function(i,s){s.f=Object.getOwnPropertySymbols},"746f":function(i,s,o){var a=o("428f"),l=o("5135"),c=o("e538"),u=o("9bf2").f;i.exports=function(f){var h=a.Symbol||(a.Symbol={});l(h,f)||u(h,f,{value:c.f(f)})}},7839:function(i,s){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(i,s,o){var a=o("1d80");i.exports=function(l){return Object(a(l))}},"7c73":function(i,s,o){var a=o("825a"),l=o("37e8"),c=o("7839"),u=o("d012"),f=o("1be4"),h=o("cc12"),d=o("f772"),p=">",m="<",y="prototype",v="script",g=d("IE_PROTO"),E=function(){},b=function(I){return m+v+p+I+m+"/"+v+p},T=function(I){I.write(b("")),I.close();var k=I.parentWindow.Object;return I=null,k},S=function(){var I=h("iframe"),k="java"+v+":",F;return I.style.display="none",f.appendChild(I),I.src=String(k),F=I.contentWindow.document,F.open(),F.write(b("document.F=Object")),F.close(),F.F},O,A=function(){try{O=document.domain&&new ActiveXObject("htmlfile")}catch{}A=O?T(O):S();for(var I=c.length;I--;)delete A[y][c[I]];return A()};u[g]=!0,i.exports=Object.create||function(k,F){var U;return k!==null?(E[y]=a(k),U=new E,E[y]=null,U[g]=k):U=A(),F===void 0?U:l(U,F)}},"7dd0":function(i,s,o){var a=o("23e7"),l=o("9ed3"),c=o("e163"),u=o("d2bb"),f=o("d44e"),h=o("9112"),d=o("6eeb"),p=o("b622"),m=o("c430"),y=o("3f8c"),v=o("ae93"),g=v.IteratorPrototype,E=v.BUGGY_SAFARI_ITERATORS,b=p("iterator"),T="keys",S="values",O="entries",A=function(){return this};i.exports=function(I,k,F,U,M,P,ne){l(F,k,U);var j=function(Ve){if(Ve===M&&Ue)return Ue;if(!E&&Ve in ze)return ze[Ve];switch(Ve){case T:return function(){return new F(this,Ve)};case S:return function(){return new F(this,Ve)};case O:return function(){return new F(this,Ve)}}return function(){return new F(this)}},Q=k+" Iterator",oe=!1,ze=I.prototype,Ce=ze[b]||ze["@@iterator"]||M&&ze[M],Ue=!E&&Ce||j(M),xe=k=="Array"&&ze.entries||Ce,dt,gt,vt;if(xe&&(dt=c(xe.call(new I)),g!==Object.prototype&&dt.next&&(!m&&c(dt)!==g&&(u?u(dt,g):typeof dt[b]!="function"&&h(dt,b,A)),f(dt,Q,!0,!0),m&&(y[Q]=A))),M==S&&Ce&&Ce.name!==S&&(oe=!0,Ue=function(){return Ce.call(this)}),(!m||ne)&&ze[b]!==Ue&&h(ze,b,Ue),y[k]=Ue,M)if(gt={values:j(S),keys:P?Ue:j(T),entries:j(O)},ne)for(vt in gt)(E||oe||!(vt in ze))&&d(ze,vt,gt[vt]);else a({target:k,proto:!0,forced:E||oe},gt);return gt}},"7f9a":function(i,s,o){var a=o("da84"),l=o("8925"),c=a.WeakMap;i.exports=typeof c=="function"&&/native code/.test(l(c))},"825a":function(i,s,o){var a=o("861d");i.exports=function(l){if(!a(l))throw TypeError(String(l)+" is not an object");return l}},"83ab":function(i,s,o){var a=o("d039");i.exports=!a(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(i,s,o){var a=o("c04e"),l=o("9bf2"),c=o("5c6c");i.exports=function(u,f,h){var d=a(f);d in u?l.f(u,d,c(0,h)):u[d]=h}},"861d":function(i,s){i.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},8875:function(i,s,o){var a,l,c;(function(u,f){l=[],a=f,c=typeof a=="function"?a.apply(s,l):a,c!==void 0&&(i.exports=c)})(typeof self<"u"?self:this,function(){function u(){var f=Object.getOwnPropertyDescriptor(document,"currentScript");if(!f&&"currentScript"in document&&document.currentScript||f&&f.get!==u&&document.currentScript)return document.currentScript;try{throw new Error}catch(O){var h=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,d=/@([^@]*):(\d+):(\d+)\s*$/ig,p=h.exec(O.stack)||d.exec(O.stack),m=p&&p[1]||!1,y=p&&p[2]||!1,v=document.location.href.replace(document.location.hash,""),g,E,b,T=document.getElementsByTagName("script");m===v&&(g=document.documentElement.outerHTML,E=new RegExp("(?:[^\\n]+?\\n){0,"+(y-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),b=g.replace(E,"$1").trim());for(var S=0;S<T.length;S++)if(T[S].readyState==="interactive"||T[S].src===m||m===v&&T[S].innerHTML&&T[S].innerHTML.trim()===b)return T[S];return null}}return u})},8925:function(i,s,o){var a=o("c6cd"),l=Function.toString;typeof a.inspectSource!="function"&&(a.inspectSource=function(c){return l.call(c)}),i.exports=a.inspectSource},"8aa5":function(i,s,o){var a=o("6547").charAt;i.exports=function(l,c,u){return c+(u?a(l,c).length:1)}},"8bbf":function(i,s){i.exports=n},"90e3":function(i,s){var o=0,a=Math.random();i.exports=function(l){return"Symbol("+String(l===void 0?"":l)+")_"+(++o+a).toString(36)}},9112:function(i,s,o){var a=o("83ab"),l=o("9bf2"),c=o("5c6c");i.exports=a?function(u,f,h){return l.f(u,f,c(1,h))}:function(u,f,h){return u[f]=h,u}},9263:function(i,s,o){var a=o("ad6d"),l=o("9f7f"),c=RegExp.prototype.exec,u=String.prototype.replace,f=c,h=function(){var y=/a/,v=/b*/g;return c.call(y,"a"),c.call(v,"a"),y.lastIndex!==0||v.lastIndex!==0}(),d=l.UNSUPPORTED_Y||l.BROKEN_CARET,p=/()??/.exec("")[1]!==void 0,m=h||p||d;m&&(f=function(v){var g=this,E,b,T,S,O=d&&g.sticky,A=a.call(g),I=g.source,k=0,F=v;return O&&(A=A.replace("y",""),A.indexOf("g")===-1&&(A+="g"),F=String(v).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&v[g.lastIndex-1]!==`
`)&&(I="(?: "+I+")",F=" "+F,k++),b=new RegExp("^(?:"+I+")",A)),p&&(b=new RegExp("^"+I+"$(?!\\s)",A)),h&&(E=g.lastIndex),T=c.call(O?b:g,F),O?T?(T.input=T.input.slice(k),T[0]=T[0].slice(k),T.index=g.lastIndex,g.lastIndex+=T[0].length):g.lastIndex=0:h&&T&&(g.lastIndex=g.global?T.index+T[0].length:E),p&&T&&T.length>1&&u.call(T[0],b,function(){for(S=1;S<arguments.length-2;S++)arguments[S]===void 0&&(T[S]=void 0)}),T}),i.exports=f},"94ca":function(i,s,o){var a=o("d039"),l=/#|\.prototype\./,c=function(p,m){var y=f[u(p)];return y==d?!0:y==h?!1:typeof m=="function"?a(m):!!m},u=c.normalize=function(p){return String(p).replace(l,".").toLowerCase()},f=c.data={},h=c.NATIVE="N",d=c.POLYFILL="P";i.exports=c},"99af":function(i,s,o){var a=o("23e7"),l=o("d039"),c=o("e8b5"),u=o("861d"),f=o("7b0b"),h=o("50c4"),d=o("8418"),p=o("65f0"),m=o("1dde"),y=o("b622"),v=o("2d00"),g=y("isConcatSpreadable"),E=9007199254740991,b="Maximum allowed index exceeded",T=v>=51||!l(function(){var I=[];return I[g]=!1,I.concat()[0]!==I}),S=m("concat"),O=function(I){if(!u(I))return!1;var k=I[g];return k!==void 0?!!k:c(I)},A=!T||!S;a({target:"Array",proto:!0,forced:A},{concat:function(k){var F=f(this),U=p(F,0),M=0,P,ne,j,Q,oe;for(P=-1,j=arguments.length;P<j;P++)if(oe=P===-1?F:arguments[P],O(oe)){if(Q=h(oe.length),M+Q>E)throw TypeError(b);for(ne=0;ne<Q;ne++,M++)ne in oe&&d(U,M,oe[ne])}else{if(M>=E)throw TypeError(b);d(U,M++,oe)}return U.length=M,U}})},"9bdd":function(i,s,o){var a=o("825a");i.exports=function(l,c,u,f){try{return f?c(a(u)[0],u[1]):c(u)}catch(d){var h=l.return;throw h!==void 0&&a(h.call(l)),d}}},"9bf2":function(i,s,o){var a=o("83ab"),l=o("0cfb"),c=o("825a"),u=o("c04e"),f=Object.defineProperty;s.f=a?f:function(d,p,m){if(c(d),p=u(p,!0),c(m),l)try{return f(d,p,m)}catch{}if("get"in m||"set"in m)throw TypeError("Accessors not supported");return"value"in m&&(d[p]=m.value),d}},"9ed3":function(i,s,o){var a=o("ae93").IteratorPrototype,l=o("7c73"),c=o("5c6c"),u=o("d44e"),f=o("3f8c"),h=function(){return this};i.exports=function(d,p,m){var y=p+" Iterator";return d.prototype=l(a,{next:c(1,m)}),u(d,y,!1,!0),f[y]=h,d}},"9f7f":function(i,s,o){var a=o("d039");function l(c,u){return RegExp(c,u)}s.UNSUPPORTED_Y=a(function(){var c=l("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),s.BROKEN_CARET=a(function(){var c=l("^r","gy");return c.lastIndex=2,c.exec("str")!=null})},a2bf:function(i,s,o){var a=o("e8b5"),l=o("50c4"),c=o("0366"),u=function(f,h,d,p,m,y,v,g){for(var E=m,b=0,T=v?c(v,g,3):!1,S;b<p;){if(b in d){if(S=T?T(d[b],b,h):d[b],y>0&&a(S))E=u(f,h,S,l(S.length),E,y-1)-1;else{if(E>=9007199254740991)throw TypeError("Exceed the acceptable array length");f[E]=S}E++}b++}return E};i.exports=u},a352:function(i,s){i.exports=r},a434:function(i,s,o){var a=o("23e7"),l=o("23cb"),c=o("a691"),u=o("50c4"),f=o("7b0b"),h=o("65f0"),d=o("8418"),p=o("1dde"),m=o("ae40"),y=p("splice"),v=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,E=Math.min,b=9007199254740991,T="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!y||!v},{splice:function(O,A){var I=f(this),k=u(I.length),F=l(O,k),U=arguments.length,M,P,ne,j,Q,oe;if(U===0?M=P=0:U===1?(M=0,P=k-F):(M=U-2,P=E(g(c(A),0),k-F)),k+M-P>b)throw TypeError(T);for(ne=h(I,P),j=0;j<P;j++)Q=F+j,Q in I&&d(ne,j,I[Q]);if(ne.length=P,M<P){for(j=F;j<k-P;j++)Q=j+P,oe=j+M,Q in I?I[oe]=I[Q]:delete I[oe];for(j=k;j>k-P+M;j--)delete I[j-1]}else if(M>P)for(j=k-P;j>F;j--)Q=j+P-1,oe=j+M-1,Q in I?I[oe]=I[Q]:delete I[oe];for(j=0;j<M;j++)I[j+F]=arguments[j+2];return I.length=k-P+M,ne}})},a4d3:function(i,s,o){var a=o("23e7"),l=o("da84"),c=o("d066"),u=o("c430"),f=o("83ab"),h=o("4930"),d=o("fdbf"),p=o("d039"),m=o("5135"),y=o("e8b5"),v=o("861d"),g=o("825a"),E=o("7b0b"),b=o("fc6a"),T=o("c04e"),S=o("5c6c"),O=o("7c73"),A=o("df75"),I=o("241c"),k=o("057f"),F=o("7418"),U=o("06cf"),M=o("9bf2"),P=o("d1e7"),ne=o("9112"),j=o("6eeb"),Q=o("5692"),oe=o("f772"),ze=o("d012"),Ce=o("90e3"),Ue=o("b622"),xe=o("e538"),dt=o("746f"),gt=o("d44e"),vt=o("69f3"),Ve=o("b727").forEach,D=oe("hidden"),J="Symbol",K="prototype",ae=Ue("toPrimitive"),je=vt.set,_=vt.getterFor(J),w=Object[K],C=l.Symbol,L=c("JSON","stringify"),$=U.f,B=M.f,Z=k.f,X=P.f,Y=Q("symbols"),H=Q("op-symbols"),ue=Q("string-to-symbol-registry"),se=Q("symbol-to-string-registry"),de=Q("wks"),_e=l.QObject,Me=!_e||!_e[K]||!_e[K].findChild,it=f&&p(function(){return O(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a!=7})?function(Re,pe,Te){var Ye=$(w,pe);Ye&&delete w[pe],B(Re,pe,Te),Ye&&Re!==w&&B(w,pe,Ye)}:B,qe=function(Re,pe){var Te=Y[Re]=O(C[K]);return je(Te,{type:J,tag:Re,description:pe}),f||(Te.description=pe),Te},x=d?function(Re){return typeof Re=="symbol"}:function(Re){return Object(Re)instanceof C},R=function(pe,Te,Ye){pe===w&&R(H,Te,Ye),g(pe);var tt=T(Te,!0);return g(Ye),m(Y,tt)?(Ye.enumerable?(m(pe,D)&&pe[D][tt]&&(pe[D][tt]=!1),Ye=O(Ye,{enumerable:S(0,!1)})):(m(pe,D)||B(pe,D,S(1,{})),pe[D][tt]=!0),it(pe,tt,Ye)):B(pe,tt,Ye)},N=function(pe,Te){g(pe);var Ye=b(Te),tt=A(Ye).concat(Le(Ye));return Ve(tt,function(Rn){(!f||re.call(Ye,Rn))&&R(pe,Rn,Ye[Rn])}),pe},W=function(pe,Te){return Te===void 0?O(pe):N(O(pe),Te)},re=function(pe){var Te=T(pe,!0),Ye=X.call(this,Te);return this===w&&m(Y,Te)&&!m(H,Te)?!1:Ye||!m(this,Te)||!m(Y,Te)||m(this,D)&&this[D][Te]?Ye:!0},we=function(pe,Te){var Ye=b(pe),tt=T(Te,!0);if(!(Ye===w&&m(Y,tt)&&!m(H,tt))){var Rn=$(Ye,tt);return Rn&&m(Y,tt)&&!(m(Ye,D)&&Ye[D][tt])&&(Rn.enumerable=!0),Rn}},ge=function(pe){var Te=Z(b(pe)),Ye=[];return Ve(Te,function(tt){!m(Y,tt)&&!m(ze,tt)&&Ye.push(tt)}),Ye},Le=function(pe){var Te=pe===w,Ye=Z(Te?H:b(pe)),tt=[];return Ve(Ye,function(Rn){m(Y,Rn)&&(!Te||m(w,Rn))&&tt.push(Y[Rn])}),tt};if(h||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor");var pe=!arguments.length||arguments[0]===void 0?void 0:String(arguments[0]),Te=Ce(pe),Ye=function(tt){this===w&&Ye.call(H,tt),m(this,D)&&m(this[D],Te)&&(this[D][Te]=!1),it(this,Te,S(1,tt))};return f&&Me&&it(w,Te,{configurable:!0,set:Ye}),qe(Te,pe)},j(C[K],"toString",function(){return _(this).tag}),j(C,"withoutSetter",function(Re){return qe(Ce(Re),Re)}),P.f=re,M.f=R,U.f=we,I.f=k.f=ge,F.f=Le,xe.f=function(Re){return qe(Ue(Re),Re)},f&&(B(C[K],"description",{configurable:!0,get:function(){return _(this).description}}),u||j(w,"propertyIsEnumerable",re,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:C}),Ve(A(de),function(Re){dt(Re)}),a({target:J,stat:!0,forced:!h},{for:function(Re){var pe=String(Re);if(m(ue,pe))return ue[pe];var Te=C(pe);return ue[pe]=Te,se[Te]=pe,Te},keyFor:function(pe){if(!x(pe))throw TypeError(pe+" is not a symbol");if(m(se,pe))return se[pe]},useSetter:function(){Me=!0},useSimple:function(){Me=!1}}),a({target:"Object",stat:!0,forced:!h,sham:!f},{create:W,defineProperty:R,defineProperties:N,getOwnPropertyDescriptor:we}),a({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:ge,getOwnPropertySymbols:Le}),a({target:"Object",stat:!0,forced:p(function(){F.f(1)})},{getOwnPropertySymbols:function(pe){return F.f(E(pe))}}),L){var St=!h||p(function(){var Re=C();return L([Re])!="[null]"||L({a:Re})!="{}"||L(Object(Re))!="{}"});a({target:"JSON",stat:!0,forced:St},{stringify:function(pe,Te,Ye){for(var tt=[pe],Rn=1,Sd;arguments.length>Rn;)tt.push(arguments[Rn++]);if(Sd=Te,!(!v(Te)&&pe===void 0||x(pe)))return y(Te)||(Te=function(Sx,Zc){if(typeof Sd=="function"&&(Zc=Sd.call(this,Sx,Zc)),!x(Zc))return Zc}),tt[1]=Te,L.apply(null,tt)}})}C[K][ae]||ne(C[K],ae,C[K].valueOf),gt(C,J),ze[D]=!0},a630:function(i,s,o){var a=o("23e7"),l=o("4df4"),c=o("1c7e"),u=!c(function(f){Array.from(f)});a({target:"Array",stat:!0,forced:u},{from:l})},a640:function(i,s,o){var a=o("d039");i.exports=function(l,c){var u=[][l];return!!u&&a(function(){u.call(null,c||function(){throw 1},1)})}},a691:function(i,s){var o=Math.ceil,a=Math.floor;i.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},ab13:function(i,s,o){var a=o("b622"),l=a("match");i.exports=function(c){var u=/./;try{"/./"[c](u)}catch{try{return u[l]=!1,"/./"[c](u)}catch{}}return!1}},ac1f:function(i,s,o){var a=o("23e7"),l=o("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(i,s,o){var a=o("825a");i.exports=function(){var l=a(this),c="";return l.global&&(c+="g"),l.ignoreCase&&(c+="i"),l.multiline&&(c+="m"),l.dotAll&&(c+="s"),l.unicode&&(c+="u"),l.sticky&&(c+="y"),c}},ae40:function(i,s,o){var a=o("83ab"),l=o("d039"),c=o("5135"),u=Object.defineProperty,f={},h=function(d){throw d};i.exports=function(d,p){if(c(f,d))return f[d];p||(p={});var m=[][d],y=c(p,"ACCESSORS")?p.ACCESSORS:!1,v=c(p,0)?p[0]:h,g=c(p,1)?p[1]:void 0;return f[d]=!!m&&!l(function(){if(y&&!a)return!0;var E={length:-1};y?u(E,1,{enumerable:!0,get:h}):E[1]=1,m.call(E,v,g)})}},ae93:function(i,s,o){var a=o("e163"),l=o("9112"),c=o("5135"),u=o("b622"),f=o("c430"),h=u("iterator"),d=!1,p=function(){return this},m,y,v;[].keys&&(v=[].keys(),"next"in v?(y=a(a(v)),y!==Object.prototype&&(m=y)):d=!0),m==null&&(m={}),!f&&!c(m,h)&&l(m,h,p),i.exports={IteratorPrototype:m,BUGGY_SAFARI_ITERATORS:d}},b041:function(i,s,o){var a=o("00ee"),l=o("f5df");i.exports=a?{}.toString:function(){return"[object "+l(this)+"]"}},b0c0:function(i,s,o){var a=o("83ab"),l=o("9bf2").f,c=Function.prototype,u=c.toString,f=/^\s*function ([^ (]*)/,h="name";a&&!(h in c)&&l(c,h,{configurable:!0,get:function(){try{return u.call(this).match(f)[1]}catch{return""}}})},b622:function(i,s,o){var a=o("da84"),l=o("5692"),c=o("5135"),u=o("90e3"),f=o("4930"),h=o("fdbf"),d=l("wks"),p=a.Symbol,m=h?p:p&&p.withoutSetter||u;i.exports=function(y){return c(d,y)||(f&&c(p,y)?d[y]=p[y]:d[y]=m("Symbol."+y)),d[y]}},b64b:function(i,s,o){var a=o("23e7"),l=o("7b0b"),c=o("df75"),u=o("d039"),f=u(function(){c(1)});a({target:"Object",stat:!0,forced:f},{keys:function(d){return c(l(d))}})},b727:function(i,s,o){var a=o("0366"),l=o("44ad"),c=o("7b0b"),u=o("50c4"),f=o("65f0"),h=[].push,d=function(p){var m=p==1,y=p==2,v=p==3,g=p==4,E=p==6,b=p==5||E;return function(T,S,O,A){for(var I=c(T),k=l(I),F=a(S,O,3),U=u(k.length),M=0,P=A||f,ne=m?P(T,U):y?P(T,0):void 0,j,Q;U>M;M++)if((b||M in k)&&(j=k[M],Q=F(j,M,I),p)){if(m)ne[M]=Q;else if(Q)switch(p){case 3:return!0;case 5:return j;case 6:return M;case 2:h.call(ne,j)}else if(g)return!1}return E?-1:v||g?g:ne}};i.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c04e:function(i,s,o){var a=o("861d");i.exports=function(l,c){if(!a(l))return l;var u,f;if(c&&typeof(u=l.toString)=="function"&&!a(f=u.call(l))||typeof(u=l.valueOf)=="function"&&!a(f=u.call(l))||!c&&typeof(u=l.toString)=="function"&&!a(f=u.call(l)))return f;throw TypeError("Can't convert object to primitive value")}},c430:function(i,s){i.exports=!1},c6b6:function(i,s){var o={}.toString;i.exports=function(a){return o.call(a).slice(8,-1)}},c6cd:function(i,s,o){var a=o("da84"),l=o("ce4e"),c="__core-js_shared__",u=a[c]||l(c,{});i.exports=u},c740:function(i,s,o){var a=o("23e7"),l=o("b727").findIndex,c=o("44d2"),u=o("ae40"),f="findIndex",h=!0,d=u(f);f in[]&&Array(1)[f](function(){h=!1}),a({target:"Array",proto:!0,forced:h||!d},{findIndex:function(m){return l(this,m,arguments.length>1?arguments[1]:void 0)}}),c(f)},c8ba:function(i,s){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}i.exports=o},c975:function(i,s,o){var a=o("23e7"),l=o("4d64").indexOf,c=o("a640"),u=o("ae40"),f=[].indexOf,h=!!f&&1/[1].indexOf(1,-0)<0,d=c("indexOf"),p=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:h||!d||!p},{indexOf:function(y){return h?f.apply(this,arguments)||0:l(this,y,arguments.length>1?arguments[1]:void 0)}})},ca84:function(i,s,o){var a=o("5135"),l=o("fc6a"),c=o("4d64").indexOf,u=o("d012");i.exports=function(f,h){var d=l(f),p=0,m=[],y;for(y in d)!a(u,y)&&a(d,y)&&m.push(y);for(;h.length>p;)a(d,y=h[p++])&&(~c(m,y)||m.push(y));return m}},caad:function(i,s,o){var a=o("23e7"),l=o("4d64").includes,c=o("44d2"),u=o("ae40"),f=u("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!f},{includes:function(d){return l(this,d,arguments.length>1?arguments[1]:void 0)}}),c("includes")},cc12:function(i,s,o){var a=o("da84"),l=o("861d"),c=a.document,u=l(c)&&l(c.createElement);i.exports=function(f){return u?c.createElement(f):{}}},ce4e:function(i,s,o){var a=o("da84"),l=o("9112");i.exports=function(c,u){try{l(a,c,u)}catch{a[c]=u}return u}},d012:function(i,s){i.exports={}},d039:function(i,s){i.exports=function(o){try{return!!o()}catch{return!0}}},d066:function(i,s,o){var a=o("428f"),l=o("da84"),c=function(u){return typeof u=="function"?u:void 0};i.exports=function(u,f){return arguments.length<2?c(a[u])||c(l[u]):a[u]&&a[u][f]||l[u]&&l[u][f]}},d1e7:function(i,s,o){var a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,c=l&&!a.call({1:2},1);s.f=c?function(f){var h=l(this,f);return!!h&&h.enumerable}:a},d28b:function(i,s,o){var a=o("746f");a("iterator")},d2bb:function(i,s,o){var a=o("825a"),l=o("3bbe");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c=!1,u={},f;try{f=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,f.call(u,[]),c=u instanceof Array}catch{}return function(d,p){return a(d),l(p),c?f.call(d,p):d.__proto__=p,d}}():void 0)},d3b7:function(i,s,o){var a=o("00ee"),l=o("6eeb"),c=o("b041");a||l(Object.prototype,"toString",c,{unsafe:!0})},d44e:function(i,s,o){var a=o("9bf2").f,l=o("5135"),c=o("b622"),u=c("toStringTag");i.exports=function(f,h,d){f&&!l(f=d?f:f.prototype,u)&&a(f,u,{configurable:!0,value:h})}},d58f:function(i,s,o){var a=o("1c0b"),l=o("7b0b"),c=o("44ad"),u=o("50c4"),f=function(h){return function(d,p,m,y){a(p);var v=l(d),g=c(v),E=u(v.length),b=h?E-1:0,T=h?-1:1;if(m<2)for(;;){if(b in g){y=g[b],b+=T;break}if(b+=T,h?b<0:E<=b)throw TypeError("Reduce of empty array with no initial value")}for(;h?b>=0:E>b;b+=T)b in g&&(y=p(y,g[b],b,v));return y}};i.exports={left:f(!1),right:f(!0)}},d784:function(i,s,o){o("ac1f");var a=o("6eeb"),l=o("d039"),c=o("b622"),u=o("9263"),f=o("9112"),h=c("species"),d=!l(function(){var g=/./;return g.exec=function(){var E=[];return E.groups={a:"7"},E},"".replace(g,"$<a>")!=="7"}),p=function(){return"a".replace(/./,"$0")==="$0"}(),m=c("replace"),y=function(){return/./[m]?/./[m]("a","$0")==="":!1}(),v=!l(function(){var g=/(?:)/,E=g.exec;g.exec=function(){return E.apply(this,arguments)};var b="ab".split(g);return b.length!==2||b[0]!=="a"||b[1]!=="b"});i.exports=function(g,E,b,T){var S=c(g),O=!l(function(){var M={};return M[S]=function(){return 7},""[g](M)!=7}),A=O&&!l(function(){var M=!1,P=/a/;return g==="split"&&(P={},P.constructor={},P.constructor[h]=function(){return P},P.flags="",P[S]=/./[S]),P.exec=function(){return M=!0,null},P[S](""),!M});if(!O||!A||g==="replace"&&!(d&&p&&!y)||g==="split"&&!v){var I=/./[S],k=b(S,""[g],function(M,P,ne,j,Q){return P.exec===u?O&&!Q?{done:!0,value:I.call(P,ne,j)}:{done:!0,value:M.call(ne,P,j)}:{done:!1}},{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:y}),F=k[0],U=k[1];a(String.prototype,g,F),a(RegExp.prototype,S,E==2?function(M,P){return U.call(M,this,P)}:function(M){return U.call(M,this)})}T&&f(RegExp.prototype[S],"sham",!0)}},d81d:function(i,s,o){var a=o("23e7"),l=o("b727").map,c=o("1dde"),u=o("ae40"),f=c("map"),h=u("map");a({target:"Array",proto:!0,forced:!f||!h},{map:function(p){return l(this,p,arguments.length>1?arguments[1]:void 0)}})},da84:function(i,s,o){(function(a){var l=function(c){return c&&c.Math==Math&&c};i.exports=l(typeof globalThis=="object"&&globalThis)||l(typeof window=="object"&&window)||l(typeof self=="object"&&self)||l(typeof a=="object"&&a)||Function("return this")()}).call(this,o("c8ba"))},dbb4:function(i,s,o){var a=o("23e7"),l=o("83ab"),c=o("56ef"),u=o("fc6a"),f=o("06cf"),h=o("8418");a({target:"Object",stat:!0,sham:!l},{getOwnPropertyDescriptors:function(p){for(var m=u(p),y=f.f,v=c(m),g={},E=0,b,T;v.length>E;)T=y(m,b=v[E++]),T!==void 0&&h(g,b,T);return g}})},dbf1:function(i,s,o){(function(a){o.d(s,"a",function(){return c});function l(){return typeof window<"u"?window.console:a.console}var c=l()}).call(this,o("c8ba"))},ddb0:function(i,s,o){var a=o("da84"),l=o("fdbc"),c=o("e260"),u=o("9112"),f=o("b622"),h=f("iterator"),d=f("toStringTag"),p=c.values;for(var m in l){var y=a[m],v=y&&y.prototype;if(v){if(v[h]!==p)try{u(v,h,p)}catch{v[h]=p}if(v[d]||u(v,d,m),l[m]){for(var g in c)if(v[g]!==c[g])try{u(v,g,c[g])}catch{v[g]=c[g]}}}}},df75:function(i,s,o){var a=o("ca84"),l=o("7839");i.exports=Object.keys||function(u){return a(u,l)}},e01a:function(i,s,o){var a=o("23e7"),l=o("83ab"),c=o("da84"),u=o("5135"),f=o("861d"),h=o("9bf2").f,d=o("e893"),p=c.Symbol;if(l&&typeof p=="function"&&(!("description"in p.prototype)||p().description!==void 0)){var m={},y=function(){var S=arguments.length<1||arguments[0]===void 0?void 0:String(arguments[0]),O=this instanceof y?new p(S):S===void 0?p():p(S);return S===""&&(m[O]=!0),O};d(y,p);var v=y.prototype=p.prototype;v.constructor=y;var g=v.toString,E=String(p("test"))=="Symbol(test)",b=/^Symbol\((.*)\)[^)]+$/;h(v,"description",{configurable:!0,get:function(){var S=f(this)?this.valueOf():this,O=g.call(S);if(u(m,S))return"";var A=E?O.slice(7,-1):O.replace(b,"$1");return A===""?void 0:A}}),a({global:!0,forced:!0},{Symbol:y})}},e163:function(i,s,o){var a=o("5135"),l=o("7b0b"),c=o("f772"),u=o("e177"),f=c("IE_PROTO"),h=Object.prototype;i.exports=u?Object.getPrototypeOf:function(d){return d=l(d),a(d,f)?d[f]:typeof d.constructor=="function"&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?h:null}},e177:function(i,s,o){var a=o("d039");i.exports=!a(function(){function l(){}return l.prototype.constructor=null,Object.getPrototypeOf(new l)!==l.prototype})},e260:function(i,s,o){var a=o("fc6a"),l=o("44d2"),c=o("3f8c"),u=o("69f3"),f=o("7dd0"),h="Array Iterator",d=u.set,p=u.getterFor(h);i.exports=f(Array,"Array",function(m,y){d(this,{type:h,target:a(m),index:0,kind:y})},function(){var m=p(this),y=m.target,v=m.kind,g=m.index++;return!y||g>=y.length?(m.target=void 0,{value:void 0,done:!0}):v=="keys"?{value:g,done:!1}:v=="values"?{value:y[g],done:!1}:{value:[g,y[g]],done:!1}},"values"),c.Arguments=c.Array,l("keys"),l("values"),l("entries")},e439:function(i,s,o){var a=o("23e7"),l=o("d039"),c=o("fc6a"),u=o("06cf").f,f=o("83ab"),h=l(function(){u(1)}),d=!f||h;a({target:"Object",stat:!0,forced:d,sham:!f},{getOwnPropertyDescriptor:function(m,y){return u(c(m),y)}})},e538:function(i,s,o){var a=o("b622");s.f=a},e893:function(i,s,o){var a=o("5135"),l=o("56ef"),c=o("06cf"),u=o("9bf2");i.exports=function(f,h){for(var d=l(h),p=u.f,m=c.f,y=0;y<d.length;y++){var v=d[y];a(f,v)||p(f,v,m(h,v))}}},e8b5:function(i,s,o){var a=o("c6b6");i.exports=Array.isArray||function(c){return a(c)=="Array"}},e95a:function(i,s,o){var a=o("b622"),l=o("3f8c"),c=a("iterator"),u=Array.prototype;i.exports=function(f){return f!==void 0&&(l.Array===f||u[c]===f)}},f5df:function(i,s,o){var a=o("00ee"),l=o("c6b6"),c=o("b622"),u=c("toStringTag"),f=l(function(){return arguments}())=="Arguments",h=function(d,p){try{return d[p]}catch{}};i.exports=a?l:function(d){var p,m,y;return d===void 0?"Undefined":d===null?"Null":typeof(m=h(p=Object(d),u))=="string"?m:f?l(p):(y=l(p))=="Object"&&typeof p.callee=="function"?"Arguments":y}},f772:function(i,s,o){var a=o("5692"),l=o("90e3"),c=a("keys");i.exports=function(u){return c[u]||(c[u]=l(u))}},fb15:function(i,s,o){if(o.r(s),typeof window<"u"){var a=window.document.currentScript;{var l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l})}var c=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(o.p=c[1])}o("99af"),o("4de4"),o("4160"),o("c975"),o("d81d"),o("a434"),o("159b"),o("a4d3"),o("e439"),o("dbb4"),o("b64b");function u(x,R,N){return R in x?Object.defineProperty(x,R,{value:N,enumerable:!0,configurable:!0,writable:!0}):x[R]=N,x}function f(x,R){var N=Object.keys(x);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(x);R&&(W=W.filter(function(re){return Object.getOwnPropertyDescriptor(x,re).enumerable})),N.push.apply(N,W)}return N}function h(x){for(var R=1;R<arguments.length;R++){var N=arguments[R]!=null?arguments[R]:{};R%2?f(Object(N),!0).forEach(function(W){u(x,W,N[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(N)):f(Object(N)).forEach(function(W){Object.defineProperty(x,W,Object.getOwnPropertyDescriptor(N,W))})}return x}function d(x){if(Array.isArray(x))return x}o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");function p(x,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(x)))){var N=[],W=!0,re=!1,we=void 0;try{for(var ge=x[Symbol.iterator](),Le;!(W=(Le=ge.next()).done)&&(N.push(Le.value),!(R&&N.length===R));W=!0);}catch(St){re=!0,we=St}finally{try{!W&&ge.return!=null&&ge.return()}finally{if(re)throw we}}return N}}o("a630"),o("fb6a"),o("b0c0"),o("25f0");function m(x,R){(R==null||R>x.length)&&(R=x.length);for(var N=0,W=new Array(R);N<R;N++)W[N]=x[N];return W}function y(x,R){if(x){if(typeof x=="string")return m(x,R);var N=Object.prototype.toString.call(x).slice(8,-1);if(N==="Object"&&x.constructor&&(N=x.constructor.name),N==="Map"||N==="Set")return Array.from(x);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return m(x,R)}}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(x,R){return d(x)||p(x,R)||y(x,R)||v()}function E(x){if(Array.isArray(x))return m(x)}function b(x){if(typeof Symbol<"u"&&Symbol.iterator in Object(x))return Array.from(x)}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(x){return E(x)||b(x)||y(x)||T()}var O=o("a352"),A=o.n(O);function I(x){x.parentElement!==null&&x.parentElement.removeChild(x)}function k(x,R,N){var W=N===0?x.children[0]:x.children[N-1].nextSibling;x.insertBefore(R,W)}var F=o("dbf1");o("13d5"),o("4fad"),o("ac1f"),o("5319");function U(x){var R=Object.create(null);return function(W){var re=R[W];return re||(R[W]=x(W))}}var M=/-(\w)/g,P=U(function(x){return x.replace(M,function(R,N){return N.toUpperCase()})});o("5db7"),o("73d9");var ne=["Start","Add","Remove","Update","End"],j=["Choose","Unchoose","Sort","Filter","Clone"],Q=["Move"],oe=[Q,ne,j].flatMap(function(x){return x}).map(function(x){return"on".concat(x)}),ze={manage:Q,manageAndEmit:ne,emit:j};function Ce(x){return oe.indexOf(x)!==-1}o("caad"),o("2ca0");var Ue=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function xe(x){return Ue.includes(x)}function dt(x){return["transition-group","TransitionGroup"].includes(x)}function gt(x){return["id","class","role","style"].includes(x)||x.startsWith("data-")||x.startsWith("aria-")||x.startsWith("on")}function vt(x){return x.reduce(function(R,N){var W=g(N,2),re=W[0],we=W[1];return R[re]=we,R},{})}function Ve(x){var R=x.$attrs,N=x.componentData,W=N===void 0?{}:N,re=vt(Object.entries(R).filter(function(we){var ge=g(we,2),Le=ge[0];return ge[1],gt(Le)}));return h(h({},re),W)}function D(x){var R=x.$attrs,N=x.callBackBuilder,W=vt(J(R));Object.entries(N).forEach(function(we){var ge=g(we,2),Le=ge[0],St=ge[1];ze[Le].forEach(function(Re){W["on".concat(Re)]=St(Re)})});var re="[data-draggable]".concat(W.draggable||"");return h(h({},W),{},{draggable:re})}function J(x){return Object.entries(x).filter(function(R){var N=g(R,2),W=N[0];return N[1],!gt(W)}).map(function(R){var N=g(R,2),W=N[0],re=N[1];return[P(W),re]}).filter(function(R){var N=g(R,2),W=N[0];return N[1],!Ce(W)})}o("c740");function K(x,R){if(!(x instanceof R))throw new TypeError("Cannot call a class as a function")}function ae(x,R){for(var N=0;N<R.length;N++){var W=R[N];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(x,W.key,W)}}function je(x,R,N){return R&&ae(x.prototype,R),N&&ae(x,N),x}var _=function(R){var N=R.el;return N},w=function(R,N){return R.__draggable_context=N},C=function(R){return R.__draggable_context},L=function(){function x(R){var N=R.nodes,W=N.header,re=N.default,we=N.footer,ge=R.root,Le=R.realList;K(this,x),this.defaultNodes=re,this.children=[].concat(S(W),S(re),S(we)),this.externalComponent=ge.externalComponent,this.rootTransition=ge.transition,this.tag=ge.tag,this.realList=Le}return je(x,[{key:"render",value:function(N,W){var re=this.tag,we=this.children,ge=this._isRootComponent,Le=ge?{default:function(){return we}}:we;return N(re,W,Le)}},{key:"updated",value:function(){var N=this.defaultNodes,W=this.realList;N.forEach(function(re,we){w(_(re),{element:W[we],index:we})})}},{key:"getUnderlyingVm",value:function(N){return C(N)}},{key:"getVmIndexFromDomIndex",value:function(N,W){var re=this.defaultNodes,we=re.length,ge=W.children,Le=ge.item(N);if(Le===null)return we;var St=C(Le);if(St)return St.index;if(we===0)return 0;var Re=_(re[0]),pe=S(ge).findIndex(function(Te){return Te===Re});return N<pe?0:we}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),x}(),$=o("8bbf");function B(x,R){var N=x[R];return N?N():[]}function Z(x){var R=x.$slots,N=x.realList,W=x.getKey,re=N||[],we=["header","footer"].map(function(Te){return B(R,Te)}),ge=g(we,2),Le=ge[0],St=ge[1],Re=R.item;if(!Re)throw new Error("draggable element must have an item slot");var pe=re.flatMap(function(Te,Ye){return Re({element:Te,index:Ye}).map(function(tt){return tt.key=W(Te),tt.props=h(h({},tt.props||{}),{},{"data-draggable":!0}),tt})});if(pe.length!==re.length)throw new Error("Item slot must have only one child");return{header:Le,footer:St,default:pe}}function X(x){var R=dt(x),N=!xe(x)&&!R;return{transition:R,externalComponent:N,tag:N?Object($.resolveComponent)(x):R?$.TransitionGroup:x}}function Y(x){var R=x.$slots,N=x.tag,W=x.realList,re=x.getKey,we=Z({$slots:R,realList:W,getKey:re}),ge=X(N);return new L({nodes:we,root:ge,realList:W})}function H(x,R){var N=this;Object($.nextTick)(function(){return N.$emit(x.toLowerCase(),R)})}function ue(x){var R=this;return function(N,W){if(R.realList!==null)return R["onDrag".concat(x)](N,W)}}function se(x){var R=this,N=ue.call(this,x);return function(W,re){N.call(R,W,re),H.call(R,x,W)}}var de=null,_e={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(R){return R}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},Me=["update:modelValue","change"].concat(S([].concat(S(ze.manageAndEmit),S(ze.emit)).map(function(x){return x.toLowerCase()}))),it=Object($.defineComponent)({name:"draggable",inheritAttrs:!1,props:_e,emits:Me,data:function(){return{error:!1}},render:function(){try{this.error=!1;var R=this.$slots,N=this.$attrs,W=this.tag,re=this.componentData,we=this.realList,ge=this.getKey,Le=Y({$slots:R,tag:W,realList:we,getKey:ge});this.componentStructure=Le;var St=Ve({$attrs:N,componentData:re});return Le.render($.h,St)}catch(Re){return this.error=!0,Object($.h)("pre",{style:{color:"red"}},Re.stack)}},created:function(){this.list!==null&&this.modelValue!==null&&F.a.error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var R=this;if(!this.error){var N=this.$attrs,W=this.$el,re=this.componentStructure;re.updated();var we=D({$attrs:N,callBackBuilder:{manageAndEmit:function(St){return se.call(R,St)},emit:function(St){return H.bind(R,St)},manage:function(St){return ue.call(R,St)}}}),ge=W.nodeType===1?W:W.parentElement;this._sortable=new A.a(ge,we),this.targetDomElement=ge,ge.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){this._sortable!==void 0&&this._sortable.destroy()},computed:{realList:function(){var R=this.list;return R||this.modelValue},getKey:function(){var R=this.itemKey;return typeof R=="function"?R:function(N){return N[R]}}},watch:{$attrs:{handler:function(R){var N=this._sortable;N&&J(R).forEach(function(W){var re=g(W,2),we=re[0],ge=re[1];N.option(we,ge)})},deep:!0}},methods:{getUnderlyingVm:function(R){return this.componentStructure.getUnderlyingVm(R)||null},getUnderlyingPotencialDraggableComponent:function(R){return R.__draggable_component__},emitChanges:function(R){var N=this;Object($.nextTick)(function(){return N.$emit("change",R)})},alterList:function(R){if(this.list){R(this.list);return}var N=S(this.modelValue);R(N),this.$emit("update:modelValue",N)},spliceList:function(){var R=arguments,N=function(re){return re.splice.apply(re,S(R))};this.alterList(N)},updatePosition:function(R,N){var W=function(we){return we.splice(N,0,we.splice(R,1)[0])};this.alterList(W)},getRelatedContextFromMoveEvent:function(R){var N=R.to,W=R.related,re=this.getUnderlyingPotencialDraggableComponent(N);if(!re)return{component:re};var we=re.realList,ge={list:we,component:re};if(N!==W&&we){var Le=re.getUnderlyingVm(W)||{};return h(h({},Le),ge)}return ge},getVmIndexFromDomIndex:function(R){return this.componentStructure.getVmIndexFromDomIndex(R,this.targetDomElement)},onDragStart:function(R){this.context=this.getUnderlyingVm(R.item),R.item._underlying_vm_=this.clone(this.context.element),de=R.item},onDragAdd:function(R){var N=R.item._underlying_vm_;if(N!==void 0){I(R.item);var W=this.getVmIndexFromDomIndex(R.newIndex);this.spliceList(W,0,N);var re={element:N,newIndex:W};this.emitChanges({added:re})}},onDragRemove:function(R){if(k(this.$el,R.item,R.oldIndex),R.pullMode==="clone"){I(R.clone);return}var N=this.context,W=N.index,re=N.element;this.spliceList(W,1);var we={element:re,oldIndex:W};this.emitChanges({removed:we})},onDragUpdate:function(R){I(R.item),k(R.from,R.item,R.oldIndex);var N=this.context.index,W=this.getVmIndexFromDomIndex(R.newIndex);this.updatePosition(N,W);var re={element:this.context.element,oldIndex:N,newIndex:W};this.emitChanges({moved:re})},computeFutureIndex:function(R,N){if(!R.element)return 0;var W=S(N.to.children).filter(function(Le){return Le.style.display!=="none"}),re=W.indexOf(N.related),we=R.component.getVmIndexFromDomIndex(re),ge=W.indexOf(de)!==-1;return ge||!N.willInsertAfter?we:we+1},onDragMove:function(R,N){var W=this.move,re=this.realList;if(!W||!re)return!0;var we=this.getRelatedContextFromMoveEvent(R),ge=this.computeFutureIndex(we,R),Le=h(h({},this.context),{},{futureIndex:ge}),St=h(h({},R),{},{relatedContext:we,draggedContext:Le});return W(St,N)},onDragEnd:function(){de=null}}}),qe=it;s.default=qe},fb6a:function(i,s,o){var a=o("23e7"),l=o("861d"),c=o("e8b5"),u=o("23cb"),f=o("50c4"),h=o("fc6a"),d=o("8418"),p=o("b622"),m=o("1dde"),y=o("ae40"),v=m("slice"),g=y("slice",{ACCESSORS:!0,0:0,1:2}),E=p("species"),b=[].slice,T=Math.max;a({target:"Array",proto:!0,forced:!v||!g},{slice:function(O,A){var I=h(this),k=f(I.length),F=u(O,k),U=u(A===void 0?k:A,k),M,P,ne;if(c(I)&&(M=I.constructor,typeof M=="function"&&(M===Array||c(M.prototype))?M=void 0:l(M)&&(M=M[E],M===null&&(M=void 0)),M===Array||M===void 0))return b.call(I,F,U);for(P=new(M===void 0?Array:M)(T(U-F,0)),ne=0;F<U;F++,ne++)F in I&&d(P,ne,I[F]);return P.length=ne,P}})},fc6a:function(i,s,o){var a=o("44ad"),l=o("1d80");i.exports=function(c){return a(l(c))}},fdbc:function(i,s){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(i,s,o){var a=o("4930");i.exports=a&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}}).default})})(kA);var r8=kA.exports;const i8=y9(r8);const s8=t=>(Gr("data-v-18587cd8"),t=t(),Yr(),t),o8={class:"day-list"},a8={class:"index"},l8={key:0,class:"workout-list"},c8={class:"exercise-list"},u8={class:"exercise-item"},f8=["onInput"],h8={class:"right"},d8={class:"total-volume"},p8=s8(()=>V("hr",null,null,-1)),m8={class:"exercise-item draggable-exercise-item"},g8=["onInput"],v8={class:"right"},y8=["onUpdate:modelValue"],b8={class:"exercise-item add-exercise-btn"},E8=["onClick"],_8=["onClick"],w8={__name:"DayList",props:{planId:{type:String,default:""},totalWorkoutVolume:{type:Function,default:()=>{}},clearSelectedPlan:{type:Function,default:()=>{}}},setup(t){const e=t,n=Ge({});function r(){let u=n.value.days;u?u.push({}):u=[{}],n.value.days=u}function i(u){n.value.days=n.value.days.filter(f=>f!==u),n.value.days.length===0&&delete n.value.days}function s(u){let f=n.value.days[u];const h={title:"New Workout"};f.workouts?f.workouts.push(h):f.workouts=[h],n.value.days[u]=f}function o(u,f){let h=n.value.days[u];h.workouts=h.workouts.filter(d=>d!==f),h.workouts.length===0&&delete h.workouts,n.value.days[u]=h}function a(u,f){let h=n.value.days[u].workouts[f].exercises;const d={title:"New Exercise",volume:1};h?h.push(d):h=[d],n.value.days[u].workouts[f].exercises=h}function l(u,f,h){n.value.days[u].workouts[f].exercises=n.value.days[u].workouts[f].exercises.filter(d=>d!==h)}function c(){wA(Vs(e.planId),n.value),e.clearSelectedPlan()}return TA(Vs(e.planId),u=>{n.value=u.data()}),(u,f)=>{const h=Jn("font-awesome-icon");return Ee(),He(ht,null,[V("ul",o8,[(Ee(!0),He(ht,null,Fl(n.value.days,(d,p)=>(Ee(),He("li",{key:d,class:"day-item"},[V("p",a8,"#"+In(p+1),1),d.workouts?(Ee(),He("ul",l8,[(Ee(!0),He(ht,null,Fl(d.workouts,(m,y)=>(Ee(),He("li",{key:m,class:"workout-item"},[V("ul",c8,[V("li",u8,[V("p",{class:"contenteditable workout-title",role:"textbox",spellcheck:"false",onInput:v=>{m.title=v.target.innerText},contenteditable:""},In(m.title),41,f8),V("div",h8,[V("span",d8,In(t.totalWorkoutVolume(m)),1),fe(Is,{"on-click":()=>o(p,m),icon:"fa-xmark","background-color-var":"color30"},null,8,["on-click"])])]),p8,fe(ye(i8),{modelValue:m.exercises,"onUpdate:modelValue":v=>m.exercises=v,group:"exercises",tag:"transition-group","drag-class":"drag","ghost-class":"ghost"},{item:fi(({element:v})=>[V("li",null,[V("div",m8,[fe(h,{class:"grip",icon:"fa-solid fa-grip-lines-vertical"}),V("p",{class:"contenteditable exercise-title",role:"textbox",spellcheck:"false",onInput:g=>{v.title=g.target.innerText},contenteditable:""},In(v.title),41,g8),V("div",v8,[Nr(V("input",{"onUpdate:modelValue":g=>v.volume=g,class:"volume",type:"number",min:"1",max:"99"},null,8,y8),[[Ur,v.volume]]),fe(Is,{"on-click":()=>l(p,y,v),icon:"fa-minus","background-color-var":"color60"},null,8,["on-click"])])])])]),footer:fi(()=>[V("div",b8,[fe(Is,{"on-click":()=>a(p,y),icon:"fa-plus","background-color-var":"color30"},null,8,["on-click"])])]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))])):zn("",!0),fe(Is,{"on-click":()=>s(p),icon:"fa-plus"},null,8,["on-click"]),fe(Is,{"on-click":()=>i(d),class:"delete-day-btn",icon:"fa-trash-can"},null,8,["on-click"])]))),128)),V("a",{onClick:Bt(r,["prevent"]),class:"add-day-button"},[fe(h,{icon:"fa-solid fa-plus",size:"xl"})],8,E8)]),V("a",{onClick:Bt(c,["prevent"]),class:"floating-btn"},[fe(h,{icon:"fa-solid fa-save",size:"lg"})],8,_8)],64)}}},T8=xn(w8,[["__scopeId","data-v-18587cd8"]]);const S8={class:"content"},I8={key:0,class:"plan-list"},C8=["onClick"],A8={class:"new-plan-button"},x8={__name:"Dashboard",setup(t){const e=Ge([]),n=Ge(null),r=Ge(null);function i(){K5(eh,{title:"My plan",description:"My description"}).then(c=>{qm(Vs(c.id),{id:c.id})})}function s(c){n.value=c,z5(Vs(c)).then(u=>{r.value=u.data().title})}function o(){n.value=null,r.value=null}function a(c){let u=0;return c.days&&c.days.map(f=>{f.workouts&&f.workouts.map(h=>{u+=l(h)})}),u}function l(c){let u=0;return c.exercises&&c.exercises.map(f=>{u+=f.volume}),u}return TA(eh,c=>{let u=[];c.forEach(f=>{u.push(f.data())}),e.value=u}),(c,u)=>{const f=Jn("font-awesome-icon");return Ee(),He(ht,null,[fe(OA,{title:r.value!=null?r.value:"Dashboard"},null,8,["title"]),V("div",S8,[n.value==null?(Ee(),He("ul",I8,[(Ee(!0),He(ht,null,Fl(e.value,h=>(Ee(),Vn(g9,{key:h.id,plan:h,"select-plan":s,"total-volume":a(h),class:"plan-item"},null,8,["plan","total-volume"]))),128)),V("a",{onClick:Bt(i,["prevent"]),class:"plan-item"},[V("span",A8,[fe(f,{icon:"fa-solid fa-plus",size:"xl"})])],8,C8)])):(Ee(),Vn(T8,{key:1,"plan-id":n.value,"total-workout-volume":l,"clear-selected-plan":o},null,8,["plan-id"]))])],64)}}},R8=xn(x8,[["__scopeId","data-v-6155a737"]]),O8={__name:"Profile",setup(t){return(e,n)=>(Ee(),Vn(OA,{title:"Profile"}))}};const P8={id:"app"},k8={__name:"App",setup(t){const e=[{title:"Dashboard",icon:"fa-cube"},{title:"Profile",icon:"fa-user"}],n=Ge(0);function r(i){n.value=i}return(i,s)=>(Ee(),He(ht,null,[fe(i9,{pages:e,"selected-page-index":n.value,"select-page-index":r},null,8,["selected-page-index"]),V("section",P8,[n.value===0?(Ee(),Vn(R8,{key:0})):n.value===1?(Ee(),Vn(O8,{key:1})):zn("",!0)])],64))}},N8=xn(k8,[["__scopeId","data-v-acba0c60"]]),D8={__name:"Home",setup(t){return(e,n)=>ye(Kn)().currentUser==null?(Ee(),Vn(FU,{key:0})):(Ee(),Vn(N8,{key:1}))}};function __(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Di(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?__(Object(n),!0).forEach(function(r){M8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):__(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function M8(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=ye(t[r])),n),{})}function oh(t){return typeof t=="function"}function L8(t){return Hi(t)||Zi(t)}function zA(t,e,n){let r=t;const i=e.split(".");for(let s=0;s<i.length;s++){if(!r[i[s]])return n;r=r[i[s]]}return r}function Sp(t,e,n){return De(()=>t.some(r=>zA(e,r,{[n]:!1})[n]))}function T_(t,e,n){return De(()=>t.reduce((r,i)=>{const s=zA(e,i,{[n]:!1})[n]||[];return r.concat(s)},[]))}function WA(t,e,n,r){return t.call(r,ye(e),ye(n),r)}function KA(t){return t.$valid!==void 0?!t.$valid:!t}function F8(t,e,n,r,i,s,o){let{$lazy:a,$rewardEarly:l}=i,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const d=Ge(!!r.value),p=Ge(0);n.value=!1;const m=$n([e,r].concat(c,h),()=>{if(a&&!r.value||l&&!f.value&&!n.value)return;let y;try{y=WA(t,e,u,o)}catch(v){y=Promise.reject(v)}p.value++,n.value=!!p.value,d.value=!1,Promise.resolve(y).then(v=>{p.value--,n.value=!!p.value,s.value=v,d.value=KA(v)}).catch(v=>{p.value--,n.value=!!p.value,s.value=v,d.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:d,$unwatch:m}}function $8(t,e,n,r,i,s,o,a){let{$lazy:l,$rewardEarly:c}=r;const u=()=>({}),f=De(()=>{if(l&&!n.value||c&&!a.value)return!1;let h=!0;try{const d=WA(t,e,o,s);i.value=d,h=KA(d)}catch(d){i.value=d}return h});return{$unwatch:u,$invalid:f}}function U8(t,e,n,r,i,s,o,a,l,c,u){const f=Ge(!1),h=t.$params||{},d=Ge(null);let p,m;t.$async?{$invalid:p,$unwatch:m}=F8(t.$validator,e,f,n,r,d,i,t.$watchTargets,l,c,u):{$invalid:p,$unwatch:m}=$8(t.$validator,e,n,r,d,i,l,c);const y=t.$message;return{$message:oh(y)?De(()=>y(w_({$pending:f,$invalid:p,$params:w_(h),$model:e,$response:d,$validator:s,$propertyPath:a,$property:o}))):y||"",$params:h,$pending:f,$invalid:p,$response:d,$unwatch:m}}function V8(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=ye(t),n=Object.keys(e),r={},i={},s={};let o=null;return n.forEach(a=>{const l=e[a];switch(!0){case oh(l.$validator):r[a]=l;break;case oh(l):r[a]={$validator:l};break;case a==="$validationGroups":o=l;break;case a.startsWith("$"):s[a]=l;break;default:i[a]=l}}),{rules:r,nestedValidators:i,config:s,validationGroups:o}}const j8="__root";function B8(t,e,n,r,i,s,o,a,l){const c=Object.keys(t),u=r.get(i,t),f=Ge(!1),h=Ge(!1),d=Ge(0);if(u){if(!u.$partial)return u;u.$unwatch(),f.value=u.$dirty.value}const p={$dirty:f,$path:i,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return c.length?(c.forEach(m=>{p[m]=U8(t[m],e,p.$dirty,s,o,m,n,i,l,h,d)}),p.$externalResults=De(()=>a.value?[].concat(a.value).map((m,y)=>({$propertyPath:i,$property:n,$validator:"$externalResults",$uid:`${i}-externalResult-${y}`,$message:m,$params:{},$response:null,$pending:!1})):[]),p.$invalid=De(()=>{const m=c.some(y=>ye(p[y].$invalid));return h.value=m,!!p.$externalResults.value.length||m}),p.$pending=De(()=>c.some(m=>ye(p[m].$pending))),p.$error=De(()=>p.$dirty.value?p.$pending.value||p.$invalid.value:!1),p.$silentErrors=De(()=>c.filter(m=>ye(p[m].$invalid)).map(m=>{const y=p[m];return Kr({$propertyPath:i,$property:n,$validator:m,$uid:`${i}-${m}`,$message:y.$message,$params:y.$params,$response:y.$response,$pending:y.$pending})}).concat(p.$externalResults.value)),p.$errors=De(()=>p.$dirty.value?p.$silentErrors.value:[]),p.$unwatch=()=>c.forEach(m=>{p[m].$unwatch()}),p.$commit=()=>{h.value=!0,d.value=Date.now()},r.set(i,t,p),p):(u&&r.set(i,t,p),p)}function H8(t,e,n,r,i,s,o){const a=Object.keys(t);return a.length?a.reduce((l,c)=>(l[c]=ig({validations:t[c],state:e,key:c,parentKey:n,resultsCache:r,globalConfig:i,instance:s,externalResults:o}),l),{}):{}}function z8(t,e,n){const r=De(()=>[e,n].filter(p=>p).reduce((p,m)=>p.concat(Object.values(ye(m))),[])),i=De({get(){return t.$dirty.value||(r.value.length?r.value.every(p=>p.$dirty):!1)},set(p){t.$dirty.value=p}}),s=De(()=>{const p=ye(t.$silentErrors)||[],m=r.value.filter(y=>(ye(y).$silentErrors||[]).length).reduce((y,v)=>y.concat(...v.$silentErrors),[]);return p.concat(m)}),o=De(()=>{const p=ye(t.$errors)||[],m=r.value.filter(y=>(ye(y).$errors||[]).length).reduce((y,v)=>y.concat(...v.$errors),[]);return p.concat(m)}),a=De(()=>r.value.some(p=>p.$invalid)||ye(t.$invalid)||!1),l=De(()=>r.value.some(p=>ye(p.$pending))||ye(t.$pending)||!1),c=De(()=>r.value.some(p=>p.$dirty)||r.value.some(p=>p.$anyDirty)||i.value),u=De(()=>i.value?l.value||a.value:!1),f=()=>{t.$touch(),r.value.forEach(p=>{p.$touch()})},h=()=>{t.$commit(),r.value.forEach(p=>{p.$commit()})},d=()=>{t.$reset(),r.value.forEach(p=>{p.$reset()})};return r.value.length&&r.value.every(p=>p.$dirty)&&f(),{$dirty:i,$errors:o,$invalid:a,$anyDirty:c,$error:u,$pending:l,$touch:f,$reset:d,$silentErrors:s,$commit:h}}function ig(t){let{validations:e,state:n,key:r,parentKey:i,childResults:s,resultsCache:o,globalConfig:a={},instance:l,externalResults:c}=t;const u=i?`${i}.${r}`:r,{rules:f,nestedValidators:h,config:d,validationGroups:p}=V8(e),m=Di(Di({},a),d),y=r?De(()=>{const Ce=ye(n);return Ce?ye(Ce[r]):void 0}):n,v=Di({},ye(c)||{}),g=De(()=>{const Ce=ye(c);return r?Ce?ye(Ce[r]):void 0:Ce}),E=B8(f,y,r,o,u,m,l,g,n),b=H8(h,y,u,o,m,l,g),T={};p&&Object.entries(p).forEach(Ce=>{let[Ue,xe]=Ce;T[Ue]={$invalid:Sp(xe,b,"$invalid"),$error:Sp(xe,b,"$error"),$pending:Sp(xe,b,"$pending"),$errors:T_(xe,b,"$errors"),$silentErrors:T_(xe,b,"$silentErrors")}});const{$dirty:S,$errors:O,$invalid:A,$anyDirty:I,$error:k,$pending:F,$touch:U,$reset:M,$silentErrors:P,$commit:ne}=z8(E,b,s),j=r?De({get:()=>ye(y),set:Ce=>{S.value=!0;const Ue=ye(n),xe=ye(c);xe&&(xe[r]=v[r]),Lt(Ue[r])?Ue[r].value=Ce:Ue[r]=Ce}}):null;r&&m.$autoDirty&&$n(y,()=>{S.value||U();const Ce=ye(c);Ce&&(Ce[r]=v[r])},{flush:"sync"});async function Q(){return U(),m.$rewardEarly&&(ne(),await Yo()),await Yo(),new Promise(Ce=>{if(!F.value)return Ce(!A.value);const Ue=$n(F,()=>{Ce(!A.value),Ue()})})}function oe(Ce){return(s.value||{})[Ce]}function ze(){Lt(c)?c.value=v:Object.keys(v).length===0?Object.keys(c).forEach(Ce=>{delete c[Ce]}):Object.assign(c,v)}return Kr(Di(Di(Di({},E),{},{$model:j,$dirty:S,$error:k,$errors:O,$invalid:A,$anyDirty:I,$pending:F,$touch:U,$reset:M,$path:u||j8,$silentErrors:P,$validate:Q,$commit:ne},s&&{$getResultsForChild:oe,$clearExternalResults:ze,$validationGroups:T}),b))}class W8{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const i=Object.keys(r),s=Object.keys(n);return s.length!==i.length||!s.every(a=>i.includes(a))?!1:s.every(a=>n[a].$params?Object.keys(n[a].$params).every(l=>ye(r[a].$params[l])===ye(n[a].$params[l])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:i,result:s}=r,o=this.checkRulesValidity(e,n,i),a=s.$unwatch?s.$unwatch:()=>({});return o?s:{$dirty:s.$dirty,$partial:!0,$unwatch:a}}}const rf={COLLECT_ALL:!0,COLLECT_NONE:!1},S_=Symbol("vuelidate#injectChildResults"),I_=Symbol("vuelidate#removeChildResults");function K8(t){let{$scope:e,instance:n}=t;const r={},i=Ge([]),s=De(()=>i.value.reduce((u,f)=>(u[f]=ye(r[f]),u),{}));function o(u,f){let{$registerAs:h,$scope:d,$stopPropagation:p}=f;p||e===rf.COLLECT_NONE||d===rf.COLLECT_NONE||e!==rf.COLLECT_ALL&&e!==d||(r[h]=u,i.value.push(h))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(u){i.value=i.value.filter(f=>f!==u),delete r[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const l=Xn(S_,[]);Ms(S_,n.__vuelidateInjectInstances);const c=Xn(I_,[]);return Ms(I_,n.__vuelidateRemoveInstances),{childResults:s,sendValidationResultsToParent:l,removeValidationResultsFromParent:c}}function GA(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?GA(e[n]):De(()=>e[n])}})}let C_=0;function G8(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:i,$scope:s=rf.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:l}=r;const c=l||((n=Cr())===null||n===void 0?void 0:n.proxy),u=c?c.$options:{};i||(C_+=1,i=`_vuelidate_${C_}`);const f=Ge({}),h=new W8,{childResults:d,sendValidationResultsToParent:p,removeValidationResultsFromParent:m}=c?K8({$scope:s,instance:c}):{childResults:Ge({})};if(!t&&u.validations){const y=u.validations;e=Ge({}),Lg(()=>{e.value=c,$n(()=>oh(y)?y.call(e.value,new GA(e.value)):y,v=>{f.value=ig({validations:v,state:e,childResults:d,resultsCache:h,globalConfig:r,instance:c,externalResults:a||c.vuelidateExternalResults})},{immediate:!0})}),r=u.validationsConfig||r}else{const y=Lt(t)||L8(t)?t:Kr(t||{});$n(y,v=>{f.value=ig({validations:v,state:e,childResults:d,resultsCache:h,globalConfig:r,instance:c??{},externalResults:a})},{immediate:!0})}return c&&(p.forEach(y=>y(f,{$registerAs:i,$scope:s,$stopPropagation:o})),yc(()=>m.forEach(y=>y(i)))),De(()=>Di(Di({},ye(f.value)),d.value))}const My=t=>{if(t=ye(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},Y8=t=>(t=ye(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function po(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=>(r=ye(r),!My(r)||e.every(i=>(i.lastIndex=0,i.test(r))))}po(/^[a-zA-Z]*$/);po(/^[a-zA-Z0-9]*$/);po(/^\d*(\.\d+)?$/);const X8=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Q8=po(X8),q8={$validator:Q8,$message:"Value is not a valid email address",$params:{type:"email"}};function J8(t){return e=>!My(e)||Y8(e)>=ye(t)}function Z8(t){return{$validator:J8(t),$message:e=>{let{$params:n}=e;return`This field should be at least ${n.min} characters long`},$params:{min:t,type:"minLength"}}}function e7(t){return typeof t=="string"&&(t=t.trim()),My(t)}var Ip={$validator:e7,$message:"Value is required",$params:{type:"required"}};function t7(t){return e=>ye(e)===ye(t)}function n7(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:t7(t),$message:n=>`The value must be equal to the ${e} value`,$params:{equalTo:t,otherName:e,type:"sameAs"}}}const r7=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;po(r7);po(/(^[0-9]*$)|(^-[0-9]+$)/);po(/^[-]?\d*(\.\d+)?$/);const Xc=t=>(Gr("data-v-2232b8dc"),t=t(),Yr(),t),i7={class:"container"},s7=Xc(()=>V("div",null,[V("h3",{class:"subtitle"},"Try for free!"),V("h1",{class:"title"},"Create an account")],-1)),o7=["onSubmit"],a7={class:"inputfield"},l7=Xc(()=>V("label",{for:"email"},"Email",-1)),c7={key:0,class:"validation"},u7={key:0},f7={class:"inputfield"},h7=Xc(()=>V("label",{for:"password"},"Password",-1)),d7=["type"],p7={class:"input-after"},m7=["onClick"],g7={key:0,class:"validation"},v7={key:0},y7={class:"inputfield"},b7=Xc(()=>V("label",{for:"confirmPassword"},"Repeat Password",-1)),E7=["type"],_7={class:"input-after"},w7=["onClick"],T7={key:0,class:"validation"},S7={key:0},I7={key:0,class:"error"},C7={class:"btn-wrapper"},A7=Xc(()=>V("button",{type:"submit"},"Sign Up",-1)),x7={__name:"SignUp",props:{onAuthToggleClick:{type:Function,default:()=>{}}},setup(t){const e=Ge(!1),n=Ge(!1),r=Ge(""),i=Kr({email:"",password:"",confirmPassword:""}),s=De(()=>({email:{required:Ip,email:q8},password:{required:Ip,minLength:Z8(6)},confirmPassword:{required:Ip,sameAsPassword:n7(i.password)}})),o=G8(s,i);async function a(){const c=await o.value.$validate();e.value=!0,c&&(Kn().currentUser&&av(Kn()),gD(Kn(),i.email,i.password).then(()=>{wA(Jm,{id:Kn().currentUser.uid,email:Kn().currentUser.email}),Oa.push("/")}).catch(u=>{switch(u.code){case"auth/email-already-in-use":r.value="This email is already in use";break;default:r.value="Something went wrong";break}}))}function l(){n.value=!n.value}return(c,u)=>{const f=Jn("font-awesome-icon");return Ee(),He("div",i7,[s7,V("form",{id:"form",onSubmit:Bt(a,["prevent"])},[V("div",a7,[l7,Nr(V("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":u[0]||(u[0]=h=>i.email=h),required:""},null,512),[[Ur,i.email]]),e.value?(Ee(),He("div",c7,[ye(o).email.email.$invalid?(Ee(),He("span",u7,"Not a valid email address")):zn("",!0)])):zn("",!0)]),V("div",f7,[h7,Nr(V("input",{id:"password",name:"password",type:n.value?"text":"password","onUpdate:modelValue":u[1]||(u[1]=h=>i.password=h),required:""},null,8,d7),[[Vl,i.password]]),V("div",p7,[V("a",{style:Qi({transform:e.value&&ye(o).password.minLength.$invalid?"translate(0, -50%)":"translate(0, 0)"}),onClick:Bt(l,["prevent"])},[fe(f,{icon:n.value?"fa-solid fa-eye":"fa-solid fa-eye-slash"},null,8,["icon"])],12,m7)]),e.value?(Ee(),He("div",g7,[ye(o).password.minLength.$invalid?(Ee(),He("span",v7,"At least 6 characters")):zn("",!0)])):zn("",!0)]),V("div",y7,[b7,Nr(V("input",{id:"confirmPassword",name:"confirmPassword",type:n.value?"text":"password","onUpdate:modelValue":u[2]||(u[2]=h=>i.confirmPassword=h),required:""},null,8,E7),[[Vl,i.confirmPassword]]),V("div",_7,[V("a",{style:Qi({transform:e.value&&ye(o).confirmPassword.sameAsPassword.$invalid?"translate(0, -50%)":"translate(0, 0)"}),onClick:Bt(l,["prevent"])},[fe(f,{icon:n.value?"fa-solid fa-eye":"fa-solid fa-eye-slash"},null,8,["icon"])],12,w7)]),e.value?(Ee(),He("div",T7,[ye(o).confirmPassword.sameAsPassword.$invalid?(Ee(),He("span",S7,"Not equal to password")):zn("",!0)])):zn("",!0)]),r.value?(Ee(),He("p",I7,In(r.value),1)):zn("",!0),V("div",C7,[A7,V("p",null,[_r("Already have an account? "),V("a",{onClick:u[3]||(u[3]=Bt((...h)=>t.onAuthToggleClick&&t.onAuthToggleClick(...h),["prevent"]))},"Log In")])])],40,o7)])}}},R7=xn(x7,[["__scopeId","data-v-2232b8dc"]]);const yd=t=>(Gr("data-v-2c978d86"),t=t(),Yr(),t),O7={class:"container"},P7=yd(()=>V("div",null,[V("h3",{class:"subtitle"},"Welcome back!"),V("h1",{class:"title"},"Sign in to your account")],-1)),k7=["onSubmit"],N7={class:"inputfield"},D7=yd(()=>V("label",{for:"email"},"Email",-1)),M7={class:"inputfield"},L7=yd(()=>V("label",{for:"password"},"Password",-1)),F7=["type"],$7={class:"input-after"},U7=["onClick"],V7={key:0,class:"error"},j7={class:"btn-wrapper"},B7=yd(()=>V("button",{type:"submit"},"Sign In",-1)),H7={__name:"SignIn",props:{onAuthToggleClick:{type:Function,default:()=>{}},onForgotPasswordToggleClick:{type:Function,default:()=>{}}},setup(t){const e=Ge(!1),n=Ge(""),r=Ge(""),i=Ge("");function s(){Kn().currentUser&&av(Kn()),vD(Kn(),n.value,r.value).then(()=>{Oa.push("/")}).catch(a=>{switch(a.code){case"auth/invalid-email":i.value="Invalid email";break;case"auth/user-not-found":i.value="No account with that email was found";break;case"auth/wrong-password":i.value="Incorrect password";break;default:i.value="Email or password was incorrect";break}})}function o(){e.value=!e.value}return(a,l)=>{const c=Jn("font-awesome-icon");return Ee(),He("div",O7,[P7,V("form",{id:"form",onSubmit:Bt(s,["prevent"])},[V("div",N7,[D7,Nr(V("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),required:""},null,512),[[Ur,n.value]])]),V("div",M7,[L7,Nr(V("input",{id:"password",name:"password",type:e.value?"text":"password","onUpdate:modelValue":l[1]||(l[1]=u=>r.value=u),required:""},null,8,F7),[[Vl,r.value]]),V("div",$7,[V("a",{onClick:Bt(o,["prevent"])},[fe(c,{icon:e.value?"fa-solid fa-eye":"fa-solid fa-eye-slash"},null,8,["icon"])],8,U7)])]),V("a",{class:"toggle",onClick:l[2]||(l[2]=Bt((...u)=>t.onForgotPasswordToggleClick&&t.onForgotPasswordToggleClick(...u),["prevent"]))},"Forgot Password"),i.value?(Ee(),He("p",V7,In(i.value),1)):zn("",!0),V("div",j7,[B7,V("p",null,[_r("Not a member? "),V("a",{onClick:l[3]||(l[3]=Bt((...u)=>t.onAuthToggleClick&&t.onAuthToggleClick(...u),["prevent"]))},"Create an account")])])],40,k7)])}}},z7=xn(H7,[["__scopeId","data-v-2c978d86"]]);const Ly=t=>(Gr("data-v-a7bbe367"),t=t(),Yr(),t),W7={class:"container"},K7=Ly(()=>V("div",null,[V("h3",{class:"subtitle"},"Reset password!"),V("h1",{class:"title"},"Password recovery")],-1)),G7=["onSubmit"],Y7={class:"inputfield"},X7=Ly(()=>V("label",{for:"email"},"Email",-1)),Q7={key:0,class:"error"},q7={key:1,class:"success"},J7={class:"btn-wrapper"},Z7=Ly(()=>V("button",{type:"submit"},"Reset Password",-1)),eV={__name:"ForgotPassword",props:{onForgotPasswordToggleClick:{type:Function,default:()=>{}}},setup(t){const e=Ge(""),n=Ge(""),r=Ge("");function i(){mD(Kn(),e.value).then(()=>{n.value="Password recovery email was sent"}).catch(s=>{switch(s.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;default:r.value="Something went wrong";break}})}return(s,o)=>(Ee(),He("div",W7,[K7,V("form",{id:"form",onSubmit:Bt(i,["prevent"])},[V("div",Y7,[X7,Nr(V("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),required:""},null,512),[[Ur,e.value]])]),r.value?(Ee(),He("p",Q7,In(r.value),1)):zn("",!0),n.value?(Ee(),He("p",q7,In(n.value),1)):zn("",!0),V("div",J7,[Z7,V("p",null,[_r("Password recovered? "),V("a",{onClick:o[1]||(o[1]=Bt((...a)=>t.onForgotPasswordToggleClick&&t.onForgotPasswordToggleClick(...a),["prevent"]))},"Sign In")])])],40,G7)]))}},tV=xn(eV,[["__scopeId","data-v-a7bbe367"]]),nV={id:"auth"},rV={key:0},iV={key:1},sV={__name:"Auth",setup(t){const e=Ge(!1),n=Ge(!1);function r(){e.value=!e.value}function i(){n.value=!n.value}return(s,o)=>(Ee(),He(ht,null,[fe(AA),V("section",nV,[n.value?(Ee(),He("div",rV,[fe(tV,{onForgotPasswordToggleClick:i})])):(Ee(),He("div",iV,[e.value?(Ee(),Vn(R7,{key:0,onAuthToggleClick:r})):(Ee(),Vn(z7,{key:1,onAuthToggleClick:r,onForgotPasswordToggleClick:i}))]))])],64))}};const oV={},aV=t=>(Gr("data-v-4b9b2079"),t=t(),Yr(),t),lV={id:"error"},cV=aV(()=>V("div",null,[V("h1",null,[_r("Error "),V("span",null,"404")]),V("p",null,"Page does not exist.")],-1)),uV=[cV];function fV(t,e){return Ee(),He("section",lV,uV)}const hV=xn(oV,[["render",fV],["__scopeId","data-v-4b9b2079"]]),Oa=GP({history:uP("/training-lab/"),routes:[{path:"/",name:"home",component:D8},{path:"/auth",name:"auth",component:sV,meta:{requiresNoUser:!0}},{path:"/:patchMatch(.*)*",component:hV}]});Oa.beforeEach(async(t,e,n)=>{const r=await oL();t.matched.some(s=>s.meta.requiresNoUser)&&r?n("/"):n()});function A_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A_(Object(n),!0).forEach(function(r){Kt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ah(t){"@babel/helpers - typeof";return ah=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ah(t)}function dV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pV(t,e,n){return e&&x_(t.prototype,e),n&&x_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fy(t,e){return gV(t)||yV(t,e)||YA(t,e)||EV()}function Qc(t){return mV(t)||vV(t)||YA(t)||bV()}function mV(t){if(Array.isArray(t))return sg(t)}function gV(t){if(Array.isArray(t))return t}function vV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function YA(t,e){if(t){if(typeof t=="string")return sg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sg(t,e)}}function sg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function bV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R_=function(){},$y={},XA={},QA=null,qA={mark:R_,measure:R_};try{typeof window<"u"&&($y=window),typeof document<"u"&&(XA=document),typeof MutationObserver<"u"&&(QA=MutationObserver),typeof performance<"u"&&(qA=performance)}catch{}var _V=$y.navigator||{},O_=_V.userAgent,P_=O_===void 0?"":O_,ls=$y,_t=XA,k_=QA,Nu=qA;ls.document;var Ti=!!_t.documentElement&&!!_t.head&&typeof _t.addEventListener=="function"&&typeof _t.createElement=="function",JA=~P_.indexOf("MSIE")||~P_.indexOf("Trident/"),Du,Mu,Lu,Fu,$u,vi="___FONT_AWESOME___",og=16,ZA="fa",ex="svg-inline--fa",to="data-fa-i2svg",ag="data-fa-pseudo-element",wV="data-fa-pseudo-element-pending",Uy="data-prefix",Vy="data-icon",N_="fontawesome-i2svg",TV="async",SV=["HTML","HEAD","STYLE","SCRIPT"],tx=function(){try{return!0}catch{return!1}}(),Et="classic",Mt="sharp",jy=[Et,Mt];function qc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Et]}})}var ac=qc((Du={},Kt(Du,Et,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Kt(Du,Mt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Du)),lc=qc((Mu={},Kt(Mu,Et,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Kt(Mu,Mt,{solid:"fass",regular:"fasr",light:"fasl"}),Mu)),cc=qc((Lu={},Kt(Lu,Et,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Kt(Lu,Mt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Lu)),IV=qc((Fu={},Kt(Fu,Et,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Kt(Fu,Mt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Fu)),CV=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,nx="fa-layers-text",AV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xV=qc(($u={},Kt($u,Et,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Kt($u,Mt,{900:"fass",400:"fasr",300:"fasl"}),$u)),rx=[1,2,3,4,5,6,7,8,9,10],RV=rx.concat([11,12,13,14,15,16,17,18,19,20]),OV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ps={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uc=new Set;Object.keys(lc[Et]).map(uc.add.bind(uc));Object.keys(lc[Mt]).map(uc.add.bind(uc));var PV=[].concat(jy,Qc(uc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ps.GROUP,Ps.SWAP_OPACITY,Ps.PRIMARY,Ps.SECONDARY]).concat(rx.map(function(t){return"".concat(t,"x")})).concat(RV.map(function(t){return"w-".concat(t)})),xl=ls.FontAwesomeConfig||{};function kV(t){var e=_t.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function NV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_t&&typeof _t.querySelector=="function"){var DV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DV.forEach(function(t){var e=Fy(t,2),n=e[0],r=e[1],i=NV(kV(n));i!=null&&(xl[r]=i)})}var ix={styleDefault:"solid",familyDefault:"classic",cssPrefix:ZA,replacementClass:ex,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xl.familyPrefix&&(xl.cssPrefix=xl.familyPrefix);var da=ie(ie({},ix),xl);da.autoReplaceSvg||(da.observeMutations=!1);var he={};Object.keys(ix).forEach(function(t){Object.defineProperty(he,t,{enumerable:!0,set:function(n){da[t]=n,Rl.forEach(function(r){return r(he)})},get:function(){return da[t]}})});Object.defineProperty(he,"familyPrefix",{enumerable:!0,set:function(e){da.cssPrefix=e,Rl.forEach(function(n){return n(he)})},get:function(){return da.cssPrefix}});ls.FontAwesomeConfig=he;var Rl=[];function MV(t){return Rl.push(t),function(){Rl.splice(Rl.indexOf(t),1)}}var Ri=og,kr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LV(t){if(!(!t||!Ti)){var e=_t.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_t.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _t.head.insertBefore(e,r),t}}var FV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fc(){for(var t=12,e="";t-- >0;)e+=FV[Math.random()*62|0];return e}function Pa(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function By(t){return t.classList?Pa(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function sx(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $V(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(sx(t[n]),'" ')},"").trim()}function bd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Hy(t){return t.size!==kr.size||t.x!==kr.x||t.y!==kr.y||t.rotate!==kr.rotate||t.flipX||t.flipY}function UV(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function VV(t){var e=t.transform,n=t.width,r=n===void 0?og:n,i=t.height,s=i===void 0?og:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&JA?l+="translate(".concat(e.x/Ri-r/2,"em, ").concat(e.y/Ri-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Ri,"em), calc(-50% + ").concat(e.y/Ri,"em)) "):l+="translate(".concat(e.x/Ri,"em, ").concat(e.y/Ri,"em) "),l+="scale(".concat(e.size/Ri*(e.flipX?-1:1),", ").concat(e.size/Ri*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var jV=`:root, :host {
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
}`;function ox(){var t=ZA,e=ex,n=he.cssPrefix,r=he.replacementClass,i=jV;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var D_=!1;function Cp(){he.autoAddCss&&!D_&&(LV(ox()),D_=!0)}var BV={mixout:function(){return{dom:{css:ox,insertCss:Cp}}},hooks:function(){return{beforeDOMElementCreation:function(){Cp()},beforeI2svg:function(){Cp()}}}},yi=ls||{};yi[vi]||(yi[vi]={});yi[vi].styles||(yi[vi].styles={});yi[vi].hooks||(yi[vi].hooks={});yi[vi].shims||(yi[vi].shims=[]);var yr=yi[vi],ax=[],HV=function t(){_t.removeEventListener("DOMContentLoaded",t),lh=1,ax.map(function(e){return e()})},lh=!1;Ti&&(lh=(_t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_t.readyState),lh||_t.addEventListener("DOMContentLoaded",HV));function zV(t){Ti&&(lh?setTimeout(t,0):ax.push(t))}function Jc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?sx(t):"<".concat(e," ").concat($V(r),">").concat(s.map(Jc).join(""),"</").concat(e,">")}function M_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var WV=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Ap=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?WV(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function KV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function lg(t){var e=KV(t);return e.length===1?e[0].toString(16):null}function GV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function L_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function cg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=L_(e);typeof yr.hooks.addPack=="function"&&!i?yr.hooks.addPack(t,L_(e)):yr.styles[t]=ie(ie({},yr.styles[t]||{}),s),t==="fas"&&cg("fa",e)}var Uu,Vu,ju,Po=yr.styles,YV=yr.shims,XV=(Uu={},Kt(Uu,Et,Object.values(cc[Et])),Kt(Uu,Mt,Object.values(cc[Mt])),Uu),zy=null,lx={},cx={},ux={},fx={},hx={},QV=(Vu={},Kt(Vu,Et,Object.keys(ac[Et])),Kt(Vu,Mt,Object.keys(ac[Mt])),Vu);function qV(t){return~PV.indexOf(t)}function JV(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qV(i)?i:null}var dx=function(){var e=function(s){return Ap(Po,function(o,a,l){return o[l]=Ap(a,s,{}),o},{})};lx=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),cx=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),hx=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Po||he.autoFetchSvg,r=Ap(YV,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});ux=r.names,fx=r.unicodes,zy=Ed(he.styleDefault,{family:he.familyDefault})};MV(function(t){zy=Ed(t.styleDefault,{family:he.familyDefault})});dx();function Wy(t,e){return(lx[t]||{})[e]}function ZV(t,e){return(cx[t]||{})[e]}function ks(t,e){return(hx[t]||{})[e]}function px(t){return ux[t]||{prefix:null,iconName:null}}function ej(t){var e=fx[t],n=Wy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cs(){return zy}var Ky=function(){return{prefix:null,iconName:null,rest:[]}};function Ed(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Et:n,i=ac[r][t],s=lc[r][t]||lc[r][i],o=t in yr.styles?t:null;return s||o||null}var F_=(ju={},Kt(ju,Et,Object.keys(cc[Et])),Kt(ju,Mt,Object.keys(cc[Mt])),ju);function _d(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Kt(e,Et,"".concat(he.cssPrefix,"-").concat(Et)),Kt(e,Mt,"".concat(he.cssPrefix,"-").concat(Mt)),e),o=null,a=Et;(t.includes(s[Et])||t.some(function(c){return F_[Et].includes(c)}))&&(a=Et),(t.includes(s[Mt])||t.some(function(c){return F_[Mt].includes(c)}))&&(a=Mt);var l=t.reduce(function(c,u){var f=JV(he.cssPrefix,u);if(Po[u]?(u=XV[a].includes(u)?IV[a][u]:u,o=u,c.prefix=u):QV[a].indexOf(u)>-1?(o=u,c.prefix=Ed(u,{family:a})):f?c.iconName=f:u!==he.replacementClass&&u!==s[Et]&&u!==s[Mt]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var h=o==="fa"?px(c.iconName):{},d=ks(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||d||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Po.far&&Po.fas&&!he.autoFetchSvg&&(c.prefix="fas")}return c},Ky());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Mt&&(Po.fass||he.autoFetchSvg)&&(l.prefix="fass",l.iconName=ks(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=cs()||"fas"),l}var tj=function(){function t(){dV(this,t),this.definitions={}}return pV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=ie(ie({},n.definitions[a]||{}),o[a]),cg(a,o[a]);var l=cc[Et][a];l&&cg(l,o[a]),dx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),$_=[],ko={},Ko={},nj=Object.keys(Ko);function rj(t,e){var n=e.mixoutsTo;return $_=t,ko={},Object.keys(Ko).forEach(function(r){nj.indexOf(r)===-1&&delete Ko[r]}),$_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ah(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ko[o]||(ko[o]=[]),ko[o].push(s[o])})}r.provides&&r.provides(Ko)}),n}function ug(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ko[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function no(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ko[t]||[];i.forEach(function(s){s.apply(null,n)})}function bi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ko[t]?Ko[t].apply(null,e):void 0}function fg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||cs();if(e)return e=ks(n,e)||e,M_(mx.definitions,n,e)||M_(yr.styles,n,e)}var mx=new tj,ij=function(){he.autoReplaceSvg=!1,he.observeMutations=!1,no("noAuto")},sj={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ti?(no("beforeI2svg",e),bi("pseudoElements2svg",e),bi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;he.autoReplaceSvg===!1&&(he.autoReplaceSvg=!0),he.observeMutations=!0,zV(function(){aj({autoReplaceSvgRoot:n}),no("watch",e)})}},oj={icon:function(e){if(e===null)return null;if(ah(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ks(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ed(e[0]);return{prefix:r,iconName:ks(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(he.cssPrefix,"-"))>-1||e.match(CV))){var i=_d(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||cs(),iconName:ks(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=cs();return{prefix:s,iconName:ks(s,e)||e}}}},er={noAuto:ij,config:he,dom:sj,parse:oj,library:mx,findIconDefinition:fg,toHtml:Jc},aj=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?_t:n;(Object.keys(yr.styles).length>0||he.autoFetchSvg)&&Ti&&he.autoReplaceSvg&&er.dom.i2svg({node:r})};function wd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Jc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ti){var r=_t.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function lj(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Hy(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=bd(ie(ie({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function cj(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(he.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ie(ie({},i),{},{id:o}),children:r}]}]}function Gy(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,d=h===void 0?!1:h,p=r.found?r:n,m=p.width,y=p.height,v=i==="fak",g=[he.replacementClass,s?"".concat(he.cssPrefix,"-").concat(s):""].filter(function(I){return f.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(f.classes).join(" "),E={children:[],attributes:ie(ie({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:g,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})},b=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};d&&(E.attributes[to]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||fc())},children:[l]}),delete E.attributes.title);var T=ie(ie({},E),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:ie(ie({},b),f.styles)}),S=r.found&&n.found?bi("generateAbstractMask",T)||{children:[],attributes:{}}:bi("generateAbstractIcon",T)||{children:[],attributes:{}},O=S.children,A=S.attributes;return T.children=O,T.attributes=A,a?cj(T):lj(T)}function U_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=ie(ie(ie({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[to]="");var u=ie({},o.styles);Hy(i)&&(u.transform=VV({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=bd(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function uj(t){var e=t.content,n=t.title,r=t.extra,i=ie(ie(ie({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=bd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xp=yr.styles;function hg(t){var e=t[0],n=t[1],r=t.slice(4),i=Fy(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(he.cssPrefix,"-").concat(Ps.GROUP)},children:[{tag:"path",attributes:{class:"".concat(he.cssPrefix,"-").concat(Ps.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(he.cssPrefix,"-").concat(Ps.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var fj={found:!1,width:512,height:512};function hj(t,e){!tx&&!he.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function dg(t,e){var n=e;return e==="fa"&&he.styleDefault!==null&&(e=cs()),new Promise(function(r,i){if(bi("missingIconAbstract"),n==="fa"){var s=px(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&xp[e]&&xp[e][t]){var o=xp[e][t];return r(hg(o))}hj(t,e),r(ie(ie({},fj),{},{icon:he.showMissingIcons&&t?bi("missingIconAbstract")||{}:{}}))})}var V_=function(){},pg=he.measurePerformance&&Nu&&Nu.mark&&Nu.measure?Nu:{mark:V_,measure:V_},sl='FA "6.4.0"',dj=function(e){return pg.mark("".concat(sl," ").concat(e," begins")),function(){return gx(e)}},gx=function(e){pg.mark("".concat(sl," ").concat(e," ends")),pg.measure("".concat(sl," ").concat(e),"".concat(sl," ").concat(e," begins"),"".concat(sl," ").concat(e," ends"))},Yy={begin:dj,end:gx},sf=function(){};function j_(t){var e=t.getAttribute?t.getAttribute(to):null;return typeof e=="string"}function pj(t){var e=t.getAttribute?t.getAttribute(Uy):null,n=t.getAttribute?t.getAttribute(Vy):null;return e&&n}function mj(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(he.replacementClass)}function gj(){if(he.autoReplaceSvg===!0)return of.replace;var t=of[he.autoReplaceSvg];return t||of.replace}function vj(t){return _t.createElementNS("http://www.w3.org/2000/svg",t)}function yj(t){return _t.createElement(t)}function vx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?vj:yj:n;if(typeof t=="string")return _t.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(vx(o,{ceFn:r}))}),i}function bj(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var of={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(vx(i),n)}),n.getAttribute(to)===null&&he.keepOriginalSource){var r=_t.createComment(bj(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~By(n).indexOf(he.replacementClass))return of.replace(e);var i=new RegExp("".concat(he.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===he.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Jc(a)}).join(`
`);n.setAttribute(to,""),n.innerHTML=o}};function B_(t){t()}function yx(t,e){var n=typeof e=="function"?e:sf;if(t.length===0)n();else{var r=B_;he.mutateApproach===TV&&(r=ls.requestAnimationFrame||B_),r(function(){var i=gj(),s=Yy.begin("mutate");t.map(i),s(),n()})}}var Xy=!1;function bx(){Xy=!0}function mg(){Xy=!1}var ch=null;function H_(t){if(k_&&he.observeMutations){var e=t.treeCallback,n=e===void 0?sf:e,r=t.nodeCallback,i=r===void 0?sf:r,s=t.pseudoElementsCallback,o=s===void 0?sf:s,a=t.observeMutationsRoot,l=a===void 0?_t:a;ch=new k_(function(c){if(!Xy){var u=cs();Pa(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!j_(f.addedNodes[0])&&(he.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&he.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&j_(f.target)&&~OV.indexOf(f.attributeName))if(f.attributeName==="class"&&pj(f.target)){var h=_d(By(f.target)),d=h.prefix,p=h.iconName;f.target.setAttribute(Uy,d||u),p&&f.target.setAttribute(Vy,p)}else mj(f.target)&&i(f.target)})}}),Ti&&ch.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ej(){ch&&ch.disconnect()}function _j(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function wj(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=_d(By(t));return i.prefix||(i.prefix=cs()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ZV(i.prefix,t.innerText)||Wy(i.prefix,lg(t.innerText))),!i.iconName&&he.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Tj(t){var e=Pa(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return he.autoA11y&&(n?e["aria-labelledby"]="".concat(he.replacementClass,"-title-").concat(r||fc()):(e["aria-hidden"]="true",e.focusable="false")),e}function Sj(){return{iconName:null,title:null,titleId:null,prefix:null,transform:kr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function z_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wj(t),r=n.iconName,i=n.prefix,s=n.rest,o=Tj(t),a=ug("parseNodeAttributes",{},t),l=e.styleParser?_j(t):[];return ie({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:kr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Ij=yr.styles;function Ex(t){var e=he.autoReplaceSvg==="nest"?z_(t,{styleParser:!1}):z_(t);return~e.extra.classes.indexOf(nx)?bi("generateLayersText",t,e):bi("generateSvgReplacementMutation",t,e)}var us=new Set;jy.map(function(t){us.add("fa-".concat(t))});Object.keys(ac[Et]).map(us.add.bind(us));Object.keys(ac[Mt]).map(us.add.bind(us));us=Qc(us);function W_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ti)return Promise.resolve();var n=_t.documentElement.classList,r=function(f){return n.add("".concat(N_,"-").concat(f))},i=function(f){return n.remove("".concat(N_,"-").concat(f))},s=he.autoFetchSvg?us:jy.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ij));s.includes("fa")||s.push("fa");var o=[".".concat(nx,":not([").concat(to,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(to,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Pa(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Yy.begin("onTree"),c=a.reduce(function(u,f){try{var h=Ex(f);h&&u.push(h)}catch(d){tx||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){yx(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function Cj(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ex(t).then(function(n){n&&yx([n],e)})}function Aj(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:fg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:fg(i||{})),t(r,ie(ie({},n),{},{mask:i}))}}var xj=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?kr:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,d=n.titleId,p=d===void 0?null:d,m=n.classes,y=m===void 0?[]:m,v=n.attributes,g=v===void 0?{}:v,E=n.styles,b=E===void 0?{}:E;if(e){var T=e.prefix,S=e.iconName,O=e.icon;return wd(ie({type:"icon"},e),function(){return no("beforeDOMElementCreation",{iconDefinition:e,params:n}),he.autoA11y&&(h?g["aria-labelledby"]="".concat(he.replacementClass,"-title-").concat(p||fc()):(g["aria-hidden"]="true",g.focusable="false")),Gy({icons:{main:hg(O),mask:l?hg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:S,transform:ie(ie({},kr),i),symbol:o,title:h,maskId:u,titleId:p,extra:{attributes:g,styles:b,classes:y}})})}},Rj={mixout:function(){return{icon:Aj(xj)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=W_,n.nodeCallback=Cj,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?_t:r,s=n.callback,o=s===void 0?function(){}:s;return W_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(d,p){Promise.all([dg(i,a),u.iconName?dg(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var y=Fy(m,2),v=y[0],g=y[1];d([n,Gy({icons:{main:v,mask:g},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=bd(a);l.length>0&&(i.style=l);var c;return Hy(o)&&(c=bi("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Oj={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return wd({type:"layer"},function(){no("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(he.cssPrefix,"-layers")].concat(Qc(s)).join(" ")},children:o}]})}}}},Pj={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return wd({type:"counter",content:n},function(){return no("beforeDOMElementCreation",{content:n,params:r}),uj({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(he.cssPrefix,"-layers-counter")].concat(Qc(a))}})})}}}},kj={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?kr:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,h=r.styles,d=h===void 0?{}:h;return wd({type:"text",content:n},function(){return no("beforeDOMElementCreation",{content:n,params:r}),U_({content:n,transform:ie(ie({},kr),s),title:a,extra:{attributes:f,styles:d,classes:["".concat(he.cssPrefix,"-layers-text")].concat(Qc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(JA){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return he.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,U_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Nj=new RegExp('"',"ug"),K_=[1105920,1112319];function Dj(t){var e=t.replace(Nj,""),n=GV(e,0),r=n>=K_[0]&&n<=K_[1],i=e.length===2?e[0]===e[1]:!1;return{value:lg(i?e[0]:e),isSecondary:r||i}}function G_(t,e){var n="".concat(wV).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Pa(t.children),o=s.filter(function(O){return O.getAttribute(ag)===e})[0],a=ls.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(AV),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Mt:Et,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?lc[h][l[2].toLowerCase()]:xV[h][c],p=Dj(f),m=p.value,y=p.isSecondary,v=l[0].startsWith("FontAwesome"),g=Wy(d,m),E=g;if(v){var b=ej(m);b.iconName&&b.prefix&&(g=b.iconName,d=b.prefix)}if(g&&!y&&(!o||o.getAttribute(Uy)!==d||o.getAttribute(Vy)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var T=Sj(),S=T.extra;S.attributes[ag]=e,dg(g,d).then(function(O){var A=Gy(ie(ie({},T),{},{icons:{main:O,mask:Ky()},prefix:d,iconName:E,extra:S,watchable:!0})),I=_t.createElement("svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=A.map(function(k){return Jc(k)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Mj(t){return Promise.all([G_(t,"::before"),G_(t,"::after")])}function Lj(t){return t.parentNode!==document.head&&!~SV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ag)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Y_(t){if(Ti)return new Promise(function(e,n){var r=Pa(t.querySelectorAll("*")).filter(Lj).map(Mj),i=Yy.begin("searchPseudoElements");bx(),Promise.all(r).then(function(){i(),mg(),e()}).catch(function(){i(),mg(),n()})})}var Fj={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Y_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_t:r;he.searchPseudoElements&&Y_(i)}}},X_=!1,$j={mixout:function(){return{dom:{unwatch:function(){bx(),X_=!0}}}},hooks:function(){return{bootstrap:function(){H_(ug("mutationObserverCallbacks",{}))},noAuto:function(){Ej()},watch:function(n){var r=n.observeMutationsRoot;X_?mg():H_(ug("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Q_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Uj={mixout:function(){return{parse:{transform:function(n){return Q_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Q_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:f,path:h};return{tag:"g",attributes:ie({},d.outer),children:[{tag:"g",attributes:ie({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ie(ie({},r.icon.attributes),d.path)}]}]}}}},Rp={x:0,y:0,width:"100%",height:"100%"};function q_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Vj(t){return t.tag==="g"?t.children:[t]}var jj={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?_d(i.split(" ").map(function(o){return o.trim()})):Ky();return s.prefix||(s.prefix=cs()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,d=UV({transform:l,containerWidth:f,iconWidth:c}),p={tag:"rect",attributes:ie(ie({},Rp),{},{fill:"white"})},m=u.children?{children:u.children.map(q_)}:{},y={tag:"g",attributes:ie({},d.inner),children:[q_(ie({tag:u.tag,attributes:ie(ie({},u.attributes),d.path)},m))]},v={tag:"g",attributes:ie({},d.outer),children:[y]},g="mask-".concat(a||fc()),E="clip-".concat(a||fc()),b={tag:"mask",attributes:ie(ie({},Rp),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Vj(h)},b]};return r.push(T,{tag:"rect",attributes:ie({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(g,")")},Rp)}),{children:r,attributes:i}}}},Bj={provides:function(e){var n=!1;ls.matchMedia&&(n=ls.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:ie(ie({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=ie(ie({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:ie(ie({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:ie(ie({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ie(ie({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:ie(ie({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:ie(ie({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:ie(ie({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ie(ie({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Hj={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},zj=[BV,Rj,Oj,Pj,kj,Fj,$j,Uj,jj,Bj,Hj];rj(zj,{mixoutsTo:er});er.noAuto;er.config;var Wj=er.library;er.dom;var gg=er.parse;er.findIconDefinition;er.toHtml;var Kj=er.icon;er.layer;er.text;er.counter;function J_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ti(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J_(Object(n),!0).forEach(function(r){kn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uh(t){"@babel/helpers - typeof";return uh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uh(t)}function kn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Yj(t,e){if(t==null)return{};var n=Gj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Xj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_x={exports:{}};(function(t){(function(e){var n=function(v,g,E){if(!c(g)||f(g)||h(g)||d(g)||l(g))return g;var b,T=0,S=0;if(u(g))for(b=[],S=g.length;T<S;T++)b.push(n(v,g[T],E));else{b={};for(var O in g)Object.prototype.hasOwnProperty.call(g,O)&&(b[v(O,E)]=n(v,g[O],E))}return b},r=function(v,g){g=g||{};var E=g.separator||"_",b=g.split||/(?=[A-Z])/;return v.split(b).join(E)},i=function(v){return p(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(g,E){return E?E.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var g=i(v);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(v,g){return r(v,g).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},h=function(v){return a.call(v)=="[object RegExp]"},d=function(v){return a.call(v)=="[object Boolean]"},p=function(v){return v=v-0,v===v},m=function(v,g){var E=g&&"process"in g?g.process:g;return typeof E!="function"?v:function(b,T){return E(b,v,T)}},y={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,g){return n(m(i,g),v)},decamelizeKeys:function(v,g){return n(m(o,g),v,g)},pascalizeKeys:function(v,g){return n(m(s,g),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=y:e.humps=y})(Xj)})(_x);var Qj=_x.exports,qj=["class","style"];function Jj(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Qj.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Zj(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function wx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return wx(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Zj(u);break;case"style":l.style=Jj(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=Yj(n,qj);return bc(t.tag,ti(ti(ti({},e),{},{class:i.class,style:ti(ti({},i.style),o)},i.attrs),a),r)}var Tx=!1;try{Tx=!0}catch{}function eB(){if(!Tx&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Op(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?kn({},t,e):{}}function tB(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},kn(e,"fa-".concat(t.size),t.size!==null),kn(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),kn(e,"fa-pull-".concat(t.pull),t.pull!==null),kn(e,"fa-swap-opacity",t.swapOpacity),kn(e,"fa-bounce",t.bounce),kn(e,"fa-shake",t.shake),kn(e,"fa-beat",t.beat),kn(e,"fa-fade",t.fade),kn(e,"fa-beat-fade",t.beatFade),kn(e,"fa-flash",t.flash),kn(e,"fa-spin-pulse",t.spinPulse),kn(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Z_(t){if(t&&uh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gg.icon)return gg.icon(t);if(t===null)return null;if(uh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var nB=va({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=De(function(){return Z_(e.icon)}),s=De(function(){return Op("classes",tB(e))}),o=De(function(){return Op("transform",typeof e.transform=="string"?gg.transform(e.transform):e.transform)}),a=De(function(){return Op("mask",Z_(e.mask))}),l=De(function(){return Kj(i.value,ti(ti(ti(ti({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});$n(l,function(u){if(!u)return eB("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=De(function(){return l.value?wx(l.value.abstract[0],{},r):null});return function(){return c.value}}}),rB={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},iB={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},sB=iB,oB={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},aB={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},lB={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},cB={prefix:"fas",iconName:"money-bill-wave",icon:[576,512,[],"f53a","M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"]},uB={prefix:"fas",iconName:"grip-lines-vertical",icon:[192,512,[],"f7a5","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"]},fB={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},hB={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"]},dB={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},pB={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},mB=pB,gB={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"]},vB={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},yB={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},bB={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},EB={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},_B={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},wB={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},TB={prefix:"fas",iconName:"calendar-day",icon:[448,512,[],"f783","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"]};Wj.add(lB,bB,gB,wB,cB,sB,dB,oB,hB,TB,yB,aB,EB,vB,_B,mB,rB,uB,fB);const Td=k1(XP);Td.use(Oa);Td.use(_U,{firebaseApp:RA,modules:[EU()]});Td.component("font-awesome-icon",nB);Td.mount("#app");
