import{a as w,S as b,i as n}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",P="50418934-092a9418718642a9f59a6e549",S=15;async function g(a,t){try{return(await w.get(q,{params:{key:P,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:t}})).data}catch(l){throw console.error("Request failed:",l.message),l}}const o={formElem:document.querySelector(".form"),inputElem:document.querySelector('input[name="search"]'),galleryElem:document.querySelector(".gallery"),loaderElem:document.querySelector(".loader"),loadWrapElem:document.querySelector(".load-wrapper"),btnLoadElem:document.querySelector("#load-btn")},v=new b(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250});function p(a){const t=a.map(({largeImageURL:l,webformatURL:i,tags:e,likes:r,views:s,comments:E,downloads:L})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${e}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${r}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${s}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${E}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${L}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");o.galleryElem.insertAdjacentHTML("beforeend",t),v.refresh()}function R(){o.galleryElem.innerHTML=""}function y(){o.loaderElem.classList.remove("js-hidden")}function h(){o.loaderElem.classList.add("js-hidden")}function $(){o.loadWrapElem.classList.remove("is-hidden")}function m(){o.loadWrapElem.classList.add("is-hidden")}let d="",c=1,u=0;const f=15;o.formElem.addEventListener("submit",async a=>{if(a.preventDefault(),d=a.target.elements.search.value.trim(),c=1,R(),m(),d.length===0){n.error({position:"topRight",title:"Error",message:"Please enter your request"});return}try{y();const t=await g(d,c);if(u=t.totalHits,t.hits.length===0){n.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t.hits),u>f?$():m()}catch{n.error({position:"topRight",message:"Error while loading"})}finally{h()}});o.btnLoadElem.addEventListener("click",async a=>{c+=1;try{y();const t=await g(d,c);p(t.hits);const{height:l}=o.galleryElem.firstElementChild.getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"});const i=Math.ceil(u/f);c>=i&&(m(),n.info({position:"topRight",message:"We are sorry, but you have reached the end of search results."}))}catch{n.error({position:"topRight",message:"Error while loading"})}finally{h()}});
//# sourceMappingURL=index.js.map
