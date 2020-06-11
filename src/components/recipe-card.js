import React from 'react'

const RecipeCard = () => {
  return (
    <div>
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
}

export default RecipeCard
