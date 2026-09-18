import logo from '../assets/KashPassLogo.png'

export default function SiteHeader() {
  return (
    <header className='navbar'>
      <img
        src={logo}
        alt="KashPass"
        className='kashpass-logo'
        width={2172}
        height={724}
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
