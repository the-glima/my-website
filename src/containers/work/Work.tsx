import React from 'react'
import {Trans, withNamespaces} from 'react-i18next'

import styles from './Work.module.css'
import {WorkData, WorkModel} from './WorkData'
import Headings from '../../shared/components/headings/Headings'

const oddJob = (int: number): Boolean => Math.abs(int % 2) === 1

const Work = ({t}: any) => {
  const workData = WorkData(t)

  return (
    <section className={`section ${styles['section-work']}`}>
      <div className="section-content">
        <Headings title={t('work.title')} subtitle={t('work.subtitle')} />

        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles['about-title']}>{t('work.journey.title')}</h4>
            <p>
              <Trans
                i18nKey="work.journey.intro"
                defaults="I started working with web development in 2011, studied Web and Multimedia, and always loved design +
                code. But since I'm not as close as a Designer (look at the design of this website) I've become a <1>Front-end Developer</1>."
              >
                text <strong>Front-end Developer</strong>
              </Trans>
            </p>

            <a className={styles.ad} href="https://www.linkedin.com/in/gabriel--lima/" title={t('work.see-more')}>
              <em>{t('work.see-more')}</em>
            </a>

            <p>
              <Trans
                i18nKey="work.journey.body"
                defaults="<0>CSS and HTML</0> are my companions but with <2>JavaScript</2> that the real
                passion flourishes in my heart. Then came NodeJS and RESTful APIs and the Back-end Development was
                closer than ever. JS's frameworks and testing libraries started to pop out almost monthly which made the
                opportunity to create better and rich UI components (my joy), also we have stopped to use jQuery right?!"
              >
                <strong>CSS and HTML</strong> text <strong>JavaScript</strong> text
              </Trans>
            </p>

            <p>
              <Trans
                i18nKey="work.journey.conclusion"
                defaults="One day I started to use Linux and the terminal, now I'm addicted to automate my workflow with Bash Scripts. Now, with Docker and CI/CD knowledge, I could entitle myself as a <1>Full-stack Developer</1>, but I won't do that and I'll call myself also as a <3>Product Infrastructure Developer</3> instead, which is way cooler."
              >
                text <em>Full-stack Developer</em> text <strong>Product Infrastructure Developer</strong> text
              </Trans>
            </p>
          </div>

          <ul className={`${styles.list}`}>
            {workData.map((work: WorkModel, i: number) => (
              <li key={i} className={`${styles['list-item']} ${oddJob(i) ? styles['list-item-left'] : ''}`}>
                <a className={styles['list-item-card']} href={work.url} title={work.title}>
                  <span className={`${styles.logo} ${styles[`logo-${work.title.toLowerCase().split(' ').join('-')}`]}`}>
                    {work.title}
                  </span>
                  <div>
                    <div className={styles.title}>{work.title}</div>
                    <div className={styles.position}>{work.position}</div>
                  </div>
                </a>
                <div className={styles['list-item-date']}>
                  <span>{work.year}</span>
                  <span>{work.country}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default withNamespaces()(Work)
