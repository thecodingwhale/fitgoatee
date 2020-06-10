import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import SubscribeForm from '../components/subscribe-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Template from '../components/template'

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const apiUrl = get(this, 'props.data.env.apiUrl')
    const metaDescription = `My main goal is to help those who want to lose weight by guiding them where to start, categorize and share all my personal experiences in this journey.`
    const elements = ['one', 'two', 'three', 'four']

    return (
      <div className="antialiased">
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <Template>
          <div className="container mx-auto px-4 mb-6">
            <h2>Recipes</h2>
            <p className="mb-4">
              My everyday home cooked meals for my weight loss
            </p>
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {elements.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="relative pb-5/6">
                      <img
                        className="absolute h-full w-full object-cover rounded-lg shadow-md"
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Rear view of modern home with pool"
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                          <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                            Day 01
                          </div>
                        </div>
                        <h4 className="mt-1 font-semibold text-sm lg:text-md leading-tight truncate">
                          Modern home in city center Modern home in city center
                        </h4>
                        <div className="mt-1 text-xs truncate">
                          This is a short description of the meal
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Template>
        <div className="container mx-auto px-4 hidden">
          <div>
            <div className="mb-6">
              <h2>Hello! I'm Aldren Terante.</h2>
              <p className="font-light text-lg mb-5">{metaDescription}</p>
              <p className="text-gray-600 mb-2">
                This website is still in progress to help you better! If you
                have some questions email me at{' '}
                <a className="text-orange-600" href="fitgoatee@gmail.com">
                  <strong>fitgoatee@gmail.com</strong>
                </a>
              </p>
              <p className="text-xs text-gray-600">
                You can add your email so I can send you updates as well. Thank
                you and stay safe!
              </p>
            </div>
            <div className="rounded overflow-hidden shadow-lg bg-white mb-5">
              <div className="px-6 py-4">
                <div className="hidden">{apiUrl}</div>
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
