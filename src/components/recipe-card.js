import React from 'react'

const RecipeCard = () => {
  return (
    <div className="mb-2">
      <div className="relative pb-5/6">
        <img
          className="absolute h-full w-full object-cover rounded-lg shadow-md"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Rear view of modern home with pool"
        />
      </div>
      <div className="relative px-2 sm:px-4 -mt-12">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg">
          <h4 className="font-semibold text-sm leading-tight truncate sm:text-lg mb-1">
            Modern home in city center Modern home in city center
          </h4>
          <div className="text-xs sm:text-sm truncate">
            This is a short description of the meal
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
