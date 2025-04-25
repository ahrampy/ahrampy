(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var we,v,Hn,K,Vt,Wn,Yn,Vn,Ct,nt,rt,Gn,ve={},Bn=[],oa=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ke=Array.isArray;function M(e,t){for(var n in t)e[n]=t[n];return e}function Nt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function z(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?we.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]==null&&(i[o]=e.defaultProps[o]);return he(e,i,r,a,null)}function he(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++Hn,__i:-1,__u:0};return a==null&&v.vnode!=null&&v.vnode(o),o}function ia(){return{current:null}}function j(e){return e.children}function D(e,t){this.props=e,this.context=t}function ie(e,t){if(t==null)return e.__?ie(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ie(e):null}function Xn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Xn(e)}}function at(e){(!e.__d&&(e.__d=!0)&&K.push(e)&&!Me.__r++||Vt!=v.debounceRendering)&&((Vt=v.debounceRendering)||Wn)(Me)}function Me(){for(var e,t,n,r,a,o,i,s=1;K.length;)K.length>s&&K.sort(Yn),e=K.shift(),s=K.length,e.__d&&(n=void 0,a=(r=(t=e).__v).__e,o=[],i=[],t.__P&&((n=M({},r)).__v=r.__v+1,v.vnode&&v.vnode(n),Ot(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[a]:null,o,a??ie(r),!!(32&r.__u),i),n.__v=r.__v,n.__.__k[n.__i]=n,Qn(o,n,i),n.__e!=a&&Xn(n)));Me.__r=0}function qn(e,t,n,r,a,o,i,s,f,l,d){var c,p,_,w,S,b,y=r&&r.__k||Bn,g=t.length;for(f=sa(n,t,y,f,g),c=0;c<g;c++)(_=n.__k[c])!=null&&(p=_.__i==-1?ve:y[_.__i]||ve,_.__i=c,b=Ot(e,_,p,a,o,i,s,f,l,d),w=_.__e,_.ref&&p.ref!=_.ref&&(p.ref&&Et(p.ref,null,_),d.push(_.ref,_.__c||w,_)),S==null&&w!=null&&(S=w),4&_.__u||p.__k===_.__k?f=Kn(_,f,e):typeof _.type=="function"&&b!==void 0?f=b:w&&(f=w.nextSibling),_.__u&=-7);return n.__e=S,f}function sa(e,t,n,r,a){var o,i,s,f,l,d=n.length,c=d,p=0;for(e.__k=new Array(a),o=0;o<a;o++)(i=t[o])!=null&&typeof i!="boolean"&&typeof i!="function"?(f=o+p,(i=e.__k[o]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?he(null,i,null,null,null):ke(i)?he(j,{children:i},null,null,null):i.constructor==null&&i.__b>0?he(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,s=null,(l=i.__i=la(i,n,f,c))!=-1&&(c--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(a>d?p--:a<d&&p++),typeof i.type!="function"&&(i.__u|=4)):l!=f&&(l==f-1?p--:l==f+1?p++:(l>f?p--:p++,i.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<d;o++)(s=n[o])!=null&&!(2&s.__u)&&(s.__e==r&&(r=ie(s)),Zn(s,s));return r}function Kn(e,t,n){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=Kn(r[a],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=ie(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function $(e,t){return t=t||[],e==null||typeof e=="boolean"||(ke(e)?e.some(function(n){$(n,t)}):t.push(e)),t}function la(e,t,n,r){var a,o,i=e.key,s=e.type,f=t[n];if(f===null&&e.key==null||f&&i==f.key&&s==f.type&&!(2&f.__u))return n;if(r>(f!=null&&!(2&f.__u)?1:0))for(a=n-1,o=n+1;a>=0||o<t.length;){if(a>=0){if((f=t[a])&&!(2&f.__u)&&i==f.key&&s==f.type)return a;a--}if(o<t.length){if((f=t[o])&&!(2&f.__u)&&i==f.key&&s==f.type)return o;o++}}return-1}function Gt(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||oa.test(t)?n:n+"px"}function Ce(e,t,n,r,a){var o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Gt(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||Gt(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Vn,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Ct,e.addEventListener(t,o?rt:nt,o)):e.removeEventListener(t,o?rt:nt,o);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Bt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Ct++;else if(t.t<n.u)return;return n(v.event?v.event(t):t)}}}function Ot(e,t,n,r,a,o,i,s,f,l){var d,c,p,_,w,S,b,y,g,C,N,O,q,te,ne,de,Be,T=t.type;if(t.constructor!=null)return null;128&n.__u&&(f=!!(32&n.__u),o=[s=t.__e=n.__e]),(d=v.__b)&&d(t);e:if(typeof T=="function")try{if(y=t.props,g="prototype"in T&&T.prototype.render,C=(d=T.contextType)&&r[d.__c],N=d?C?C.props.value:d.__:r,n.__c?b=(c=t.__c=n.__c).__=c.__E:(g?t.__c=c=new T(y,N):(t.__c=c=new D(y,N),c.constructor=T,c.render=fa),C&&C.sub(c),c.props=y,c.state||(c.state={}),c.context=N,c.__n=r,p=c.__d=!0,c.__h=[],c._sb=[]),g&&c.__s==null&&(c.__s=c.state),g&&T.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=M({},c.__s)),M(c.__s,T.getDerivedStateFromProps(y,c.__s))),_=c.props,w=c.state,c.__v=t,p)g&&T.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),g&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(g&&T.getDerivedStateFromProps==null&&y!==_&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,N),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,N)===!1||t.__v==n.__v){for(t.__v!=n.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(me){me&&(me.__=t)}),O=0;O<c._sb.length;O++)c.__h.push(c._sb[O]);c._sb=[],c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,N),g&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(_,w,S)})}if(c.context=N,c.props=y,c.__P=e,c.__e=!1,q=v.__r,te=0,g){for(c.state=c.__s,c.__d=!1,q&&q(t),d=c.render(c.props,c.state,c.context),ne=0;ne<c._sb.length;ne++)c.__h.push(c._sb[ne]);c._sb=[]}else do c.__d=!1,q&&q(t),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++te<25);c.state=c.__s,c.getChildContext!=null&&(r=M(M({},r),c.getChildContext())),g&&!p&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(_,w)),de=d,d!=null&&d.type===j&&d.key==null&&(de=Jn(d.props.children)),s=qn(e,ke(de)?de:[de],t,n,r,a,o,i,s,f,l),c.base=t.__e,t.__u&=-161,c.__h.length&&i.push(c),b&&(c.__E=c.__=null)}catch(me){if(t.__v=null,f||o!=null)if(me.then){for(t.__u|=f?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,t.__e=s}else for(Be=o.length;Be--;)Nt(o[Be]);else t.__e=n.__e,t.__k=n.__k;v.__e(me,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=ca(n.__e,t,n,r,a,o,i,f,l);return(d=v.diffed)&&d(t),128&t.__u?void 0:s}function Qn(e,t,n){for(var r=0;r<n.length;r++)Et(n[r],n[++r],n[++r]);v.__c&&v.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){v.__e(o,a.__v)}})}function Jn(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ke(e)?e.map(Jn):M({},e)}function ca(e,t,n,r,a,o,i,s,f){var l,d,c,p,_,w,S,b=n.props,y=t.props,g=t.type;if(g=="svg"?a="http://www.w3.org/2000/svg":g=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((_=o[l])&&"setAttribute"in _==!!g&&(g?_.localName==g:_.nodeType==3)){e=_,o[l]=null;break}}if(e==null){if(g==null)return document.createTextNode(y);e=document.createElementNS(a,g,y.is&&y),s&&(v.__m&&v.__m(t,o),s=!1),o=null}if(g==null)b===y||s&&e.data==y||(e.data=y);else{if(o=o&&we.call(e.childNodes),b=n.props||ve,!s&&o!=null)for(b={},l=0;l<e.attributes.length;l++)b[(_=e.attributes[l]).name]=_.value;for(l in b)if(_=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=_;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;Ce(e,l,null,_,a)}}for(l in y)_=y[l],l=="children"?p=_:l=="dangerouslySetInnerHTML"?d=_:l=="value"?w=_:l=="checked"?S=_:s&&typeof _!="function"||b[l]===_||Ce(e,l,_,b[l],a);if(d)s||c&&(d.__html==c.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(c&&(e.innerHTML=""),qn(t.type=="template"?e.content:e,ke(p)?p:[p],t,n,r,g=="foreignObject"?"http://www.w3.org/1999/xhtml":a,o,i,o?o[0]:n.__k&&ie(n,0),s,f),o!=null)for(l=o.length;l--;)Nt(o[l]);s||(l="value",g=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[l]||g=="progress"&&!w||g=="option"&&w!=b[l])&&Ce(e,l,w,b[l],a),l="checked",S!=null&&S!=e[l]&&Ce(e,l,S,b[l],a))}return e}function Et(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(a){v.__e(a,n)}}function Zn(e,t,n){var r,a;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Et(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){v.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Zn(r[a],t,n||typeof e.type!="function");n||Nt(e.__e),e.__c=e.__=e.__e=void 0}function fa(e,t,n){return this.constructor(e,n)}function se(e,t,n){var r,a,o,i;t==document&&(t=document.documentElement),v.__&&v.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],Ot(t,e=(!r&&n||t).__k=z(j,null,[e]),a||ve,ve,t.namespaceURI,!r&&n?[n]:a?null:t.firstChild?we.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r,i),Qn(o,e,i)}function er(e,t){se(e,t,er)}function ua(e,t,n){var r,a,o,i,s=M({},e.props);for(o in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?a=t[o]:s[o]=t[o]==null&&i!=null?i[o]:t[o];return arguments.length>2&&(s.children=arguments.length>3?we.call(arguments,2):n),he(e.type,s,r||e.key,a||e.ref,null)}function da(e){function t(n){var r,a;return this.getChildContext||(r=new Set,(a={})[t.__c]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(o){this.props.value!=o.value&&r.forEach(function(i){i.__e=!0,at(i)})},this.sub=function(o){r.add(o);var i=o.componentWillUnmount;o.componentWillUnmount=function(){r&&r.delete(o),i&&i.call(o)}}),n.children}return t.__c="__cC"+Gn++,t.__=e,t.Provider=t.__l=(t.Consumer=function(n,r){return n.children(r)}).contextType=t,t}we=Bn.slice,v={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},Hn=0,D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=M({},this.state),typeof e=="function"&&(e=e(M({},n),this.props)),e&&M(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),at(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),at(this))},D.prototype.render=j,K=[],Wn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Yn=function(e,t){return e.__v.__b-t.__v.__b},Me.__r=0,Vn=/(PointerCapture)$|Capture$/i,Ct=0,nt=Bt(!1),rt=Bt(!0),Gn=0;var ma=0;function m(e,t,n,r,a,o){t||(t={});var i,s,f=t;if("ref"in f)for(s in f={},t)s=="ref"?i=t[s]:f[s]=t[s];var l={type:e,props:f,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ma,__i:-1,__u:0,__source:a,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(s in i)f[s]===void 0&&(f[s]=i[s]);return v.vnode&&v.vnode(l),l}var V,k,Xe,Xt,le=0,tr=[],P=v,qt=P.__b,Kt=P.__r,Qt=P.diffed,Jt=P.__c,Zt=P.unmount,en=P.__;function fe(e,t){P.__h&&P.__h(k,e,le||t),le=0;var n=k.__H||(k.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function J(e){return le=1,It(lr,e)}function It(e,t,n){var r=fe(V++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):lr(void 0,t),function(s){var f=r.__N?r.__N[0]:r.__[0],l=r.t(f,s);f!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=k,!k.__f)){var a=function(s,f,l){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(p){return!!p.__c});if(d.every(function(p){return!p.__N}))return!o||o.call(this,s,f,l);var c=r.__c.props!==s;return d.forEach(function(p){if(p.__N){var _=p.__[0];p.__=p.__N,p.__N=void 0,_!==p.__[0]&&(c=!0)}}),o&&o.call(this,s,f,l)||c};k.__f=!0;var o=k.shouldComponentUpdate,i=k.componentWillUpdate;k.componentWillUpdate=function(s,f,l){if(this.__e){var d=o;o=void 0,a(s,f,l),o=d}i&&i.call(this,s,f,l)},k.shouldComponentUpdate=a}return r.__N||r.__}function $e(e,t){var n=fe(V++,3);!P.__s&&Tt(n.__H,t)&&(n.__=e,n.u=t,k.__H.__h.push(n))}function Ae(e,t){var n=fe(V++,4);!P.__s&&Tt(n.__H,t)&&(n.__=e,n.u=t,k.__h.push(n))}function nr(e){return le=5,ze(function(){return{current:e}},[])}function rr(e,t,n){le=6,Ae(function(){if(typeof e=="function"){var r=e(t());return function(){e(null),r&&typeof r=="function"&&r()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function ze(e,t){var n=fe(V++,7);return Tt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ar(e,t){return le=8,ze(function(){return e},t)}function or(e){var t=k.context[e.__c],n=fe(V++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(k)),t.props.value):e.__}function ir(e,t){P.useDebugValue&&P.useDebugValue(t?t(e):e)}function sr(){var e=fe(V++,11);if(!e.__){for(var t=k.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function pa(){for(var e;e=tr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ee),e.__H.__h.forEach(ot),e.__H.__h=[]}catch(t){e.__H.__h=[],P.__e(t,e.__v)}}P.__b=function(e){k=null,qt&&qt(e)},P.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),en&&en(e,t)},P.__r=function(e){Kt&&Kt(e),V=0;var t=(k=e.__c).__H;t&&(Xe===k?(t.__h=[],k.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(Ee),t.__h.forEach(ot),t.__h=[],V=0)),Xe=k},P.diffed=function(e){Qt&&Qt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(tr.push(t)!==1&&Xt===P.requestAnimationFrame||((Xt=P.requestAnimationFrame)||_a)(pa)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),Xe=k=null},P.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ee),n.__h=n.__h.filter(function(r){return!r.__||ot(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],P.__e(r,n.__v)}}),Jt&&Jt(e,t)},P.unmount=function(e){Zt&&Zt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ee(r)}catch(a){t=a}}),n.__H=void 0,t&&P.__e(t,n.__v))};var tn=typeof requestAnimationFrame=="function";function _a(e){var t,n=function(){clearTimeout(r),tn&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);tn&&(t=requestAnimationFrame(n))}function Ee(e){var t=k,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),k=t}function ot(e){var t=k;e.__c=e.__(),k=t}function Tt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function lr(e,t){return typeof t=="function"?t(e):t}const ha=({show:e,useDark:t,setUseDark:n})=>m("div",{className:`flex justify-end gap-1 transition-opacity duration-1000 ${e?"opacity-100":"opacity-0"}`,children:[m("button",{className:"flex items-center gap-2 p-1",onClick:()=>n(!1),children:[m("div",{className:`h-2 w-2 border border-secondary dark:border-primary ${!t&&"bg-secondary"}`}),m("p",{children:"light"})]}),m("button",{className:"flex items-center gap-2 p-1",onClick:()=>n(!0),children:[m("div",{className:`h-2 w-2 border border-secondary dark:border-primary ${t&&"bg-primary"}`}),m("p",{children:"dark"})]})]}),ga=({children:e})=>{const[t,n]=J(window.matchMedia("(prefers-color-scheme: dark)").matches),[r,a]=J(!0),[o,i]=J(!1);return $e(()=>{setTimeout(()=>a(!1),1500),setTimeout(()=>i(!0),2500)},[]),m("div",{className:t?"dark":"",children:m("div",{className:"flex h-screen w-full items-center justify-center bg-primary text-secondary transition-all dark:bg-secondary dark:text-primary",style:{backgroundImage:`url("https://www.transparenttextures.com/patterns/${t?"back-pattern":"arches"}.png")`,backgroundRepeat:"repeat"},children:m("div",{className:"relative h-full w-full p-2 sm:p-12",children:[m("div",{className:"absolute -right-11 top-24 z-10 rotate-90 px-4",children:m(ha,{show:o,useDark:t,setUseDark:n})}),m("div",{className:"relative flex h-full w-full overflow-scroll text-center sm:text-left",children:m("div",{className:o?"w-full p-5":"",children:[m("div",{className:`absolute flex h-1/2 w-1/2 items-center justify-center transition-opacity duration-1000 ${r?"opacity-100":"opacity-0"} ${o?"hidden":""}`,children:"Adrian Rampy: Portfolio"}),m("div",{className:`flex w-full flex-col gap-6 transition-opacity duration-1000 ${o?"opacity-100":"opacity-0"}`,children:e})]})})]})})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ya={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},va={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ba(e,t,n){return(t=wa(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nn(Object(n),!0).forEach(function(r){ba(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xa(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wa(e){var t=xa(e,"string");return typeof t=="symbol"?t:t+""}const rn=()=>{};let Ft={},cr={},fr=null,ur={mark:rn,measure:rn};try{typeof window<"u"&&(Ft=window),typeof document<"u"&&(cr=document),typeof MutationObserver<"u"&&(fr=MutationObserver),typeof performance<"u"&&(ur=performance)}catch{}const{userAgent:an=""}=Ft.navigator||{},G=Ft,A=cr,on=fr,Ne=ur;G.document;const W=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",dr=~an.indexOf("MSIE")||~an.indexOf("Trident/");var ka=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,mr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Sa={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},pr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],E="classic",je="duotone",Pa="sharp",Ca="sharp-duotone",_r=[E,je,Pa,Ca],Na={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Oa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ea=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ia={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ta=["fak","fa-kit","fakd","fa-kit-duotone"],sn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fa=["kit"],Ma={kit:{"fa-kit":"fak"}},La=["fak","fakd"],Ra={kit:{fak:"fa-kit"}},ln={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Da=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],$a=["fak","fa-kit","fakd","fa-kit-duotone"],za={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ja={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ua={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},it={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ha=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],st=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Da,...Ha],Wa=["solid","regular","light","thin","duotone","brands"],hr=[1,2,3,4,5,6,7,8,9,10],Ya=hr.concat([11,12,13,14,15,16,17,18,19,20]),Va=[...Object.keys(Ua),...Wa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Oe.GROUP,Oe.SWAP_OPACITY,Oe.PRIMARY,Oe.SECONDARY].concat(hr.map(e=>"".concat(e,"x"))).concat(Ya.map(e=>"w-".concat(e))),Ga={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const U="___FONT_AWESOME___",lt=16,gr="fa",yr="svg-inline--fa",Z="data-fa-i2svg",ct="data-fa-pseudo-element",Ba="data-fa-pseudo-element-pending",Mt="data-prefix",Lt="data-icon",cn="fontawesome-i2svg",Xa="async",qa=["HTML","HEAD","STYLE","SCRIPT"],vr=(()=>{try{return!0}catch{return!1}})();function Se(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[E]}})}const br=u({},mr);br[E]=u(u(u(u({},{"fa-duotone":"duotone"}),mr[E]),sn.kit),sn["kit-duotone"]);const Ka=Se(br),ft=u({},Ia);ft[E]=u(u(u(u({},{duotone:"fad"}),ft[E]),ln.kit),ln["kit-duotone"]);const fn=Se(ft),ut=u({},it);ut[E]=u(u({},ut[E]),Ra.kit);const Rt=Se(ut),dt=u({},ja);dt[E]=u(u({},dt[E]),Ma.kit);Se(dt);const Qa=ka,xr="fa-layers-text",Ja=Aa,Za=u({},Na);Se(Za);const eo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],qe=Sa,to=[...Fa,...Va],ge=G.FontAwesomeConfig||{};function no(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ro(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}A&&typeof A.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=ro(no(n));a!=null&&(ge[r]=a)});const wr={styleDefault:"solid",familyDefault:E,cssPrefix:gr,replacementClass:yr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ge.familyPrefix&&(ge.cssPrefix=ge.familyPrefix);const ce=u(u({},wr),ge);ce.autoReplaceSvg||(ce.observeMutations=!1);const h={};Object.keys(wr).forEach(e=>{Object.defineProperty(h,e,{enumerable:!0,set:function(t){ce[e]=t,ye.forEach(n=>n(h))},get:function(){return ce[e]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(e){ce.cssPrefix=e,ye.forEach(t=>t(h))},get:function(){return ce.cssPrefix}});G.FontAwesomeConfig=h;const ye=[];function ao(e){return ye.push(e),()=>{ye.splice(ye.indexOf(e),1)}}const Y=lt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oo(e){if(!e||!W)return;const t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=A.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return A.head.insertBefore(t,r),e}const io="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function be(){let e=12,t="";for(;e-- >0;)t+=io[Math.random()*62|0];return t}function ue(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Dt(e){return e.classList?ue(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function kr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function so(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(kr(e[n]),'" '),"").trim()}function Ue(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function $t(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function lo(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:l}}function co(e){let{transform:t,width:n=lt,height:r=lt,startCentered:a=!1}=e,o="";return a&&dr?o+="translate(".concat(t.x/Y-n/2,"em, ").concat(t.y/Y-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):o+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),o+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var fo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Ar(){const e=gr,t=yr,n=h.cssPrefix,r=h.replacementClass;let a=fo;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let un=!1;function Ke(){h.autoAddCss&&!un&&(oo(Ar()),un=!0)}var uo={mixout(){return{dom:{css:Ar,insertCss:Ke}}},hooks(){return{beforeDOMElementCreation(){Ke()},beforeI2svg(){Ke()}}}};const H=G||{};H[U]||(H[U]={});H[U].styles||(H[U].styles={});H[U].hooks||(H[U].hooks={});H[U].shims||(H[U].shims=[]);var R=H[U];const Sr=[],Pr=function(){A.removeEventListener("DOMContentLoaded",Pr),Le=1,Sr.map(e=>e())};let Le=!1;W&&(Le=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Le||A.addEventListener("DOMContentLoaded",Pr));function mo(e){W&&(Le?setTimeout(e,0):Sr.push(e))}function Pe(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?kr(e):"<".concat(t," ").concat(so(n),">").concat(r.map(Pe).join(""),"</").concat(t,">")}function dn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qe=function(t,n,r,a){var o=Object.keys(t),i=o.length,s=n,f,l,d;for(r===void 0?(f=1,d=t[o[0]]):(f=0,d=r);f<i;f++)l=o[f],d=s(d,t[l],l,t);return d};function po(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function mt(e){const t=po(e);return t.length===1?t[0].toString(16):null}function _o(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function pt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=mn(t);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(e,mn(t)):R.styles[e]=u(u({},R.styles[e]||{}),a),e==="fas"&&pt("fa",t)}const{styles:xe,shims:ho}=R,Cr=Object.keys(Rt),go=Cr.reduce((e,t)=>(e[t]=Object.keys(Rt[t]),e),{});let zt=null,Nr={},Or={},Er={},Ir={},Tr={};function yo(e){return~to.indexOf(e)}function vo(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!yo(a)?a:null}const Fr=()=>{const e=r=>Qe(xe,(a,o,i)=>(a[i]=Qe(o,r,{}),a),{});Nr=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),Or=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),Tr=e((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const t="far"in xe||h.autoFetchSvg,n=Qe(ho,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!t&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});Er=n.names,Ir=n.unicodes,zt=He(h.styleDefault,{family:h.familyDefault})};ao(e=>{zt=He(e.styleDefault,{family:h.familyDefault})});Fr();function jt(e,t){return(Nr[e]||{})[t]}function bo(e,t){return(Or[e]||{})[t]}function Q(e,t){return(Tr[e]||{})[t]}function Mr(e){return Er[e]||{prefix:null,iconName:null}}function xo(e){const t=Ir[e],n=jt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return zt}const Lr=()=>({prefix:null,iconName:null,rest:[]});function wo(e){let t=E;const n=Cr.reduce((r,a)=>(r[a]="".concat(h.cssPrefix,"-").concat(a),r),{});return _r.forEach(r=>{(e.includes(n[r])||e.some(a=>go[r].includes(a)))&&(t=r)}),t}function He(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=E}=t,r=Ka[n][e];if(n===je&&!e)return"fad";const a=fn[n][e]||fn[n][r],o=e in R.styles?e:null;return a||o||null}function ko(e){let t=[],n=null;return e.forEach(r=>{const a=vo(h.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function pn(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=st.concat($a),o=pn(e.filter(c=>a.includes(c))),i=pn(e.filter(c=>!st.includes(c))),s=o.filter(c=>(r=c,!pr.includes(c))),[f=null]=s,l=wo(o),d=u(u({},ko(i)),{},{prefix:He(f,{family:l})});return u(u(u({},d),Co({values:e,family:l,styles:xe,config:h,canonical:d,givenPrefix:r})),Ao(n,r,d))}function Ao(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?Mr(a):{},i=Q(r,a);return a=o.iconName||i||a,r=o.prefix||r,r==="far"&&!xe.far&&xe.fas&&!h.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const So=_r.filter(e=>e!==E||e!==je),Po=Object.keys(it).filter(e=>e!==E).map(e=>Object.keys(it[e])).flat();function Co(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:i={}}=e,s=n===je,f=t.includes("fa-duotone")||t.includes("fad"),l=i.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(f||l||d)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&So.includes(n)&&(Object.keys(o).find(p=>Po.includes(p))||i.autoFetchSvg)){const p=Ea.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=Q(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=B()||"fas"),r}class No{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=u(u({},this.definitions[o]||{}),a[o]),pt(o,a[o]);const i=Rt[E][o];i&&pt(i,a[o]),Fr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],f=s[2];t[o]||(t[o]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(t[o][l]=s)}),t[o][i]=s}),t}}let _n=[],re={};const oe={},Oo=Object.keys(oe);function Eo(e,t){let{mixoutsTo:n}=t;return _n=e,re={},Object.keys(oe).forEach(r=>{Oo.indexOf(r)===-1&&delete oe[r]}),_n.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{re[i]||(re[i]=[]),re[i].push(o[i])})}r.provides&&r.provides(oe)}),n}function _t(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(re[e]||[]).forEach(i=>{t=i.apply(null,[t,...r])}),t}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(re[e]||[]).forEach(o=>{o.apply(null,n)})}function X(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return oe[e]?oe[e].apply(null,t):void 0}function ht(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||B();if(t)return t=Q(n,t)||t,dn(Rr.definitions,n,t)||dn(R.styles,n,t)}const Rr=new No,Io=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,ee("noAuto")},To={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(ee("beforeI2svg",e),X("pseudoElements2svg",e),X("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,mo(()=>{Mo({autoReplaceSvgRoot:t}),ee("watch",e)})}},Fo={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=He(e[0]);return{prefix:n,iconName:Q(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(h.cssPrefix,"-"))>-1||e.match(Qa))){const t=We(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||B(),iconName:Q(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=B();return{prefix:t,iconName:Q(t,e)||e}}}},I={noAuto:Io,config:h,dom:To,parse:Fo,library:Rr,findIconDefinition:ht,toHtml:Pe},Mo=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=A}=e;(Object.keys(R.styles).length>0||h.autoFetchSvg)&&W&&h.autoReplaceSvg&&I.dom.i2svg({node:t})};function Ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Pe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!W)return;const n=A.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Lo(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if($t(i)&&n.found&&!r.found){const{width:s,height:f}=n,l={x:s/f/2,y:.5};a.style=Ue(u(u({},o),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ro(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const i=o===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:i}),children:r}]}]}function Ut(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:f,titleId:l,extra:d,watchable:c=!1}=e,{width:p,height:_}=n.found?n:t,w=La.includes(r),S=[h.replacementClass,a?"".concat(h.cssPrefix,"-").concat(a):""].filter(O=>d.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(d.classes).join(" ");let b={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":a,class:S,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)})};const y=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};c&&(b.attributes[Z]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(l||be())},children:[s]}),delete b.attributes.title);const g=u(u({},b),{},{prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:o,symbol:i,styles:u(u({},y),d.styles)}),{children:C,attributes:N}=n.found&&t.found?X("generateAbstractMask",g)||{children:[],attributes:{}}:X("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=C,g.attributes=N,i?Ro(g):Lo(g)}function hn(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=e,f=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(f[Z]="");const l=u({},i.styles);$t(a)&&(l.transform=co({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const d=Ue(l);d.length>0&&(f.style=d);const c=[];return c.push({tag:"span",attributes:f,children:[t]}),o&&c.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),c}function Do(e){const{content:t,title:n,extra:r}=e,a=u(u(u({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ue(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Je}=R;function gt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(qe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(qe.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(qe.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const $o={found:!1,width:512,height:512};function zo(e,t){!vr&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function yt(e,t){let n=t;return t==="fa"&&h.styleDefault!==null&&(t=B()),new Promise((r,a)=>{if(n==="fa"){const o=Mr(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Je[t]&&Je[t][e]){const o=Je[t][e];return r(gt(o))}zo(e,t),r(u(u({},$o),{},{icon:h.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}const gn=()=>{},vt=h.measurePerformance&&Ne&&Ne.mark&&Ne.measure?Ne:{mark:gn,measure:gn},pe='FA "6.7.2"',jo=e=>(vt.mark("".concat(pe," ").concat(e," begins")),()=>Dr(e)),Dr=e=>{vt.mark("".concat(pe," ").concat(e," ends")),vt.measure("".concat(pe," ").concat(e),"".concat(pe," ").concat(e," begins"),"".concat(pe," ").concat(e," ends"))};var Ht={begin:jo,end:Dr};const Ie=()=>{};function yn(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function Uo(e){const t=e.getAttribute?e.getAttribute(Mt):null,n=e.getAttribute?e.getAttribute(Lt):null;return t&&n}function Ho(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function Wo(){return h.autoReplaceSvg===!0?Te.replace:Te[h.autoReplaceSvg]||Te.replace}function Yo(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function Vo(e){return A.createElement(e)}function $r(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Yo:Vo}=t;if(typeof e=="string")return A.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild($r(o,{ceFn:n}))}),r}function Go(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Te={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore($r(n),t)}),t.getAttribute(Z)===null&&h.keepOriginalSource){let n=A.createComment(Go(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Dt(t).indexOf(h.replacementClass))return Te.replace(e);const r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===h.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>Pe(o)).join(`
`);t.setAttribute(Z,""),t.innerHTML=a}};function vn(e){e()}function zr(e,t){const n=typeof t=="function"?t:Ie;if(e.length===0)n();else{let r=vn;h.mutateApproach===Xa&&(r=G.requestAnimationFrame||vn),r(()=>{const a=Wo(),o=Ht.begin("mutate");e.map(a),o(),n()})}}let Wt=!1;function jr(){Wt=!0}function bt(){Wt=!1}let Re=null;function bn(e){if(!on||!h.observeMutations)return;const{treeCallback:t=Ie,nodeCallback:n=Ie,pseudoElementsCallback:r=Ie,observeMutationsRoot:a=A}=e;Re=new on(o=>{if(Wt)return;const i=B();ue(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!yn(s.addedNodes[0])&&(h.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&h.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&yn(s.target)&&~eo.indexOf(s.attributeName))if(s.attributeName==="class"&&Uo(s.target)){const{prefix:f,iconName:l}=We(Dt(s.target));s.target.setAttribute(Mt,f||i),l&&s.target.setAttribute(Lt,l)}else Ho(s.target)&&n(s.target)})}),W&&Re.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Bo(){Re&&Re.disconnect()}function Xo(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function qo(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=We(Dt(e));return a.prefix||(a.prefix=B()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=bo(a.prefix,e.innerText)||jt(a.prefix,mt(e.innerText))),!a.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ko(e){const t=ue(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return h.autoA11y&&(n?t["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||be()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=qo(e),o=Ko(e),i=_t("parseNodeAttributes",{},e);let s=t.styleParser?Xo(e):[];return u({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},i)}const{styles:Jo}=R;function Ur(e){const t=h.autoReplaceSvg==="nest"?xn(e,{styleParser:!1}):xn(e);return~t.extra.classes.indexOf(xr)?X("generateLayersText",e,t):X("generateSvgReplacementMutation",e,t)}function Zo(){return[...Ta,...st]}function wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();const n=A.documentElement.classList,r=d=>n.add("".concat(cn,"-").concat(d)),a=d=>n.remove("".concat(cn,"-").concat(d)),o=h.autoFetchSvg?Zo():pr.concat(Object.keys(Jo));o.includes("fa")||o.push("fa");const i=[".".concat(xr,":not([").concat(Z,"])")].concat(o.map(d=>".".concat(d,":not([").concat(Z,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=ue(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const f=Ht.begin("onTree"),l=s.reduce((d,c)=>{try{const p=Ur(c);p&&d.push(p)}catch(p){vr||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,c)=>{Promise.all(l).then(p=>{zr(p,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),d()})}).catch(p=>{f(),c(p)})})}function ei(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ur(e).then(n=>{n&&zr([n],t)})}function ti(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:ht(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:ht(a||{})),e(r,u(u({},n),{},{mask:a}))}}const ni=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:f=[],attributes:l={},styles:d={}}=t;if(!e)return;const{prefix:c,iconName:p,icon:_}=e;return Ye(u({type:"icon"},e),()=>(ee("beforeDOMElementCreation",{iconDefinition:e,params:t}),h.autoA11y&&(i?l["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(s||be()):(l["aria-hidden"]="true",l.focusable="false")),Ut({icons:{main:gt(_),mask:a?gt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:c,iconName:p,transform:u(u({},L),n),symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:d,classes:f}})))};var ri={mixout(){return{icon:ti(ni)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=wn,e.nodeCallback=ei,e}}},provides(e){e.i2svg=function(t){const{node:n=A,callback:r=()=>{}}=t;return wn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:f,mask:l,maskId:d,extra:c}=n;return new Promise((p,_)=>{Promise.all([yt(r,i),l.iconName?yt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[S,b]=w;p([t,Ut({icons:{main:S,mask:b},prefix:i,iconName:r,transform:s,symbol:f,maskId:d,title:a,titleId:o,extra:c,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:i}=t;const s=Ue(i);s.length>0&&(r.style=s);let f;return $t(o)&&(f=X("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},ai={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ye({type:"layer"},()=>{ee("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},oi={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return Ye({type:"counter",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),Do({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(h.cssPrefix,"-layers-counter"),...r]}})))}}}},ii={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return Ye({type:"text",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),hn({content:e,transform:u(u({},L),n),title:r,extra:{attributes:o,styles:i,classes:["".concat(h.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(dr){const f=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();i=l.width/f,s=l.height/f}return h.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,hn({content:t.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const si=new RegExp('"',"ug"),kn=[1105920,1112319],An=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Oa),Ga),za),xt=Object.keys(An).reduce((e,t)=>(e[t.toLowerCase()]=An[t],e),{}),li=Object.keys(xt).reduce((e,t)=>{const n=xt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ci(e){const t=e.replace(si,""),n=_o(t,0),r=n>=kn[0]&&n<=kn[1],a=t.length===2?t[0]===t[1]:!1;return{value:mt(a?t[0]:t),isSecondary:r||a}}function fi(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(xt[n]||{})[a]||li[n]}function Sn(e,t){const n="".concat(Ba).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const i=ue(e.children).filter(p=>p.getAttribute(ct)===t)[0],s=G.getComputedStyle(e,t),f=s.getPropertyValue("font-family"),l=f.match(Ja),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&c!=="none"&&c!==""){const p=s.getPropertyValue("content");let _=fi(f,d);const{value:w,isSecondary:S}=ci(p),b=l[0].startsWith("FontAwesome");let y=jt(_,w),g=y;if(b){const C=xo(w);C.iconName&&C.prefix&&(y=C.iconName,_=C.prefix)}if(y&&!S&&(!i||i.getAttribute(Mt)!==_||i.getAttribute(Lt)!==g)){e.setAttribute(n,g),i&&e.removeChild(i);const C=Qo(),{extra:N}=C;N.attributes[ct]=t,yt(y,_).then(O=>{const q=Ut(u(u({},C),{},{icons:{main:O,mask:Lr()},prefix:_,iconName:g,extra:N,watchable:!0})),te=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(te,e.firstChild):e.appendChild(te),te.outerHTML=q.map(ne=>Pe(ne)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ui(e){return Promise.all([Sn(e,"::before"),Sn(e,"::after")])}function di(e){return e.parentNode!==document.head&&!~qa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ct)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pn(e){if(W)return new Promise((t,n)=>{const r=ue(e.querySelectorAll("*")).filter(di).map(ui),a=Ht.begin("searchPseudoElements");jr(),Promise.all(r).then(()=>{a(),bt(),t()}).catch(()=>{a(),bt(),n()})})}var mi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Pn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=A}=t;h.searchPseudoElements&&Pn(n)}}};let Cn=!1;var pi={mixout(){return{dom:{unwatch(){jr(),Cn=!0}}}},hooks(){return{bootstrap(){bn(_t("mutationObserverCallbacks",{}))},noAuto(){Bo()},watch(e){const{observeMutationsRoot:t}=e;Cn?bt():bn(_t("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Nn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var _i={mixout(){return{parse:{transform:e=>Nn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Nn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(s," ").concat(f," ").concat(l)},c={transform:"translate(".concat(o/2*-1," -256)")},p={outer:i,inner:d,path:c};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),p.path)}]}]}}}};const Ze={x:0,y:0,width:"100%",height:"100%"};function On(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hi(e){return e.tag==="g"?e.children:[e]}var gi={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?We(n.split(" ").map(a=>a.trim())):Lr();return r.prefix||(r.prefix=B()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=t;const{width:f,icon:l}=a,{width:d,icon:c}=o,p=lo({transform:s,containerWidth:d,iconWidth:f}),_={tag:"rect",attributes:u(u({},Ze),{},{fill:"white"})},w=l.children?{children:l.children.map(On)}:{},S={tag:"g",attributes:u({},p.inner),children:[On(u({tag:l.tag,attributes:u(u({},l.attributes),p.path)},w))]},b={tag:"g",attributes:u({},p.outer),children:[S]},y="mask-".concat(i||be()),g="clip-".concat(i||be()),C={tag:"mask",attributes:u(u({},Ze),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:hi(c)},C]};return n.push(N,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(y,")")},Ze)}),{children:n,attributes:r}}}},yi={provides(e){let t=!1;G.matchMedia&&(t=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=u(u({},a),{},{attributeName:"opacity"}),i={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:u(u({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},vi={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},bi=[uo,ri,ai,oi,ii,mi,pi,_i,gi,yi,vi];Eo(bi,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;const wt=I.parse;I.findIconDefinition;I.toHtml;const xi=I.icon;I.layer;I.text;I.counter;function wi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hr={exports:{}},ki="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ai=ki,Si=Ai;function Wr(){}function Yr(){}Yr.resetWarningCache=Wr;var Pi=function(){function e(r,a,o,i,s,f){if(f!==Si){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Yr,resetWarningCache:Wr};return n.PropTypes=n,n};Hr.exports=Pi();var Ci=Hr.exports;const x=wi(Ci);function Vr(e,t){for(var n in t)e[n]=t[n];return e}function kt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Gr(e,t){var n=t(),r=J({t:{__:n,u:t}}),a=r[0].t,o=r[1];return Ae(function(){a.__=n,a.u=t,et(a)&&o({t:a})},[e,n,t]),$e(function(){return et(a)&&o({t:a}),e(function(){et(a)&&o({t:a})})},[e]),n}function et(e){var t,n,r=e.u,a=e.__;try{var o=r();return!((t=a)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}function Br(e){e()}function Xr(e){return e}function qr(){return[!1,Br]}var Kr=Ae;function At(e,t){this.props=e,this.context=t}function Ni(e,t){function n(a){var o=this.props.ref,i=o==a.ref;return!i&&o&&(o.call?o(null):o.current=null),t?!t(this.props,a)||!i:kt(this.props,a)}function r(a){return this.shouldComponentUpdate=n,z(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(At.prototype=new D).isPureReactComponent=!0,At.prototype.shouldComponentUpdate=function(e,t){return kt(this.props,e)||kt(this.state,t)};var En=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),En&&En(e)};var Oi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ei(e){function t(n){var r=Vr({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Oi,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var In=function(e,t){return e==null?null:$($(e).map(t))},Ii={map:In,forEach:In,count:function(e){return e?$(e).length:0},only:function(e){var t=$(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:$},Ti=v.__e;v.__e=function(e,t,n,r){if(e.then){for(var a,o=t;o=o.__;)if((a=o.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}Ti(e,t,n,r)};var Tn=v.unmount;function Qr(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Vr({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Qr(r,t,n)})),e}function Jr(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Jr(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Fe(){this.__u=0,this.o=null,this.__b=null}function Zr(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Fi(e){var t,n,r;function a(o){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return z(n,o)}return a.displayName="Lazy",a.__f=!0,a}function _e(){this.i=null,this.l=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Tn&&Tn(e)},(Fe.prototype=new D).__c=function(e,t){var n=t.__c,r=this;r.o==null&&(r.o=[]),r.o.push(n);var a=Zr(r.__v),o=!1,i=function(){o||(o=!0,n.__R=null,a?a(s):s())};n.__R=i;var s=function(){if(!--r.__u){if(r.state.__a){var f=r.state.__a;r.__v.__k[0]=Jr(f,f.__c.__P,f.__c.__O)}var l;for(r.setState({__a:r.__b=null});l=r.o.pop();)l.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},Fe.prototype.componentWillUnmount=function(){this.o=[]},Fe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Qr(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__a&&z(j,null,e.fallback);return a&&(a.__u&=-33),[z(j,null,t.__a?null:e.children),a]};var Fn=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Mi(e){return this.getChildContext=function(){return e.context},e.children}function Li(e){var t=this,n=e.h;t.componentWillUnmount=function(){se(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return!0},appendChild:function(r){this.childNodes.push(r),t.h.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),t.h.insertBefore(r,a)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.h.removeChild(r)}}),se(z(Mi,{context:t.context},e.__v),t.v)}function Ri(e,t){var n=z(Li,{__v:e,h:t});return n.containerInfo=t,n}(_e.prototype=new D).__a=function(e){var t=this,n=Zr(t.__v),r=t.l.get(e);return r[0]++,function(a){var o=function(){t.props.revealOrder?(r.push(a),Fn(t,e,r)):a()};n?n(o):o()}},_e.prototype.render=function(e){this.i=null,this.l=new Map;var t=$(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},_e.prototype.componentDidUpdate=_e.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Fn(e,n,t)})};var ea=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Di=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$i=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,zi=/[A-Z0-9]/g,ji=typeof document<"u",Ui=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Hi(e,t,n){return t.__k==null&&(t.textContent=""),se(e,t),typeof n=="function"&&n(),e?e.__c:null}function Wi(e,t,n){return er(e,t),typeof n=="function"&&n(),e?e.__c:null}D.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(D.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Mn=v.event;function Yi(){}function Vi(){return this.cancelBubble}function Gi(){return this.defaultPrevented}v.event=function(e){return Mn&&(e=Mn(e)),e.persist=Yi,e.isPropagationStopped=Vi,e.isDefaultPrevented=Gi,e.nativeEvent=e};var Yt,Bi={enumerable:!1,configurable:!0,get:function(){return this.class}},Ln=v.vnode;v.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,a={},o=r.indexOf("-")===-1;for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||ji&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var f=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":f==="translate"&&s==="no"?s=!1:f[0]==="o"&&f[1]==="n"?f==="ondoubleclick"?i="ondblclick":f!=="onchange"||r!=="input"&&r!=="textarea"||Ui(n.type)?f==="onfocus"?i="onfocusin":f==="onblur"?i="onfocusout":$i.test(i)&&(i=f):f=i="oninput":o&&Di.test(i)?i=i.replace(zi,"-$&").toLowerCase():s===null&&(s=void 0),f==="oninput"&&a[i=f]&&(i="oninputCapture"),a[i]=s}}r=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=$(n.children).forEach(function(l){l.props.selected=a.value.indexOf(l.props.value)!=-1})),r=="select"&&a.defaultValue!=null&&(a.value=$(n.children).forEach(function(l){l.props.selected=a.multiple?a.defaultValue.indexOf(l.props.value)!=-1:a.defaultValue==l.props.value})),n.class&&!n.className?(a.class=n.class,Object.defineProperty(a,"className",Bi)):(n.className&&!n.class||n.class&&n.className)&&(a.class=a.className=n.className),t.props=a}(e),e.$$typeof=ea,Ln&&Ln(e)};var Rn=v.__r;v.__r=function(e){Rn&&Rn(e),Yt=e.__c};var Dn=v.diffed;v.diffed=function(e){Dn&&Dn(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Yt=null};var Xi={ReactCurrentDispatcher:{current:{readContext:function(e){return Yt.__n[e.__c].props.value},useCallback:ar,useContext:or,useDebugValue:ir,useDeferredValue:Xr,useEffect:$e,useId:sr,useImperativeHandle:rr,useInsertionEffect:Kr,useLayoutEffect:Ae,useMemo:ze,useReducer:It,useRef:nr,useState:J,useSyncExternalStore:Gr,useTransition:qr}}};function qi(e){return z.bind(null,e)}function Ve(e){return!!e&&e.$$typeof===ea}function Ki(e){return Ve(e)&&e.type===j}function Qi(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Ji(e){return Ve(e)?ua.apply(null,arguments):e}function Zi(e){return!!e.__k&&(se(null,e),!0)}function es(e){return e&&(e.base||e.nodeType===1&&e)||null}var ts=function(e,t){return e(t)},ns=function(e,t){return e(t)},rs=j,as=Ve,ta={useState:J,useId:sr,useReducer:It,useEffect:$e,useLayoutEffect:Ae,useInsertionEffect:Kr,useTransition:qr,useDeferredValue:Xr,useSyncExternalStore:Gr,startTransition:Br,useRef:nr,useImperativeHandle:rr,useMemo:ze,useCallback:ar,useContext:or,useDebugValue:ir,version:"18.3.1",Children:Ii,render:Hi,hydrate:Wi,unmountComponentAtNode:Zi,createPortal:Ri,createElement:z,createContext:da,createFactory:qi,cloneElement:Ji,createRef:ia,Fragment:j,isValidElement:Ve,isElement:as,isFragment:Ki,isMemo:Qi,findDOMNode:es,Component:D,PureComponent:At,memo:Ni,forwardRef:Ei,flushSync:ns,unstable_batchedUpdates:ts,StrictMode:rs,Suspense:Fe,SuspenseList:_e,lazy:Fi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Xi};function $n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$n(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$n(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function De(e){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De(e)}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function os(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function is(e,t){if(e==null)return{};var n=os(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function St(e){return ss(e)||ls(e)||cs(e)||fs()}function ss(e){if(Array.isArray(e))return Pt(e)}function ls(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cs(e,t){if(e){if(typeof e=="string")return Pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(e,t)}}function Pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function us(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,f=e.spin,l=e.spinPulse,d=e.spinReverse,c=e.pulse,p=e.fixedWidth,_=e.inverse,w=e.border,S=e.listItem,b=e.flip,y=e.size,g=e.rotation,C=e.pull,N=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":d,"fa-spin-pulse":l,"fa-pulse":c,"fa-fw":p,"fa-inverse":_,"fa-border":w,"fa-li":S,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ae(t,"fa-".concat(y),typeof y<"u"&&y!==null),ae(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),ae(t,"fa-pull-".concat(C),typeof C<"u"&&C!==null),ae(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(N).map(function(O){return N[O]?O:null}).filter(function(O){return O})}function ds(e){return e=e-0,e===e}function na(e){return ds(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ms=["style"];function ps(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _s(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=na(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[ps(a)]=o:t[a]=o,t},{})}function ra(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return ra(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,l){var d=t.attributes[l];switch(l){case"class":f.attrs.className=d,delete t.attributes.class;break;case"style":f.attrs.style=_s(d);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=d:f.attrs[na(l)]=d}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=is(n,ms);return a.attrs.style=F(F({},a.attrs.style),i),e.apply(void 0,[t.tag,F(F({},a.attrs),s)].concat(St(r)))}var aa=!1;try{aa=!0}catch{}function hs(){if(!aa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zn(e){if(e&&De(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wt.icon)return wt.icon(e);if(e===null)return null;if(e&&De(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function tt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ae({},e,t):{}}var jn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ge=ta.forwardRef(function(e,t){var n=F(F({},jn),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,f=n.titleId,l=n.maskId,d=zn(r),c=tt("classes",[].concat(St(us(n)),St((i||"").split(" ")))),p=tt("transform",typeof n.transform=="string"?wt.transform(n.transform):n.transform),_=tt("mask",zn(a)),w=xi(d,F(F(F(F({},c),p),_),{},{symbol:o,title:s,titleId:f,maskId:l}));if(!w)return hs("Could not find icon",d),null;var S=w.abstract,b={ref:t};return Object.keys(n).forEach(function(y){jn.hasOwnProperty(y)||(b[y]=n[y])}),gs(S[0],b)});Ge.displayName="FontAwesomeIcon";Ge.propTypes={beat:x.bool,border:x.bool,beatFade:x.bool,bounce:x.bool,className:x.string,fade:x.bool,flash:x.bool,mask:x.oneOfType([x.object,x.array,x.string]),maskId:x.string,fixedWidth:x.bool,inverse:x.bool,flip:x.oneOf([!0,!1,"horizontal","vertical","both"]),icon:x.oneOfType([x.object,x.array,x.string]),listItem:x.bool,pull:x.oneOf(["right","left"]),pulse:x.bool,rotation:x.oneOf([0,90,180,270]),shake:x.bool,size:x.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.bool,spinPulse:x.bool,spinReverse:x.bool,symbol:x.oneOfType([x.bool,x.string]),title:x.string,titleId:x.string,transform:x.oneOfType([x.string,x.object]),swapOpacity:x.bool};var gs=ra.bind(null,ta.createElement);const ys=({title:e,icon:t,link:n})=>m("a",{href:n,target:"_blank",title:e,className:"p-1",children:m(Ge,{icon:t,size:"lg"})});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const vs={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},bs={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},xs={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},ws=[{title:"LinkedIn",url:"https://www.linkedin.com/in/adrian-rampy-1b8924198/",icon:ya},{title:"GitHub",url:"https://github.com/ahrampy",icon:va},{title:"Resume",url:"https://docs.google.com/document/d/1NmOAfy1hJpbXuEPgVQ2vwncQM52VaudWlLqLtX6H5X8/export?format=pdf",icon:bs}],ks=()=>m("div",{className:"flex h-fit w-full flex-col gap-4",children:m("div",{children:[m("div",{className:"flex flex-col items-center justify-center gap-x-2 sm:flex-row sm:justify-start",children:[m("h1",{className:"text-4xl",children:"Adrian Rampy"}),m("div",{className:"flex gap-1",children:ws.map(({title:e,url:t,icon:n})=>m(ys,{title:e,link:t,icon:n}))})]}),m("h2",{className:"px-4 text-xl sm:px-0",children:"Engineering Leader • Front-End Focused • Experience-Centric Developer"})]})}),Un=({title:e,content:t,startsExpanded:n=!1})=>{const[r,a]=J(n);return m("div",{className:`flex w-full flex-col gap-2 rounded border border-secondary dark:border-primary ${r?"border-t-0 pt-px":""}`,children:[m("button",{className:"px-4 py-2",onClick:()=>a(!r),children:m("h3",{class:"flex items-center justify-center gap-2 text-xl sm:justify-start",children:[m(Ge,{icon:r?xs:vs,className:"hidden sm:block"}),m("span",{children:e})]})}),m("p",{className:`px-10 pb-6 ${r?"":"hidden"}`,children:t})]})},As=()=>m("div",{className:"flex w-full h-full flex-col gap-4 overflow-hidden pb-4",children:[m(Un,{title:"About Me",startsExpanded:!0,content:"I've always loved building things, whether it is an app, furniture, or going wild with a box of Legos. My journey into software began with designing simple web pages, and over time it grew into a full-blown passion for creating thoughtful, user-centered experiences. I've taught, mentored, and led engineering teams, and I thrive when combining technical execution with human connection. When I'm not coding, I'm probably exploring outside, sharing food with friends, or learning a new game."}),m(Un,{title:"Skills",content:m("div",{className:"",children:m("ul",{className:"space-y-4",children:[m("li",{children:[m("h4",{className:"text-l mb-2",children:"Frontend Development"}),m("ul",{className:"list-inside list-disc space-y-1",children:[m("li",{children:"Languages & Frameworks: React, React Native, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Ag-Grid"}),m("li",{children:"Design Systems & UI Libraries: Custom UI components, enterprise design systems, accessibility (ARIA), responsive/mobile-first design"}),m("li",{children:"Testing & QA: Jest, Cypress, unit/integration/e2e testing, CI-driven testing workflows"})]})]}),m("li",{children:[m("h4",{className:"text-l mb-2",children:"Backend & Full Stack"}),m("ul",{className:"list-inside list-disc space-y-1",children:[m("li",{children:"Languages & Frameworks: Node.js, Express, Koa, Ruby on Rails"}),m("li",{children:"Databases: PostgreSQL, Sequelize"}),m("li",{children:"Real-time & Cloud Infrastructure: Socket.io, Redis, Google Cloud Platform, AWS, Cloud Functions, Docker"}),m("li",{children:"API Design: REST, GraphQL"})]})]}),m("li",{children:[m("h4",{className:"text-l mb-2",children:"Architecture & Patterns"}),m("ul",{className:"list-inside list-disc space-y-1",children:[m("li",{children:"Micro Frontend Architecture"}),m("li",{children:"Monorepo & modular design"}),m("li",{children:"Cloud-based architecture & deployment pipelines"}),m("li",{children:"Internationalization (i18n) and localization (l10n)"}),m("li",{children:"Performance optimization and codebase modernization"})]})]}),m("li",{children:[m("h4",{className:"text-l mb-2",children:"Leadership & Collaboration"}),m("ul",{className:"list-inside list-disc space-y-1",children:[m("li",{children:"Technical leadership and roadmap planning"}),m("li",{children:"Cross-functional collaboration with product, design, and business teams"}),m("li",{children:"Mentorship, coaching, and performance review cycles"}),m("li",{children:"Hiring, onboarding, and team-building"}),m("li",{children:"1:1s, career development support, and engineering culture cultivation"})]})]}),m("li",{children:[m("h4",{className:"text-l mb-2",children:"Dev Tools & Miscellaneous"}),m("ul",{className:"list-inside list-disc space-y-1",children:[m("li",{children:"Git, GitHub, GitHub Actions"}),m("li",{children:"Docker, CLI tools, VS Code"}),m("li",{children:"Stripe integration"}),m("li",{children:"Agile & sprint planning tools (Jira, Notion, etc.)"})]})]})]})})})]});function Ss(){return m(ga,{children:[m(ks,{}),m(As,{})]})}se(m(Ss,{}),document.getElementById("app"));
