import Link from 'next/link';
import React from 'react'

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
        href={href}
        className='block py-1 px-3 text-twine text-sm md:text-base uppercase font-semibold'
    >
        {title}
    </Link>
  )
}

export default NavLink