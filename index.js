import{S as y,a as f,i as g}from"./assets/vendor-ChKhXQjG.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(){return l.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function b(){return document.querySelector(".loader").remove()}function c(){try{document.querySelector(".gallery").remove()}catch{return}}function x(r){l.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>');const a=document.querySelector(".gallery"),o=r.map(({webformatURL:e,largeImageURL:t,tags:s,likes:d,views:u,comments:m,downloads:p})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${e}"
        data-source="${t}"
        alt="${s}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${d}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${u}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${m}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${p}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");a.insertAdjacentHTML("afterbegin",o);const i=new y(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.refresh(),i.on("show.simplelightbox",()=>{})}const v="51663153-45016a947364047e6aa27bf79";function S(r){return f.get("https://pixabay.com/api/",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".form"),q=document.querySelector("input[type=text]"),n=document.querySelector('button[type="submit"]');l.addEventListener("submit",r=>{c(),r.preventDefault();let a=String(q.value);a===""&&(n.disabled=!0,n.iziToast.error({position:"topRight",message:"Fill empty fields"})),h(),S(a).then(o=>{if(o.data.hits.length===0)throw c(),new Error;return x(o.data.hits),o.data.hits}).catch(o=>{g.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
