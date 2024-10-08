(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{74697:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},27131:function(e){e.exports={style:{fontFamily:"'__Inter_e2171a', '__Inter_Fallback_e2171a'",fontStyle:"normal"},className:"__className_e2171a",variable:"__variable_e2171a"}},64998:function(e,t,n){"use strict";n.d(t,{aU:function(){return el},x8:function(){return ec},dk:function(){return eu},zt:function(){return ei},fC:function(){return ea},Dx:function(){return eo},l_:function(){return es}});var r,i=n(2265),s=n(54887),a=n(78149),o=n(1584),u=n(90976),l=n(98324),c=n(25171),d=n(75137),h=n(66486),f=n(57437),p="dismissableLayer.update",v=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),m=i.forwardRef((e,t)=>{var n,s;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:y,onInteractOutside:b,onDismiss:E,...C}=e,x=i.useContext(v),[P,T]=i.useState(null),O=null!==(s=null==P?void 0:P.ownerDocument)&&void 0!==s?s:null===(n=globalThis)||void 0===n?void 0:n.document,[,D]=i.useState({}),R=(0,o.e)(t,e=>T(e)),M=Array.from(x.layers),[N]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),q=M.indexOf(N),A=P?M.indexOf(P):-1,S=x.layersWithOutsidePointerEventsDisabled.size>0,L=A>=q,F=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,d.W)(e),s=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!s.current){let t=function(){g("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);s.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>s.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!L||n||(null==m||m(e),null==b||b(e),e.defaultPrevented||null==E||E())},O),k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,d.W)(e),s=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!s.current&&g("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==E||E())},O);return(0,h.e)(e=>{A!==x.layers.size-1||(null==l||l(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},O),i.useEffect(()=>{if(P)return u&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=O.body.style.pointerEvents,O.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(P)),x.layers.add(P),w(),()=>{u&&1===x.layersWithOutsidePointerEventsDisabled.size&&(O.body.style.pointerEvents=r)}},[P,O,u,x]),i.useEffect(()=>()=>{P&&(x.layers.delete(P),x.layersWithOutsidePointerEventsDisabled.delete(P),w())},[P,x]),i.useEffect(()=>{let e=()=>D({});return document.addEventListener(p,e),()=>document.removeEventListener(p,e)},[]),(0,f.jsx)(c.WV.div,{...C,ref:R,style:{pointerEvents:S?L?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,F.onPointerDownCapture)})});m.displayName="DismissableLayer";var y=i.forwardRef((e,t)=>{let n=i.useContext(v),r=i.useRef(null),s=(0,o.e)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,f.jsx)(c.WV.div,{...e,ref:s})});function w(){let e=new CustomEvent(p);document.dispatchEvent(e)}function g(e,t,n,r){let{discrete:i}=r,s=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),i?(0,c.jH)(s,a):s.dispatchEvent(a)}y.displayName="DismissableLayerBranch";var b=n(1336),E=i.forwardRef((e,t)=>{var n,r;let{container:a,...o}=e,[u,l]=i.useState(!1);(0,b.b)(()=>l(!0),[]);let d=a||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return d?s.createPortal((0,f.jsx)(c.WV.div,{...o,ref:t}),d):null});E.displayName="Portal";var C=e=>{var t,n;let r,a;let{present:u,children:l}=e,c=function(e){var t,n;let[r,a]=i.useState(),o=i.useRef({}),u=i.useRef(e),l=i.useRef("none"),[c,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return i.useEffect(()=>{let e=x(o.current);l.current="mounted"===c?e:"none"},[c]),(0,b.b)(()=>{let t=o.current,n=u.current;if(n!==e){let r=l.current,i=x(t);e?d("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==i?d("ANIMATION_OUT"):d("UNMOUNT"),u.current=e}},[e,d]),(0,b.b)(()=>{if(r){let e=e=>{let t=x(o.current).includes(e.animationName);e.target===r&&t&&s.flushSync(()=>d("ANIMATION_END"))},t=e=>{e.target===r&&(l.current=x(o.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:i.useCallback(e=>{e&&(o.current=getComputedStyle(e)),a(e)},[])}}(u),d="function"==typeof l?l({present:c.isPresent}):i.Children.only(l),h=(0,o.e)(c.ref,(r=null===(t=Object.getOwnPropertyDescriptor(d.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?d.ref:(r=null===(n=Object.getOwnPropertyDescriptor(d,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?d.props.ref:d.props.ref||d.ref);return"function"==typeof l||c.isPresent?i.cloneElement(d,{ref:h}):null};function x(e){return(null==e?void 0:e.animationName)||"none"}C.displayName="Presence";var P=n(91715),T=n(31725),O="ToastProvider",[D,R,M]=(0,u.B)("Toast"),[N,q]=(0,l.b)("Toast",[M]),[A,S]=N(O),L=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:s="right",swipeThreshold:a=50,children:o}=e,[u,l]=i.useState(null),[c,d]=i.useState(0),h=i.useRef(!1),p=i.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(O,"`. Expected non-empty `string`.")),(0,f.jsx)(D.Provider,{scope:t,children:(0,f.jsx)(A,{scope:t,label:n,duration:r,swipeDirection:s,swipeThreshold:a,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:i.useCallback(()=>d(e=>e+1),[]),onToastRemove:i.useCallback(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:o})})};L.displayName=O;var F="ToastViewport",k=["F8"],I="toast.viewportPause",j="toast.viewportResume",Q=i.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=k,label:s="Notifications ({hotkey})",...a}=e,u=S(F,n),l=R(n),d=i.useRef(null),h=i.useRef(null),p=i.useRef(null),v=i.useRef(null),m=(0,o.e)(t,v,u.onViewportChange),w=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=u.toastCount>0;i.useEffect(()=>{let e=e=>{var t;r.every(t=>e[t]||e.code===t)&&(null===(t=v.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),i.useEffect(()=>{let e=d.current,t=v.current;if(g&&e&&t){let n=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(I);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},r=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(j);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||r()},s=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",i),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",s),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[g,u.isClosePausedRef]);let b=i.useCallback(e=>{let{tabbingDirection:t}=e,n=l().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[l]);return i.useEffect(()=>{let e=v.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,i,s;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(r=h.current)||void 0===r||r.focus();return}let o=b({tabbingDirection:a?"backwards":"forwards"}),u=o.findIndex(e=>e===n);er(o.slice(u+1))?t.preventDefault():a?null===(i=h.current)||void 0===i||i.focus():null===(s=p.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[l,b]),(0,f.jsxs)(y,{ref:d,role:"region","aria-label":s.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&(0,f.jsx)(V,{ref:h,onFocusFromOutsideViewport:()=>{er(b({tabbingDirection:"forwards"}))}}),(0,f.jsx)(D.Slot,{scope:n,children:(0,f.jsx)(c.WV.ol,{tabIndex:-1,...a,ref:m})}),g&&(0,f.jsx)(V,{ref:p,onFocusFromOutsideViewport:()=>{er(b({tabbingDirection:"backwards"}))}})]})});Q.displayName=F;var _="ToastFocusProxy",V=i.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,s=S(_,n);return(0,f.jsx)(T.T,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=s.viewport)||void 0===t?void 0:t.contains(n))||r()}})});V.displayName=_;var W="Toast",K=i.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...o}=e,[u=!0,l]=(0,P.T)({prop:r,defaultProp:i,onChange:s});return(0,f.jsx)(C,{present:n||u,children:(0,f.jsx)(Z,{open:u,...o,ref:t,onClose:()=>l(!1),onPause:(0,d.W)(e.onPause),onResume:(0,d.W)(e.onResume),onSwipeStart:(0,a.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.M)(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:(0,a.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.M)(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),l(!1)})})})});K.displayName=W;var[U,H]=N(W,{onClose(){}}),Z=i.forwardRef((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:u,open:l,onClose:h,onEscapeKeyDown:p,onPause:v,onResume:y,onSwipeStart:w,onSwipeMove:g,onSwipeCancel:b,onSwipeEnd:E,...C}=e,x=S(W,n),[P,T]=i.useState(null),O=(0,o.e)(t,e=>T(e)),R=i.useRef(null),M=i.useRef(null),N=u||x.duration,q=i.useRef(0),A=i.useRef(N),L=i.useRef(0),{onToastAdd:F,onToastRemove:k}=x,Q=(0,d.W)(()=>{var e;(null==P?void 0:P.contains(document.activeElement))&&(null===(e=x.viewport)||void 0===e||e.focus()),h()}),_=i.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(L.current),q.current=new Date().getTime(),L.current=window.setTimeout(Q,e))},[Q]);i.useEffect(()=>{let e=x.viewport;if(e){let t=()=>{_(A.current),null==y||y()},n=()=>{let e=new Date().getTime()-q.current;A.current=A.current-e,window.clearTimeout(L.current),null==v||v()};return e.addEventListener(I,n),e.addEventListener(j,t),()=>{e.removeEventListener(I,n),e.removeEventListener(j,t)}}},[x.viewport,N,v,y,_]),i.useEffect(()=>{l&&!x.isClosePausedRef.current&&_(N)},[l,N,x.isClosePausedRef,_]),i.useEffect(()=>(F(),()=>k()),[F,k]);let V=i.useMemo(()=>P?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!r){if(i){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(P):null,[P]);return x.viewport?(0,f.jsxs)(f.Fragment,{children:[V&&(0,f.jsx)(B,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0,children:V}),(0,f.jsx)(U,{scope:n,onClose:Q,children:s.createPortal((0,f.jsx)(D.ItemSlot,{scope:n,children:(0,f.jsx)(m,{asChild:!0,onEscapeKeyDown:(0,a.M)(p,()=>{x.isFocusedToastEscapeKeyDownRef.current||Q(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,f.jsx)(c.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":x.swipeDirection,...C,ref:O,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==p||p(e.nativeEvent),e.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,Q()))}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{0===e.button&&(R.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{if(!R.current)return;let t=e.clientX-R.current.x,n=e.clientY-R.current.y,r=!!M.current,i=["left","right"].includes(x.swipeDirection),s=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,a=i?s(0,t):0,o=i?0:s(0,n),u="touch"===e.pointerType?10:2,l={x:a,y:o},c={originalEvent:e,delta:l};r?(M.current=l,et("toast.swipeMove",g,c,{discrete:!1})):en(l,x.swipeDirection,u)?(M.current=l,et("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(n)>u)&&(R.current=null)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=M.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),M.current=null,R.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};en(t,x.swipeDirection,x.swipeThreshold)?et("toast.swipeEnd",E,r,{discrete:!0}):et("toast.swipeCancel",b,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),B=e=>{let{__scopeToast:t,children:n,...r}=e,s=S(W,t),[a,o]=i.useState(!1),[u,l]=i.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,d.W)(e);(0,b.b)(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>o(!0)),i.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,f.jsx)(E,{asChild:!0,children:(0,f.jsx)(T.T,{...r,children:a&&(0,f.jsxs)(f.Fragment,{children:[s.label," ",n]})})})},X=i.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,f.jsx)(c.WV.div,{...r,ref:t})});X.displayName="ToastTitle";var z=i.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,f.jsx)(c.WV.div,{...r,ref:t})});z.displayName="ToastDescription";var G="ToastAction",Y=i.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,f.jsx)(ee,{altText:n,asChild:!0,children:(0,f.jsx)($,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(G,"`. Expected non-empty `string`.")),null)});Y.displayName=G;var J="ToastClose",$=i.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,i=H(J,n);return(0,f.jsx)(ee,{asChild:!0,children:(0,f.jsx)(c.WV.button,{type:"button",...r,ref:t,onClick:(0,a.M)(e.onClick,i.onClose)})})});$.displayName=J;var ee=i.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...i}=e;return(0,f.jsx)(c.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function et(e,t,n,r){let{discrete:i}=r,s=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),i?(0,c.jH)(s,a):s.dispatchEvent(a)}var en=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),i=Math.abs(e.y),s=r>i;return"left"===t||"right"===t?s&&r>n:!s&&i>n};function er(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var ei=L,es=Q,ea=K,eo=X,eu=z,el=Y,ec=$},8699:function(e,t,n){"use strict";n.d(t,{S:function(){return m}});var r=n(56298),i=n(2459),s=n(69948),a=n(49010),o=class extends a.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let s=t.queryKey,a=t.queryHash??(0,r.Rm)(s,t),o=this.get(a);return o||(o=new i.A({cache:this,queryKey:s,queryHash:a,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(s)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,r._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,r._x)(e,t)):t}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){s.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=n(43494),l=n(30924),c=class extends u.F{#t;#n;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){this.#r=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#i({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let t="pending"===this.state.status,n=!this.#r.canStart();try{if(!t){this.#i({type:"pending",variables:e,isPaused:n}),await this.#n.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#i({type:"pending",context:t,variables:e,isPaused:n})}let r=await this.#r.start();return await this.#n.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#n.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#i({type:"success",data:r}),r}catch(t){try{throw await this.#n.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#i({type:"error",error:t})}}finally{this.#n.runNext(this)}}#i(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:"updated",action:e})})}},d=class extends a.l{constructor(e={}){super(),this.config=e,this.#s=new Map,this.#a=Date.now()}#s;#a;build(e,t,n){let r=new c({mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){let t=h(e),n=this.#s.get(t)??[];n.push(e),this.#s.set(t,n),this.notify({type:"added",mutation:e})}remove(e){let t=h(e);if(this.#s.has(t)){let n=this.#s.get(t)?.filter(t=>t!==e);n&&(0===n.length?this.#s.delete(t):this.#s.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#s.get(h(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#s.get(h(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){s.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#s.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,r.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,r.X7)(e,t))}notify(e){s.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return s.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(r.ZT))))}};function h(e){return e.options.scope?.id??String(e.mutationId)}var f=n(34939),p=n(49937);function v(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}var m=class{#o;#n;#u;#l;#c;#d;#h;#f;constructor(e={}){this.#o=e.queryCache||new o,this.#n=e.mutationCache||new d,this.#u=e.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#h=f.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#f=p.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#h?.(),this.#h=void 0,this.#f?.(),this.#f=void 0)}isFetching(e){return this.#o.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#n.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),i=this.#o.build(this,n);return e.revalidateIfStale&&i.isStaleByTime((0,r.KC)(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return this.#o.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let i=this.defaultQueryOptions({queryKey:e}),s=this.#o.get(i.queryHash),a=s?.state.data,o=(0,r.SE)(t,a);if(void 0!==o)return this.#o.build(this,i).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return s.V.batch(()=>this.#o.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state}removeQueries(e){let t=this.#o;s.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#o,r={type:"active",...e};return s.V.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){let n={revert:!0,...t};return Promise.all(s.V.batch(()=>this.#o.findAll(e).map(e=>e.cancel(n)))).then(r.ZT).catch(r.ZT)}invalidateQueries(e={},t={}){return s.V.batch(()=>{if(this.#o.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){let n={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(s.V.batch(()=>this.#o.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(r.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(r.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let n=this.#o.build(this,t);return n.isStaleByTime((0,r.KC)(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(r.ZT).catch(r.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,n)=>{let i=async()=>{let n;let i=e.options,s=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},c=(0,r.cG)(e.options,e.fetchOptions),d=async(t,n,i)=>{if(u)return Promise.reject();if(null==n&&t.pages.length)return Promise.resolve(t);let s={queryKey:e.queryKey,pageParam:n,direction:i?"backward":"forward",meta:e.options.meta};l(s);let a=await c(s),{maxPages:o}=e.options,d=i?r.Ht:r.VX;return{pages:d(t.pages,a,o),pageParams:d(t.pageParams,n,o)}};if(s&&a.length){let e="backward"===s,t={pages:a,pageParams:o},r=(e?function(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}:v)(i,t);n=await d(t,r,e)}else{n=await d({pages:[],pageParams:[]},o[0]??i.initialPageParam);let e=t??a.length;for(let t=1;t<e;t++){let e=v(i,n);if(null==e)break;n=await d(n,e)}}return n};e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n):e.fetchFn=i}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(r.ZT).catch(r.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#n}getDefaultOptions(){return this.#u}setDefaultOptions(e){this.#u=e}setQueryDefaults(e,t){this.#l.set((0,r.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#l.values()],n={};return t.forEach(t=>{(0,r.to)(e,t.queryKey)&&(n={...n,...t.defaultOptions})}),n}setMutationDefaults(e,t){this.#c.set((0,r.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],n={};return t.forEach(t=>{(0,r.to)(e,t.mutationKey)&&(n={...n,...t.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#u.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,r.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===r.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#u.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#o.clear(),this.#n.clear()}}}}]);