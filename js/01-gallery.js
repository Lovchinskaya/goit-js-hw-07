import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createGalleryImages(galleryItems);  

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onClickImage);



function onClickImage(event) {
    event.preventDefault();

  const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${event.target.dataset.source}" width="800" height="600">
     </div>`,
    {
      onShow() {
        document.addEventListener('keydown', closeModalImg)
      },
      onClose() {
        window.removeEventListener('keydown', closeModalImg)
      },
    },
  )
  instance.show();

  function closeModalImg(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
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


