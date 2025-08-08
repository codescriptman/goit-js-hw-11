// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';

export const form = document.querySelector('.form');
let query = null;

form.addEventListener('input', e => {
  query = String(e.target.value);
  return query;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (query === '') {
    event.target.disabled = true;
  }
  getImagesByQuery(query);
  form.reset();
});

// try {
//   const gallery = document.querySelector('.gallery');
//   gallery.addEventListener('click', event => {});
// } catch (error) {
//   return;
// }
