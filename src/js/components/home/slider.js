import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export const useInsightSlider = () => {
  new Swiper('.insight__slider', {

    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,

    navigation: {
      prevEl: '.insight__slider-prev',
      nextEl: '.insight__slider-next',
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      }
    }
  });
}

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: { crossFade: true },

    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
}