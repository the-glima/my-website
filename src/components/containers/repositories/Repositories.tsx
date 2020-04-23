import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './Repositories.module.css'
import {RepositoryModel} from './RepositoryModel'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'
import github from '../../../assets/images/logos/github.svg'

const Repositories = ({t}: any) => {
  const repositories: RepositoryModel[] = [
    {
      icon: '🤖',
      name: 'PR Fiscal',
      url: 'https://www.gabriel-lima.com',
      description: t('repositories.repos.pr-fiscal-desc')
    },
    {
      icon: '🦨',
      name: 'Dale CLI',
      url: 'https://www.gabriel-lima.com',
      description: t('repositories.repos.dale-cli')
    },
    {
      icon: '🔨',
      name: '.dotfiles',
      url: 'https://www.gabriel-lima.com',
      description: t('repositories.repos.dotfiles')
    }
  ]

  return (
    <section className={`section ${styles['section-repositories']}`}>
      <div className="section-content">
        <Headings title={t('repositories.title')} subtitle={t('repositories.subtitle')} />

        <ul className={`${styles.list}`}>
          {repositories.map((repository: RepositoryModel, i: number) => (
            <li key={i} className={styles['list-item']}>
              <a className={styles.link} href={repository.url} title={repository.name}>
                <span className={styles['link-wrapper']}>
                  <i className={styles.icon}>{repository.icon}</i>
                  <span className={styles.name}>{repository.name}</span>
                  <img className={styles.github} src={github} alt="GitHub Logo" />
                </span>
                <span className={styles.description}>{repository.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <SeeMore
          props={{
            url: 'https://github.com/the-glima'
          }}
        />
      </div>
    </section>
  )
}

export default withNamespaces()(Repositories)
