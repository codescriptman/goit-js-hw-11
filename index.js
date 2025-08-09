import{S as m,a as y,i as p}from"./assets/vendor-w2JwYdZo.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function g(){return l.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function h(){return document.querySelector(".loader").remove()}function b(){try{document.querySelector(".gallery").remove()}catch{return}}function v(r){l.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>');const a=document.querySelector(".gallery"),c=r.map(({webformatURL:e,largeImageURL:t,tags:i,likes:n,views:d,comments:u,downloads:f})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${e}"
        data-source="${t}"
        alt="${i}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes <br/>${n}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${d}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${u}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${f}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");a.insertAdjacentHTML("afterbegin",c);const o=new m(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});o.refresh(),o.on("show.simplelightbox",()=>{})}const x="51663153-45016a947364047e6aa27bf79";function L(r){y.get("https://pixabay.com/api/",{params:{key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>{if(a.data.hits.length===0)throw new Error;return v(a.data.hits),a.data.hits}).catch(a=>{p.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})}).finally(()=>h())}const l=document.querySelector(".form");let s=null;l.addEventListener("input",r=>(s=String(r.target.value),s));l.addEventListener("submit",r=>{b(),r.preventDefault(),l.reset(),s===""&&(r.target.disabled=!0),g(),L(s)});
//# sourceMappingURL=index.js.map
