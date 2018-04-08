import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="bg-grey-darkest flex justify-center">
    <div className="container p-3 flex items-center content-center md:justify-start sm:justify-center">
      <h1 className="p-0 m-0">
        <Link to="/" className="text-white no-underline">
          Starter kit
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
