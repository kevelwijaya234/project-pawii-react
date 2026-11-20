import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
        <h1>HOME PAGE</h1>
        <NavLink to="/about">GO TO ABOUT PAGE</NavLink>
    </div>
  )
}

export default Home
