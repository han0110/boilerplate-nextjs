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
  let endpoint
  if (process.browser) {
    endpoint = 'https://api.localhost/v1/echos'
  } else {
    endpoint = 'http://api:3000/v1/echo'
  }

  try {
    const { data: { message } } = await axios.post(endpoint, {
      message: 'Hello world',
    })
    return { message }
  } catch (err) {
    return { message: err.message }
  }
}

Index.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Index
