import React from 'react'
import PropTypes from 'prop-types'

import '../styles/style.scss'

const Layout = ({ children }) => (
  <div id="layout">
    <div id="layout__children">{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
