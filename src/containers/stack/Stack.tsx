import React from 'react'
import {Trans, withNamespaces} from 'react-i18next'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Stack.module.css'

import Headings from '../../shared/components/headings/Headings'
import {StackData, StackModel} from './StackData'

const Stack = ({t}: any) => {
  const stackData = StackData(t)
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  return (
    <section className={`section ${styles['section-stack']}`}>
      <div className="section-content">
        <Headings title={t('stack.title')} subtitle={t('stack.subtitle')} />

        <div className={styles.content}>
          <div className={`${styles.list}`}>
            <Slider {...sliderSettings}>
              {stackData.map((stack: StackModel, i: number) => (
                <div key={i}>
                  <a className={styles.link} href={stack.url} title={stack.title}>
                    <span className={`${styles.stack} ${styles[`logo-${stack.name.toLowerCase()}`]}`}>
                      <stack.logo />
                    </span>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withNamespaces()(Stack)
