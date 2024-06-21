import { getImage } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formElem: document.querySelector('#search'),
  inputElem: document.querySelector('.form-input'),
  spanElem: document.querySelector('.loader'),
  listElems: document.querySelector('.gallery'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const value = refs.inputElem.value.trim();
  if (value) {
    showLoader();
    getImage(value).then(data => {
      if (data.hits.length === 0) {
        hideLoader();
        refs.listElems.innerHTML = ' ';
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
          displayMode: 'once',
          maxWidth: 500,
          imageWidth: 600,
        });
        refs.inputElem.value = '';
        return;
      }
      galleryTemplate(data.hits);

      hideLoader();

      refs.inputElem.value = '';
    });
  } else {
    hideLoader();
    refs.listElems.innerHTML = ' ';
    iziToast.warning({
      title: 'Warning',
      message: ' Enter a word for the query, please.',
      position: 'center',
      displayMode: 'once',
      maxWidth: 500,
      imageWidth: 600,
    });
    return;
  }
});

function showLoader() {
  refs.spanElem.classList.remove('hidden');
}
function hideLoader() {
  refs.spanElem.classList.add('hidden');
}
