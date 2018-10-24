import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { withRouter } from 'next/router'

import { Link } from '../../shared/routes'

import style from './Nav.scss'

const Nav = ({ t }) => {
  const links = [
    { route: '/', text: t('common:nav.home') },
    { route: '/page1', text: t('common:nav.page1') },
    { route: '/page2', text: t('common:nav.page2') },
  ]

  // TODO: Add language handler to set language in cookie

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
  t: PropTypes.func.isRequired,
}

export default withRouter(withNamespaces('common')(Nav))
