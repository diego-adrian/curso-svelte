var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t){return null==t?"":t}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),f=c?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&f(p)}function h(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e,n){t.classList[n?"add":"remove"](e)}const E=new Set;let z,A=0;function M(t,e,n,r,o,l,s,u=0){const i=16.666/r;let c="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*l(t);c+=100*t+`%{${s(r,1-r)}}\n`}const a=c+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${u}`,d=t.ownerDocument;E.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild($("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${o}ms 1 both`,A+=1,f}function O(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),A-=o,A||f((()=>{A||(E.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),E.clear())})))}function C(t){z=t}function S(t){(function(){if(!z)throw new Error("Function called outside component initialization");return z})().$$.on_mount.push(t)}const P=[],j=[],q=[],L=[],F=Promise.resolve();let N=!1;function R(t){q.push(t)}let T=!1;const D=new Set;function Z(){if(!T){T=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];C(e),K(e.$$)}for(C(null),P.length=0;j.length;)j.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];D.has(e)||(D.add(e),e())}q.length=0}while(P.length);for(;L.length;)L.pop()();N=!1,T=!1,D.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let Q;function V(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const W=new Set;let X;function B(){X={r:0,c:[],p:X}}function G(){X.r||o(X.c),X=X.p}function H(t,e){t&&t.i&&(W.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const J={duration:0};function U(n,r,s,u){let i=r(n,s),c=u?0:1,h=null,m=null,g=null;function $(){g&&O(n,g)}function v(t,e){const n=t.b-c;return e*=Math.abs(n),{a:c,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(r){const{delay:l=0,duration:s=300,easing:u=e,tick:y=t,css:b}=i||J,w={start:a()+l,b:r};r||(w.group=X,X.r+=1),h||m?m=w:(b&&($(),g=M(n,c,r,s,l,u,b)),r&&y(0,1),h=v(w,s),R((()=>V(n,r,"start"))),function(t){let e;0===d.size&&f(p),new Promise((n=>{d.add(e={c:t,f:n})}))}((t=>{if(m&&t>m.start&&(h=v(m,s),m=null,V(n,h.b,"start"),b&&($(),g=M(n,c,h.b,h.duration,0,u,i.css))),h)if(t>=h.end)y(c=h.b,1-c),V(n,h.b,"end"),m||(h.b?$():--h.group.r||o(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;c=h.a+h.d*u(e/h.duration),y(c,1-c)}return!(!h&&!m)})))}return{run(t){l(i)?(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then((()=>{i=i(),y(t)})):y(t)},end(){$(),h=m=null}}}function Y(t,e){I(t,1,1,(()=>{e.delete(t.key)}))}function tt(t){t&&t.c()}function et(t,e,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,r),R((()=>{const e=u.map(n).filter(l);i?i.push(...e):o(e),t.$$.on_mount=[]})),c.forEach(R)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(P.push(t),N||(N=!0,F.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,l,s,u,i,c=[-1]){const a=z;C(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:c,skip_bound:!1};let p=!1;if(d.ctx=l?l(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&rt(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),et(e,n.target,n.anchor),Z()}C(a)}class lt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];const ut=function(e,n=t){let r;const o=[];function l(t){if(s(e,t)&&(e=t,r)){const t=!st.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,u=t){const i=[s,u];return o.push(i),1===o.length&&(r=n(l)||t),s(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}({id:null,url:null,message:null,title:null,type:null,show:null,trailer:null,trailerActive:null,youtube:null});function it(t,{delay:n=0,duration:r=400,easing:o=e}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*l}}function ct(e){let n,r,o,l,s;return{c(){n=$("div"),n.textContent="Cerrar youtube",w(n,"class","more svelte-1ian5e3")},m(t,r){m(t,n,r),o=!0,l||(s=b(n,"click",e[2]),l=!0)},p:t,i(t){o||(R((()=>{r||(r=U(n,it,{},!0)),r.run(1)})),o=!0)},o(t){r||(r=U(n,it,{},!1)),r.run(0),o=!1},d(t){t&&g(n),t&&r&&r.end(),l=!1,s()}}}function at(t){let e,n,r,o,l,s,u,i,c,a,f,d=t[0].title+"",p=t[0].youtube&&ct(t);return{c(){e=$("div"),n=$("div"),r=$("div"),o=$("div"),o.innerHTML='<i class="fab fa-youtube"></i>  <span>Ver trailer</span>',l=y(),s=$("div"),u=v(d),i=y(),p&&p.c(),w(o,"class","trailer"),w(s,"class","title svelte-1ian5e3"),w(r,"class","Portada-container svelte-1ian5e3"),w(n,"class","background svelte-1ian5e3"),k(n,"background","url("+t[0].url+") no-repeat"),w(e,"class","Portada svelte-1ian5e3")},m(d,g){m(d,e,g),h(e,n),h(n,r),h(r,o),h(r,l),h(r,s),h(s,u),h(r,i),p&&p.m(r,null),c=!0,a||(f=b(o,"click",t[1]),a=!0)},p(t,[e]){(!c||1&e)&&d!==(d=t[0].title+"")&&_(u,d),t[0].youtube?p?(p.p(t,e),1&e&&H(p,1)):(p=ct(t),p.c(),H(p,1),p.m(r,null)):p&&(B(),I(p,1,1,(()=>{p=null})),G()),(!c||1&e)&&k(n,"background","url("+t[0].url+") no-repeat")},i(t){c||(H(p),c=!0)},o(t){I(p),c=!1},d(t){t&&g(e),p&&p.d(),a=!1,f()}}}function ft(t,e,n){let r;return u(t,ut,(t=>n(0,r=t))),[r,function(){ut.update((t=>({...t,youtube:!0})))},function(){ut.update((t=>({...t,youtube:!1,trailer:t.trailerActive})))}]}class dt extends lt{constructor(t){super(),ot(this,t,ft,at,s,{})}}function pt(e){let n,r,o,l,s,u,i;return{c(){n=$("div"),r=$("figure"),o=$("img"),o.src!==(l=e[0].url)&&w(o,"src",l),w(o,"alt",s=e[0].title),w(o,"class","svelte-1whakzn"),w(r,"class","svelte-1whakzn"),x(r,"selected",e[0].id===e[1].id),x(r,"not-selected",e[0].id!==e[1].id),w(n,"class","Movie svelte-1whakzn")},m(t,l){m(t,n,l),h(n,r),h(r,o),u||(i=b(r,"click",e[2]),u=!0)},p(t,[e]){1&e&&o.src!==(l=t[0].url)&&w(o,"src",l),1&e&&s!==(s=t[0].title)&&w(o,"alt",s),3&e&&x(r,"selected",t[0].id===t[1].id),3&e&&x(r,"not-selected",t[0].id!==t[1].id)},i:t,o:t,d(t){t&&g(n),u=!1,i()}}}function ht(t,e,n){let r;u(t,ut,(t=>n(1,r=t)));let{movie:o}=e;return t.$$set=t=>{"movie"in t&&n(0,o=t.movie)},[o,r,function(){ut.update((t=>({...t,id:o.id,title:o.title,url:o.url})))}]}class mt extends lt{constructor(t){super(),ot(this,t,ht,pt,s,{movie:0})}}function gt(t,e,n){const r=t.slice();return r[1]=e[n],r}function $t(t,e){let n,r,o;return r=new mt({props:{movie:e[1]}}),{key:t,first:null,c(){n=v(""),tt(r.$$.fragment),this.first=n},m(t,e){m(t,n,e),et(r,t,e),o=!0},p(t,e){const n={};1&e&&(n.movie=t[1]),r.$set(n)},i(t){o||(H(r.$$.fragment,t),o=!0)},o(t){I(r.$$.fragment,t),o=!1},d(t){t&&g(n),nt(r,t)}}}function vt(t){let e,n,r,o=[],l=new Map,s=t[0];const u=t=>t[1].id;for(let e=0;e<s.length;e+=1){let n=gt(t,s,e),r=u(n);l.set(r,o[e]=$t(r,n))}return{c(){e=$("div"),n=$("div");for(let t=0;t<o.length;t+=1)o[t].c();w(n,"class","thumbnail-movies svelte-43q2t5"),w(e,"class","Thumbnail svelte-43q2t5")},m(t,l){m(t,e,l),h(e,n);for(let t=0;t<o.length;t+=1)o[t].m(n,null);r=!0},p(t,[e]){if(1&e){const r=t[0];B(),o=function(t,e,n,r,o,l,s,u,i,c,a,f){let d=t.length,p=l.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,v=new Map;for(h=p;h--;){const t=f(o,l,h),u=n(t);let i=s.get(u);i?r&&i.p(t,e):(i=c(u,t),i.c()),$.set(u,g[h]=i),u in m&&v.set(u,Math.abs(h-m[u]))}const y=new Set,b=new Set;function w(t){H(t,1),t.m(u,a),s.set(t.key,t),a=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(a=e.first,d--,p--):$.has(o)?!s.has(r)||y.has(r)?w(e):b.has(o)?d--:v.get(r)>v.get(o)?(b.add(r),w(e)):(y.add(o),d--):(i(n,s),d--)}for(;d--;){const e=t[d];$.has(e.key)||i(e,s)}for(;p;)w(g[p-1]);return g}(o,e,u,1,t,r,l,n,Y,$t,null,gt),G()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)H(o[t]);r=!0}},o(t){for(let t=0;t<o.length;t+=1)I(o[t]);r=!1},d(t){t&&g(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function yt(t,e,n){let{data:r=[]}=e;return t.$$set=t=>{"data"in t&&n(0,r=t.data)},[r]}class bt extends lt{constructor(t){super(),ot(this,t,yt,vt,s,{data:0})}}function wt(t){let e,n,r,o,l,s,u,c,a,f,d,p=t[0].title+"";return{c(){e=$("div"),n=$("div"),r=$("span"),o=v(p),l=y(),s=$("i"),w(r,"class","svelte-1xgyvw"),w(s,"class","fas fa-times close svelte-1xgyvw"),w(n,"class",u=i(t[0].type+" snackbar-container")+" svelte-1xgyvw"),w(e,"class","snackbar svelte-1xgyvw")},m(u,i){m(u,e,i),h(e,n),h(n,r),h(r,o),h(n,l),h(n,s),a=!0,f||(d=b(e,"click",t[1]),f=!0)},p(t,e){(!a||1&e)&&p!==(p=t[0].title+"")&&_(o,p),(!a||1&e&&u!==(u=i(t[0].type+" snackbar-container")+" svelte-1xgyvw"))&&w(n,"class",u)},i(t){a||(R((()=>{c||(c=U(e,it,{},!0)),c.run(1)})),a=!0)},o(t){c||(c=U(e,it,{},!1)),c.run(0),a=!1},d(t){t&&g(e),t&&c&&c.end(),f=!1,d()}}}function _t(t){let e,n,r=t[0].show&&wt(t);return{c(){e=$("div"),r&&r.c()},m(t,o){m(t,e,o),r&&r.m(e,null),n=!0},p(t,[n]){t[0].show?r?(r.p(t,n),1&n&&H(r,1)):(r=wt(t),r.c(),H(r,1),r.m(e,null)):r&&(B(),I(r,1,1,(()=>{r=null})),G())},i(t){n||(H(r),n=!0)},o(t){I(r),n=!1},d(t){t&&g(e),r&&r.d()}}}function kt(t,e,n){let r;return u(t,ut,(t=>n(0,r=t))),[r,function(){ut.update((t=>({...t,show:null,type:null,title:null})))}]}class xt extends lt{constructor(t){super(),ot(this,t,kt,_t,s,{})}}function Et(t){let e,n;return{c(){e=$("iframe"),w(e,"title","youtube"),w(e,"width","100%"),e.src!==(n="https://www.youtube.com/embed/"+t[0].trailer)&&w(e,"src",n),w(e,"frameborder","0"),w(e,"allow","autoplay; encrypted-media"),e.allowFullscreen=!0,w(e,"class","svelte-1wvhpaf")},m(t,n){m(t,e,n)},p(t,r){1&r&&e.src!==(n="https://www.youtube.com/embed/"+t[0].trailer)&&w(e,"src",n)},d(t){t&&g(e)}}}function zt(t){let e,n,r,o=t[0].youtube&&Et(t);return{c(){e=$("div"),o&&o.c()},m(t,n){m(t,e,n),o&&o.m(e,null),r=!0},p(t,[n]){t[0].youtube?o?o.p(t,n):(o=Et(t),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i(t){r||(R((()=>{n||(n=U(e,it,{},!0)),n.run(1)})),r=!0)},o(t){n||(n=U(e,it,{},!1)),n.run(0),r=!1},d(t){t&&g(e),o&&o.d(),t&&n&&n.end()}}}function At(t,e,n){let r;return u(t,ut,(t=>n(0,r=t))),[r]}class Mt extends lt{constructor(t){super(),ot(this,t,At,zt,s,{})}}function Ot(t,e,n){const r=t.slice();return r[2]=e[n],r}function Ct(e){let n,r,o=new Array(8),l=[];for(let t=0;t<o.length;t+=1)l[t]=Pt(Ot(e,o,t));return{c(){n=$("div"),r=$("div");for(let t=0;t<l.length;t+=1)l[t].c();w(r,"class","loader svelte-16g126z"),w(n,"class","loader-container svelte-16g126z")},m(t,e){m(t,n,e),h(n,r);for(let t=0;t<l.length;t+=1)l[t].m(r,null)},p:t,i:t,o:t,d(t){t&&g(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(l,t)}}}function St(e){let n,r,o,l;return r=new dt({}),{c(){n=$("div"),tt(r.$$.fragment)},m(t,e){m(t,n,e),et(r,n,null),l=!0},p:t,i(t){l||(H(r.$$.fragment,t),R((()=>{o||(o=U(n,it,{},!0)),o.run(1)})),l=!0)},o(t){I(r.$$.fragment,t),o||(o=U(n,it,{},!1)),o.run(0),l=!1},d(t){t&&g(n),nt(r),t&&o&&o.end()}}}function Pt(t){let e;return{c(){e=$("div"),w(e,"class","svelte-16g126z")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function jt(t){let e,n,r,o,l,s,u,i,c,a;n=new xt({}),o=new Mt({});const f=[St,Ct],d=[];function p(t,e){return t[0].length>0?0:1}return s=p(t),u=d[s]=f[s](t),c=new bt({props:{data:t[0]}}),{c(){e=$("main"),tt(n.$$.fragment),r=y(),tt(o.$$.fragment),l=y(),u.c(),i=y(),tt(c.$$.fragment),w(e,"class","svelte-16g126z")},m(t,u){m(t,e,u),et(n,e,null),h(e,r),et(o,e,null),h(e,l),d[s].m(e,null),h(e,i),et(c,e,null),a=!0},p(t,[n]){let r=s;s=p(t),s===r?d[s].p(t,n):(B(),I(d[r],1,1,(()=>{d[r]=null})),G(),u=d[s],u||(u=d[s]=f[s](t),u.c()),H(u,1),u.m(e,i));const o={};1&n&&(o.data=t[0]),c.$set(o)},i(t){a||(H(n.$$.fragment,t),H(o.$$.fragment,t),H(u),H(c.$$.fragment,t),a=!0)},o(t){I(n.$$.fragment,t),I(o.$$.fragment,t),I(u),I(c.$$.fragment,t),a=!1},d(t){t&&g(e),nt(n),nt(o),d[s].d(),nt(c)}}}function qt(t,e,n){let r=[];const o=["9hpWz0ZMFAo","3xk11d9hjp0","n1qhwqKZ1eY","kpVsn9oQip0","SLD9xzJ4oeU","yNXfOOL8824","An_NsOddM3o","ZQpWRenGF_w","823iAZOEKt8"];return S((async()=>{try{const t="https:"!=window.location.protocol?"http":"https";let e=await fetch(t+"://www.omdbapi.com/?s=avengers&apikey=f3abb031&plot=full");e=await e.json(),e=[...e.Search].reduce(((t,e)=>{const n={id:e.imdbID,url:e.Poster.replace("X300",""),title:e.Title};return t.push(n),t}),[]),e=e.map(((t,e)=>{const n=t;return n.trailer=o[e],n})),n(0,r=e);const l=r[0];ut.update((t=>({...t,id:l.id,url:l.url,title:l.title,trailer:l.trailer})))}catch(t){ut.update((e=>({...e,show:!0,type:"error",title:t.message})))}})),[r]}return new class extends lt{constructor(t){super(),ot(this,t,qt,jt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
