import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='topNav'>
        <img src='/img/logo.png' width={50} height={50} alt="logo"/>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about_us" passHref>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>{`All Events in world!`.toUpperCase()}</h1>
    </header>
  );
}

export default Header;