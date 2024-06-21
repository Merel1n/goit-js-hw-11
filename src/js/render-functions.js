import { refs } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function galleryTemplate(images) {
  const liElement = images
    .map(image => {
      return `<li class="gallery-item">
	<a class="gallery-link" href="${image.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${image.webformatURL}" 
			alt="${image.tags}"
            
			/>
      <ul class="list-img">
      <li class="item-img"><p class="title-img">Likes</p><p class="text-img">${image.likes}</p></li> 
      <li class="item-img"><p class="title-img">Views</p><p class="text-img">${image.views}</p></li> 
      <li class="item-img"><p class="title-img">Comments</p><p class="text-img">${image.comments}</p></li> 
      <li class="item-img"><p class="title-img">Downloads</p><p class="text-img">${image.downloads}</p></li>     
      </ul>
	</a>
</li>`;
    })
    .join('');

  refs.listElems.innerHTML = liElement;
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}
