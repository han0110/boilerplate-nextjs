import React from 'react'
import PropTypes from 'prop-types'

import style from './Layout.scss'

const Layout = ({ children }) => (
  <div className={style.container}>
    <div className={style.children}>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
