import React from 'react'
import { withNamespaces } from 'react-i18next'
import styles from './Jobs.module.css'
import { JobsData, JobModel } from './JobsData'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'

const Jobs = ({t}: any) => {
  let jobsData = JobsData(t)

  // jobsData.splice(2)

  const oddJob = (int: number): Boolean => Math.abs(int % 2) === 1

  return (
    <section className={`section ${styles['section-jobs']}`}>
      <div className="section-content">
        <Headings title={t('jobs.title')} subtitle={t('jobs.subtitle')} />

        <div className={styles.content}>
          <div className={styles.about}>
            <h4 className={styles['about-title']}>Technical About Me</h4>
            <p>I started working with web development in 2011, studied Web/Multimedia and always loved design + code. But since I'm not as close as a Designer (look at the design of this website) I've became a <strong>Front-end Developer</strong>.</p>

            <p className={styles.ad}><span><em>Check the cool timeline on the right</em></span><span role="img" aria-label="Backhand Index Pointing Right">👉</span></p>
            
            <p>With JavaScript the real passion flourish in my heart, then came NodeJS and RESTful APIs and the Back-end Development was closer then never. JS frameworks and testing libraries started to pop out almost monthly which made the opportunity to create better and rich UI components (my joy), also we have stopped to use jQuery right?!</p>

            <p>One day I started to use Linux and the terminal, now I'm addicted to automate my workflow with Bash Scripts. Now, with Docker and CI/CD knowledge I could entitle myself as a <em>Full-stack Developer</em>, but I won't do that and I'll call myself as a <strong>Product Infrastructure Developer</strong> instead, which is way cooler.</p>
          </div>

          <ul className={`${styles.list}`}>
            {jobsData.map((job: JobModel, i: number) => (
              <li key={i} className={`${styles['list-item']} ${oddJob(i) ? styles['list-item-left'] : ''}`}>
                <a className={styles['list-item-card']} href={job.url} title={job.title}>
                  <span className={`${styles.logo} ${styles[`logo-${job.title.toLowerCase().split(' ').join('-')}`]}`}>
                    {job.title}
                  </span>
                  <div>
                    <div className={styles.title}>{job.title}</div>
                    <div className={styles.position}>{job.position}</div>
                  </div>
                </a>
                <div className={styles['list-item-date']}>
                  {job.year} - {job.country}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <SeeMore
          props={{
            url: 'https://www.linkedin.com/in/gabriel--lima/',
            text: t('jobs.see-more')
          }}
        />
      </div>
    </section>
  )
}

export default withNamespaces()(Jobs)
