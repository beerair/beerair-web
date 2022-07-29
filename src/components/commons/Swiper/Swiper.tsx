import { useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';

const defaultSwiperProps: Settings = {
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

interface SwiperProps extends Settings {
  currentSlide: number;
}

const Swiper = ({ currentSlide, ...props }: SwiperProps) => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    sliderRef.current?.slickGoTo(currentSlide);
  }, [currentSlide]);

  return <Slider {...defaultSwiperProps} {...props} ref={sliderRef} />;
};

export default Swiper;
