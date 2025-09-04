console.log('cms-slider.js geladen');

var mySwiper = new Swiper ('#basic-swiper', {
 slidesPerView: 3,
 slidesPerGroup: 3,
 spaceBetween: 24,
 grabCursor:false,
 allowTouchMove: true,
 loop: false,
 navigation: {
 nextEl: '#next-button-basic',
 prevEl: '#prev-button-basic',
},
    breakpoints: {
     0: { /* when window >=0px - webflow mobile landscape/portrait */
         slidesPerView: 1.1,
        slidesPerGroup:1,
       spaceBetween: 16,
     },
         480: { /* when window >=0px - webflow mobile landscape/portrait */
         slidesPerView: 2,
        slidesPerGroup:1,
       spaceBetween: 16,
     },
     767: { /* when window >= 767px - webflow tablet */
           slidesPerView: 2,
        slidesPerGroup:1,
       spaceBetween: 16,
     },
     992: { /* when window >= 988px - webflow desktop */
        slidesPerView: 3,
        slidesPerGroup:1,
       spaceBetween: 24,
     }
   },
});

// Disable/enable navigation buttons based on current slide
function updateNavButtons() {
  const prevBtn = document.getElementById('prev-button-basic');
  const nextBtn = document.getElementById('next-button-basic');
  if (mySwiper.isBeginning) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (mySwiper.isEnd) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}
mySwiper.on('slideChange', updateNavButtons);
// Initial state
updateNavButtons();

console.log('cms-slider.js einde');