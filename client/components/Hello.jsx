import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../shared/routes'

const Hello = ({ word }) => (
  <div>
    <Link route="/">
      <a>/</a>
    </Link>
    <Link route="/en">
      <a>/en</a>
    </Link>
    <Link route="/about">
      <a>/about</a>
    </Link>
    <Link route="/en/about">
      <a>/en/about</a>
    </Link>
    <h1>{word}</h1>
  </div>
)

Hello.propTypes = {
  word: PropTypes.string.isRequired,
}

export default Hello
