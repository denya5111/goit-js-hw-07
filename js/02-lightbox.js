import { galleryItems } from './gallery-items.js';
// Change code below this line

function createListItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" onclick="return false" style="display: block"/>
</a>
</li>`
    )
    .join('');
}

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createListItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
