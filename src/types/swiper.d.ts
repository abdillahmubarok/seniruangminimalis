// types/swiper.d.ts
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          init?: string;
          'slides-per-view'?: string | number;
          'space-between'?: string | number;
          navigation?: string;
          pagination?: string;
          loop?: string;
          autoplay?: string;
          class?: string;
        },
        HTMLElement
      >;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          class?: string;
        },
        HTMLElement
      >;
    }
  }
}