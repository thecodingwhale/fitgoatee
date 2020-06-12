import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Template from '../components/template'
import RecipeCard from '../components/recipe-card'

class Recipes extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Template>
        <div className="container mx-auto px-4 mb-6">
          <h2 className="mt-2 text-gray-900 text-xl sm:mt-4 sm:text-2xl">
            Recipes
          </h2>
          <p className="mb-4 text-gray-700 text-md">
            My everyday home cooked meals for my weight loss
          </p>
          <div className="grid gap-4 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </Template>
    )
  }
}

export default Recipes

export const pageQuery = graphql`
  query RecipesQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
