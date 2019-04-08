import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
// Components
import Layout from '../layouts/Layout'
import Hello from '../components/Hello'

const Index = ({ message }) => (
  <Layout>
    <Hello message={message} />
  </Layout>
)

Index.getInitialProps = async () => {
  const { data: message } = await axios.post('http://api.localhost/v1/echo', {
    data: {
      message: 'Hello world',
    }
  })
  return { message }
}

Index.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Index
