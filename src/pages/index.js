import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Template from '../components/template'
import RecipeCard from '../components/recipe-card'
import SubscribeForm from '../components/subscribe-form'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const apiUrl = get(this, 'props.data.env.apiUrl')
    const metaDescription = `My main goal is to help those who want to lose weight by guiding them where to start, categorize and share all my personal experiences in this journey.`
    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <Template>
          <div className="container mx-auto px-4 mt-4 mb-6">
            <h2 className=" text-gray-900 text-xl sm:text-2xl">Recipes</h2>
            <p className="mb-4 text-gray-700 text-md">
              My everyday home cooked meals for my weight loss
            </p>
            <div className="grid gap-4 grid-cols-2 sm:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {posts.map((post, index) => {
                return (
                  <div key={index}>
                    <Link to="/recipe">
                      <RecipeCard {...post.node} />
                    </Link>
                  </div>
                )
              })}
            </div>
            <div className="text-right">
              <Link
                to="/recipes"
                className="bg-transparent hover:bg-orange-500 text-xs text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
              >
                View All
              </Link>
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
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            title
            description
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
