import{S as m,a as f,i as y}from"./assets/vendor-w2JwYdZo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(a){o.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>');const r=document.querySelector(".gallery"),s=a.map(({webformatURL:e,largeImageURL:t,tags:l,likes:n,views:d,comments:u,downloads:p})=>`<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${e}"
        data-source="${t}"
        alt="${l}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes ${n}</p></li>
<li class="card-txt-item"><p class="card-txt">views ${d}</p></li>
<li class="card-txt-item"><p class="card-txt">comments ${u}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads ${p}</p></li>
</ul>
      </div>
      </div>
  </li>`).join("");r.insertAdjacentHTML("afterbegin",s);const i=new m(".gallery .gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.refresh(),i.on("show.simplelightbox",()=>{})}const h="51663153-45016a947364047e6aa27bf79";function x(a){f.get("https://pixabay.com/api/",{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0){try{document.querySelector(".gallery").remove()}catch{return}throw new Error}return g(r.data.hits),r.data.hits}).catch(r=>{y.error({position:"topRight",message:`Sorry, there are no images matching your search query. Please try again!
`})})}const o=document.querySelector(".form");let c=null;o.addEventListener("input",a=>(c=String(a.target.value),c));o.addEventListener("submit",a=>{a.preventDefault(),c===""&&(a.target.disabled=!0),x(c),o.reset()});
//# sourceMappingURL=index.js.map
