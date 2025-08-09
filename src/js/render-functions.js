import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { form } from '../main';

export function showLoader() {
  form.insertAdjacentHTML('afterend', '<div class="loader"></div>');
  return document.querySelector('.loader');
}
export function hideLoader() {
  const loader = document.querySelector('.loader');
  return loader.remove();
}
export function clearGallery() {
  try {
    const gallery = document.querySelector('.gallery');
    gallery.remove();
  } catch (error) {
    return;
  }
}
export function createGallery(images) {
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
<li class="card-txt-item"><p class="card-txt">likes <br/>${likes}</p></li>
<li class="card-txt-item"><p class="card-txt">views <br/>${views}</p></li>
<li class="card-txt-item"><p class="card-txt">comments <br/>${comments}</p></li>
<li class="card-txt-item"><p class="card-txt">downloads <br/>${downloads}</p></li>
</ul>
      </div>
      </div>
  </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
  const galleryUse = new SimpleLightbox('.gallery .gallery-link', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  galleryUse.refresh();
  galleryUse.on('show.simplelightbox', () => {});
}
