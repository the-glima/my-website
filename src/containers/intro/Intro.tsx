import React, {useState, useEffect, useCallback} from 'react'
import {Trans, withNamespaces} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import styles from './Intro.module.css'
import {IntroData} from './IntroData'
import * as actions from './IntroActions'

const Intro = ({t}: any) => {
  const introData = IntroData()
  const dispatch = useDispatch()
  const [count, setCount]: any = useState(0)
  const languageState = useSelector((state: any) => state.language)
  const personalityState = useSelector((state: any) => state.personality)

  const clickPicture = useCallback(() => {
    const limit = introData.length - 1

    count < limit ? setCount(count + 1) : setCount(0)
  }, [count, introData])

  const togglePrimaryColorClass = useCallback((color: any) => {
    document.body.className = document.body.className.replace(/primary-color-\w+/g, '')
    document.body.classList.add(`primary-color-${color}`)
  }, [])

  const togglePersonality = useCallback(
    (personality: any) => {
      dispatch(actions.setPersonality(personality))
      togglePrimaryColorClass(personality.color)
    },
    [dispatch, togglePrimaryColorClass]
  )

  useEffect(() => {
    togglePersonality(introData[count])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, languageState])

  return (
    <section className={`section ${styles['section-intro']}`}>
      <div className="section-content">
        <header className={styles.header}>
          <div
            className={`${styles.circle} ${styles[`primary-color-${personalityState?.data?.color}`]}`}
            onClick={clickPicture}
          >
            <img className={styles.picture} src={personalityState?.data?.picture} alt="Gabriel Lima" title="Click Me" />
          </div>

          <h1 className={`${styles.heading} `}>
            <div className={styles.intro}>{t('intro.greeting')}</div>
            <div className={styles.name}>Gabriel Lima</div>
            <div className={`${styles.position}`}>{personalityState?.data?.position}</div>
          </h1>
        </header>

        <div className={styles['bio-wrapper']}>
          <p className={styles['punch-line']}>
            <Trans i18nKey="intro.punch-line">I build things for the web and love what I do.</Trans>
          </p>
          <p className={styles.bio}>
            <Trans i18nKey="intro.bio">
              Mainly focused on
              <strong>Front-end Development</strong> with a good <strong>UI/UX</strong>
              eye and always trying different things.
            </Trans>
            <strong>
              <em className={styles['personality-bio']}> {personalityState?.data?.bio}</em>
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default withNamespaces()(Intro)
