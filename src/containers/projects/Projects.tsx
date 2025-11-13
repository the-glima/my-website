import React from 'react'
import {withTranslation} from 'react-i18next'

import styles from './Projects.module.css'
import {ProjectsData, ProjectModel} from './ProjectsData'
import Headings from '../../shared/components/headings/Headings'
import SeeMore from '../../shared/components/see-more/SeeMore'
import LinkIcon from '../../assets/images/icons/link.svg?react'

const Projects = ({t}: any) => {
  const projectsData = ProjectsData(t)

  return (
    <section className={`section ${styles['section-projects']}`}>
      <div className="section-content">
        <Headings title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <ul className={`${styles.list}`}>
          {projectsData.map((project: ProjectModel, i: number) => (
            <li key={i} className={styles['list-item']}>
              <a className={styles.link} href={project.url} title={project.name}>
                {project.status === 'in-progress' && (
                  <span className={styles.status}>{project.status === 'in-progress' ? project.status : ''}</span>
                )}
                <span className={styles['link-wrapper']}>
                  <img className={styles.favicon} src={project.favicon} alt={project.name} />
                  <span className={styles.name}>{project.name}</span>
                  <span className={styles['link-icon']}>
                    <LinkIcon />
                  </span>
                </span>
                <span className={styles.description}>{project.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <SeeMore
          props={{
            text: t('projects.see-more'),
            url: 'https://github.com/the-glima'
          }}
        />
      </div>
    </section>
  )
}

export default withTranslation()(Projects)
