import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layouts'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello Gatsby Course</h1>
      <Link to='/about'>About</Link>
    </Layout>
  )
}

export default IndexPage