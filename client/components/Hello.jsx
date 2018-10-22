import React from 'react'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'

import style from './Hello.scss'

const Hello = ({ t, user }) => (
  <div className={style.container}>
    <h3>{t('home:greet')} {user.name}</h3>
  </div>
)

Hello.propTypes = {
  t: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default connect(store => ({ user: store.user }))(withNamespaces('home', { wait: true })(Hello))
