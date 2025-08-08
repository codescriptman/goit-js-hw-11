import{S as p,a as f,i as m}from"./assets/vendor-w2JwYdZo.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function y(){const t=new p(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.on("show.simplelightbox",()=>t.refresh())}function g(t){l.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>');const a=document.querySelector(".gallery"),c=t.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:n,comments:d,downloads:u})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${s}"
        data-source="${e}"
        alt="${r}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes ${i}</p></li>
<li class="card-txt-item"><p class="card-txt">views ${n}</p></li>
<li class="card-txt-item"><p class="card-txt">comments ${d}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads ${u}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");a.insertAdjacentHTML("afterbegin",c)}function h(){try{document.querySelector(".gallery").remove()}catch{return}}const x="51663153-45016a947364047e6aa27bf79";function v(t){f.get("https://pixabay.com/api/",{params:{key:x,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>{if(a.data.hits.length===0)throw h(),new Error;return g(a.data.hits),a.data.hits}).then(()=>{document.querySelector(".gallery").addEventListener("click",a=>{a.preventDefault(),y()})}).catch(a=>{m.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})})}const l=document.querySelector(".form");let o=null;l.addEventListener("input",t=>(o=String(t.target.value),o));l.addEventListener("submit",t=>{t.preventDefault(),o===""&&(t.target.disabled=!0),v(o),l.reset()});
//# sourceMappingURL=index.js.map
