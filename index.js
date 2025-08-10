import{S as f,a as g,i as n}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function h(){return s.insertAdjacentHTML("afterend",'<div class="loader"></div>'),document.querySelector(".loader")}function b(){return document.querySelector(".loader").remove()}function v(){try{document.querySelector(".gallery").remove()}catch{return}}function x(a){s.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>');const r=document.querySelector(".gallery"),l=a.map(({webformatURL:e,largeImageURL:t,tags:i,likes:u,views:p,comments:m,downloads:y})=>`<li class="gallery-item">
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
<li class="card-txt-item"><p class="card-txt">likes <br/>${u}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${p}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${m}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${y}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");r.insertAdjacentHTML("afterbegin",l);const o=new f(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});o.refresh(),o.on("show.simplelightbox",()=>{})}const L="51663153-45016a947364047e6aa27bf79";function S(a){g.get("https://pixabay.com/api/",{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0)throw new Error;return x(r.data.hits),r.data.hits}).catch(r=>{n.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})}).finally(()=>b())}const s=document.querySelector(".form"),d=document.querySelector("input[type=text]"),c=document.querySelector('button[type="submit"]');c.disabled=!0;d.addEventListener("input",a=>{a.target.value===""&&n.error({position:"topRight",message:"Fill empty fields"}),c.disabled=!1});s.addEventListener("submit",a=>{v(),a.preventDefault();let r=String(d.value);s.reset(),r===""&&(c.disabled=!0,n.error({position:"topRight",message:"Fill empty fields"})),h(),S(r)});
//# sourceMappingURL=index.js.map
