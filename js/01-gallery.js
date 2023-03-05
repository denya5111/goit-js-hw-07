import { galleryItems } from './gallery-items.js';
// Change code below this line

function createListItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createListItemsMarkup(galleryItems);

galleryContainer.addEventListener('click', handlerClickImg);

function handlerClickImg(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(`<img width="1280" src="${event.target.dataset.source}">`);

  if (modal.show()) {
    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        modal.close();
      }
    });
  }
}
