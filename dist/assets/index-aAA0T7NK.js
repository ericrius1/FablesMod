var pf=Object.defineProperty;var Th=n=>{throw TypeError(n)};var ff=(n,t,e)=>t in n?pf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var W=(n,t,e)=>ff(n,typeof t!="symbol"?t+"":t,e),_o=(n,t,e)=>t.has(n)||Th("Cannot "+e);var gt=(n,t,e)=>(_o(n,t,"read from private field"),e?e.call(n):t.get(n)),En=(n,t,e)=>t.has(n)?Th("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),an=(n,t,e,i)=>(_o(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),on=(n,t,e)=>(_o(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="185",mf=0,Ch=1,gf=2,Cr=1,vf=2,Er=3,zi=0,Ze=1,Xn=2,ci=0,Xs=1,Bi=2,Ah=3,Ph=4,_f=5,Qi=100,xf=101,bf=102,yf=103,wf=104,Mf=200,Sf=201,Ef=202,Tf=203,vl=204,_l=205,Cf=206,Af=207,Pf=208,Rf=209,Lf=210,Df=211,If=212,Uf=213,Nf=214,xl=0,bl=1,yl=2,Qs=3,wl=4,Ml=5,Sl=6,El=7,gd=0,Ff=1,Of=2,$n=0,vd=1,_d=2,xd=3,yc=4,bd=5,yd=6,wd=7,Md=300,os=301,tr=302,xo=303,bo=304,so=306,Oa=1e3,oi=1001,Tl=1002,ke=1003,Bf=1004,jr=1005,We=1006,yo=1007,ns=1008,dn=1009,Sd=1010,Ed=1011,Ar=1012,wc=1013,Jn=1014,Dn=1015,pi=1016,Mc=1017,Sc=1018,Pr=1020,Td=35902,Cd=35899,Ad=1021,Pd=1022,In=1023,fi=1026,is=1027,Ec=1028,Tc=1029,ls=1030,Cc=1031,Ac=1033,Aa=33776,Pa=33777,Ra=33778,La=33779,Cl=35840,Al=35841,Pl=35842,Rl=35843,Ll=36196,Dl=37492,Il=37496,Ul=37488,Nl=37489,Ba=37490,Fl=37491,Ol=37808,Bl=37809,kl=37810,Vl=37811,zl=37812,Hl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Kl=37819,$l=37820,Zl=37821,Jl=36492,jl=36494,Ql=36495,tc=36283,ec=36284,ka=36285,nc=36286,kf=3200,ic=0,Vf=1,Ui="",Ke="srgb",Va="srgb-linear",za="linear",ee="srgb",xs=7680,Rh=519,zf=512,Hf=513,Gf=514,Pc=515,Wf=516,Xf=517,Rc=518,qf=519,sc=35044,Rd=35048,Lh="300 es",Yn=2e3,Rr=2001;function Yf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kf(){const n=Ha("canvas");return n.style.display="block",n}const Dh={};function Ga(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ld(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Rt(...n){n=Ld(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=Ld(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function qs(...n){const t=n.join(" ");t in Dh||(Dh[t]=!0,Rt(...n))}function $f(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Zf={[xl]:bl,[yl]:Sl,[wl]:El,[Qs]:Ml,[bl]:xl,[Sl]:yl,[El]:wl,[Ml]:Qs};class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,rc=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function Jf(n,t){return(n%t+t)%t}function Mo(n,t,e){return(1-e)*n+e*t}function qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dh=class dh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;let Ot=dh;class pn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],m=r[a+1],g=r[a+2],b=r[a+3];if(d!==b||c!==h||l!==m||u!==g){let f=c*h+l*m+u*g+d*b;f<0&&(h=-h,m=-m,g=-g,b=-b,f=-f);let p=1-o;if(f<.9995){const S=Math.acos(f),P=Math.sin(S);p=Math.sin(p*S)/P,o=Math.sin(o*S)/P,c=c*p+h*o,l=l*p+m*o,u=u*p+g*o,d=d*p+b*o}else{c=c*p+h*o,l=l*p+m*o,u=u*p+g*o,d=d*p+b*o;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*m-l*h,t[e+1]=c*g+u*h+l*d-o*m,t[e+2]=l*g+u*m+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ph=class ph{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;let A=ph;const So=new A,Ih=new pn,fh=class fh{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],b=s[0],f=s[3],p=s[6],S=s[1],P=s[4],y=s[7],C=s[2],M=s[5],R=s[8];return r[0]=a*b+o*S+c*C,r[3]=a*f+o*P+c*M,r[6]=a*p+o*y+c*R,r[1]=l*b+u*S+d*C,r[4]=l*f+u*P+d*M,r[7]=l*p+u*y+d*R,r[2]=h*b+m*S+g*C,r[5]=h*f+m*P+g*M,r[8]=h*p+m*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,m=l*r-a*c,g=e*d+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return t[0]=d*b,t[1]=(s*l-u*i)*b,t[2]=(o*i-s*a)*b,t[3]=h*b,t[4]=(u*e-s*c)*b,t[5]=(s*r-o*e)*b,t[6]=m*b,t[7]=(i*c-l*e)*b,t[8]=(a*e-i*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;let It=fh;const Eo=new It,Uh=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jf(){const n={enabled:!0,workingColorSpace:Va,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Va]:{primaries:t,whitePoint:i,transfer:za,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}const Gt=jf();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class Qf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bs===void 0&&(bs=Ha("canvas")),bs.width=t.width,bs.height=t.height;const s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=bs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hi(e[i]/255)*255):e[i]=hi(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tm=0;class Lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function To(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let em=0;const Co=new A;class Xe extends ds{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=oi,s=oi,r=We,a=ns,o=In,c=dn,l=Xe.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ki(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Md;Xe.DEFAULT_ANISOTROPY=1;const mh=class mh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],b=c[2],f=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-b)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+b)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(l+1)/2,y=(m+1)/2,C=(p+1)/2,M=(u+h)/4,R=(d+b)/4,_=(g+f)/4;return P>y&&P>C?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=M/i,r=R/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=_/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=_/r),this.set(i,s,r,e),this}let S=Math.sqrt((f-g)*(f-g)+(d-b)*(d-b)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(d-b)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;let me=mh;class nm extends ds{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Xe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends nm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Dd extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const io=class io{constructor(t,e,i,s,r,a,o,c,l,u,d,h,m,g,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,d,h,m,g,b,f)}set(t,e,i,s,r,a,o,c,l,u,d,h,m,g,b,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=b,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new io().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,m=a*d,g=o*u,b=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=h-b*l,e[9]=-o*c,e[2]=b-h*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,m=c*d,g=l*u,b=l*d;e[0]=h+b*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=b+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,m=c*d,g=l*u,b=l*d;e[0]=h-b*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=b-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,m=a*d,g=o*u,b=o*d;e[0]=c*u,e[4]=g*l-m,e[8]=h*l+b,e[1]=c*d,e[5]=b*l+h,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,m=a*l,g=o*c,b=o*l;e[0]=c*u,e[4]=b-h*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*d+g,e[10]=h-b*d}else if(t.order==="XZY"){const h=a*c,m=a*l,g=o*c,b=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+b,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=b*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,i){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),yi.crossVectors(i,ln),yi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),yi.crossVectors(i,ln)),yi.normalize(),Qr.crossVectors(ln,yi),s[0]=yi.x,s[4]=Qr.x,s[8]=ln.x,s[1]=yi.y,s[5]=Qr.y,s[9]=ln.y,s[2]=yi.z,s[6]=Qr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],b=i[6],f=i[10],p=i[14],S=i[3],P=i[7],y=i[11],C=i[15],M=s[0],R=s[4],_=s[8],w=s[12],T=s[1],L=s[5],D=s[9],B=s[13],Y=s[2],O=s[6],K=s[10],H=s[14],j=s[3],tt=s[7],ut=s[11],mt=s[15];return r[0]=a*M+o*T+c*Y+l*j,r[4]=a*R+o*L+c*O+l*tt,r[8]=a*_+o*D+c*K+l*ut,r[12]=a*w+o*B+c*H+l*mt,r[1]=u*M+d*T+h*Y+m*j,r[5]=u*R+d*L+h*O+m*tt,r[9]=u*_+d*D+h*K+m*ut,r[13]=u*w+d*B+h*H+m*mt,r[2]=g*M+b*T+f*Y+p*j,r[6]=g*R+b*L+f*O+p*tt,r[10]=g*_+b*D+f*K+p*ut,r[14]=g*w+b*B+f*H+p*mt,r[3]=S*M+P*T+y*Y+C*j,r[7]=S*R+P*L+y*O+C*tt,r[11]=S*_+P*D+y*K+C*ut,r[15]=S*w+P*B+y*H+C*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],b=t[7],f=t[11],p=t[15],S=c*m-l*h,P=o*m-l*d,y=o*h-c*d,C=a*m-l*u,M=a*h-c*u,R=a*d-o*u;return e*(b*S-f*P+p*y)-i*(g*S-f*C+p*M)+s*(g*P-b*C+p*R)-r*(g*y-b*M+f*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],b=t[13],f=t[14],p=t[15],S=e*o-i*a,P=e*c-s*a,y=e*l-r*a,C=i*c-s*o,M=i*l-r*o,R=s*l-r*c,_=u*b-d*g,w=u*f-h*g,T=u*p-m*g,L=d*f-h*b,D=d*p-m*b,B=h*p-m*f,Y=S*B-P*D+y*L+C*T-M*w+R*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Y;return t[0]=(o*B-c*D+l*L)*O,t[1]=(s*D-i*B-r*L)*O,t[2]=(b*R-f*M+p*C)*O,t[3]=(h*M-d*R-m*C)*O,t[4]=(c*T-a*B-l*w)*O,t[5]=(e*B-s*T+r*w)*O,t[6]=(f*y-g*R-p*P)*O,t[7]=(u*R-h*y+m*P)*O,t[8]=(a*D-o*T+l*_)*O,t[9]=(i*T-e*D-r*_)*O,t[10]=(g*M-b*y+p*S)*O,t[11]=(d*y-u*M-m*S)*O,t[12]=(o*w-a*L-c*_)*O,t[13]=(e*L-i*w+s*_)*O,t[14]=(b*P-g*C-f*S)*O,t[15]=(u*C-d*P+h*S)*O,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,m=r*u,g=r*d,b=a*u,f=a*d,p=o*d,S=c*l,P=c*u,y=c*d,C=i.x,M=i.y,R=i.z;return s[0]=(1-(b+p))*C,s[1]=(m+y)*C,s[2]=(g-P)*C,s[3]=0,s[4]=(m-y)*M,s[5]=(1-(h+p))*M,s[6]=(f+S)*M,s[7]=0,s[8]=(g+P)*R,s[9]=(f-S)*R,s[10]=(1-(h+b))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ys.set(s[0],s[1],s[2]).length();const o=ys.set(s[4],s[5],s[6]).length(),c=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);const l=1/a,u=1/o,d=1/c;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Yn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),m=(i+s)/(i-s);let g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===Yn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Rr)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),m=-(i+s)/(i-s);let g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===Yn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Rr)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};io.prototype.isMatrix4=!0;let jt=io;const ys=new A,Tn=new jt,sm=new A(0,0,0),rm=new A(1,1,1),yi=new A,Qr=new A,ln=new A,Fh=new jt,Oh=new pn;class Hi{constructor(t=0,e=0,i=0,s=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let am=0;const Bh=new A,ws=new pn,ti=new jt,ta=new A,cr=new A,om=new A,lm=new pn,kh=new A(1,0,0),Vh=new A(0,1,0),zh=new A(0,0,1),Hh={type:"added"},cm={type:"removed"},Ms={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Te extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new A,e=new Hi,i=new pn,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new It}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ta.copy(t):ta.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(cr,ta,this.up):ti.lookAt(ta,cr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ti),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new A(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ws extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const f=e.getJointPose(b,i),p=this._getHandJoint(l,b);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Ro(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Gt.workingColorSpace){if(t=Jf(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Id[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Gt.workingToColorSpace(He.copy(this),t),Math.round(Wt(He.r*255,0,255))*65536+Math.round(Wt(He.g*255,0,255))*256+Math.round(Wt(He.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ke){Gt.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(ea);const i=Mo(wi.h,ea.h,e),s=Mo(wi.s,ea.s,e),r=Mo(wi.l,ea.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Tt;Tt.NAMES=Id;class Ic{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=i}clone(){return new Ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class um extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cn=new A,ei=new A,Lo=new A,ni=new A,Ss=new A,Es=new A,Gh=new A,Do=new A,Io=new A,Uo=new A,No=new me,Fo=new me,Oo=new me;class wn{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),ei.subVectors(i,e),Lo.subVectors(t,e);const a=Cn.dot(Cn),o=Cn.dot(ei),c=Cn.dot(Lo),l=ei.dot(ei),u=ei.dot(Lo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return No.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),No.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,i),Oo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(No,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Oo,r.z),a}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),ei.subVectors(t,e),Cn.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ss.subVectors(s,i),Es.subVectors(r,i),Do.subVectors(t,i);const c=Ss.dot(Do),l=Es.dot(Do);if(c<=0&&l<=0)return e.copy(i);Io.subVectors(t,s);const u=Ss.dot(Io),d=Es.dot(Io);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Ss,a);Uo.subVectors(t,r);const m=Ss.dot(Uo),g=Es.dot(Uo);if(g>=0&&m<=g)return e.copy(r);const b=m*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Es,o);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Gh.subVectors(r,s),o=(d-u)/(d-u+(m-g)),e.copy(s).addScaledVector(Gh,o);const p=1/(f+b+h);return a=b*p,o=h*p,e.copy(i).addScaledVector(Ss,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Xi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),ia.subVectors(this.max,hr),Ts.subVectors(t.a,hr),Cs.subVectors(t.b,hr),As.subVectors(t.c,hr),Mi.subVectors(Cs,Ts),Si.subVectors(As,Cs),Yi.subVectors(Ts,As);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Yi.z,Yi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Yi.z,0,-Yi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Yi.y,Yi.x,0];return!Bo(e,Ts,Cs,As,ia)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,Ts,Cs,As,ia))?!1:(sa.crossVectors(Mi,Si),e=[sa.x,sa.y,sa.z],Bo(e,Ts,Cs,As,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ii=[new A,new A,new A,new A,new A,new A,new A,new A],An=new A,na=new Xi,Ts=new A,Cs=new A,As=new A,Mi=new A,Si=new A,Yi=new A,hr=new A,ia=new A,sa=new A,Ki=new A;function Bo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ki.fromArray(n,r);const o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pe=new A,ra=new Ot;let dm=0;class nn extends ds{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ud extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nd extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const pm=new Xi,ur=new A,ko=new A;class ps{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(ko)),this.expandByPoint(ur.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fm=0;const _n=new jt,Vo=new Te,Ps=new A,cn=new Xi,dr=new Xi,Fe=new A;class Oe extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?Nd:Ud)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new It().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(cn.min,dr.min),cn.expandByPoint(Fe),Fe.addVectors(cn.max,dr.max),cn.expandByPoint(Fe)):(cn.expandByPoint(dr.min),cn.expandByPoint(dr.max))}cn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Fe.fromBufferAttribute(o,l),c&&(Ps.fromBufferAttribute(t,l),Fe.add(Ps)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new nn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new A,c[_]=new A;const l=new A,u=new A,d=new A,h=new Ot,m=new Ot,g=new Ot,b=new A,f=new A;function p(_,w,T){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,T),h.fromBufferAttribute(r,_),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),u.sub(l),d.sub(l),m.sub(h),g.sub(h);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[_].add(b),o[w].add(b),o[T].add(b),c[_].add(f),c[w].add(f),c[T].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let _=0,w=S.length;_<w;++_){const T=S[_],L=T.start,D=T.count;for(let B=L,Y=L+D;B<Y;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const P=new A,y=new A,C=new A,M=new A;function R(_){C.fromBufferAttribute(s,_),M.copy(C);const w=o[_];P.copy(w),P.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(M,w);const L=y.dot(c[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,L)}for(let _=0,w=S.length;_<w;++_){const T=S[_],L=T.start,D=T.count;for(let B=L,Y=L+D;B<Y;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,u=new A,d=new A;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),b=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,f),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let b=0,f=c.length;b<f;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*u;for(let p=0;p<u;p++)h[g++]=l[m++]}return new nn(h,u,d)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],m=t(h,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new A;class Wa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=qn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let gm=0;class fs extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Xs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=_l,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xa extends fs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Rs;const pr=new A,Ls=new A,Ds=new A,Is=new Ot,fr=new Ot,Fd=new jt,aa=new A,mr=new A,oa=new A,Wh=new Ot,zo=new Ot,Xh=new Ot;class ac extends Te{constructor(t=new Xa){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mm(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Wa(i,3,0,!1)),Rs.setAttribute("uv",new Wa(i,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new Ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Fd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;la(aa.set(-.5,-.5,0),Ds,a,Ls,s,r),la(mr.set(.5,-.5,0),Ds,a,Ls,s,r),la(oa.set(.5,.5,0),Ds,a,Ls,s,r),Wh.set(0,0),zo.set(1,0),Xh.set(1,1);let o=t.ray.intersectTriangle(aa,mr,oa,!1,pr);if(o===null&&(la(mr.set(-.5,.5,0),Ds,a,Ls,s,r),zo.set(0,1),o=t.ray.intersectTriangle(aa,oa,mr,!1,pr),o===null))return;const c=t.ray.origin.distanceTo(pr);c<t.near||c>t.far||e.push({distance:c,point:pr.clone(),uv:wn.getInterpolation(pr,aa,mr,oa,Wh,zo,Xh,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function la(n,t,e,i,s,r){Is.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(fr.x=r*Is.x-s*Is.y,fr.y=s*Is.x+r*Is.y):fr.copy(Is),n.copy(t),n.x+=fr.x,n.y+=fr.y,n.applyMatrix4(Fd)}const si=new A,Ho=new A,ca=new A,Ei=new A,Go=new A,ha=new A,Wo=new A;class Uc{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ho.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Ho);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=Ei.dot(this.direction),c=-Ei.dot(ca),l=Ei.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const b=1/u;d*=b,h*=b,m=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ho).addScaledVector(ca,h),m}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,r){Go.subVectors(e,t),ha.subVectors(i,t),Wo.crossVectors(Go,ha);let a=this.direction.dot(Wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const c=o*this.direction.dot(ha.crossVectors(Ei,ha));if(c<0)return null;const l=o*this.direction.dot(Go.cross(Ei));if(l<0||c+l>a)return null;const u=-o*Ei.dot(Wo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ro extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qh=new jt,$i=new Uc,ua=new ps,Yh=new A,da=new A,pa=new A,fa=new A,Xo=new A,ma=new A,Kh=new A,ga=new A;class fe extends Te{constructor(t=new Oe,e=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(Xo.fromBufferAttribute(d,t),a?ma.addScaledVector(Xo,u):ma.addScaledVector(Xo.sub(e),u))}e.add(ma)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(ua.containsPoint($i.origin)===!1&&($i.intersectSphere(ua,Yh)===null||$i.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),$i.copy(t.ray).applyMatrix4(qh),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const f=h[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),P=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,C=P;y<C;y+=3){const M=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=va(this,p,t,i,l,u,d,M,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let f=g,p=b;f<p;f+=3){const S=o.getX(f),P=o.getX(f+1),y=o.getX(f+2);s=va(this,a,t,i,l,u,d,S,P,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const f=h[g],p=a[f.materialIndex],S=Math.max(f.start,m.start),P=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let y=S,C=P;y<C;y+=3){const M=y,R=y+1,_=y+2;s=va(this,p,t,i,l,u,d,M,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let f=g,p=b;f<p;f+=3){const S=f,P=f+1,y=f+2;s=va(this,a,t,i,l,u,d,S,P,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function vm(n,t,e,i,s,r,a,o){let c;if(t.side===Ze?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===zi,o),c===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ga);return l<e.near||l>e.far?null:{distance:l,point:ga.clone(),object:n}}function va(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,da),n.getVertexPosition(c,pa),n.getVertexPosition(l,fa);const u=vm(n,t,e,i,da,pa,fa,Kh);if(u){const d=new A;wn.getBarycoord(Kh,da,pa,fa,d),s&&(u.uv=wn.getInterpolatedAttribute(s,o,c,l,d,new Ot)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,c,l,d,new Ot)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new A,materialIndex:0};wn.getNormal(da,pa,fa,h.normal),u.face=h,u.barycoord=d}return u}class Od extends Xe{constructor(t=null,e=1,i=1,s,r,a,o,c,l=ke,u=ke,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $h extends nn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new jt,Zh=new jt,_a=[],Jh=new Xi,_m=new jt,gr=new fe,vr=new ps;class qa extends fe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $h(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_m)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),Jh.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Jh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Us),vr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(i),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Zh.multiplyMatrices(i,Us),gr.matrixWorld=Zh,gr.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){const c=_a[a];c.instanceId=r,c.object=this,e.push(c)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Od(new Float32Array(s*this.count),s,this.count,Ec,Dn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qo=new A,xm=new A,bm=new It;class Di{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=qo.subVectors(i,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bm.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new ps,ym=new Ot(.5,.5),xa=new A;class Nc{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],m=r[7],g=r[8],b=r[9],f=r[10],p=r[11],S=r[12],P=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-a,m-u,p-g,C-S).normalize(),s[1].setComponents(l+a,m+u,p+g,C+S).normalize(),s[2].setComponents(l+o,m+d,p+b,C+P).normalize(),s[3].setComponents(l-o,m-d,p-b,C-P).normalize(),i)s[4].setComponents(c,h,f,y).normalize(),s[5].setComponents(l-c,m-h,p-f,C-y).normalize();else if(s[4].setComponents(l-c,m-h,p-f,C-y).normalize(),e===Yn)s[5].setComponents(l+c,m+h,p+f,C+y).normalize();else if(e===Rr)s[5].setComponents(c,h,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);const e=ym.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Br extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ya=new A,Ka=new A,jh=new jt,_r=new Uc,ba=new ps,Yo=new A,Qh=new A;class Fc extends Te{constructor(t=new Oe,e=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ya.fromBufferAttribute(e,s-1),Ka.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ya.distanceTo(Ka);t.setAttribute("lineDistance",new de(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;jh.copy(s).invert(),_r.copy(t.ray).applyMatrix4(jh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=m,f=g-1;b<f;b+=l){const p=u.getX(b),S=u.getX(b+1),P=ya(this,t,_r,c,p,S,b);P&&e.push(P)}if(this.isLineLoop){const b=u.getX(g-1),f=u.getX(m),p=ya(this,t,_r,c,b,f,g-1);p&&e.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=m,f=g-1;b<f;b+=l){const p=ya(this,t,_r,c,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){const b=ya(this,t,_r,c,g-1,m,g-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ya(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Ya.fromBufferAttribute(o,s),Ka.fromBufferAttribute(o,r),e.distanceSqToSegment(Ya,Ka,Yo,Qh)>i)return;Yo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Yo);if(!(l<t.near||l>t.far))return{distance:l,point:Qh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const tu=new A,eu=new A;class Bd extends Fc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)tu.fromBufferAttribute(e,s),eu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tu.distanceTo(eu);t.setAttribute("lineDistance",new de(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kd extends Xe{constructor(t=[],e=os,i,s,r,a,o,c,l,u){super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ao extends Xe{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Xe{constructor(t,e,i=Jn,s,r,a,o=ke,c=ke,l,u=fi,d=1){if(u!==fi&&u!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wm extends er{constructor(t,e=Jn,i=os,s,r,a=ke,o=ke,c,l=fi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vd extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Un extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function g(b,f,p,S,P,y,C,M,R,_,w){const T=y/R,L=C/_,D=y/2,B=C/2,Y=M/2,O=R+1,K=_+1;let H=0,j=0;const tt=new A;for(let ut=0;ut<K;ut++){const mt=ut*L-B;for(let xt=0;xt<O;xt++){const $t=xt*T-D;tt[b]=$t*S,tt[f]=mt*P,tt[p]=Y,l.push(tt.x,tt.y,tt.z),tt[b]=0,tt[f]=0,tt[p]=M>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(xt/R),d.push(1-ut/_),H+=1}}for(let ut=0;ut<_;ut++)for(let mt=0;mt<R;mt++){const xt=h+mt+O*ut,$t=h+mt+O*(ut+1),ve=h+(mt+1)+O*(ut+1),Zt=h+(mt+1)+O*ut;c.push(xt,$t,Zt),c.push($t,ve,Zt),j+=6}o.addGroup(m,j,w),m+=j,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $a extends Oe{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,m=2*d+h,g=i*2+r,b=s+1,f=new A,p=new A;for(let S=0;S<=g;S++){let P=0,y=0,C=0,M=0;if(S<=i){const w=S/i,T=w*Math.PI/2;y=-u-t*Math.cos(T),C=t*Math.sin(T),M=-t*Math.cos(T),P=w*d}else if(S<=i+r){const w=(S-i)/r;y=-u+w*e,C=t,M=0,P=d+w*h}else{const w=(S-i-r)/i,T=w*Math.PI/2;y=u+t*Math.sin(T),C=t*Math.cos(T),M=t*Math.sin(T),P=d+h+w*d}const R=Math.max(0,Math.min(1,P/m));let _=0;S===0?_=.5/s:S===g&&(_=-.5/s);for(let w=0;w<=s;w++){const T=w/s,L=T*Math.PI*2,D=Math.sin(L),B=Math.cos(L);p.x=-C*B,p.y=y,p.z=C*D,o.push(p.x,p.y,p.z),f.set(-C*B,M,C*D),f.normalize(),c.push(f.x,f.y,f.z),l.push(T+_,R)}if(S>0){const w=(S-1)*b;for(let T=0;T<s;T++){const L=w+T,D=w+T+1,B=S*b+T,Y=S*b+T+1;a.push(L,D,B),a.push(D,Y,B)}}}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class oo extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],m=[];let g=0;const b=[],f=i/2;let p=0;S(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(m,2));function S(){const y=new A,C=new A;let M=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const w=[],T=_/r,L=T*(e-t)+t;for(let D=0;D<=s;D++){const B=D/s,Y=B*c+o,O=Math.sin(Y),K=Math.cos(Y);C.x=L*O,C.y=-T*i+f,C.z=L*K,d.push(C.x,C.y,C.z),y.set(O,R,K).normalize(),h.push(y.x,y.y,y.z),m.push(B,1-T),w.push(g++)}b.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){const T=b[w][_],L=b[w+1][_],D=b[w+1][_+1],B=b[w][_+1];(t>0||w!==0)&&(u.push(T,L,B),M+=3),(e>0||w!==r-1)&&(u.push(L,D,B),M+=3)}l.addGroup(p,M,0),p+=M}function P(y){const C=g,M=new Ot,R=new A;let _=0;const w=y===!0?t:e,T=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,f*T,0),h.push(0,T,0),m.push(.5,.5),g++;const L=g;for(let D=0;D<=s;D++){const Y=D/s*c+o,O=Math.cos(Y),K=Math.sin(Y);R.x=w*K,R.y=f*T,R.z=w*O,d.push(R.x,R.y,R.z),h.push(0,T,0),M.x=O*.5+.5,M.y=K*.5*T+.5,m.push(M.x,M.y),g++}for(let D=0;D<s;D++){const B=C+D,Y=L+D;y===!0?u.push(Y,Y+1,B):u.push(Y+1,Y,B),_+=3}l.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oc extends oo{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Oc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kr extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,m=[],g=[],b=[],f=[];for(let p=0;p<u;p++){const S=p*h-a;for(let P=0;P<l;P++){const y=P*d-r;g.push(y,-S,0),b.push(0,0,1),f.push(P/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const P=S+l*p,y=S+l*(p+1),C=S+1+l*(p+1),M=S+1+l*p;m.push(P,y,M),m.push(y,C,M)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(b,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gi extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new A,h=new A,m=[],g=[],b=[],f=[];for(let p=0;p<=i;p++){const S=[],P=p/i,y=a+P*o,C=t*Math.cos(y),M=Math.sqrt(t*t-C*C);let R=0;p===0&&a===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const w=_/e,T=s+w*r;d.x=-M*Math.cos(T),d.y=C,d.z=M*Math.sin(T),g.push(d.x,d.y,d.z),h.copy(d).normalize(),b.push(h.x,h.y,h.z),f.push(w+R,1-P),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const P=u[p][S+1],y=u[p][S],C=u[p+1][S],M=u[p+1][S+1];(p!==0||a>0)&&m.push(P,y,M),(p!==i-1||c<Math.PI)&&m.push(y,C,M)}this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(b,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function nr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(nu(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(nu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=nr(n[e]);for(const s in i)t[s]=i[s]}return t}function nu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const Sm={clone:nr,merge:Ye};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new It().fromArray(s.value);break;case"m4":this.uniforms[i].value=new jt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Cm extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fn extends fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Am extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lo extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Rm extends lo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ko=new jt,iu=new A,su=new A;class Hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Rr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wa=new A,Ma=new pn,Bn=new A;class Gd extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wa,Ma,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ma,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(wa,Ma,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ma,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new A,ru=new Ot,au=new Ot;class un extends Gd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,ru,au),e.subVectors(au,ru)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Lm extends Hd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class oc extends lo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Bc extends Gd{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dm extends Hd{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Dm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Um extends lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ns=-90,Fs=1;class Nm extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Ns,Fs,t,e);s.layers=this.layers,this.add(s);const r=new un(Ns,Fs,t,e);r.layers=this.layers,this.add(r);const a=new un(Ns,Fs,t,e);a.layers=this.layers,this.add(a);const o=new un(Ns,Fs,t,e);o.layers=this.layers,this.add(o);const c=new un(Ns,Fs,t,e);c.layers=this.layers,this.add(c);const l=new un(Ns,Fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fm extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ou=new jt;class Wd{constructor(t,e,i=0,s=1/0){this.ray=new Uc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(t,e=!0,i=[]){return lc(t,this,i,e),i.sort(lu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)lc(t[s],this,i,e);return i.sort(lu),i}}function lu(n,t){return n.distance-t.distance}function lc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)lc(r[a],t,e,!0)}}const gh=class gh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};gh.prototype.isMatrix2=!0;let cu=gh;class Om extends Bd{constructor(t=10,e=10,i=4473924,s=8947848){i=new Tt(i),s=new Tt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,m=0,g=-o;h<=e;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const b=h===r?i:s;b.toArray(l,m),m+=3,b.toArray(l,m),m+=3,b.toArray(l,m),m+=3,b.toArray(l,m),m+=3}const u=new Oe;u.setAttribute("position",new de(c,3)),u.setAttribute("color",new de(l,3));const d=new Br({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bm extends Bd{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Oe;s.setAttribute("position",new de(e,3)),s.setAttribute("color",new de(i,3));const r=new Br({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Tt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function hu(n,t,e,i){const s=km(i);switch(e){case Ad:return n*t;case Ec:return n*t/s.components*s.byteLength;case Tc:return n*t/s.components*s.byteLength;case ls:return n*t*2/s.components*s.byteLength;case Cc:return n*t*2/s.components*s.byteLength;case Pd:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case Ac:return n*t*4/s.components*s.byteLength;case Aa:case Pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:case Rl:return Math.max(n,16)*Math.max(t,8)/4;case Cl:case Pl:return Math.max(n,8)*Math.max(t,8)/2;case Ll:case Dl:case Ul:case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Il:case Ba:case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Jl:case jl:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tc:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ka:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(n){switch(n){case dn:case Sd:return{byteLength:1,components:1};case Ar:case Ed:case pi:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case Jn:case wc:case Dn:return{byteLength:4,components:1};case Td:case Cd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xd(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Vm(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],b=d[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,d[h]=b)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const b=d[m];n.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,av=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Av=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:zm,alphahash_pars_fragment:Hm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:Km,batching_pars_vertex:$m,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:jm,bsdfs:Qm,iridescence_fragment:tg,bumpmap_pars_fragment:eg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:ag,color_pars_fragment:og,color_pars_vertex:lg,color_vertex:cg,common:hg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:pg,displacementmap_vertex:fg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:vg,colorspace_pars_fragment:_g,envmap_fragment:xg,envmap_common_pars_fragment:bg,envmap_pars_fragment:yg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ig,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:Eg,fog_fragment:Tg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Pg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Dg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Ng,lights_phong_fragment:Fg,lights_phong_pars_fragment:Og,lights_physical_fragment:Bg,lights_physical_pars_fragment:kg,lights_fragment_begin:Vg,lights_fragment_maps:zg,lights_fragment_end:Hg,lightprobes_pars_fragment:Gg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Yg,map_fragment:Kg,map_pars_fragment:$g,map_particle_fragment:Zg,map_particle_pars_fragment:Jg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:tv,morphcolor_vertex:ev,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:sv,normal_fragment_begin:rv,normal_fragment_maps:av,normal_pars_fragment:ov,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:pv,iridescence_pars_fragment:fv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:vv,project_vertex:_v,dithering_fragment:xv,dithering_pars_fragment:bv,roughnessmap_fragment:yv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Sv,shadowmap_vertex:Ev,shadowmask_pars_fragment:Tv,skinbase_vertex:Cv,skinning_pars_vertex:Av,skinning_vertex:Pv,skinnormal_vertex:Rv,specularmap_fragment:Lv,specularmap_pars_fragment:Dv,tonemapping_fragment:Iv,tonemapping_pars_fragment:Uv,transmission_fragment:Nv,transmission_pars_fragment:Fv,uv_pars_fragment:Ov,uv_pars_vertex:Bv,uv_vertex:kv,worldpos_vertex:Vv,background_vert:zv,background_frag:Hv,backgroundCube_vert:Gv,backgroundCube_frag:Wv,cube_vert:Xv,cube_frag:qv,depth_vert:Yv,depth_frag:Kv,distance_vert:$v,distance_frag:Zv,equirect_vert:Jv,equirect_frag:jv,linedashed_vert:Qv,linedashed_frag:t_,meshbasic_vert:e_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:a_,meshnormal_vert:o_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:u_,meshphysical_frag:d_,meshtoon_vert:p_,meshtoon_frag:f_,points_vert:m_,points_frag:g_,shadow_vert:v_,shadow_frag:__,sprite_vert:x_,sprite_frag:b_},ht={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Wn={basic:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ye([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ye([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ye([ht.points,ht.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ye([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ye([ht.common,ht.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ye([ht.sprite,ht.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Ye([ht.common,ht.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Ye([ht.lights,ht.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Wn.physical={uniforms:Ye([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Sa={r:0,b:0,g:0},y_=new jt,qd=new It;qd.set(-1,0,0,0,1,0,0,0,1);function w_(n,t,e,i,s,r){const a=new Tt(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function m(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){const y=S.backgroundBlurriness>0;P=t.get(P,y)}return P}function g(S){let P=!1;const y=m(S);y===null?f(a,o):y&&y.isColor&&(f(y,1),P=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(S,P){const y=m(P);y&&(y.isCubeTexture||y.mapping===so)?(l===void 0&&(l=new fe(new Un(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:nr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qd),l.material.toneMapped=Gt.getTransfer(y.colorSpace)!==ee,(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fe(new kr(2,2),new Sn({name:"BackgroundMaterial",uniforms:nr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,P){S.getRGB(Sa,zd(n)),e.buffers.color.setClear(Sa.r,Sa.g,Sa.b,P,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,P=1){a.set(S),o=P,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:g,addToRenderList:b,dispose:p}}function M_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(L,D,B,Y,O){let K=!1;const H=d(L,Y,B,D);r!==H&&(r=H,l(r.object)),K=m(L,Y,B,O),K&&g(L,Y,B,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(L,D,B,Y),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,D,B,Y){const O=Y.wireframe===!0;let K=i[D.id];K===void 0&&(K={},i[D.id]=K);const H=L.isInstancedMesh===!0?L.id:0;let j=K[H];j===void 0&&(j={},K[H]=j);let tt=j[B.id];tt===void 0&&(tt={},j[B.id]=tt);let ut=tt[O];return ut===void 0&&(ut=h(c()),tt[O]=ut),ut}function h(L){const D=[],B=[],Y=[];for(let O=0;O<e;O++)D[O]=0,B[O]=0,Y[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:Y,object:L,attributes:{},index:null}}function m(L,D,B,Y){const O=r.attributes,K=D.attributes;let H=0;const j=B.getAttributes();for(const tt in j)if(j[tt].location>=0){const mt=O[tt];let xt=K[tt];if(xt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;H++}return r.attributesNum!==H||r.index!==Y}function g(L,D,B,Y){const O={},K=D.attributes;let H=0;const j=B.getAttributes();for(const tt in j)if(j[tt].location>=0){let mt=K[tt];mt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor));const xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),O[tt]=xt,H++}r.attributes=O,r.attributesNum=H,r.index=Y}function b(){const L=r.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function f(L){p(L,0)}function p(L,D){const B=r.newAttributes,Y=r.enabledAttributes,O=r.attributeDivisors;B[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),O[L]!==D&&(n.vertexAttribDivisor(L,D),O[L]=D)}function S(){const L=r.newAttributes,D=r.enabledAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]!==L[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function P(L,D,B,Y,O,K,H){H===!0?n.vertexAttribIPointer(L,D,B,O,K):n.vertexAttribPointer(L,D,B,Y,O,K)}function y(L,D,B,Y){b();const O=Y.attributes,K=B.getAttributes(),H=D.defaultAttributeValues;for(const j in K){const tt=K[j];if(tt.location>=0){let ut=O[j];if(ut===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor)),ut!==void 0){const mt=ut.normalized,xt=ut.itemSize,$t=t.get(ut);if($t===void 0)continue;const ve=$t.buffer,Zt=$t.type,J=$t.bytesPerElement,st=Zt===n.INT||Zt===n.UNSIGNED_INT||ut.gpuType===wc;if(ut.isInterleavedBufferAttribute){const et=ut.data,Dt=et.stride,Ut=ut.offset;if(et.isInstancedInterleavedBuffer){for(let At=0;At<tt.locationSize;At++)p(tt.location+At,et.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let At=0;At<tt.locationSize;At++)f(tt.location+At);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let At=0;At<tt.locationSize;At++)P(tt.location+At,xt/tt.locationSize,Zt,mt,Dt*J,(Ut+xt/tt.locationSize*At)*J,st)}else{if(ut.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)p(tt.location+et,ut.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let et=0;et<tt.locationSize;et++)f(tt.location+et);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let et=0;et<tt.locationSize;et++)P(tt.location+et,xt/tt.locationSize,Zt,mt,xt*J,xt/tt.locationSize*et*J,st)}}else if(H!==void 0){const mt=H[j];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(tt.location,mt);break;case 3:n.vertexAttrib3fv(tt.location,mt);break;case 4:n.vertexAttrib4fv(tt.location,mt);break;default:n.vertexAttrib1fv(tt.location,mt)}}}}S()}function C(){w();for(const L in i){const D=i[L];for(const B in D){const Y=D[B];for(const O in Y){const K=Y[O];for(const H in K)u(K[H].object),delete K[H];delete Y[O]}}delete i[L]}}function M(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const B in D){const Y=D[B];for(const O in Y){const K=Y[O];for(const H in K)u(K[H].object),delete K[H];delete Y[O]}}delete i[L.id]}function R(L){for(const D in i){const B=i[D];for(const Y in B){const O=B[Y];if(O[L.id]===void 0)continue;const K=O[L.id];for(const H in K)u(K[H].object),delete K[H];delete O[L.id]}}}function _(L){for(const D in i){const B=i[D],Y=L.isInstancedMesh===!0?L.id:0,O=B[Y];if(O!==void 0){for(const K in O){const H=O[K];for(const j in H)u(H[j].object),delete H[j];delete O[K]}delete B[Y],Object.keys(B).length===0&&delete i[D]}}}function w(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:f,disableUnusedAttributes:S}}function S_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function E_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!_)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Rt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:y,maxSamples:C,samples:M}}function T_(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Di,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,b=d.clipIntersection,f=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const S=r?0:i,P=S*4;let y=p.clippingState||null;c.value=y,y=u(g,h,P,m);for(let C=0;C!==P;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,m,g){const b=d!==null?d.length:0;let f=null;if(b!==0){if(f=c.value,g!==!0||f===null){const p=m+b*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let P=0,y=m;P!==b;++P,y+=4)a.copy(d[P]).applyMatrix4(S,o),a.normal.toArray(f,y),f[y+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}const Fi=4,uu=[.125,.215,.35,.446,.526,.582],ts=20,C_=256,xr=new Bc,du=new Tt;let $o=null,Zo=0,Jo=0,jo=!1;const A_=new A;class pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=A_}=r;$o=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Zo,Jo),this._renderer.xr.enabled=jo,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:pi,format:In,colorSpace:Va,depthBuffer:!1},s=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P_(r)),this._blurMaterial=L_(r,t,e),this._ggxMaterial=R_(r,t,e)}return s}_compileMaterial(t){const e=new fe(new Oe,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,i,s,r){const c=new un(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(du),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new Un,new ro({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,f=b.material;let p=!1;const S=t.background;S?S.isColor&&(f.color.copy(S),t.background=null,p=!0):(f.color.copy(du),p=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[P],r.y,r.z)):y===1?(c.up.set(0,0,l[P]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[P],r.z)):(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[P]));const C=this._cubeSize;Os(s,y*C,P>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(b,c),d.render(t,c)}d.toneMapping=m,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===os||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Os(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,xr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,m=d*h,{_lodMax:g}=this,b=this._sizeLods[i],f=3*b*(i>g-Fi?i-g+Fi:0),p=4*(this._cubeSize-b);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=g-e,Os(r,f,p,3*b,2*b),s.setRenderTarget(r),s.render(o,xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Os(t,f,p,3*b,2*b),s.setRenderTarget(t),s.render(o,xr)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ts-1),b=r/g,f=isFinite(r)?1+Math.floor(u*b):ts;f>ts&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ts}`);const p=[];let S=0;for(let R=0;R<ts;++R){const _=R/b,w=Math.exp(-_*_/2);p.push(w),R===0?S+=w:R<f&&(S+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:P}=this;h.dTheta.value=g,h.mipInt.value=P-i;const y=this._sizeLods[s],C=3*y*(s>P-Fi?s-P+Fi:0),M=4*(this._cubeSize-y);Os(e,C,M,3*y,2*y),c.setRenderTarget(e),c.render(d,xr)}}function P_(n){const t=[],e=[],i=[];let s=n;const r=n-Fi+1+uu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Fi?c=uu[a-n+Fi-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,b=3,f=2,p=1,S=new Float32Array(b*g*m),P=new Float32Array(f*g*m),y=new Float32Array(p*g*m);for(let M=0;M<m;M++){const R=M%3*2/3-1,_=M>2?0:-1,w=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];S.set(w,b*g*M),P.set(h,f*g*M);const T=[M,M,M,M,M,M];y.set(T,p*g*M)}const C=new Oe;C.setAttribute("position",new nn(S,b)),C.setAttribute("uv",new nn(P,f)),C.setAttribute("faceIndex",new nn(y,p)),i.push(new fe(C,null)),s>Fi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function fu(n,t,e){const i=new Zn(n,t,e);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function R_(n,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function L_(n,t,e){const i=new Float32Array(ts),s=new A(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function mu(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function gu(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yd extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Un(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:ci});r.uniforms.tEquirect.value=e;const a=new fe(s,r),o=e.minFilter;return e.minFilter===ns&&(e.minFilter=We),new Nm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function D_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===xo||m===bo)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const b=new Yd(g.height);return b.fromEquirectangularTexture(n,h),t.set(h,b),h.addEventListener("dispose",l),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,g=m===xo||m===bo,b=m===os||m===tr;if(g||b){let f=e.get(h);const p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new pu(n)),f=g?i.fromEquirectangular(h,f):i.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{const S=h.image;return g&&S&&S.height>0||b&&S&&c(S)?(i===null&&(i=new pu(n)),f=g?i.fromEquirectangular(h):i.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,m){return m===xo?h.mapping=os:m===bo&&(h.mapping=tr),h}function c(h){let m=0;const g=6;for(let b=0;b<g;b++)h[b]!==void 0&&m++;return m===g}function l(h){const m=h.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function I_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&qs("WebGLRenderer: "+i+" extension not supported."),s}}}function U_(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const m in h)t.update(h[m],n.ARRAY_BUFFER)}function l(d){const h=[],m=d.index,g=d.attributes.position;let b=0;if(g===void 0)return;if(m!==null){const S=m.array;b=m.version;for(let P=0,y=S.length;P<y;P+=3){const C=S[P+0],M=S[P+1],R=S[P+2];h.push(C,M,M,R,R,C)}}else{const S=g.array;b=g.version;for(let P=0,y=S.length/3-1;P<y;P+=3){const C=P+0,M=P+1,R=P+2;h.push(C,M,M,R,R,C)}}const f=new(g.count>=65535?Nd:Ud)(h,1);f.version=b;const p=r.get(d);p&&t.remove(p),r.set(d,f)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function N_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function l(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,d*a,m),e.update(h,i,m))}function u(d,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let b=0;for(let f=0;f<m;f++)b+=h[f];e.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function F_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function O_(n,t,e){const i=new WeakMap,s=new me;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let T=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var m=T;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),b===!0&&(y=2),f===!0&&(y=3);let C=o.attributes.position.count*y,M=1;C>t.maxTextureSize&&(M=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*M*4*d),_=new Dd(R,C,M,d);_.type=Dn,_.needsUpdate=!0;const w=y*4;for(let L=0;L<d;L++){const D=p[L],B=S[L],Y=P[L],O=C*M*4*L;for(let K=0;K<D.count;K++){const H=K*w;g===!0&&(s.fromBufferAttribute(D,K),R[O+H+0]=s.x,R[O+H+1]=s.y,R[O+H+2]=s.z,R[O+H+3]=0),b===!0&&(s.fromBufferAttribute(B,K),R[O+H+4]=s.x,R[O+H+5]=s.y,R[O+H+6]=s.z,R[O+H+7]=0),f===!0&&(s.fromBufferAttribute(Y,K),R[O+H+8]=s.x,R[O+H+9]=s.y,R[O+H+10]=s.z,R[O+H+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Ot(C,M)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const b=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",b),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function B_(n,t,e,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const k_={[vd]:"LINEAR_TONE_MAPPING",[_d]:"REINHARD_TONE_MAPPING",[xd]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[yd]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function V_(n,t,e,i,s,r){const a=new Zn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new er(t,e):void 0}),o=new Zn(t,e,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Oe;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));const l=new Cm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new fe(c,l),d=new Bc(-1,1,1,-1,0,1);let h=null,m=null,g=!1,b,f=null,p=[],S=!1;this.setSize=function(P,y){a.setSize(P,y),o.setSize(P,y);for(let C=0;C<p.length;C++){const M=p[C];M.setSize&&M.setSize(P,y)}},this.setEffects=function(P){p=P,S=p.length>0&&p[0].isRenderPass===!0;const y=a.width,C=a.height;for(let M=0;M<p.length;M++){const R=p[M];R.setSize&&R.setSize(y,C)}},this.begin=function(P,y){if(g||P.toneMapping===$n&&p.length===0)return!1;if(f=y,y!==null){const C=y.width,M=y.height;(a.width!==C||a.height!==M)&&this.setSize(C,M)}return S===!1&&P.setRenderTarget(a),b=P.toneMapping,P.toneMapping=$n,!0},this.hasRenderPass=function(){return S},this.end=function(P,y){P.toneMapping=b,g=!0;let C=a,M=o;for(let R=0;R<p.length;R++){const _=p[R];if(_.enabled!==!1&&(_.render(P,M,C,y),_.needsSwap!==!1)){const w=C;C=M,M=w}}if(h!==P.outputColorSpace||m!==P.toneMapping){h=P.outputColorSpace,m=P.toneMapping,l.defines={},Gt.getTransfer(h)===ee&&(l.defines.SRGB_TRANSFER="");const R=k_[m];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=C.texture,P.setRenderTarget(f),P.render(u,d),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Kd=new Xe,cc=new er(1,1),$d=new Dd,Zd=new im,Jd=new kd,vu=[],_u=[],xu=new Float32Array(16),bu=new Float32Array(9),yu=new Float32Array(4);function sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ho(n,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function W_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function X_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),Ue(e,i)}}function q_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),Ue(e,i)}}function Y_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),Ue(e,i)}}function K_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function j_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function n0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cc.compareFunction=e.isReversedDepthBuffer()?Rc:Pc,r=cc):r=Kd,e.setTexture2D(t||r,s)}function i0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zd,s)}function s0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Jd,s)}function r0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$d,s)}function a0(n){switch(n){case 5126:return z_;case 35664:return H_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return j_;case 36294:return Q_;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function o0(n,t){n.uniform1fv(this.addr,t)}function l0(n,t){const e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function c0(n,t){const e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function h0(n,t){const e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function u0(n,t){const e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function d0(n,t){const e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function p0(n,t){const e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function f0(n,t){n.uniform1iv(this.addr,t)}function m0(n,t){n.uniform2iv(this.addr,t)}function g0(n,t){n.uniform3iv(this.addr,t)}function v0(n,t){n.uniform4iv(this.addr,t)}function _0(n,t){n.uniform1uiv(this.addr,t)}function x0(n,t){n.uniform2uiv(this.addr,t)}function b0(n,t){n.uniform3uiv(this.addr,t)}function y0(n,t){n.uniform4uiv(this.addr,t)}function w0(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=cc:a=Kd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function M0(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zd,r[a])}function S0(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jd,r[a])}function E0(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$d,r[a])}function T0(n){switch(n){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return f0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return _0;case 36294:return x0;case 36295:return b0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}class C0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=a0(e.type)}}class A0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}}class P0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function wu(n,t){n.seq.push(t),n.map[t.id]=t}function R0(n,t,e){const i=n.name,s=i.length;for(Qo.lastIndex=0;;){const r=Qo.exec(i),a=Qo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wu(e,l===void 0?new C0(o,n,t):new A0(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new P0(o),wu(e,d)),e=d}}}class Da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);R0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Mu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const L0=37297;let D0=0;function I0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Su=new It;function U0(n){Gt._getMatrix(Su,Gt.workingColorSpace,n);const t=`mat3( ${Su.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(n)){case za:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+I0(n.getShaderSource(t),o)}else return r}function N0(n,t){const e=U0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const F0={[vd]:"Linear",[_d]:"Reinhard",[xd]:"Cineon",[yc]:"ACESFilmic",[yd]:"AgX",[wd]:"Neutral",[bd]:"Custom"};function O0(n,t){const e=F0[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ea=new A;function B0(){Gt.getLuminanceCoefficients(Ea);const n=Ea.x.toFixed(4),t=Ea.y.toFixed(4),e=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function V0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function z0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Tr(n){return n!==""}function Tu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(n){return n.replace(H0,W0)}const G0=new Map;function W0(n,t){let e=Bt[t];if(e===void 0){const i=G0.get(t);if(i!==void 0)e=Bt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hc(e)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(X0,q0)}function q0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Y0={[Cr]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function K0(n){return Y0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $0={[os]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function Z0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const J0={[tr]:"ENVMAP_MODE_REFRACTION"};function j0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":J0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q0={[gd]:"ENVMAP_BLENDING_MULTIPLY",[Ff]:"ENVMAP_BLENDING_MIX",[Of]:"ENVMAP_BLENDING_ADD"};function tx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Q0[n.combine]||"ENVMAP_BLENDING_NONE"}function ex(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function nx(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=K0(e),l=Z0(e),u=j0(e),d=tx(e),h=ex(e),m=k0(e),g=V0(r),b=s.createProgram();let f,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(f=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Bt.tonemapping_pars_fragment:"",e.toneMapping!==$n?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),a=hc(a),a=Tu(a,e),a=Cu(a,e),o=hc(o),o=Tu(o,e),o=Cu(o,e),a=Au(a),o=Au(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=S+f+a,y=S+p+o,C=Mu(s,s.VERTEX_SHADER,P),M=Mu(s,s.FRAGMENT_SHADER,y);s.attachShader(b,C),s.attachShader(b,M),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(b)||"",B=s.getShaderInfoLog(C)||"",Y=s.getShaderInfoLog(M)||"",O=D.trim(),K=B.trim(),H=Y.trim();let j=!0,tt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,C,M);else{const ut=Eu(s,C,"vertex"),mt=Eu(s,M,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ut+`
`+mt)}else O!==""?Rt("WebGLProgram: Program Info Log:",O):(K===""||H==="")&&(tt=!1);tt&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:K,prefix:f},fragmentShader:{log:H,prefix:p}})}s.deleteShader(C),s.deleteShader(M),_=new Da(s,b),w=z0(s,b)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(b,L0)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=M,this}let ix=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new rx(t),e.set(t,i)),i}}class rx{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}}function ax(n){return n===ls||n===Ba||n===ka}function ox(n,t,e,i,s,r){const a=new Dc,o=new sx,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function b(_,w,T,L,D,B){const Y=L.fog,O=D.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||K,H),tt=j&&j.mapping===so?j.image.height:null,ut=m[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xt=mt!==void 0?mt.length:0;let $t=0;O.morphAttributes.position!==void 0&&($t=1),O.morphAttributes.normal!==void 0&&($t=2),O.morphAttributes.color!==void 0&&($t=3);let ve,Zt,J,st;if(ut){const bt=Wn[ut];ve=bt.vertexShader,Zt=bt.fragmentShader}else{ve=_.vertexShader,Zt=_.fragmentShader;const bt=o.getVertexShaderStage(_),xe=o.getFragmentShaderStage(_);o.update(_,bt,xe),J=bt.id,st=xe.id}const et=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Me=!!_.map,zt=!!_.matcap,se=!!j,Jt=!!_.aoMap,Xt=!!_.lightMap,Ce=!!_.bumpMap&&_.wireframe===!1,Le=!!_.normalMap,Ne=!!_.displacementMap,Be=!!_.emissiveMap,_e=!!_.metalnessMap,Ae=!!_.roughnessMap,U=_.anisotropy>0,Qe=_.clearcoat>0,te=_.dispersion>0,E=_.iridescence>0,v=_.sheen>0,F=_.transmission>0,z=U&&!!_.anisotropyMap,X=Qe&&!!_.clearcoatMap,nt=Qe&&!!_.clearcoatNormalMap,rt=Qe&&!!_.clearcoatRoughnessMap,q=E&&!!_.iridescenceMap,Z=E&&!!_.iridescenceThicknessMap,at=v&&!!_.sheenColorMap,Mt=v&&!!_.sheenRoughnessMap,ct=!!_.specularMap,ot=!!_.specularColorMap,Ct=!!_.specularIntensityMap,Pt=F&&!!_.transmissionMap,Nt=F&&!!_.thicknessMap,I=!!_.gradientMap,it=!!_.alphaMap,$=_.alphaTest>0,lt=!!_.alphaHash,ft=!!_.extensions;let Q=$n;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Q=n.toneMapping);const wt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:Zt,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:st,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:zt,envMap:se,envMapMode:se&&j.mapping,envMapCubeUVHeight:tt,aoMap:Jt,lightMap:Xt,bumpMap:Ce,normalMap:Le,displacementMap:Ne,emissiveMap:Be,normalMapObjectSpace:Le&&_.normalMapType===Vf,normalMapTangentSpace:Le&&_.normalMapType===ic,packedNormalMap:Le&&_.normalMapType===ic&&ax(_.normalMap.format),metalnessMap:_e,roughnessMap:Ae,anisotropy:U,anisotropyMap:z,clearcoat:Qe,clearcoatMap:X,clearcoatNormalMap:nt,clearcoatRoughnessMap:rt,dispersion:te,iridescence:E,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:v,sheenColorMap:at,sheenRoughnessMap:Mt,specularMap:ct,specularColorMap:ot,specularIntensityMap:Ct,transmission:F,transmissionMap:Pt,thicknessMap:Nt,gradientMap:I,opaque:_.transparent===!1&&_.blending===Xs&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:$,alphaHash:lt,combine:_.combine,mapUv:Me&&g(_.map.channel),aoMapUv:Jt&&g(_.aoMap.channel),lightMapUv:Xt&&g(_.lightMap.channel),bumpMapUv:Ce&&g(_.bumpMap.channel),normalMapUv:Le&&g(_.normalMap.channel),displacementMapUv:Ne&&g(_.displacementMap.channel),emissiveMapUv:Be&&g(_.emissiveMap.channel),metalnessMapUv:_e&&g(_.metalnessMap.channel),roughnessMapUv:Ae&&g(_.roughnessMap.channel),anisotropyMapUv:z&&g(_.anisotropyMap.channel),clearcoatMapUv:X&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(_.sheenRoughnessMap.channel),specularMapUv:ct&&g(_.specularMap.channel),specularColorMapUv:ot&&g(_.specularColorMap.channel),specularIntensityMapUv:Ct&&g(_.specularIntensityMap.channel),transmissionMapUv:Pt&&g(_.transmissionMap.channel),thicknessMapUv:Nt&&g(_.thicknessMap.channel),alphaMapUv:it&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Le||U),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Me||it),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Dt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:$t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&Gt.getTransfer(_.map.colorSpace)===ee,decodeVideoTextureEmissive:Be&&_.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(_.emissiveMap.colorSpace)===ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xn,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)w.push(T),w.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(w,_),S(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){const w=m[_.type];let T;if(w){const L=Wn[w];T=Sm.clone(L.uniforms)}else T=_.uniforms;return T}function y(_,w){let T=u.get(w);return T!==void 0?++T.usedTimes:(T=new nx(n,w,_,s),l.push(T),u.set(w,T)),T}function C(_){if(--_.usedTimes===0){const w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function R(){o.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:P,acquireProgram:y,releaseProgram:C,releaseShaderCache:M,programs:l,dispose:R}}function lx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ru(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Lu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,b,f,p){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:f,group:p},n[t]=S):(S.id=h.id,S.object=h,S.geometry=m,S.material=g,S.materialVariant=a(h),S.groupOrder=b,S.renderOrder=h.renderOrder,S.z=f,S.group=p),t++,S}function c(h,m,g,b,f,p){const S=o(h,m,g,b,f,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(h,m,g,b,f,p){const S=o(h,m,g,b,f,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,m,g){e.length>1&&e.sort(h||cx),i.length>1&&i.sort(m||Ru),s.length>1&&s.sort(m||Ru),g&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,m=n.length;h<m;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function hx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Lu,n.set(i,[a])):s>=r.length?(a=new Lu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ux(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Tt};break;case"SpotLight":e={position:new A,direction:new A,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let px=0;function fx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mx(n){const t=new ux,e=dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const s=new A,r=new jt,a=new jt;function o(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,b=0,f=0,p=0,S=0,P=0,y=0,C=0,M=0,R=0;l.sort(fx);for(let w=0,T=l.length;w<T;w++){const L=l[w],D=L.color,B=L.intensity,Y=L.distance;let O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=D.r*B,d+=D.g*B,h+=D.b*B;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],B);R++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,j=e.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=K,m++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(D).multiplyScalar(B),K.distance=Y,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[b]=K;const H=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[b]=H.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=O,y++}b++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(D).multiplyScalar(B),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[f]=K,f++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const H=L.shadow,j=e.get(L);j.shadowIntensity=H.intensity,j.shadowBias=H.bias,j.shadowNormalBias=H.normalBias,j.shadowRadius=H.radius,j.shadowMapSize=H.mapSize,j.shadowCameraNear=H.camera.near,j.shadowCameraFar=H.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=L.shadow.matrix,P++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(B),K.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[p]=K,p++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==m||_.pointLength!==g||_.spotLength!==b||_.rectAreaLength!==f||_.hemiLength!==p||_.numDirectionalShadows!==S||_.numPointShadows!==P||_.numSpotShadows!==y||_.numSpotMaps!==C||_.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=f,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=y+C-M,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,_.directionalLength=m,_.pointLength=g,_.spotLength=b,_.rectAreaLength=f,_.hemiLength=p,_.numDirectionalShadows=S,_.numPointShadows=P,_.numSpotShadows=y,_.numSpotMaps=C,_.numLightProbes=R,i.version=px++)}function c(l,u){let d=0,h=0,m=0,g=0,b=0;const f=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const P=l[p];if(P.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(P.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(P.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(P.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(P.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(P.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(P.width*.5,0,0),y.halfHeight.set(0,P.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(P.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(P.matrixWorld),y.position.applyMatrix4(f),h++}else if(P.isHemisphereLight){const y=i.hemi[b];y.direction.setFromMatrixPosition(P.matrixWorld),y.direction.transformDirection(f),b++}}}return{setup:o,setupView:c,state:i}}function Du(n){const t=new mx(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function gx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Du(n),t.set(s,[o])):r>=a.length?(o=new Du(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],bx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Iu=new jt,br=new A,tl=new A;function yx(n,t,e){let i=new Nc;const s=new Ot,r=new Ot,a=new me,o=new Am,c=new Pm,l={},u=e.maxTextureSize,d={[zi]:Ze,[Ze]:zi,[Xn]:Xn},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:vx,fragmentShader:_x}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new fe(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let p=this.type;this.render=function(M,R,_){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;this.type===vf&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cr);const w=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(O=>O.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,O=M.length;Y<O;Y++){const K=M[Y],H=K.shadow;if(H===void 0){Rt("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));const tt=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=tt,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Er){if(K.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zn(s.x,s.y,{format:ls,type:pi,minFilter:We,magFilter:We,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new er(s.x,s.y,Dn),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=fi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke}else K.isPointLight?(H.map=new Yd(s.x),H.map.depthTexture=new wm(s.x,Jn)):(H.map=new Zn(s.x,s.y),H.map.depthTexture=new er(s.x,s.y,Jn)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=fi,this.type===Cr?(H.map.depthTexture.compareFunction=tt?Rc:Pc,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke);H.camera.updateProjectionMatrix()}const ut=H.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ut;mt++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,mt),n.clear();else{mt===0&&(n.setRenderTarget(H.map),n.clear());const xt=H.getViewport(mt);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),D.viewport(a)}if(K.isPointLight){const xt=H.camera,$t=H.matrix,ve=K.distance||xt.far;ve!==xt.far&&(xt.far=ve,xt.updateProjectionMatrix()),br.setFromMatrixPosition(K.matrixWorld),xt.position.copy(br),tl.copy(xt.position),tl.add(xx[mt]),xt.up.copy(bx[mt]),xt.lookAt(tl),xt.updateMatrixWorld(),$t.makeTranslation(-br.x,-br.y,-br.z),Iu.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Iu,xt.coordinateSystem,xt.reversedDepth)}else H.updateMatrices(K);i=H.getFrustum(),y(R,_,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Er&&S(H,_),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(w,T,L)};function S(M,R){const _=t.update(b);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zn(s.x,s.y,{format:ls,type:pi})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,b,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,_,m,b,null)}function P(M,R,_,w){let T=null;const L=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)T=L;else if(T=_.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=T.uuid,B=R.uuid;let Y=l[D];Y===void 0&&(Y={},l[D]=Y);let O=Y[B];O===void 0&&(O=T.clone(),Y[B]=O,R.addEventListener("dispose",C)),T=O}if(T.visible=R.visible,T.wireframe=R.wireframe,w===Er?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:d[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=n.properties.get(T);D.light=_}return T}function y(M,R,_,w,T){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Er)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const B=t.update(M),Y=M.material;if(Array.isArray(Y)){const O=B.groups;for(let K=0,H=O.length;K<H;K++){const j=O[K],tt=Y[j.materialIndex];if(tt&&tt.visible){const ut=P(M,tt,w,T);M.onBeforeShadow(n,M,R,_,B,ut,j),n.renderBufferDirect(_,null,B,ut,M,j),M.onAfterShadow(n,M,R,_,B,ut,j)}}}else if(Y.visible){const O=P(M,Y,w,T);M.onBeforeShadow(n,M,R,_,B,O,null),n.renderBufferDirect(_,null,B,O,M,null),M.onAfterShadow(n,M,R,_,B,O,null)}}const D=M.children;for(let B=0,Y=D.length;B<Y;B++)y(D[B],R,_,w,T)}function C(M){M.target.removeEventListener("dispose",C);for(const _ in l){const w=l[_],T=M.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function wx(n,t){function e(){let I=!1;const it=new me;let $=null;const lt=new me(0,0,0,0);return{setMask:function(ft){$!==ft&&!I&&(n.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){I=ft},setClear:function(ft,Q,wt,bt,xe){xe===!0&&(ft*=bt,Q*=bt,wt*=bt),it.set(ft,Q,wt,bt),lt.equals(it)===!1&&(n.clearColor(ft,Q,wt,bt),lt.copy(it))},reset:function(){I=!1,$=null,lt.set(-1,0,0,0)}}}function i(){let I=!1,it=!1,$=null,lt=null,ft=null;return{setReversed:function(Q){if(it!==Q){const wt=t.get("EXT_clip_control");Q?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),it=Q;const bt=ft;ft=null,this.setClear(bt)}},getReversed:function(){return it},setTest:function(Q){Q?et(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(Q){$!==Q&&!I&&(n.depthMask(Q),$=Q)},setFunc:function(Q){if(it&&(Q=Zf[Q]),lt!==Q){switch(Q){case xl:n.depthFunc(n.NEVER);break;case bl:n.depthFunc(n.ALWAYS);break;case yl:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case wl:n.depthFunc(n.EQUAL);break;case Ml:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Q}},setLocked:function(Q){I=Q},setClear:function(Q){ft!==Q&&(ft=Q,it&&(Q=1-Q),n.clearDepth(Q))},reset:function(){I=!1,$=null,lt=null,ft=null,it=!1}}}function s(){let I=!1,it=null,$=null,lt=null,ft=null,Q=null,wt=null,bt=null,xe=null;return{setTest:function(oe){I||(oe?et(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(oe){it!==oe&&!I&&(n.stencilMask(oe),it=oe)},setFunc:function(oe,Nn,Fn){($!==oe||lt!==Nn||ft!==Fn)&&(n.stencilFunc(oe,Nn,Fn),$=oe,lt=Nn,ft=Fn)},setOp:function(oe,Nn,Fn){(Q!==oe||wt!==Nn||bt!==Fn)&&(n.stencilOp(oe,Nn,Fn),Q=oe,wt=Nn,bt=Fn)},setLocked:function(oe){I=oe},setClear:function(oe){xe!==oe&&(n.clearStencil(oe),xe=oe)},reset:function(){I=!1,it=null,$=null,lt=null,ft=null,Q=null,wt=null,bt=null,xe=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},m=new WeakMap,g=[],b=null,f=!1,p=null,S=null,P=null,y=null,C=null,M=null,R=null,_=new Tt(0,0,0),w=0,T=!1,L=null,D=null,B=null,Y=null,O=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),H=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),H=j>=2);let ut=null,mt={};const xt=n.getParameter(n.SCISSOR_BOX),$t=n.getParameter(n.VIEWPORT),ve=new me().fromArray(xt),Zt=new me().fromArray($t);function J(I,it,$,lt){const ft=new Uint8Array(4),Q=n.createTexture();n.bindTexture(I,Q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<$;wt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(it+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return Q}const st={};st[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(Qs),Ce(!1),Le(Ch),et(n.CULL_FACE),Jt(ci);function et(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Dt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ut(I,it){return h[I]!==it?(n.bindFramebuffer(I,it),h[I]=it,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=it),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=it),!0):!1}function At(I,it){let $=g,lt=!1;if(I){$=m.get(it),$===void 0&&($=[],m.set(it,$));const ft=I.textures;if($.length!==ft.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,wt=ft.length;Q<wt;Q++)$[Q]=n.COLOR_ATTACHMENT0+Q;$.length=ft.length,lt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,lt=!0);lt&&n.drawBuffers($)}function Me(I){return b!==I?(n.useProgram(I),b=I,!0):!1}const zt={[Qi]:n.FUNC_ADD,[xf]:n.FUNC_SUBTRACT,[bf]:n.FUNC_REVERSE_SUBTRACT};zt[yf]=n.MIN,zt[wf]=n.MAX;const se={[Mf]:n.ZERO,[Sf]:n.ONE,[Ef]:n.SRC_COLOR,[vl]:n.SRC_ALPHA,[Lf]:n.SRC_ALPHA_SATURATE,[Pf]:n.DST_COLOR,[Cf]:n.DST_ALPHA,[Tf]:n.ONE_MINUS_SRC_COLOR,[_l]:n.ONE_MINUS_SRC_ALPHA,[Rf]:n.ONE_MINUS_DST_COLOR,[Af]:n.ONE_MINUS_DST_ALPHA,[Df]:n.CONSTANT_COLOR,[If]:n.ONE_MINUS_CONSTANT_COLOR,[Uf]:n.CONSTANT_ALPHA,[Nf]:n.ONE_MINUS_CONSTANT_ALPHA};function Jt(I,it,$,lt,ft,Q,wt,bt,xe,oe){if(I===ci){f===!0&&(Dt(n.BLEND),f=!1);return}if(f===!1&&(et(n.BLEND),f=!0),I!==_f){if(I!==p||oe!==T){if((S!==Qi||C!==Qi)&&(n.blendEquation(n.FUNC_ADD),S=Qi,C=Qi),oe)switch(I){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",I);break}else switch(I){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ah:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",I);break}P=null,y=null,M=null,R=null,_.set(0,0,0),w=0,p=I,T=oe}return}ft=ft||it,Q=Q||$,wt=wt||lt,(it!==S||ft!==C)&&(n.blendEquationSeparate(zt[it],zt[ft]),S=it,C=ft),($!==P||lt!==y||Q!==M||wt!==R)&&(n.blendFuncSeparate(se[$],se[lt],se[Q],se[wt]),P=$,y=lt,M=Q,R=wt),(bt.equals(_)===!1||xe!==w)&&(n.blendColor(bt.r,bt.g,bt.b,xe),_.copy(bt),w=xe),p=I,T=!1}function Xt(I,it){I.side===Xn?Dt(n.CULL_FACE):et(n.CULL_FACE);let $=I.side===Ze;it&&($=!$),Ce($),I.blending===Xs&&I.transparent===!1?Jt(ci):Jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const lt=I.stencilWrite;o.setTest(lt),lt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function Le(I){I!==mf?(et(n.CULL_FACE),I!==D&&(I===Ch?n.cullFace(n.BACK):I===gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),D=I}function Ne(I){I!==B&&(H&&n.lineWidth(I),B=I)}function Be(I,it,$){I?(et(n.POLYGON_OFFSET_FILL),(Y!==it||O!==$)&&(Y=it,O=$,a.getReversed()&&(it=-it),n.polygonOffset(it,$))):Dt(n.POLYGON_OFFSET_FILL)}function _e(I){I?et(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function Ae(I){I===void 0&&(I=n.TEXTURE0+K-1),ut!==I&&(n.activeTexture(I),ut=I)}function U(I,it,$){$===void 0&&(ut===null?$=n.TEXTURE0+K-1:$=ut);let lt=mt[$];lt===void 0&&(lt={type:void 0,texture:void 0},mt[$]=lt),(lt.type!==I||lt.texture!==it)&&(ut!==$&&(n.activeTexture($),ut=$),n.bindTexture(I,it||st[I]),lt.type=I,lt.texture=it)}function Qe(){const I=mt[ut];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{n.compressedTexImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function v(){try{n.texSubImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function F(){try{n.texSubImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function nt(){try{n.texStorage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function rt(){try{n.texStorage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function q(){try{n.texImage2D(...arguments)}catch(I){Ht("WebGLState:",I)}}function Z(){try{n.texImage3D(...arguments)}catch(I){Ht("WebGLState:",I)}}function at(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function Mt(I,it){d[I]!==it&&(n.pixelStorei(I,it),d[I]=it)}function ct(I){ve.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ve.copy(I))}function ot(I){Zt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Zt.copy(I))}function Ct(I,it){let $=l.get(it);$===void 0&&($=new WeakMap,l.set(it,$));let lt=$.get(I);lt===void 0&&(lt=n.getUniformBlockIndex(it,I.name),$.set(I,lt))}function Pt(I,it){const lt=l.get(it).get(I);c.get(it)!==lt&&(n.uniformBlockBinding(it,lt,I.__bindingPointIndex),c.set(it,lt))}function Nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ut=null,mt={},h={},m=new WeakMap,g=[],b=null,f=!1,p=null,S=null,P=null,y=null,C=null,M=null,R=null,_=new Tt(0,0,0),w=0,T=!1,L=null,D=null,B=null,Y=null,O=null,ve.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Dt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Me,setBlending:Jt,setMaterial:Xt,setFlipSided:Ce,setCullFace:Le,setLineWidth:Ne,setPolygonOffset:Be,setScissorTest:_e,activeTexture:Ae,bindTexture:U,unbindTexture:Qe,compressedTexImage2D:te,compressedTexImage3D:E,texImage2D:q,texImage3D:Z,pixelStorei:Mt,getParameter:at,updateUBOMapping:Ct,uniformBlockBinding:Pt,texStorage2D:nt,texStorage3D:rt,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:X,scissor:ct,viewport:ot,reset:Nt}}function Mx(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return g?new OffscreenCanvas(E,v):Ha("canvas")}function f(E,v,F){let z=1;const X=te(E);if((X.width>F||X.height>F)&&(z=F/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const nt=Math.floor(z*X.width),rt=Math.floor(z*X.height);h===void 0&&(h=b(nt,rt));const q=v?b(nt,rt):h;return q.width=nt,q.height=rt,q.getContext("2d").drawImage(E,0,0,nt,rt),Rt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+nt+"x"+rt+")."),q}else return"data"in E&&Rt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,v,F,z,X,nt=!1){if(E!==null){if(n[E]!==void 0)return n[E];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let rt;z&&(rt=t.get("EXT_texture_norm16"),rt||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8),F===n.UNSIGNED_SHORT&&rt&&(q=rt.R16_EXT),F===n.SHORT&&rt&&(q=rt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),v===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8),F===n.UNSIGNED_SHORT&&rt&&(q=rt.RG16_EXT),F===n.SHORT&&rt&&(q=rt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(F===n.UNSIGNED_SHORT&&rt&&(q=rt.RGB16_EXT),F===n.SHORT&&rt&&(q=rt.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const Z=nt?za:Gt.getTransfer(X);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=Z===ee?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&rt&&(q=rt.RGBA16_EXT),F===n.SHORT&&rt&&(q=rt.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function C(E,v){let F;return E?v===null||v===Jn||v===Pr?F=n.DEPTH24_STENCIL8:v===Dn?F=n.DEPTH32F_STENCIL8:v===Ar&&(F=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===Pr?F=n.DEPTH_COMPONENT24:v===Dn?F=n.DEPTH_COMPONENT32F:v===Ar&&(F=n.DEPTH_COMPONENT16),F}function M(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ke&&E.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),w(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function _(E){const v=E.target;v.removeEventListener("dispose",_),L(v)}function w(E){const v=i.get(E);if(v.__webglInit===void 0)return;const F=E.source,z=m.get(F);if(z){const X=z[v.__cacheKey];X.usedTimes--,X.usedTimes===0&&T(E),Object.keys(z).length===0&&m.delete(F)}i.remove(E)}function T(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const F=E.source,z=m.get(F);delete z[v.__cacheKey],a.memory.textures--}function L(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let X=0;X<v.__webglFramebuffer[z].length;X++)n.deleteFramebuffer(v.__webglFramebuffer[z][X]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let z=0,X=F.length;z<X;z++){const nt=i.get(F[z]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),a.memory.textures--),i.remove(F[z])}i.remove(E)}let D=0;function B(){D=0}function Y(){return D}function O(E){D=E}function K(){const E=D;return E>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function H(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function j(E,v){const F=i.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const z=E.image;if(z===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(F,E,v);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function tt(E,v){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Dt(F,E,v);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function ut(E,v){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Dt(F,E,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function mt(E,v){const F=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Ut(F,E,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const xt={[Oa]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},$t={[ke]:n.NEAREST,[Bf]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[yo]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},ve={[zf]:n.NEVER,[qf]:n.ALWAYS,[Hf]:n.LESS,[Pc]:n.LEQUAL,[Gf]:n.EQUAL,[Rc]:n.GEQUAL,[Wf]:n.GREATER,[Xf]:n.NOTEQUAL};function Zt(E,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===We||v.magFilter===yo||v.magFilter===jr||v.magFilter===ns||v.minFilter===We||v.minFilter===yo||v.minFilter===jr||v.minFilter===ns)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xt[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xt[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xt[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,$t[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,$t[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==jr&&v.minFilter!==ns||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function J(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const z=v.source;let X=m.get(z);X===void 0&&(X={},m.set(z,X));const nt=H(v);if(nt!==E.__cacheKey){X[nt]===void 0&&(X[nt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[nt].usedTimes++;const rt=X[E.__cacheKey];rt!==void 0&&(X[E.__cacheKey].usedTimes--,rt.usedTimes===0&&T(v)),E.__cacheKey=nt,E.__webglTexture=X[nt].texture}return F}function st(E,v,F){return Math.floor(Math.floor(E/F)/v)}function et(E,v,F,z){const nt=E.updateRanges;if(nt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,F,z,v.data);else{nt.sort((Mt,ct)=>Mt.start-ct.start);let rt=0;for(let Mt=1;Mt<nt.length;Mt++){const ct=nt[rt],ot=nt[Mt],Ct=ct.start+ct.count,Pt=st(ot.start,v.width,4),Nt=st(ct.start,v.width,4);ot.start<=Ct+1&&Pt===Nt&&st(ot.start+ot.count-1,v.width,4)===Pt?ct.count=Math.max(ct.count,ot.start+ot.count-ct.start):(++rt,nt[rt]=ot)}nt.length=rt+1;const q=e.getParameter(n.UNPACK_ROW_LENGTH),Z=e.getParameter(n.UNPACK_SKIP_PIXELS),at=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Mt=0,ct=nt.length;Mt<ct;Mt++){const ot=nt[Mt],Ct=Math.floor(ot.start/4),Pt=Math.ceil(ot.count/4),Nt=Ct%v.width,I=Math.floor(Ct/v.width),it=Pt,$=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Nt,I,it,$,F,z,v.data)}E.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(n.UNPACK_SKIP_ROWS,at)}}function Dt(E,v,F){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const X=J(E,v),nt=v.source;e.bindTexture(z,E.__webglTexture,n.TEXTURE0+F);const rt=i.get(nt);if(nt.version!==rt.__version||X===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const $=Gt.getPrimaries(Gt.workingColorSpace),lt=v.colorSpace===Ui?null:Gt.getPrimaries(v.colorSpace),ft=v.colorSpace===Ui||$===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=f(v.image,!1,s.maxTextureSize);Z=Qe(v,Z);const at=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type);let ct=y(v.internalFormat,at,Mt,v.normalized,v.colorSpace,v.isVideoTexture);Zt(z,v);let ot;const Ct=v.mipmaps,Pt=v.isVideoTexture!==!0,Nt=rt.__version===void 0||X===!0,I=nt.dataReady,it=M(v,Z);if(v.isDepthTexture)ct=C(v.format===is,v.type),Nt&&(Pt?e.texStorage2D(n.TEXTURE_2D,1,ct,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,ct,Z.width,Z.height,0,at,Mt,null));else if(v.isDataTexture)if(Ct.length>0){Pt&&Nt&&e.texStorage2D(n.TEXTURE_2D,it,ct,Ct[0].width,Ct[0].height);for(let $=0,lt=Ct.length;$<lt;$++)ot=Ct[$],Pt?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(n.TEXTURE_2D,$,ct,ot.width,ot.height,0,at,Mt,ot.data);v.generateMipmaps=!1}else Pt?(Nt&&e.texStorage2D(n.TEXTURE_2D,it,ct,Z.width,Z.height),I&&et(v,Z,at,Mt)):e.texImage2D(n.TEXTURE_2D,0,ct,Z.width,Z.height,0,at,Mt,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pt&&Nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,ct,Ct[0].width,Ct[0].height,Z.depth);for(let $=0,lt=Ct.length;$<lt;$++)if(ot=Ct[$],v.format!==In)if(at!==null)if(Pt){if(I)if(v.layerUpdates.size>0){const ft=hu(ot.width,ot.height,v.format,v.type);for(const Q of v.layerUpdates){const wt=ot.data.subarray(Q*ft/ot.data.BYTES_PER_ELEMENT,(Q+1)*ft/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Q,ot.width,ot.height,1,at,wt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,Z.depth,at,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ct,ot.width,ot.height,Z.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,Z.depth,at,Mt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,ct,ot.width,ot.height,Z.depth,0,at,Mt,ot.data)}else{Pt&&Nt&&e.texStorage2D(n.TEXTURE_2D,it,ct,Ct[0].width,Ct[0].height);for(let $=0,lt=Ct.length;$<lt;$++)ot=Ct[$],v.format!==In?at!==null?Pt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,$,ct,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(n.TEXTURE_2D,$,ct,ot.width,ot.height,0,at,Mt,ot.data)}else if(v.isDataArrayTexture)if(Pt){if(Nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,ct,Z.width,Z.height,Z.depth),I)if(v.layerUpdates.size>0){const $=hu(Z.width,Z.height,v.format,v.type);for(const lt of v.layerUpdates){const ft=Z.data.subarray(lt*$/Z.data.BYTES_PER_ELEMENT,(lt+1)*$/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,Z.width,Z.height,1,at,Mt,ft)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,at,Mt,Z.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,Z.width,Z.height,Z.depth,0,at,Mt,Z.data);else if(v.isData3DTexture)Pt?(Nt&&e.texStorage3D(n.TEXTURE_3D,it,ct,Z.width,Z.height,Z.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,at,Mt,Z.data)):e.texImage3D(n.TEXTURE_3D,0,ct,Z.width,Z.height,Z.depth,0,at,Mt,Z.data);else if(v.isFramebufferTexture){if(Nt)if(Pt)e.texStorage2D(n.TEXTURE_2D,it,ct,Z.width,Z.height);else{let $=Z.width,lt=Z.height;for(let ft=0;ft<it;ft++)e.texImage2D(n.TEXTURE_2D,ft,ct,$,lt,0,at,Mt,null),$>>=1,lt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Z.parentNode!==$){$.appendChild(Z),d.add(v),$.onpaint=lt=>{const ft=lt.changedElements;for(const Q of d)ft.includes(Q.image)&&(Q.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const ft=n.RGBA,Q=n.RGBA,wt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ft,Q,wt,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Pt&&Nt){const $=te(Ct[0]);e.texStorage2D(n.TEXTURE_2D,it,ct,$.width,$.height)}for(let $=0,lt=Ct.length;$<lt;$++)ot=Ct[$],Pt?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,at,Mt,ot):e.texImage2D(n.TEXTURE_2D,$,ct,at,Mt,ot);v.generateMipmaps=!1}else if(Pt){if(Nt){const $=te(Z);e.texStorage2D(n.TEXTURE_2D,it,ct,$.width,$.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at,Mt,Z)}else e.texImage2D(n.TEXTURE_2D,0,ct,at,Mt,Z);p(v)&&S(z),rt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ut(E,v,F){if(v.image.length!==6)return;const z=J(E,v),X=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const nt=i.get(X);if(X.version!==nt.__version||z===!0){e.activeTexture(n.TEXTURE0+F);const rt=Gt.getPrimaries(Gt.workingColorSpace),q=v.colorSpace===Ui?null:Gt.getPrimaries(v.colorSpace),Z=v.colorSpace===Ui||rt===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const at=v.isCompressedTexture||v.image[0].isCompressedTexture,Mt=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let Q=0;Q<6;Q++)!at&&!Mt?ct[Q]=f(v.image[Q],!0,s.maxCubemapSize):ct[Q]=Mt?v.image[Q].image:v.image[Q],ct[Q]=Qe(v,ct[Q]);const ot=ct[0],Ct=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type),Nt=y(v.internalFormat,Ct,Pt,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,it=nt.__version===void 0||z===!0,$=X.dataReady;let lt=M(v,ot);Zt(n.TEXTURE_CUBE_MAP,v);let ft;if(at){I&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Nt,ot.width,ot.height);for(let Q=0;Q<6;Q++){ft=ct[Q].mipmaps;for(let wt=0;wt<ft.length;wt++){const bt=ft[wt];v.format!==In?Ct!==null?I?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,bt.width,bt.height,Ct,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,Nt,bt.width,bt.height,0,bt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,0,0,bt.width,bt.height,Ct,Pt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt,Nt,bt.width,bt.height,0,Ct,Pt,bt.data)}}}else{if(ft=v.mipmaps,I&&it){ft.length>0&&lt++;const Q=te(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Mt){I?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ct[Q].width,ct[Q].height,Ct,Pt,ct[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Nt,ct[Q].width,ct[Q].height,0,Ct,Pt,ct[Q].data);for(let wt=0;wt<ft.length;wt++){const xe=ft[wt].image[Q].image;I?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,xe.width,xe.height,Ct,Pt,xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,Nt,xe.width,xe.height,0,Ct,Pt,xe.data)}}else{I?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct,Pt,ct[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Nt,Ct,Pt,ct[Q]);for(let wt=0;wt<ft.length;wt++){const bt=ft[wt];I?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,0,0,Ct,Pt,bt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt+1,Nt,Ct,Pt,bt.image[Q])}}}p(v)&&S(n.TEXTURE_CUBE_MAP),nt.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function At(E,v,F,z,X,nt){const rt=r.convert(F.format,F.colorSpace),q=r.convert(F.type),Z=y(F.internalFormat,rt,q,F.normalized,F.colorSpace),at=i.get(v),Mt=i.get(F);if(Mt.__renderTarget=v,!at.__hasExternalTextures){const ct=Math.max(1,v.width>>nt),ot=Math.max(1,v.height>>nt);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?e.texImage3D(X,nt,Z,ct,ot,v.depth,0,rt,q,null):e.texImage2D(X,nt,Z,ct,ot,0,rt,q,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,X,Mt.__webglTexture,0,_e(v)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,X,Mt.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(E,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const z=v.depthTexture,X=z&&z.isDepthTexture?z.type:null,nt=C(v.stencilBuffer,X),rt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(v),nt,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(v),nt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,nt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,E)}else{const z=v.textures;for(let X=0;X<z.length;X++){const nt=z[X],rt=r.convert(nt.format,nt.colorSpace),q=r.convert(nt.type),Z=y(nt.internalFormat,rt,q,nt.normalized,nt.colorSpace);Ae(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e(v),Z,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e(v),Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(E,v,F){const z=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(v.depthTexture);if(X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if(X.__webglInit===void 0&&(X.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,v.depthTexture);const at=r.convert(v.depthTexture.format),Mt=r.convert(v.depthTexture.type);let ct;v.depthTexture.format===fi?ct=n.DEPTH_COMPONENT24:v.depthTexture.format===is&&(ct=n.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ct,v.width,v.height,0,at,Mt,null)}}else j(v.depthTexture,0);const nt=X.__webglTexture,rt=_e(v),q=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Z=v.depthTexture.format===is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===fi)Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,nt,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,nt,0);else if(v.depthTexture.format===is)Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,nt,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(E){const v=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const X=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),v.__depthDisposeCallback=X}v.__boundDepthTexture=z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)zt(v.__webglFramebuffer[z],E,z);else{const z=E.texture.mipmaps;z&&z.length>0?zt(v.__webglFramebuffer[0],E,0):zt(v.__webglFramebuffer,E,0)}else if(F){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),Me(v.__webglDepthbuffer[z],E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,nt)}}else{const z=E.texture.mipmaps;if(z&&z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Me(v.__webglDepthbuffer,E,!1);else{const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,nt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(E,v,F){const z=i.get(E);v!==void 0&&At(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&se(E)}function Xt(E){const v=E.texture,F=i.get(E),z=i.get(v);E.addEventListener("dispose",_);const X=E.textures,nt=E.isWebGLCubeRenderTarget===!0,rt=X.length>1;if(rt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,a.memory.textures++),nt){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let Z=0;Z<v.mipmaps.length;Z++)F.__webglFramebuffer[q][Z]=n.createFramebuffer()}else F.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)F.__webglFramebuffer[q]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(rt)for(let q=0,Z=X.length;q<Z;q++){const at=i.get(X[q]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ae(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const Z=X[q];F.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[q]);const at=r.convert(Z.format,Z.colorSpace),Mt=r.convert(Z.type),ct=y(Z.internalFormat,at,Mt,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),ot=_e(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,ct,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,F.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)At(F.__webglFramebuffer[q][Z],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else At(F.__webglFramebuffer[q],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(v)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let q=0,Z=X.length;q<Z;q++){const at=X[q],Mt=i.get(at);let ct=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Mt.__webglTexture),Zt(ct,at),At(F.__webglFramebuffer,E,at,n.COLOR_ATTACHMENT0+q,ct,0),p(at)&&S(ct)}e.unbindTexture()}else{let q=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(q,z.__webglTexture),Zt(q,v),v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)At(F.__webglFramebuffer[Z],E,v,n.COLOR_ATTACHMENT0,q,Z);else At(F.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,q,0);p(v)&&S(q),e.unbindTexture()}E.depthBuffer&&se(E)}function Ce(E){const v=E.textures;for(let F=0,z=v.length;F<z;F++){const X=v[F];if(p(X)){const nt=P(E),rt=i.get(X).__webglTexture;e.bindTexture(nt,rt),S(nt),e.unbindTexture()}}}const Le=[],Ne=[];function Be(E){if(E.samples>0){if(Ae(E)===!1){const v=E.textures,F=E.width,z=E.height;let X=n.COLOR_BUFFER_BIT;const nt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=i.get(E),q=v.length>1;if(q)for(let at=0;at<v.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);const Z=E.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<v.length;at++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const Mt=i.get(v[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,F,z,0,0,F,z,X,n.NEAREST),c===!0&&(Le.length=0,Ne.length=0,Le.push(n.COLOR_ATTACHMENT0+at),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Le.push(nt),Ne.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let at=0;at<v.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const Mt=i.get(v[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,Mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function _e(E){return Math.min(s.maxSamples,E.samples)}function Ae(E){const v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(E){const v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Qe(E,v){const F=E.colorSpace,z=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Va&&F!==Ui&&(Gt.getTransfer(F)===ee?(z!==In||X!==dn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",F)),v}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.getTextureUnits=Y,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=ut,this.setTextureCube=mt,this.rebindTextures=Jt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Sx(n,t){function e(i,s=Ui){let r;const a=Gt.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sd)return n.BYTE;if(i===Ed)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===wc)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Ad)return n.ALPHA;if(i===Pd)return n.RGB;if(i===In)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===Ec)return n.RED;if(i===Tc)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===Cc)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===Aa||i===Pa||i===Ra||i===La)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Al||i===Pl||i===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Dl||i===Il||i===Ul||i===Nl||i===Ba||i===Fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Dl)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Il)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return r.COMPRESSED_R11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ba)return r.COMPRESSED_RG11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===Bl||i===kl||i===Vl||i===zl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===$l||i===Zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===jl||i===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Jl)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===ec||i===ka||i===nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Vd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Sn({vertexShader:Ex,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ax extends ds{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null;const b=typeof XRWebGLBinding<"u",f=new Cx,p={},S=e.getContextAttributes();let P=null,y=null;const C=[],M=[],R=new Ot;let _=null;const w=new un;w.viewport=new me;const T=new un;T.viewport=new me;const L=[w,T],D=new Fm;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=C[J];return st===void 0&&(st=new Po,C[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=C[J];return st===void 0&&(st=new Po,C[J]=st),st.getGripSpace()},this.getHand=function(J){let st=C[J];return st===void 0&&(st=new Po,C[J]=st),st.getHandSpace()};function O(J){const st=M.indexOf(J.inputSource);if(st===-1)return;const et=C[st];et!==void 0&&(et.update(J.inputSource,J.frame,l||a),et.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",H);for(let J=0;J<C.length;J++){const st=M[J];st!==null&&(M[J]=null,C[J].disconnect(st))}B=null,Y=null,f.reset();for(const J in p)delete p[J];t.setRenderTarget(P),m=null,h=null,d=null,s=null,y=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Dt=null,Ut=null;S.depth&&(Ut=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=S.stencil?is:fi,Dt=S.stencil?Pr:Jn);const At={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(At),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Zn(h.textureWidth,h.textureHeight,{format:In,type:dn,depthTexture:new er(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Zn(m.framebufferWidth,m.framebufferHeight,{format:In,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function H(J){for(let st=0;st<J.removed.length;st++){const et=J.removed[st],Dt=M.indexOf(et);Dt>=0&&(M[Dt]=null,C[Dt].disconnect(et))}for(let st=0;st<J.added.length;st++){const et=J.added[st];let Dt=M.indexOf(et);if(Dt===-1){for(let At=0;At<C.length;At++)if(At>=M.length){M.push(et),Dt=At;break}else if(M[At]===null){M[At]=et,Dt=At;break}if(Dt===-1)break}const Ut=C[Dt];Ut&&Ut.connect(et)}}const j=new A,tt=new A;function ut(J,st,et){j.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);const Dt=j.distanceTo(tt),Ut=st.projectionMatrix.elements,At=et.projectionMatrix.elements,Me=Ut[14]/(Ut[10]-1),zt=Ut[14]/(Ut[10]+1),se=(Ut[9]+1)/Ut[5],Jt=(Ut[9]-1)/Ut[5],Xt=(Ut[8]-1)/Ut[0],Ce=(At[8]+1)/At[0],Le=Me*Xt,Ne=Me*Ce,Be=Dt/(-Xt+Ce),_e=Be*-Xt;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_e),J.translateZ(Be),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ut[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ae=Me+Be,U=zt+Be,Qe=Le-_e,te=Ne+(Dt-_e),E=se*zt/U*Ae,v=Jt*zt/U*Ae;J.projectionMatrix.makePerspective(Qe,te,E,v,Ae,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function mt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,et=J.far;f.texture!==null&&(f.depthNear>0&&(st=f.depthNear),f.depthFar>0&&(et=f.depthFar)),D.near=T.near=w.near=st,D.far=T.far=w.far=et,(B!==D.near||Y!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,Y=D.far),D.layers.mask=J.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;const Dt=J.parent,Ut=D.cameras;mt(D,Dt);for(let At=0;At<Ut.length;At++)mt(Ut[At],Dt);Ut.length===2?ut(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),xt(J,D,Dt)};function xt(J,st,et){et===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(et.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(D)},this.getCameraTexture=function(J){return p[J]};let $t=null;function ve(J,st){if(u=st.getViewerPose(l||a),g=st,u!==null){const et=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Dt=!1;et.length!==D.cameras.length&&(D.cameras.length=0,Dt=!0);for(let zt=0;zt<et.length;zt++){const se=et[zt];let Jt=null;if(m!==null)Jt=m.getViewport(se);else{const Ce=d.getViewSubImage(h,se);Jt=Ce.viewport,zt===0&&(t.setRenderTargetTextures(y,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(y))}let Xt=L[zt];Xt===void 0&&(Xt=new un,Xt.layers.enable(zt),Xt.viewport=new me,L[zt]=Xt),Xt.matrix.fromArray(se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),zt===0&&(D.matrix.copy(Xt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Dt===!0&&D.cameras.push(Xt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=i.getBinding();const zt=d.getDepthInformation(et[0]);zt&&zt.isValid&&zt.texture&&f.init(zt,s.renderState)}if(Ut&&Ut.includes("camera-access")&&b){t.state.unbindTexture(),d=i.getBinding();for(let zt=0;zt<et.length;zt++){const se=et[zt].camera;if(se){let Jt=p[se];Jt||(Jt=new Vd,p[se]=Jt);const Xt=d.getCameraImage(se);Jt.sourceTexture=Xt}}}}for(let et=0;et<C.length;et++){const Dt=M[et],Ut=C[et];Dt!==null&&Ut!==void 0&&Ut.update(Dt,st,l||a)}$t&&$t(J,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const Zt=new Xd;Zt.setAnimationLoop(ve),this.setAnimationLoop=function(J){$t=J},this.dispose=function(){}}}const Px=new jt,jd=new It;jd.set(-1,0,0,0,1,0,0,0,1);function Rx(n,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,zd(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,S,P,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,y)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),b(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,S,P):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ze&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ze&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=t.get(p),P=S.envMap,y=S.envMapRotation;P&&(f.envMap.value=P,f.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(jd),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,S,P){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=P*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function b(f,p){const S=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lx(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,C){const M=C.program;i.uniformBlockBinding(y,M)}function l(y,C){let M=s[y.id];M===void 0&&(f(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",S));const R=C.program;i.updateUBOMapping(y,R);const _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){const C=d();y.__bindingPointIndex=C;const M=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const C=s[y.id],M=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let _=0,w=M.length;_<w;_++){const T=M[_];if(Array.isArray(T))for(let L=0,D=T.length;L<D;L++)m(T[L],_,L,R);else m(T,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,C,M,R){if(b(y,C,M,R)===!0){const _=y.__offset,w=y.value;if(Array.isArray(w)){let T=0;for(let L=0;L<w.length;L++){const D=w[L],B=p(D);g(D,y.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,C,M){typeof y=="number"||typeof y=="boolean"?C[0]=y:y.isMatrix3?(C[0]=y.elements[0],C[1]=y.elements[1],C[2]=y.elements[2],C[3]=0,C[4]=y.elements[3],C[5]=y.elements[4],C[6]=y.elements[5],C[7]=0,C[8]=y.elements[6],C[9]=y.elements[7],C[10]=y.elements[8],C[11]=0):ArrayBuffer.isView(y)?C.set(new y.constructor(y.buffer,y.byteOffset,C.length)):y.toArray(C,M)}function b(y,C,M,R){const _=y.value,w=C+"_"+M;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{const T=R[w];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function f(y){const C=y.uniforms;let M=0;const R=16;for(let w=0,T=C.length;w<T;w++){const L=Array.isArray(C[w])?C[w]:[C[w]];for(let D=0,B=L.length;D<B;D++){const Y=L[D],O=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,H=O.length;K<H;K++){const j=O[K],tt=p(j),ut=M%R,mt=ut%tt.boundary,xt=ut+mt;M+=mt,xt!==0&&R-xt<tt.storage&&(M+=R-xt),Y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=tt.storage}}}const _=M%R;return _>0&&(M+=R-_),y.__size=M,y.__cache={},this}function p(y){const C={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(C.boundary=4,C.storage=4):y.isVector2?(C.boundary=8,C.storage=8):y.isVector3||y.isColor?(C.boundary=16,C.storage=12):y.isVector4?(C.boundary=16,C.storage=16):y.isMatrix3?(C.boundary=48,C.storage=48):y.isMatrix4?(C.boundary=64,C.storage=64):y.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(C.boundary=16,C.storage=y.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",y),C}function S(y){const C=y.target;C.removeEventListener("dispose",S);const M=a.indexOf(C.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function P(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:P}}const Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function Ix(){return kn===null&&(kn=new Od(Dx,16,16,ls,pi),kn.name="DFG_LUT",kn.minFilter=We,kn.magFilter=We,kn.wrapS=oi,kn.wrapT=oi,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class Ux{constructor(t={}){const{canvas:e=Kf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=dn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const b=m,f=new Set([Ac,Cc,Tc]),p=new Set([dn,Jn,Ar,Pr,Mc,Sc]),S=new Uint32Array(4),P=new Int32Array(4),y=new A;let C=null,M=null;const R=[],_=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1,D=null,B=null,Y=null,O=null;this._outputColorSpace=Ke;let K=0,H=0,j=null,tt=-1,ut=null;const mt=new me,xt=new me;let $t=null;const ve=new Tt(0);let Zt=0,J=e.width,st=e.height,et=1,Dt=null,Ut=null;const At=new me(0,0,J,st),Me=new me(0,0,J,st);let zt=!1;const se=new Nc;let Jt=!1,Xt=!1;const Ce=new jt,Le=new A,Ne=new me,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ae(){return j===null?et:1}let U=i;function Qe(x,N){return e.getContext(x,N)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bc}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),U===null){const N="webgl2";if(U=Qe(N,x),U===null)throw Qe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw Ht("WebGLRenderer: "+x.message),x}let te,E,v,F,z,X,nt,rt,q,Z,at,Mt,ct,ot,Ct,Pt,Nt,I,it,$,lt,ft,Q;function wt(){te=new I_(U),te.init(),lt=new Sx(U,te),E=new E_(U,te,t,lt),v=new wx(U,te),E.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),B=U.createFramebuffer(),Y=U.createFramebuffer(),O=U.createFramebuffer(),F=new F_(U),z=new lx,X=new Mx(U,te,v,z,E,lt,F),nt=new D_(T),rt=new Vm(U),ft=new M_(U,rt),q=new U_(U,rt,F,ft),Z=new B_(U,q,rt,ft,F),I=new O_(U,E,X),Ct=new T_(z),at=new ox(T,nt,te,E,ft,Ct),Mt=new Rx(T,z),ct=new hx,ot=new gx(te),Nt=new w_(T,nt,v,Z,g,c),Pt=new yx(T,Z,E),Q=new Lx(U,F,E,v),it=new S_(U,te,F),$=new N_(U,te,F),F.programs=at.programs,T.capabilities=E,T.extensions=te,T.properties=z,T.renderLists=ct,T.shadowMap=Pt,T.state=v,T.info=F}wt(),b!==dn&&(w=new V_(b,e.width,e.height,o,s,r));const bt=new Ax(T,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=te.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=te.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(x){x!==void 0&&(et=x,this.setSize(J,st,!1))},this.getSize=function(x){return x.set(J,st)},this.setSize=function(x,N,G=!0){if(bt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=x,st=N,e.width=Math.floor(x*et),e.height=Math.floor(N*et),G===!0&&(e.style.width=x+"px",e.style.height=N+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(J*et,st*et).floor()},this.setDrawingBufferSize=function(x,N,G){J=x,st=N,et=G,e.width=Math.floor(x*G),e.height=Math.floor(N*G),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(b===dn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(mt)},this.getViewport=function(x){return x.copy(At)},this.setViewport=function(x,N,G,k){x.isVector4?At.set(x.x,x.y,x.z,x.w):At.set(x,N,G,k),v.viewport(mt.copy(At).multiplyScalar(et).round())},this.getScissor=function(x){return x.copy(Me)},this.setScissor=function(x,N,G,k){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,N,G,k),v.scissor(xt.copy(Me).multiplyScalar(et).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(x){v.setScissorTest(zt=x)},this.setOpaqueSort=function(x){Dt=x},this.setTransparentSort=function(x){Ut=x},this.getClearColor=function(x){return x.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,G=!0){let k=0;if(x){let V=!1;if(j!==null){const pt=j.texture.format;V=f.has(pt)}if(V){const pt=j.texture.type,_t=p.has(pt),dt=Nt.getClearColor(),yt=Nt.getClearAlpha(),St=dt.r,Ft=dt.g,kt=dt.b;_t?(S[0]=St,S[1]=Ft,S[2]=kt,S[3]=yt,U.clearBufferuiv(U.COLOR,0,S)):(P[0]=St,P[1]=Ft,P[2]=kt,P[3]=yt,U.clearBufferiv(U.COLOR,0,P))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),D=x},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),Nt.dispose(),ct.dispose(),ot.dispose(),z.dispose(),nt.dispose(),Z.dispose(),ft.dispose(),Q.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",_h),bt.removeEventListener("sessionend",xh),qi.stop()};function xe(x){x.preventDefault(),Ga("WebGLRenderer: Context Lost."),L=!0}function oe(){Ga("WebGLRenderer: Context Restored."),L=!1;const x=F.autoReset,N=Pt.enabled,G=Pt.autoUpdate,k=Pt.needsUpdate,V=Pt.type;wt(),F.autoReset=x,Pt.enabled=N,Pt.autoUpdate=G,Pt.needsUpdate=k,Pt.type=V}function Nn(x){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Fn(x){const N=x.target;N.removeEventListener("dispose",Fn),af(N)}function af(x){of(x),z.remove(x)}function of(x){const N=z.get(x).programs;N!==void 0&&(N.forEach(function(G){at.releaseProgram(G)}),x.isShaderMaterial&&at.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,G,k,V,pt){N===null&&(N=Be);const _t=V.isMesh&&V.matrixWorld.determinantAffine()<0,dt=hf(x,N,G,k,V);v.setMaterial(k,_t);let yt=G.index,St=1;if(k.wireframe===!0){if(yt=q.getWireframeAttribute(G),yt===void 0)return;St=2}const Ft=G.drawRange,kt=G.attributes.position;let Et=Ft.start*St,ne=(Ft.start+Ft.count)*St;pt!==null&&(Et=Math.max(Et,pt.start*St),ne=Math.min(ne,(pt.start+pt.count)*St)),yt!==null?(Et=Math.max(Et,0),ne=Math.min(ne,yt.count)):kt!=null&&(Et=Math.max(Et,0),ne=Math.min(ne,kt.count));const Se=ne-Et;if(Se<0||Se===1/0)return;ft.setup(V,k,dt,G,yt);let be,re=it;if(yt!==null&&(be=rt.get(yt),re=$,re.setIndex(be)),V.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Ae()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(V.isLine){let Ve=k.linewidth;Ve===void 0&&(Ve=1),v.setLineWidth(Ve*Ae()),V.isLineSegments?re.setMode(U.LINES):V.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else V.isPoints?re.setMode(U.POINTS):V.isSprite&&re.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(te.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,vt=V._multiDrawCounts,rn=V._multiDrawCount,qt=yt?rt.get(yt).bytesPerElement:1,vn=z.get(k).currentProgram.getUniforms();for(let On=0;On<rn;On++)vn.setValue(U,"_gl_DrawID",On),re.render(Ve[On]/qt,vt[On])}else if(V.isInstancedMesh)re.renderInstances(Et,Se,V.count);else if(G.isInstancedBufferGeometry){const Ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vt=Math.min(G.instanceCount,Ve);re.renderInstances(Et,Se,vt)}else re.render(Et,Se)};function vh(x,N,G){x.transparent===!0&&x.side===Xn&&x.forceSinglePass===!1?(x.side=Ze,x.needsUpdate=!0,Jr(x,N,G),x.side=zi,x.needsUpdate=!0,Jr(x,N,G),x.side=Xn):Jr(x,N,G)}this.compile=function(x,N,G=null){G===null&&(G=x),M=ot.get(G),M.init(N),_.push(M),G.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),x!==G&&x.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights();const k=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){const dt=pt[_t];vh(dt,G,V),k.add(dt)}else vh(pt,G,V),k.add(pt)}),M=_.pop(),k},this.compileAsync=function(x,N,G=null){const k=this.compile(x,N,G);return new Promise(V=>{function pt(){if(k.forEach(function(_t){z.get(_t).currentProgram.isReady()&&k.delete(_t)}),k.size===0){V(x);return}setTimeout(pt,10)}te.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let go=null;function lf(x){go&&go(x)}function _h(){qi.stop()}function xh(){qi.start()}const qi=new Xd;qi.setAnimationLoop(lf),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(x){go=x,bt.setAnimationLoop(x),x===null?qi.stop():qi.start()},bt.addEventListener("sessionstart",_h),bt.addEventListener("sessionend",xh),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(x,N);const G=bt.enabled===!0&&bt.isPresenting===!0,k=w!==null&&(j===null||G)&&w.begin(T,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(N),N=bt.getCamera()),x.isScene===!0&&x.onBeforeRender(T,x,N,j),M=ot.get(x,_.length),M.init(N),M.state.textureUnits=X.getTextureUnits(),_.push(M),Ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),se.setFromProjectionMatrix(Ce,Yn,N.reversedDepth),Xt=this.localClippingEnabled,Jt=Ct.init(this.clippingPlanes,Xt),C=ct.get(x,R.length),C.init(),R.push(C),bt.enabled===!0&&bt.isPresenting===!0){const _t=T.xr.getDepthSensingMesh();_t!==null&&vo(_t,N,-1/0,T.sortObjects)}vo(x,N,0,T.sortObjects),C.finish(),T.sortObjects===!0&&C.sort(Dt,Ut,N.reversedDepth),_e=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,_e&&Nt.addToRenderList(C,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&Ct.beginShadows();const V=M.state.shadowsArray;if(Pt.render(V,x,N),Jt===!0&&Ct.endShadows(),(k&&w.hasRenderPass())===!1){const _t=C.opaque,dt=C.transmissive;if(M.setupLights(),N.isArrayCamera){const yt=N.cameras;if(dt.length>0)for(let St=0,Ft=yt.length;St<Ft;St++){const kt=yt[St];yh(_t,dt,x,kt)}_e&&Nt.render(x);for(let St=0,Ft=yt.length;St<Ft;St++){const kt=yt[St];bh(C,x,kt,kt.viewport)}}else dt.length>0&&yh(_t,dt,x,N),_e&&Nt.render(x),bh(C,x,N)}j!==null&&H===0&&(X.updateMultisampleRenderTarget(j),X.updateRenderTargetMipmap(j)),k&&w.end(T),x.isScene===!0&&x.onAfterRender(T,x,N),ft.resetDefaultState(),tt=-1,ut=null,_.pop(),_.length>0?(M=_[_.length-1],X.setTextureUnits(M.state.textureUnits),Jt===!0&&Ct.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,D!==null&&D.renderEnd()};function vo(x,N,G,k){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight)M.pushLight(x),x.castShadow&&M.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||se.intersectsSprite(x)){k&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ce);const _t=Z.update(x),dt=x.material;dt.visible&&C.push(x,_t,dt,G,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||se.intersectsObject(x))){const _t=Z.update(x),dt=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ne.copy(_t.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(Ce)),Array.isArray(dt)){const yt=_t.groups;for(let St=0,Ft=yt.length;St<Ft;St++){const kt=yt[St],Et=dt[kt.materialIndex];Et&&Et.visible&&C.push(x,_t,Et,G,Ne.z,kt)}}else dt.visible&&C.push(x,_t,dt,G,Ne.z,null)}}const pt=x.children;for(let _t=0,dt=pt.length;_t<dt;_t++)vo(pt[_t],N,G,k)}function bh(x,N,G,k){const{opaque:V,transmissive:pt,transparent:_t}=x;M.setupLightsView(G),Jt===!0&&Ct.setGlobalState(T.clippingPlanes,G),k&&v.viewport(mt.copy(k)),V.length>0&&Zr(V,N,G),pt.length>0&&Zr(pt,N,G),_t.length>0&&Zr(_t,N,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function yh(x,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[k.id]===void 0){const Et=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:Et?pi:dn,minFilter:ns,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const pt=M.state.transmissionRenderTarget[k.id],_t=k.viewport||mt;pt.setSize(_t.z*T.transmissionResolutionScale,_t.w*T.transmissionResolutionScale);const dt=T.getRenderTarget(),yt=T.getActiveCubeFace(),St=T.getActiveMipmapLevel();T.setRenderTarget(pt),T.getClearColor(ve),Zt=T.getClearAlpha(),Zt<1&&T.setClearColor(16777215,.5),T.clear(),_e&&Nt.render(G);const Ft=T.toneMapping;T.toneMapping=$n;const kt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),M.setupLightsView(k),Jt===!0&&Ct.setGlobalState(T.clippingPlanes,k),Zr(x,G,k),X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ne=0,Se=N.length;ne<Se;ne++){const be=N[ne],{object:re,geometry:Ve,material:vt,group:rn}=be;if(vt.side===Xn&&re.layers.test(k.layers)){const qt=vt.side;vt.side=Ze,vt.needsUpdate=!0,wh(re,G,k,Ve,vt,rn),vt.side=qt,vt.needsUpdate=!0,Et=!0}}Et===!0&&(X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt))}T.setRenderTarget(dt,yt,St),T.setClearColor(ve,Zt),kt!==void 0&&(k.viewport=kt),T.toneMapping=Ft}function Zr(x,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pt=x.length;V<pt;V++){const _t=x[V],{object:dt,geometry:yt,group:St}=_t;let Ft=_t.material;Ft.allowOverride===!0&&k!==null&&(Ft=k),dt.layers.test(G.layers)&&wh(dt,N,G,yt,Ft,St)}}function wh(x,N,G,k,V,pt){x.onBeforeRender(T,N,G,k,V,pt),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(T,N,G,k,x,pt),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=Ze,V.needsUpdate=!0,T.renderBufferDirect(G,N,k,V,x,pt),V.side=zi,V.needsUpdate=!0,T.renderBufferDirect(G,N,k,V,x,pt),V.side=Xn):T.renderBufferDirect(G,N,k,V,x,pt),x.onAfterRender(T,N,G,k,V,pt)}function Jr(x,N,G){N.isScene!==!0&&(N=Be);const k=z.get(x),V=M.state.lights,pt=M.state.shadowsArray,_t=V.state.version,dt=at.getParameters(x,V.state,pt,N,G,M.state.lightProbeGridArray),yt=at.getProgramCacheKey(dt);let St=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;const Ft=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=nt.get(x.envMap||k.environment,Ft),k.envMapRotation=k.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,St===void 0&&(x.addEventListener("dispose",Fn),St=new Map,k.programs=St);let kt=St.get(yt);if(kt!==void 0){if(k.currentProgram===kt&&k.lightsStateVersion===_t)return Sh(x,dt),kt}else dt.uniforms=at.getUniforms(x),D!==null&&x.isNodeMaterial&&D.build(x,G,dt),x.onBeforeCompile(dt,T),kt=at.acquireProgram(dt,yt),St.set(yt,kt),k.uniforms=dt.uniforms;const Et=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Et.clippingPlanes=Ct.uniform),Sh(x,dt),k.needsLights=df(x),k.lightsStateVersion=_t,k.needsLights&&(Et.ambientLightColor.value=V.state.ambient,Et.lightProbe.value=V.state.probe,Et.directionalLights.value=V.state.directional,Et.directionalLightShadows.value=V.state.directionalShadow,Et.spotLights.value=V.state.spot,Et.spotLightShadows.value=V.state.spotShadow,Et.rectAreaLights.value=V.state.rectArea,Et.ltc_1.value=V.state.rectAreaLTC1,Et.ltc_2.value=V.state.rectAreaLTC2,Et.pointLights.value=V.state.point,Et.pointLightShadows.value=V.state.pointShadow,Et.hemisphereLights.value=V.state.hemi,Et.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Et.spotLightMatrix.value=V.state.spotLightMatrix,Et.spotLightMap.value=V.state.spotLightMap,Et.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=M.state.lightProbeGridArray.length>0,k.currentProgram=kt,k.uniformsList=null,kt}function Mh(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Da.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Sh(x,N){const G=z.get(x);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function cf(x,N){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let G=0,k=x.length;G<k;G++){const V=x[G];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function hf(x,N,G,k,V){N.isScene!==!0&&(N=Be),X.resetTextureUnits();const pt=N.fog,_t=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,dt=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Gt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,St=nt.get(k.envMap||_t,yt),Ft=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,Se=!!G.morphAttributes.color;let be=$n;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(be=T.toneMapping);const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ve=re!==void 0?re.length:0,vt=z.get(k),rn=M.state.lights;if(Jt===!0&&(Xt===!0||x!==ut)){const le=x===ut&&k.id===tt;Ct.setState(k,x,le)}let qt=!1;k.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==rn.state.version||vt.outputColorSpace!==dt||V.isBatchedMesh&&vt.batching===!1||!V.isBatchedMesh&&vt.batching===!0||V.isBatchedMesh&&vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&vt.instancing===!1||!V.isInstancedMesh&&vt.instancing===!0||V.isSkinnedMesh&&vt.skinning===!1||!V.isSkinnedMesh&&vt.skinning===!0||V.isInstancedMesh&&vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&vt.instancingMorph===!1&&V.morphTexture!==null||vt.envMap!==St||k.fog===!0&&vt.fog!==pt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ct.numPlanes||vt.numIntersection!==Ct.numIntersection)||vt.vertexAlphas!==Ft||vt.vertexTangents!==kt||vt.morphTargets!==Et||vt.morphNormals!==ne||vt.morphColors!==Se||vt.toneMapping!==be||vt.morphTargetsCount!==Ve||!!vt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,vt.__version=k.version);let vn=vt.currentProgram;qt===!0&&(vn=Jr(k,N,V),D&&k.isNodeMaterial&&D.onUpdateProgram(k,vn,vt));let On=!1,_i=!1,vs=!1;const ae=vn.getUniforms(),Ee=vt.uniforms;if(v.useProgram(vn.program)&&(On=!0,_i=!0,vs=!0),k.id!==tt&&(tt=k.id,_i=!0),vt.needsLights){const le=cf(M.state.lightProbeGridArray,V);vt.lightProbeGrid!==le&&(vt.lightProbeGrid=le,_i=!0)}if(On||ut!==x){v.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ae.setValue(U,"projectionMatrix",x.projectionMatrix),ae.setValue(U,"viewMatrix",x.matrixWorldInverse);const bi=ae.map.cameraPosition;bi!==void 0&&bi.setValue(U,Le.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&ae.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),ut!==x&&(ut=x,_i=!0,vs=!0)}if(vt.needsLights&&(rn.state.directionalShadowMap.length>0&&ae.setValue(U,"directionalShadowMap",rn.state.directionalShadowMap,X),rn.state.spotShadowMap.length>0&&ae.setValue(U,"spotShadowMap",rn.state.spotShadowMap,X),rn.state.pointShadowMap.length>0&&ae.setValue(U,"pointShadowMap",rn.state.pointShadowMap,X)),V.isSkinnedMesh){ae.setOptional(U,V,"bindMatrix"),ae.setOptional(U,V,"bindMatrixInverse");const le=V.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),ae.setValue(U,"boneTexture",le.boneTexture,X))}V.isBatchedMesh&&(ae.setOptional(U,V,"batchingTexture"),ae.setValue(U,"batchingTexture",V._matricesTexture,X),ae.setOptional(U,V,"batchingIdTexture"),ae.setValue(U,"batchingIdTexture",V._indirectTexture,X),ae.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&ae.setValue(U,"batchingColorTexture",V._colorsTexture,X));const xi=G.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&I.update(V,G,vn),(_i||vt.receiveShadow!==V.receiveShadow)&&(vt.receiveShadow=V.receiveShadow,ae.setValue(U,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(Ee.envMapIntensity.value=N.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Ix()),_i){if(ae.setValue(U,"toneMappingExposure",T.toneMappingExposure),vt.needsLights&&uf(Ee,vs),pt&&k.fog===!0&&Mt.refreshFogUniforms(Ee,pt),Mt.refreshMaterialUniforms(Ee,k,et,st,M.state.transmissionRenderTarget[x.id]),vt.needsLights&&vt.lightProbeGrid){const le=vt.lightProbeGrid;Ee.probesSH.value=le.texture,Ee.probesMin.value.copy(le.boundingBox.min),Ee.probesMax.value.copy(le.boundingBox.max),Ee.probesResolution.value.copy(le.resolution)}Da.upload(U,Mh(vt),Ee,X)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Da.upload(U,Mh(vt),Ee,X),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(U,"center",V.center),ae.setValue(U,"modelViewMatrix",V.modelViewMatrix),ae.setValue(U,"normalMatrix",V.normalMatrix),ae.setValue(U,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const le=k.uniformsGroups;for(let bi=0,_s=le.length;bi<_s;bi++){const Eh=le[bi];Q.update(Eh,vn),Q.bind(Eh,vn)}}return vn}function uf(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function df(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,N,G){const k=z.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=N,z.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const G=z.get(x);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,G=0){j=x,K=N,H=G;let k=null,V=!1,pt=!1;if(x){const dt=z.get(x);if(dt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,dt.__webglFramebuffer),mt.copy(x.viewport),xt.copy(x.scissor),$t=x.scissorTest,v.viewport(mt),v.scissor(xt),v.setScissorTest($t),tt=-1;return}else if(dt.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(dt.__hasExternalTextures)X.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ft=x.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&z.has(Ft)&&(x.width!==Ft.image.width||x.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const yt=x.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);const St=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(St[N])?k=St[N][G]:k=St[N],V=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?k=z.get(x).__webglMultisampledFramebuffer:Array.isArray(St)?k=St[G]:k=St,mt.copy(x.viewport),xt.copy(x.scissor),$t=x.scissorTest}else mt.copy(At).multiplyScalar(et).floor(),xt.copy(Me).multiplyScalar(et).floor(),$t=zt;if(G!==0&&(k=B),v.bindFramebuffer(U.FRAMEBUFFER,k)&&v.drawBuffers(x,k),v.viewport(mt),v.scissor(xt),v.setScissorTest($t),V){const dt=z.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,G)}else if(pt){const dt=N;for(let yt=0;yt<x.textures.length;yt++){const St=z.get(x.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,St.__webglTexture,G,dt)}}else if(x!==null&&G!==0){const dt=z.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(x,N,G,k,V,pt,_t,dt=0){if(!(x&&x.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){v.bindFramebuffer(U.FRAMEBUFFER,yt);try{const St=x.textures[dt],Ft=St.format,kt=St.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt),!E.textureFormatReadable(Ft)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(kt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-k&&G>=0&&G<=x.height-V&&U.readPixels(N,G,k,V,lt.convert(Ft),lt.convert(kt),pt)}finally{const St=j!==null?z.get(j).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(x,N,G,k,V,pt,_t,dt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(N>=0&&N<=x.width-k&&G>=0&&G<=x.height-V){v.bindFramebuffer(U.FRAMEBUFFER,yt);const St=x.textures[dt],Ft=St.format,kt=St.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt),!E.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(N,G,k,V,lt.convert(Ft),lt.convert(kt),0);const ne=j!==null?z.get(j).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,ne);const Se=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $f(U,Se,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.deleteBuffer(Et),U.deleteSync(Se),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,G=0){const k=Math.pow(2,-G),V=Math.floor(x.image.width*k),pt=Math.floor(x.image.height*k),_t=N!==null?N.x:0,dt=N!==null?N.y:0;X.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,_t,dt,V,pt),v.unbindTexture()},this.copyTextureToTexture=function(x,N,G=null,k=null,V=0,pt=0){let _t,dt,yt,St,Ft,kt,Et,ne,Se;const be=x.isCompressedTexture?x.mipmaps[pt]:x.image;if(G!==null)_t=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,St=G.min.x,Ft=G.min.y,kt=G.isBox3?G.min.z:0;else{const Ee=Math.pow(2,-V);_t=Math.floor(be.width*Ee),dt=Math.floor(be.height*Ee),x.isDataArrayTexture?yt=be.depth:x.isData3DTexture?yt=Math.floor(be.depth*Ee):yt=1,St=0,Ft=0,kt=0}k!==null?(Et=k.x,ne=k.y,Se=k.z):(Et=0,ne=0,Se=0);const re=lt.convert(N.format),Ve=lt.convert(N.type);let vt;N.isData3DTexture?(X.setTexture3D(N,0),vt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),vt=U.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),vt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const rn=v.getParameter(U.UNPACK_ROW_LENGTH),qt=v.getParameter(U.UNPACK_IMAGE_HEIGHT),vn=v.getParameter(U.UNPACK_SKIP_PIXELS),On=v.getParameter(U.UNPACK_SKIP_ROWS),_i=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,St),v.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),v.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);const vs=x.isDataArrayTexture||x.isData3DTexture,ae=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const Ee=z.get(x),xi=z.get(N),le=z.get(Ee.__renderTarget),bi=z.get(xi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,le.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let _s=0;_s<yt;_s++)vs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(x).__webglTexture,V,kt+_s),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,z.get(N).__webglTexture,pt,Se+_s)),U.blitFramebuffer(St,Ft,_t,dt,Et,ne,_t,dt,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||z.has(x)){const Ee=z.get(x),xi=z.get(N);v.bindFramebuffer(U.READ_FRAMEBUFFER,Y),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let le=0;le<yt;le++)vs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,V,kt+le):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,V),ae?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xi.__webglTexture,pt,Se+le):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xi.__webglTexture,pt),V!==0?U.blitFramebuffer(St,Ft,_t,dt,Et,ne,_t,dt,U.COLOR_BUFFER_BIT,U.NEAREST):ae?U.copyTexSubImage3D(vt,pt,Et,ne,Se+le,St,Ft,_t,dt):U.copyTexSubImage2D(vt,pt,Et,ne,St,Ft,_t,dt);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ae?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(vt,pt,Et,ne,Se,_t,dt,yt,re,Ve,be.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(vt,pt,Et,ne,Se,_t,dt,yt,re,be.data):U.texSubImage3D(vt,pt,Et,ne,Se,_t,dt,yt,re,Ve,be):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,Et,ne,_t,dt,re,Ve,be.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,Et,ne,be.width,be.height,re,be.data):U.texSubImage2D(U.TEXTURE_2D,pt,Et,ne,_t,dt,re,Ve,be);v.pixelStorei(U.UNPACK_ROW_LENGTH,rn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qt),v.pixelStorei(U.UNPACK_SKIP_PIXELS,vn),v.pixelStorei(U.UNPACK_SKIP_ROWS,On),v.pixelStorei(U.UNPACK_SKIP_IMAGES,_i),pt===0&&N.generateMipmaps&&U.generateMipmap(vt),v.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),v.unbindTexture()},this.resetState=function(){K=0,H=0,j=null,v.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function ue(n){return n==null}function kc(n){return n!==null&&typeof n=="object"}function uc(n){return n!==null&&typeof n=="object"}function Nx(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function cs(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,s)=>{const r=n[s],a=t[s];return uc(r)&&uc(a)?Object.assign(Object.assign({},i),{[s]:cs(r,a)}):Object.assign(Object.assign({},i),{[s]:s in t?a:r})},{})}function Vc(n){return kc(n)?"target"in n:!1}const Fx={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class we{static alreadyDisposed(){return new we({type:"alreadydisposed"})}static notBindable(){return new we({type:"notbindable"})}static notCompatible(t,e){return new we({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new we({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new we({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=Fx[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class Za{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!Za.isBindable(i))throw we.notBindable();if(!(t in i))throw we.propertyNotFound(t);i[t]=e}}class Re{constructor(){this.observers_={}}on(t,e,i){var s;let r=this.observers_[t];return r||(r=this.observers_[t]=[]),r.push({handler:e,key:(s=i==null?void 0:i.key)!==null&&s!==void 0?s:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(s=>s.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(s=>{s.handler(e)})}}class Ox{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:((s,r)=>s===r),this.emitter=new Re,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},s=this.constraint_?this.constraint_.constrain(t):t,r=this.rawValue_;this.equals_(r,s)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=s,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:s,sender:this}))}}class Bx{constructor(t){this.emitter=new Re,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},s=this.value_;s===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:this.value_,sender:this}))}}class kx{constructor(t){this.emitter=new Re,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function pe(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new Bx(n):new Ox(n,t)}function Vx(n){return[new kx(n),(t,e)=>{n.setRawValue(t,e)}]}class Vt{constructor(t){this.emitter=new Re,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,s)=>Object.assign(i,{[s]:pe(t[s])}),{})}static fromObject(t){const e=this.createCore(t);return new Vt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class Vr{constructor(t){this.values=Vt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class zx{constructor(t){this.values=Vt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let s=t;return ue(i)||(s=Math.max(s,i)),ue(e)||(s=Math.min(s,e)),s}}class Hx{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class Gx{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const Wx={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class Xx{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=Wx[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const qx={"+":n=>n,"-":n=>-n,"~":n=>~n};class Yx{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=qx[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function zc(n){return(t,e)=>{for(let i=0;i<n.length;i++){const s=n[i](t,e);if(s!=="")return s}return""}}function Lr(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Kx(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Dr(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function $x(n,t){const e=Dr(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const s=Dr(n,t);return s===""?"":i+s}function Hc(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=$x(n,t);return i===""?"":e+i}function Qd(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=Kx(n,t);return t+=i.length,i===""?"":i+Dr(n,t)}function Zx(n,t){const e=Qd(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const s=Dr(n,t);return t+=s.length,e+i+s+Hc(n,t)}function Jx(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=Dr(n,t);return t+=i.length,i===""?"":e+i+Hc(n,t)}function jx(n,t){const e=Qd(n,t);return t+=e.length,e===""?"":e+Hc(n,t)}const Qx=zc([Zx,Jx,jx]);function tb(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function eb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=tb(n,t);return i===""?"":e+i}function nb(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function ib(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=nb(n,t);return i===""?"":e+i}function sb(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function rb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=sb(n,t);return i===""?"":e+i}const ab=zc([eb,ib,rb]),ob=zc([ab,Qx]);function lb(n,t){const e=ob(n,t);return t+=e.length,e===""?null:{evaluable:new Gx(e),cursor:t}}function cb(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=ep(n,t);if(!i)return null;t=i.cursor,t+=Lr(n,t).length;const s=n.substr(t,1);return t+=s.length,s!==")"?null:{evaluable:i.evaluable,cursor:t}}function hb(n,t){var e;return(e=lb(n,t))!==null&&e!==void 0?e:cb(n,t)}function tp(n,t){const e=hb(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const s=tp(n,t);return s?(t=s.cursor,{cursor:t,evaluable:new Yx(i,s.evaluable)}):null}function ub(n,t,e){e+=Lr(t,e).length;const i=n.filter(s=>t.startsWith(s,e))[0];return i?(e+=i.length,e+=Lr(t,e).length,{cursor:e,operator:i}):null}function db(n,t){return(e,i)=>{const s=n(e,i);if(!s)return null;i=s.cursor;let r=s.evaluable;for(;;){const a=ub(t,e,i);if(!a)break;i=a.cursor;const o=n(e,i);if(!o)return null;i=o.cursor,r=new Xx(a.operator,r,o.evaluable)}return r?{cursor:i,evaluable:r}:null}}const pb=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>db(n,t),tp);function ep(n,t){return t+=Lr(n,t).length,pb(n,t)}function fb(n){const t=ep(n,0);return!t||t.cursor+Lr(n,t.cursor).length!==n.length?null:t.evaluable}function mi(n){var t;const e=fb(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function np(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=mi(n);if(!ue(t))return t}return 0}function mb(n){return String(n)}function sn(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function Qt(n,t,e,i,s){const r=(n-t)/(e-t);return i+r*(s-i)}function Uu(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function De(n,t,e){return Math.min(Math.max(n,t),e)}function ip(n,t){return(n%t+t)%t}function gb(n,t){return ue(n.step)?Math.max(Uu(t),2):Uu(n.step)}function sp(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function rp(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function ap(n,t){return ue(n.step)?null:new Hx(n.step,t)}function op(n){return!ue(n.max)&&!ue(n.min)?new Vr({max:n.max,min:n.min}):!ue(n.max)||!ue(n.min)?new zx({max:n.max,min:n.min}):null}function lp(n,t){var e,i,s;return{formatter:(e=n.format)!==null&&e!==void 0?e:sn(gb(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:sp(n),pointerScale:(s=n.pointerScale)!==null&&s!==void 0?s:rp(n,t)}}function cp(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Gc(n){return{constraint:n.constraint,textProps:Vt.fromObject(lp(n.params,n.initialValue))}}class ms{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class uo{constructor(t){this.target=t}}class zr extends uo{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class vb extends uo{constructor(t,e){super(t),this.expanded=e}}class _b extends uo{constructor(t,e){super(t),this.index=e}}class xb extends uo{constructor(t,e){super(t),this.native=e}}class Ir extends ms{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new Re,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new zr(this,e.binding.target.read(),t.options.last))}}class bb{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new Re}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function yb(n){if(!("binding"in n))return!1;const t=n.binding;return Vc(t)&&"read"in t&&"write"in t}function wb(n,t){const i=Object.keys(t).reduce((s,r)=>{if(s===void 0)return;const a=t[r],o=a(n[r]);return o.succeeded?Object.assign(Object.assign({},s),{[r]:o.value}):void 0},{});return i}function Mb(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const s=t(i);if(!(!s.succeeded||s.value===void 0))return[...e,s.value]},[])}function Sb(n){return n===null?!1:typeof n=="object"}function ri(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Nu(n){return{custom:t=>ri(t)(n),boolean:ri(t=>typeof t=="boolean"?t:void 0)(n),number:ri(t=>typeof t=="number"?t:void 0)(n),string:ri(t=>typeof t=="string"?t:void 0)(n),function:ri(t=>typeof t=="function"?t:void 0)(n),constant:t=>ri(e=>e===t?t:void 0)(n),raw:ri(t=>t)(n),object:t=>ri(e=>{if(Sb(e))return wb(e,t)})(n),array:t=>ri(e=>{if(Array.isArray(e))return Mb(e,t)})(n)}}const dc={optional:Nu(!0),required:Nu(!1)};function ge(n,t){const e=t(dc),i=dc.required.object(e)(n);return i.succeeded?i.value:void 0}function mn(n,t,e,i){if(t&&!t(n))return!1;const s=ge(n,e);return s?i(s):!1}function gn(n,t){var e;return cs((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function as(n){return"value"in n}function hp(n){if(!kc(n)||!("binding"in n))return!1;const t=n.binding;return Vc(t)}const Kn="http://www.w3.org/2000/svg";function Ja(n){n.offsetHeight}function Eb(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function Wc(n){return n.ontouchstart!==void 0}function Tb(){return globalThis}function Cb(){return Tb().document}function Ab(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const Pb={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function po(n,t){const e=n.createElementNS(Kn,"svg");return e.innerHTML=Pb[t],e}function up(n,t,e){n.insertBefore(t,n.children[e])}function Xc(n){n.parentElement&&n.parentElement.removeChild(n)}function dp(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function Rb(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function pp(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function ui(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function jn(n,t,e){ui(n.value(t),e)}const Lb="tp";function Yt(n){return(e,i)=>[Lb,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const yr=Yt("lbl");function Db(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(s=>n.createTextNode(s)).forEach((s,r)=>{r>0&&e.appendChild(n.createElement("br")),e.appendChild(s)}),e}class fp{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(yr()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(yr("l")),jn(e.props,"label",r=>{ue(r)?this.element.classList.add(yr(void 0,"nol")):(this.element.classList.remove(yr(void 0,"nol")),Rb(i),i.appendChild(Db(t,r)))}),this.element.appendChild(i),this.labelElement=i;const s=t.createElement("div");s.classList.add(yr("v")),this.element.appendChild(s),this.valueElement=s}}class mp{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new fp(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return mn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return gn(null,{label:this.props.get("label")})}}function Ib(){return["veryfirst","first","last","verylast"]}const Fu=Yt(""),Ou={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class fo{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Ib().forEach(i=>{e.classList.remove(Fu(void 0,Ou[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(Fu(void 0,Ou[i]))})}),this.viewProps.handleDispose(()=>{Xc(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return mn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return gn(null,Object.assign({},this.viewProps.exportState()))}}class hs extends fo{constructor(t,e){if(e.value!==e.valueController.value)throw we.shouldNeverHappen();const i=e.valueController.viewProps,s=new mp(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new fp(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=s,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return mn(t,e=>{var i,s,r;return super.importState(e)&&this.labelController.importProps(e)&&((r=(s=(i=this.valueController).importProps)===null||s===void 0?void 0:s.call(i,t))!==null&&r!==void 0?r:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return gn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function Bu(n){const t=Object.assign({},n);return delete t.value,t}class gp extends hs{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return mn(t,e=>super.importState(Bu(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return gn(()=>Bu(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function Ub(n){return as(n)&&hp(n.value)}class Nb extends gp{importState(t){return mn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function Fb(n){return as(n)&&yb(n.value)}function vp(n,t){for(;n.length<t;)n.push(void 0)}function Ob(n){const t=[];return vp(t,n),t}function Bb(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function kb(n,t){const e=[...Bb(n),t];return e.length>n.length?e.splice(0,e.length-n.length):vp(e,n.length),e}class Vb{constructor(t){this.emitter=new Re,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=pe(Ob(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=kb(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function zb(n){if(!("binding"in n))return!1;const t=n.binding;return Vc(t)&&"read"in t&&!("write"in t)}class Hb extends gp{exportState(){return gn(()=>super.exportState(),{binding:{readonly:!0}})}}function Gb(n){return as(n)&&zb(n.value)}class Wb extends ms{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,r=>{i(new xb(this,r.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function Xb(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function rr(n,t){return e=>{Xb(n,t,e)}}function qc(n,t){ui(n,e=>{t.textContent=e??""})}const el=Yt("btn");class qb{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(el()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(el("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const s=t.createElement("div");s.classList.add(el("t")),qc(e.props.value("title"),s),this.buttonElement.appendChild(s)}}class Yb{constructor(t,e){this.emitter=new Re,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new qb(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return mn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return gn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class ku extends fo{constructor(t,e){const i=new Yb(t,{props:e.buttonProps,viewProps:e.viewProps}),s=new mp(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:s.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=s}importState(t){return mn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return gn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class _p{constructor(t){const[e,i]=t.split("-"),s=e.split(".");this.major=parseInt(s[0],10),this.minor=parseInt(s[1],10),this.patch=parseInt(s[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const ar=new _p("2.0.5");function je(n){return Object.assign({core:ar},n)}const Kb=je({id:"button",type:"blade",accept(n){const t=ge(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new ku(n.document,{blade:n.blade,buttonProps:Vt.fromObject({title:n.params.title}),labelProps:Vt.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof ku?new Wb(n.controller):null}});function $b(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function Zb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function Jb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function jb(n){return kc(n)?"refresh"in n&&typeof n.refresh=="function":!1}function Qb(n,t){if(!Za.isBindable(n))throw we.notBindable();return new Za(n,t)}class ty{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new Re,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const s=i??{},r=this.controller_.element.ownerDocument,a=this.pool_.createBinding(r,Qb(t,e),s),o=this.pool_.createBindingApi(a);return this.add(o,s.index)}addFolder(t){return Zb(this,t)}addButton(t){return $b(this,t)}addTab(t){return Jb(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),s=this.pool_.createApi(i);return this.add(s,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{jb(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),s=hp(e.value)?e.value.binding:null;this.emitter_.emit("change",new zr(i,s?s.target.read():e.value.rawValue,t.options.last))}}class Yc extends ms{constructor(t,e){super(t),this.rackApi_=new ty(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class Kc extends fo{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return mn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,s)=>i.importState(e.children[s])))}exportState(){return gn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function pc(n){return"rackController"in n}class ey{constructor(t){this.emitter=new Re,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw we.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const s=this.extract_(t);s&&(s.emitter.on("add",this.onSubListAdd_),s.emitter.on("remove",this.onSubListRemove_),s.allItems().forEach(r=>{this.cache_.add(r)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(s=>{this.cache_.delete(s)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function ny(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(as(i)&&i.value===t)return i}return null}function iy(n){return pc(n)?n.rackController.rack.bcSet_:null}class sy{constructor(t){var e,i;this.emitter=new Re,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new ey(iy),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),as(i))i.value.emitter.on("change",this.onChildValueChange_);else if(pc(i)){const s=i.rackController.rack;if(s){const r=s.emitter;r.on("layout",this.onRackLayout_),r.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(as(i))i.value.emitter.off("change",this.onChildValueChange_);else if(pc(i)){const s=i.rackController.rack;if(s){const r=s.emitter;r.off("layout",this.onRackLayout_),r.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(s=>!s.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(s=>{const r=[];s===e&&(r.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&r.push("veryfirst")),s===i&&(r.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&r.push("verylast")),s.blade.set("positions",r)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=ny(this.find(as),t.sender);if(!e)throw we.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class $c{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new sy({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&up(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Xc(t.bladeController.view.element)}}function or(){return new Vt({positions:pe([],{equals:Nx})})}class Hr extends Vt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Vt.createCore(e);return new Hr(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!ue(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};jn(this,"expanded",i),jn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ry(n,t){let e=0;return Eb(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Ja(t),e=t.clientHeight,n.set("temporaryExpanded",null),Ja(t)}),e}function Vu(n,t){t.style.height=n.styleHeight}function Zc(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),ue(n.get("expandedHeight"))){const e=ry(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),Ja(t)}),n.emitter.on("change",()=>{Vu(n,t)}),Vu(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class xp extends Yc{constructor(t,e){super(t,e),this.emitter_=new Re,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new vb(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const bp=Yt("cnt");class ay{constructor(t,e){var i;this.className_=Yt((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),bp()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),jn(this.foldable_,"completed",rr(this.element,this.className_(void 0,"cpl")));const s=t.createElement("button");s.classList.add(this.className_("b")),jn(e.props,"title",l=>{ue(l)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;const r=t.createElement("div");r.classList.add(this.className_("i")),this.element.appendChild(r);const a=t.createElement("div");a.classList.add(this.className_("t")),qc(e.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a;const o=t.createElement("div");o.classList.add(this.className_("m")),this.buttonElement.appendChild(o);const c=t.createElement("div");c.classList.add(this.className_("c")),this.element.appendChild(c),this.containerElement=c}}class fc extends Kc{constructor(t,e){var i;const s=Hr.create((i=e.expanded)!==null&&i!==void 0?i:!0),r=new ay(t,{foldable:s,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new $c({blade:e.blade,element:r.containerElement,root:e.root,viewProps:e.viewProps}),view:r})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=s,Zc(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return mn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return gn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const oy=je({id:"folder",type:"blade",accept(n){const t=ge(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new fc(n.document,{blade:n.blade,expanded:n.params.expanded,props:Vt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof fc?new xp(n.controller,n.pool):null}}),ly=Yt("");function zu(n,t){return rr(n,ly(void 0,t))}class vi extends Vt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Vx(pe(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,s;const r=t??{};return new vi(Vt.createCore({disabled:(e=r.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=r.hidden)!==null&&i!==void 0?i:!1,parent:(s=r.parent)!==null&&s!==void 0?s:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){ui(this.globalDisabled_,zu(t,"disabled")),jn(this,"hidden",zu(t,"hidden"))}bindDisabled(t){ui(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){ui(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Hu=Yt("tbp");class cy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Hu()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Hu("c")),this.element.appendChild(i),this.containerElement=i}}const wr=Yt("tbi");class hy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(wr()),e.viewProps.bindClassModifiers(this.element),jn(e.props,"selected",r=>{r?this.element.classList.add(wr(void 0,"sel")):this.element.classList.remove(wr(void 0,"sel"))});const i=t.createElement("button");i.classList.add(wr("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const s=t.createElement("div");s.classList.add(wr("t")),qc(e.props.value("title"),s),this.buttonElement.appendChild(s),this.titleElement=s}}class uy{constructor(t,e){this.emitter=new Re,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new hy(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class mc extends Kc{constructor(t,e){const i=new cy(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new $c({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new uy(t,{props:e.itemProps,viewProps:vi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,jn(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}importState(t){return mn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return gn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class dy extends Yc{constructor(t,e){super(t,e),this.emitter_=new Re,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new mc(e,{blade:or(),itemProps:Vt.fromObject({selected:!1,title:t.title}),props:Vt.fromObject({selected:!1}),viewProps:vi.create()}),s=this.pool_.createApi(i);return this.rackApi_.add(s,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new _b(this,t.rawValue))}}class py extends Yc{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const Gu=-1;class fy{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=pe(!0),this.selectedIndex=pe(Gu),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Gu,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,s)=>{i.rawValue=s===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const Mr=Yt("tab");class my{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Mr(),bp()),e.viewProps.bindClassModifiers(this.element),ui(e.empty,rr(this.element,Mr(void 0,"nop")));const i=t.createElement("div");i.classList.add(Mr("t")),this.element.appendChild(i),this.itemsElement=i;const s=t.createElement("div");s.classList.add(Mr("i")),this.element.appendChild(s);const r=t.createElement("div");r.classList.add(Mr("c")),this.element.appendChild(r),this.contentsElement=r}}class Wu extends Kc{constructor(t,e){const i=new fy,s=new my(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new $c({blade:e.blade,element:s.contentsElement,viewProps:e.viewProps}),view:s}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const r=this.rackController.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;up(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Xc(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const yp=je({id:"tab",type:"blade",accept(n){const t=ge(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new Wu(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new mc(n.document,{blade:or(),itemProps:Vt.fromObject({selected:!1,title:e.title}),props:Vt.fromObject({selected:!1}),viewProps:vi.create()});t.add(i)}),t},api(n){return n.controller instanceof Wu?new dy(n.controller,n.pool):n.controller instanceof mc?new py(n.controller,n.pool):null}});function gy(n,t){const e=n.accept(t.params);if(!e)return null;const i=ge(t.params,s=>({disabled:s.optional.boolean,hidden:s.optional.boolean}));return n.controller({blade:or(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:vi.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class Jc extends Ir{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class vy{constructor(){this.disabled=!1,this.emitter=new Re}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class _y{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new Re,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Gr{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function ja(n,t){if(n instanceof t)return n;if(n instanceof Gr){const e=n.constraints.reduce((i,s)=>i||(s instanceof t?s:null),null);if(e)return e}return null}class Wr{constructor(t){this.values=Vt.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(s=>s.value===t).length>0?t:e[0].value}}function Xr(n){var t;const e=dc;if(Array.isArray(n))return(t=ge({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function jc(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function Qc(n){return ue(n)?null:new Wr(jc(n))}const nl=Yt("lst");class xy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(nl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(nl("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const s=t.createElement("div");s.classList.add(nl("m")),s.appendChild(po(t,"dropdown")),this.element.appendChild(s),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,jn(this.props_,"options",r=>{dp(this.selectElement),r.forEach(a=>{const o=t.createElement("option");o.textContent=a.text,this.selectElement.appendChild(o)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Wi{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new xy(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return mn(t,null,e=>({options:e.required.custom(Xr)}),e=>(this.props.set("options",jc(e.options)),!0))}exportProps(){return gn(null,{options:this.props.get("options")})}}const Xu=Yt("pop");class by{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Xu()),e.viewProps.bindClassModifiers(this.element),ui(e.shows,rr(this.element,Xu(void 0,"v")))}}class wp{constructor(t,e){this.shows=pe(!1),this.viewProps=e.viewProps,this.view=new by(t,{shows:this.shows,viewProps:this.viewProps})}}const qu=Yt("txt");class yy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(qu()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(qu("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Ur{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new yy(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,s=this.parser_(i);ue(s)||(this.value.rawValue=s),this.view.refresh()}}function wy(n){return String(n)}function Mp(n){return n==="false"?!1:!!n}function Yu(n){return wy(n)}function My(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const Sy=sn(0);function Qa(n){return Sy(n)+"%"}function Sp(n){return String(n)}function gc(n){return n}function lr({primary:n,secondary:t,forward:e,backward:i}){let s=!1;function r(a){s||(s=!0,a(),s=!1)}n.emitter.on("change",a=>{r(()=>{t.setRawValue(e(n.rawValue,t.rawValue),a.options)})}),t.emitter.on("change",a=>{r(()=>{n.setRawValue(i(n.rawValue,t.rawValue),a.options)}),r(()=>{t.setRawValue(e(n.rawValue,t.rawValue),a.options)})}),r(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function en(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Nr(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function gi(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Ey(n){return n==="ArrowUp"||n==="ArrowDown"}function Ep(n){return Ey(n)||n==="ArrowLeft"||n==="ArrowRight"}function il(n,t){var e,i;const s=t.ownerDocument.defaultView,r=t.getBoundingClientRect();return{x:n.pageX-(((e=s&&s.scrollX)!==null&&e!==void 0?e:0)+r.left),y:n.pageY-(((i=s&&s.scrollY)!==null&&i!==void 0?i:0)+r.top)}}class gs{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new Re,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(il(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(il(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(il(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,s=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-s.left,y:i.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const xn=Yt("txt");class Ty{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(xn(),xn(void 0,"num")),e.arrayPosition&&this.element.classList.add(xn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(xn("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(xn()),this.inputElement.classList.add(xn("i"));const s=t.createElement("div");s.classList.add(xn("k")),this.element.appendChild(s),this.knobElement=s;const r=t.createElementNS(Kn,"svg");r.classList.add(xn("g")),this.knobElement.appendChild(r);const a=t.createElementNS(Kn,"path");a.classList.add(xn("gb")),r.appendChild(a),this.guideBodyElem_=a;const o=t.createElementNS(Kn,"path");o.classList.add(xn("gh")),r.appendChild(o),this.guideHeadElem_=o;const c=t.createElement("div");c.classList.add(Yt("tt")()),this.knobElement.appendChild(c),this.tooltipElem_=c,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(xn(void 0,"drg"));return}this.element.classList.add(xn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),s=De(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+s},0 L${i},4 L${i+s},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const r=this.props_.get("formatter");this.tooltipElem_.textContent=r(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class qr{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=pe(null),this.view=new Ty(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const s=new gs(this.view.knobElement);s.emitter.on("down",this.onPointerDown_),s.emitter.on("move",this.onPointerMove_),s.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const s=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),r=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let a=t;return s!==void 0&&(a=Math.max(a,s)),r!==void 0&&(a=Math.min(a,r)),a}onInputChange_(t){const i=t.currentTarget.value,s=this.parser_(i);ue(s)||(this.value.rawValue=this.constrainValue_(s)),this.view.refresh()}onInputKeyDown_(t){const e=en(this.props.get("keyScale"),Nr(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){en(this.props.get("keyScale"),Nr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const sl=Yt("sld");class Cy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(sl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(sl("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const s=t.createElement("div");s.classList.add(sl("k")),this.trackElement.appendChild(s),this.knobElement=s,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=De(Qt(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class Ay{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new Cy(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new gs(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Qt(De(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=en(this.props.get("keyScale"),gi(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){en(this.props.get("keyScale"),gi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const rl=Yt("sldtxt");class Py{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(rl());const i=t.createElement("div");i.classList.add(rl("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(rl("t")),this.textView_=e.textView,s.appendChild(this.textView_.element),this.element.appendChild(s)}}class to{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new Ay(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new qr(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new Py(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return mn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return gn(null,{max:t.get("max"),min:t.get("min")})}}function Tp(n){return{sliderProps:new Vt({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Vt({formatter:pe(n.formatter),keyScale:n.keyScale,pointerScale:pe(n.pointerScale)})}}const Ry={containerUnitSize:"cnt-usz"};function Cp(n){return`--${Ry[n]}`}function Fr(n){return cp(n)}function Oi(n){if(uc(n))return ge(n,Fr)}function li(n,t){if(!n)return;const e=[],i=ap(n,t);i&&e.push(i);const s=op(n);return s&&e.push(s),new Gr(e)}function Ly(n){return n?n.major===ar.major:!1}function Ap(n){if(n==="inline"||n==="popup")return n}function Yr(n,t){n.write(t)}const Ta=Yt("ckb");class Dy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ta()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(Ta("l")),this.element.appendChild(i),this.labelElement=i;const s=t.createElement("input");s.classList.add(Ta("i")),s.type="checkbox",this.labelElement.appendChild(s),this.inputElement=s,e.viewProps.bindDisabled(this.inputElement);const r=t.createElement("div");r.classList.add(Ta("w")),this.labelElement.appendChild(r);const a=po(t,"check");r.appendChild(a),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Iy{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Dy(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function Uy(n){const t=[],e=Qc(n.options);return e&&t.push(e),new Gr(t)}const Ny=je({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=ge(t,i=>({options:i.optional.custom(Xr),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Mp,constraint:n=>Uy(n.params),writer:n=>Yr},controller:n=>{const t=n.document,e=n.value,i=n.constraint,s=i&&ja(i,Wr);return s?new Wi(t,{props:new Vt({options:s.values.value("options")}),value:e,viewProps:n.viewProps}):new Iy(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof Wi?new Jc(n.controller):null}}),Ji=Yt("col");class Fy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ji()),e.foldable.bindExpandedClass(this.element,Ji(void 0,"expanded")),jn(e.foldable,"completed",rr(this.element,Ji(void 0,"cpl")));const i=t.createElement("div");i.classList.add(Ji("h")),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(Ji("s")),i.appendChild(s),this.swatchElement=s;const r=t.createElement("div");if(r.classList.add(Ji("t")),i.appendChild(r),this.textElement=r,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(Ji("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}function Oy(n,t,e){const i=De(n/255,0,1),s=De(t/255,0,1),r=De(e/255,0,1),a=Math.max(i,s,r),o=Math.min(i,s,r),c=a-o;let l=0,u=0;const d=(o+a)/2;return c!==0&&(u=c/(1-Math.abs(a+o-1)),i===a?l=(s-r)/c:s===a?l=2+(r-i)/c:l=4+(i-s)/c,l=l/6+(l<0?1:0)),[l*360,u*100,d*100]}function By(n,t,e){const i=(n%360+360)%360,s=De(t/100,0,1),r=De(e/100,0,1),a=(1-Math.abs(2*r-1))*s,o=a*(1-Math.abs(i/60%2-1)),c=r-a/2;let l,u,d;return i>=0&&i<60?[l,u,d]=[a,o,0]:i>=60&&i<120?[l,u,d]=[o,a,0]:i>=120&&i<180?[l,u,d]=[0,a,o]:i>=180&&i<240?[l,u,d]=[0,o,a]:i>=240&&i<300?[l,u,d]=[o,0,a]:[l,u,d]=[a,0,o],[(l+c)*255,(u+c)*255,(d+c)*255]}function ky(n,t,e){const i=De(n/255,0,1),s=De(t/255,0,1),r=De(e/255,0,1),a=Math.max(i,s,r),o=Math.min(i,s,r),c=a-o;let l;c===0?l=0:a===i?l=60*(((s-r)/c%6+6)%6):a===s?l=60*((r-i)/c+2):l=60*((i-s)/c+4);const u=a===0?0:c/a,d=a;return[l,u*100,d*100]}function Pp(n,t,e){const i=ip(n,360),s=De(t/100,0,1),r=De(e/100,0,1),a=r*s,o=a*(1-Math.abs(i/60%2-1)),c=r-a;let l,u,d;return i>=0&&i<60?[l,u,d]=[a,o,0]:i>=60&&i<120?[l,u,d]=[o,a,0]:i>=120&&i<180?[l,u,d]=[0,a,o]:i>=180&&i<240?[l,u,d]=[0,o,a]:i>=240&&i<300?[l,u,d]=[o,0,a]:[l,u,d]=[a,0,o],[(l+c)*255,(u+c)*255,(d+c)*255]}function Vy(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/200]}function zy(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/200]}function Qn(n){return[n[0],n[1],n[2]]}function mo(n,t){return[n[0],n[1],n[2],t]}const Hy={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:Vy,rgb:By},hsv:{hsl:zy,hsv:(n,t,e)=>[n,t,e],rgb:Pp},rgb:{hsl:Oy,hsv:ky,rgb:(n,t,e)=>[n,t,e]}};function ir(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function Gy(n,t){return n===t?t:ip(n,t)}function Rp(n,t,e){var i;const s=ir(t,e);return[t==="rgb"?De(n[0],0,s[0]):Gy(n[0],s[0]),De(n[1],0,s[1]),De(n[2],0,s[2]),De((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function Ku(n,t,e,i){const s=ir(t,e),r=ir(t,i);return n.map((a,o)=>a/s[o]*r[o])}function Lp(n,t,e){const i=Ku(n,t.mode,t.type,"int"),s=Hy[t.mode][e.mode](...i);return Ku(s,e.mode,"int",e.type)}class Kt{static black(){return new Kt([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=Rp(t,e,this.type)}getComponents(t){return mo(Lp(Qn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ci=Yt("colp");class Wy{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Ci()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ci("hsv"));const s=t.createElement("div");s.classList.add(Ci("sv")),this.svPaletteView_=e.svPaletteView,s.appendChild(this.svPaletteView_.element),i.appendChild(s);const r=t.createElement("div");r.classList.add(Ci("h")),this.hPaletteView_=e.hPaletteView,r.appendChild(this.hPaletteView_.element),i.appendChild(r),this.element.appendChild(i);const a=t.createElement("div");if(a.classList.add(Ci("rgb")),this.textsView_=e.textsView,a.appendChild(this.textsView_.element),this.element.appendChild(a),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const o=t.createElement("div");o.classList.add(Ci("a"));const c=t.createElement("div");c.classList.add(Ci("ap")),c.appendChild(this.alphaViews_.palette.element),o.appendChild(c);const l=t.createElement("div");l.classList.add(Ci("at")),l.appendChild(this.alphaViews_.text.element),o.appendChild(l),this.element.appendChild(o)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function Xy(n){return n==="int"?"int":n==="float"?"float":void 0}function th(n){return ge(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(Xy)}),expanded:t.optional.boolean,picker:t.optional.custom(Ap),readonly:t.optional.constant(!1)}))}function us(n){return n?.1:1}function Dp(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class eh{constructor(t,e){this.type="float",this.mode=e,this.comps_=Rp(t,e,this.type)}getComponents(t){return mo(Lp(Qn(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const qy={int:(n,t)=>new Kt(n,t),float:(n,t)=>new eh(n,t)};function nh(n,t,e){return qy[e](n,t)}function Yy(n){return n.type==="float"}function Ky(n){return n.type==="int"}function $y(n){const t=n.getComponents(),e=ir(n.mode,"int");return new Kt([Math.round(Qt(t[0],0,1,0,e[0])),Math.round(Qt(t[1],0,1,0,e[1])),Math.round(Qt(t[2],0,1,0,e[2])),t[3]],n.mode)}function Zy(n){const t=n.getComponents(),e=ir(n.mode,"int");return new eh([Qt(t[0],0,e[0],0,1),Qt(t[1],0,e[1],0,1),Qt(t[2],0,e[2],0,1),t[3]],n.mode)}function Je(n,t){if(n.type===t)return n;if(Ky(n)&&t==="float")return Zy(n);if(Yy(n)&&t==="int")return $y(n);throw we.shouldNeverHappen()}function Jy(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function Mn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const jy={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ip(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return jy[i](e)}function Up(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Mn(t[1],255),Mn(t[2],255),Mn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Qy(n){const t=Up(n);return t?new Kt(t,"rgb"):null}function Np(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Mn(t[1],255),Mn(t[2],255),Mn(t[3],255),Mn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function tw(n){const t=Np(n);return t?new Kt(t,"rgb"):null}function Fp(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ip(t[1]),Mn(t[2],100),Mn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function ew(n){const t=Fp(n);return t?new Kt(t,"hsl"):null}function Op(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ip(t[1]),Mn(t[2],100),Mn(t[3],100),Mn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function nw(n){const t=Op(n);return t?new Kt(t,"hsl"):null}function Bp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function iw(n){const t=Bp(n);return t?new Kt(t,"rgb"):null}function kp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Qt(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Qt(parseInt(e[4],16),0,255,0,1)]:null}function sw(n){const t=kp(n);return t?new Kt(t,"rgb"):null}function Vp(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function rw(n){return t=>{const e=Vp(t);return e?nh(e,"rgb",n):null}}function zp(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function aw(n){return t=>{const e=zp(t);return e?nh(e,"rgb",n):null}}const ow=[{parser:Bp,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:kp,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Up,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Np,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Fp,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Op,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Vp,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:zp,result:{alpha:!0,mode:"rgb",notation:"object"}}];function lw(n){return ow.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function cw(n,t="int"){const e=lw(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function Kr(n){const t=[iw,sw,Qy,tw,ew,nw];t.push(rw("int"),aw("int"));const e=My(t);return i=>{const s=e(i);return s?Je(s,n):null}}function hw(n){const t=Kr("int");if(typeof n!="string")return Kt.black();const e=t(n);return e??Kt.black()}function Hp(n){const t=De(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function ih(n,t="#"){const e=Qn(n.getComponents("rgb")).map(Hp).join("");return`${t}${e}`}function sh(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(Hp).join("");return`${t}${i}`}function Gp(n){const t=sn(0),e=Je(n,"int");return`rgb(${Qn(e.getComponents("rgb")).map(s=>t(s)).join(", ")})`}function Ia(n){const t=sn(2),e=sn(0);return`rgba(${Je(n,"int").getComponents("rgb").map((r,a)=>(a===3?t:e)(r)).join(", ")})`}function uw(n){const t=[sn(0),Qa,Qa],e=Je(n,"int");return`hsl(${Qn(e.getComponents("hsl")).map((s,r)=>t[r](s)).join(", ")})`}function dw(n){const t=[sn(0),Qa,Qa,sn(2)];return`hsla(${Je(n,"int").getComponents("hsl").map((s,r)=>t[r](s)).join(", ")})`}function Wp(n,t){const e=sn(t==="float"?2:0),i=["r","g","b"],s=Je(n,t);return`{${Qn(s.getComponents("rgb")).map((a,o)=>`${i[o]}: ${e(a)}`).join(", ")}}`}function pw(n){return t=>Wp(t,n)}function Xp(n,t){const e=sn(2),i=sn(t==="float"?2:0),s=["r","g","b","a"];return`{${Je(n,t).getComponents("rgb").map((o,c)=>{const l=c===3?e:i;return`${s[c]}: ${l(o)}`}).join(", ")}}`}function fw(n){return t=>Xp(t,n)}const mw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ih},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:sh},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Gp},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Ia},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:uw},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:dw},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:pw(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:fw(t)}],[])];function qp(n){return mw.reduce((t,e)=>t||(Jy(e.format,n)?e.stringifier:null),null)}const Sr=Yt("apl");class gw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Sr()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Sr("b")),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(Sr("c")),i.appendChild(s),this.colorElem_=s;const r=t.createElement("div");r.classList.add(Sr("m")),this.element.appendChild(r),this.markerElem_=r;const a=t.createElement("div");a.classList.add(Sr("p")),this.markerElem_.appendChild(a),this.previewElem_=a,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Kt([e[0],e[1],e[2],0],"rgb"),s=new Kt([e[0],e[1],e[2],255],"rgb"),r=["to right",Ia(i),Ia(s)];this.colorElem_.style.background=`linear-gradient(${r.join(",")})`,this.previewElem_.style.backgroundColor=Ia(t);const a=Qt(e[3],0,1,0,100);this.markerElem_.style.left=`${a}%`}onValueChange_(){this.update_()}}class vw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new gw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new gs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,s=this.value.rawValue,[r,a,o]=s.getComponents("hsv");this.value.setRawValue(new Kt([r,a,o,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=en(us(!0),gi(t));if(e===0)return;const i=this.value.rawValue,[s,r,a,o]=i.getComponents("hsv");this.value.setRawValue(new Kt([s,r,a,o+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){en(us(!0),gi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Bs=Yt("coltxt");function _w(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,s)=>{const r=n.createElement("option");return r.textContent=s.text,r.value=s.value,i.appendChild(r),i},n.createDocumentFragment())),t}class xw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Bs()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Bs("m")),this.modeElem_=_w(t),this.modeElem_.classList.add(Bs("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const s=t.createElement("div");s.classList.add(Bs("mm")),s.appendChild(po(t,"dropdown")),i.appendChild(s),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Bs("w")),this.element.appendChild(r),this.inputsElem_=r,this.inputViews_=e.inputViews,this.applyInputViews_(),ui(e.mode,a=>{this.modeElem_.value=a})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){dp(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(Bs("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function bw(n){return sn(n==="float"?2:0)}function yw(n,t,e){const i=ir(n,t)[e];return new Vr({min:0,max:i})}function ww(n,t,e){return new qr(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:Vt.fromObject({formatter:bw(t.colorType),keyScale:us(!1),pointerScale:t.colorType==="float"?.01:1}),value:pe(0,{constraint:yw(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function Mw(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:mi,viewProps:t.viewProps};return[0,1,2].map(i=>{const s=ww(n,e,i);return lr({primary:t.value,secondary:s.value,forward(r){return Je(r,t.colorType).getComponents(t.colorMode)[i]},backward(r,a){const o=t.colorMode,l=Je(r,t.colorType).getComponents(o);l[i]=a;const u=nh(mo(Qn(l),l[3]),o,t.colorType);return Je(u,"int")}}),s})}function Sw(n,t){const e=new Ur(n,{parser:Kr("int"),props:Vt.fromObject({formatter:ih}),value:pe(Kt.black()),viewProps:t.viewProps});return lr({primary:t.value,secondary:e.value,forward:i=>new Kt(Qn(i.getComponents()),i.mode),backward:(i,s)=>new Kt(mo(Qn(s.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Ew(n){return n!=="hex"}class Tw{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=pe(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new xw(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return Ew(e)?Mw(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):Sw(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const al=Yt("hpl");class Cw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(al()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(al("c")),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(al("m")),this.element.appendChild(s),this.markerElem_=s,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=Gp(new Kt([e,100,100],"hsv"));const i=Qt(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Aw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Cw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new gs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Qt(De(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),s=this.value.rawValue,[,r,a,o]=s.getComponents("hsv");this.value.setRawValue(new Kt([i,r,a,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=en(us(!1),gi(t));if(e===0)return;const i=this.value.rawValue,[s,r,a,o]=i.getComponents("hsv");this.value.setRawValue(new Kt([s+e,r,a,o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){en(us(!1),gi(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ol=Yt("svp"),$u=64;class Pw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ol()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=$u,i.width=$u,i.classList.add(ol("c")),this.element.appendChild(i),this.canvasElement=i;const s=t.createElement("div");s.classList.add(ol("m")),this.element.appendChild(s),this.markerElem_=s,this.update_()}update_(){const t=Ab(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),s=this.canvasElement.width,r=this.canvasElement.height,a=t.getImageData(0,0,s,r),o=a.data;for(let u=0;u<r;u++)for(let d=0;d<s;d++){const h=Qt(d,0,s,0,100),m=Qt(u,0,r,100,0),g=Pp(i[0],h,m),b=(u*s+d)*4;o[b]=g[0],o[b+1]=g[1],o[b+2]=g[2],o[b+3]=255}t.putImageData(a,0,0);const c=Qt(i[1],0,100,0,100);this.markerElem_.style.left=`${c}%`;const l=Qt(i[2],0,100,100,0);this.markerElem_.style.top=`${l}%`}onValueChange_(){this.update_()}}class Rw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Pw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new gs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Qt(t.point.x,0,t.bounds.width,0,100),s=Qt(t.point.y,0,t.bounds.height,100,0),[r,,,a]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Kt([r,i,s,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Ep(t.key)&&t.preventDefault();const[e,i,s,r]=this.value.rawValue.getComponents("hsv"),a=us(!1),o=en(a,gi(t)),c=en(a,Nr(t));o===0&&c===0||this.value.setRawValue(new Kt([e,i+o,s+c,r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=us(!1),i=en(e,gi(t)),s=en(e,Nr(t));i===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Lw{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Aw(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Rw(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new vw(t,{value:this.value,viewProps:this.viewProps}),text:new qr(t,{parser:mi,props:Vt.fromObject({pointerScale:.01,keyScale:.1,formatter:sn(2)}),value:pe(0,{constraint:new Vr({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&lr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,s)=>{const r=i.getComponents();return r[3]=s,new Kt(r,i.mode)}}),this.textsC_=new Tw(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new Wy(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const ll=Yt("colsw");class Dw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(ll()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(ll("sw")),this.element.appendChild(i),this.swatchElem_=i;const s=t.createElement("button");s.classList.add(ll("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=sh(t)}onValueChange_(){this.update_()}}class Iw{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Dw(t,{value:this.value,viewProps:this.viewProps})}}class rh{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Hr.create(e.expanded),this.swatchC_=new Iw(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new Ur(t,{parser:e.parser,props:Vt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Fy(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new wp(t,{viewProps:this.viewProps}):null;const s=new Lw(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(r=>{r.addEventListener("blur",this.onPopupChildBlur_),r.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(s.view.element),lr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:r=>r,backward:(r,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Zc(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=pp(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Wc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Uw(n){return Qn(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function Nw(n){return n.getComponents("rgb").reduce((t,e,i)=>{const s=Math.floor(i===3?e*255:e)&255;return t<<8|s},0)>>>0}function Fw(n){return new Kt([n>>16&255,n>>8&255,n&255],"rgb")}function Ow(n){return new Kt([n>>24&255,n>>16&255,n>>8&255,Qt(n&255,0,255,0,1)],"rgb")}function Bw(n){return typeof n!="number"?Kt.black():Fw(n)}function kw(n){return typeof n!="number"?Kt.black():Ow(n)}function Ua(n,t){return typeof n!="object"||ue(n)?!1:t in n&&typeof n[t]=="number"}function Yp(n){return Ua(n,"r")&&Ua(n,"g")&&Ua(n,"b")}function Kp(n){return Yp(n)&&Ua(n,"a")}function $p(n){return Yp(n)}function ah(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let s=0;s<e.length;s++)if(e[s]!==i[s])return!1;return!0}function Zu(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function Vw(n){const t=qp(n);return t?(e,i)=>{Yr(e,t(i))}:null}function zw(n){const t=n?Nw:Uw;return(e,i)=>{Yr(e,t(i))}}function Hw(n,t,e){const s=Je(t,e).toRgbaObject();n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function Gw(n,t,e){const s=Je(t,e).toRgbaObject();n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Ww(n,t){return(e,i)=>{n?Hw(e,i,t):Gw(e,i,t)}}function Xw(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function qw(n){return n?t=>sh(t,"0x"):t=>ih(t,"0x")}function Yw(n){return"color"in n||n.view==="color"}const Kw=je({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!Yw(t))return null;const e=th(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:Xw(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?kw:Bw,equals:ah,writer:n=>zw(n.params.supportsAlpha)},controller:n=>{var t,e;return new rh(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:qw(n.params.supportsAlpha),parser:Kr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function $w(n,t){if(!$p(n))return Je(Kt.black(),t);if(t==="int"){const e=Zu(n);return new Kt(e,"rgb")}if(t==="float"){const e=Zu(n);return new eh(e,"rgb")}return Je(Kt.black(),"int")}function Zw(n){return Kp(n)}function Jw(n){return t=>{const e=$w(t,n);return Je(e,"int")}}function jw(n,t){return e=>n?Xp(e,t):Wp(e,t)}const Qw=je({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!$p(n))return null;const i=th(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Dp(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>Jw(n.params.colorType),equals:ah,writer:n=>Ww(Zw(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Kp(n.initialValue);return new rh(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:jw(i,n.params.colorType),parser:Kr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),tM=je({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=cw(n,Dp(t));if(!e)return null;const i=qp(e);if(!i)return null;const s=th(t);return s?{initialValue:n,params:Object.assign(Object.assign({},s),{format:e,stringifier:i})}:null},binding:{reader:()=>hw,equals:ah,writer:n=>{const t=Vw(n.params.format);if(!t)throw we.notBindable();return t}},controller:n=>{var t,e;return new rh(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:Kr("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class oh{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,s)=>{var r,a;return(a=(r=this.components[s])===null||r===void 0?void 0:r.constrain(i))!==null&&a!==void 0?a:i});return this.asm_.fromComponents(e)}}const Ju=Yt("pndtxt");class eM{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(Ju()),this.textViews.forEach(i=>{const s=t.createElement("div");s.classList.add(Ju("a")),s.appendChild(i.element),this.element.appendChild(s)})}}function nM(n,t,e){return new qr(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:pe(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class lh{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,s)=>nM(t,e,s)),this.acs_.forEach((i,s)=>{lr({primary:this.value,secondary:i.value,forward:r=>e.assembly.toComponents(r)[s],backward:(r,a)=>{const o=e.assembly.toComponents(r);return o[s]=a,e.assembly.fromComponents(o)}})}),this.view=new eM(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class iM extends Ir{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function sM(n,t){const e=[],i=ap(n,t);i&&e.push(i);const s=op(n);s&&e.push(s);const r=Qc(n.options);return r&&e.push(r),new Gr(e)}const rM=je({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=ge(t,i=>Object.assign(Object.assign({},cp(i)),{options:i.optional.custom(Xr),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>np,constraint:n=>sM(n.params,n.initialValue),writer:n=>Yr},controller:n=>{const t=n.value,e=n.constraint,i=e&&ja(e,Wr);if(i)return new Wi(n.document,{props:new Vt({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const s=lp(n.params,t.rawValue),r=e&&ja(e,Vr);return r?new to(n.document,Object.assign(Object.assign({},Tp(Object.assign(Object.assign({},s),{keyScale:pe(s.keyScale),max:r.values.value("max"),min:r.values.value("min")}))),{parser:mi,value:t,viewProps:n.viewProps})):new qr(n.document,{parser:mi,props:Vt.fromObject(s),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof to?new iM(n.controller):n.controller.valueController instanceof Wi?new Jc(n.controller):null}});class Vi{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(ue(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const Zp={toComponents:n=>n.getComponents(),fromComponents:n=>new Vi(...n)},ks=Yt("p2d");class aM{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ks()),e.viewProps.bindClassModifiers(this.element),ui(e.expanded,rr(this.element,ks(void 0,"expanded")));const i=t.createElement("div");i.classList.add(ks("h")),this.element.appendChild(i);const s=t.createElement("button");s.classList.add(ks("b")),s.appendChild(po(t,"p2dpad")),e.viewProps.bindDisabled(s),i.appendChild(s),this.buttonElement=s;const r=t.createElement("div");if(r.classList.add(ks("t")),i.appendChild(r),this.textElement=r,e.pickerLayout==="inline"){const a=t.createElement("div");a.classList.add(ks("p")),this.element.appendChild(a),this.pickerElement=a}else this.pickerElement=null}}const Ai=Yt("p2dp");class oM{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Ai()),e.layout==="popup"&&this.element.classList.add(Ai(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ai("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const s=t.createElementNS(Kn,"svg");s.classList.add(Ai("g")),this.padElement.appendChild(s),this.svgElem_=s;const r=t.createElementNS(Kn,"line");r.classList.add(Ai("ax")),r.setAttributeNS(null,"x1","0"),r.setAttributeNS(null,"y1","50%"),r.setAttributeNS(null,"x2","100%"),r.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(r);const a=t.createElementNS(Kn,"line");a.classList.add(Ai("ax")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","0"),a.setAttributeNS(null,"x2","50%"),a.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(a);const o=t.createElementNS(Kn,"line");o.classList.add(Ai("l")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(o),this.lineElem_=o;const c=t.createElement("div");c.classList.add(Ai("m")),this.padElement.appendChild(c),this.markerElem_=c,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),s=Qt(t,-i,+i,0,100),r=Qt(e,-i,+i,0,100),a=this.props_.get("invertsY")?100-r:r;this.lineElem_.setAttributeNS(null,"x2",`${s}%`),this.lineElem_.setAttributeNS(null,"y2",`${a}%`),this.markerElem_.style.left=`${s}%`,this.markerElem_.style.top=`${a}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ju(n,t,e){return[en(t[0],gi(n)),en(t[1],Nr(n))*(e?1:-1)]}class lM{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new oM(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new gs(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),s=Qt(t.point.x,0,t.bounds.width,-i,+i),r=Qt(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Vi(s,r),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Ep(t.key)&&t.preventDefault();const[e,i]=ju(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Vi(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=ju(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class cM{constructor(t,e){var i,s;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Hr.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new wp(t,{viewProps:this.viewProps}):null;const r=new lM(t,{layout:e.pickerLayout,props:new Vt({invertsY:pe(e.invertsY),max:pe(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(a=>{a.addEventListener("blur",this.onPopupChildBlur_),a.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.textC_=new lh(t,{assembly:Zp,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new aM(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),lr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:a=>a,backward:(a,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Zc(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=pp(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!Wc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function hM(n){return Vi.isObject(n)?new Vi(n.x,n.y):new Vi}function uM(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function dM(n,t){return new oh({assembly:Zp,components:[li(Object.assign(Object.assign({},n),n.x),t.x),li(Object.assign(Object.assign({},n),n.y),t.y)]})}function Qu(n,t){var e,i;if(!ue(n.min)||!ue(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const s=sp(n);return Math.max(Math.abs(s)*10,Math.abs(t)*10)}function pM(n,t){var e,i;const s=Qu(cs(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),r=Qu(cs(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(s,r)}function fM(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const mM=je({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Vi.isObject(n))return null;const e=ge(t,i=>Object.assign(Object.assign({},Fr(i)),{expanded:i.optional.boolean,picker:i.optional.custom(Ap),readonly:i.optional.constant(!1),x:i.optional.custom(Oi),y:i.optional.object(Object.assign(Object.assign({},Fr(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>hM,constraint:n=>dM(n.params,n.initialValue),equals:Vi.equals,writer:()=>uM},controller:n=>{var t,e;const i=n.document,s=n.value,r=n.constraint,a=[n.params.x,n.params.y];return new cM(i,{axes:s.rawValue.getComponents().map((o,c)=>{var l;return Gc({constraint:r.components[c],initialValue:o,params:cs(n.params,(l=a[c])!==null&&l!==void 0?l:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:fM(n.params),max:pM(n.params,s.rawValue),parser:mi,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:s,viewProps:n.viewProps})}});class Ks{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(ue(t))return!1;const e=t.x,i=t.y,s=t.z;return!(typeof e!="number"||typeof i!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Jp={toComponents:n=>n.getComponents(),fromComponents:n=>new Ks(...n)};function gM(n){return Ks.isObject(n)?new Ks(n.x,n.y,n.z):new Ks}function vM(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function _M(n,t){return new oh({assembly:Jp,components:[li(Object.assign(Object.assign({},n),n.x),t.x),li(Object.assign(Object.assign({},n),n.y),t.y),li(Object.assign(Object.assign({},n),n.z),t.z)]})}const xM=je({id:"input-point3d",type:"input",accept:(n,t)=>{if(!Ks.isObject(n))return null;const e=ge(t,i=>Object.assign(Object.assign({},Fr(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(Oi),y:i.optional.custom(Oi),z:i.optional.custom(Oi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>gM,constraint:n=>_M(n.params,n.initialValue),equals:Ks.equals,writer:n=>vM},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new lh(n.document,{assembly:Jp,axes:t.rawValue.getComponents().map((s,r)=>{var a;return Gc({constraint:e.components[r],initialValue:s,params:cs(n.params,(a=i[r])!==null&&a!==void 0?a:{})})}),parser:mi,value:t,viewProps:n.viewProps})}});class $s{constructor(t=0,e=0,i=0,s=0){this.x=t,this.y=e,this.z=i,this.w=s}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(ue(t))return!1;const e=t.x,i=t.y,s=t.z,r=t.w;return!(typeof e!="number"||typeof i!="number"||typeof s!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const jp={toComponents:n=>n.getComponents(),fromComponents:n=>new $s(...n)};function bM(n){return $s.isObject(n)?new $s(n.x,n.y,n.z,n.w):new $s}function yM(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function wM(n,t){return new oh({assembly:jp,components:[li(Object.assign(Object.assign({},n),n.x),t.x),li(Object.assign(Object.assign({},n),n.y),t.y),li(Object.assign(Object.assign({},n),n.z),t.z),li(Object.assign(Object.assign({},n),n.w),t.w)]})}const MM=je({id:"input-point4d",type:"input",accept:(n,t)=>{if(!$s.isObject(n))return null;const e=ge(t,i=>Object.assign(Object.assign({},Fr(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(Oi),x:i.optional.custom(Oi),y:i.optional.custom(Oi),z:i.optional.custom(Oi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>bM,constraint:n=>wM(n.params,n.initialValue),equals:$s.equals,writer:n=>yM},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new lh(n.document,{assembly:jp,axes:t.rawValue.getComponents().map((s,r)=>{var a;return Gc({constraint:e.components[r],initialValue:s,params:cs(n.params,(a=i[r])!==null&&a!==void 0?a:{})})}),parser:mi,value:t,viewProps:n.viewProps})}});function SM(n){const t=[],e=Qc(n.options);return e&&t.push(e),new Gr(t)}const EM=je({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=ge(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(Xr)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Sp,constraint:n=>SM(n.params),writer:n=>Yr},controller:n=>{const t=n.document,e=n.value,i=n.constraint,s=i&&ja(i,Wr);return s?new Wi(t,{props:new Vt({options:s.values.value("options")}),value:e,viewProps:n.viewProps}):new Ur(t,{parser:r=>r,props:Vt.fromObject({formatter:gc}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof Wi?new Jc(n.controller):null}}),$r={monitor:{defaultInterval:200,defaultRows:3}},td=Yt("mll");class TM{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(td()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(td("i")),i.style.height=`calc(var(${Cp("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(s=>{s!==void 0&&i.push(this.formatter_(s))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class ch{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new TM(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const ed=Yt("sgl");class CM{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(ed()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(ed("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class hh{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new CM(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const AM=je({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=ge(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Mp},controller:n=>{var t;return n.value.rawValue.length===1?new hh(n.document,{formatter:Yu,value:n.value,viewProps:n.viewProps}):new ch(n.document,{formatter:Yu,rows:(t=n.params.rows)!==null&&t!==void 0?t:$r.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class PM extends Ir{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const Pi=Yt("grl");class RM{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Pi()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(Kn,"svg");i.classList.add(Pi("g")),i.style.height=`calc(var(${Cp("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const s=t.createElementNS(Kn,"polyline");this.svgElem_.appendChild(s),this.lineElem_=s;const r=t.createElement("div");r.classList.add(Pi("t"),Yt("tt")()),this.element.appendChild(r),this.tooltipElem_=r,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,s=this.props_.get("min"),r=this.props_.get("max"),a=[];this.value.rawValue.forEach((d,h)=>{if(d===void 0)return;const m=Qt(h,0,i,0,t),g=Qt(d,s,r,e,0);a.push([m,g].join(","))}),this.lineElem_.setAttributeNS(null,"points",a.join(" "));const o=this.tooltipElem_,c=this.value.rawValue[this.cursor_.rawValue];if(c===void 0){o.classList.remove(Pi("t","a"));return}const l=Qt(this.cursor_.rawValue,0,i,0,t),u=Qt(c,s,r,e,0);o.style.left=`${l}px`,o.style.top=`${u}px`,o.textContent=`${this.formatter_(c)}`,o.classList.contains(Pi("t","a"))||(o.classList.add(Pi("t","a"),Pi("t","in")),Ja(o),o.classList.remove(Pi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Qp{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=pe(-1),this.view=new RM(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Wc(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new gs(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return mn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return gn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(Qt(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Qt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function vc(n){return ue(n.format)?sn(2):n.format}function LM(n){var t;return n.value.rawValue.length===1?new hh(n.document,{formatter:vc(n.params),value:n.value,viewProps:n.viewProps}):new ch(n.document,{formatter:vc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:$r.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function DM(n){var t,e,i;return new Qp(n.document,{formatter:vc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:$r.monitor.defaultRows,props:Vt.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function nd(n){return n.view==="graph"}const IM=je({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=ge(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>nd(n)?64:1,reader:n=>np},controller:n=>nd(n.params)?DM(n):LM(n),api:n=>n.controller.valueController instanceof Qp?new PM(n.controller):null}),UM=je({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=ge(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Sp},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new ch(n.document,{formatter:gc,rows:(t=n.params.rows)!==null&&t!==void 0?t:$r.monitor.defaultRows,value:e,viewProps:n.viewProps}):new hh(n.document,{formatter:gc,value:e,viewProps:n.viewProps})}});class NM{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class FM{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function OM(n,t){var e;const i=n.accept(t.target.read(),t.params);if(ue(i))return null;const s={target:t.target,initialValue:i.initialValue,params:i.params},r=ge(t.params,d=>({disabled:d.optional.boolean,hidden:d.optional.boolean,label:d.optional.string,tag:d.optional.string})),a=n.binding.reader(s),o=n.binding.constraint?n.binding.constraint(s):void 0,c=new FM({reader:a,target:t.target,writer:n.binding.writer(s)}),l=new bb(pe(a(i.initialValue),{constraint:o,equals:n.binding.equals}),c),u=n.controller({constraint:o,document:t.document,initialValue:i.initialValue,params:i.params,value:l,viewProps:vi.create({disabled:r==null?void 0:r.disabled,hidden:r==null?void 0:r.hidden})});return new Nb(t.document,{blade:or(),props:Vt.fromObject({label:"label"in t.params?(e=r==null?void 0:r.label)!==null&&e!==void 0?e:null:t.target.key}),tag:r==null?void 0:r.tag,value:l,valueController:u})}class BM{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function kM(n,t){return t===0?new vy:new _y(n,t??$r.monitor.defaultInterval)}function VM(n,t){var e,i,s;const r=n.accept(t.target.read(),t.params);if(ue(r))return null;const a={target:t.target,initialValue:r.initialValue,params:r.params},o=ge(t.params,h=>({bufferSize:h.optional.number,disabled:h.optional.boolean,hidden:h.optional.boolean,interval:h.optional.number,label:h.optional.string})),c=n.binding.reader(a),l=(i=(e=o==null?void 0:o.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(r.params))!==null&&i!==void 0?i:1,u=new Vb({binding:new BM({reader:c,target:t.target}),bufferSize:l,ticker:kM(t.document,o==null?void 0:o.interval)}),d=n.controller({document:t.document,params:r.params,value:u,viewProps:vi.create({disabled:o==null?void 0:o.disabled,hidden:o==null?void 0:o.hidden})});return d.viewProps.bindDisabled(u.ticker),d.viewProps.handleDispose(()=>{u.ticker.dispose()}),new Hb(t.document,{blade:or(),props:Vt.fromObject({label:"label"in t.params?(s=o==null?void 0:o.label)!==null&&s!==void 0?s:null:t.target.key}),value:u,valueController:d})}class zM{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!Ly(e.core))throw we.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((s,r)=>s??OM(r,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((s,r)=>s??VM(r,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const s=e.read();if(ue(s))throw new we({context:{key:e.key},type:"nomatchingcontroller"});const r=this.createInput_(t,e,i);if(r)return r;const a=this.createMonitor_(t,e,i);if(a)return a;throw new we({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((s,r)=>s??gy(r,{document:t,params:e}),null);if(!i)throw new we({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,s)=>{var r,a;return i||((a=(r=s.api)===null||r===void 0?void 0:r.call(s,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new Ir(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,s)=>{var r,a;return i||((a=(r=s.api)===null||r===void 0?void 0:r.call(s,{controller:t}))!==null&&a!==void 0?a:null)},null);return this.apiCache_.add(t,e??new Ir(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(Fb(t))return this.createInputBindingApi_(t);if(Gb(t))return this.createMonitorBindingApi_(t);throw we.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(Ub(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,s)=>i??s.api({controller:t,pool:this}),null);if(!e)throw we.shouldNeverHappen();return this.apiCache_.add(t,e)}}const HM=new NM;function GM(){const n=new zM(HM);return[mM,xM,MM,EM,rM,tM,Qw,Kw,Ny,AM,UM,IM,Kb,oy,yp].forEach(t=>{n.register("core",t)}),n}class WM extends ms{constructor(t){super(t),this.emitter_=new Re,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new zr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class XM extends ms{}class qM extends ms{constructor(t){super(t),this.emitter_=new Re,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new zr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class YM extends ms{constructor(t){super(t),this.emitter_=new Re,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new zr(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const KM=(function(){return{id:"list",type:"blade",core:ar,accept(n){const t=ge(n,e=>({options:e.required.custom(Xr),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new Wr(jc(n.params.options)),e=pe(n.params.value,{constraint:t}),i=new Wi(n.document,{props:new Vt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new hs(n.document,{blade:n.blade,props:Vt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof hs)||!(n.controller.valueController instanceof Wi)?null:new WM(n.controller)}}})();class $M extends xp{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class ZM extends fc{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const id=Yt("spr");class JM{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(id()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(id("r")),this.element.appendChild(i)}}class sd extends fo{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new JM(t,{viewProps:e.viewProps})}))}}const jM={id:"separator",type:"blade",core:ar,accept(n){const t=ge(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new sd(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof sd?new XM(n.controller):null}},QM={id:"slider",type:"blade",core:ar,accept(n){const t=ge(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,s=new Vr({max:n.params.max,min:n.params.min}),r=pe(i,{constraint:s}),a=new to(n.document,Object.assign(Object.assign({},Tp({formatter:(e=n.params.format)!==null&&e!==void 0?e:mb,keyScale:pe(1),max:s.values.value("max"),min:s.values.value("min"),pointerScale:rp(n.params,i)})),{parser:mi,value:r,viewProps:n.viewProps}));return new hs(n.document,{blade:n.blade,props:Vt.fromObject({label:n.params.label}),value:r,valueController:a})},api(n){return!(n.controller instanceof hs)||!(n.controller.valueController instanceof to)?null:new qM(n.controller)}},tS=(function(){return{id:"text",type:"blade",core:ar,accept(n){const t=ge(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=pe(n.params.value),i=new Ur(n.document,{parser:n.params.parse,props:Vt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:(s=>String(s))}),value:e,viewProps:n.viewProps});return new hs(n.document,{blade:n.blade,props:Vt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof hs)||!(n.controller.valueController instanceof Ur)?null:new YM(n.controller)}}})();function eS(n){const t=n.createElement("div");return t.classList.add(Yt("dfw")()),n.body&&n.body.appendChild(t),t}function nS(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class iS extends $M{constructor(t){var e,i;const s=t??{},r=(e=s.document)!==null&&e!==void 0?e:Cb(),a=GM(),o=new ZM(r,{expanded:s.expanded,blade:or(),props:Vt.fromObject({title:s.title}),viewProps:vi.create()});super(o,a),this.pool_=a,this.containerElem_=(i=s.container)!==null&&i!==void 0?i:eS(r),this.containerElem_.appendChild(this.element),this.doc_=r,this.usesDefaultWrapper_=!s.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw we.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw we.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&nS(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[KM,jM,QM,yp,tS]})}}new _p("4.0.5");function ye(n,t={}){return{value:n,...t}}const cl={player:{speed:ye(6.2,{min:2,max:16,step:.1}),sprintMult:ye(1.75,{min:1,max:3,step:.05}),jumpSpeed:ye(7.6,{min:3,max:16,step:.1}),gravity:ye(20,{min:4,max:40,step:.5}),shove:ye(.65,{min:0,max:2,step:.05})},physgun:{stiffness:ye(14,{min:2,max:40,step:.5}),throwSpeed:ye(34,{min:5,max:80,step:1}),launchMax:ye(90,{min:20,max:160,step:2}),chargeTime:ye(1.2,{min:.3,max:3,step:.1}),spinSpeed:ye(7,{min:1,max:20,step:.5})},hose:{rate:ye(700,{min:50,max:2e3,step:10}),speed:ye(20,{min:5,max:40,step:.5}),push:ye(2.4,{min:0,max:10,step:.1}),life:ye(2.8,{min:.5,max:6,step:.1})},boom:{radius:ye(6.5,{min:1,max:16,step:.25}),impulse:ye(46,{min:4,max:160,step:1})},thruster:{power:ye(30,{min:5,max:90,step:1})},world:{timeScale:ye(1,{min:.05,max:1.5,step:.05}),buoyancy:ye(1.7,{min:0,max:4,step:.05})},rendering:{exposure:ye(1.08,{min:.3,max:2.5,step:.01})},audio:{volume:ye(.22,{min:0,max:1,step:.01})},debug:{landmarks:ye(!1)}},hl="debug-params",uh=n=>!!n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"value");function tf(n,t=[],e=[]){for(const i in n){const s=n[i];uh(s)?e.push({path:[...t,i],leaf:s}):tf(s,[...t,i],e)}return e}function ef(n){const t={};for(const e in n)t[e]=uh(n[e])?n[e].value:ef(n[e]);return t}const nf=(n,t)=>t.reduce((e,i)=>e[i],n);function rd(n,t,e){nf(n,t.slice(0,-1))[t.at(-1)]=e}const ad=n=>JSON.stringify(n);function sS(){const n=ef(cl),t=tf(cl),e=document.createElement("div");Object.assign(e.style,{position:"fixed",top:"8px",right:"8px",zIndex:"10000",display:"flex",flexDirection:"column",gap:"6px",alignItems:"flex-end"}),document.body.appendChild(e);const i=new rS;e.appendChild(i.dom);const s=new iS({container:e,title:"debug ( / hide · . reset · m landmarks )"});function r(){let f={};try{f=JSON.parse(localStorage.getItem(hl)??"{}")}catch{}for(const{path:p,leaf:S}of t){const P=f[p.join(".")];P&&P.sig===ad(S)&&rd(n,p,P.value)}}function a(){const f={};for(const{path:p,leaf:S}of t)f[p.join(".")]={sig:ad(S),value:nf(n,p)};localStorage.setItem(hl,JSON.stringify(f))}r();function o(f,p,S){for(const P in S){const y=S[P];if(uh(y)){const{value:C,...M}=y;f.addBinding(p,P,M)}else{const C=f.addFolder({title:P,expanded:!1});o(C,p[P],y)}}}o(s,n,cl);const c=[],l=()=>c.forEach(f=>f(n.debug.landmarks));function u(f){c.push(f),f(n.debug.landmarks)}let d=n.debug.landmarks;s.on("change",()=>{a(),n.debug.landmarks!==d&&(d=n.debug.landmarks,l())});function h(){localStorage.removeItem(hl);for(const{path:f,leaf:p}of t)rd(n,f,p.value);s.refresh(),d=n.debug.landmarks,l()}function m(){n.debug.landmarks=!n.debug.landmarks,d=n.debug.landmarks,s.refresh(),a(),l()}let g=!0;function b(){g=!g,e.style.display=g?"flex":"none"}return addEventListener("keydown",f=>{const p=f.target;p&&(p.tagName==="INPUT"||p.tagName==="TEXTAREA"||p.isContentEditable)||(f.key==="/"?(f.preventDefault(),b()):f.key==="."?h():(f.key==="m"||f.key==="M")&&m())}),l(),{params:n,pane:s,stats:i,onLandmarks:u}}class rS{constructor(){W(this,"dom",document.createElement("div"));W(this,"fps",document.createElement("span"));W(this,"ms",document.createElement("span"));W(this,"last",performance.now());W(this,"acc",0);W(this,"frames",0);Object.assign(this.dom.style,{font:"11px ui-monospace, monospace",color:"#0f0",background:"rgba(0,0,0,.6)",padding:"3px 6px",borderRadius:"4px",display:"flex",gap:"10px",pointerEvents:"none",userSelect:"none"}),this.dom.append(this.fps,this.ms)}update(){const t=performance.now();if(this.acc+=t-this.last,this.last=t,this.frames++,this.acc>=500){const e=this.acc/this.frames;this.fps.textContent=`${Math.round(1e3/e)} fps`,this.ms.textContent=`${e.toFixed(2)} ms`,this.acc=0,this.frames=0}}}const aS="modulepreload",oS=function(n){return"/"+n},od={},lS=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let a=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=a(e.map(l=>{if(l=oS(l),l in od)return;od[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":aS,u||(h.as="script"),h.crossOrigin="",h.href=l,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},di={Static:0,Kinematic:1,Dynamic:2},ld=9,Or=8;var Ni,ss,rs,Zs;class cS{constructor(t,e){W(this,"count");En(this,Ni);En(this,ss);En(this,rs);En(this,Zs,!1);an(this,Ni,t),this.count=e.length,an(this,ss,t._malloc(Math.max(4,this.count*4))),an(this,rs,t._malloc(Math.max(4,this.count*Or*4))),t.HEAP32.set(Array.from(e),gt(this,ss)>>2)}read(){if(gt(this,Zs))throw new Error("TransformBatch has been disposed");gt(this,Ni)._b3w_get_body_transforms(gt(this,ss),this.count,gt(this,rs));const t=gt(this,rs)>>2;return gt(this,Ni).HEAPF32.subarray(t,t+this.count*Or)}dispose(){gt(this,Zs)||(gt(this,Ni)._free(gt(this,ss)),gt(this,Ni)._free(gt(this,rs)),an(this,Zs,!0))}}Ni=new WeakMap,ss=new WeakMap,rs=new WeakMap,Zs=new WeakMap;class hS{constructor(t){W(this,"module");this.module=t}createWorld(t=[0,-10,0]){const e=this.module._b3w_create_world(t[0],t[1],t[2]);if(e===0)throw new Error("Box3D failed to create a world");return new uS(this.module,e)}getWorldCount(){return this.module._b3w_get_world_count()}}var Lt,Js,ai,Rn,js,Ge,Na,Gn;class uS{constructor(t,e){En(this,Ge);W(this,"handle");W(this,"fixedTimeStep",1/60);W(this,"substeps",4);En(this,Lt);En(this,Js,!1);En(this,ai,0);En(this,Rn,0);En(this,js,0);an(this,Lt,t),this.handle=e}createBox(t){on(this,Ge,Gn).call(this);const e=t.density??(t.type===di.Dynamic?1:0),i=t.friction??.55,s=t.restitution??.05,r=t.position,a=t.halfExtents,o=gt(this,Lt)._b3w_create_box(this.handle,t.type,r[0],r[1],r[2],a[0],a[1],a[2],e,i,s,t.rollingResistance??0,t.bullet?1:0);if(o===0)throw new Error("Box3D failed to create a box body");return o}createSphere(t){on(this,Ge,Gn).call(this);const e=t.density??(t.type===di.Dynamic?1:0),i=t.friction??.35,s=t.restitution??.25,r=t.rollingResistance??.02,a=t.position,o=gt(this,Lt)._b3w_create_sphere(this.handle,t.type,a[0],a[1],a[2],t.radius,e,i,s,r,t.bullet?1:0);if(o===0)throw new Error("Box3D failed to create a sphere body");return o}createCapsule(t){on(this,Ge,Gn).call(this);const e=t.density??(t.type===di.Dynamic?1:0),i=t.friction??.45,s=t.restitution??.1,r=t.rollingResistance??.02,a=t.position,o=gt(this,Lt)._b3w_create_capsule(this.handle,t.type,a[0],a[1],a[2],t.halfHeight,t.radius,e,i,s,r,t.bullet?1:0);if(o===0)throw new Error("Box3D failed to create a capsule body");return o}step(t=this.fixedTimeStep,e=this.substeps){on(this,Ge,Gn).call(this),gt(this,Lt)._b3w_step_world(this.handle,t,e)}destroyBody(t){gt(this,Lt)._b3w_destroy_body(t)}setBodyTransform(t,e,i=[0,0,0,1]){gt(this,Lt)._b3w_set_body_transform(t,e[0],e[1],e[2],i[0],i[1],i[2],i[3])}setBodyVelocity(t,e,i=[0,0,0]){gt(this,Lt)._b3w_set_body_velocity(t,e[0],e[1],e[2],i[0],i[1],i[2])}applyImpulse(t,e){gt(this,Lt)._b3w_apply_impulse(t,e[0],e[1],e[2])}applyImpulseAtPoint(t,e,i){gt(this,Lt)._b3w_apply_impulse_at_point(t,e[0],e[1],e[2],i[0],i[1],i[2])}applyAngularImpulse(t,e){gt(this,Lt)._b3w_apply_angular_impulse(t,e[0],e[1],e[2])}applyForce(t,e){gt(this,Lt)._b3w_apply_force(t,e[0],e[1],e[2])}explode(t,e,i,s){gt(this,Lt)._b3w_explode(this.handle,t[0],t[1],t[2],e,i,s)}getBodySpeed(t){return gt(this,Lt)._b3w_get_body_speed(t)}getBodyMass(t){return gt(this,Lt)._b3w_get_body_mass(t)}setBodyAwake(t,e){gt(this,Lt)._b3w_set_body_awake(t,e?1:0)}setBodyGravityScale(t,e){gt(this,Lt)._b3w_set_body_gravity_scale(t,e)}setHitEventThreshold(t){gt(this,Lt)._b3w_set_hit_event_threshold(this.handle,t)}setBodyHitEvents(t,e){gt(this,Lt)._b3w_body_enable_hit_events(t,e?1:0)}readHitEvents(t=64){on(this,Ge,Gn).call(this),gt(this,js)<t&&(gt(this,Rn)!==0&&gt(this,Lt)._free(gt(this,Rn)),an(this,Rn,gt(this,Lt)._malloc(t*ld*4)),an(this,js,t));const e=gt(this,Lt)._b3w_get_hit_events(this.handle,gt(this,Rn),t),i=gt(this,Rn)>>2,s=gt(this,Lt).HEAPF32,r=[];for(let a=0;a<e;a+=1){const o=i+a*ld;r.push({bodyA:s[o],bodyB:s[o+1],point:[s[o+2],s[o+3],s[o+4]],normal:[s[o+5],s[o+6],s[o+7]],approachSpeed:s[o+8]})}return r}getBodyCapsule(t){const e=on(this,Ge,Na).call(this);if(gt(this,Lt)._b3w_get_body_capsule(t,e)===0)return;const i=e>>2,s=gt(this,Lt).HEAPF32;return{center1:[s[i],s[i+1],s[i+2]],center2:[s[i+3],s[i+4],s[i+5]],radius:s[i+6]}}spawnHuman(t,e={}){on(this,Ge,Gn).call(this);const i=gt(this,Lt)._b3w_human_bone_count(),s=gt(this,Lt)._malloc(i*4);try{const r=gt(this,Lt)._b3w_spawn_human(this.handle,t[0],t[1],t[2],e.frictionTorque??5,e.hertz??1,e.dampingRatio??.7,s);if(r===0)throw new Error("Box3D failed to spawn a human ragdoll");const a=s>>2,o=Array.from(gt(this,Lt).HEAP32.subarray(a,a+i));return{human:r,bones:o}}finally{gt(this,Lt)._free(s)}}humanSetVelocity(t,e){gt(this,Lt)._b3w_human_set_velocity(t,e[0],e[1],e[2])}humanApplyRandomImpulse(t,e){gt(this,Lt)._b3w_human_apply_random_impulse(t,e)}isBodyAwake(t){return gt(this,Lt)._b3w_body_is_awake(t)!==0}getBodyTransform(t,e){const i=e??{position:[0,0,0],rotation:[0,0,0,1]},s=on(this,Ge,Na).call(this);gt(this,Lt)._b3w_get_body_transform(t,s);const r=s>>2,a=gt(this,Lt).HEAPF32;return i.position[0]=a[r],i.position[1]=a[r+1],i.position[2]=a[r+2],i.rotation[0]=a[r+3],i.rotation[1]=a[r+4],i.rotation[2]=a[r+5],i.rotation[3]=a[r+6],i}getBodyVelocity(t,e){const i=e??{linear:[0,0,0],angular:[0,0,0]},s=on(this,Ge,Na).call(this);gt(this,Lt)._b3w_get_body_velocity(t,s);const r=s>>2,a=gt(this,Lt).HEAPF32;return i.linear[0]=a[r],i.linear[1]=a[r+1],i.linear[2]=a[r+2],i.angular[0]=a[r+3],i.angular[1]=a[r+4],i.angular[2]=a[r+5],i}createTransformBatch(t){return on(this,Ge,Gn).call(this),new cS(gt(this,Lt),t)}createSphericalJoint(t,e,i,s={}){on(this,Ge,Gn).call(this);const r=gt(this,Lt)._b3w_create_spherical_joint(this.handle,t,e,i[0],i[1],i[2],s.hertz??0,s.dampingRatio??0);if(r===0)throw new Error("Box3D failed to create a spherical joint");return r}createDistanceJoint(t,e,i,s,r={}){on(this,Ge,Gn).call(this);const a=gt(this,Lt)._b3w_create_distance_joint(this.handle,t,e,i[0],i[1],i[2],s[0],s[1],s[2],r.length??0,r.hertz??0,r.dampingRatio??0);if(a===0)throw new Error("Box3D failed to create a distance joint");return a}destroyJoint(t){gt(this,Lt)._b3w_destroy_joint(t)}dispose(){gt(this,Js)||(gt(this,ai)!==0&&(gt(this,Lt)._free(gt(this,ai)),an(this,ai,0)),gt(this,Rn)!==0&&(gt(this,Lt)._free(gt(this,Rn)),an(this,Rn,0),an(this,js,0)),gt(this,Lt)._b3w_destroy_world(this.handle),an(this,Js,!0))}}Lt=new WeakMap,Js=new WeakMap,ai=new WeakMap,Rn=new WeakMap,js=new WeakMap,Ge=new WeakSet,Na=function(){return gt(this,ai)===0&&an(this,ai,gt(this,Lt)._malloc(Or*4)),gt(this,ai)},Gn=function(){if(gt(this,Js))throw new Error("PhysicsWorld has been disposed")};let cd;function dS(){return cd??(cd=lS(async()=>{const{default:n}=await import("./box3d-CuHIlh_f.js");return{default:n}},[]).then(({default:n})=>n().then(t=>new hS(t)))),cd}const Fa=-11,ji=1/60,pS=4;async function fS(){const n=await dS(),t=n.createWorld([0,Fa,0]);return t.setHitEventThreshold(2.5),{b3:n,world:t}}const tn=90,Ri=4,Li=15,hd=1.1,ul=-.5,dl=-2.2,pl=[{minX:15,maxX:30,minZ:-30,maxZ:-15,surfaceY:ul,floorY:dl},{minX:-60,maxX:-30,minZ:15,maxZ:45,surfaceY:ul,floorY:dl},{minX:45,maxX:60,minZ:30,maxZ:45,surfaceY:ul,floorY:dl}],ud=[{cx:-20,cz:-55,r:26,cy:-21},{cx:40,cz:-45,r:18,cy:3.5-18},{cx:68,cz:0,r:14,cy:2.8-14},{cx:0,cz:58,r:30,cy:-24},{cx:-60,cz:-25,r:12,cy:2.5-12}];function mS(n,t,e,i){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,256);for(let o=0;o<900;o++)r.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,r.fillRect(Math.random()*256,Math.random()*256,2,2);r.strokeStyle=t,r.lineWidth=2,r.strokeRect(0,0,256,256),r.strokeStyle=i,r.lineWidth=1,r.beginPath(),r.moveTo(128,0),r.lineTo(128,256),r.moveTo(0,128),r.lineTo(256,128),r.stroke();const a=new ao(s);return a.wrapS=a.wrapT=Oa,a.repeat.set(n,n),a.anisotropy=4,a.colorSpace=Ke,a}function gS(){const n=new Sn({side:Ze,depthWrite:!1,uniforms:{topColor:{value:new Tt("#141f38")},midColor:{value:new Tt("#3d5a86")},horizonColor:{value:new Tt("#e08a52")},sunDir:{value:new A(.55,.28,.35).normalize()}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 pos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * pos;
        gl_Position.z = gl_Position.w; // pin to far plane
      }
    `,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 sunDir;
      void main() {
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 sky = mix(midColor, topColor, pow(h, 0.75));
        sky = mix(horizonColor, sky, smoothstep(0.0, 0.28, h));
        float sun = pow(max(dot(normalize(vDir), sunDir), 0.0), 260.0);
        float glow = pow(max(dot(normalize(vDir), sunDir), 0.0), 8.0);
        sky += vec3(1.0, 0.82, 0.55) * sun * 1.6 + vec3(1.0, 0.6, 0.3) * glow * 0.35;
        sky = mix(sky, horizonColor * 0.55, smoothstep(0.0, -0.25, vDir.y));
        gl_FragColor = vec4(sky, 1.0);
      }
    `}),t=new fe(new Gi(520,32,18),n);return t.frustumCulled=!1,t}function vS(n,t,e){let i=-1/0;for(const s of n){const r=t-s.cx,a=e-s.cz,o=s.r*s.r-r*r-a*a;if(o>0){const c=s.cy+Math.sqrt(o);c>i&&(i=c)}}return i}function _S(n){const t=new um;t.fog=new Ic(new Tt("#54596b"),70,420),t.add(gS());const e=new Im("#ffd9b0",2.8);e.position.set(34,46,22),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-55,e.shadow.camera.right=55,e.shadow.camera.top=55,e.shadow.camera.bottom=-55,e.shadow.camera.near=1,e.shadow.camera.far=160,e.shadow.bias=-4e-4;const i=new Te;t.add(i),e.target=i,t.add(e),t.add(new Rm("#a8c2e0","#4a5248",.85)),t.add(new Um("#4a5668",.55));const s=[],r=mS(1,"rgba(120,175,225,0.3)","#3a414c","rgba(120,175,225,0.12)"),a=new fn({map:r,roughness:.9,metalness:.05}),o=new fn({color:"#6d7683",roughness:.85,metalness:.1}),c=new fn({color:"#39414d",roughness:.95});function l(g,b,f,p,S,P,y,C={}){n.createBox({type:di.Static,position:[g,b,f],halfExtents:[p,S,P],friction:C.friction??.7}),s.push({min:new A(g-p,b-S,f-P),max:new A(g+p,b+S,f+P)});let M=y;if(C.texScale&&y.map){M=y.clone();const _=M.map.clone();_.repeat.set(p*2/C.texScale,P*2/C.texScale),M.map=_}const R=new fe(new Un(p*2,S*2,P*2),M);R.position.set(g,b,f),R.receiveShadow=!0,R.castShadow=b+S>.05,t.add(R)}const u=(g,b)=>pl.some(f=>g>=f.minX-.01&&g+Li<=f.maxX+.01&&b>=f.minZ-.01&&b+Li<=f.maxZ+.01);for(let g=-tn;g<tn;g+=Li)for(let b=-tn;b<tn;b+=Li)u(g,b)||l(g+Li/2,-hd,b+Li/2,Li/2,hd,Li/2,a,{texScale:4});for(const g of pl)l((g.minX+g.maxX)/2,g.floorY-.5,(g.minZ+g.maxZ)/2,(g.maxX-g.minX)/2,.5,(g.maxZ-g.minZ)/2,c);const d=["#4e7a4a","#557f4c","#487246","#5b8551","#50784d"];ud.forEach((g,b)=>{n.createSphere({type:di.Static,position:[g.cx,g.cy,g.cz],radius:g.r,friction:.75});const f=new fe(new Gi(g.r,48,28),new fn({color:d[b%d.length],roughness:.95,metalness:0}));f.position.set(g.cx,g.cy,g.cz),f.castShadow=!0,f.receiveShadow=!0,t.add(f)}),l(0,Ri/2,-tn-.6,tn+1.2,Ri/2,.6,o),l(0,Ri/2,tn+.6,tn+1.2,Ri/2,.6,o),l(-tn-.6,Ri/2,0,.6,Ri/2,tn+1.2,o),l(tn+.6,Ri/2,0,.6,Ri/2,tn+1.2,o);const h=-18,m=14;for(let g=0;g<4;g++)l(h,.5*(g+1)/2,m-4.5+g*1.5,2.6,.25*(g+1),.75,o);return l(h,1.1,m+4.2,3.2,1.1,3.2,o),{scene:t,statics:s,waters:pl,domes:ud,sun:e,sunTarget:i}}const bn={crate:{half:[.42,.42,.42],density:1,friction:.62,restitution:.12,palette:["#c98d4e","#b07a42","#d6a05e","#8f6236","#caa06a"]},ball:{half:[.38,.38,.38],density:.8,friction:.5,restitution:.62,rollingResistance:.015,palette:["#ff5f5f","#ffc44d","#5fd47f","#59b7ff","#c78cff","#ff8ad1"]},plank:{half:[1.1,.075,.3],density:.9,friction:.6,restitution:.1,palette:["#d8b98a","#c7a878","#e0c294"]},barrel:{half:[.34,.72,.34],density:1.1,friction:.55,restitution:.25,palette:["#d64545","#4587d6","#45b06a","#d6a245"]}},dd={crate:256,ball:256,plank:192,barrel:128};function xS(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="#d9d0bf",t.fillRect(0,0,128,128);for(let i=0;i<7;i++)t.fillStyle=i%2?"rgba(120,90,50,0.10)":"rgba(150,120,80,0.14)",t.fillRect(0,i*18,128,12);t.strokeStyle="rgba(70,45,20,0.55)",t.lineWidth=10,t.strokeRect(5,5,118,118),t.strokeStyle="rgba(70,45,20,0.35)",t.lineWidth=6,t.beginPath(),t.moveTo(8,8),t.lineTo(120,120),t.moveTo(120,8),t.lineTo(8,120),t.stroke();const e=new ao(n);return e.colorSpace=Ke,e}class bS{constructor(t,e){W(this,"all",new Map);W(this,"ragdolls",[]);W(this,"boneByHandle",new Map);W(this,"pools");W(this,"world");W(this,"scene");W(this,"batch");W(this,"batchProps",[]);W(this,"batchBones",[]);W(this,"batchDirty",!0);W(this,"nextId",1);W(this,"zeroG",!1);W(this,"tmpMat",new jt);W(this,"tmpPos",new A);W(this,"tmpScale",new A(1,1,1));W(this,"rotMat",new jt);this.world=t,this.scene=e;const i=xS(),s={crate:new fn({map:i,roughness:.75,metalness:.04}),ball:new fn({color:"#ffffff",roughness:.35,metalness:.15}),plank:new fn({map:i,roughness:.8,metalness:.02}),barrel:new fn({roughness:.42,metalness:.35})},r={crate:new Un(.84,.84,.84),ball:new Gi(.38,22,14),plank:new Un(2.2,.15,.6),barrel:new $a(.34,.76,5,14)};this.pools=Object.fromEntries(Object.keys(bn).map(a=>{const o=this.makePoolMesh(a,r[a],s[a],dd[a]);return e.add(o),[a,{shape:a,mesh:o,props:[],cap:dd[a]}]}))}makePoolMesh(t,e,i,s){const r=new qa(e,i,s);return r.count=0,r.castShadow=!0,r.receiveShadow=!0,r.instanceMatrix.setUsage(Rd),r.userData.propShape=t,r.frustumCulled=!1,r.boundingSphere=new ps(new A(0,0,0),400),r}growPool(t){const e=t.mesh;t.cap*=2;const i=this.makePoolMesh(t.shape,e.geometry,e.material,t.cap);i.count=t.props.length;for(const s of t.props)this.tmpMat.compose(s.pos,s.quat,this.tmpScale),i.setMatrixAt(s.slot,this.tmpMat),i.setColorAt(s.slot,s.color);i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),this.scene.remove(e),e.dispose(),this.scene.add(i),t.mesh=i}get count(){return this.all.size}get ragdollBoneCount(){return this.ragdolls.length?this.ragdolls.length*this.ragdolls[0].bones.length:0}raycastTargets(){const t=Object.values(this.pools).map(e=>e.mesh);for(const e of this.ragdolls)for(const i of e.bones)t.push(i.group);return t}handleFromHit(t){var s;const e=t.object;if(e instanceof qa&&t.instanceId!==void 0){const r=e.userData.propShape;if(r)return(s=this.pools[r].props[t.instanceId])==null?void 0:s.handle}let i=e;for(;i;){if(typeof i.userData.boneHandle=="number")return i.userData.boneHandle;i=i.parent}}spawn(t,e,i={}){var d,h;const s=this.pools[t];s.props.length>=s.cap&&this.growPool(s);const r=bn[t];let a;t==="ball"?a=this.world.createSphere({type:di.Dynamic,position:[e.x,e.y,e.z],radius:r.half[0],density:r.density,friction:r.friction,restitution:r.restitution,rollingResistance:r.rollingResistance}):t==="barrel"?a=this.world.createCapsule({type:di.Dynamic,position:[e.x,e.y,e.z],halfHeight:.38,radius:r.half[0],density:r.density,friction:r.friction,restitution:r.restitution}):a=this.world.createBox({type:di.Dynamic,position:[e.x,e.y,e.z],halfExtents:r.half,density:r.density,friction:r.friction,restitution:r.restitution}),i.rotation&&this.world.setBodyTransform(a,[e.x,e.y,e.z],[i.rotation.x,i.rotation.y,i.rotation.z,i.rotation.w]),i.velocity&&this.world.setBodyVelocity(a,[i.velocity.x,i.velocity.y,i.velocity.z]),this.world.setBodyHitEvents(a,!0),this.zeroG&&this.world.setBodyGravityScale(a,0);const o=r.palette,c=o[(i.colorIndex??Math.floor(Math.random()*o.length))%o.length],l=new Tt(c),u={id:this.nextId++,handle:a,shape:t,slot:s.props.length,half:new A(...r.half),minHalf:Math.min(...r.half),mass:this.world.getBodyMass(a),pos:e.clone(),quat:((d=i.rotation)==null?void 0:d.clone())??new pn,vel:((h=i.velocity)==null?void 0:h.clone())??new A,aabb:new Xi,submerged:0,color:l};return s.props.push(u),s.mesh.count=s.props.length,this.tmpMat.compose(u.pos,u.quat,this.tmpScale),s.mesh.setMatrixAt(u.slot,this.tmpMat),s.mesh.setColorAt(u.slot,l),s.mesh.instanceMatrix.needsUpdate=!0,s.mesh.instanceColor&&(s.mesh.instanceColor.needsUpdate=!0),this.all.set(a,u),this.batchDirty=!0,u}despawn(t){const e=this.pools[t.shape];if(!this.all.delete(t.handle))return;this.world.destroyBody(t.handle);const i=e.props[e.props.length-1];e.props.pop(),i!==t&&(e.props[t.slot]=i,i.slot=t.slot,this.tmpMat.compose(i.pos,i.quat,this.tmpScale),e.mesh.setMatrixAt(i.slot,this.tmpMat),e.mesh.setColorAt(i.slot,i.color)),e.mesh.count=e.props.length,e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.instanceColor&&(e.mesh.instanceColor.needsUpdate=!0),this.batchDirty=!0}spawnRagdoll(t,e){const i=this.world.spawnHuman([t.x,t.y,t.z],{frictionTorque:4,hertz:2,dampingRatio:.6}),s=["#e8b48c","#c98f66","#f2c9a0"],r=["#3f7fd1","#d15050","#4fae62","#9a5fd1"][Math.floor(Math.random()*4)],a=s[Math.floor(Math.random()*s.length)],o=[];for(let l=0;l<i.bones.length;l++){const u=i.bones[l],d=this.world.getBodyCapsule(u),h=new Ws;if(h.userData.boneHandle=u,d){const b=new A(...d.center1),f=new A(...d.center2),p=f.clone().sub(b),S=p.length(),P=l===5?a:l<=1||l>9?r:a,y=new fe(new $a(d.radius,S,4,10),new fn({color:P,roughness:.7,metalness:.05}));y.castShadow=!0,y.receiveShadow=!0,y.position.copy(b).add(f).multiplyScalar(.5),S>1e-5&&y.quaternion.setFromUnitVectors(new A(0,1,0),p.normalize()),y.userData.boneHandle=u,h.add(y)}this.world.setBodyHitEvents(u,!0),this.zeroG&&this.world.setBodyGravityScale(u,0);const m=this.world.getBodyTransform(u);h.position.set(...m.position),h.quaternion.set(...m.rotation),this.scene.add(h);const g={handle:u,group:h,radius:(d==null?void 0:d.radius)??.1,mass:this.world.getBodyMass(u),pos:new A(...m.position),vel:new A,submerged:0};o.push(g),this.boneByHandle.set(u,g)}e&&this.world.humanSetVelocity(i.human,[e.x,e.y,e.z]);const c={human:i.human,bones:o};return this.ragdolls.push(c),this.batchDirty=!0,c}despawnRagdoll(t){const e=this.ragdolls.indexOf(t);if(e!==-1){this.ragdolls.splice(e,1);for(const i of t.bones)this.world.destroyBody(i.handle),this.boneByHandle.delete(i.handle),this.scene.remove(i.group),i.group.traverse(s=>{var a;const r=s;(a=r.geometry)==null||a.dispose(),r.material&&r.material.dispose()});this.batchDirty=!0}}ragdollOfBone(t){return this.ragdolls.find(e=>e.bones.some(i=>i.handle===t))}clearAll(){for(const t of[...this.all.values()])this.despawn(t);for(const t of[...this.ragdolls])this.despawnRagdoll(t)}setZeroG(t){this.zeroG=t;const e=t?0:1;for(const i of this.all.values())this.world.setBodyGravityScale(i.handle,e),this.world.setBodyAwake(i.handle,!0),t&&this.world.applyImpulse(i.handle,[0,i.mass*1.2,0]);for(const i of this.ragdolls)for(const s of i.bones)this.world.setBodyGravityScale(s.handle,e),this.world.setBodyAwake(s.handle,!0)}sync(){var i;if(this.batchDirty){(i=this.batch)==null||i.dispose(),this.batchProps=[],this.batchBones=[];const s=[];for(const r of Object.values(this.pools))for(const a of r.props)this.batchProps.push(a),s.push(a.handle);for(const r of this.ragdolls)for(const a of r.bones)this.batchBones.push(a),s.push(a.handle);this.batch=s.length?this.world.createTransformBatch(s):void 0,this.batchDirty=!1}if(!this.batch)return;const t=this.batch.read();let e=0;for(const s of this.batchProps){const r=t[e],a=t[e+1],o=t[e+2];s.vel.set(r-s.pos.x,a-s.pos.y,o-s.pos.z).multiplyScalar(60),s.pos.set(r,a,o),s.quat.set(t[e+3],t[e+4],t[e+5],t[e+6]),e+=Or;const c=this.pools[s.shape];this.tmpMat.compose(s.pos,s.quat,this.tmpScale),c.mesh.setMatrixAt(s.slot,this.tmpMat),this.rotMat.makeRotationFromQuaternion(s.quat);const l=this.rotMat.elements,u=s.half.x,d=s.half.y,h=s.half.z,m=Math.abs(l[0])*u+Math.abs(l[4])*d+Math.abs(l[8])*h,g=Math.abs(l[1])*u+Math.abs(l[5])*d+Math.abs(l[9])*h,b=Math.abs(l[2])*u+Math.abs(l[6])*d+Math.abs(l[10])*h;s.aabb.min.set(r-m,a-g,o-b),s.aabb.max.set(r+m,a+g,o+b)}for(const s of Object.values(this.pools))s.props.length&&(s.mesh.instanceMatrix.needsUpdate=!0);for(const s of[...this.all.values()])s.pos.y<-40&&this.despawn(s);for(const s of this.batchBones)s.vel.set(t[e]-s.pos.x,t[e+1]-s.pos.y,t[e+2]-s.pos.z).multiplyScalar(60),s.pos.set(t[e],t[e+1],t[e+2]),s.group.position.copy(s.pos),s.group.quaternion.set(t[e+3],t[e+4],t[e+5],t[e+6]),e+=Or}spawnTower(t,e=3,i=5){const s=bn.crate.half[0],r=s*2+.02;for(let a=0;a<i;a++)for(let o=0;o<e;o++)for(let c=0;c<e;c++)this.spawn("crate",this.tmpPos.set(t.x+(o-(e-1)/2)*r,s+.01+a*r,t.z+(c-(e-1)/2)*r).clone())}spawnWall(t,e,i=6,s=4){const r=bn.crate.half[0],a=r*2+.02,o=new A(-e.z,0,e.x).normalize();for(let c=0;c<s;c++)for(let l=0;l<i;l++){const u=(l-(i-1)/2+(c%2?.5:0))*a;this.spawn("crate",new A().copy(t).addScaledVector(o,u).setY(r+.01+c*a))}}spawnDominoes(t,e,i=14){const s=e.clone().setY(0).normalize(),r=new pn().setFromAxisAngle(new A(0,1,0),Math.atan2(-s.z,s.x)),a=new pn().setFromAxisAngle(new A(0,0,1),Math.PI/2),o=r.multiply(a);for(let c=0;c<i;c++){const l=t.clone().addScaledVector(s,c*1.35).setY(bn.plank.half[0]+.02);this.spawn("plank",l,{rotation:o.clone()})}}spawnJenga(t,e=12){const i=bn.plank.half[1],s=bn.plank.half[2]*2,r=i*2+.01,a=new pn().setFromAxisAngle(new A(0,1,0),Math.PI/2);for(let o=0;o<e;o++){const c=i+.01+o*r;for(let l=-1;l<=1;l++){const u=l*(s+.02),d=o%2?new A(t.x+u,c,t.z):new A(t.x,c,t.z+u);this.spawn("plank",d,{rotation:o%2?a.clone():void 0})}}}spawnPyramid(t,e=4){const i=bn.crate.half[0],s=i*2+.02;for(let r=0;r<e;r++){const a=e-r;for(let o=0;o<a;o++)for(let c=0;c<a;c++)this.spawn("crate",new A(t.x+(o-(a-1)/2)*s,i+.01+r*s,t.z+(c-(a-1)/2)*s))}}spawnHenge(t,e=5.5,i=5){const s=bn.crate.half[0],r=s*2+.02,a=bn.plank.half[1];for(let o=0;o<i;o++){const c=o/i*Math.PI*2,l=t.x+Math.cos(c)*e,u=t.z+Math.sin(c)*e,d=new A(-Math.sin(c),0,Math.cos(c)),h=new pn().setFromAxisAngle(new A(0,1,0),Math.atan2(-d.z,d.x));for(const m of[-.7,.7])for(let g=0;g<2;g++)this.spawn("crate",new A(l+d.x*m,s+.01+g*r,u+d.z*m),{rotation:h.clone()});this.spawn("plank",new A(l,2*r+a+.015,u),{rotation:h.clone()})}}spawnSentinel(t){const e=bn.crate.half[0],i=e*2+.02,s=bn.plank.half[1];this.spawn("crate",new A(t.x,e+.01,t.z)),this.spawn("crate",new A(t.x,e+.01+i,t.z));const r=2*i+s+.02;this.spawn("plank",new A(t.x,r,t.z));const a=r+s+e+.02;this.spawn("crate",new A(t.x,a,t.z)),this.spawn("ball",new A(t.x,a+e+.39,t.z)),this.spawn("barrel",new A(t.x-.85,.73,t.z)),this.spawn("barrel",new A(t.x+.85,.73,t.z))}spawnBallPit(t,e=36){for(let i=0;i<e;i++){const s=Math.random()*Math.PI*2,r=Math.random()*2.2;this.spawn("ball",new A(t.x+Math.cos(s)*r,t.y+1+i%12*.85,t.z+Math.sin(s)*r))}}populateInitial(){this.spawnTower(new A(2,0,-30),3,5),this.spawnTower(new A(-42,0,8),3,4),this.spawnTower(new A(52,0,-12),2,6),this.spawnWall(new A(-14,0,-34),new A(0,0,1),7,4),this.spawnDominoes(new A(-4,0,6),new A(1,0,.15),12),this.spawnBallPit(new A(22.5,.5,-22.5),18);for(let t=0;t<4;t++)this.spawn("barrel",new A(-16+t*1.4,.75,-2)),this.spawn("barrel",new A(38+t*1.4,.75,24));for(let t=0;t<8;t++)this.spawn("ball",new A(-6+t*1.7,7.5+Math.random(),54+t%3*2.5));this.spawnJenga(new A(30,0,8),12),this.spawnPyramid(new A(-30,0,-8),4),this.spawnHenge(new A(-45,0,55),5.5,5),this.spawnSentinel(new A(8,0,12)),this.spawnSentinel(new A(-6,0,-16)),this.spawnRagdoll(new A(4,1.4,8)),this.spawnRagdoll(new A(0,8.2,58))}}const yn=new Set;addEventListener("keydown",n=>yn.add(n.code));addEventListener("keyup",n=>yn.delete(n.code));addEventListener("blur",()=>yn.clear());const Vn=.38,hn=.9,pd=.72,yS=.55;class wS{constructor(t,e,i,s,r){W(this,"pos",new A(0,hn+.1,20));W(this,"vel",new A);W(this,"yaw",0);W(this,"pitch",0);W(this,"grounded",!1);W(this,"inWater",!1);W(this,"camera");W(this,"kinHandle");W(this,"world");W(this,"waters");W(this,"domes");W(this,"statics");W(this,"wish",new A);W(this,"kickTimes",new Map);this.world=t,this.statics=e,this.waters=i,this.domes=s,this.camera=new un(78,r,.08,900),this.camera.rotation.order="YXZ",this.kinHandle=t.createCapsule({type:di.Kinematic,position:[this.pos.x,this.pos.y,this.pos.z],halfHeight:hn-Vn,radius:Vn,friction:.1})}onMouseDelta(t,e){this.yaw-=t*.0022,this.pitch=Math.max(-1.55,Math.min(1.55,this.pitch-e*.0022))}get eye(){return new A(this.pos.x,this.pos.y+pd,this.pos.z)}viewDir(t=new A){return t.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}overlaps(t,e){const i=this.pos;return i.x+Vn>t.x&&i.x-Vn<e.x&&i.y+hn>t.y&&i.y-hn<e.y&&i.z+Vn>t.z&&i.z-Vn<e.z}*solids(t,e){for(const i of this.statics)yield i;for(const i of t.all.values())i.handle!==e&&(yield{min:i.aabb.min,max:i.aabb.max,prop:i})}shoveProp(t,e,i){const s=performance.now(),r=this.kickTimes.get(t.handle)??0;if(s-r<130)return;this.kickTimes.set(t.handle,s),this.kickTimes.size>256&&this.kickTimes.clear();const a=1/Math.max(.001,Math.hypot(this.vel.x,this.vel.z)),o=this.vel.x*a,c=this.vel.z*a,l=e*i*t.mass;this.world.applyImpulse(t.handle,[o*l,l*.35,c*l]),this.world.setBodyAwake(t.handle,!0),this.vel.x*=.82,this.vel.z*=.82}freeAt(t,e,i){const s=this.pos.y;this.pos.y=t;let r=!0;for(const a of this.solids(e,i))if(this.overlaps(a.min,a.max)){r=!1;break}return this.pos.y=s,r}waterAt(t,e){for(const i of this.waters)if(t>i.minX&&t<i.maxX&&e>i.minZ&&e<i.maxZ)return i}update(t,e,i,s,r){const a=this.pos.y-hn,o=this.waterAt(this.pos.x,this.pos.z);if(this.inWater=o!==void 0&&a<o.surfaceY,this.wish.set(0,0,0),r&&(yn.has("KeyW")&&(this.wish.z-=1),yn.has("KeyS")&&(this.wish.z+=1),yn.has("KeyA")&&(this.wish.x-=1),yn.has("KeyD")&&(this.wish.x+=1)),this.wish.lengthSq()>0){this.wish.normalize();const h=Math.sin(this.yaw),m=Math.cos(this.yaw),g=this.wish.x*m+this.wish.z*h,b=-this.wish.x*h+this.wish.z*m;this.wish.set(g,0,b)}let c=e.player.speed*(yn.has("ShiftLeft")||yn.has("ShiftRight")?e.player.sprintMult:1);this.inWater&&(c*=.55);const l=this.grounded||this.inWater?14:4;this.vel.x+=(this.wish.x*c-this.vel.x)*Math.min(1,l*t),this.vel.z+=(this.wish.z*c-this.vel.z)*Math.min(1,l*t);const u=e.player.gravity*(this.inWater?.35:1);if(this.vel.y-=u*t,this.inWater&&o){const h=o.surfaceY-(this.pos.y-hn*.4);h>0&&(this.vel.y+=Math.min(1.4,h)*26*t),this.vel.y*=1-Math.min(1,3.2*t),r&&yn.has("Space")&&(this.vel.y+=30*t)}else r&&yn.has("Space")&&this.grounded&&(this.vel.y=e.player.jumpSpeed,this.grounded=!1);this.grounded=!1,this.pos.y+=this.vel.y*t;for(const h of this.solids(i,s))this.overlaps(h.min,h.max)&&(this.vel.y<=0&&this.pos.y>(h.min.y+h.max.y)/2?(this.pos.y=h.max.y+hn,this.vel.y=0,this.grounded=!0):this.vel.y>0&&(this.pos.y=h.min.y-hn,this.vel.y=0));const d=vS(this.domes,this.pos.x,this.pos.z);d>-1/0&&this.pos.y-hn<d&&this.vel.y<=.01&&(this.pos.y=d+hn,this.vel.y=0,this.grounded=!0);for(const h of["x","z"]){this.pos[h]+=this.vel[h]*t;for(const m of this.solids(i,s)){if(!this.overlaps(m.min,m.max))continue;const g=m.max.y+hn+.002,b=m.max.y-(this.pos.y-hn);if(b>0&&b<=yS&&this.freeAt(g,i,s)){this.pos.y=g,this.grounded=!0;continue}if(m.prop){const f=Math.hypot(this.vel.x,this.vel.z);f>2.5&&this.shoveProp(m.prop,f,e.player.shove)}if(this.vel[h]>0)this.pos[h]=m.min[h]-Vn;else if(this.vel[h]<0)this.pos[h]=m.max[h]+Vn;else{const f=(m.min[h]+m.max[h])/2;this.pos[h]=this.pos[h]<f?m.min[h]-Vn:m.max[h]+Vn}this.vel[h]=0}}this.pos.y<-30&&(this.pos.set(0,hn+.2,20),this.vel.set(0,0,0)),this.world.setBodyTransform(this.kinHandle,[this.pos.x,this.pos.y,this.pos.z]),this.camera.position.set(this.pos.x,this.pos.y+pd,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0)}}let Ln=null,$e=null,Vs=null,zn=null,zs=null,sf=.22;function es(){return Ln?(Ln.state==="suspended"&&Ln.resume(),Ln):null}function MS(){if(!Ln)try{Ln=new AudioContext,$e=Ln.createGain(),$e.gain.value=sf,$e.connect(Ln.destination)}catch{Ln=null}}function SS(n){sf=n,$e&&Ln&&$e.gain.setTargetAtTime(n,Ln.currentTime,.05)}function rf(n,t,e,i,s){n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function _c(n,t){const e=n.createBuffer(1,Math.ceil(n.sampleRate*t),n.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return e}function Hs(n,t,e,i,s=.8){const r=es();if(!r||!$e)return;const a=r.createBufferSource();a.buffer=_c(r,t+.1);const o=r.createBiquadFilter();o.type=e,o.frequency.value=i,o.Q.value=s;const c=r.createGain();rf(c,r.currentTime,.005,n,t),a.connect(o).connect(c).connect($e),a.start(),a.stop(r.currentTime+t+.15)}function Pn(n,t,e,i,s="sine"){const r=es();if(!r||!$e)return;const a=r.createOscillator();a.type=s,a.frequency.setValueAtTime(n,r.currentTime),a.frequency.exponentialRampToValueAtTime(Math.max(20,t),r.currentTime+i);const o=r.createGain();rf(o,r.currentTime,.004,e,i),a.connect(o).connect($e),a.start(),a.stop(r.currentTime+i+.1)}const he={spawn(){Pn(240,165,.32,.12,"sine")},tick(){Pn(330,300,.07,.04,"sine")},del(){Pn(380,140,.3,.14,"sine")},grab(){Pn(392,523,.16,.28,"sine"),Pn(784,880,.07,.34,"sine")},release(){Pn(523,392,.14,.26,"sine")},launch(){Pn(120,60,.5,.3,"sine"),Hs(.22,.2,"bandpass",700,.5)},snip(){Pn(880,220,.35,.09,"triangle"),Hs(.18,.12,"highpass",2200)},boom(){Hs(1.1,.7,"lowpass",320,.4),Pn(120,34,.9,.55,"sine")},splash(n=1){Hs(.35*n,.3,"bandpass",2400,.6),Hs(.25*n,.42,"lowpass",800)},impact(n){const t=Math.min(1,n/14);Hs(.16+.4*t,.07+.08*t,"lowpass",500+900*t)},rope(){Pn(700,1200,.35,.09,"square")},toolSwitch(){Pn(523,392,.12,.07,"sine")},sprayStart(){const n=es();if(!n||!$e||Vs)return;const t=n.createBufferSource();t.buffer=_c(n,1),t.loop=!0;const e=n.createBiquadFilter();e.type="bandpass",e.frequency.value=2800,e.Q.value=.5;const i=n.createGain();i.gain.setValueAtTime(0,n.currentTime),i.gain.linearRampToValueAtTime(.3,n.currentTime+.08),t.connect(e).connect(i).connect($e),t.start(),Vs={gain:i,stop:()=>{i.gain.setTargetAtTime(0,n.currentTime,.06),t.stop(n.currentTime+.4)}}},sprayStop(){Vs==null||Vs.stop(),Vs=null},humStart(){const n=es();if(!n||!$e||zn)return;const t=n.createOscillator();t.type="sine",t.frequency.value=98;const e=n.createOscillator();e.type="sine",e.frequency.value=148;const i=n.createGain();i.gain.value=.45;const s=n.createGain();s.gain.setValueAtTime(0,n.currentTime),s.gain.linearRampToValueAtTime(.055,n.currentTime+.45),t.connect(s),e.connect(i).connect(s),s.connect($e),t.start(),e.start(),zn={gain:s,oscA:t,oscB:e}},humPitch(n){const t=es();if(!t||!zn)return;const e=Math.min(26,n*1.4);zn.oscA.frequency.setTargetAtTime(98+e,t.currentTime,.25),zn.oscB.frequency.setTargetAtTime(148+e*1.5,t.currentTime,.25)},humStop(){const n=es();!n||!zn||(zn.gain.gain.setTargetAtTime(0,n.currentTime,.18),zn.oscA.stop(n.currentTime+.9),zn.oscB.stop(n.currentTime+.9),zn=null)},thrustLoop(n){const t=es();if(!(!t||!$e)){if(n>0&&!zs){const e=t.createBufferSource();e.buffer=_c(t,1),e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=240;const s=t.createOscillator();s.type="sine",s.frequency.value=52;const r=t.createGain();r.gain.value=.5;const a=t.createGain();a.gain.value=0,e.connect(i).connect(a),s.connect(r).connect(a),a.connect($e),e.start(),s.start(),zs={gain:a,src:e,sub:s}}if(zs){const e=n>0?Math.min(.18,.06+n*.015):0;if(zs.gain.gain.setTargetAtTime(e,t.currentTime,.1),n===0){const i=zs;zs=null,i.src.stop(t.currentTime+.5),i.sub.stop(t.currentTime+.5)}}}}},Hn=2400,ce=.085,fl=.05,Gs=2.6,eo=12,ES=new Tt("#5db9ff"),TS=new Tt("#d9f1ff");function CS(n){return new Sn({transparent:!0,depthWrite:!1,side:Xn,uniforms:{uTime:{value:0},uRipples:{value:n},uDeep:{value:new Tt("#0a2c46")},uShallow:{value:new Tt("#1c6f8f")},uSky:{value:new Tt("#b6d2ea")}},vertexShader:`
      uniform float uTime;
      uniform vec4 uRipples[${eo}];
      varying vec3 vWorld;
      varying float vWave;

      float rippleHeight(vec2 p) {
        float h = 0.0;
        for (int i = 0; i < ${eo}; i++) {
          vec4 r = uRipples[i];
          float age = uTime - r.z;
          if (age < 0.0 || age > 4.0) continue;
          float d = length(p - r.xy);
          h += sin(d * 7.0 - age * 8.0) * exp(-d * 0.75 - age * 1.6) * r.w;
        }
        return h;
      }

      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        float wave =
          0.025 * sin(wp.x * 2.1 + uTime * 1.6) +
          0.025 * sin(wp.z * 1.7 - uTime * 1.2) +
          0.015 * sin((wp.x + wp.z) * 3.3 + uTime * 2.3);
        wave += rippleHeight(wp.xz);
        // pin the surface at the pit walls so ripples never tear the edges
        vec2 edge = min(uv, 1.0 - uv);
        wave *= smoothstep(0.0, 0.05, min(edge.x, edge.y));
        wp.y += wave;
        vWave = wave;
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;

      void main() {
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float fresnel = pow(1.0 - max(viewDir.y, 0.0), 2.0);
        float sparkle = pow(max(0.0, sin(vWorld.x * 14.0 + uTime * 3.0) * sin(vWorld.z * 12.0 - uTime * 2.4)), 24.0);
        vec3 col = mix(uDeep, uShallow, 0.5 + vWave * 3.0);
        col = mix(col, uSky, fresnel * 0.65);
        col += vec3(1.0) * sparkle * 0.18;
        float foam = smoothstep(0.075, 0.16, abs(vWave));
        col = mix(col, vec3(0.85, 0.95, 1.0), foam * 0.7);
        gl_FragColor = vec4(col, 0.84);
      }
    `})}class AS{constructor(t,e,i,s,r,a){W(this,"world");W(this,"props");W(this,"statics");W(this,"domes");W(this,"ponds",[]);W(this,"px",new Float32Array(Hn));W(this,"py",new Float32Array(Hn));W(this,"pz",new Float32Array(Hn));W(this,"vx",new Float32Array(Hn));W(this,"vy",new Float32Array(Hn));W(this,"vz",new Float32Array(Hn));W(this,"life",new Float32Array(Hn));W(this,"bounces",new Uint8Array(Hn));W(this,"alive",0);W(this,"mesh");W(this,"emitCarry",0);W(this,"grid",new Map);W(this,"staticBoxes",[]);W(this,"impulses",new Map);W(this,"time",0);W(this,"splashSfxCooldown",0);W(this,"tmpMat",new jt);W(this,"tmpPos",new A);W(this,"tmpQuat",new pn);W(this,"tmpScale",new A);W(this,"tmpVel",new A);W(this,"up",new A(0,1,0));W(this,"tmpColor",new Tt);this.world=e,this.props=i,this.statics=s,this.domes=a;const o=new Gi(ce,7,5),c=new ro({transparent:!0,opacity:.85,blending:Bi,depthWrite:!1});this.mesh=new qa(o,c,Hn),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Rd),t.add(this.mesh);for(const l of r){const u=new Float32Array(eo*4).fill(-1e3),d=CS(u),h=l.maxX-l.minX,m=l.maxZ-l.minZ,g=new fe(new kr(h,m,Math.round(h*3.4),Math.round(m*3.4)),d);g.rotation.x=-Math.PI/2,g.position.set((l.minX+l.maxX)/2,l.surfaceY,(l.minZ+l.maxZ)/2),t.add(g),this.ponds.push({region:l,mat:d,ripples:u,rippleIdx:0})}}get dropletCount(){return this.alive}pondAt(t,e){for(const i of this.ponds){const s=i.region;if(t>s.minX&&t<s.maxX&&e>s.minZ&&e<s.maxZ)return i}}addRipple(t,e,i,s){const r=t.rippleIdx;t.ripples[r*4]=e,t.ripples[r*4+1]=i,t.ripples[r*4+2]=this.time,t.ripples[r*4+3]=s,t.rippleIdx=(r+1)%eo}splash(t,e,i){const s=this.pondAt(t,e);if(!s)return;this.addRipple(s,t,e,Math.min(.35,.06+i*.12));const r=Math.min(26,Math.floor(6+i*14));for(let a=0;a<r;a++){const o=Math.random()*Math.PI*2,c=Math.random()*.5;this.spawnDrop(t+Math.cos(o)*c,s.region.surfaceY+.05,e+Math.sin(o)*c,Math.cos(o)*(1+Math.random()*2)*i,(2.2+Math.random()*3.2)*Math.min(1.6,.5+i),Math.sin(o)*(1+Math.random()*2)*i,!0)}this.splashSfxCooldown<=0&&(he.splash(Math.min(1.2,.3+i*.5)),this.splashSfxCooldown=.09)}spawnDrop(t,e,i,s,r,a,o=!1){if(this.alive>=Hn)return;const c=this.alive++;this.px[c]=t,this.py[c]=e,this.pz[c]=i,this.vx[c]=s,this.vy[c]=r,this.vz[c]=a,this.life[c]=o?.55+Math.random()*.4:2+Math.random(),this.bounces[c]=o?2:0,this.mesh.setColorAt(c,o?TS:ES)}emitJet(t,e,i,s){this.emitCarry+=s.hose.rate*i;const r=Math.floor(this.emitCarry);this.emitCarry-=r;const a=s.hose.speed;for(let o=0;o<r;o++){const c=(Math.random()-.5)*1.6,l=(Math.random()-.5)*1.6,u=(Math.random()-.5)*1.6;this.spawnDrop(t.x+e.x*.3,t.y+e.y*.3,t.z+e.z*.3,e.x*a+c,e.y*a+l+.8,e.z*a+u),this.life[this.alive-1]=s.hose.life*(.75+Math.random()*.5)}}kill(t){const e=this.alive-1;if(t!==e){this.px[t]=this.px[e],this.py[t]=this.py[e],this.pz[t]=this.pz[e],this.vx[t]=this.vx[e],this.vy[t]=this.vy[e],this.vz[t]=this.vz[e],this.life[t]=this.life[e],this.bounces[t]=this.bounces[e];const i=this.mesh.instanceColor;i&&this.mesh.setColorAt(t,this.tmpColor.fromBufferAttribute(i,e))}this.alive=e}cellKey(t,e){return t*73856093+e*19349663}rebuildGrid(){this.grid.clear();const t=(e,i,s,r,a,o,c)=>{if(a>30||o<-3)return;const l=Math.floor((e-ce)/Gs),u=Math.floor((i+ce)/Gs),d=Math.floor((s-ce)/Gs),h=Math.floor((r+ce)/Gs);for(let m=l;m<=u;m++)for(let g=d;g<=h;g++){const b=this.cellKey(m,g);let f=this.grid.get(b);f||this.grid.set(b,f=[]),f.push(c)}};this.staticBoxes.length=0;for(const e of this.statics)e.max.y<=.01||(this.staticBoxes.push(e),t(e.min.x,e.max.x,e.min.z,e.max.z,e.min.y,e.max.y,-this.staticBoxes.length));for(const e of this.props.all.values())t(e.aabb.min.x,e.aabb.max.x,e.aabb.min.z,e.aabb.max.z,e.aabb.min.y,e.aabb.max.y,e.handle)}update(t,e){this.time+=t,this.splashSfxCooldown-=t;for(const s of this.ponds)s.mat.uniforms.uTime.value=this.time;this.alive>0&&this.rebuildGrid();const i=Fa;for(let s=this.alive-1;s>=0;s--){if(this.life[s]-=t,this.life[s]<=0){this.kill(s);continue}this.vy[s]+=i*t;let r=this.px[s]+this.vx[s]*t,a=this.py[s]+this.vy[s]*t,o=this.pz[s]+this.vz[s]*t;const c=this.pondAt(r,o);if(c&&a<c.region.surfaceY){Math.random()<.12&&this.addRipple(c,r,o,.1),this.kill(s);continue}!c&&a<ce&&(a=ce,this.vy[s]*=-.32,this.vx[s]*=.72,this.vz[s]*=.72,++this.bounces[s]>=3&&(this.life[s]=Math.min(this.life[s],.25)));for(const d of this.domes){const h=r-d.cx,m=a-d.cy,g=o-d.cz,b=d.r+ce,f=h*h+m*m+g*g;if(f<b*b&&f>1e-6){const p=Math.sqrt(f),S=h/p,P=m/p,y=g/p;r=d.cx+S*b,a=d.cy+P*b,o=d.cz+y*b;const C=this.vx[s]*S+this.vy[s]*P+this.vz[s]*y;C<0&&(this.vx[s]-=1.3*C*S,this.vy[s]-=1.3*C*P,this.vz[s]-=1.3*C*y,this.vx[s]*=.8,this.vy[s]*=.8,this.vz[s]*=.8,++this.bounces[s]>=4&&(this.life[s]=Math.min(this.life[s],.3)));break}}Math.abs(r)>tn-.6&&(this.vx[s]*=-.4),Math.abs(o)>tn-.6&&(this.vz[s]*=-.4);const l=this.cellKey(Math.floor(r/Gs),Math.floor(o/Gs)),u=this.grid.get(l);if(u)for(const d of u){let h,m,g,b,f,p,S=!1;if(d<0){const B=this.staticBoxes[-d-1];h=B.min.x,m=B.max.x,g=B.min.y,b=B.max.y,f=B.min.z,p=B.max.z}else{const B=this.props.all.get(d);if(!B)continue;h=B.aabb.min.x,m=B.aabb.max.x,g=B.aabb.min.y,b=B.aabb.max.y,f=B.aabb.min.z,p=B.aabb.max.z,S=!0}if(r<h-ce||r>m+ce||a<g-ce||a>b+ce||o<f-ce||o>p+ce)continue;const P=m+ce-r,y=r-(h-ce),C=b+ce-a,M=a-(g-ce),R=p+ce-o,_=o-(f-ce),w=Math.min(P,y,C,M,R,_),T=this.vx[s],L=this.vy[s],D=this.vz[s];if(w===C?(a=b+ce,this.vy[s]*=-.3):w===M?(a=g-ce,this.vy[s]*=-.3):w===P?(r=m+ce,this.vx[s]*=-.3):w===y?(r=h-ce,this.vx[s]*=-.3):w===R?(o=p+ce,this.vz[s]*=-.3):(o=f-ce,this.vz[s]*=-.3),this.vx[s]*=.86,this.vy[s]*=.9,this.vz[s]*=.86,++this.bounces[s]>=4&&(this.life[s]=Math.min(this.life[s],.3)),S){let B=this.impulses.get(d);B||this.impulses.set(d,B=new A),B.x+=(T-this.vx[s])*fl,B.y+=(L-this.vy[s])*fl,B.z+=(D-this.vz[s])*fl}break}this.px[s]=r,this.py[s]=a,this.pz[s]=o}if(this.impulses.size){const s=e.hose.push;for(const[r,a]of this.impulses){a.multiplyScalar(s);const o=3.5;a.lengthSq()>o*o&&a.setLength(o),this.world.applyImpulse(r,[a.x,a.y,a.z]),this.world.setBodyAwake(r,!0)}this.impulses.clear()}for(let s=0;s<this.alive;s++){this.tmpVel.set(this.vx[s],this.vy[s],this.vz[s]);const r=this.tmpVel.length(),a=Math.min(2.6,1+r*.09);r>.001?this.tmpQuat.setFromUnitVectors(this.up,this.tmpVel.multiplyScalar(1/r)):this.tmpQuat.identity();const o=Math.min(1,this.life[s]*2.2);this.tmpScale.set(o,a*o,o),this.tmpPos.set(this.px[s],this.py[s],this.pz[s]),this.tmpMat.compose(this.tmpPos,this.tmpQuat,this.tmpScale),this.mesh.setMatrixAt(s,this.tmpMat)}this.mesh.count=this.alive,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}prePhysics(t,e){const i=e.world.buoyancy;for(const s of this.props.all.values()){const r=this.pondAt(s.pos.x,s.pos.z);let a=0;if(r&&s.aabb.min.y<r.region.surfaceY&&(a=Math.min(1,(r.region.surfaceY-s.aabb.min.y)/Math.max(.05,s.aabb.max.y-s.aabb.min.y))),a>0){const o=s.mass,c=o*-Fa*a*i,l=2.4*a;this.world.applyImpulse(s.handle,[-s.vel.x*o*l*t,(c-s.vel.y*o*l)*t,-s.vel.z*o*l*t]),this.world.setBodyAwake(s.handle,!0),s.submerged<.02&&s.vel.y<-2.2&&this.splash(s.pos.x,s.pos.z,Math.min(1.6,o*Math.abs(s.vel.y)*.05))}s.submerged=a}for(const s of this.props.ragdolls)for(const r of s.bones){const a=this.pondAt(r.pos.x,r.pos.z);let o=0;if(a&&r.pos.y-r.radius<a.region.surfaceY&&(o=Math.min(1,(a.region.surfaceY-(r.pos.y-r.radius))/(r.radius*2))),o>0){const c=r.mass,l=c*-Fa*o*i*1.15,u=3*o;this.world.applyImpulse(r.handle,[-r.vel.x*c*u*t,(l-r.vel.y*c*u)*t,-r.vel.z*c*u*t]),r.submerged<.02&&r.vel.y<-2.5&&this.splash(r.pos.x,r.pos.z,.7)}r.submerged=o}}}const ml=24,Ca=[new Tt("#9fdcff"),new Tt("#5ef2d6"),new Tt("#7d6bff"),new Tt("#ff5ef0")];function PS(n,t){const e=Math.min(1,Math.max(0,n))*(Ca.length-1),i=Math.min(Ca.length-2,Math.floor(e));return t.copy(Ca[i]).lerp(Ca[i+1],e-i)}function RS(){const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(190,230,255,1)"),e.addColorStop(.4,"rgba(110,190,255,0.55)"),e.addColorStop(1,"rgba(60,140,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ao(n)}const Ii=class Ii{constructor(t,e,i,s,r){W(this,"held",null);W(this,"holdDist",4);W(this,"charging",!1);W(this,"chargeT",0);W(this,"pullingIn",!1);W(this,"world");W(this,"props");W(this,"player");W(this,"muzzle");W(this,"raycaster",new Wd);W(this,"beam");W(this,"beamGeo");W(this,"glow");W(this,"holdLight");W(this,"velHistory",[]);W(this,"tmpV",new A);W(this,"tmpV2",new A);W(this,"tmpV3",new A);W(this,"tmpColor",new Tt);W(this,"lastChargeTime",1.2);this.world=t,this.props=e,this.player=i,this.muzzle=r,this.raycaster.far=60,this.beamGeo=new Oe,this.beamGeo.setAttribute("position",new nn(new Float32Array(ml*3),3)),this.beam=new Fc(this.beamGeo,new Br({color:"#7fd0ff",transparent:!0,opacity:.85,blending:Bi,depthWrite:!1})),this.beam.frustumCulled=!1,this.beam.visible=!1,s.add(this.beam),this.glow=new ac(new Xa({map:RS(),color:"#9fdcff",transparent:!0,blending:Bi,depthWrite:!1})),this.glow.scale.setScalar(1.6),this.glow.visible=!1,s.add(this.glow),this.holdLight=new oc("#66bbff",0,9),s.add(this.holdLight)}get holding(){return this.held!==null}heldPos(){return this.held?this.held.kind==="prop"?this.held.prop.pos:this.held.bone.pos:null}tryGrab(){const t=this.player.eye,e=this.player.viewDir(this.tmpV);this.raycaster.set(t,e);const i=this.raycaster.intersectObjects(this.props.raycastTargets(),!0);for(const s of i){const r=this.props.handleFromHit(s);if(r===void 0)continue;const a=this.props.all.get(r),o=this.props.boneByHandle.get(r);if(!(!a&&!o))return this.held=a?{handle:r,kind:"prop",prop:a}:{handle:r,kind:"bone",bone:o},this.holdDist=Math.max(2.2,Math.min(12,s.distance)),this.pullingIn=!0,this.world.setBodyGravityScale(r,0),this.world.setBodyAwake(r,!0),this.velHistory.length=0,this.beam.visible=!0,this.glow.visible=!0,this.holdLight.intensity=14,he.grab(),he.humStart(),!0}return!1}adjustDistance(t){this.held&&(this.pullingIn=!1,this.holdDist=Math.max(1.8,Math.min(14,this.holdDist+t)))}drop(){this.held&&(this.world.setBodyGravityScale(this.held.handle,this.props.zeroG?0:1),this.endHold(),he.release())}startCharge(){this.held&&(this.charging=!0,this.chargeT=0)}get charge(){return this.charging?Math.min(1,this.chargeT/Math.max(.05,this.lastChargeTime)):0}releaseCharge(t){if(!this.charging||(this.charging=!1,!this.held))return null;if(this.chargeT<Ii.TAP_TIME)return this.drop(),"dropped";const e=Math.min(1,this.chargeT/Math.max(.05,t.physgun.chargeTime)),i=t.physgun.throwSpeed*.5,s=(i+(t.physgun.launchMax-i)*e)/t.physgun.throwSpeed;return this.launch(t,s),"launched"}launch(t,e=1){if(!this.held)return;const i=this.player.viewDir(this.tmpV),s=t.physgun.throwSpeed*e,r=this.held.handle;if(this.world.setBodyGravityScale(r,this.props.zeroG?0:1),this.held.kind==="bone"){const a=this.props.ragdollOfBone(r);a&&this.world.humanSetVelocity(a.human,[i.x*s,i.y*s+2,i.z*s])}else this.world.setBodyVelocity(r,[i.x*s,i.y*s+1.5,i.z*s],[Math.random()*6-3,Math.random()*6-3,Math.random()*6-3]);this.endHold(),he.launch()}endHold(){this.held=null,this.charging=!1,this.chargeT=0,this.pullingIn=!1,this.beam.visible=!1,this.glow.visible=!1,this.holdLight.intensity=0,he.humStop()}forceRelease(){this.held&&this.endHold()}update(t,e,i){if(!this.held)return 0;const s=this.heldPos();if(!s)return this.endHold(),0;this.pullingIn&&(this.holdDist+=(Ii.PULL_DIST-this.holdDist)*Math.min(1,t*6),Math.abs(this.holdDist-Ii.PULL_DIST)<.05&&(this.holdDist=Ii.PULL_DIST,this.pullingIn=!1));const r=this.player.eye,a=this.player.viewDir(this.tmpV),o=this.tmpV2.copy(r).addScaledVector(a,this.holdDist);o.y=Math.max(o.y,.35);const l=this.tmpV3.copy(o).sub(s).multiplyScalar(e.physgun.stiffness),u=42;l.lengthSq()>u*u&&l.setLength(u);let d;if(i){const S=e.physgun.spinSpeed;d=[0,S,a.x*S*.4]}else{const S=this.world.getBodyVelocity(this.held.handle);d=[S.angular[0]*.9,S.angular[1]*.9,S.angular[2]*.9]}this.world.setBodyVelocity(this.held.handle,[l.x,l.y,l.z],d),this.world.setBodyAwake(this.held.handle,!0),this.charging&&(this.chargeT+=t),this.lastChargeTime=e.physgun.chargeTime;const h=this.charge;he.humPitch(l.length()+h*30),this.velHistory.length>5&&this.velHistory.shift(),this.velHistory.push(l.clone());const m=this.muzzle.getWorldPosition(new A),g=this.beamGeo.getAttribute("position"),b=new A().lerpVectors(m,s,.45).addScaledVector(a,-.4);b.y-=.15;const f=Math.sin(performance.now()*.008)*.06;for(let S=0;S<ml;S++){const P=S/(ml-1),y=new A().lerpVectors(m,b,P),C=new A().lerpVectors(b,s,P),M=y.lerp(C,P);M.y+=Math.sin(P*Math.PI)*f,g.setXYZ(S,M.x,M.y,M.z)}g.needsUpdate=!0,this.glow.position.copy(s),this.glow.scale.setScalar(1.3+h*1.6);const p=PS(h,this.tmpColor);return this.glow.material.color.copy(p),this.beam.material.color.copy(p),this.holdLight.color.copy(p),this.holdLight.position.copy(s),this.holdLight.intensity=14+h*40,this.held.handle}};W(Ii,"PULL_DIST",3),W(Ii,"TAP_TIME",.22);let xc=Ii;const no=[{id:"physgun",name:"PHYSGUN",color:"#6fc3ff"},{id:"spawner",name:"SPAWNER",color:"#7dff9a"},{id:"hose",name:"HOSE",color:"#4dd7ff"},{id:"boom",name:"BOOM",color:"#ff9a4d"},{id:"rope",name:"ROPE",color:"#ffe14d"},{id:"thruster",name:"THRUSTER",color:"#ff5f8a"}],gl=["crate","ball","plank","barrel","ragdoll","tower","wall","dominoes","ball pit"];function fd(n,t){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d"),s=i.createRadialGradient(32,32,2,32,32,30);return s.addColorStop(0,n),s.addColorStop(1,t),i.fillStyle=s,i.fillRect(0,0,64,64),new ao(e)}class LS{constructor(t,e,i,s,r){W(this,"active","physgun");W(this,"spawnIndex",0);W(this,"physgun");W(this,"shake",0);W(this,"onToolChanged",()=>{});W(this,"onSpawnItemChanged",()=>{});W(this,"onAction",()=>{});W(this,"world");W(this,"props");W(this,"player");W(this,"fluid");W(this,"scene");W(this,"wheelAccum",0);W(this,"hoseOn",!1);W(this,"boomCooldown",0);W(this,"ropes",[]);W(this,"ropePickA",null);W(this,"pickMarker");W(this,"booms",[]);W(this,"thrusters",[]);W(this,"flameTex");W(this,"thrusterMat");W(this,"gun",new Ws);W(this,"core");W(this,"coreMat");W(this,"muzzle",new Te);W(this,"kick",0);W(this,"bobPhase",0);W(this,"raycaster",new Wd);W(this,"groundPlane",new Di(new A(0,1,0),0));W(this,"tmpV",new A);W(this,"tmpV2",new A);W(this,"tmpQ",new pn);W(this,"upAxis",new A(0,1,0));this.world=t,this.props=e,this.player=i,this.fluid=s,this.scene=r,this.raycaster.far=70,this.raycaster.params.Line.threshold=.28;const a=new fn({color:"#46525f",roughness:.5,metalness:.25}),o=new fn({color:"#5c6a78",roughness:.55,metalness:.2});this.coreMat=new fn({color:"#0c1116",emissive:"#6fc3ff",emissiveIntensity:2.2,roughness:.3});const c=new fe(new Un(.16,.15,.46),a),l=new fe(new oo(.045,.06,.34,10),o);l.rotation.x=Math.PI/2,l.position.set(0,.02,-.36),this.core=new fe(new Gi(.055,14,10),this.coreMat),this.core.position.set(0,.09,-.12);const u=new Un(.02,.09,.2),d=new fe(u,o);d.position.set(.09,.04,-.42),d.rotation.z=-.35;const h=d.clone();h.position.x=-.09,h.rotation.z=.35;const m=new fe(new Un(.09,.22,.12),a);m.position.set(0,-.16,.12),m.rotation.x=.35,this.muzzle.position.set(0,.02,-.55),this.gun.add(c,l,this.core,d,h,m,this.muzzle),this.gun.scale.setScalar(.5),this.gun.position.set(.3,-.26,-.55),i.camera.add(this.gun);const g=new oc("#cfe4ff",2.2,7,1.2);g.position.set(0,.1,-.2),i.camera.add(g),r.add(i.camera),this.physgun=new xc(t,e,i,r,this.muzzle),this.pickMarker=new ac(new Xa({map:fd("rgba(255,235,140,1)","rgba(255,190,40,0)"),color:"#ffe14d",transparent:!0,blending:Bi,depthWrite:!1})),this.pickMarker.scale.setScalar(.55),this.pickMarker.visible=!1,r.add(this.pickMarker),this.flameTex=fd("rgba(255,240,200,1)","rgba(255,110,40,0)"),this.thrusterMat=new fn({color:"#4a3f47",roughness:.45,metalness:.4,emissive:"#ff5f8a",emissiveIntensity:.7})}get spawnItem(){return gl[this.spawnIndex]}get ropeCount(){return this.ropes.length}setTool(t){if(t===this.active)return;this.active==="physgun"&&this.physgun.holding&&this.physgun.drop(),this.active==="hose"&&this.stopHose(),this.ropePickA=null,this.pickMarker.visible=!1,this.active=t;const e=no.find(i=>i.id===t);this.coreMat.emissive.set(e.color),he.toolSwitch(),this.kick=.5,this.onToolChanged(t)}stopHose(){this.hoseOn&&(this.hoseOn=!1,he.sprayStop())}aim(){const t=this.player.eye,e=this.player.viewDir(this.tmpV);this.raycaster.set(t,e);const i=this.raycaster.intersectObjects(this.props.raycastTargets(),!0);for(const r of i){const a=this.props.handleFromHit(r);if(a===void 0)continue;let o;if(r.face){if(o=r.face.normal.clone(),r.object instanceof qa){const c=this.props.all.get(a);c&&o.applyQuaternion(c.quat)}else o.applyQuaternion(r.object.getWorldQuaternion(this.tmpQ));o.normalize()}return{point:r.point.clone(),handle:a,normal:o}}const s=new A;return this.raycaster.ray.intersectPlane(this.groundPlane,s)&&s.distanceTo(t)<70?{point:s}:{point:t.clone().addScaledVector(e,12)}}bodyRef(t){const e=this.props.all.get(t);if(e)return{pos:e.pos,quat:e.quat,mass:e.mass};const i=this.props.boneByHandle.get(t);return i?{pos:i.pos,quat:i.group.quaternion,mass:i.mass}:null}onMouseDown(t,e){if(t===0){switch(this.active){case"physgun":this.physgun.holding?this.physgun.startCharge():this.physgun.tryGrab()?this.kick=.55:this.kick=.3;break;case"spawner":this.spawnAtAim();break;case"hose":this.hoseOn=!0,he.sprayStart();break;case"boom":this.explode(e,1);break;case"rope":this.ropeClick();break;case"thruster":this.placeThruster();break}this.onAction()}else if(t===2){switch(this.active){case"physgun":this.physgun.holding&&(this.physgun.launch(e),this.kick=1);break;case"spawner":this.deleteAtAim();break;case"boom":this.explode(e,1.8);break;case"rope":this.clearRopes();break;case"thruster":this.clearThrusters();break}this.onAction()}}onMouseUp(t,e){t===0&&this.active==="hose"&&this.stopHose(),t===0&&this.active==="physgun"&&this.physgun.releaseCharge(e)==="launched"&&(this.kick=1)}onWheel(t){if(this.active==="physgun"&&this.physgun.holding){this.physgun.adjustDistance(-Math.sign(t)*Math.min(1.4,Math.abs(t)/90));return}if(this.active==="spawner"&&(this.wheelAccum+=t,Math.abs(this.wheelAccum)>=120)){const e=this.wheelAccum>0?-1:1;this.wheelAccum=0,this.spawnIndex=(this.spawnIndex+e+gl.length)%gl.length,this.onSpawnItemChanged(this.spawnItem),he.tick()}}spawnAtAim(){const t=this.aim();if(!t)return;const e=t.point,i=this.player.viewDir(this.tmpV2).setY(0).normalize(),s=this.spawnItem;let r=!0;switch(s){case"crate":r=this.props.spawn("crate",e.clone().add(new A(0,.6,0)));break;case"ball":r=this.props.spawn("ball",e.clone().add(new A(0,.6,0)));break;case"plank":r=this.props.spawn("plank",e.clone().add(new A(0,.5,0)),{rotation:this.tmpQ.setFromAxisAngle(new A(0,1,0),this.player.yaw).clone()});break;case"barrel":r=this.props.spawn("barrel",e.clone().add(new A(0,.9,0)));break;case"ragdoll":r=this.props.spawnRagdoll(e.clone().add(new A(0,1.5,0)));break;case"tower":this.props.spawnTower(e,3,5);break;case"wall":this.props.spawnWall(e,i,7,4);break;case"dominoes":this.props.spawnDominoes(e.clone().addScaledVector(i,1),i,14);break;case"ball pit":this.props.spawnBallPit(e.clone().add(new A(0,.5,0)),30);break}r&&(he.spawn(),this.kick=.45)}deleteAtAim(){const t=this.aim();if(!t||t.handle===void 0)return;const e=this.props.all.get(t.handle);if(e){this.props.despawn(e),he.del();return}const i=this.props.ragdollOfBone(t.handle);i&&(this.props.despawnRagdoll(i),he.del())}explode(t,e){if(this.boomCooldown>0)return;this.boomCooldown=.5;const i=this.aim();if(!i)return;const s=i.point,r=t.boom.radius*e;this.world.explode([s.x,s.y,s.z],r,1.3,t.boom.impulse*e);for(const c of this.props.all.values()){const l=c.pos.distanceTo(s);if(l<r){const u=1-l/r;this.world.applyImpulse(c.handle,[0,c.mass*t.boom.impulse*.06*u*e,0]),this.world.setBodyAwake(c.handle,!0)}}for(const c of this.props.ragdolls)for(const l of c.bones)l.pos.distanceTo(s)<r&&this.world.setBodyAwake(l.handle,!0);s.y<1&&(this.fluid.splash(s.x,s.z,1.6),this.fluid.splash(s.x+.8,s.z+.5,1.1));const a=new fe(new Gi(1,20,12),new ro({color:"#ffb56b",transparent:!0,opacity:.9,blending:Bi,depthWrite:!1}));a.position.copy(s);const o=new oc("#ff9a4d",60,r*3);o.position.copy(s).y+=1,this.scene.add(a,o),this.booms.push({mesh:a,light:o,t:0}),this.shake=Math.min(1.2,this.shake+.55*e),this.kick=1,he.boom()}cutRope(t){this.world.destroyJoint(t.joint),this.scene.remove(t.line),t.line.geometry.dispose();const e=this.ropes.indexOf(t);e!==-1&&this.ropes.splice(e,1),this.world.setBodyAwake(t.a,!0),this.world.setBodyAwake(t.b,!0),he.snip(),this.kick=Math.max(this.kick,.35)}cutRopeAtAim(){if(!this.ropes.length)return!1;const t=this.player.eye,e=this.player.viewDir(this.tmpV);this.raycaster.set(t,e);const s=this.raycaster.intersectObjects(this.ropes.map(a=>a.line),!1)[0];if(!s)return!1;const r=this.ropes.find(a=>a.line===s.object);return r?(this.cutRope(r),!0):!1}cutRopeAction(){var i;if(this.cutRopeAtAim())return!0;const t=(i=this.physgun.held)==null?void 0:i.handle;if(t===void 0)return!1;const e=this.ropes.filter(s=>s.a===t||s.b===t);for(const s of e)this.cutRope(s);return e.length>0}ropeClick(){if(this.cutRopeAtAim())return;const t=this.aim();if(!t||t.handle===void 0)return;const e=this.bodyRef(t.handle);if(!e)return;const i=t.point.clone().sub(e.pos).applyQuaternion(this.tmpQ.copy(e.quat).invert());if(!this.ropePickA||this.ropePickA.handle===t.handle){this.ropePickA={handle:t.handle,local:i},this.pickMarker.visible=!0,he.rope();return}const s=this.ropePickA,r=this.anchorWorld(s.handle,s.local,new A),a=t.point;if(!r){this.ropePickA=null,this.pickMarker.visible=!1;return}const o=this.world.createDistanceJoint(s.handle,t.handle,[r.x,r.y,r.z],[a.x,a.y,a.z],{length:r.distanceTo(a)*.85,hertz:2.5,dampingRatio:.4}),c=new Oe;c.setAttribute("position",new nn(new Float32Array(36),3));const l=new Fc(c,new Br({color:"#ffe14d",transparent:!0,opacity:.9}));l.frustumCulled=!1,this.scene.add(l),this.ropes.push({joint:o,a:s.handle,b:t.handle,localA:s.local,localB:i,line:l}),this.ropePickA=null,this.pickMarker.visible=!1,this.world.setBodyAwake(s.handle,!0),this.world.setBodyAwake(t.handle,!0),he.rope(),this.kick=.4}anchorWorld(t,e,i){const s=this.bodyRef(t);return s?i.copy(e).applyQuaternion(s.quat).add(s.pos):null}clearRopes(){for(const t of this.ropes)this.world.destroyJoint(t.joint),this.scene.remove(t.line),t.line.geometry.dispose();this.ropes.length&&he.del(),this.ropes.length=0,this.ropePickA=null,this.pickMarker.visible=!1}get thrusterCount(){return this.thrusters.length}placeThruster(){if(this.thrusters.length>=24)return;const t=this.aim();if(!t||t.handle===void 0||!t.normal)return;const e=this.bodyRef(t.handle);if(!e)return;const i=this.tmpQ.copy(e.quat).invert(),s=t.point.clone().sub(e.pos).applyQuaternion(i),r=t.normal.clone().applyQuaternion(i).normalize(),a=new fe(new Oc(.11,.26,10),this.thrusterMat);a.castShadow=!0;const o=new ac(new Xa({map:this.flameTex,color:"#ffb36b",transparent:!0,blending:Bi,depthWrite:!1}));o.scale.setScalar(.5),this.scene.add(a,o),this.thrusters.push({handle:t.handle,local:s,localDir:r,mesh:a,flame:o}),this.world.setBodyAwake(t.handle,!0),he.spawn(),this.kick=.45}removeThruster(t){this.scene.remove(t.mesh,t.flame),t.mesh.geometry.dispose(),t.flame.material.dispose()}clearThrusters(){this.thrusters.length&&he.del();for(const t of this.thrusters)this.removeThruster(t);this.thrusters.length=0}prePhysics(t,e){for(let i=this.thrusters.length-1;i>=0;i--){const s=this.thrusters[i],r=this.bodyRef(s.handle);if(!r){this.removeThruster(s),this.thrusters.splice(i,1);continue}const a=this.tmpV.copy(s.localDir).applyQuaternion(r.quat),o=this.tmpV2.copy(s.local).applyQuaternion(r.quat).add(r.pos),c=r.mass*e.thruster.power*t;this.world.applyImpulseAtPoint(s.handle,[-a.x*c,-a.y*c,-a.z*c],[o.x,o.y,o.z]),this.world.setBodyAwake(s.handle,!0)}}pruneRopes(){for(let t=this.ropes.length-1;t>=0;t--){const e=this.ropes[t],i=this.props.all.has(e.a)||this.props.boneByHandle.has(e.a),s=this.props.all.has(e.b)||this.props.boneByHandle.has(e.b);(!i||!s)&&(this.scene.remove(e.line),e.line.geometry.dispose(),this.ropes.splice(t,1))}}update(t,e,i){if(this.boomCooldown-=e,this.physgun.held){const l=this.physgun.held.handle;!this.props.all.has(l)&&!this.props.boneByHandle.has(l)&&this.physgun.forceRelease()}const s=this.physgun.update(t,i,yn.has("KeyR"));if(this.hoseOn){const l=this.muzzle.getWorldPosition(this.tmpV),u=this.player.viewDir(this.tmpV2);this.fluid.emitJet(l,u,t,i),this.kick=Math.max(this.kick,.14+Math.random()*.05)}this.pruneRopes();const r=new A,a=new A;for(const l of this.ropes){if(!this.anchorWorld(l.a,l.localA,r)||!this.anchorWorld(l.b,l.localB,a))continue;const u=l.line.geometry.getAttribute("position"),d=Math.min(.8,r.distanceTo(a)*.08);for(let h=0;h<12;h++){const m=h/11,g=r.x+(a.x-r.x)*m,b=r.y+(a.y-r.y)*m-Math.sin(m*Math.PI)*d,f=r.z+(a.z-r.z)*m;u.setXYZ(h,g,b,f)}u.needsUpdate=!0,l.line.geometry.computeBoundingSphere()}this.ropePickA&&(this.anchorWorld(this.ropePickA.handle,this.ropePickA.local,r)?(this.pickMarker.position.copy(r),this.pickMarker.scale.setScalar(.45+Math.sin(performance.now()*.008)*.1)):(this.ropePickA=null,this.pickMarker.visible=!1));for(const l of this.thrusters){const u=this.bodyRef(l.handle);if(!u)continue;const d=this.tmpV.copy(l.localDir).applyQuaternion(u.quat),h=this.tmpV2.copy(l.local).applyQuaternion(u.quat).add(u.pos);l.mesh.position.copy(h).addScaledVector(d,.1),l.mesh.quaternion.setFromUnitVectors(this.upAxis,d),l.flame.position.copy(h).addScaledVector(d,.32+Math.random()*.08),l.flame.scale.setScalar(.38+Math.random()*.22)}he.thrustLoop(this.thrusters.length);for(let l=this.booms.length-1;l>=0;l--){const u=this.booms[l];u.t+=e;const d=u.t/.45;if(d>=1){this.scene.remove(u.mesh,u.light),u.mesh.geometry.dispose(),u.mesh.material.dispose(),this.booms.splice(l,1);continue}u.mesh.scale.setScalar(1+d*d*9),u.mesh.material.opacity=.9*(1-d),u.light.intensity=60*(1-d)}this.kick=Math.max(0,this.kick-e*4);const o=Math.hypot(this.player.vel.x,this.player.vel.z);this.bobPhase+=e*(2+o*1.1);const c=Math.sin(this.bobPhase*2.1)*.006*Math.min(1,o*.4);return this.gun.position.set(.3+Math.sin(this.bobPhase)*.004*Math.min(1,o*.4),-.26+c,-.55+this.kick*.09),this.gun.rotation.set(this.kick*.22,0,Math.sin(this.bobPhase)*.004),this.coreMat.emissiveIntensity=2+Math.sin(performance.now()*.006)*.5+this.kick*3,this.shake=Math.max(0,this.shake-e*2.2),s}}class DS{constructor(){W(this,"toolbar",document.getElementById("toolbar"));W(this,"hint",document.getElementById("tool-hint"));W(this,"status",document.getElementById("status-line"));W(this,"help",document.getElementById("help-card"));W(this,"crosshair",document.getElementById("crosshair"));W(this,"overlay",document.getElementById("lock-overlay"));W(this,"slots",new Map);W(this,"helpTimer",0);W(this,"started",!1);for(let t=0;t<no.length;t++){const e=no[t],i=document.createElement("div");i.className="tool-slot",i.style.setProperty("--tool-color",e.color),i.innerHTML=`<span class="key">${t+1}</span><span class="name">${e.name}</span><span class="sub"></span>`,this.toolbar.appendChild(i),this.slots.set(e.id,i)}this.helpTimer=window.setTimeout(()=>this.help.classList.add("hidden"),14e3)}bindPlay(t){document.getElementById("play-btn").addEventListener("click",t),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&t()})}setLocked(t){t&&(this.started=!0),this.overlay.classList.toggle("hidden",t||this.started)}setActiveTool(t,e){for(const[i,s]of this.slots)s.classList.toggle("active",i===t);this.hint.textContent=e}setSpawnItem(t){const e=this.slots.get("spawner");e&&(e.querySelector(".sub").textContent=`◂ ${t.toUpperCase()} ▸`)}setHint(t){this.hint.textContent=t}setStatus(t){this.status.textContent=t}toggleHelp(){window.clearTimeout(this.helpTimer),this.help.classList.toggle("hidden")}pulse(){this.crosshair.classList.remove("pulse"),this.crosshair.offsetWidth,this.crosshair.classList.add("pulse"),window.setTimeout(()=>this.crosshair.classList.remove("pulse"),90)}}const md={physgun:"LMB grab · tap drop / hold to charge launch · RMB launch · scroll distance · R spin · C cut rope",spawner:"LMB spawn · RMB delete · scroll item",hose:"hold LMB to spray",boom:"LMB boom · RMB mega boom",rope:"LMB link two props · LMB a rope (or C) cuts it · RMB clear all",thruster:"LMB strap a rocket to a prop · RMB clear thrusters"};async function IS(){const{params:n,pane:t,stats:e,onLandmarks:i}=sS(),{world:s}=await fS(),r=_S(s),a=r.scene,o=new bS(s,a);o.populateInitial();const c=new wS(s,r.statics,r.waters,r.domes,innerWidth/innerHeight),l=new AS(a,s,o,r.statics,r.waters,r.domes),u=new LS(s,o,c,l,a),d=new DS,h=new Ux({antialias:!0,powerPreference:"high-performance"});h.setSize(innerWidth,innerHeight),h.setPixelRatio(Math.min(devicePixelRatio,1.75)),h.outputColorSpace=Ke,h.toneMapping=yc,h.shadowMap.enabled=!0,h.shadowMap.type=Cr,document.getElementById("app").appendChild(h.domElement);const m=new Bm(4);m.position.y=.02;const g=new Om(84,42,5605563,2568252);g.position.y=.015,a.add(m,g),i(T=>{m.visible=T,g.visible=T});const b=h.domElement;let f=!1,p=!1;const S=()=>{MS();const T=b.requestPointerLock();T==null||T.catch(()=>{p=!0,f=!0,d.setLocked(!0)})};d.bindPlay(S),document.addEventListener("pointerlockchange",()=>{f=document.pointerLockElement===b||p,d.setLocked(f),f||u.onMouseUp(0,n)}),document.addEventListener("mousemove",T=>{f&&c.onMouseDelta(T.movementX,T.movementY)}),addEventListener("mousedown",T=>{f&&u.onMouseDown(T.button,n)}),addEventListener("mouseup",T=>{f&&u.onMouseUp(T.button,n)}),addEventListener("contextmenu",T=>T.preventDefault()),addEventListener("wheel",T=>{f&&u.onWheel(T.deltaY)},{passive:!0});let P=!1,y=!1;addEventListener("keydown",T=>{const L=T.target;if(L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"||L.isContentEditable))return;const D=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].indexOf(T.code);if(D>=0){u.setTool(no[D].id);return}switch(T.code){case"KeyG":P=!P,o.setZeroG(P),he.toolSwitch();break;case"KeyF":y=!y,n.world.timeScale=y?.22:1,t.refresh(),he.toolSwitch();break;case"KeyX":u.physgun.forceRelease(),u.clearRopes(),u.clearThrusters(),o.clearAll(),he.del();break;case"KeyH":d.toggleHelp();break;case"KeyC":u.cutRopeAction();break}}),addEventListener("resize",()=>{c.camera.aspect=innerWidth/innerHeight,c.camera.updateProjectionMatrix(),h.setSize(innerWidth,innerHeight)}),u.onToolChanged=T=>d.setActiveTool(T,md[T]),u.onSpawnItemChanged=T=>d.setSpawnItem(T),u.onAction=()=>d.pulse(),d.setActiveTool("physgun",md.physgun),d.setSpawnItem(u.spawnItem);const C={spawn:(T="crate",L=0,D=3,B=10)=>o.spawn(T,new A(L,D,B))!==void 0,ragdoll:(T=0,L=3,D=10)=>o.spawnRagdoll(new A(T,L,D))!==void 0,boomAt:(T,L,D,B=6,Y=46)=>s.explode([T,L,D],B,1.3,Y),setTool:T=>u.setTool(T),counts:()=>({props:o.count,ragdolls:o.ragdolls.length,droplets:l.dropletCount}),player:()=>({pos:c.pos.toArray(),grounded:c.grounded,inWater:c.inWater}),renderer:()=>({calls:h.info.render.calls,tris:h.info.render.triangles}),teleport:(T,L,D,B=0,Y=0)=>{c.pos.set(T,L,D),c.vel.set(0,0,0),c.yaw=B,c.pitch=Y},hoseBurst:(T=.5)=>{const L=c.eye,D=c.viewDir();l.emitJet(L,D,T,n)},forceLock:T=>{f=T},ropes:()=>u.ropeCount,thrusters:()=>u.thrusterCount,grabAim:()=>({grabbed:u.physgun.tryGrab(),holding:u.physgun.holding}),dropHeld:()=>u.physgun.drop(),physState:()=>({holding:u.physgun.holding,charging:u.physgun.charging,charge:u.physgun.charge,holdDist:u.physgun.holdDist,heldPos:u.physgun.held?(u.physgun.held.kind==="prop"?u.physgun.held.prop.pos.toArray():u.physgun.held.bone.pos.toArray()).map(T=>Math.round(T*100)/100):null}),launchHeld:()=>u.physgun.launch(n),lastProps:(T=3)=>[...o.all.values()].slice(-T).map(D=>({shape:D.shape,pos:D.pos.toArray().map(B=>Math.round(B*100)/100)})),propYs:()=>{var L;const T={};for(const D of o.all.values())(T[L=D.shape]??(T[L]=[])).push(Math.round(D.pos.y*100)/100);for(const D of Object.keys(T))T[D]=T[D].slice(0,8);return T}};window.__MOD__=C,window.__THREE_GAME_DIAGNOSTICS__=C;let M=performance.now(),R=0,_=0;const w=T=>{const L=Math.min((T-M)/1e3,.05);M=T;const D=L*n.world.timeScale;SS(n.audio.volume),h.toneMappingExposure=n.rendering.exposure;const B=u.update(D,L,n);c.update(L,n,o,B,f),r.sun.position.set(c.pos.x+34,c.pos.y+46,c.pos.z+22),r.sunTarget.position.copy(c.pos),R+=D;let Y=0;for(;R>=ji&&Y<4;)l.prePhysics(ji,n),u.prePhysics(ji,n),s.step(ji,pS),R-=ji,Y++;if(R>ji*4&&(R=ji),Y>0){const O=s.readHitEvents(32);let K=0;for(const H of O){if(K>=3)break;H.approachSpeed>3&&(he.impact(H.approachSpeed),K++)}}if(o.sync(),l.update(D,n),u.shake>.001){const O=u.shake*.05;c.camera.position.x+=(Math.random()-.5)*O,c.camera.position.y+=(Math.random()-.5)*O,c.camera.rotation.z+=(Math.random()-.5)*u.shake*.01}if(++_%20===0){const O=[P?"ZERO-G":"",y?"SLOW-MO":"",c.inWater?"SWIMMING":"",u.ropeCount?`${u.ropeCount} ropes`:"",u.thrusterCount?`${u.thrusterCount} thrusters`:""].filter(Boolean).join(" · ");d.setStatus(`${o.count} props · ${o.ragdolls.length} dolls · ${l.dropletCount} drops${O?`
`+O:""}`)}h.render(a,c.camera),e.update()};h.setAnimationLoop(w),C.stepFrames=(T=60)=>{for(let L=0;L<T;L++)M=performance.now()-16.6,w(performance.now())}}IS();
