import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layouts'

const AboutPage = () => {
  return (
    <Layout
      title='About This Site'
      description="More information about this site."
    >
      <h1>About</h1>
      <Link to='/'>Back to home</Link>
    </Layout>
  )
}

export default AboutPage