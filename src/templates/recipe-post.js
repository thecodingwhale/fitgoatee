import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Template from '../components/template'
import RecipeCard from '../components/recipe-card'

class Recipe extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Template>
        <div className="recipe-cover">
          <img
            className="recipe-image"
            src={post.heroImage.fluid.src}
            alt={post.heroImage.description}
          />
        </div>
        <div className="container mx-auto px-4 mb-6">
          <div className="recipe-lead-container">
            <h1 className="recipe-lead-title">{post.title}</h1>
            <p className="recipe-lead-description">
              {post.description.description}
            </p>
          </div>
          <div className="recipe-content">
            <div className="recipe-sidebar">
              <h2>Ingredients</h2>
              <ul>
                <li>1½ tbsp unflavored powdered gelatin</li>
                <li>¼ cup cold water</li>
                <li>1½ cups unsweetened almond milk</li>
                <li>1½ cups heavy whipping cream</li>
                <li>2 tsp vanilla extract</li>
                <li>¼ cup erythritol</li>
                <li>4 egg yolks, large eggs</li>
              </ul>
            </div>
            <div className="recipe-body">
              <h2>Instructions</h2>
              <ol>
                <li>
                  In a small bowl, stir together the gelatin and cold water. Set
                  aside for 3-5 minutes, giving the gelatin a chance to bloom.
                </li>
                <li>
                  Add the almond milk, heavy cream, and vanilla to a
                  medium-sized saucepan, stirring together constantly, over
                  medium heat. When bubbles begin to form, remove from the heat,
                  and add the bloomed gelatin to the hot mixture. Whisk together
                  until the gelatin has completely dissolved.
                </li>
                <li>
                  Place the erythritol and egg yolks into a mixing bowl. Using
                  an electric mixer, beat together at medium speed until it
                  becomes a light color. Reduce the speed to low and very
                  slowly, trickle the milk mixture into the egg mixture,
                  stirring for a few minutes, until combined.
                </li>
                <li>
                  Add the mixture back to the saucepan, and heat over medium-low
                  heat, whisking constantly for about 5 minutes.
                </li>
                <li>
                  Remove from the heat, and place the custard in a heat-safe
                  bowl. Refrigerate for about 1/2 hour, or until completely
                  cooled, and slightly thickened. Begin preparing the pastry.
                </li>
              </ol>
              <h2>Tips</h2>
              <p>
                We do not recommend scaling up or down the serving size of this
                recipe due to its complexity.
              </p>
              <p>
                Pastry will soften quite fast, so this slice is best eaten
                quickly.
              </p>
              <p>
                If you prefer a sturdier pastry, double the quantity and roll it
                thicker.
              </p>
              <p>
                Little cracks may form in the dough while being rolled out.
                Simply take dough pieces from the edges, patch the cracks, and
                roll out to smooth.
              </p>
              <p>Refrigerates well for a few days.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-6">
          <h2 className="mt-2 text-gray-900 font-semibold text-xl sm:mt-4 sm:text-2xl mb-4">
            You might also like
          </h2>
          <div className="grid gap-4 grid-cols-2 sm:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {posts.map((post, index) => {
              return (
                <div key={index}>
                  <RecipeCard {...post.node} />
                </div>
              )
            })}
          </div>
        </div>
      </Template>
    )
  }
}

export default Recipe

export const pageQuery = graphql`
  query RecipePostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
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
