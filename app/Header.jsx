import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="left">
        <Link href='/' className="shape">
          <p>K</p>
        </Link>
      </div>

      <div className="right">
        <Link href='/info'>Info</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/kontakt'>Kontakt</Link>
      </div>
    </header>
  )
}
