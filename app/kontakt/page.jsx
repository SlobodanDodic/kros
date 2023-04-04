import Image from "next/image"
import Link from "next/link"
import twitter from '../../public/images/socials/twitter.png'
import instagram from '../../public/images/socials/instagram.png'
import facebook from '../../public/images/socials/facebook.png'
import Map from "@/components/Map"

export const metadata = {
  title: "Kontakt"
}

export default function Kontakt() {
  return (
    <div className='box'>
      <div className="img-box img-box-kontakt">
        <h1>KONTAKT</h1>
      </div>

      <div className="kontakt-info">
        <div className="phone">
          <p>(+381) 60 1234 567</p>
        </div>
        <div className="mail">
          <p>kros@gmail.com</p>
        </div>
      </div>

      <Map />

      <div className="socials">
        <h4>Slobodano nas kontaktirajte i preko društvenih mreža:</h4>
        <div className="social-icons">
          <Link href="https://twitter.com/" target="_blank">
            <Image src={twitter} alt='twitter' priority={true} className="single-icon" />
          </Link>
          <Link href="https://instagram.com/" target="_blank">
            <Image src={instagram} alt='instagram' priority={true} className="single-icon" />
          </Link>
          <Link href="https://facebook.com/" target="_blank">
            <Image src={facebook} alt='facebook' priority={true} className="single-icon" />
          </Link>
          <div className="freepic-icon">
            <Link href="http://www.freepik.com" target="_blank">Icons designed by Creative_hat / Freepik</Link>
            <Link href="http://www.slobodandodic.com" target="_blank">Website design by @FREMEN</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
