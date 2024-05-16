import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const usePartnerSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        autoplay: true,
      }
    }
  });
};








