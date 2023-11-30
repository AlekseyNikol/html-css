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

 // Dynamic counter

 const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
            counterUp( el, {
                duration: 1000,
                //delay: 16,
            } )
            el.classList.add( 'is-visible' )
        }
    } )
}

const IO = new IntersectionObserver( callback, { threshold: 0 } )

const el = document.querySelectorAll( '.about_page' );

el.forEach(elem => {IO.observe( elem )})
