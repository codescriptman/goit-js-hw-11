// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { clearGallery } from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('input[type=text]');
const btn = document.querySelector('button[type="submit"]');

btn.disabled = true;

input.addEventListener('input', event => {
  if (event.target.value === '') {
    iziToast.error({
      position: 'topRight',
      message: `Fill empty fields`,
    });
  }
  btn.disabled = false;
});

form.addEventListener('submit', event => {
  clearGallery();
  event.preventDefault();
  let query = String(input.value);
  form.reset();
  if (query === '') {
    btn.disabled = true;
    iziToast.error({
      position: 'topRight',
      message: `Fill empty fields`,
    });
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
