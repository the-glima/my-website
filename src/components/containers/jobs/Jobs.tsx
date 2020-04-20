import React from 'react'
import styles from './Jobs.module.css'
import {JobModel} from './JobModel'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'

const Jobs = () => {
  const jobs: JobModel[] = [
    {
      title: 'Payvision',
      position: 'Full Stack Developer',
      url: 'https://www.payvision.com',
      status: 'current'
    },
    {
      title: 'Webdoctor',
      position: 'Full Stack Developer',
      url: 'https://www.webdoctor.ie/'
    },
    {
      title: 'Neoway',
      position: 'Javascript Developer',
      url: 'https://www.neoway.com.br/'
    },
    {
      title: 'Div64',
      position: 'Front-end Developer',
      url: 'https://www.usebeon.com/'
    },
    {
      title: 'EloGroup',
      position: 'Front-end Developer',
      url: 'https://elogroup.com.br/'
    },
    {
      title: 'Bolt Brasil',
      position: 'Front-end Developer',
      url: 'https://www.bolt.com.br/'
    }
  ]

  return (
    <section className={`section ${styles['section-jobs']}`}>
      <div className="section-content">
        <Headings title="Places that I’ve worked" subtitle="From 3 different countries" />

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

        <SeeMore url="https://www.linkedin.com/in/gabriel--lima/" text="Check my LinkedIn Profile" />
      </div>
    </section>
  )
}

export default Jobs
