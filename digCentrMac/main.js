//catalog-block button

let but = document.querySelectorAll('.column-categories')
console.log(but)

but.forEach(el => el.addEventListener('click', () => window.location.reload()))



//Slider
const swiper = new Swiper('.swiper', {
   loop         : true,
   slidesPerView: 2,
  spaceBetween  : 10,
   autoplay     : true,
   delay        : 700,
   pagination: {
     el         : '.swiper-pagination',
     clicable   : true,
   },
   breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10
      },
   },
 });