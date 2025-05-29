import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  hideLoadMoreButton,
  showLoadMoreButton,
  refs,
} from './js/render-functions';

let query = '';
let page = 1;
let totalHits = 0;
const PER_PAGE = 15;

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements.search.value.trim();
  page = 1;
  clearGallery();
  hideLoadMoreButton();

  if (query.length === 0) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Please enter your request',
    });
    return;
  }

  try {
    showLoader();
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;
    if (data.hits.length === 0) {
      iziToast.info({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    createGallery(data.hits);

    if (totalHits > PER_PAGE) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error while loading',
    });
  } finally {
    hideLoader();
  }
});

refs.btnLoadElem.addEventListener('click', async e => {
  page += 1;
  try {
    showLoader();
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    const { height: cardHeight } =
      refs.galleryElem.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(totalHits / PER_PAGE);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        position: 'topRight',
        message:
          'We are sorry, but you have reached the end of search results.',
      });
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error while loading',
    });
  } finally {
    hideLoader();
  }
});
