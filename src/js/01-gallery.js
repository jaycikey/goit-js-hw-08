// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

function createGalleryItem(item) {
    return `
          <li class="gallery__link gallery__item">
              <a class="gallery__link" href="${item.original}">
                  <img 
                      class="gallery__image"
                      src="${item.preview}"
                      alt="${item.description}"
                  />
              </a>
          </li>
      `;
  }
  
  // Перебор массиву
  const galleryItem = galleryItems.map((item) => createGalleryItem(item)).join("");
  
  // Додавання елементів галереї до DOM
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = galleryItem;
  
  // Ініціалізація бібліотеки SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  