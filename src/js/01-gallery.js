import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createGalleryImages(galleryItems);  

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onClickImage);



function onClickImage(event) {
    event.preventDefault();
        console.log('click');
  //  if (event.target.tagName !== 'gallery__image') return;
 
    const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${event.target.dataset.source}" width="800" height="600">
     </div>`      );  
  instance.show();
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') instance.close();
  });
}



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


