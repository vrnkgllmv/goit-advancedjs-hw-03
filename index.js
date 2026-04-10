import{a as d,S as f,i as a}from"./assets/vendor-iB-pPhnc.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const p="55384494-f2f10e06cce2d01ce9b41eadb",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(m,{params:o})).data}catch(e){throw console.error("Error fetching images:",e),e}}let g=new f(".gallery a",{captionsData:"alt",captionDelay:250});const l=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>`).join("");l.innerHTML=o,g.refresh()}function b(){l.innerHTML=""}function L(){u.classList.add("is-visible")}function F(){u.classList.remove("is-visible")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){a.error({message:"Please enter a search query!",position:"topRight"});return}b(),L(),y(o).then(e=>{if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}).catch(e=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FFFFFF",iconColor:"#FFFFFF",backgroundColor:"#EF4040",theme:"dark",displayMode:2,close:!0}),console.log(e)}).finally(()=>{F(),c.reset()})});
//# sourceMappingURL=index.js.map
