import { Gamepad2 } from 'lucide-react'

import PassCard from './PassCard'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='hero-badge'>
          <span className='hero-badge-dot' />
          Rewards made simple
        </div>

        <h1>
          Turn play into
          <span> real rewards.</span>
        </h1>

        <p className='hero-description'>
          Discover games, complete challenges, and earn cash rewards for the time you already spend playing.
        </p>

        <div className='hero-actions'>
          <button className='primary-button'>
            Get your KashPass
          </button>

          <a href="#how-it-works" className='secondary-button'>
            See how it works
          </a>
        </div>

        <div className='hero-trust'>
          <span>Free to join</span>
          <span>No subscription</span>
          <span>Real rewards</span>
        </div>
      </div>

      <div className='hero-visual'>
        <div className='glow glow-one' aria-hidden='true' />
        <div className='glow glow-two' aria-hidden='true' />

        <PassCard />

        <div className='floating-reward reward-one'>
          <div className='reward-icon'>$</div>

          <div>
            <span>Reward earned</span>
            <strong>+$5.00</strong>
          </div>
        </div>

        <div className='floating-reward reward-two'>
          <div className='game-icon'>
            <Gamepad2 aria-hidden='true' />
          </div>

          <div>
            <span>Challenge complete</span>
            <strong>Level 10</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
