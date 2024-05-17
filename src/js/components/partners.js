import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const usePartnerSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    speed: 1500,
    autoplay: true,
    delay: 100,


    breakpoints: {
      577: {
        autoplay: false,
      }
    }
  });
};








