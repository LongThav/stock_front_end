import{r as t,j as m,c as E}from"./index-DZVvjn2C.js";import{t as c,T as d,a as u,E as N,b as x}from"./TransitionWrapper-Cd-rcS5S.js";const R={[N]:"show",[x]:"show"},w=t.forwardRef(({className:n,children:a,transitionClasses:o={},onEnter:e,...l},f)=>{const i={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...l},p=t.useCallback((s,r)=>{c(s),e==null||e(s,r)},[e]);return m.jsx(d,{ref:f,addEndListener:u,...i,onEnter:p,childRef:a.ref,children:(s,r)=>t.cloneElement(a,{...r,className:E("fade",n,a.props.className,R[s],o[s])})})});w.displayName="Fade";export{w as F};
