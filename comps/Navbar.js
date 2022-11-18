import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <h1>My Logo</h1>
        <div className="menu">
            <ul className="list">
                <li><Link href="/">Homepage</Link></li>
                <li><Link href="/Products">Products</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar