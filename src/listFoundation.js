import { galleryItems } from "./charitableFoundation";

const galleryEl = document.querySelector('.support-list')
console.log(galleryEl);
const card = createPictureGalery(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', card)
function createPictureGalery (item){
return galleryItems.map(({title, url, img}) =>{
    return`
    <li class="gallery__item">${title}
   <a class="gallery__link" href="${url}">
      <img class="gallery__image" src="${img}" alt="${title}" />
   </a>
</li>
    `  
}).join("");
}
createPictureGalery(galleryItems)