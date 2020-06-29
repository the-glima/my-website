import React from 'react'
import {withNamespaces} from 'react-i18next'

import styles from './Repositories.module.css'
import {RepositoriesData, RepositoryModel} from './RepositoriesData'
import Headings from '../../shared/components/headings/Headings'
import SeeMore from '../../shared/components/see-more/SeeMore'
import {ReactComponent as GithubLogo} from '../../assets/images/social/github.svg'

const Repositories = ({t}: any) => {
  const repositoriesData = RepositoriesData(t)

  return (
    <section className={`section ${styles['section-repositories']}`}>
      <div className="section-content">
        <Headings title={t('repositories.title')} subtitle={t('repositories.subtitle')} />

        <ul className={`${styles.list}`}>
          {repositoriesData.map((repository: RepositoryModel, i: number) => (
            <li key={i} className={styles['list-item']}>
              <a className={styles.link} href={repository.url} title={repository.name}>
                {repository.status === 'in-progress' && (
                  <span className={styles.status}>{repository.status === 'in-progress' ? repository.status : ''}</span>
                )}
                <span className={styles['link-wrapper']}>
                  <i className={styles.icon}>{repository.icon}</i>
                  <span className={styles.name}>{repository.name}</span>
                  <span className={styles.github}>
                    <GithubLogo />
                  </span>
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
