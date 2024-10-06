import React from 'react'
//import Link from 'next/link'
import NavLink from './NavLink'

const Navbar = () => {
  const navItems = [
    {title: '📌Home', href: '/#home'},
    {title: '📝About', href: '/#about'},
    {title: '💼Work', href: '/#work'},
    {title: '💻Projects', href: '/#projects'},
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-[100] bg-cinder'>
      <div className='max-w-[100vw] w-screen flex flex-row flex-wrap items-center justify-center mx-auto py-2 h-full'>
        {navItems.map((item, index) => (
          <NavLink title={item.title} href={item.href} key={index} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar