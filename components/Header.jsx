"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => { setToggle(!toggle) };

  return (
    <header>
      <div className="left">
        <Link href='/' className="shape">
          <p>K</p>
        </Link>
      </div>

      <div className={toggle ? "menu" : "menu-off"}>
        <Link href='/info' onClick={toggleState}>Info</Link>
        <Link href='/blog' onClick={toggleState}>Blog</Link>
        <Link href='/kontakt' onClick={toggleState}>Kontakt</Link>
      </div>

      <div className="right">
        <Link href='/info'>Info</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/kontakt'>Kontakt</Link>
        <div className="shape-menu" onClick={toggleState}>
          <p className={toggle ? "letterM-off" : "letterM"}>M</p>
          <p className={toggle ? "letterX" : "letterX-off"}>X</p>
        </div>
      </div>

    </header>
  )
}
