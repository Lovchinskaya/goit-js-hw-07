import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = createGalleryImages(galleryItems);  

const galleryContainer = document.querySelector('.gallery');
const galleryLink = document.querySelector('.gallery__link');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//galleryContainer.addEventListener('click', onClickImage);



function createGalleryImages(images) {
    const markupImages = images.map(({preview,original,description }) => {
        return `
       <div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
    return markupImages;
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250});

//const lightbox = new SimpleLightbox('.gallery a', {navText});

//const gallery = $(gallery__link).simpleLightbox();
lightbox.next(); // Next Image