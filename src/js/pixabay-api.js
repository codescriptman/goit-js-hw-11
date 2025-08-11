import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { showLoader } from './render-functions';
import { hideLoader } from './render-functions';
import { createGallery } from './render-functions';
import { clearGallery } from './render-functions';

import { form } from '../main';

const apiKey = '51663153-45016a947364047e6aa27bf79';

export function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
