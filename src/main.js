// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { clearGallery } from './js/render-functions';

export const form = document.querySelector('.form');
let query = null;

form.addEventListener('input', e => {
  query = String(e.target.value);
  return query;
});

form.addEventListener('submit', event => {
  clearGallery();
  event.preventDefault();
  form.reset();
  if (query === '') {
    event.target.disabled = true;
  }
  showLoader();
  getImagesByQuery(query);
});

// try {
//   const gallery = document.querySelector('.gallery');
//   gallery.addEventListener('click', event => {});
// } catch (error) {
//   return;
// }
