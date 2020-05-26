import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import SubscribeForm from '../components/subscribe-form'
import styles from './index.module.css'
import logo from '../assets/images/fitgoatee.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const metaDescription = `My main goal is to help those beginners who want to lose weight by helping them where to start by sharing and categorizing all my personal experiences in this platform.`
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
              <p className="text-gray-600 mb-2">
                This website is still in progress to help you better! If you
                have some questions email me at{' '}
                <a className="text-blue-600" href="fitgoatee@gmail.com">
                  <strong>fitgoatee@gmail.com</strong>
                </a>
              </p>
              <p className="text-xs text-gray-600">
                You can add your email so I can send you updates as well. Thank
                you and stay safe!
              </p>
            </div>
            <hr className="mb-6" />
            <div className="rounded overflow-hidden shadow-lg bg-white mb-5">
              <div className="px-6 py-4">
                <SubscribeForm />
              </div>
            </div>
            <div>
              <a
                href="https://www.facebook.com/fitgoatee"
                target="_blank"
                rel="noopener norefferer"
                className="mr-2 inline-block text-gray-600 text-3xl"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCfbpA1zY3eFl-5u4PUJSqRg"
                target="_blank"
                rel="noopener norefferer"
                className="inline-block text-gray-600 text-3xl"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
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
