import logo from '../assets/KashPassLogo.webp'

export default function SiteHeader() {
  return (
    <header className='navbar'>
      <img
        src={logo}
        alt="KashPass"
        className='kashpass-logo'
        width={1200}
        height={400}
      />

      {/* <nav className='nav-links'>
        <a href="#how-it-works">How it works</a>
        <a href="#rewards">Rewards</a>
        <a href="#faq">FAQ</a>
      </nav>

      <button className='nav-cta'>Get KashPass</button> */}
    </header>
  )
}
