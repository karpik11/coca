import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { usePartnerSlider } from './components/partners.js';
import { useAccordion } from './components/accordion.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
usePartnerSlider();
useAccordion();