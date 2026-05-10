import{$ as M,$a as Y,A as Je,Aa as cs,Ab as tt,B as Xo,Ba as ds,Bb as tr,C as gi,Ca as Se,Cb as w,D as Ko,Da as g,Db as ze,E as Za,Ea as on,Eb as f,F as Qo,Fa as us,Fb as Me,G as qt,Ga as _i,Gb as Sn,H as Oe,Ha as ms,Hb as re,I as kn,Ia as be,Ib as ys,J as ie,Ja as Ne,Jb as Re,K as Xt,Ka as De,Kb as _e,L as oe,La as se,Lb as Bt,M as Ve,Ma as ce,Mb as nr,N as p,Na as hs,Nb as Mn,O as A,Oa as Ge,Ob as xs,P as _,Pa as vi,Pb as Cs,Q as B,Qa as C,Qb as pe,R as s,Ra as I,Rb as Ds,S as Kt,Sa as D,Sb as O,T as qa,Ta as fs,Tb as gt,U as ot,Ua as W,Ub as ws,V as Xa,Va as Le,Vb as yi,W as me,Wa as ps,X as he,Xa as rn,Y as Ka,Ya as Jo,Z as Qa,Za as Nt,_ as L,_a as gs,a as v,aa as V,ab as U,b as K,ba as x,bb as $,ca as Ot,cb as ut,d as Zt,da as Ja,db as mt,e as ye,ea as q,eb as ht,f as Be,fa as es,fb as P,g as y,ga as ts,gb as m,h as Yo,ha as Pe,hb as u,i as Zo,ia as Ee,ib as J,j as hi,ja as Ce,jb as ft,k as ja,ka as S,kb as Lt,l as xe,la as En,lb as je,m as za,ma as ns,mb as Ie,n as ae,na as Pt,nb as et,o as Ha,oa as is,ob as E,p as Ua,pa as Qt,pb as bs,q as fi,qa as Jt,qb as T,r as pi,ra as en,rb as fe,s as $a,sa as bi,sb as X,t as Ga,ta as tn,tb as pt,u as ct,ua as nn,ub as de,v as le,va as os,vb as R,w as qo,wa as rs,wb as F,x as Wa,xa as as,xb as _s,y as Ya,ya as ss,yb as vs,z as dt,za as ls,zb as er}from"./chunk-SIQETIVM.js";var ks=null;function He(){return ks}function ir(i){ks??=i}var Tn=class{},xi=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>s(Es),providedIn:"platform"})}return i})();var Es=(()=>{class i extends xi{_location;_history;_doc=s(M);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return He().getBaseHref(this._doc)}onPopState(e){let t=He().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=He().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,o){this._history.pushState(e,t,o)}replaceState(e,t,o){this._history.replaceState(e,t,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function Ts(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function Ss(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function bt(i){return i&&i[0]!=="?"?`?${i}`:i}var Ci=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>s(zd),providedIn:"root"})}return i})(),jd=new _(""),zd=(()=>{class i extends Ci{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(M).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ts(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+bt(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${t}${o}`:t}pushState(e,t,o,r){let a=this.prepareExternalUrl(o+bt(r));this._platformLocation.pushState(e,t,a)}replaceState(e,t,o,r){let a=this.prepareExternalUrl(o+bt(r));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(B(xi),B(jd,8))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Di=(()=>{class i{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=$d(Ss(Ms(t))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+bt(t))}normalize(e){return i.stripTrailingSlash(Ud(this._basePath,Ms(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",o=null){this._locationStrategy.pushState(o,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+bt(t)),o)}replaceState(e,t="",o=null){this._locationStrategy.replaceState(o,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+bt(t)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(o=>o(e,t))}subscribe(e,t,o){return this._subject.subscribe({next:e,error:t??void 0,complete:o??void 0})}static normalizeQueryParams=bt;static joinWithSlash=Ts;static stripTrailingSlash=Ss;static \u0275fac=function(t){return new(t||i)(B(Ci))};static \u0275prov=p({token:i,factory:()=>Hd(),providedIn:"root"})}return i})();function Hd(){return new Di(B(Ci))}function Ud(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Ms(i){return i.replace(/\/index.html$/,"")}function $d(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var or=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(L);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,o):!1,get:(e,t,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,o)}})}static \u0275fac=function(t){return new(t||i)(ce(Ge))};static \u0275dir=D({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ee]})}return i})();var wi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({})}return i})();function ki(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[o,r]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(o.trim()===n)return decodeURIComponent(r)}return null}var Vt=class{};var rr="browser";function Is(i){return i===rr}var An=class{_doc;constructor(n){this._doc=n}manager},Ei=(()=>{class i extends An{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,r){return e.addEventListener(t,o,r),()=>this.removeEventListener(e,t,o,r)}removeEventListener(e,t,o,r){return e.removeEventListener(t,o,r)}static \u0275fac=function(t){return new(t||i)(B(M))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),Ti=new _(""),cr=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let o=e.filter(a=>!(a instanceof Ei));this._plugins=o.slice().reverse();let r=e.find(a=>a instanceof Ei);r&&this._plugins.push(r)}addEventListener(e,t,o,r){return this._findPluginFor(t).addEventListener(e,t,o,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(r=>r.supports(e)),!t)throw new oe(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(B(Ti),B(x))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),ar="ng-app-id";function Rs(i){for(let n of i)n.remove()}function Fs(i,n){let e=n.createElement("style");return e.textContent=i,e}function Yd(i,n,e,t){let o=i.head?.querySelectorAll(`style[${ar}="${n}"],link[${ar}="${n}"]`);if(o)for(let r of o)r.removeAttribute(ar),r instanceof HTMLLinkElement?t.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function lr(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var dr=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,o,r={}){this.doc=e,this.appId=t,this.nonce=o,Yd(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,Fs);t?.forEach(o=>this.addUsage(o,this.external,lr))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let r=t.get(e);r?r.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(Rs(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Rs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,Fs(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,lr(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(B(M),B(Pt),B(en,8),B(Qt))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),sr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ur=/%COMP%/g;var Ps="%COMP%",Zd=`_nghost-${Ps}`,qd=`_ngcontent-${Ps}`,Xd=!0,Kd=new _("",{factory:()=>Xd});function Qd(i){return qd.replace(ur,i)}function Jd(i){return Zd.replace(ur,i)}function Ns(i,n){return n.map(e=>e.replace(ur,i))}var Fn=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,o,r,a,l,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=a,this.ngZone=l,this.nonce=c,this.tracingService=d,this.defaultRenderer=new In(e,a,l,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,t);return o instanceof Mi?o.applyToHost(e):o instanceof Rn&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,r=o.get(t.id);if(!r){let a=this.doc,l=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,b=this.tracingService;switch(t.encapsulation){case bi.Emulated:r=new Mi(c,d,t,this.appId,h,a,l,b);break;case bi.ShadowDom:return new Si(c,e,t,a,l,this.nonce,b,d);case bi.ExperimentalIsolatedShadowDom:return new Si(c,e,t,a,l,this.nonce,b);default:r=new Rn(c,d,t,h,a,l,b);break}o.set(t.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(B(cr),B(dr),B(Pt),B(Kd),B(M),B(x),B(en),B(_i,8))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),In=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,o){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(sr[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Os(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Os(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new oe(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;let r=sr[o];r?n.setAttributeNS(r,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let o=sr[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(on.DashCase|on.Important)?n.style.setProperty(e,t,o&on.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&on.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,o){if(typeof n=="string"&&(n=He().getGlobalEventTarget(this.doc,n),!n))throw new oe(5102,!1);let r=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(n,e,r)),this.eventManager.addEventListener(n,e,r,o)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Os(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Si=class extends In{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,o,r,a,l,c){super(n,o,r,l),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Ns(t.id,d);for(let b of d){let N=document.createElement("style");a&&N.setAttribute("nonce",a),N.textContent=b,this.shadowRoot.appendChild(N)}let h=t.getExternalStyles?.();if(h)for(let b of h){let N=lr(b,o);a&&N.setAttribute("nonce",a),this.shadowRoot.appendChild(N)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Rn=class extends In{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,o,r,a,l,c){super(n,r,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let d=t.styles;this.styles=c?Ns(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&us.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Mi=class extends Rn{contentAttr;hostAttr;constructor(n,e,t,o,r,a,l,c){let d=o+"-"+t.id;super(n,e,t,r,a,l,c,d),this.contentAttr=Qd(d),this.hostAttr=Jd(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var Ai=class i extends Tn{supportsDOMEvents=!0;static makeCurrent(){ir(new i)}onAndCancel(n,e,t,o){return n.addEventListener(e,t,o),()=>{n.removeEventListener(e,t,o)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=tu();return e==null?null:nu(e)}resetBaseElement(){On=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ki(document.cookie,n)}},On=null;function tu(){return On=On||document.head.querySelector("base"),On?On.getAttribute("href"):null}function nu(i){return new URL(i,document.baseURI).pathname}var iu=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),Ls=["alt","control","meta","shift"],ou={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ru={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Bs=(()=>{class i extends An{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,o,r){let a=i.parseEventName(t),l=i.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>He().onAndCancel(e,a.domEventName,l,r))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let r=i._normalizeKey(t.pop()),a="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),a="code."),Ls.forEach(d=>{let h=t.indexOf(d);h>-1&&(t.splice(h,1),a+=d+".")}),a+=r,t.length!=0||r.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let o=ou[e.key]||e.key,r="";return t.indexOf("code.")>-1&&(o=e.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ls.forEach(a=>{if(a!==o){let l=ru[a];l(e)&&(r+=a+".")}}),r+=o,r===t)}static eventCallback(e,t,o){return r=>{i.matchEventFullKeyCode(r,e)&&o.runGuarded(()=>t(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(B(M))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})();function mr(i,n,e){return Zt(this,null,function*(){let t=v({rootComponent:i},au(n,e));return Ds(t)})}function au(i,n){return{platformRef:n?.platformRef,appProviders:[...uu,...i?.providers??[]],platformProviders:du}}function su(){Ai.makeCurrent()}function lu(){return new Ot}function cu(){return ns(document),document}var du=[{provide:Qt,useValue:rr},{provide:is,useValue:su,multi:!0},{provide:M,useFactory:cu}];var uu=[{provide:qa,useValue:"root"},{provide:Ot,useFactory:lu},{provide:Ti,useClass:Ei,multi:!0},{provide:Ti,useClass:Bs,multi:!0},Fn,dr,cr,{provide:De,useExisting:Fn},{provide:Vt,useClass:iu},[]];var _t=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let o=e.slice(0,t),r=e.slice(t+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let o=(n.op==="a"?this.headers.get(e):void 0)||[];o.push(...t),this.headers.set(e,o);break;case"d":let r=n.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(l=>r.indexOf(l)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=n.toLowerCase();this.headers.set(o,t),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var fr=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},pr=class{encodeKey(n){return Vs(n)}encodeValue(n){return Vs(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function mu(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[a,l]=r==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,r)),n.decodeValue(o.slice(r+1))],c=e.get(a)||[];c.push(l),e.set(a,c)}),e}var hu=/%(\d[a-f0-9])/gi,fu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Vs(i){return encodeURIComponent(i).replace(hu,(n,e)=>fu[e]??n)}function Ii(i){return`${i}`}var rt=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new pr,n.fromString){if(n.fromObject)throw new oe(2805,!1);this.map=mu(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],o=Array.isArray(t)?t.map(Ii):[Ii(t)];this.map.set(e,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let o=n[t];Array.isArray(o)?o.forEach(r=>{e.push({param:t,value:r,op:"a"})}):e.push({param:t,value:o,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Ii(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],o=t.indexOf(Ii(n.value));o!==-1&&t.splice(o,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function pu(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function js(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function zs(i){return typeof Blob<"u"&&i instanceof Blob}function Hs(i){return typeof FormData<"u"&&i instanceof FormData}function gu(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Us="Content-Type",$s="Accept",Ws="text/plain",Ys="application/json",bu=`${Ys}, ${Ws}, */*`,an=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,o){this.url=e,this.method=n.toUpperCase();let r;if(pu(this.method)||o?(this.body=t!==void 0?t:null,r=o):r=t,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new oe(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new _t,this.context??=new fr,!this.params)this.params=new rt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let l=e.indexOf("?"),c=l===-1?"?":l<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||js(this.body)||zs(this.body)||Hs(this.body)||gu(this.body)?this.body:this.body instanceof rt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Hs(this.body)?null:zs(this.body)?this.body.type||null:js(this.body)?null:typeof this.body=="string"?Ws:this.body instanceof rt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ys:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,o=n.responseType||this.responseType,r=n.keepalive??this.keepalive,a=n.priority||this.priority,l=n.cache||this.cache,c=n.mode||this.mode,d=n.redirect||this.redirect,h=n.credentials||this.credentials,b=n.referrer||this.referrer,N=n.integrity||this.integrity,G=n.referrerPolicy||this.referrerPolicy,j=n.transferCache??this.transferCache,Z=n.timeout??this.timeout,H=n.body!==void 0?n.body:this.body,Q=n.withCredentials??this.withCredentials,Ae=n.reportProgress??this.reportProgress,it=n.headers||this.headers,ve=n.params||this.params,Dn=n.context??this.context;return n.setHeaders!==void 0&&(it=Object.keys(n.setHeaders).reduce((wn,Ft)=>wn.set(Ft,n.setHeaders[Ft]),it)),n.setParams&&(ve=Object.keys(n.setParams).reduce((wn,Ft)=>wn.set(Ft,n.setParams[Ft]),ve)),new i(e,t,H,{params:ve,headers:it,context:Dn,reportProgress:Ae,responseType:o,withCredentials:Q,transferCache:j,keepalive:r,cache:l,priority:a,timeout:Z,mode:c,redirect:d,credentials:h,referrer:b,integrity:N,referrerPolicy:G})}},jt=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(jt||{}),Pn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new _t,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},gr=class i extends Pn{constructor(n={}){super(n)}type=jt.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Nn=class i extends Pn{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=jt.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},sn=class extends Pn{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},_u=200,vu=204;var yu=/^\)\]\}',?\n/;var xu=(()=>{class i{xhrFactory;tracingService=s(_i,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new oe(-2800,!1);let t=this.xhrFactory;return xe(null).pipe(kn(()=>new Be(r=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((H,Q)=>a.setRequestHeader(H,Q.join(","))),e.headers.has($s)||a.setRequestHeader($s,bu),!e.headers.has(Us)){let H=e.detectContentTypeHeader();H!==null&&a.setRequestHeader(Us,H)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let H=e.responseType.toLowerCase();a.responseType=H!=="json"?H:"text"}let l=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let H=a.statusText||"OK",Q=new _t(a.getAllResponseHeaders()),Ae=a.responseURL||e.url;return c=new gr({headers:Q,status:a.status,statusText:H,url:Ae}),c},h=this.maybePropagateTrace(()=>{let{headers:H,status:Q,statusText:Ae,url:it}=d(),ve=null;Q!==vu&&(ve=typeof a.response>"u"?a.responseText:a.response),Q===0&&(Q=ve?_u:0);let Dn=Q>=200&&Q<300;if(e.responseType==="json"&&typeof ve=="string"){let wn=ve;ve=ve.replace(yu,"");try{ve=ve!==""?JSON.parse(ve):null}catch(Ft){ve=wn,Dn&&(Dn=!1,ve={error:Ft,text:ve})}}Dn?(r.next(new Nn({body:ve,headers:H,status:Q,statusText:Ae,url:it||void 0})),r.complete()):r.error(new sn({error:ve,headers:H,status:Q,statusText:Ae,url:it||void 0}))}),b=this.maybePropagateTrace(H=>{let{url:Q}=d(),Ae=new sn({error:H,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Q||void 0});r.error(Ae)}),N=b;e.timeout&&(N=this.maybePropagateTrace(H=>{let{url:Q}=d(),Ae=new sn({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Q||void 0});r.error(Ae)}));let G=!1,j=this.maybePropagateTrace(H=>{G||(r.next(d()),G=!0);let Q={type:jt.DownloadProgress,loaded:H.loaded};H.lengthComputable&&(Q.total=H.total),e.responseType==="text"&&a.responseText&&(Q.partialText=a.responseText),r.next(Q)}),Z=this.maybePropagateTrace(H=>{let Q={type:jt.UploadProgress,loaded:H.loaded};H.lengthComputable&&(Q.total=H.total),r.next(Q)});return a.addEventListener("load",h),a.addEventListener("error",b),a.addEventListener("timeout",N),a.addEventListener("abort",b),e.reportProgress&&(a.addEventListener("progress",j),l!==null&&a.upload&&a.upload.addEventListener("progress",Z)),a.send(l),r.next({type:jt.Sent}),()=>{a.removeEventListener("error",b),a.removeEventListener("abort",b),a.removeEventListener("load",h),a.removeEventListener("timeout",N),e.reportProgress&&(a.removeEventListener("progress",j),l!==null&&a.upload&&a.upload.removeEventListener("progress",Z)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||i)(B(Vt))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Cu(i,n){return n(i)}function Du(i,n,e){return(t,o)=>Xa(e,()=>n(t,r=>i(r,o)))}var wu=new _("",{factory:()=>[]}),Zs=new _(""),ku=new _("",{factory:()=>!0});var Eu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let o=null;return t?o=new(t||i):o=B(xu),o},providedIn:"root"})}return i})();var Su=(()=>{class i{backend;injector;chain=null;pendingTasks=s(ts);contributeToStability=s(ku);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(wu),...this.injector.get(Zs,[])]));this.chain=t.reduceRight((o,r)=>Du(o,r,this.injector),Cu)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(gi(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(B(Eu),B(ot))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let o=null;return t?o=new(t||i):o=B(Su),o},providedIn:"root"})}return i})();function hr(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var br=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,o={}){let r;if(e instanceof an)r=e;else{let c;o.headers instanceof _t?c=o.headers:c=new _t(o.headers);let d;o.params&&(o.params instanceof rt?d=o.params:d=new rt({fromObject:o.params})),r=new an(e,t,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:d,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=xe(r).pipe(Ya(c=>this.handler.handle(c)));if(e instanceof an||o.observe==="events")return a;let l=a.pipe(le(c=>c instanceof Nn));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(ae(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new oe(2806,!1);return c.body}));case"blob":return l.pipe(ae(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new oe(2807,!1);return c.body}));case"text":return l.pipe(ae(c=>{if(c.body!==null&&typeof c.body!="string")throw new oe(2808,!1);return c.body}));default:return l.pipe(ae(c=>c.body))}case"response":return l;default:throw new oe(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new rt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,o={}){return this.request("PATCH",e,hr(o,t))}post(e,t,o={}){return this.request("POST",e,hr(o,t))}put(e,t,o={}){return this.request("PUT",e,hr(o,t))}static \u0275fac=function(t){return new(t||i)(B(Mu))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let o=null;return t?o=new(t||i):o=B(Iu),o},providedIn:"root"})}return i})(),Iu=(()=>{class i extends Ln{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case Se.NONE:return t;case Se.HTML:return nn(t,"HTML")?tn(t):ds(this._doc,String(t)).toString();case Se.STYLE:return nn(t,"Style")?tn(t):t;case Se.SCRIPT:if(nn(t,"Script"))return tn(t);throw new oe(5200,!1);case Se.URL:return nn(t,"URL")?tn(t):cs(String(t));case Se.RESOURCE_URL:if(nn(t,"ResourceURL"))return tn(t);throw new oe(5201,!1);default:throw new oe(5202,!1)}}bypassSecurityTrustHtml(e){return os(e)}bypassSecurityTrustStyle(e){return rs(e)}bypassSecurityTrustScript(e){return as(e)}bypassSecurityTrustUrl(e){return ss(e)}bypassSecurityTrustResourceUrl(e){return ls(e)}static \u0275fac=function(t){return new(t||i)(B(M))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Fu="@",Ou=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(L);loadingSchedulerFn=s(Pu,{optional:!0});_engine;constructor(e,t,o,r,a){this.doc=e,this.delegate=t,this.zone=o,this.animationType=r,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-KGSCHKCT.js").then(o=>o),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(o=>{throw new oe(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:r})=>{this._engine=o(this.animationType,this.doc);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let o=this.delegate.createRenderer(e,t);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let r=new _r(o);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let l=a.createRenderer(e,t);r.use(l),this.scheduler??=this.injector.get(es,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{r.use(o)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){hs()};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),_r=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,o){this.delegate.insertBefore(n,e,t,o)}removeChild(n,e,t,o){this.delegate.removeChild(n,e,t,o)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,o){this.delegate.setAttribute(n,e,t,o)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,o){this.delegate.setStyle(n,e,t,o)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,o){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(n,e,t,o)),this.delegate.listen(n,e,t,o)}shouldReplay(n){return this.replay!==null&&n.startsWith(Fu)}},Pu=new _("");function qs(i="animations"){return ms("NgAsyncAnimations"),Kt([{provide:De,useFactory:()=>new Ou(s(M),s(Fn),s(x),i)},{provide:Jt,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var il=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(ce(se),ce(S))};static \u0275dir=D({type:i})}return i})(),Nu=(()=>{class i extends il{static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275dir=D({type:i,features:[W]})}return i})(),xt=new _("");var Lu={provide:xt,useExisting:Ve(()=>Hi),multi:!0};function Bu(){let i=He()?He().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Vu=new _(""),Hi=(()=>{class i extends il{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Bu())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(ce(se),ce(S),ce(Vu,8))};static \u0275dir=D({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&E("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[re([Lu]),W]})}return i})();function Dr(i){return i==null||wr(i)===0}function wr(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var $n=new _(""),kr=new _(""),ju=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Oi=class{static min(n){return zu(n)}static max(n){return Hu(n)}static required(n){return Uu(n)}static requiredTrue(n){return $u(n)}static email(n){return Gu(n)}static minLength(n){return Wu(n)}static maxLength(n){return Yu(n)}static pattern(n){return Zu(n)}static nullValidator(n){return ol()}static compose(n){return dl(n)}static composeAsync(n){return ul(n)}};function zu(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function Hu(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Uu(i){return Dr(i.value)?{required:!0}:null}function $u(i){return i.value===!0?null:{required:!0}}function Gu(i){return Dr(i.value)||ju.test(i.value)?null:{email:!0}}function Wu(i){return n=>{let e=n.value?.length??wr(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Yu(i){return n=>{let e=n.value?.length??wr(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Zu(i){if(!i)return ol;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(Dr(t.value))return null;let o=t.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function ol(i){return null}function rl(i){return i!=null}function al(i){return Jo(i)?ja(i):i}function sl(i){let n={};return i.forEach(e=>{n=e!=null?v(v({},n),e):n}),Object.keys(n).length===0?null:n}function ll(i,n){return n.map(e=>e(i))}function qu(i){return!i.validate}function cl(i){return i.map(n=>qu(n)?n:e=>n.validate(e))}function dl(i){if(!i)return null;let n=i.filter(rl);return n.length==0?null:function(e){return sl(ll(e,n))}}function Er(i){return i!=null?dl(cl(i)):null}function ul(i){if(!i)return null;let n=i.filter(rl);return n.length==0?null:function(e){let t=ll(e,n).map(al);return pi(t).pipe(ae(sl))}}function Sr(i){return i!=null?ul(cl(i)):null}function Xs(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function ml(i){return i._rawValidators}function hl(i){return i._rawAsyncValidators}function vr(i){return i?Array.isArray(i)?i:[i]:[]}function Pi(i,n){return Array.isArray(i)?i.includes(n):i===n}function Ks(i,n){let e=vr(n);return vr(i).forEach(o=>{Pi(e,o)||e.push(o)}),e}function Qs(i,n){return vr(n).filter(e=>!Pi(i,e))}var Ni=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Er(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Sr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},vt=class extends Ni{name;get formDirective(){return null}get path(){return null}},zt=class extends Ni{_parent=null;name=null;valueAccessor=null},Li=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var fl=(()=>{class i extends Li{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ce(zt,2))};static \u0275dir=D({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&w("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[W]})}return i})(),pl=(()=>{class i extends Li{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(ce(vt,10))};static \u0275dir=D({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){t&2&&w("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[W]})}return i})();var Bn="VALID",Ri="INVALID",ln="PENDING",Vn="DISABLED",yt=class{},Bi=class extends yt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},zn=class extends yt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Hn=class extends yt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},cn=class extends yt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Vi=class extends yt{source;constructor(n){super(),this.source=n}},Un=class extends yt{source;constructor(n){super(),this.source=n}};function Mr(i){return(Ui(i)?i.validators:i)||null}function Xu(i){return Array.isArray(i)?Er(i):i||null}function Tr(i,n){return(Ui(n)?n.asyncValidators:i)||null}function Ku(i){return Array.isArray(i)?Sr(i):i||null}function Ui(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function gl(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new oe(1e3,"");if(!t[e])throw new oe(1001,"")}function bl(i,n,e){i._forEachChild((t,o)=>{if(e[o]===void 0)throw new oe(-1002,"")})}var dn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Re(this.statusReactive)}set status(n){Re(()=>this.statusReactive.set(n))}_status=_e(()=>this.statusReactive());statusReactive=q(void 0);get valid(){return this.status===Bn}get invalid(){return this.status===Ri}get pending(){return this.status===ln}get disabled(){return this.status===Vn}get enabled(){return this.status!==Vn}errors;get pristine(){return Re(this.pristineReactive)}set pristine(n){Re(()=>this.pristineReactive.set(n))}_pristine=_e(()=>this.pristineReactive());pristineReactive=q(!0);get dirty(){return!this.pristine}get touched(){return Re(this.touchedReactive)}set touched(n){Re(()=>this.touchedReactive.set(n))}_touched=_e(()=>this.touchedReactive());touchedReactive=q(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ks(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ks(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Qs(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Qs(n,this._rawAsyncValidators))}hasValidator(n){return Pi(this._rawValidators,n)}hasAsyncValidator(n){return Pi(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(K(v({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Hn(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Hn(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(K(v({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new zn(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new zn(!0,t))}markAsPending(n={}){this.status=ln;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(K(v({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vn,this.errors=null,this._forEachChild(o=>{o.disable(K(v({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Bi(this.value,t)),this._events.next(new cn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(K(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Bn,this._forEachChild(t=>{t.enable(K(v({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(K(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Bn||this.status===ln)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Bi(this.value,e)),this._events.next(new cn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(K(v({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vn:Bn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ln,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=al(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new cn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?Vn:this.errors?Ri:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ln)?ln:this._anyControlsHaveStatus(Ri)?Ri:Bn}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),o&&this._events.next(new zn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Hn(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ui(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Xu(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Ku(this._rawAsyncValidators)}},un=class extends dn{constructor(n,e,t){super(Mr(e),Tr(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){bl(this,!0,n),Object.keys(n).forEach(t=>{gl(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let o=this.controls[t];o&&o.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,o)=>{t.reset(n?n[o]:null,K(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Un(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((o,r)=>{t=e(t,o,r)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var yr=class extends un{};var Ar=new _("",{factory:()=>Ir}),Ir="always";function Qu(i,n){return[...n.path,i]}function xr(i,n,e=Ir){Rr(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),em(i,n),nm(i,n),tm(i,n),Ju(i,n)}function Js(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),zi(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function ji(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Ju(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Rr(i,n){let e=ml(i);n.validator!==null?i.setValidators(Xs(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=hl(i);n.asyncValidator!==null?i.setAsyncValidators(Xs(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let o=()=>i.updateValueAndValidity();ji(n._rawValidators,o),ji(n._rawAsyncValidators,o)}function zi(i,n){let e=!1;if(i!==null){if(n.validator!==null){let o=ml(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.validator);r.length!==o.length&&(e=!0,i.setValidators(r))}}if(n.asyncValidator!==null){let o=hl(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.asyncValidator);r.length!==o.length&&(e=!0,i.setAsyncValidators(r))}}}let t=()=>{};return ji(n._rawValidators,t),ji(n._rawAsyncValidators,t),e}function em(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&_l(i,n)})}function tm(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&_l(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function _l(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function nm(i,n){let e=(t,o)=>{n.valueAccessor.writeValue(t),o&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function vl(i,n){i==null,Rr(i,n)}function im(i,n){return zi(i,n)}function om(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function rm(i){return Object.getPrototypeOf(i.constructor)===Nu}function yl(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function am(i,n){if(!n)return null;Array.isArray(n);let e,t,o;return n.forEach(r=>{r.constructor===Hi?e=r:rm(r)?t=r:o=r}),o||t||e||null}function sm(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var lm={provide:vt,useExisting:Ve(()=>Fr)},jn=Promise.resolve(),Fr=(()=>{class i extends vt{callSetDisabledState;get submitted(){return Re(this.submittedReactive)}_submitted=_e(()=>this.submittedReactive());submittedReactive=q(!1);_directives=new Set;form;ngSubmit=new V;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new un({},Er(e),Sr(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){jn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),xr(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){jn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){jn.then(()=>{let t=this._findContainer(e.path),o=new un({});vl(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){jn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){jn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),yl(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Vi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(ce($n,10),ce(kr,10),ce(Ar,8))};static \u0275dir=D({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&E("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[re([lm]),W]})}return i})();function el(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function tl(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Fi=class extends dn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(Mr(e),Tr(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ui(e)&&(e.nonNullable||e.initialValueIsDefault)&&(tl(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Un(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){el(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){el(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){tl(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var cm=i=>i instanceof Fi;var xl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var Cr=class extends dn{constructor(n,e,t){super(Mr(e),Tr(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,t={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(n,e={}){let t=this._adjustIndex(n);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,t={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){bl(this,!1,n),n.forEach((t,o)=>{gl(this,!1,o),this.at(o).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((t,o)=>{this.at(o)&&this.at(o).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((t,o)=>{t.reset(n[o],K(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Un(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,t)=>{n(e,t)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var dm=(()=>{class i extends vt{callSetDisabledState;get submitted(){return Re(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=_e(()=>this._submittedReactive());_submittedReactive=q(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(zi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return xr(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Js(e.control||null,e,!1),sm(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,yl(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Vi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(Js(t||null,e),cm(o)&&(xr(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);vl(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&im(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Rr(this.form,this),this._oldForm&&zi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(ce($n,10),ce(kr,10),ce(Ar,8))};static \u0275dir=D({type:i,features:[W,Ee]})}return i})();var Cl=new _("");var um={provide:zt,useExisting:Ve(()=>Or)},Or=(()=>{class i extends zt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new V;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,o,r,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(o),this.valueAccessor=am(this,r)}ngOnChanges(e){this._added||this._setUpControl(),om(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Qu(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(ce(vt,13),ce($n,10),ce(kr,10),ce(xt,10),ce(Cl,8))};static \u0275dir=D({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[re([um]),W,Ee]})}return i})();var mm={provide:vt,useExisting:Ve(()=>Gn)},Gn=(()=>{class i extends dm{form=null;ngSubmit=new V;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275dir=D({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&E("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[re([mm]),W]})}return i})();var hm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({})}return i})();function nl(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Dl=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let o=this._reduceControls(e),r={};return nl(t)?r=t:t!==null&&(r.validators=t.validator,r.asyncValidators=t.asyncValidator),new un(o,r)}record(e,t=null){let o=this._reduceControls(e);return new yr(o,t)}control(e,t,o){let r={};return this.useNonNullable?(nl(t)?r=t:(r.validators=t,r.asyncValidators=o),new Fi(e,K(v({},r),{nonNullable:!0}))):new Fi(e,t,o)}array(e,t,o){let r=e.map(a=>this._createControl(a));return new Cr(r,t,o)}_reduceControls(e){let t={};return Object.keys(e).forEach(o=>{t[o]=this._createControl(e[o])}),t}_createControl(e){if(e instanceof Fi)return e;if(e instanceof dn)return e;if(Array.isArray(e)){let t=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,o,r)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var wl=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Cl,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ar,useValue:e.callSetDisabledState??Ir}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[hm]})}return i})();var pm=["editorContainer"];var Pr=new _("NGX_MONACO_EDITOR_CONFIG"),kl=!1,El,gm=(()=>{class i{constructor(){this.config=s(Pr),this.onInit=new V,this._insideNg=!1}set insideNg(e){this._insideNg=e,this._editor&&(this._editor.dispose(),this.initMonaco(this._options,this.insideNg))}get insideNg(){return this._insideNg}ngAfterViewInit(){kl?El.then(()=>{this.initMonaco(this._options,this.insideNg)}):(kl=!0,El=new Promise(e=>{let t=this.config.baseUrl;if((t==="assets"||!t)&&(t="./assets/monaco/min/vs"),typeof window.monaco=="object"){this.initMonaco(this._options,this.insideNg),e();return}let o=l=>{let c=l||window.require,d={paths:{vs:`${t}`}};Object.assign(d,this.config.requireConfig||{}),c.config(d),c(["vs/editor/editor.main"],()=>{typeof this.config.onMonacoLoad=="function"&&this.config.onMonacoLoad(),this.initMonaco(this._options,this.insideNg),e()})};if(this.config.monacoRequire)o(this.config.monacoRequire);else if(window.require)if(window.require.config)o();else{var r=`${t}/loader.js`,a=new XMLHttpRequest;a.addEventListener("load",()=>{let l=document.createElement("script");l.type="text/javascript",l.text=["var nodeRequire = require;",a.responseText.replace('"use strict";',""),"var monacoAmdRequire = require;","require = nodeRequire;","require.nodeRequire = require;"].join(`
`),document.body.appendChild(l),o(window.monacoAmdRequire)}),a.open("GET",r),a.send()}else{let l=document.createElement("script");l.type="text/javascript",l.src=`${t}/loader.js`,l.addEventListener("load",()=>{o()}),document.body.appendChild(l)}}))}ngOnDestroy(){this._windowResizeSubscription&&this._windowResizeSubscription.unsubscribe(),this._editor&&(this._editor.dispose(),this._editor=void 0)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=C({type:i,selectors:[["ng-component"]],viewQuery:function(t,o){if(t&1&&de(pm,7),t&2){let r;R(r=F())&&(o._editorContainer=r.first)}},inputs:{insideNg:"insideNg"},outputs:{onInit:"onInit"},standalone:!1,decls:0,vars:0,template:function(t,o){},encapsulation:2})}}return i})(),$i=(()=>{class i extends gm{constructor(){super(...arguments),this.zone=s(x),this._value="",this.propagateChange=e=>{},this.onTouched=()=>{}}set options(e){this._options=Object.assign({},this.config.defaultOptions,e),this._editor&&(this._editor.dispose(),this.initMonaco(this._options,this.insideNg))}get options(){return this._options}set model(e){this.options.model=e,this._editor&&(this._editor.dispose(),this.initMonaco(this.options,this.insideNg))}writeValue(e){this._value=e||"",setTimeout(()=>{this._editor&&!this.options.model&&this._editor.setValue(this._value)})}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.options.readOnly=e||this._options.readOnly}initMonaco(e,t){let o=!!e.model;if(o){let r=monaco.editor.getModel(e.model.uri||"");r?(e.model=r,e.model.setValue(this._value)):e.model=monaco.editor.createModel(e.model.value,e.model.language,e.model.uri)}t?this._editor=monaco.editor.create(this._editorContainer.nativeElement,e):this.zone.runOutsideAngular(()=>{this._editor=monaco.editor.create(this._editorContainer.nativeElement,e)}),o||this._editor.setValue(this._value),this._editor.onDidChangeModelContent(r=>{let a=this._editor.getValue();this.zone.run(()=>{this.propagateChange(a),this._value=a})}),this._editor.onDidBlurEditorWidget(()=>{this.onTouched()}),this._editor.setTheme=r=>{this.options.theme=r,monaco.editor.setTheme(r)},this._windowResizeSubscription&&this._windowResizeSubscription.unsubscribe(),this._windowResizeSubscription=$a(window,"resize").subscribe(()=>this._editor.layout()),this.onInit.emit(this._editor)}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})()}static{this.\u0275cmp=C({type:i,selectors:[["ngx-monaco-editor"]],inputs:{options:"options",model:"model"},features:[re([{provide:xt,useExisting:Ve(()=>i),multi:!0}]),W],decls:2,vars:0,consts:[["editorContainer",""],[1,"editor-container"]],template:function(t,o){t&1&&je(0,"div",1,0)},styles:["[_nghost-%COMP%]{display:block;height:200px}.editor-container[_ngcontent-%COMP%]{width:100%;height:98%}"],changeDetection:0})}}return i})();var Gi=(()=>{class i{static forRoot(e={}){return{ngModule:i,providers:[{provide:Pr,useValue:e}]}}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=I({type:i})}static{this.\u0275inj=A({imports:[wi]})}}return i})();function Sl(i={}){return Kt([{provide:Pr,useValue:i}])}var Tl={providers:[Ja(),Cs({eventCoalescing:!0}),qs(),Sl({baseUrl:"assets/vs",defaultOptions:{scrollBeyondLastLine:!1,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",lineNumbers:"on",renderLineHighlight:"line",padding:{top:12}}})]};function Wn(i){return i.buttons===0||i.detail===0}function Yn(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Nr;function Al(){if(Nr==null){let i=typeof document<"u"?document.head:null;Nr=!!(i&&(i.createShadowRoot||i.attachShadow))}return Nr}function Lr(i){if(Al()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Zn(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function Fe(i){return i.composedPath?i.composedPath()[0]:i.target}var Br;try{Br=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){Br=!1}var z=(()=>{class i{_platformId=s(Qt);isBrowser=this._platformId?Is(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Br)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qn;function Il(){if(qn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>qn=!0}))}finally{qn=qn||!1}return qn}function mn(i){return Il()?i:!!i.capture}function We(i,n=0){return Rl(i)?Number(i):arguments.length===2?n:0}function Rl(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Te(i){return i instanceof S?i.nativeElement:i}var Fl=new _("cdk-input-modality-detector-options"),Ol={ignoreKeys:[18,17,224,91,16]},Pl=650,Vr={passive:!0,capture:!0},Nl=(()=>{class i{_platform=s(z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Yo(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Fe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Pl||(this._modality.next(Wn(e)?"keyboard":"mouse"),this._mostRecentTarget=Fe(e))};_onTouchstart=e=>{if(Yn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Fe(e)};constructor(){let e=s(x),t=s(M),o=s(Fl,{optional:!0});if(this._options=v(v({},Ol),o),this.modalityDetected=this._modality.pipe(qt(1)),this.modalityChanged=this.modalityDetected.pipe(Xo()),this._platform.isBrowser){let r=s(De).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Vr),r.listen(t,"mousedown",this._onMousedown,Vr),r.listen(t,"touchstart",this._onTouchstart,Vr)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xn=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Xn||{}),Ll=new _("cdk-focus-monitor-default-options"),Wi=mn({passive:!0,capture:!0}),Ye=(()=>{class i{_ngZone=s(x);_platform=s(z);_inputModalityDetector=s(Nl);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(M);_stopInputModalityDetector=new y;constructor(){let e=s(Ll,{optional:!0});this._detectionMode=e?.detectionMode||Xn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Fe(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=Te(e);if(!this._platform.isBrowser||o.nodeType!==1)return xe();let r=Lr(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new y,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Te(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let r=Te(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Xn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Xn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Pl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),r=Fe(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Wi),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Wi)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ie(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Wi),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Wi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),jr=(()=>{class i{_elementRef=s(S);_focusMonitor=s(Ye);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new V;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return i})();var Yi=new WeakMap,ge=(()=>{class i{_appRef;_injector=s(L);_environmentInjector=s(ot);load(e){let t=this._appRef=this._appRef||this._injector.get(Nt),o=Yi.get(t);o||(o={loaders:new Set,refs:[]},Yi.set(t,o),t.onDestroy(()=>{Yi.get(t)?.refs.forEach(r=>r.destroy()),Yi.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(yi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Zi;function bm(){if(Zi===void 0&&(Zi=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Zi=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Zi}function Ht(i){return bm()?.createHTML(i)||i}function Bl(i,n,e){let t=e.sanitize(Se.HTML,n);i.innerHTML=Ht(t||"")}function hn(i){return Array.isArray(i)?i:[i]}var Vl=new Set,Ut,fn=(()=>{class i{_platform=s(z);_nonce=s(en,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):vm}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&_m(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _m(i,n){if(!Vl.has(i))try{Ut||(Ut=document.createElement("style"),n&&Ut.setAttribute("nonce",n),Ut.setAttribute("type","text/css"),document.head.appendChild(Ut)),Ut.sheet&&(Ut.sheet.insertRule(`@media ${i} {body{ }}`,0),Vl.add(i))}catch(e){console.error(e)}}function vm(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Kn=(()=>{class i{_mediaMatcher=s(fn);_zone=s(x);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return jl(hn(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=jl(hn(e)).map(a=>this._registerQuery(a).observable),r=Ha(o);return r=Ua(r.pipe(Je(1)),r.pipe(qt(1),dt(0))),r.pipe(ae(a=>{let l={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{l.matches=l.matches||c,l.breakpoints[d]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Be(a=>{let l=c=>this._zone.run(()=>a.next(c));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(Oe(t),ae(({matches:a})=>({query:e,matches:a})),ie(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function jl(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function ym(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var zl=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Hl=(()=>{class i{_mutationObserverFactory=s(zl);_observedElements=new Map;_ngZone=s(x);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Te(e);return new Be(o=>{let a=this._observeElement(t).pipe(ae(l=>l.filter(c=>!ym(c))),le(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{o.next(l)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new y,o=this._mutationObserverFactory.create(r=>t.next(r));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:o}=this._observedElements.get(e);t&&t.disconnect(),o.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ul=(()=>{class i{_contentObserver=s(Hl);_elementRef=s(S);event=new V;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=We(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(dt(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",O],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),Xi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({providers:[zl]})}return i})();var Ur=(()=>{class i{_platform=s(z);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Cm(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=xm(Am(e));if(t&&($l(t)===-1||!this.isVisible(t)))return!1;let o=e.nodeName.toLowerCase(),r=$l(e);return e.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Mm(e)?!1:o==="audio"?e.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Tm(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function xm(i){try{return i.frameElement}catch(n){return null}}function Cm(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Dm(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function wm(i){return Em(i)&&i.type=="hidden"}function km(i){return Sm(i)&&i.hasAttribute("href")}function Em(i){return i.nodeName.toLowerCase()=="input"}function Sm(i){return i.nodeName.toLowerCase()=="a"}function Yl(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function $l(i){if(!Yl(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Mm(i){let n=i.nodeName.toLowerCase(),e=n==="input"&&i.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function Tm(i){return wm(i)?!1:Dm(i)||km(i)||i.hasAttribute("contenteditable")||Yl(i)}function Am(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Hr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,t,o,r=!1,a){this._element=n,this._checker=e,this._ngZone=t,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(n),!!t}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=0;t<e.length;t++){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let t=e.length-1;t>=0;t--){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?be(n,{injector:this._injector}):setTimeout(n)}},$r=(()=>{class i{_checker=s(Ur);_ngZone=s(x);_document=s(M);_injector=s(L);constructor(){s(ge).load(qi)}create(e,t=!1){return new Hr(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Zl=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),ql=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Im=0,Gr=(()=>{class i{_ngZone=s(x);_defaultOptions=s(ql,{optional:!0});_liveElement;_document=s(M);_sanitizer=s(Ln);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Zl,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let o=this._defaultOptions,r,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Bl(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${Im++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ct=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Ct||{}),Gl="cdk-high-contrast-black-on-white",Wl="cdk-high-contrast-white-on-black",zr="cdk-high-contrast-active",Xl=(()=>{class i{_platform=s(z);_hasCheckedHighContrastMode=!1;_document=s(M);_breakpointSubscription;constructor(){this._breakpointSubscription=s(Kn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ct.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ct.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ct.BLACK_ON_WHITE}return Ct.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(zr,Gl,Wl),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===Ct.BLACK_ON_WHITE?e.add(zr,Gl):t===Ct.WHITE_ON_BLACK&&e.add(zr,Wl)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Qn=(()=>{class i{constructor(){s(Xl)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[Xi]})}return i})();var Rm=200,Ki=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Rm;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Xt(e=>this._pressedLetters.push(e)),dt(n),le(()=>this._pressedLetters.length>0),ae(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ue(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Qi=class{_items;_activeItemIndex=q(-1);_activeItem=q(null);_wrap=!1;_typeaheadSubscription=ye.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof En?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):rn(n)&&(this._effectRef=Pe(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ki(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||Ue(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+n*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return rn(this._items)?this._items():this._items instanceof En?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Jn=class extends Qi{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Wr={},te=class i{_appId=s(Pt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Wr.hasOwnProperty(n)||(Wr[n]=0),`${n}${e?i._infix+"-":""}${Wr[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};var nc=" ";function Fm(i,n,e){let t=eo(i,n);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(nc)))}function Om(i,n,e){let t=eo(i,n);e=e.trim();let o=t.filter(r=>r!==e);o.length?i.setAttribute(n,o.join(nc)):i.removeAttribute(n)}function eo(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var ic="cdk-describedby-message",Ji="cdk-describedby-host",Zr=0,oc=(()=>{class i{_platform=s(z);_document=s(M);_messageRegistry=new Map;_messagesContainer=null;_id=`${Zr++}`;constructor(){s(ge).load(qi),this._id=s(Pt)+"-"+Zr++}describe(e,t,o){if(!this._canBeDescribed(e,t))return;let r=Yr(t,o);typeof t!="string"?(tc(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,o),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,o){if(!t||!this._isElementNode(e))return;let r=Yr(t,o);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Ji}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Ji);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let o=this._document.createElement("div");tc(o,this._id),o.textContent=e,t&&o.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Yr(e,t),{messageElement:o,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(e),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(e){let t=eo(e,"aria-describedby").filter(o=>o.indexOf(ic)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let o=this._messageRegistry.get(t);Fm(e,"aria-describedby",o.messageElement.id),e.setAttribute(Ji,this._id),o.referenceCount++}_removeMessageReference(e,t){let o=this._messageRegistry.get(t);o.referenceCount--,Om(e,"aria-describedby",o.messageElement.id),e.removeAttribute(Ji)}_isElementDescribedByMessage(e,t){let o=eo(e,"aria-describedby"),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let o=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Yr(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function tc(i,n){i.id||(i.id=`${ic}-${n}-${Zr++}`)}var Ze=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(Ze||{}),to,$t;function no(){if($t==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return $t=!1,$t;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)$t=!0;else{let i=Element.prototype.scrollTo;i?$t=!/\{\s*\[native code\]\s*\}/.test(i.toString()):$t=!1}}return $t}function pn(){if(typeof document!="object"||!document)return Ze.NORMAL;if(to==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),to=Ze.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,to=i.scrollLeft===0?Ze.NEGATED:Ze.INVERTED),i.remove()}return to}function qr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var gn,rc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Xr(){if(gn)return gn;if(typeof document!="object"||!document)return gn=new Set(rc),gn;let i=document.createElement("input");return gn=new Set(rc.filter(n=>(i.setAttribute("type",n),i.type===n))),gn}var ac={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Pm=new _("MATERIAL_ANIMATIONS"),sc=null;function Nm(){return s(Pm,{optional:!0})?.animationsDisabled||s(Jt,{optional:!0})==="NoopAnimations"?"di-disabled":(sc??=s(fn).matchMedia("(prefers-reduced-motion)").matches,sc?"reduced-motion":"enabled")}function ee(){return Nm()!=="enabled"}function ue(i){return i==null?"":typeof i=="string"?i:`${i}px`}function at(i){return i!=null&&`${i}`!="false"}var $e=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})($e||{}),Kr=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=$e.HIDDEN;constructor(n,e,t,o=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},lc=mn({passive:!0,capture:!0}),Qr=class{_events=new Map;addHandler(n,e,t,o){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(o):r.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,lc)})}removeHandler(n,e,t){let o=this._events.get(n);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,lc)))}_delegateEventHandler=n=>{let e=Fe(n);e&&this._events.get(n.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(n))})}},ei={enterDuration:225,exitDuration:150},Lm=800,cc=mn({passive:!0,capture:!0}),dc=["mousedown","touchstart"],uc=["mouseup","mouseleave","touchend","touchcancel"],Bm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),ti=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Qr;constructor(n,e,t,o,r){this._target=n,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Te(t)),r&&r.get(ge).load(Bm)}fadeInRipple(n,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=v(v({},ei),t.animation);t.centered&&(n=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||Vm(n,e,o),l=n-o.left,c=e-o.top,d=r.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${l-a}px`,h.style.top=`${c-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,t.color!=null&&(h.style.backgroundColor=t.color),h.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(h);let b=window.getComputedStyle(h),N=b.transitionProperty,G=b.transitionDuration,j=N==="none"||G==="0s"||G==="0s, 0s"||o.width===0&&o.height===0,Z=new Kr(this,h,t,j);h.style.transform="scale3d(1, 1, 1)",Z.state=$e.FADING_IN,t.persistent||(this._mostRecentTransientRipple=Z);let H=null;return!j&&(d||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Q=()=>{H&&(H.fallbackTimer=null),clearTimeout(it),this._finishRippleTransition(Z)},Ae=()=>this._destroyRipple(Z),it=setTimeout(Ae,d+100);h.addEventListener("transitionend",Q),h.addEventListener("transitioncancel",Ae),H={onTransitionEnd:Q,onTransitionCancel:Ae,fallbackTimer:it}}),this._activeRipples.set(Z,H),(j||!d)&&this._finishRippleTransition(Z),Z}fadeOutRipple(n){if(n.state===$e.FADING_OUT||n.state===$e.HIDDEN)return;let e=n.element,t=v(v({},ei),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=$e.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Te(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,dc.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{uc.forEach(e=>{this._triggerElement.addEventListener(e,this,cc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===$e.FADING_IN?this._startFadeOutTransition(n):n.state===$e.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=$e.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=$e.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Wn(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Lm;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Yn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===$e.VISIBLE||n.config.terminateOnPointerUp&&n.state===$e.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(dc.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(uc.forEach(e=>n.removeEventListener(e,this,cc)),this._pointerUpEventsRegistered=!1))}};function Vm(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+o*o)}var io=new _("mat-ripple-global-options"),Gt=(()=>{class i{_elementRef=s(S);_animationsDisabled=ee();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(x),t=s(z),o=s(io,{optional:!0}),r=s(L);this._globalOptions=o||{},this._rippleRenderer=new ti(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,v(v({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&w("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var jm={capture:!0},zm=["focus","mousedown","mouseenter","touchstart"],Jr="mat-ripple-loader-uninitialized",ea="mat-ripple-loader-class-name",mc="mat-ripple-loader-centered",oo="mat-ripple-loader-disabled",hc=(()=>{class i{_document=s(M);_animationsDisabled=ee();_globalRippleOptions=s(io,{optional:!0});_platform=s(z);_ngZone=s(x);_injector=s(L);_eventCleanups;_hosts=new Map;constructor(){let e=s(De).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>zm.map(t=>e.listen(this._document,t,this._onInteraction,jm)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Jr,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(ea))&&e.setAttribute(ea,t.className||""),t.centered&&e.setAttribute(mc,""),t.disabled&&e.setAttribute(oo,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(oo,""):e.removeAttribute(oo)}_onInteraction=e=>{let t=Fe(e);if(t instanceof HTMLElement){let o=t.closest(`[${Jr}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(ea)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??ei.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??ei.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(oo),rippleConfig:{centered:e.hasAttribute(mc),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},c=new ti(l,this._ngZone,t,this._platform,this._injector),d=!l.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:d}),e.removeAttribute(Jr)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Dt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Hm=["mat-icon-button",""],Um=["*"],$m=new _("MAT_BUTTON_CONFIG");function fc(i){return i==null?void 0:gt(i)}var ta=(()=>{class i{_elementRef=s(S);_ngZone=s(x);_animationsDisabled=ee();_config=s($m,{optional:!0});_focusMonitor=s(Ye);_cleanupClick;_renderer=s(se);_rippleLoader=s(hc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(ge).load(Dt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(Y("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),ze(o.color?"mat-"+o.color:""),w("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",O],disabled:[2,"disabled","disabled",O],ariaDisabled:[2,"aria-disabled","ariaDisabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],tabIndex:[2,"tabIndex","tabIndex",fc],_tabindex:[2,"tabindex","_tabindex",fc]}})}return i})(),na=(()=>{class i extends ta{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[W],attrs:Hm,ngContentSelectors:Um,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(fe(),je(0,"span",0),X(1),je(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Gm=new _("cdk-dir-doc",{providedIn:"root",factory:()=>s(M)}),Wm=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function pc(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Wm.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var we=(()=>{class i{get value(){return this.valueSignal()}valueSignal=q("ltr");change=new V;constructor(){let e=s(Gm,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(pc(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ne=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({})}return i})();var ro=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[ne]})}return i})();var Ym=["matButton",""],Zm=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],qm=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var gc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),nt=(()=>{class i extends ta{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Xm(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?gc.get(this._appearance):null,r=gc.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[W],attrs:Ym,ngContentSelectors:qm,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(fe(Zm),je(0,"span",0),X(1),ft(2,"span",1),X(3,1),Lt(),X(4,2),je(5,"span",2)(6,"span",3)),t&2&&w("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Xm(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var qe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[ro,ne]})}return i})();var Km=20,Wt=(()=>{class i{_ngZone=s(x);_platform=s(z);_renderer=s(De).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Km){return this._platform.isBrowser?new Be(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(qo(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):xe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(le(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=Te(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),oi=(()=>{class i{elementRef=s(S);scrollDispatcher=s(Wt);ngZone=s(x);dir=s(we,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=s(se);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&pn()!=Ze.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),pn()==Ze.INVERTED?e.left=e.right:pn()==Ze.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;no()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:t:e=="end"&&(e=a?t:o),a&&pn()==Ze.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&pn()==Ze.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Qm=20,wt=(()=>{class i{_platform=s(z);_listeners;_viewportSize=null;_change=new y;_document=s(M);constructor(){let e=s(x),t=s(De).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:l}}change(e=Qm){return e>0?this._change.pipe(qo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ii=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({})}return i})(),ia=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[ne,ii,ne,ii]})}return i})();var ri=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Xe=class extends ri{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,o,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},Ke=class extends ri{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},oa=class extends ri{element;constructor(n){super(),this.element=n instanceof S?n.nativeElement:n}},kt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Xe)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Ke)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof oa)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ao=class extends kt{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(vi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=n.injector||this._defaultInjector||L.NULL,r=o.get(ot,t.injector);e=yi(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},bc=(()=>{class i extends Ke{constructor(){let e=s(Ne),t=s(Ge);super(e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[W]})}return i})(),Qe=(()=>{class i extends kt{_moduleRef=s(vi,{optional:!0});_document=s(M);_viewContainerRef=s(Ge);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new V;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[W]})}return i})(),Et=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({})}return i})();var _c=no();function _n(i){return new so(i.get(wt),i.get(M))}var so=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ue(-this._previousScrollPosition.left),n.style.top=ue(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),_c&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),_c&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function kc(i,n){return new lo(i.get(Wt),i.get(x),i.get(wt),n)}var lo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ai=class{enable(){}disable(){}attach(){}};function ra(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return t||o||r||a})}function vc(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return t||o||r||a})}function fo(i,n){return new co(i.get(Wt),i.get(wt),i.get(x),n)}var co=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();ra(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ec=(()=>{class i{_injector=s(L);constructor(){}noop=()=>new ai;close=e=>kc(this._injector,e);block=()=>_n(this._injector);reposition=e=>fo(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),St=class{positionStrategy;scrollStrategy=new ai;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var uo=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Sc=(()=>{class i{_attachedOverlays=[];_document=s(M);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mc=(()=>{class i extends Sc{_ngZone=s(x);_renderer=s(De).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Tc=(()=>{class i extends Sc{_platform=s(z);_ngZone=s(x);_renderer=s(De).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Fe(e)};_clickListener=e=>{let t=Fe(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(yc(l.overlayElement,t)||yc(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function yc(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Ac=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),po=(()=>{class i{_platform=s(z);_containerElement;_document=s(M);_styleLoader=s(ge);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||qr()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),qr()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Ac)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),aa=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function sa(i){return i&&i.nodeType===1}var bn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=ye.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(n,e,t,o,r,a,l,c,d,h=!1,b,N){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=h,this._injector=b,this._renderer=N,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=be(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=v(v({},this._config),n),this._updateElementSize()}setDirection(n){this._config=K(v({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ue(this._config.width),n.height=ue(this._config.height),n.minWidth=ue(this._config.minWidth),n.minHeight=ue(this._config.minHeight),n.maxWidth=ue(this._config.maxWidth),n.maxHeight=ue(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;sa(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new aa(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let o=hn(e||[]).filter(r=>!!r);o.length&&(t?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=be(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},xc="cdk-overlay-connected-position-bounding-box",eh=/([A-Za-z%]+)$/;function go(i,n){return new mo(n,i.get(wt),i.get(M),i.get(z),i.get(po))}var mo=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=ye.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(xc),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let l of this._preferredPositions){let c=this._getOriginPoint(n,o,l),d=this._getOverlayPoint(c,e,l),h=this._getOverlayFit(d,e,t,l);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(h,d,t)){r.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!a||a.overlayFit.visibleArea<h.visibleArea)&&(a={overlayFit:h,overlayPoint:d,originPoint:c,position:l,overlayRect:e})}if(r.length){let l=null,c=-1;for(let d of r){let h=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);h>c&&(c=h,l=d)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Yt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(xc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof S?this._origin.nativeElement:sa(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let o;if(t.originX=="center")o=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=t.originX=="start"?a:l}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=n.top+n.height/2:r=t.originY=="top"?n.top:n.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(n,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,e,t,o){let r=Dc(e),{x:a,y:l}=n,c=this._getOffset(o,"x"),d=this._getOffset(o,"y");c&&(a+=c),d&&(l+=d);let h=0-a,b=a+r.width-t.width,N=0-l,G=l+r.height-t.height,j=this._subtractOverflows(r.width,h,b),Z=this._subtractOverflows(r.height,N,G),H=j*Z;return{visibleArea:H,isCompletelyWithinViewport:r.width*r.height===H,fitsInViewportVertically:Z===r.height,fitsInViewportHorizontally:j==r.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=Cc(this._overlayRef.getConfig().minHeight),l=Cc(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=o,d=n.fitsInViewportHorizontally||l!=null&&l<=r;return c&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Dc(e),r=this._viewportRect,a=Math.max(n.x+o.width-r.width,0),l=Math.max(n.y+o.height-r.height,0),c=Math.max(r.top-t.top-n.y,0),d=Math.max(r.left-t.left-n.x,0),h=0,b=0;return o.width<=r.width?h=d||-a:h=n.x<this._getViewportMarginStart()?r.left-t.left-n.x:0,o.height<=r.height?b=c||-l:b=n.y<this._getViewportMarginTop()?r.top-t.top-n.y:0,this._previousPushAmount={x:h,y:b},{x:n.x+h,y:n.y+b}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!th(this._lastScrollVisibility,t)){let o=new uo(n,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),r,a,l;if(e.overlayY==="top")a=n.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let G=Math.min(t.bottom-n.y+t.top,n.y),j=this._lastBoundingBoxSize.height;r=G*2,a=n.y-G,r>j&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-j/2)}let c=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,d=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,h,b,N;if(d)N=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=n.x-this._getViewportMarginStart();else if(c)b=n.x,h=t.right-n.x-this._getViewportMarginEnd();else{let G=Math.min(t.right-n.x+t.left,n.x),j=this._lastBoundingBoxSize.width;h=G*2,b=n.x-G,h>j&&!this._isInitialRender&&!this._growAfterOpen&&(b=n.x-j/2)}return{top:a,left:b,bottom:l,right:N,width:h,height:r}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=ue(t.width),o.height=ue(t.height),o.top=ue(t.top)||"auto",o.bottom=ue(t.bottom)||"auto",o.left=ue(t.left)||"auto",o.right=ue(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=ue(r)),a&&(o.maxWidth=ue(a))}this._lastBoundingBoxSize=t,Yt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Yt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Yt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let h=this._viewportRuler.getViewportScrollPosition();Yt(t,this._getExactOverlayY(e,n,h)),Yt(t,this._getExactOverlayX(e,n,h))}else t.position="static";let l="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),d&&(l+=`translateY(${d}px)`),t.transform=l.trim(),a.maxHeight&&(o?t.maxHeight=ue(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=ue(a.maxWidth):r&&(t.maxWidth="")),Yt(this._pane.style,t)}_getExactOverlayY(n,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=ue(r.y);return o}_getExactOverlayX(n,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(r.x+this._overlayRect.width)}px`}else o.left=ue(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:vc(n,t),isOriginOutsideView:ra(n,t),isOverlayClipped:vc(e,t),isOverlayOutsideView:ra(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&hn(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof S)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Yt(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Cc(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(eh);return!e||e==="px"?parseFloat(n):null}return i||null}function Dc(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function th(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var wc="cdk-global-overlay-wrapper";function Mt(i){return new ho}var ho=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(wc),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:l}=t,c=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),h=this._xPosition,b=this._xOffset,N=this._overlayRef.getConfig().direction==="rtl",G="",j="",Z="";c?Z="flex-start":h==="center"?(Z="center",N?j=b:G=b):N?h==="left"||h==="end"?(Z="flex-end",G=b):(h==="right"||h==="start")&&(Z="flex-start",j=b):h==="left"||h==="start"?(Z="flex-start",G=b):(h==="right"||h==="end")&&(Z="flex-end",j=b),n.position=this._cssPosition,n.marginLeft=c?"0":G,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":j,e.justifyContent=Z,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(wc),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Ic=(()=>{class i{_injector=s(L);constructor(){}global(){return Mt()}flexibleConnectedTo(e){return go(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rc=new _("OVERLAY_DEFAULT_CONFIG");function Tt(i,n){i.get(ge).load(Ac);let e=i.get(po),t=i.get(M),o=i.get(te),r=i.get(Nt),a=i.get(we),l=i.get(se,null,{optional:!0})||i.get(De).createRenderer(null,null),c=new St(n),d=i.get(Rc,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=n?.usePopover??d:c.usePopover=!1;let h=t.createElement("div"),b=t.createElement("div");h.id=o.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),b.appendChild(h),c.usePopover&&(b.setAttribute("popover","manual"),b.classList.add("cdk-overlay-popover"));let N=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return sa(N)?N.after(b):N?.type==="parent"?N.element.appendChild(b):e.getContainerElement().appendChild(b),new bn(new ao(h,r,i),b,h,c,i.get(x),i.get(Mc),t,i.get(Di),i.get(Tc),n?.disableAnimations??i.get(Jt,null,{optional:!0})==="NoopAnimations",i.get(ot),l)}var Fc=(()=>{class i{scrollStrategies=s(Ec);_positionBuilder=s(Ic);_injector=s(L);constructor(){}create(e){return Tt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var At=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({providers:[Fc],imports:[ne,Et,ia,ia]})}return i})();function nh(i,n){}var It=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var ca=(()=>{class i extends kt{_elementRef=s(S);_focusTrapFactory=s($r);_config;_interactivityChecker=s(Ur);_ngZone=s(x);_focusMonitor=s(Ye);_renderer=s(se);_changeDetectorRef=s(pe);_injector=s(L);_platform=s(z);_document=s(M);_portalOutlet;_focusTrapped=new y;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(It,{optional:!0})||new It,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(e){this._isDestroyed||be(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let o=Zn(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Zn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Zn()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,o){if(t&1&&de(Qe,7),t&2){let r;R(r=F())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,o){t&2&&Y("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[W],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&Le(0,nh,0,0,"ng-template",0)},dependencies:[Qe],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),si=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Ue(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(n),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},ih=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=s(L);return()=>_n(i)}}),oh=new _("DialogData"),rh=new _("DefaultDialogConfig");function ah(i){let n=q(i),e=new V;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var da=(()=>{class i{_injector=s(L);_defaultOptions=s(rh,{optional:!0});_parentDialog=s(i,{optional:!0,skipSelf:!0});_overlayContainer=s(po);_idGenerator=s(te);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;_ariaHiddenElements=new Map;_scrollStrategy=s(ih);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=fi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Oe(void 0)));constructor(){}open(e,t){let o=this._defaultOptions||new It;t=v(v({},o),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),a=Tt(this._injector,r),l=new si(a,t),c=this._attachContainer(a,l,t);if(l.containerInstance=c,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Je(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){la(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){la(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),la(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new St({positionStrategy:e.positionStrategy||Mt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:It,useValue:o},{provide:si,useValue:t},{provide:bn,useValue:e}],l;o.container?typeof o.container=="function"?l=o.container:(l=o.container.type,a.push(...o.container.providers(o))):l=ca;let c=new Xe(l,o.viewContainerRef,L.create({parent:r||this._injector,providers:a}));return e.attach(c).instance}_attachDialogContent(e,t,o,r){if(e instanceof Ne){let a=this._createInjector(r,t,o,void 0),l={$implicit:r.data,dialogRef:t};r.templateContext&&(l=v(v({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Ke(e,null,l,a))}else{let a=this._createInjector(r,t,o,this._injector),l=o.attachComponentPortal(new Xe(e,r.viewContainerRef,a));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,o,r){let a=e.injector||e.viewContainerRef?.injector,l=[{provide:oh,useValue:e.data},{provide:si,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,o)):l.push(...e.providers)),e.direction&&(!a||!a.get(we,null,{optional:!0}))&&l.push({provide:we,useValue:ah(e.direction)}),L.create({parent:a||r,providers:l})}_removeOpenDialog(e,t){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){let r=t[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function la(i,n){let e=i.length;for(;e--;)n(i[e])}var Oc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({providers:[da],imports:[At,Et,Qn,Et]})}return i})();function sh(i,n){}var vo=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},ua="mdc-dialog--open",Pc="mdc-dialog--opening",Nc="mdc-dialog--closing",lh=150,ch=75,dh=(()=>{class i extends ca{_animationStateChanged=new V;_animationsEnabled=!ee();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Bc(this._config.enterAnimationDuration)??lh:0;_exitAnimationDuration=this._animationsEnabled?Bc(this._config.exitAnimationDuration)??ch:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Lc,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Pc,ua)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ua),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ua),this._animationsEnabled?(this._hostElement.style.setProperty(Lc,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Nc)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Pc,Nc)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,o){t&2&&(et("id",o._config.id),Y("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),w("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[W],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(m(0,"div",0)(1,"div",1),Le(2,sh,0,0,"ng-template",2),u()())},dependencies:[Qe],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Lc="--mat-dialog-transition-duration";function Bc(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?We(i.substring(0,i.length-2)):i.endsWith("s")?We(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var _o=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(_o||{}),Rt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Zo(1);_beforeClosed=new Zo(1);_result;_closeFallbackTimeout;_state=_o.OPEN;_closeInteractionType;constructor(n,e,t){this._ref=n,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(le(o=>o.state==="opened"),Je(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(le(o=>o.state==="closed"),Je(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ct(this.backdropClick(),this.keydownEvents().pipe(le(o=>o.keyCode===27&&!this.disableClose&&!Ue(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),uh(this,o.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(le(t=>t.state==="closing"),Je(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=_o.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=_o.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function uh(i,n,e){return i._closeInteractionType=n,i.close(e)}var ma=new _("MatMdcDialogData"),mh=new _("mat-mdc-dialog-default-options"),hh=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(L);return()=>_n(i)}}),vn=(()=>{class i{_defaultOptions=s(mh,{optional:!0});_scrollStrategy=s(hh);_parentDialog=s(i,{optional:!0,skipSelf:!0});_idGenerator=s(te);_injector=s(L);_dialog=s(da);_animationsDisabled=ee();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;dialogConfigClass=vo;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=fi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Oe(void 0)));constructor(){this._dialogRefConstructor=Rt,this._dialogContainerType=dh,this._dialogDataToken=ma}open(e,t){let o;t=v(v({},this._defaultOptions||new vo),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,K(v({},t),{positionStrategy:Mt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:It,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(a,l,c)=>(o=new this._dialogRefConstructor(a,t,c),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Vc=(()=>{class i{_dialogRef=s(Rt,{optional:!0});_elementRef=s(S);_dialog=s(vn);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=fh(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i})}return i})(),yo=(()=>{class i extends Vc{id=s(te).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275dir=D({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,o){t&2&&et("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[W]})}return i})(),xo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[fs([oi])]})}return i})(),Co=(()=>{class i extends Vc{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275dir=D({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,o){t&2&&w("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[W]})}return i})();function fh(i,n){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(t=>t.id===e.id):null}var Do=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({providers:[vn],imports:[Oc,At,Et,ne]})}return i})();var wo=class i{dialogRef=s(Rt);close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-help-modal"]],decls:82,vars:0,consts:[["mat-dialog-title",""],[1,"help-content"],[1,"steps"],[1,"tip"],[1,"tip-label"],[1,"beta-warning"],[1,"beta-label"],["align","end"],["mat-flat-button","",3,"click"]],template:function(e,t){e&1&&(m(0,"h2",0),f(1,"How to Use"),u(),m(2,"mat-dialog-content",1)(3,"ol",2)(4,"li")(5,"strong"),f(6,"Paste or type JSON"),u(),f(7," into the left editor pane. "),u(),m(8,"li")(9,"strong"),f(10,"Beautify"),u(),f(11," formats the JSON. Use the "),m(12,"code"),f(13,"2"),u(),f(14," / "),m(15,"code"),f(16,"4"),u(),f(17," indent toggle to control spacing \u2014 switching reruns Beautify automatically. "),u(),m(18,"li")(19,"strong"),f(20,"Submit"),u(),f(21," opens the configuration modal. Set a root type name, configure any null fields (required before generating), and expand "),m(22,"em"),f(23,"Advanced Options"),u(),f(24," to override types or mark fields nullable / optional. Use "),m(25,"code"),f(26,"null"),u(),f(27," when a value can be null; use "),m(28,"code"),f(29,"opt"),u(),f(30," when a key may be absent entirely. "),u(),m(31,"li")(32,"strong"),f(33,"Generate"),u(),f(34," produces typed output. Switch between the "),m(35,"em"),f(36,"TypeScript"),u(),f(37,", "),m(38,"em"),f(39,"Pydantic"),u(),f(40,", and "),m(41,"em"),f(42,"JS Object"),u(),f(43," tabs on the right to see each format. "),u(),m(44,"li")(45,"strong"),f(46,"Copy"),u(),f(47," copies the current tab's output to the clipboard. "),u(),m(48,"li")(49,"strong"),f(50,"Clear"),u(),f(51," (visible after the first Submit) empties the editor and resets all output. "),u(),m(52,"li")(53,"strong"),f(54,"Reopening Submit"),u(),f(55," restores your previous root type name, field types, and optional flags so you only need to change what differs. "),u()(),m(56,"div",3)(57,"span",4),f(58,"Tip"),u(),f(59," Null fields in your JSON must have at least one type selected before Generate is enabled. Use the "),m(60,"em"),f(61,"null"),u(),f(62," button to mark a field's value as nullable ("),m(63,"code"),f(64,"T | null"),u(),f(65,"), and the "),m(66,"em"),f(67,"opt"),u(),f(68," button to mark the key itself as optional ("),m(69,"code"),f(70,"key?"),u(),f(71," / "),m(72,"code"),f(73,"Optional[T]"),u(),f(74,"). Both can be active at once. "),u()(),m(75,"div",5)(76,"span",6),f(77,"Beta"),u(),f(78,` TypeCast is currently in beta. You may encounter bugs or incomplete features \u2014 feedback is appreciated.
`),u(),m(79,"mat-dialog-actions",7)(80,"button",8),E("click",function(){return t.close()}),f(81,"Got it"),u()())},dependencies:[qe,nt,Do,yo,Co,xo],styles:[".help-content[_ngcontent-%COMP%]{padding-top:4px}.steps[_ngcontent-%COMP%]{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:12px;color:#e2e8f0;font-size:14px;line-height:1.6}.steps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#e2e8f0}.steps[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:JetBrains Mono,Fira Code,monospace;font-size:12px;background:#1e2535;border:1px solid #2d3548;border-radius:3px;padding:1px 5px;color:#7c6af7}.steps[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#718096;font-style:normal}.tip[_ngcontent-%COMP%]{margin-top:20px;padding:12px 14px;background:#1e2535;border:1px solid #2d3548;border-left:3px solid #7c6af7;border-radius:4px;font-size:13px;color:#718096;line-height:1.6}.tip-label[_ngcontent-%COMP%]{display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:#7c6af7;margin-right:6px}.beta-warning[_ngcontent-%COMP%]{margin:16px 24px 0;padding:10px 14px;background:#fc818114;border:1px solid rgba(252,129,129,.25);border-left:3px solid #fc8181;border-radius:4px;font-size:13px;color:#718096;line-height:1.6}.beta-label[_ngcontent-%COMP%]{display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:#fc8181;margin-right:6px}"]})};var ko=class i{dialog=s(vn);openHelp(){this.dialog.open(wo,{panelClass:"utility-modal",width:"600px",maxWidth:"95vw"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-header"]],decls:8,vars:0,consts:[[1,"header-inner"],[1,"logo"],[1,"logo-type"],[1,"logo-cast"],["mat-stroked-button","",1,"help-btn",3,"click"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1)(2,"span",2),f(3,"Type"),u(),m(4,"span",3),f(5,"Cast"),u()(),m(6,"button",4),E("click",function(){return t.openHelp()}),f(7,"?"),u()())},dependencies:[qe,nt],styles:["[_nghost-%COMP%]{display:block;background-color:#161b27;border-bottom:1px solid #2d3548}.header-inner[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 20px;height:48px}.logo[_ngcontent-%COMP%]{font-size:20px;font-weight:700;letter-spacing:-.02em;line-height:1}.logo-type[_ngcontent-%COMP%]{font-style:italic;color:#e2e8f0}.logo-cast[_ngcontent-%COMP%]{color:#7c6af7}.help-btn[_ngcontent-%COMP%]{min-width:0;width:32px;height:32px;padding:0;border-radius:50%!important;font-size:15px;font-weight:600;line-height:1;color:#718096}.help-btn[_ngcontent-%COMP%]:hover{color:#e2e8f0}"]})};var li=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(n=!1,e,t=!0,o){this._multiple=n,this._emitChanges=t,this.compareWith=o,e&&e.length&&(n?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(r=>this._getConcreteValue(r)));n.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var zc=(()=>{class i{_animationsDisabled=ee();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&w("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var ph=["button"],gh=["*"];function bh(i,n){if(i&1&&(m(0,"div",2),J(1,"mat-pseudo-checkbox",6),u()),i&2){let e=T();g(),P("disabled",e.disabled)}}var Hc=new _("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Uc=new _("MatButtonToggleGroup"),_h={provide:xt,useExisting:Ve(()=>pa),multi:!0},Eo=class{source;value;constructor(n,e){this.source=n,this.value=e}},pa=(()=>{class i{_changeDetector=s(pe);_dir=s(we,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(te).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new V;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new V;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(Hc,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new li(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||Ue(e))return;let o=e.target.id,r=this._buttonToggles.toArray().findIndex(l=>l.buttonId===o),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(r)||null;break;case 38:a=this._getNextButton(r,-1);break;case 37:a=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(r,1);break;case 39:a=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let t=new Eo(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,o=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,o)):this._updateModelValue(e,o)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let o=this._buttonToggles;for(let r=1;r<=o.length;r++){let a=(e+t*r+o.length)%o.length,l=o.get(a);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(o=>this._selectValue(o,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(o=>o.tabIndex===-1)){for(let o of t)if(!o.disabled){o.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let o of t)if(o.value===e){o.checked=!0,this._selectionModel.select(o),this.multiple||(o.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,o,r){if(t&1&&pt(r,So,5),t&2){let a;R(a=F())&&(o._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,o){t&1&&E("keydown",function(a){return o._keydown(a)}),t&2&&(Y("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),w("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",O],value:"value",multiple:[2,"multiple","multiple",O],disabled:[2,"disabled","disabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",O],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",O]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[re([_h,{provide:Uc,useExisting:i}])]})}return i})(),So=(()=>{class i{_changeDetectorRef=s(pe);_elementRef=s(S);_focusMonitor=s(Ye);_idGenerator=s(te);_animationDisabled=ee();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new V;constructor(){s(ge).load(Dt);let e=s(Uc,{optional:!0}),t=s(new Bt("tabindex"),{optional:!0})||"",o=s(Hc,{optional:!0});this._tabIndex=q(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=o&&o.appearance?o.appearance:"standard",this._disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Eo(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,o){if(t&1&&de(ph,5),t&2){let r;R(r=F())&&(o._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,o){t&1&&E("focus",function(){return o.focus()}),t&2&&(Y("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),w("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",O],appearance:"appearance",checked:[2,"checked","checked",O],disabled:[2,"disabled","disabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:gh,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,o){if(t&1&&(fe(),m(0,"button",1,0),E("click",function(){return o._onButtonClick()}),U(2,bh,2,1,"div",2),m(3,"span",3),X(4),u()(),J(5,"span",4)(6,"span",5)),t&2){let r=tt(1);P("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),Y("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),g(2),$(o.buttonToggleGroup&&(!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator||o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),g(4),P("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[Gt,zc],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),Mo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[ro,So,ne]})}return i})();function yh(i,n){if(i&1){let e=Ie();m(0,"div",1)(1,"button",2),E("click",function(){me(e);let o=T();return he(o.action())}),f(2),u()()}if(i&2){let e=T();g(2),Sn(" ",e.data.action," ")}}var xh=["label"];function Ch(i,n){}var Dh=Math.pow(2,31)-1,ci=class{_overlayRef;instance;containerInstance;_afterDismissed=new y;_afterOpened=new y;_onAction=new y;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Dh))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},$c=new _("MatSnackBarData"),xn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},wh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),kh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),Eh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Sh=(()=>{class i{snackBarRef=s(ci);data=s($c);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,o){t&1&&(m(0,"div",0),f(1),u(),U(2,yh,3,1,"div",1)),t&2&&(g(),Sn(" ",o.data.message,`
`),g(),$(o.hasAction?2:-1))},dependencies:[nt,wh,kh,Eh],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ga="_mat-snack-bar-enter",ba="_mat-snack-bar-exit",Mh=(()=>{class i extends kt{_ngZone=s(x);_elementRef=s(S);_changeDetectorRef=s(pe);_platform=s(z);_animationsDisabled=ee();snackBarConfig=s(xn);_document=s(M);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(L);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new y;_onExit=new y;_onEnter=new y;_animationState="void";_live;_label;_role;_liveElementId=s(te).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===ba?this._completeExit():e===ga&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?be(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ga)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ga)},200)))}exit(){return this._destroyed?xe(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?be(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ba)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(ba),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(a=>e.classList.add(a)):e.classList.add(t)),this._exposeToModals();let o=this._label.nativeElement,r="mdc-snackbar__label";o.classList.toggle(r,!o.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],a=r.getAttribute("aria-owns");this._trackedModals.add(r),a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let o=t.replace(this._liveElementId,"").trim();o.length>0?e.setAttribute("aria-owns",o):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),o=e.querySelector("[aria-live]");if(t&&o){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),o.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,o){if(t&1&&de(Qe,7)(xh,7),t&2){let r;R(r=F())&&(o._portalOutlet=r.first),R(r=F())&&(o._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,o){t&1&&E("animationend",function(a){return o.onAnimationEnd(a.animationName)})("animationcancel",function(a){return o.onAnimationEnd(a.animationName)}),t&2&&w("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[W],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),Le(4,Ch,0,0,"ng-template",4),u(),J(5,"div"),u()()),t&2&&(g(5),Y("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[Qe],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),Th=new _("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new xn}),To=(()=>{class i{_live=s(Gr);_injector=s(L);_breakpointObserver=s(Kn);_parentSnackBar=s(i,{optional:!0,skipSelf:!0});_defaultConfig=s(Th);_animationsDisabled=ee();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Sh;snackBarContainerComponent=Mh;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",o){let r=v(v({},this._defaultConfig),o);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=L.create({parent:o||this._injector,providers:[{provide:xn,useValue:t}]}),a=new Xe(this.snackBarContainerComponent,t.viewContainerRef,r),l=e.attach(a);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let o=v(v(v({},new xn),this._defaultConfig),t),r=this._createOverlay(o),a=this._attachSnackBarContainer(r,o),l=new ci(a,r);if(e instanceof Ne){let c=new Ke(e,null,{$implicit:o.data,snackBarRef:l});l.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(o,l),d=new Xe(e,void 0,c),h=a.attachComponentPortal(d);l.instance=h.instance}return this._breakpointObserver.observe(ac.HandsetPortrait).pipe(ie(r.detachments())).subscribe(c=>{r.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),o.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(l,o),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new St;t.direction=e.direction;let o=Mt(this._injector),r=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,l=!a&&e.horizontalPosition!=="center";return a?o.left("0"):l?o.right("0"):o.centerHorizontally(),e.verticalPosition==="top"?o.top("0"):o.bottom("0"),t.positionStrategy=o,t.disableAnimations=this._animationsDisabled,Tt(this._injector,t)}_createInjector(e,t){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector;return L.create({parent:o||this._injector,providers:[{provide:ci,useValue:t},{provide:$c,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ah=["tooltip"],Ih=20;var Rh=new _("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(L);return()=>fo(i,{scrollThrottle:Ih})}}),Fh=new _("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Gc="tooltip-panel",Oh={passive:!0},Ph=8,Nh=8,Lh=24,Bh=200,_a=(()=>{class i{_elementRef=s(S);_ngZone=s(x);_platform=s(z);_ariaDescriber=s(oc);_focusMonitor=s(Ye);_dir=s(we);_injector=s(L);_viewContainerRef=s(Ge);_mediaMatcher=s(fn);_document=s(M);_renderer=s(se);_animationsDisabled=ee();_defaultOptions=s(Fh,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Wc;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=at(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=at(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=We(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=We(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ph}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ie(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new Xe(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(ie(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof S)return this._overlayRef;this._detach()}let t=this._injector.get(Wt).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Gc}`,r=go(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(ie(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Tt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(Rh)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ie(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ie(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ie(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ie(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(v(v({},o.main),r.main)),this._addOffset(v(v({},o.fallback),r.fallback))])}_addOffset(e){let t=Nh,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),be(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${Gc}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Oh))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||be({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ue(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&w("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Wc=(()=>{class i{_changeDetectorRef=s(pe);_elementRef=s(S);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ee();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Lh&&e.width>=Bh}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&de(Ah,7),t&2){let r;R(r=F())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&E("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(ft(0,"div",1,0),bs("animationend",function(a){return o._handleAnimationEnd(a)}),ft(2,"div",2),f(3),Lt()()),t&2&&(ze(o.tooltipClass),w("mdc-tooltip--multiline",o._isMultiline),g(3),Me(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Yc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[Qn,At,ne,ii]})}return i})();var Zc={children:"child",people:"person",men:"man",women:"woman",feet:"foot",teeth:"tooth",mice:"mouse",geese:"goose",data:"datum",criteria:"criterion",media:"medium"},jh=new Set(["status","series","species","news","information","equipment","metadata","means","crossroads"]);function zh(i){let n=i.toLowerCase();return jh.has(n)?n:Zc[n]?Zc[n]:n.endsWith("ies")&&n.length>3?n.slice(0,-3)+"y":n.endsWith("sses")||n.endsWith("xes")||n.endsWith("ches")||n.endsWith("shes")||n.endsWith("ses")&&n.length>4?n.slice(0,-2):n.endsWith("ves")&&n.length>4?n.slice(0,-3)+"f":n.endsWith("s")&&!n.endsWith("ss")&&n.length>2?n.slice(0,-1):n}function va(i){return i&&i.replace(/([A-Z])/g," $1").split(/[\s\-_]+/).filter(Boolean).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join("")}function Ao(i){let n=i.replace(/([A-Z])/g," $1").split(/[\s\-_]+/).filter(Boolean);return n.length===0?va(i):(n[n.length-1]=zh(n[n.length-1]),n.map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))}function di(i,n,e){return i===null?st(n,"null","null"):typeof i=="boolean"?st(n,"boolean","primitive",{primitiveType:"boolean"}):typeof i=="number"?st(n,"number","primitive",{primitiveType:Number.isInteger(i)?"integer":"float"}):typeof i=="string"?st(n,"string","primitive",{primitiveType:"string"}):Array.isArray(i)?Hh(i,n,e):typeof i=="object"?td(i,n,e):st(n,"unknown","unknown")}function qc(i){let n=[];return ya(i,n,""),n}function Xc(i){let n={};return xa(i,n,""),n}function ya(i,n,e){let t=e&&i.key?`${e}.${i.key}`:i.key||e;i.kind==="null"&&i.key&&n.push(t);for(let o of i.children)ya(o,n,t);i.kind==="array"&&i.itemType&&Kc(i.itemType,n,t)}function Kc(i,n,e){if(i.kind==="null"){n.push(e);return}for(let t of i.children)ya(t,n,e);i.itemType&&Kc(i.itemType,n,e)}function xa(i,n,e){let t=e&&i.key?`${e}.${i.key}`:i.key||e,o=i.inferredOptional??!1,r=i.inferredNullable??!1;switch(i.kind){case"primitive":i.key&&(n[t]={types:i.primitiveType?[i.primitiveType]:[],inferredOptional:o,inferredNullable:r});break;case"null":i.key&&(n[t]={types:[],inferredOptional:o,inferredNullable:r});break;case"union":{let a=i.unionMembers?.includes("null")??!1;i.key&&(n[t]={types:Jc(i.unionMembers??[]),inferredOptional:o,inferredNullable:r||a});break}case"unknown":i.key&&(n[t]={types:[],inferredOptional:o,inferredNullable:r});break;case"object":for(let a of i.children)xa(a,n,t);break;case"array":i.itemType&&Qc(i.itemType,n,t);break}}function Qc(i,n,e){let t=i.inferredOptional??!1,o=i.inferredNullable??!1;switch(i.kind){case"primitive":n[e]={types:i.primitiveType?[i.primitiveType]:[],inferredOptional:t,inferredNullable:o};break;case"null":n[e]={types:[],inferredOptional:t,inferredNullable:o};break;case"union":n[e]={types:Jc(i.unionMembers??[]),inferredOptional:t,inferredNullable:o};break;case"unknown":n[e]={types:[],inferredOptional:t,inferredNullable:o};break;case"object":for(let r of i.children)xa(r,n,e);break;case"array":i.itemType&&Qc(i.itemType,n,e);break}}function Jc(i){return i.filter(n=>n!=="null").map(ed).filter(n=>n!==null)}function ed(i){switch(i){case"integer":return"integer";case"float":case"number":return"float";case"string":return"string";case"boolean":return"boolean";case"datetime":return"datetime";default:return null}}function td(i,n,e){let t=Object.entries(i).map(([o,r])=>di(r,o,va(o)));return{key:n,typeName:e,kind:"object",children:t,itemType:null}}function Hh(i,n,e){let t=Ao(n)||e;if(i.length===0)return{key:n,typeName:`${t}[]`,kind:"array",children:[],itemType:st(n,"unknown","unknown")};let o=[...new Set(i.map($h))];if(o.length===1&&o[0]==="object"){let c=Uh(i,n,t);return{key:n,typeName:`${c.typeName}[]`,kind:"array",children:[],itemType:c}}if(o.length===1){let c=Wh(i,o[0]),d=di(c,n,t);return{key:n,typeName:`${d.typeName}[]`,kind:"array",children:[],itemType:d}}let r=[...new Set(i.map(Gh))],a=r.join(" | "),l={key:n,typeName:a,kind:"union",children:[],itemType:null,unionMembers:r};return{key:n,typeName:`(${a})[]`,kind:"array",children:[],itemType:l}}function Uh(i,n,e){let t=i.map(o=>td(o,n,e));return nd(t,n,e)}function nd(i,n,e){let t=i.length,o=new Map;for(let a of i)for(let l of a.children)o.has(l.key)||o.set(l.key,[]),o.get(l.key).push(l);let r=[...o.entries()].map(([a,l])=>{let c=id(l,a);return l.length<t&&(c.inferredOptional=!0),c});return{key:n,typeName:e,kind:"object",children:r,itemType:null}}function id(i,n){if(i.length===1)return i[0];let e=i.filter(b=>b.kind==="null"),t=i.filter(b=>b.kind!=="null");if(t.length===0)return st(n,"null","null");let o=e.length>0,r=new Set,a=[],l=[],c=!1;for(let b of t)if(b.kind==="primitive"&&b.primitiveType)r.add(b.primitiveType);else if(b.kind==="object")a.push(b);else if(b.kind==="array")l.push(b);else if(b.kind==="union")for(let N of b.unionMembers??[]){let G=ed(N);G&&r.add(G)}else c=!0;if(a.length===t.length){let b=nd(a,n,a[0].typeName);return o&&(b.inferredNullable=!0),b}if(l.length===t.length){let b=l.map(j=>j.itemType).filter(j=>j!==null);if(b.length===0){let j={key:n,typeName:"unknown[]",kind:"array",children:[],itemType:st(n,"unknown","unknown")};return o&&(j.inferredNullable=!0),j}let N=b.length===1?b[0]:id(b,n),G={key:n,typeName:`${N.typeName}[]`,kind:"array",children:[],itemType:N};return o&&(G.inferredNullable=!0),G}r.has("integer")&&r.has("float")&&r.delete("integer");let d=[...r];if(c&&d.push("unknown"),d.length===1&&r.size===1){let b=[...r][0],N=st(n,b,"primitive",{primitiveType:b});return o&&(N.inferredNullable=!0),N}let h={key:n,typeName:d.join(" | "),kind:"union",children:[],itemType:null,unionMembers:d};return o&&(h.inferredNullable=!0),h}function st(i,n,e,t){return v({key:i,typeName:n,kind:e,children:[],itemType:null},t)}function $h(i){return i===null?"null":Array.isArray(i)?"array":typeof i}function Gh(i){return i===null?"null":Array.isArray(i)?"unknown[]":typeof i=="object"?"object":typeof i}function Wh(i,n){return n==="number"?i.find(e=>!Number.isInteger(e))??i[0]:i[0]}var Io=class i{generate(n,e){try{return`const ${e.rootTypeName.charAt(0).toLowerCase()+e.rootTypeName.slice(1)} = ${Ca(n,0)};`}catch(t){return`// Generation error: ${t instanceof Error?t.message:String(t)}`}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ca(i,n){return i===null?"null":typeof i=="boolean"||typeof i=="number"?String(i):typeof i=="string"?`'${i.replace(/\\/g,"\\\\").replace(/'/g,"\\'")}'`:Array.isArray(i)?Zh(i,n):typeof i=="object"?Yh(i,n):"undefined"}function Yh(i,n){let e=Object.keys(i);if(e.length===0)return"{}";let t="  ".repeat(n+1),o="  ".repeat(n);return`{
${e.map(a=>`${t}${qh(a)}: ${Ca(i[a],n+1)}`).join(`,
`)}
${o}}`}function Zh(i,n){if(i.length===0)return"[]";let e="  ".repeat(n+1),t="  ".repeat(n);return`[
${i.map(r=>`${e}${Ca(r,n+1)}`).join(`,
`)}
${t}]`}function qh(i){return/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(i)?i:`'${i}'`}var Ro=class i{generate(n,e){try{let t=[],o=new Set,r=new Set,a={needed:!1},l=e.rootTypeName;if(n.kind==="array"){let{itemType:c}=n;if(c?.kind==="object"){let d=Da(Jh(l),l);this.collectClasses(K(v({},c),{typeName:d}),e,t,o,r,a,"",l),r.add("List"),t.push(`${l} = List[${d}]`)}else{let d=c?this.typeStr(c,e,"",r,a,l):"Any";c||r.add("Any"),r.add("List"),t.push(`${l} = List[${d}]`)}}else n.kind==="object"?this.collectClasses(K(v({},n),{typeName:l}),e,t,o,r,a,"",l):t.push(`${l} = ${this.typeStr(n,e,"",r,a,l)}`);return Xh(t,r,a.needed,e)}catch(t){return`# Generation error: ${t instanceof Error?t.message:String(t)}`}}collectClasses(n,e,t,o,r,a,l,c){if(n.kind==="object"){if(o.has(n.typeName))return;o.add(n.typeName);for(let d of n.children){let h=l?`${l}.${d.key}`:d.key,b=d.kind==="object"?K(v({},d),{typeName:Da(d.typeName,c)}):d;this.collectClasses(b,e,t,o,r,a,h,c)}t.push(this.buildClass(n,e,r,a,l,c))}else n.kind==="array"&&n.itemType&&this.collectClasses(n.itemType,e,t,o,r,a,l,c)}buildClass(n,e,t,o,r,a){let l=n.children.map(d=>{let h=r?`${r}.${d.key}`:d.key,b=e.fieldMap[h],N=b?.optional??!1,G=b?.nullable??!1,j;d.kind==="null"&&!b?.types.length?(t.add("Any"),j="Any",N=!0):j=this.typeStr(d,e,h,t,o,a);let Z,H="";return N?(t.add("Optional"),Z=`Optional[${j}]`,H=" = None"):G?Z=`${j} | None`:Z=j,`    ${ef(d.key)}: ${Z}${H}`}),c=[];return e.strictMode&&c.push("    model_config = ConfigDict(strict=True)"),c.push(...l),c.length===0&&c.push("    pass"),`class ${n.typeName}(BaseModel):
${c.join(`
`)}`}typeStr(n,e,t,o,r,a){if(n.kind!=="object"&&n.kind!=="array"){let l=e.fieldMap[t];if(l?.types.length){let c=Kh(l,o,r);return n.kind==="union"&&(n.unionMembers?.includes("null")??!1)?(o.add("Optional"),`Optional[${c}]`):c}}switch(n.kind){case"primitive":return od(n.primitiveType,r);case"null":return o.add("Any"),"Any";case"object":return Da(n.typeName,a);case"array":return o.add("List"),n.itemType?`List[${this.typeStr(n.itemType,e,t,o,r,a)}]`:(o.add("Any"),"List[Any]");case"union":{let l=(n.unionMembers??[]).map(h=>Qh(h,o,r)),c=l.includes("None"),d=l.filter(h=>h!=="None");return c?(o.add("Optional"),d.length===1?`Optional[${d[0]}]`:(o.add("Union"),`Optional[Union[${d.join(", ")}]]`)):(o.add("Union"),`Union[${l.join(", ")}]`)}case"unknown":return o.add("Any"),"Any"}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};function Xh(i,n,e,t){let o=["Optional","List","Union","Any"].filter(l=>n.has(l)),r=t.strictMode?["BaseModel","ConfigDict"]:["BaseModel"],a=[];return e&&a.push("from datetime import datetime"),o.length>0&&a.push(`from typing import ${o.join(", ")}`),a.push(`from pydantic import ${r.join(", ")}`),a.join(`
`)+`


`+i.join(`


`)}function od(i,n){switch(i){case"integer":return"int";case"float":return"float";case"boolean":return"bool";case"string":return"str";case"datetime":return n.needed=!0,"datetime";default:return"Any"}}function Kh(i,n,e){let t=[...new Set(i.types.map(o=>od(o,e)))];return t.length===1?t[0]:(n.add("Union"),`Union[${t.join(", ")}]`)}function Qh(i,n,e){switch(i){case"null":return"None";case"string":return"str";case"boolean":return"bool";case"integer":return"int";case"float":case"number":return"float";case"datetime":return e.needed=!0,"datetime";default:return n.add("Any"),"Any"}}function Da(i,n){return i===n?`${i}Item`:i}function Jh(i){let n=i.toLowerCase(),e=n;n.endsWith("ies")?e=n.slice(0,-3)+"y":n.endsWith("ses")||n.endsWith("xes")||n.endsWith("ches")||n.endsWith("shes")?e=n.slice(0,-2):n.endsWith("s")&&!n.endsWith("ss")&&n.length>2&&(e=n.slice(0,-1));let t=e.charAt(0).toUpperCase()+e.slice(1);return t!==i?t:`${i}Item`}function ef(i){let n=i.replace(/-/g,"_").replace(/[^\w]/g,"_");return/^\d/.test(n)?`_${n}`:n||"_field"}var Fo=class i{generate(n,e){try{let t=[],o=new Set,r=e.rootTypeName;if(n.kind==="array"){let{itemType:a}=n;if(a?.kind==="object"){let l=wa(tf(r),r);this.collectInterfaces(K(v({},a),{typeName:l}),e,t,o,"",r),t.push(`export type ${r} = ${l}[];`)}else{let l=a?this.typeStr(a,e,"",r):"unknown",c=a?.kind==="union"?`(${l})`:l;t.push(`export type ${r} = ${c}[];`)}}else n.kind==="object"?this.collectInterfaces(K(v({},n),{typeName:r}),e,t,o,"",r):t.push(`export type ${r} = ${this.typeStr(n,e,"",r)};`);return t.join(`

`)}catch(t){return`// Generation error: ${t instanceof Error?t.message:String(t)}`}}collectInterfaces(n,e,t,o,r,a){if(n.kind==="object"){if(o.has(n.typeName))return;o.add(n.typeName),t.push(this.buildInterface(n,e,r,a));for(let l of n.children){let c=r?`${r}.${l.key}`:l.key,d=l.kind==="object"?K(v({},l),{typeName:wa(l.typeName,a)}):l;this.collectInterfaces(d,e,t,o,c,a)}}else n.kind==="array"&&n.itemType&&this.collectInterfaces(n.itemType,e,t,o,r,a)}buildInterface(n,e,t,o){let r=n.children.map(a=>{let l=t?`${t}.${a.key}`:a.key,c=e.fieldMap[l],d=c?.optional??!1,h=c?.nullable??!1,b=of(a.key)+(d?"?":""),N=this.typeStr(a,e,l,o),G=h?`${N} | null`:N;return`  ${b}: ${G};`}).join(`
`);return`export interface ${n.typeName} {
${r}
}`}typeStr(n,e,t,o){if(n.kind!=="object"&&n.kind!=="array"){let r=e.fieldMap[t];if(r?.types.length){let a=nf(r);return n.kind==="union"&&(n.unionMembers?.includes("null")??!1)?`${a} | null`:a}}switch(n.kind){case"primitive":return ka(n.primitiveType);case"null":return"unknown";case"object":return wa(n.typeName,o);case"array":{if(!n.itemType)return"unknown[]";let r=this.typeStr(n.itemType,e,t,o);return n.itemType.kind==="union"?`(${r})[]`:`${r}[]`}case"union":{let r=(n.unionMembers??[]).map(a=>a==="null"?"null":ka(a));return[...new Set(r)].join(" | ")}case"unknown":return"unknown"}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};function tf(i){let n=Ao(i);return n!==i?n:`${i}Item`}function wa(i,n){return i===n?`${i}Item`:i}function ka(i){switch(i){case"integer":case"float":case"number":return"number";case"boolean":return"boolean";case"string":case"datetime":return"string";default:return"unknown"}}function nf(i){return[...new Set(i.types.map(ka))].join(" | ")}function of(i){return/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(i)?i:`"${i}"`}var Cn=class i{rawJson=q("");generationConfig=q(null);activeTab=q("typescript");outputCache=q({typescript:null,pydantic:null,jsObject:null});parseResult=_e(()=>{let n=this.rawJson().trim();if(!n)return{ok:!1,error:"No input."};try{return{ok:!0,value:JSON.parse(n)}}catch(e){return{ok:!1,error:e instanceof SyntaxError?e.message:String(e)}}});isValid=_e(()=>this.parseResult().ok);errorMsg=_e(()=>{let n=this.parseResult();return n.ok?null:n.error??null});schemaTreePreview=_e(()=>{let n=this.parseResult();return n.ok?di(n.value,"","Root"):null});schemaTree=_e(()=>{let n=this.parseResult(),e=this.generationConfig();return!n.ok||!e?null:di(n.value,"",e.rootTypeName)});tsGenerator=s(Fo);pyGenerator=s(Ro);jsGenerator=s(Io);constructor(){Pe(()=>{let n=this.activeTab(),e=this.schemaTree(),t=this.generationConfig();if(!e||!t||Re(()=>this.outputCache())[n]!==null)return;let r=Re(()=>this.parseResult().value),a=this.generate(n,e,r,t);this.outputCache.update(l=>K(v({},l),{[n]:a}))})}applyConfig(n){this.outputCache.set({typescript:null,pydantic:null,jsObject:null}),this.generationConfig.set(n)}clearAll(){this.rawJson.set(""),this.generationConfig.set(null),this.outputCache.set({typescript:null,pydantic:null,jsObject:null})}generate(n,e,t,o){switch(n){case"typescript":return this.tsGenerator.generate(e,o);case"pydantic":return this.pyGenerator.generate(e,o);case"jsObject":return this.jsGenerator.generate(t,o)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};function Oo(i){i.editor.defineTheme("utilityDark",{base:"vs-dark",inherit:!0,rules:[{token:"keyword",foreground:"7c6af7"},{token:"string",foreground:"80cfa9"},{token:"string.value.json",foreground:"80cfa9"},{token:"string.key.json",foreground:"63b3ed"},{token:"number",foreground:"e8a97e"},{token:"comment",foreground:"4a5568",fontStyle:"italic"},{token:"type",foreground:"63b3ed"},{token:"variable",foreground:"e2e8f0"}],colors:{"editor.background":"#0f1117","editor.foreground":"#e2e8f0","editor.lineHighlightBackground":"#1a1f2e","editor.selectionBackground":"#2d3548","editorGutter.background":"#0f1117","editorCursor.foreground":"#7c6af7","editorLineNumber.foreground":"#4a5568","editorLineNumber.activeForeground":"#718096","editorIndentGuide.background1":"#2d3548","editorBracketMatch.background":"#2d354880","editorBracketMatch.border":"#7c6af7","scrollbar.shadow":"#00000000","scrollbarSlider.background":"#2d354880","scrollbarSlider.hoverBackground":"#2d3548"}})}var rf=["mat-internal-form-field",""],af=["*"],rd=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,o){t&2&&w("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:rf,ngContentSelectors:af,decls:1,vars:0,template:function(t,o){t&1&&(fe(),X(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var sf=["input"],lf=["label"],cf=["*"],Ea={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},df=new _("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ea}),ke=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(ke||{}),Sa=class{source;checked},Ma=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(pe);_ngZone=s(x);_animationsDisabled=ee();_options=s(df,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Sa;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new V;indeterminateChange=new V;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ke.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(ge).load(Dt);let e=s(new Bt("tabindex"),{optional:!0});this._options=this._options||Ea,this.color=this._options.color||Ea.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(te).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ke.Indeterminate):this._transitionCheckState(this.checked?ke.Checked:ke.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=q(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,o=this._getAnimationTargetElement();if(!(t===e||!o)&&(this._currentAnimationClass&&o.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){o.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{o.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ke.Checked:ke.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case ke.Init:if(t===ke.Checked)return this._animationClasses.uncheckedToChecked;if(t==ke.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ke.Unchecked:return t===ke.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ke.Checked:return t===ke.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ke.Indeterminate:return t===ke.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,o){if(t&1&&de(sf,5)(lf,5),t&2){let r;R(r=F())&&(o._inputElement=r.first),R(r=F())&&(o._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,o){t&2&&(et("id",o.id),Y("tabindex",null)("aria-label",null)("aria-labelledby",null),ze(o.color?"mat-"+o.color:"mat-accent"),w("_mat-animation-noopable",o._animationsDisabled)("mdc-checkbox--disabled",o.disabled)("mat-mdc-checkbox-disabled",o.disabled)("mat-mdc-checkbox-checked",o.checked)("mat-mdc-checkbox-disabled-interactive",o.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",O],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",O],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:gt(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],checked:[2,"checked","checked",O],disabled:[2,"disabled","disabled",O],indeterminate:[2,"indeterminate","indeterminate",O]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[re([{provide:xt,useExisting:Ve(()=>i),multi:!0},{provide:$n,useExisting:i,multi:!0}]),Ee],ngContentSelectors:cf,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,o){if(t&1&&(fe(),m(0,"div",3),E("click",function(a){return o._preventBubblingFromLabel(a)}),m(1,"div",4,0)(3,"div",5),E("click",function(){return o._onTouchTargetClick()}),u(),m(4,"input",6,1),E("blur",function(){return o._onBlur()})("click",function(){return o._onInputClick()})("change",function(a){return o._onInteractionEvent(a)}),u(),J(6,"div",7),m(7,"div",8),Ka(),m(8,"svg",9),J(9,"path",10),u(),Qa(),J(10,"div",11),u(),J(11,"div",12),u(),m(12,"label",13,2),X(14),u()()),t&2){let r=tt(2);P("labelPosition",o.labelPosition),g(4),w("mdc-checkbox--selected",o.checked),P("checked",o.checked)("indeterminate",o.indeterminate)("disabled",o.disabled&&!o.disabledInteractive)("id",o.inputId)("required",o.required)("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex),Y("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-checked",o.indeterminate?"mixed":null)("aria-controls",o.ariaControls)("aria-disabled",o.disabled&&o.disabledInteractive?!0:null)("aria-expanded",o.ariaExpanded)("aria-owns",o.ariaOwns)("name",o.name)("value",o.value),g(7),P("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),g(),P("for",o.inputId)}},dependencies:[Gt,rd],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),ad=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[Ma,ne]})}return i})();var Ta=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Be(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(le(e=>e.some(t=>t.target===n)),Qo({bufferSize:1,refCount:!0}),ie(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Po=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(x);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Ta(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var mf=["notch"],hf=["matFormFieldNotchedOutline",""],ff=["*"],sd=["iconPrefixContainer"],ld=["textPrefixContainer"],cd=["iconSuffixContainer"],dd=["textSuffixContainer"],pf=["textField"],gf=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],bf=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function _f(i,n){i&1&&J(0,"span",21)}function vf(i,n){if(i&1&&(m(0,"label",20),X(1,1),U(2,_f,1,0,"span",21),u()),i&2){let e=T(2);P("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Y("for",e._control.disableAutomaticLabeling?null:e._control.id),g(2),$(!e.hideRequiredMarker&&e._control.required?2:-1)}}function yf(i,n){if(i&1&&U(0,vf,3,5,"label",20),i&2){let e=T();$(e._hasFloatingLabel()?0:-1)}}function xf(i,n){i&1&&J(0,"div",7)}function Cf(i,n){}function Df(i,n){if(i&1&&Le(0,Cf,0,0,"ng-template",13),i&2){T(2);let e=tt(1);P("ngTemplateOutlet",e)}}function wf(i,n){if(i&1&&(m(0,"div",9),U(1,Df,1,1,null,13),u()),i&2){let e=T();P("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),g(),$(e._forceDisplayInfixLabel()?-1:1)}}function kf(i,n){i&1&&(m(0,"div",10,2),X(2,2),u())}function Ef(i,n){i&1&&(m(0,"div",11,3),X(2,3),u())}function Sf(i,n){}function Mf(i,n){if(i&1&&Le(0,Sf,0,0,"ng-template",13),i&2){T();let e=tt(1);P("ngTemplateOutlet",e)}}function Tf(i,n){i&1&&(m(0,"div",14,4),X(2,4),u())}function Af(i,n){i&1&&(m(0,"div",15,5),X(2,5),u())}function If(i,n){i&1&&J(0,"div",16)}function Rf(i,n){i&1&&(m(0,"div",18),X(1,6),u())}function Ff(i,n){if(i&1&&(m(0,"mat-hint",22),f(1),u()),i&2){let e=T(2);P("id",e._hintLabelId),g(),Me(e.hintLabel)}}function Of(i,n){if(i&1&&(m(0,"div",19),U(1,Ff,2,2,"mat-hint",22),X(2,7),J(3,"div",23),X(4,8),u()),i&2){let e=T();g(),$(e.hintLabel?1:-1)}}var ui=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["mat-label"]]})}return i})(),bd=new _("MatError"),Ia=(()=>{class i{id=s(te).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,o){t&2&&et("id",o.id)},inputs:{id:"id"},features:[re([{provide:bd,useExisting:i}])]})}return i})(),Aa=(()=>{class i{align="start";id=s(te).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(et("id",o.id),Y("align",null),w("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Pf=new _("MatPrefix");var Nf=new _("MatSuffix");var _d=new _("FloatingLabelParent"),ud=(()=>{class i{_elementRef=s(S);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Po);_ngZone=s(x);_parent=s(_d);_resizeSubscription=new ye;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Lf(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&w("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Lf(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var md="mdc-line-ripple--active",No="mdc-line-ripple--deactivating",hd=(()=>{class i{_elementRef=s(S);_cleanupTransitionEnd;constructor(){let e=s(x),t=s(se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(No),e.add(md)}deactivate(){this._elementRef.nativeElement.classList.add(No)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(No);e.propertyName==="opacity"&&o&&t.remove(md,No)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),fd=(()=>{class i{_elementRef=s(S);_ngZone=s(x);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&de(mf,5),t&2){let r;R(r=F())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&w("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:hf,ngContentSelectors:ff,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(fe(),je(0,"div",1),ft(1,"div",2,0),X(3),Lt(),je(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Ra=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i})}return i})();var Fa=new _("MatFormField"),Bf=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),pd="fill",Vf="auto",gd="fixed",jf="translateY(-50%)",Lo=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(pe);_platform=s(z);_idGenerator=s(te);_ngZone=s(x);_defaults=s(Bf,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Mn("iconPrefixContainer");_textPrefixContainerSignal=Mn("textPrefixContainer");_iconSuffixContainerSignal=Mn("iconSuffixContainer");_textSuffixContainerSignal=Mn("textSuffixContainer");_prefixSuffixContainers=_e(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=xs(ui);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=at(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Vf}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||pd;this._appearanceSignal.set(t)}_appearanceSignal=q(pd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||gd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||gd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ee();constructor(){let e=this._defaults,t=s(we);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Pe(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=_e(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Oe([void 0,void 0]),ae(()=>[t.errorState,t.userAriaDescribedBy]),Ko(),le(([[r,a],[l,c]])=>r!==l||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ie(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ct(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ws({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=_e(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",b=`${a+l}px`,G=`calc(${h} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,j=`var(--mat-mdc-form-field-label-transform, ${jf} translateX(${G}))`,Z=a+l+c+d;return[j,Z]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(_s(r,o._labelChild,ui,5),pt(r,Ra,5)(r,Pf,5)(r,Nf,5)(r,bd,5)(r,Aa,5)),t&2){er();let a;R(a=F())&&(o._formFieldControl=a.first),R(a=F())&&(o._prefixChildren=a),R(a=F())&&(o._suffixChildren=a),R(a=F())&&(o._errorChildren=a),R(a=F())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(vs(o._iconPrefixContainerSignal,sd,5)(o._textPrefixContainerSignal,ld,5)(o._iconSuffixContainerSignal,cd,5)(o._textSuffixContainerSignal,dd,5),de(pf,5)(sd,5)(ld,5)(cd,5)(dd,5)(ud,5)(fd,5)(hd,5)),t&2){er(4);let r;R(r=F())&&(o._textField=r.first),R(r=F())&&(o._iconPrefixContainer=r.first),R(r=F())&&(o._textPrefixContainer=r.first),R(r=F())&&(o._iconSuffixContainer=r.first),R(r=F())&&(o._textSuffixContainer=r.first),R(r=F())&&(o._floatingLabel=r.first),R(r=F())&&(o._notchedOutline=r.first),R(r=F())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&w("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[re([{provide:Fa,useExisting:i},{provide:_d,useExisting:i}])],ngContentSelectors:bf,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(fe(gf),Le(0,yf,1,1,"ng-template",null,0,ys),m(2,"div",6,1),E("click",function(a){return o._control.onContainerClick(a)}),U(4,xf,1,0,"div",7),m(5,"div",8),U(6,wf,2,2,"div",9),U(7,kf,3,0,"div",10),U(8,Ef,3,0,"div",11),m(9,"div",12),U(10,Mf,1,1,null,13),X(11),u(),U(12,Tf,3,0,"div",14),U(13,Af,3,0,"div",15),u(),U(14,If,1,0,"div",16),u(),m(15,"div",17),U(16,Rf,2,0,"div",18)(17,Of,5,1,"div",19),u()),t&2){let r;g(2),w("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),g(2),$(!o._hasOutline()&&!o._control.disabled?4:-1),g(2),$(o._hasOutline()?6:-1),g(),$(o._hasIconPrefix?7:-1),g(),$(o._hasTextPrefix?8:-1),g(2),$(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),g(2),$(o._hasTextSuffix?12:-1),g(),$(o._hasIconSuffix?13:-1),g(),$(o._hasOutline()?-1:14),g(),w("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();g(),$((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[ud,fd,or,hd,Aa],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var mi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[Xi,Lo,ne]})}return i})();var Hf=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Uf={passive:!0},vd=(()=>{class i{_platform=s(z);_ngZone=s(x);_renderer=s(De).createRenderer(null,null);_styleLoader=s(ge);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return hi;this._styleLoader.load(Hf);let t=Te(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new y,a="cdk-text-field-autofilled",l=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Uf)));return this._monitoredElements.set(t,{subject:r,unlisten:c}),r}stopMonitoring(e){let t=Te(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var yd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({})}return i})();var xd=new _("MAT_INPUT_VALUE_ACCESSOR");var Cd=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Bo=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,o,r){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==n&&(this.errorState=r,this._stateChanges.next())}};var $f=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Gf=new _("MAT_INPUT_CONFIG"),Dd=(()=>{class i{_elementRef=s(S);_platform=s(z);ngControl=s(zt,{optional:!0,self:!0});_autofillMonitor=s(vd);_ngZone=s(x);_formField=s(Fa,{optional:!0});_renderer=s(se);_uid=s(te).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Gf,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=at(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Oi.required)??!1}set required(e){this._required=at(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Xr().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=at(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Xr().has(e));constructor(){let e=s(Fr,{optional:!0}),t=s(Gn,{optional:!0}),o=s(Cd),r=s(xd,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?rn(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Bo(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Pe(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){$f.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&E("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(et("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),Y("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),w("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},exportAs:["matInput"],features:[re([{provide:Ra,useExisting:i}]),Ee]})}return i})(),wd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[mi,mi,yd,ne]})}return i})();function Yf(i,n){i&1&&(m(0,"mat-error"),f(1,"Type name is required"),u())}function Zf(i,n){if(i&1){let e=Ie();m(0,"button",22),E("click",function(){let o=me(e).$implicit,r=T().$implicit,a=T(2);return he(a.toggleType(r,o))}),f(1),u()}if(i&2){let e=n.$implicit,t=T().$implicit,o=T(2);w("active",o.isTypeSelected(t,e)),g(),Me(o.TYPE_LABELS[e])}}function qf(i,n){if(i&1){let e=Ie();m(0,"div",17)(1,"span",18),f(2),u(),m(3,"div",19),mt(4,Zf,2,3,"button",20,ut),u(),m(6,"button",21),E("click",function(){let o=me(e).$implicit,r=T(2);return he(r.toggleNullable(o))}),f(7,"null"),u(),m(8,"button",21),E("click",function(){let o=me(e).$implicit,r=T(2);return he(r.toggleOptional(o))}),f(9,"opt"),u()()}if(i&2){let e=n.$implicit,t=T(2);w("unresolved",!t.isResolved(e)),g(),P("title",e),g(),Me(e),g(2),ht(t.FIELD_TYPES),g(2),w("active",t.isNullable(e)),g(2),w("active",t.isOptional(e))}}function Xf(i,n){if(i&1&&(m(0,"div",6)(1,"div",13)(2,"span",14),f(3,"Null Fields"),u(),m(4,"span",15),f(5,"Pick at least one type per field"),u()(),mt(6,qf,10,8,"div",16,ut),u()),i&2){let e=T();g(6),ht(e.nullFields)}}function Kf(i,n){if(i&1&&(m(0,"span",9),f(1),u()),i&2){let e=T();g(),Sn("(",e.advancedFields.length,")")}}function Qf(i,n){i&1&&(m(0,"p",23),f(1,"No additional leaf fields to configure."),u())}function Jf(i,n){if(i&1){let e=Ie();m(0,"button",22),E("click",function(){let o=me(e).$implicit,r=T().$implicit,a=T(3);return he(a.toggleType(r,o))}),f(1),u()}if(i&2){let e=n.$implicit,t=T().$implicit,o=T(3);w("active",o.isTypeSelected(t,e)),g(),Me(o.TYPE_LABELS[e])}}function ep(i,n){if(i&1){let e=Ie();m(0,"div",17)(1,"span",18),f(2),u(),m(3,"div",19),mt(4,Jf,2,3,"button",20,ut),u(),m(6,"button",21),E("click",function(){let o=me(e).$implicit,r=T(3);return he(r.toggleNullable(o))}),f(7,"null"),u(),m(8,"button",21),E("click",function(){let o=me(e).$implicit,r=T(3);return he(r.toggleOptional(o))}),f(9,"opt"),u()()}if(i&2){let e=n.$implicit,t=T(3);g(),P("title",e),g(),Me(e),g(2),ht(t.FIELD_TYPES),g(2),w("active",t.isNullable(e)),g(2),w("active",t.isOptional(e))}}function tp(i,n){if(i&1&&mt(0,ep,10,6,"div",17,ut),i&2){let e=T(2);ht(e.advancedFields)}}function np(i,n){if(i&1&&(m(0,"div",6),U(1,Qf,2,0,"p",23)(2,tp,2,0),u()),i&2){let e=T();g(),$(e.advancedFields.length===0?1:2)}}var Vo=class i{fb=s(Dl);data=s(ma);dialogRef=s(Rt);form=this.fb.group({rootTypeName:[this.data.previousRootTypeName??"Root",ip]});advancedOpen=!1;strictMode=this.data.previousStrictMode??!1;FIELD_TYPES=["integer","string","float","boolean","datetime"];TYPE_LABELS={integer:"int",string:"str",float:"flt",boolean:"bool",datetime:"dt"};nullFields;advancedFields;fieldTypesMap={};fieldNullableMap={};fieldOptionalMap={};constructor(){let n=this.data.allLeafFields??{},e=this.data.previousFieldMap??{},t=new Set(this.data.nullFields??[]);this.nullFields=[...t];for(let o of this.nullFields)this.fieldTypesMap[o]=e[o]?.types??[],this.fieldNullableMap[o]=e[o]?.nullable??!0,this.fieldOptionalMap[o]=e[o]?.optional??n[o]?.inferredOptional??!1;this.advancedFields=Object.keys(n).filter(o=>!t.has(o));for(let o of this.advancedFields){let r=n[o];this.fieldTypesMap[o]=e[o]?.types??[...r?.types??[]],this.fieldNullableMap[o]=e[o]?.nullable??r?.inferredNullable??!1,this.fieldOptionalMap[o]=e[o]?.optional??r?.inferredOptional??!1}}toggleType(n,e){let t=this.fieldTypesMap[n]??[],o=t.indexOf(e);this.fieldTypesMap[n]=o>=0?t.filter(r=>r!==e):[...t,e]}isTypeSelected(n,e){return(this.fieldTypesMap[n]??[]).includes(e)}toggleNullable(n){this.fieldNullableMap[n]=!(this.fieldNullableMap[n]??!1)}isNullable(n){return this.fieldNullableMap[n]??!1}toggleOptional(n){this.fieldOptionalMap[n]=!(this.fieldOptionalMap[n]??!1)}isOptional(n){return this.fieldOptionalMap[n]??!1}isResolved(n){return(this.fieldTypesMap[n]??[]).length>0}get allNullFieldsResolved(){return this.nullFields.every(n=>this.isResolved(n))}get canGenerate(){return this.form.valid&&this.allNullFieldsResolved}confirm(){if(!this.canGenerate){this.form.markAllAsTouched();return}let n=this.form.getRawValue(),e={};for(let o of[...this.nullFields,...this.advancedFields]){let r=this.fieldTypesMap[o]??[],a=this.fieldNullableMap[o]??!1,l=this.fieldOptionalMap[o]??!1;(r.length>0||a||l)&&(e[o]={types:r,nullable:a,optional:l})}let t={rootTypeName:n.rootTypeName.trim(),strictMode:this.strictMode,fieldMap:e};this.dialogRef.close(t)}dismiss(){this.dialogRef.close(void 0)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-submit-modal"]],decls:24,vars:9,consts:[["mat-dialog-title",""],[1,"modal-form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","rootTypeName","placeholder","e.g. User"],[1,"toggle-row"],[3,"change","checked"],[1,"field-section"],["type","button",1,"advanced-toggle",3,"click"],[1,"chevron"],[1,"adv-count"],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","disabled"],[1,"section-header"],[1,"section-title"],[1,"section-hint"],[1,"field-row",3,"unresolved"],[1,"field-row"],[1,"field-path",3,"title"],[1,"type-buttons"],["type","button",1,"type-btn",3,"active"],["type","button",1,"opt-btn",3,"click"],["type","button",1,"type-btn",3,"click"],[1,"no-fields"]],template:function(e,t){e&1&&(m(0,"h2",0),f(1,"Configure Output"),u(),m(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),f(6,"Root Type Name"),u(),J(7,"input",3),U(8,Yf,2,0,"mat-error"),u(),m(9,"div",4)(10,"mat-checkbox",5),E("change",function(r){return t.strictMode=r.checked}),f(11,"Pydantic Strict Mode"),u()(),U(12,Xf,8,0,"div",6),m(13,"button",7),E("click",function(){return t.advancedOpen=!t.advancedOpen}),m(14,"span",8),f(15,"\u25B6"),u(),f(16," Advanced Options "),U(17,Kf,2,1,"span",9),u(),U(18,np,3,1,"div",6),u()(),m(19,"mat-dialog-actions",10)(20,"button",11),E("click",function(){return t.dismiss()}),f(21,"Cancel"),u(),m(22,"button",12),E("click",function(){return t.confirm()}),f(23,"Generate"),u()()),e&2&&(g(3),P("formGroup",t.form),g(5),$(t.form.controls.rootTypeName.invalid&&t.form.controls.rootTypeName.touched?8:-1),g(2),P("checked",t.strictMode),g(2),$(t.nullFields.length>0?12:-1),g(2),w("open",t.advancedOpen),g(3),$(t.advancedFields.length>0?17:-1),g(),$(t.advancedOpen?18:-1),g(4),P("disabled",!t.canGenerate))},dependencies:[wl,xl,Hi,fl,pl,Gn,Or,Do,yo,Co,xo,mi,Lo,ui,Ia,wd,Dd,Mo,qe,nt,ad,Ma],styles:[".modal-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;width:100%;padding-top:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.toggle-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px}.toggle-label[_ngcontent-%COMP%]{color:#718096;font-size:14px;white-space:nowrap}.field-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:10px;border-bottom:1px solid #2d3548;padding-bottom:6px;margin-bottom:2px}.section-title[_ngcontent-%COMP%]{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:#718096}.section-hint[_ngcontent-%COMP%]{font-size:11px;color:#718096;opacity:.6}.field-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:2px 0}.field-path[_ngcontent-%COMP%]{flex:1;min-width:0;font-family:JetBrains Mono,Fira Code,monospace;font-size:12px;color:#e2e8f0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.unresolved[_ngcontent-%COMP%]   .field-path[_ngcontent-%COMP%]{color:#fc8181}.type-buttons[_ngcontent-%COMP%]{display:flex;gap:3px;flex-shrink:0}.type-btn[_ngcontent-%COMP%], .opt-btn[_ngcontent-%COMP%]{padding:2px 7px;border:1px solid #2d3548;background:transparent;font-family:JetBrains Mono,Fira Code,monospace;font-size:11px;border-radius:2px;cursor:pointer;line-height:1.7;color:#718096;transition:border-color .12s,background .12s,color .12s}.type-btn[_ngcontent-%COMP%]:hover, .opt-btn[_ngcontent-%COMP%]:hover{border-color:#7c6af7;color:#e2e8f0}.type-btn.active[_ngcontent-%COMP%]{border-color:#7c6af7;background:#7c6af724;color:#7c6af7}.opt-btn[_ngcontent-%COMP%]{flex-shrink:0}.opt-btn.active[_ngcontent-%COMP%]{border-color:#80cfa9;background:#80cfa91f;color:#80cfa9}.advanced-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;background:none;border:none;padding:2px 0;cursor:pointer;color:#718096;font-size:13px;font-family:inherit;-webkit-user-select:none;user-select:none;text-align:left}.advanced-toggle[_ngcontent-%COMP%]:hover{color:#e2e8f0}.chevron[_ngcontent-%COMP%]{font-size:9px;display:inline-block;transition:transform .18s}.chevron.open[_ngcontent-%COMP%]{transform:rotate(90deg)}.adv-count[_ngcontent-%COMP%]{font-size:11px;opacity:.55}.no-fields[_ngcontent-%COMP%]{color:#718096;font-size:13px;margin:0}"]})};function ip(i){return i.value?.trim()?null:{required:!0}}function op(i,n){if(i&1){let e=Ie();m(0,"button",4),E("click",function(){me(e);let o=T();return he(o.clear())}),f(1,"Clear"),u()}}var jo=class i{snackBar=s(To);dialog=s(vn);jsonState=s(Cn);indentSize=q(2);editorRef=null;editorOptions={language:"json",automaticLayout:!0,formatOnPaste:!0,scrollBeyondLastLine:!1,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",lineNumbers:"on",renderLineHighlight:"line",padding:{top:12}};constructor(){Pe(()=>{let n=this.jsonState.rawJson();this.editorRef&&this.editorRef.getValue()!==n&&this.editorRef.setValue(n)})}onEditorInit(n){let e=window.monaco;Oo(e),e.editor.setTheme("utilityDark"),this.editorRef=n;let t=this.jsonState.rawJson();t&&n.setValue(t),n.onDidChangeModelContent(()=>{this.jsonState.rawJson.set(n.getValue())})}beautify(){try{let n=JSON.stringify(JSON.parse(this.jsonState.rawJson()),null,this.indentSize());this.jsonState.rawJson.set(n)}catch(n){this.snackBar.open("Cannot beautify \u2014 fix JSON errors first.","\u2715",{duration:3e3,horizontalPosition:"center",verticalPosition:"bottom"})}}onIndentChange(n){if(this.indentSize.set(n),this.jsonState.isValid()){let e=JSON.stringify(JSON.parse(this.jsonState.rawJson()),null,n);this.jsonState.rawJson.set(e)}}clear(){this.jsonState.clearAll()}submit(){let n=this.jsonState.schemaTreePreview();if(!n)return;this.dialog.open(Vo,{panelClass:"utility-modal",width:"820px",maxWidth:"95vw",data:{nullFields:qc(n),allLeafFields:Xc(n),previousFieldMap:this.jsonState.generationConfig()?.fieldMap,previousRootTypeName:this.jsonState.generationConfig()?.rootTypeName,previousStrictMode:this.jsonState.generationConfig()?.strictMode}}).afterClosed().subscribe(t=>{t&&this.jsonState.applyConfig(t)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-left-pane"]],decls:18,vars:6,consts:[[1,"editor-wrapper"],[1,"monaco-editor",3,"onInit","options"],[1,"actions"],[1,"actions-left"],["mat-stroked-button","",3,"click"],[1,"indent-control"],["matTooltip","Number of spaces applied when Beautify is used","matTooltipPosition","above",1,"indent-label"],[1,"indent-toggle",3,"change","value"],[3,"value"],[1,"actions-right"],["mat-stroked-button",""],["mat-flat-button","",3,"click","disabled"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"ngx-monaco-editor",1),E("onInit",function(r){return t.onEditorInit(r)}),u()(),m(2,"div",2)(3,"div",3)(4,"button",4),E("click",function(){return t.beautify()}),f(5,"Beautify"),u(),m(6,"div",5)(7,"span",6),f(8,"Indent"),u(),m(9,"mat-button-toggle-group",7),E("change",function(r){return t.onIndentChange(r.value)}),m(10,"mat-button-toggle",8),f(11,"2"),u(),m(12,"mat-button-toggle",8),f(13,"4"),u()()()(),m(14,"div",9),U(15,op,2,0,"button",10),m(16,"button",11),E("click",function(){return t.submit()}),f(17,"Submit"),u()()()),e&2&&(g(),P("options",t.editorOptions),g(8),P("value",t.indentSize()),g(),P("value",2),g(2),P("value",4),g(3),$(t.jsonState.generationConfig()?15:-1),g(),P("disabled",!t.jsonState.isValid()))},dependencies:[qe,nt,Mo,pa,So,Yc,_a,Gi,$i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;border-right:1px solid #2d3548}.editor-wrapper[_ngcontent-%COMP%]{flex:1;overflow:hidden;min-height:0}.editor-wrapper[_ngcontent-%COMP%]   .monaco-editor[_ngcontent-%COMP%]{display:block;height:100%}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 16px;border-top:1px solid #2d3548;background-color:#161b27;flex-shrink:0}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:6px}.actions-left[_ngcontent-%COMP%], .actions-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.indent-control[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.indent-label[_ngcontent-%COMP%]{font-size:12px;color:#718096;cursor:default;-webkit-user-select:none;user-select:none}.indent-toggle[_ngcontent-%COMP%]     .mat-button-toggle{font-size:12px;font-family:JetBrains Mono,Fira Code,monospace}.indent-toggle[_ngcontent-%COMP%]     .mat-button-toggle-button{height:32px;padding:0;display:flex;align-items:center;justify-content:center}.indent-toggle[_ngcontent-%COMP%]     .mat-button-toggle-label-content{line-height:normal;padding:0 12px;display:flex;align-items:center}"]})};function kd(i){return Error(`Unable to find icon with the name "${i}"`)}function rp(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Ed(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Sd(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var lt=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},Td=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,r){return this._addSvgIconConfig(e,t,new lt(o,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,r){let a=this._sanitizer.sanitize(Se.HTML,o);if(!a)throw Sd(o);let l=Ht(a);return this._addSvgIconConfig(e,t,new lt("",l,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new lt(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let r=this._sanitizer.sanitize(Se.HTML,t);if(!r)throw Sd(t);let a=Ht(r);return this._addSvgIconSetConfig(e,new lt("",a,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Se.RESOURCE_URL,e);if(!t)throw Ed(e);let o=this._cachedIconsByUrl.get(t);return o?xe(zo(o)):this._loadSvgIconFromConfig(new lt(e,null)).pipe(Xt(r=>this._cachedIconsByUrl.set(t,r)),ae(r=>zo(r)))}getNamedSvgIcon(e,t=""){let o=Md(t,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):za(kd(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?xe(zo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ae(t=>zo(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return xe(o);let r=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Wa(l=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Se.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(d)),xe(null)})));return pi(r).pipe(ae(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw kd(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let r=t[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,e,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Xt(t=>e.svgText=t),ae(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?xe(null):this._fetchIcon(e).pipe(Xt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let l=this._svgElementFromString(Ht("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(Ht("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:a,value:l}=o[r];a!=="id"&&t.setAttribute(a,l)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw rp();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Se.RESOURCE_URL,t);if(!a)throw Ed(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let c=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(ae(d=>Ht(d)),gi(()=>this._inProgressUrlFetches.delete(a)),Za());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(Md(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](t,e);if(r)return ap(r)?new lt(r.url,null,r.options):new lt(r,null)}}static \u0275fac=function(t){return new(t||i)(B(br,8),B(Ln),B(M,8),B(Ot))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function zo(i){return i.cloneNode(!0)}function Md(i,n){return i+":"+n}function ap(i){return!!(i.url&&i.options)}var sp=["*"],lp=new _("MAT_ICON_DEFAULT_OPTIONS"),cp=new _("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(M),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Ad=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],dp=Ad.map(i=>`[${i}]`).join(", "),up=/^url\(['"]?#(.*?)['"]?\)$/,Ho=(()=>{class i{_elementRef=s(S);_iconRegistry=s(Td);_location=s(cp);_errorHandler=s(Ot);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ye.EMPTY;constructor(){let e=s(new Bt("aria-hidden"),{optional:!0}),t=s(lp,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(dp),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)Ad.forEach(a=>{let l=t[r],c=l.getAttribute(a),d=c?c.match(up):null;if(d){let h=o.get(l);h||(h=[],o.set(l,h)),h.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(Je(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${t}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(Y("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),ze(o.color?"mat-"+o.color:""),w("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",O],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:sp,decls:1,vars:0,template:function(t,o){t&1&&(fe(),X(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Uo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[ne]})}return i})();var Ba=["*"];function mp(i,n){i&1&&X(0)}var hp=["tabListContainer"],fp=["tabList"],pp=["tabListInner"],gp=["nextPaginator"],bp=["previousPaginator"],_p=["content"];function vp(i,n){}var yp=["tabBodyWrapper"],xp=["tabHeader"];function Cp(i,n){}function Dp(i,n){if(i&1&&Le(0,Cp,0,0,"ng-template",12),i&2){let e=T().$implicit;P("cdkPortalOutlet",e.templateLabel)}}function wp(i,n){if(i&1&&f(0),i&2){let e=T().$implicit;Me(e.textLabel)}}function kp(i,n){if(i&1){let e=Ie();m(0,"div",7,2),E("click",function(){let o=me(e),r=o.$implicit,a=o.$index,l=T(),c=tt(1);return he(l._handleClick(r,c,a))})("cdkFocusChange",function(o){let r=me(e).$index,a=T();return he(a._tabFocusChanged(o,r))}),J(2,"span",8)(3,"div",9),m(4,"span",10)(5,"span",11),U(6,Dp,1,1,null,12)(7,wp,1,1),u()()()}if(i&2){let e=n.$implicit,t=n.$index,o=tt(1),r=T();ze(e.labelClass),w("mdc-tab--active",r.selectedIndex===t),P("id",r._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",r.fitInkBarToContent),Y("tabIndex",r._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(t))("aria-selected",r.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),g(3),P("matRippleTrigger",o)("matRippleDisabled",e.disabled||r.disableRipple),g(3),$(e.templateLabel?6:7)}}function Ep(i,n){i&1&&X(0)}function Sp(i,n){if(i&1){let e=Ie();m(0,"mat-tab-body",13),E("_onCentered",function(){me(e);let o=T();return he(o._removeTabBodyWrapperHeight())})("_onCentering",function(o){me(e);let r=T();return he(r._setTabBodyWrapperHeight(o))})("_beforeCentering",function(o){me(e);let r=T();return he(r._bodyCentered(o))}),u()}if(i&2){let e=n.$implicit,t=n.$index,o=T();ze(e.bodyClass),P("id",o._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",o.animationDuration)("preserveContent",o.preserveContent),Y("tabindex",o.contentTabIndex!=null&&o.selectedIndex===t?o.contentTabIndex:null)("aria-labelledby",o._getTabLabelId(e,t))("aria-hidden",o.selectedIndex!==t)}}var Mp=new _("MatTabContent"),Tp=(()=>{class i{template=s(Ne);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","matTabContent",""]],features:[re([{provide:Mp,useExisting:i}])]})}return i})(),Ap=new _("MatTabLabel"),Pd=new _("MAT_TAB"),Ip=(()=>{class i extends bc{_closestTab=s(Pd,{optional:!0});static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275dir=D({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[re([{provide:Ap,useExisting:i}]),W]})}return i})(),Nd=new _("MAT_TAB_GROUP"),Va=(()=>{class i{_viewContainerRef=s(Ge);_closestTabGroup=s(Nd,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new y;position=null;origin=null;isActive=!1;constructor(){s(ge).load(Dt)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Ke(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-tab"]],contentQueries:function(t,o,r){if(t&1&&pt(r,Ip,5)(r,Tp,7,Ne),t&2){let a;R(a=F())&&(o.templateLabel=a.first),R(a=F())&&(o._explicitContent=a.first)}},viewQuery:function(t,o){if(t&1&&de(Ne,7),t&2){let r;R(r=F())&&(o._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,o){t&2&&Y("id",null)},inputs:{disabled:[2,"disabled","disabled",O],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[re([{provide:Pd,useExisting:i}]),Ee],ngContentSelectors:Ba,decls:1,vars:0,template:function(t,o){t&1&&(fe(),ps(0,mp,1,0,"ng-template"))},encapsulation:2})}return i})(),Oa="mdc-tab-indicator--active",Rd="mdc-tab-indicator--no-transition",Pa=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(o=>o.elementRef.nativeElement===n),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let o=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(o),this._currentItem=e}}},Rp=(()=>{class i{_elementRef=s(S);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Oa);return}let o=t.getBoundingClientRect(),r=e.width/o.width,a=e.left-o.left;t.classList.add(Rd),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(Rd),t.classList.add(Oa),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Oa)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),o=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",o.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",O]}})}return i})();var Ld=(()=>{class i extends Rp{elementRef=s(S);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275dir=D({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,o){t&2&&(Y("aria-disabled",!!o.disabled),w("mat-mdc-tab-disabled",o.disabled))},inputs:{disabled:[2,"disabled","disabled",O]},features:[W]})}return i})(),Fd={passive:!0},Fp=650,Op=100,Pp=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(pe);_viewportRuler=s(wt);_dir=s(we,{optional:!0});_ngZone=s(x);_platform=s(z);_sharedResizeObserver=s(Po);_injector=s(L);_renderer=s(se);_animationsDisabled=ee();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new y;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new y;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new V;indexFocused=new V;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Fd),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Fd))}ngAfterContentInit(){let e=this._dir?this._dir.change:xe("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(dt(32),ie(this._destroyed)),o=this._viewportRuler.change(150).pipe(ie(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Jn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),be(r,{injector:this._injector}),ct(e,o,t,this._items.changes,this._itemsResized()).pipe(ie(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?hi:this._items.changes.pipe(Oe(this._items),kn(e=>new Be(t=>this._ngZone.runOutsideAngular(()=>{let o=new ResizeObserver(r=>t.next(r));return e.forEach(r=>o.observe(r.elementRef.nativeElement)),()=>{o.disconnect()}}))),qt(1),le(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ue(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,o=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+o)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let o=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:a}=t.elementRef.nativeElement,l,c;this._getLayoutDirection()=="ltr"?(l=r,c=l+a):(c=this._tabListInner.nativeElement.offsetWidth-r,l=c-a);let d=this.scrollDistance,h=this.scrollDistance+o;l<d?this.scrollDistance-=d-l:c>h&&(this.scrollDistance+=Math.min(c-h,l-d))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,o=e-t>=5;o||(this.scrollDistance=0),o!==this._showPaginationControls&&(this._showPaginationControls=o,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ga(Fp,Op).pipe(ie(ct(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:o,distance:r}=this._scrollHeader(e);(r===0||r>=o)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",O],selectedIndex:[2,"selectedIndex","selectedIndex",gt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),Np=(()=>{class i extends Pp{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Pa(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ce(i)))(o||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,o,r){if(t&1&&pt(r,Ld,4),t&2){let a;R(a=F())&&(o._items=a)}},viewQuery:function(t,o){if(t&1&&de(hp,7)(fp,7)(pp,7)(gp,5)(bp,5),t&2){let r;R(r=F())&&(o._tabListContainer=r.first),R(r=F())&&(o._tabList=r.first),R(r=F())&&(o._tabListInner=r.first),R(r=F())&&(o._nextPaginator=r.first),R(r=F())&&(o._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,o){t&2&&w("mat-mdc-tab-header-pagination-controls-enabled",o._showPaginationControls)("mat-mdc-tab-header-rtl",o._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",O]},features:[W],ngContentSelectors:Ba,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,o){t&1&&(fe(),m(0,"div",5,0),E("click",function(){return o._handlePaginatorClick("before")})("mousedown",function(a){return o._handlePaginatorPress("before",a)})("touchend",function(){return o._stopInterval()}),J(2,"div",6),u(),m(3,"div",7,1),E("keydown",function(a){return o._handleKeydown(a)}),m(5,"div",8,2),E("cdkObserveContent",function(){return o._onContentChanges()}),m(7,"div",9,3),X(9),u()()(),m(10,"div",10,4),E("mousedown",function(a){return o._handlePaginatorPress("after",a)})("click",function(){return o._handlePaginatorClick("after")})("touchend",function(){return o._stopInterval()}),J(12,"div",6),u()),t&2&&(w("mat-mdc-tab-header-pagination-disabled",o._disableScrollBefore),P("matRippleDisabled",o._disableScrollBefore||o.disableRipple),g(3),w("_mat-animation-noopable",o._animationsDisabled),g(2),Y("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby||null),g(5),w("mat-mdc-tab-header-pagination-disabled",o._disableScrollAfter),P("matRippleDisabled",o._disableScrollAfter||o.disableRipple))},dependencies:[Gt,Ul],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),Lp=new _("MAT_TABS_CONFIG"),Od=(()=>{class i extends Qe{_host=s(Na);_ngZone=s(x);_centeringSub=ye.EMPTY;_leavingSub=ye.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Oe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=D({type:i,selectors:[["","matTabBodyHost",""]],features:[W]})}return i})(),Na=(()=>{class i{_elementRef=s(S);_dir=s(we,{optional:!0});_ngZone=s(x);_injector=s(L);_renderer=s(se);_diAnimationsDisabled=ee();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ye.EMPTY;_position;_previousPosition;_onCentering=new V;_beforeCentering=new V;_afterLeavingCenter=new V;_onCentered=new V(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(pe);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),be(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=o=>{o.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),o.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",o=>{o.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),be(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,o){if(t&1&&de(Od,5)(_p,5),t&2){let r;R(r=F())&&(o._portalHost=r.first),R(r=F())&&(o._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,o){t&2&&Y("inert",o._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,o){t&1&&(m(0,"div",1,0),Le(2,vp,0,0,"ng-template",2),u()),t&2&&w("mat-tab-body-content-left",o._position==="left")("mat-tab-body-content-right",o._position==="right")("mat-tab-body-content-can-animate",o._position==="center"||o._previousPosition==="center")},dependencies:[Od,oi],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),Bd=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(pe);_ngZone=s(x);_tabsSubscription=ye.EMPTY;_tabLabelSubscription=ye.EMPTY;_tabBodySubscription=ye.EMPTY;_diAnimationsDisabled=ee();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new En;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new V;focusChange=new V;animationDone=new V;selectedTabChange=new V(!0);_groupId;_isServer=!s(z).isBrowser;constructor(){let e=s(Lp,{optional:!0});this._groupId=s(te).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let o=this._tabBodyWrapper.nativeElement;o.style.minHeight=o.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((o,r)=>o.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,o)=>{t.position=o-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),o;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,o=t[r];break}!o&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Oe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new La;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ct(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,o){t.focusIndex=o,e.disabled||(this.selectedIndex=o)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,o)=>t._setActiveClass(o===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,o,r){if(t&1&&pt(r,Va,5),t&2){let a;R(a=F())&&(o._allTabs=a)}},viewQuery:function(t,o){if(t&1&&de(yp,5)(xp,5)(Na,5),t&2){let r;R(r=F())&&(o._tabBodyWrapper=r.first),R(r=F())&&(o._tabHeader=r.first),R(r=F())&&(o._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,o){t&2&&(Y("mat-align-tabs",o.alignTabs),ze("mat-"+(o.color||"primary")),tr("--mat-tab-animation-duration",o.animationDuration),w("mat-mdc-tab-group-dynamic-height",o.dynamicHeight)("mat-mdc-tab-group-inverted-header",o.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",o.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",O],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",O],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",O],selectedIndex:[2,"selectedIndex","selectedIndex",gt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",gt],disablePagination:[2,"disablePagination","disablePagination",O],disableRipple:[2,"disableRipple","disableRipple",O],preserveContent:[2,"preserveContent","preserveContent",O],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[re([{provide:Nd,useExisting:i}])],ngContentSelectors:Ba,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,o){t&1&&(fe(),m(0,"mat-tab-header",3,0),E("indexFocused",function(a){return o._focusChanged(a)})("selectFocusedIndex",function(a){return o.selectedIndex=a}),mt(2,kp,8,17,"div",4,ut),u(),U(4,Ep,1,0),m(5,"div",5,1),mt(7,Sp,1,10,"mat-tab-body",6,ut),u()),t&2&&(P("selectedIndex",o.selectedIndex||0)("disableRipple",o.disableRipple)("disablePagination",o.disablePagination),gs("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby),g(2),ht(o._tabs),g(2),$(o._isServer?4:-1),g(),w("_mat-animation-noopable",o._animationsDisabled()),g(2),ht(o._tabs))},dependencies:[Np,Ld,jr,Gt,Qe,Na],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),La=class{index;tab};var Vd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=A({imports:[ne]})}return i})();function Vp(i,n){i&1&&(m(0,"div",0)(1,"mat-icon"),f(2,"data_object"),u(),m(3,"p"),f(4,"Submit your JSON to generate output."),u()())}function jp(i,n){if(i&1){let e=Ie();m(0,"div",1)(1,"ngx-monaco-editor",2),E("onInit",function(o){me(e);let r=T();return he(r.onEditorInit(o))}),u(),m(2,"button",3),E("click",function(){me(e);let o=T();return he(o.copy())}),m(3,"mat-icon"),f(4),u()()()}if(i&2){let e=T();g(),P("options",e.editorOptions()),g(),P("title",e.copied()?"Copied!":"Copy to clipboard"),g(2),Me(e.copied()?"check":"content_copy")}}var $o=class i{content=nr(null);language=nr("plaintext");snackBar=s(To);editorRef=null;copied=q(!1);copyTimer=null;editorOptions=_e(()=>({readOnly:!0,language:this.language(),automaticLayout:!0,scrollBeyondLastLine:!1,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', 'Fira Code', monospace",lineNumbers:"on",renderLineHighlight:"none",padding:{top:12}}));constructor(){Pe(()=>{let n=this.content()??"";this.editorRef&&this.editorRef.getValue()!==n&&this.editorRef.setValue(n)})}onEditorInit(n){let e=window.monaco;Oo(e),e.editor.setTheme("utilityDark"),this.editorRef=n;let t=this.content()??"";t&&n.setValue(t)}copy(){return Zt(this,null,function*(){let n=this.content();if(n)try{yield navigator.clipboard.writeText(n),this.copied.set(!0),this.copyTimer&&clearTimeout(this.copyTimer),this.copyTimer=setTimeout(()=>this.copied.set(!1),2e3)}catch(e){this.snackBar.open("Copy failed. Please select and copy manually.","\u2715",{duration:3e3,horizontalPosition:"center",verticalPosition:"bottom"})}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-output-tab"]],inputs:{content:[1,"content"],language:[1,"language"]},decls:2,vars:1,consts:[[1,"empty-state"],[1,"editor-wrapper"],[1,"monaco-editor",3,"onInit","options"],["mat-icon-button","",1,"copy-btn",3,"click","title"]],template:function(e,t){e&1&&U(0,Vp,5,0,"div",0)(1,jp,5,3,"div",1),e&2&&$(t.content()===null?0:1)},dependencies:[Gi,$i,qe,na,Uo,Ho],styles:["[_nghost-%COMP%]{display:block;height:100%}.editor-wrapper[_ngcontent-%COMP%]{position:relative;height:100%}.editor-wrapper[_ngcontent-%COMP%]   .monaco-editor[_ngcontent-%COMP%]{display:block;height:100%}.copy-btn[_ngcontent-%COMP%]{position:absolute;top:8px;right:12px;z-index:10;color:#718096;background:#1e2535}.copy-btn[_ngcontent-%COMP%]:hover{color:#e2e8f0}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;color:#718096}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px}"]})};function zp(i,n){if(i&1&&(m(0,"div",7)(1,"mat-icon"),f(2,"error_outline"),u(),m(3,"span"),f(4),u()()),i&2){let e=T();g(4),Me(e.jsonState.errorMsg())}}var Hp=["typescript","pydantic","jsObject"],Go=class i{jsonState=s(Cn);onTabChange(n){this.jsonState.activeTab.set(Hp[n])}tabContent(n){return this.jsonState.outputCache()[n]}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-right-pane"]],decls:8,vars:7,consts:[["animationDuration","0ms",1,"output-tabs",3,"selectedIndexChange"],["label","TypeScript",3,"disabled"],["language","typescript",3,"content"],["label","Pydantic",3,"disabled"],["language","python",3,"content"],["label","JS Object",3,"disabled"],["language","javascript",3,"content"],[1,"error-panel"]],template:function(e,t){e&1&&(m(0,"mat-tab-group",0),E("selectedIndexChange",function(r){return t.onTabChange(r)}),m(1,"mat-tab",1),J(2,"app-output-tab",2),u(),m(3,"mat-tab",3),J(4,"app-output-tab",4),u(),m(5,"mat-tab",5),J(6,"app-output-tab",6),u()(),U(7,zp,5,1,"div",7)),e&2&&(g(),P("disabled",!t.jsonState.isValid()),g(),P("content",t.tabContent("typescript")),g(),P("disabled",!t.jsonState.isValid()),g(),P("content",t.tabContent("pydantic")),g(),P("disabled",!t.jsonState.isValid()),g(),P("content",t.tabContent("jsObject")),g(),$(t.jsonState.rawJson().trim()&&t.jsonState.errorMsg()?7:-1))},dependencies:[Vd,Va,Bd,Uo,Ho,$o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:hidden;background:#161b27;border-left:1px solid #2d3548}.output-tabs[_ngcontent-%COMP%]{flex:1;overflow:hidden;min-height:0}  .output-tabs{display:flex;flex-direction:column;height:100%}  .output-tabs .mat-mdc-tab-body-wrapper{flex:1;overflow:hidden}  .output-tabs .mat-mdc-tab-body-content{height:100%;overflow:hidden}  .output-tabs .mat-mdc-tab[aria-disabled=true]{opacity:.38;cursor:not-allowed;pointer-events:auto}.error-panel[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 16px;background:color-mix(in srgb,#fc8181 12%,transparent);border-top:1px solid color-mix(in srgb,#fc8181 35%,transparent);color:#fc8181;font-size:13px;font-family:JetBrains Mono,Fira Code,monospace;flex-shrink:0}.error-panel[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;flex-shrink:0}.error-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]})};var Wo=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-root"]],decls:3,vars:0,template:function(e,t){e&1&&J(0,"app-header")(1,"app-left-pane")(2,"app-right-pane")},dependencies:[ko,jo,Go],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr;height:100vh;overflow:hidden}app-header[_ngcontent-%COMP%]{grid-column:1/-1}"]})};mr(Wo,Tl).catch(i=>console.error(i));
