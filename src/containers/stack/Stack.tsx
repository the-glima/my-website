import React from 'react'
import {withTranslation} from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import Headings from '../../shared/components/headings/Headings'
import styles from './Stack.module.css'
import {StackData, StackModel} from './StackData'

const Stack = ({t}: any) => {
  const stackData = StackData(t)
  const swiperSettings = {
    className: 'stack-swiper',
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 2000,
    },
    pagination: {
      enabled: true,
      dynamicBullets: true,
    },
    modules: [Autoplay, Pagination],
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className={`section ${styles['section-stack']}`}>
      <div className="section-content">
        <Headings title={t('stack.title')} subtitle={t('stack.subtitle')} />

        <div className={styles.content}>
          <div className={`${styles.list}`}>
            <Swiper {...swiperSettings}>
              {stackData.map((stack: StackModel, i: number) => (
                <SwiperSlide key={i}>
                  <a className={styles.link} href={stack.url} title={stack.name} aria-label={stack.name}>
                    <span className={styles[`stack-logo-${stack.name.toLowerCase()}`]}>
                      <stack.logo />
                    </span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation()(Stack)
