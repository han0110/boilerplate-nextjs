import React from 'react'
import PropTypes from 'prop-types'

import withI18next from '../hoc/withI18next'
import Layout from '../layouts'

const About = ({ t }) => (
  <Layout>
    {t('about:about')}
  </Layout>
)

About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withI18next(['common', 'about'])(About)
