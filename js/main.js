const tabs = document.querySelectorAll('.giftset__tab');
const tabItems = document.querySelectorAll('.giftset__item');

tabs.forEach(tab => {
  tab.addEventListener('click', function(){
    
    const tabId = tab.getAttribute('data-tab');
    const currentItem = document.querySelector(tabId);
    
    if ( ! tab.classList.contains('giftset__tab_active') ) {

      tabs.forEach(tab => {
        tab.classList.remove('giftset__tab_active');
      });

      tabItems.forEach(tabItem => {
       tabItem.classList.remove('giftset__item_active');
      });


     tab.classList.add('giftset__tab_active');
     currentItem.classList.add('giftset__item_active');
    }
  });
});

document.querySelector('.giftset__tab').click();

var firstSwiper = new Swiper(".favorite__slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var secondSwiper = new Swiper(".combo__slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

