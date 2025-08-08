import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { showLoader } from './render-functions';
import { hideLoader } from './render-functions';
import { createGallery } from './render-functions';

const apiKey = '51663153-45016a947364047e6aa27bf79';

export function getImagesByQuery(query) {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      if (res.data.hits.length === 0) {
        hideLoader();
        throw new Error();
      }
      showLoader(res.data.hits);
      return res.data.hits;
    })
    .then(() => {
      document.querySelector('.gallery').addEventListener('click', event => {
        event.preventDefault();
        createGallery();
      });
    })
    //? .then(hideLoader())
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `Sorry, there are no images matching your search query. Please try again!
`,
      });
    });
}
