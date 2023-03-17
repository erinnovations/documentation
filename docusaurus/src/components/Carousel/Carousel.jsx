import clsx from 'clsx';
import React, { useRef } from 'react';
import { register as swiperWebComponentsRegister } from 'swiper/element/bundle';
import styles from './carousel.module.scss';

swiperWebComponentsRegister();

export function CarouselSlide(props) {
  return (
    <swiper-slide
      {...props}
    />
  );
}

export function Carousel({
  children,
  className,
  ref = null,
  ...rest
}) {
  const swiperElRef = useRef(ref);

  return (
    <div
      className={clsx(
        styles.carousel,
        className,
      )}
    >
      <swiper-container
        ref={swiperElRef}
        slides-per-view={1}
        // autoplay
        loop
        navigation
        pagination
        {...rest}
      >
        {children}
      </swiper-container>
    </div>
  );
}
