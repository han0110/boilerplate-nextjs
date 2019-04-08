import React from 'react'
import PropTypes from 'prop-types'
// Styles
import s from './Hello.scss'

const Hello = ({ message }) => (
  <div className={s.container}>
    <h2>{message}</h2>
  </div>
)

Hello.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Hello
