import React from 'react'

const RecipeCard = (props) => {
  console.log(props)
  const { title, description, heroImage } = props
  return (
    <div className="mb-2">
      <div className="relative pb-5/6">
        <img
          className="absolute h-full w-full object-cover rounded-lg shadow-md"
          src={heroImage.fluid.src}
          alt={heroImage.description}
        />
      </div>
      <div className="relative px-2 sm:px-4 -mt-12">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg">
          <h4 className="font-semibold text-sm leading-tight truncate sm:text-lg mb-1">
            {title}
          </h4>
          <div className="text-xs sm:text-sm truncate">
            {description.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
