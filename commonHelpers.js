import{S as m,i as c}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function u(l){const i="https://pixabay.com",t="/api/",n=new URLSearchParams({key:"44483599-b54948657c32ff6f545b82f23",q:l,image_type:"photo",pretty:!0,orientation:"horizontal",safesearch:!0}),e=`${i}${t}?${n}`;return fetch(e).then(s=>s.json().catch(o=>console.log(o)))}function p(l){const i=l.map(t=>`<li class="gallery-item">
	<a class="gallery-link" href="${t.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${t.webformatURL}" 
			alt="${t.tags}"
            
			/>
      <ul class="list-img">
      <li class="item-img"><p class="title-img">Likes</p><p class="text-img">${t.likes}</p></li> 
      <li class="item-img"><p class="title-img">Views</p><p class="text-img">${t.views}</p></li> 
      <li class="item-img"><p class="title-img">Comments</p><p class="text-img">${t.comments}</p></li> 
      <li class="item-img"><p class="title-img">Downloads</p><p class="text-img">${t.downloads}</p></li>     
      </ul>
	</a>
</li>`).join("");r.listElems.innerHTML=i,new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const r={formElem:document.querySelector("#search"),inputElem:document.querySelector(".form-input"),spanElem:document.querySelector(".loader"),listElems:document.querySelector(".gallery")};r.formElem.addEventListener("submit",l=>{l.preventDefault();const i=r.inputElem.value.trim();if(i)d(),u(i).then(t=>{if(t.hits.length===0){a(),r.listElems.innerHTML=" ",c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",displayMode:"once",maxWidth:500,imageWidth:600}),r.inputElem.value="";return}p(t.hits),a(),r.inputElem.value=""});else{a(),r.listElems.innerHTML=" ",c.warning({title:"Warning",message:" Enter a word for the query, please.",position:"center",displayMode:"once",maxWidth:500,imageWidth:600});return}});function d(){r.spanElem.classList.remove("hidden")}function a(){r.spanElem.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
