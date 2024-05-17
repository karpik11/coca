import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export const useInsightSlider = () => {
  new Swiper('.insight__slider', {

    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: '.insight__slider-next',
      prevEl: '.insight__slider-prev',
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      }
    }
  });
}


