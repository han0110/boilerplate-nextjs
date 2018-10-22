import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'

import style from './Introduction.scss'

const Introduction = ({ t }) => (
  <div className={style.container}>
    <h3>
      {t('about:title')}
    </h3>
  </div>
)

Introduction.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('about', { wait: true })(Introduction)
