import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './Jobs.module.css'
import {JobModel} from './JobModel'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'

const Jobs = ({t}: any) => {
  const jobs: JobModel[] = [
    {
      title: 'Payvision',
      position: t('jobs.job.software-developer'),
      url: 'https://www.payvision.com',
      status: 'current'
    },
    {
      title: 'Webdoctor',
      position: t('jobs.job.software-developer'),
      url: 'https://www.webdoctor.ie/'
    },
    {
      title: 'Neoway',
      position: t('jobs.job.javascript-developer'),
      url: 'https://www.neoway.com.br/'
    },
    {
      title: 'Div64',
      position: t('jobs.job.front-end-developer'),
      url: 'https://www.usebeon.com/'
    },
    {
      title: 'EloGroup',
      position: t('jobs.job.front-end-developer'),
      url: 'https://elogroup.com.br/'
    },
    {
      title: 'Bolt Brasil',
      position: t('jobs.job.front-end-developer'),
      url: 'https://www.bolt.com.br/'
    }
  ]

  return (
    <section className={`section ${styles['section-jobs']}`}>
      <div className="section-content">
        <Headings title={t('jobs.title')} subtitle={t('jobs.subtitle')} />

        <ul className={`${styles.list}`}>
          {jobs.map((job: JobModel, i: number) => (
            <li key={i} className={styles['list-item']}>
              <div className={styles['list-item-wrapper']}>
                <span className={`${styles.logo} ${styles[`logo-${job.title.toLowerCase().split(' ').join('-')}`]}`}>
                  {job.title}
                </span>
                <div>
                  <a className={styles.link} href={job.url} title={job.title}>
                    {job.title}
                  </a>
                  <div className={styles.position}>{job.position}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

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
