import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'next/router'

import { Link } from '../../shared/routes'

import style from './Nav.scss'

const Nav = ({ lng, t }) => {
  const links = [
    { route: '/', text: t('common:nav.home') },
    { route: '/about', text: t('common:nav.about') },
    { route: '/login', text: t('common:nav.login') },
    { route: '/signup', text: t('common:nav.signup') },
    { route: `/${lng === 'zh' ? 'en' : ''}`, text: t('common:nav.lng.title') },
  ]

  return (
    <div className={style.container}>
      {
        links.map(({ text, route }) => (
          <Link route={route} key={text} prefetch>
            <a className={style.link}>
              <h5>
                {text}
              </h5>
            </a>
          </Link>
        ))
      }
    </div>
  )
}

Nav.propTypes = {
  lng: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

export default withRouter(withNamespaces('common')(Nav))
