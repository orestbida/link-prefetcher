var e,t;e=this,t=function(e){'use strict';const t=e=>e.host===location.host&&e.pathname!==location.pathname,o=e=>Array.from(e||document.querySelectorAll('a')).filter(t),n=(e,t,o)=>t.forEach((t=>e.addEventListener(t,o,{passive:!0}))),s={};e.prefetchHover=e=>{let t=!1;const f=new XMLHttpRequest;for(const c of o(e))n(c,['mouseenter','touchstart'],(()=>{const{href:e,pathname:o}=c;s[o]||(f.onload=f.onerror=()=>s[o]=!0,f.open('get',e),f.send(),t=!0)})),n(c,['mouseleave'],(()=>{t&&(t=!1,f.abort())}))},e.prefetchVisible=e=>{const t=new IntersectionObserver((e=>{for(const o of e)if(o.isIntersecting){const{href:e,pathname:n}=o.target;s[n]||(s[n]=!0,fetch(e)),t.unobserve(o.target)}}));o(e).forEach((e=>t.observe(e)))},e.prefetchedLinks=s},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).LinkPrefetcher={});
