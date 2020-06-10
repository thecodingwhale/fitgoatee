import React from 'react'
import Template from '../components/template'

const Recipe = () => {
  return (
    <Template>
      <div className="relative pb-4/6 sm:pb-4/12 mb-6">
        <img
          className="absolute h-full w-full object-cover shadow-md"
          src="https://i.dietdoctor.com/wp-content/uploads/2020/03/keto-vanilla-slice-h.jpg?auto=compress"
          alt="Rear view of modern home with pool"
        />
      </div>
      <div className="container mx-auto px-4 mb-6">
        <div className="sm:absolute sm:top-0 sm:mt-24 sm:bg-white sm:bg-opacity-75 sm:max-w-md sm:rounded-lg sm:px-4 sm:py-4 md:px-6 md:py-6">
          <h1 className="text-gray-900 text-2xl font-semibold mb-2 sm:mb-0 md:text-2xl md:text-4xl">
            Low-carb vanilla slice
          </h1>
          <p className="text-gray-800 leading-relaxed mb-4 sm:mb-0 md:text-lg">
            You won’t find an Australian bakery that doesn’t have vanilla slice
            in the cabinet. Enjoy this divinely creamy classic treat with zero
            guilt.
          </p>
        </div>
        <div className="sm:flex">
          <div className="sm:w-2/5">
            <h2 className="text-gray-900 text-xl font-semibold mb-2 md:text-2xl">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-800 leading-relaxed mb-4 sm:text-xs md:text-sm lg:text-base">
              <li>1½ tbsp unflavored powdered gelatin</li>
              <li>¼ cup cold water</li>
              <li>1½ cups unsweetened almond milk</li>
              <li>1½ cups heavy whipping cream</li>
              <li>2 tsp vanilla extract</li>
              <li>¼ cup erythritol</li>
              <li>4 egg yolks, large eggs</li>
            </ul>
          </div>
          <div className="sm:w-3/5">
            <h2 className="text-gray-900 text-xl font-semibold mb-2 md:text-2xl">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-800 leading-relaxed mb-4">
              <li className="mb-2">
                In a small bowl, stir together the gelatin and cold water. Set
                aside for 3-5 minutes, giving the gelatin a chance to bloom.
              </li>
              <li className="mb-2">
                Add the almond milk, heavy cream, and vanilla to a medium-sized
                saucepan, stirring together constantly, over medium heat. When
                bubbles begin to form, remove from the heat, and add the bloomed
                gelatin to the hot mixture. Whisk together until the gelatin has
                completely dissolved.
              </li>
              <li className="mb-2">
                Place the erythritol and egg yolks into a mixing bowl. Using an
                electric mixer, beat together at medium speed until it becomes a
                light color. Reduce the speed to low and very slowly, trickle
                the milk mixture into the egg mixture, stirring for a few
                minutes, until combined.
              </li>
              <li className="mb-2">
                Add the mixture back to the saucepan, and heat over medium-low
                heat, whisking constantly for about 5 minutes.
              </li>
              <li className="mb-2">
                Remove from the heat, and place the custard in a heat-safe bowl.
                Refrigerate for about 1/2 hour, or until completely cooled, and
                slightly thickened. Begin preparing the pastry.
              </li>
            </ol>
            <h2 className="text-gray-900 text-xl font-semibold mb-2 md:text-2xl">
              Tips
            </h2>
            <p className="text-gray-800 leading-relaxed mb-2">
              We do not recommend scaling up or down the serving size of this
              recipe due to its complexity.
            </p>
            <p className="text-gray-800 leading-relaxed mb-2">
              Pastry will soften quite fast, so this slice is best eaten
              quickly.
            </p>
            <p className="text-gray-800 leading-relaxed mb-2">
              If you prefer a sturdier pastry, double the quantity and roll it
              thicker.
            </p>
            <p className="text-gray-800 leading-relaxed mb-2">
              Little cracks may form in the dough while being rolled out. Simply
              take dough pieces from the edges, patch the cracks, and roll out
              to smooth.
            </p>
            <p className="text-gray-800 leading-relaxed mb-2">
              Refrigerates well for a few days.
            </p>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default Recipe
