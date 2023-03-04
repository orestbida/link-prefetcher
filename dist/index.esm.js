/*!
* link-prefetcher 0.1.0
* https://github.com/orestbida/link-prefetcher
* Author Orest Bida
* Released under the MIT License
*/
const t=(t='a:not([target="_blank"]):not([href^="#"])')=>document.querySelectorAll(t),e=t=>t.host===location.host&&t.pathname!==location.pathname,o={},n=(n,c=!0)=>{const s=new IntersectionObserver((t=>{for(const e of t){const{href:t}=e.target;e.isIntersecting&&((!c||!o[t])&&fetch(t),s.unobserve(e.target),o[t]=!0)}}));for(const o of n||t())e(o)&&s.observe(o)},c=(n,c=!0)=>{let s=!1;const r=new XMLHttpRequest;(n||t()).forEach((t=>{e(t)&&(t.addEventListener('mouseenter',(()=>{const{href:e}=t;(!c||!o[e])&&(r.onload=r.onerror=()=>o[e]=!0,r.open('GET',e,!0),r.send(),s=!0)})),t.addEventListener('mouseleave',(()=>{s&&r.abort(),s=!1})))}))};export{c as prefetchHover,n as prefetchVisible,o as prefetchedLinks};
