/*!
* link-prefetcher 0.1.0
* https://github.com/orestbida/link-prefetcher
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t=(e='a:not([target="_blank"]):not([href^="#"])')=>document.querySelectorAll(e),o=e=>e.host===location.host&&e.pathname!==location.pathname,n={};e.prefetchHover=(e,s=!0)=>{let f=!1;const c=new XMLHttpRequest;(e||t()).forEach((e=>{o(e)&&(e.addEventListener('mouseenter',(()=>{const{href:t}=e;(!s||!n[t])&&(c.onload=c.onerror=()=>n[t]=!0,c.open('GET',t,!0),c.send(),f=!0)})),e.addEventListener('mouseleave',(()=>{f&&c.abort(),f=!1})))}))},e.prefetchVisible=(e,s=!0)=>{const f=new IntersectionObserver((e=>{for(const t of e){const{href:e}=t.target;t.isIntersecting&&((!s||!n[e])&&fetch(e),f.unobserve(t.target),n[e]=!0)}}));for(const n of e||t())o(n)&&f.observe(n)},e.prefetchedLinks=n},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).LinkPrefetcher={});
