import{t as W,R as x,G as C,a5 as A,z as w,r as c,v as H,j as V}from"./index-DZVvjn2C.js";function R(e,s){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},R(e,s)}function $(e,s){e.prototype=Object.create(s.prototype),e.prototype.constructor=e,R(e,s)}function z(e){var s=W(e);return s&&s.defaultView||window}function Y(e,s){return z(e).getComputedStyle(e,s)}var Z=/([A-Z])/g;function B(e){return e.replace(Z,"-$1").toLowerCase()}var q=/^ms-/;function S(e){return B(e).replace(q,"-ms-")}var J=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function K(e){return!!(e&&J.test(e))}function P(e,s){var i="",r="";if(typeof s=="string")return e.style.getPropertyValue(S(s))||Y(e).getPropertyValue(S(s));Object.keys(s).forEach(function(n){var t=s[n];!t&&t!==0?e.style.removeProperty(S(n)):K(n)?r+=n+"("+t+") ":i+=S(n)+": "+t+";"}),r&&(i+="transform: "+r+";"),e.style.cssText+=";"+i}const k={disabled:!1},L=x.createContext(null);var Q=function(s){return s.scrollTop},g="unmounted",E="exited",v="entering",b="entered",D="exiting",f=function(e){$(s,e);function s(r,n){var t;t=e.call(this,r,n)||this;var a=n,o=a&&!a.isMounting?r.enter:r.appear,u;return t.appearStatus=null,r.in?o?(u=E,t.appearStatus=v):u=b:r.unmountOnExit||r.mountOnEnter?u=g:u=E,t.state={status:u},t.nextCallback=null,t}s.getDerivedStateFromProps=function(n,t){var a=n.in;return a&&t.status===g?{status:E}:null};var i=s.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(n){var t=null;if(n!==this.props){var a=this.state.status;this.props.in?a!==v&&a!==b&&(t=v):(a===v||a===b)&&(t=D)}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var n=this.props.timeout,t,a,o;return t=a=o=n,n!=null&&typeof n!="number"&&(t=n.exit,a=n.enter,o=n.appear!==void 0?n.appear:a),{exit:t,enter:a,appear:o}},i.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);a&&Q(a)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:g})},i.performEnter=function(n){var t=this,a=this.props.enter,o=this.context?this.context.isMounting:n,u=this.props.nodeRef?[o]:[C.findDOMNode(this),o],l=u[0],p=u[1],d=this.getTimeouts(),N=o?d.appear:d.enter;if(!n&&!a||k.disabled){this.safeSetState({status:b},function(){t.props.onEntered(l)});return}this.props.onEnter(l,p),this.safeSetState({status:v},function(){t.props.onEntering(l,p),t.onTransitionEnd(N,function(){t.safeSetState({status:b},function(){t.props.onEntered(l,p)})})})},i.performExit=function(){var n=this,t=this.props.exit,a=this.getTimeouts(),o=this.props.nodeRef?void 0:C.findDOMNode(this);if(!t||k.disabled){this.safeSetState({status:E},function(){n.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:D},function(){n.props.onExiting(o),n.onTransitionEnd(a.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(o)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},i.setNextCallback=function(n){var t=this,a=!0;return this.nextCallback=function(o){a&&(a=!1,t.nextCallback=null,n(o))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},i.onTransitionEnd=function(n,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),o=n==null&&!this.props.addEndListener;if(!a||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],l=u[0],p=u[1];this.props.addEndListener(l,p)}n!=null&&setTimeout(this.nextCallback,n)},i.render=function(){var n=this.state.status;if(n===g)return null;var t=this.props,a=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=A(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(L.Provider,{value:null},typeof a=="function"?a(n,o):x.cloneElement(x.Children.only(a),o))},s}(x.Component);f.contextType=L;f.propTypes={};function T(){}f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T};f.UNMOUNTED=g;f.EXITED=E;f.ENTERING=v;f.ENTERED=b;f.EXITING=D;function tt(e,s,i,r){if(r===void 0&&(r=!0),e){var n=document.createEvent("HTMLEvents");n.initEvent(s,i,r),e.dispatchEvent(n)}}function et(e){var s=P(e,"transitionDuration")||"",i=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*i}function nt(e,s,i){i===void 0&&(i=5);var r=!1,n=setTimeout(function(){r||tt(e,"transitionend",!0)},s+i),t=w(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(n),t()}}function rt(e,s,i,r){i==null&&(i=et(e)||0);var n=nt(e,i,r),t=w(e,"transitionend",s);return function(){n(),t()}}function M(e,s){const i=P(e,s)||"",r=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*r}function at(e,s){const i=M(e,"transitionDuration"),r=M(e,"transitionDelay"),n=rt(e,t=>{t.target===e&&(n(),s(t))},i+r)}function ot(e){e.offsetHeight}function it(e){return e&&"setState"in e?C.findDOMNode(e):e??null}const ut=x.forwardRef(({onEnter:e,onEntering:s,onEntered:i,onExit:r,onExiting:n,onExited:t,addEndListener:a,children:o,childRef:u,...l},p)=>{const d=c.useRef(null),N=H(d,u),y=m=>{N(it(m))},h=m=>O=>{m&&d.current&&m(d.current,O)},_=c.useCallback(h(e),[e]),I=c.useCallback(h(s),[s]),U=c.useCallback(h(i),[i]),j=c.useCallback(h(r),[r]),G=c.useCallback(h(n),[n]),X=c.useCallback(h(t),[t]),F=c.useCallback(h(a),[a]);return V.jsx(f,{ref:p,...l,onEnter:_,onEntered:U,onEntering:I,onExit:j,onExited:X,onExiting:G,addEndListener:F,nodeRef:d,children:typeof o=="function"?(m,O)=>o(m,{...O,ref:y}):x.cloneElement(o,{ref:y})})});export{v as E,ut as T,at as a,b,P as c,E as d,D as e,it as s,ot as t};
