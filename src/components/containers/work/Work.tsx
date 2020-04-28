import React from 'react'
import {Trans, withNamespaces} from 'react-i18next'
import styles from './Work.module.css'
import {WorkData, WorkModel} from './WorkData'
import Headings from '../../shared/headings/Headings'
import linkedin from '../../../assets/images/logos/linkedin.svg'

const oddJob = (int: number): Boolean => Math.abs(int % 2) === 1

const Work = ({t}: any) => {
  const workData = WorkData(t)

  return (
    <section className={`section ${styles['section-work']}`}>
      <div className="section-content">
        <Headings title={t('work.title')} subtitle={t('work.subtitle')} />

        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles['about-title']}>My journey</h4>
            <p>
              <Trans i18nKey="work.journey.intro">
                I started working with web development in 2011, studied Web/Multimedia, and always loved design + code.
                But since I'm not as close as a Designer (look at the design of this website) I've become a{' '}
                <strong>Front-end Developer</strong>.
              </Trans>
            </p>

            <a className={styles.ad} href="https://www.linkedin.com/in/gabriel--lima/" title="">
              <em>{t('work.see-more')}</em>
              <img className={styles.linkedin} src={linkedin} alt="LinkedIn Logo" />
            </a>

            <p>
              <Trans i18nKey="work.journey.body">
                <strong>CSS and HTML</strong> were my companions but with <strong>JavaScript</strong> that the real
                passion flourishes in my heart. Then came NodeJS and RESTful APIs and the Back-end Development was
                closer than ever. JS's frameworks and testing libraries started to pop out almost monthly which made the
                opportunity to create better and rich UI components (my joy), also we have stopped to use jQuery right?!
              </Trans>
            </p>

            <p>
              <Trans i18nKey="work.journey.conclusion">
                One day I started to use Linux and the terminal, now I'm addicted to automate my workflow with Bash
                Scripts. Now, with Docker and CI/CD knowledge, I could entitle myself as a <em>Full-stack Developer</em>
                , but I won't do that and I'll call myself as a <strong>Product Infrastructure Developer</strong>{' '}
                instead, which is way cooler.
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
