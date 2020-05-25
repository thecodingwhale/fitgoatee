import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import SubscribeForm from '../components/subscribe-form'
import styles from './index.module.css'
import logo from '../assets/images/fitgoatee.svg'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const metaDescription = `Welcome to my site, I am here to help you lose your weight by sharing my personal experience and together let's work out our road to wellness.`
    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <div className={styles.box}>
          <hi className="mb-6">
            <img src={logo} />
            <span className="hidden">Fitgoatee</span>
          </hi>
          <div>
            <div className="mb-6">
              <p className="font-bold text-2xl mb-5">
                Hello! I'm Aldren Terante.
              </p>
              <p className="font-bold text-lg mb-5">{metaDescription}</p>
              <p className="text-gray-600">
                This website is still in progress to help you better!
              </p>
              <p className="text-xs text-gray-600">
                You can add your email so I can send you updates as well. Thank
                you and stay safe!
              </p>
            </div>
            <hr className="mb-6" />
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <SubscribeForm />
              </div>
            </div>
          </div>
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
