import React from 'react'
import { Link } from 'gatsby'
import Template from '../components/template'
import RecipeCard from '../components/recipe-card'

const Recipes = () => {
  const elements = [
    'one',
    'two',
    'three',
    'four',
    'one',
    'two',
    'three',
    'four',
    'one',
    'two',
    'three',
    'four',
  ]
  return (
    <Template>
      <div className="container mx-auto px-4 mb-6">
        <h2 className="mt-2 text-gray-900 text-xl sm:mt-4 sm:text-2xl">
          Recipes
        </h2>
        <p className="mb-4 text-gray-700 text-md">
          My everyday home cooked meals for my weight loss
        </p>
        <div className="grid gap-4 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {elements.map((value, index) => {
            return (
              <div key={index}>
                <Link to="/recipe">
                  <RecipeCard />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Template>
  )
}

export default Recipes
