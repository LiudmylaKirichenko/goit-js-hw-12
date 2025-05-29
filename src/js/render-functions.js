import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export const refs = {
  formElem: document.querySelector('.form'),
  inputElem: document.querySelector('input[name="search"]'),
  galleryElem: document.querySelector('.gallery'),
  loaderElem: document.querySelector('.loader'),
  loadWrapElem: document.querySelector('.load-wrapper'),
  btnLoadElem: document.querySelector('#load-btn'),
};

const ligthBox = new SimpleLightbox('.gallery li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${likes}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${views}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${comments}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');

  refs.galleryElem.insertAdjacentHTML('beforeend', markup);

  ligthBox.refresh();
}

export function clearGallery() {
  refs.galleryElem.innerHTML = '';
}

export function showLoader() {
  refs.loaderElem.classList.remove('js-hidden');
}

export function hideLoader() {
  refs.loaderElem.classList.add('js-hidden');
}

export function showLoadMoreButton() {
  refs.loadWrapElem.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  refs.loadWrapElem.classList.add('is-hidden');
}
