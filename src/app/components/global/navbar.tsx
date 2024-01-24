'use client';
import React, { useEffect, useState, useRef } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbar = ()  => {
    setNavbarOpen(!navbarOpen)
  }

  const closeNavbarOnClick = (event: MouseEvent) => {
    const isXIcon = event.target === navRef.current?.querySelector(`.${styles.hamburgerOpen}`);
    const isNavLinkContainer = navRef.current?.contains(event.target as Node);

    console.log('navRef', navRef.current)

    if (navbarOpen && (isXIcon || isNavLinkContainer)) {
      console.log('xIcon?', isXIcon)
      console.log('clicked a nav link!')
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      navRef?.current?.addEventListener('click', closeNavbarOnClick)
    }

    return () => {
      // Remove event listener on component unmount
      navRef?.current?.removeEventListener('click', closeNavbarOnClick);
    };
  }, [navbarOpen])

  return (
    <div className={styles.navigation} ref={navRef}>
      <div className={styles.logoContainer}>
        {/* TODO: Logo here */}
        <Link href="/">
          Logo here
        </Link>
      </div>
      {/* TODO Mobile navigation toggle */}
      <div onClick={toggleNavbar} className={styles.toggle}>
        {navbarOpen ? (
          <div className={styles.hamburgerOpen}></div> 
        ) : (
          <div className={styles.hamburger}></div>
        )}
      </div>
      {/* Nav Links */}
      <div className={`${styles.navLinkContainer} ${navbarOpen ? styles.navLinkContainerOpen : ''}`}>
        <Link className={styles.navLinks} href="/about">About</Link>
        <Link className={styles.navLinks} href="/services">Services</Link>
        <Link className={styles.navLinks} href="/contact">Contact</Link>
      </div>
    </div>
  )
}