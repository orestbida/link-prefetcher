var e,o;e=this,o=function(e){'use strict';const o=()=>document.querySelectorAll('a'),t=e=>e.host===location.host&&e.pathname!==location.pathname,n=(e,o,t)=>e.addEventListener(o,t),f={};e.prefetchHover=(e=o(),s=!0)=>{let c=!1;const i=new XMLHttpRequest;for(const o of e)t(o)&&(n(o,'mouseenter',(()=>{const{href:e,pathname:t}=o;(!s||!f[t])&&(i.onload=i.onerror=()=>f[t]=!0,i.open('get',e),i.send(),c=!0)})),n(o,'mouseleave',(()=>{c&&i.abort(),c=!1})))},e.prefetchVisible=(e=o(),n=!0)=>{const s=new IntersectionObserver((e=>{for(const o of e)if(o.isIntersecting){const{href:e,pathname:t}=o.target;(!n||!f[t])&&fetch(e),s.unobserve(o.target),f[t]=!0}}));for(const o of e)t(o)&&s.observe(o)},e.prefetchedLinks=f},'object'==typeof exports&&'undefined'!=typeof module?o(exports):'function'==typeof define&&define.amd?define(['exports'],o):o((e='undefined'!=typeof globalThis?globalThis:e||self).LinkPrefetcher={});
