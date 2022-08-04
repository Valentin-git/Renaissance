const 
    galleryMenuItem = document.querySelectorAll('.gallery-menu__item'),
    allGalleryItem = document.querySelectorAll('.all-gallery__item');

function toggleActiveClass(portfolioMenu__link_active){
    galleryMenuItem.forEach(item => {
      item.classList.remove('gallery-menu__item_active');
    })
    portfolioMenu__link_active.classList.add('gallery-menu__item_active');
}

function toggleimages(dataClass){
    if (dataClass === 'all'){
        for(let i = 0; i < allGalleryItem.length; i++){
            allGalleryItem[i].style.display = 'block';
        }
    } else{
        for (let i = 0; i < allGalleryItem.length; i++)
          allGalleryItem[i].dataset.class === dataClass ? allGalleryItem[i].style.display = 'block' : allGalleryItem[i].style.display = 'none';
    }
}

for (let i = 0; i < galleryMenuItem.length; i++){
    galleryMenuItem[i].addEventListener('click', function(){
        toggleActiveClass(galleryMenuItem[i]);
        toggleimages(galleryMenuItem[i].dataset.class);
    });
}