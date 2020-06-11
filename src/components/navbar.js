import React, { useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import Logo from '../assets/images/fitgoatee.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto sm:px-4 sm:py-3 sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <Link to="/">
            <Logo className="h-8 w-20" />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={classnames({
                    hidden: !isOpen,
                  })}
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  className={classnames({
                    hidden: isOpen,
                  })}
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={classnames({
            'px-2 pt-2 pb-4 sm:flex sm:p-0': true,
            block: isOpen,
            hidden: !isOpen,
          })}
        >
          <Link
            to="/recipes"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Recipes
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
