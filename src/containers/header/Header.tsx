import React, {useState, useEffect, useCallback} from 'react'
import {Trans, withNamespaces} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import styles from './Header.module.css'
import {HeaderData} from './HeaderData'
import * as actions from './redux/HeaderActions'
import Personality from '../../shared/components/personality/Personality'
import { HeaderEnum } from './models/HeaderEnum'

const Header = ({t}: any) => {
  const headerData = HeaderData()
  const dispatch = useDispatch()
  const [count, setCount]: any = useState(0)
  const [active, setActive]: any = useState('')
  const languageState = useSelector((state: any) => state.language)
  const personalityState = useSelector((state: any) => state.personality)

  const onClickPicture = useCallback(() => {
    setActive('active')

    setTimeout(() => {
      setActive(undefined)
      count < headerData.length - 1 ? setCount(count + 1) : setCount(0)
    }, HeaderEnum.animationDelay)
  }, [count, headerData])

  const togglePersonality = useCallback(
    (personality: any) => {
      dispatch(actions.setPersonality(personality))

      document.body.className = document.body.className.replace(/primary-color-\w+/g, '')
      document.body.classList.add(`primary-color-${personality.color}`)
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(actions.getPersonality())
    togglePersonality(headerData[count])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, languageState])

  return (
    <section className={`section ${styles['section-header']}`}>
      <div className="section-content">
        <header className={styles.header}>
          <div className={styles['header-picture']}>
            <span className={styles['picture-hint']}>{t('header.hint')}</span>
            <Personality
              active={active}
              events={{
                onClick: onClickPicture
              }}
              image={{
                src: personalityState?.data?.picture,
                alt: 'Gabriel Lima',
              }}
            />
          </div>

          <h1 className={styles.heading}>
            <div className={styles.greeting}>{t('header.greeting')}</div>
            <div className={styles.name}>Gabriel Lima</div>
            <div className={styles.position}>{personalityState?.data?.position}</div>
          </h1>
        </header>

        <div className={styles['bio-wrapper']}>
          <p className={styles['punch-line']}>
            <Trans i18nKey="header.punch-line">I build things for the web and love what I do.</Trans>
          </p>
          <p className={styles.bio}>
            <Trans
              i18nKey="header.bio"
              defaults="Mainly focused on <1>Front-end Development</1> with a good
              <3>UI/UX</3> eye and always trying different things."
            >
              .<strong>.</strong> . <strong>.</strong> .
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

export default withNamespaces()(Header)
