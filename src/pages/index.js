import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import SubscribeForm from '../components/subscribe-form'
import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Helmet title={siteTitle} />
        <div className={styles.box}>
          <h1>
            fitgoatee
            <br />
            <small>road to wellness</small>
          </h1>
          <p>
            Hi Visitor! I'm still doing my best for making my site great so I
            can help your journey
          </p>
          <p>You can add your email so I can send you updates as well.</p>
          <p>Thank you and Stay Safe</p>
          <hr />
          <SubscribeForm />
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
