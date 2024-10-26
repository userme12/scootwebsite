import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Button, Heading2, Heading4 } from '../../common'

export const Navbar = () => {
  return (
    <nav className='bg-white py-[22px]'>
      <div className='container flex justify-between items-center'>
        <Link to='/'><Heading2>scoot</Heading2></Link>
        <ul className='flex gap-[32px]'>
          <li>
            <NavLink to='/about'><Heading4>About</Heading4></NavLink>
          </li>
          <li>
            <NavLink to='/location'><Heading4>Location</Heading4></NavLink>
          </li>
          <li>
            <NavLink to='/careers'><Heading4>Careers</Heading4></NavLink>
          </li>
        </ul>
        <Button>Get Scootin</Button>
      </div>
    </nav>
  )
}
