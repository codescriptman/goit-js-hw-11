import{a as y,S as f,i as c}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="51663153-45016a947364047e6aa27bf79";function g(a){return y.get("https://pixabay.com/api/",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const n=new f(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(){return s.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function b(){document.querySelector(".loader")&&document.querySelector(".loader").remove()}function S(){document.querySelector(".gallery")&&document.querySelector(".gallery").remove()}function q(a){if(!document.querySelector(".gallery"))return s.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>'),document.querySelector(".gallery");const r=document.querySelector(".gallery"),o=a.map(({webformatURL:l,largeImageURL:e,tags:t,likes:i,views:u,comments:d,downloads:m})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${l}"
        data-source="${e}"
        alt="${t}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${i}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${u}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${d}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${m}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");r.insertAdjacentHTML("afterbegin",o),n.refresh(),n.on("show.simplelightbox",()=>{})}const s=document.querySelector(".form"),x=document.querySelector("input[type=text]");document.querySelector('button[type="submit"]');s.addEventListener("submit",a=>{S(),a.preventDefault();let r=String(x.value).trim();r===""?c.error({position:"topRight",message:"Fill empty fields"}):(h(),g(r).then(o=>{if(o.data.hits.length===0)throw new Error;return q(o.data.hits),o.data.hits}).catch(o=>{c.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})}).finally(()=>{b(),s.reset()}))});
//# sourceMappingURL=index.js.map
