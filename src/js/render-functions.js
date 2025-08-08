import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { form } from '../main';

export function createGallery() {
  const galleryUse = new SimpleLightbox('.gallery .gallery-link', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  galleryUse.on('show.simplelightbox', () => galleryUse.refresh());
}
function clearGallery() {}
export function showLoader(images) {
  form.insertAdjacentHTML('afterend', '<ul class="gallery"></ul>');
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
      <div class="card">
      <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        data-source="${largeImageURL}"
        alt="${tags}"
      />
      </a>
      <div class="card-txt">
<ul class="card-txt-list">
<li class="card-txt-item"><p class="card-txt">likes ${likes}</p></li>
<li class="card-txt-item"><p class="card-txt">views ${views}</p></li>
<li class="card-txt-item"><p class="card-txt">comments ${comments}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads ${downloads}</p></li>
</ul>
      </div>
      </div>
  </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
}
export function hideLoader() {
  try {
    const gallery = document.querySelector('.gallery');
    gallery.remove();
  } catch (error) {
    return;
  }
}
