import { getImagesByQuery } from './js/pixabay-api';
// import { showLoader } from './js/render-functions';

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
