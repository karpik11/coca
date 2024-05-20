import Swiper from 'swiper';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const usePartnerSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay, FreeMode],
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    freeMode: true,
    freeModeMomentum: false,
  });
};








