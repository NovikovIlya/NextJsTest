import Link from 'next/link'
import React from 'react'

const TheHeader = () => {
  return (
    <header className='header'>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/about'>About</Link>
        <Link href='/kek'>kek</Link>
    </header>
  )
}

export default TheHeader