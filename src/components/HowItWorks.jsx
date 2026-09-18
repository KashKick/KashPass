import { Check, Gamepad2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='how-section'>
      <div className='how-container'>
        <div className='how-heading'>
          <span className='how-eyebrow'>HOW IT WORKS</span>

          <h2>
            Simple to start.
            <span> Easy to earn.</span>
          </h2>

          <p>
            Add your KashPass, discover games and complete goals to earn real rewards along the way.
          </p>
        </div>

        <div className='how-steps'>
          <article className='how-step'>
            <div className="how-step-top">
              <span className='how-number'>01</span>
              <span className="how-label">GET STARTED</span>
            </div>

            <div className="how-visual how-visual--pass">
              <div className="mini-pass">
                <div className="mini-pass-top">
                  <strong>Kash<span>Pass</span></strong>
                  <div className="mini-pass-mark">K</div>
                </div>

                <div className="mini-pass-balance">
                  <span>Available balance</span>
                  <strong>$0.00</strong>
                </div>

                <div className="mini-pass-wallet">
                  + Add to Wallet
                </div>
              </div>
            </div>

            <h3>Add your KashPass</h3>

            <p>
              Add KashPass to your wallet and you're ready to start earning.
            </p>
          </article>

          <article className="how-step">
            <div className="how-step-top">
              <span className="how-number">02</span>
              <span className="how-label">PLAY</span>
            </div>

            <div className="how-visual how-visual--game">
              <div className="mini-game">
                <div className="mini-game-header">
                  <div className="mini-game-icon"><Gamepad2 strokeWidth={2.4}/></div>

                  <div>
                    <strong>Featured Game</strong>
                    <span>3 goals available</span>
                  </div>
                </div>

                <div className="mini-goals">
                  <div className="mini-goal">
                    <span>Reach Level 10</span>
                    <strong>+$3</strong>
                  </div>

                  <div className="mini-goal">
                    <span>Reach Level 30</span>
                    <strong>+$12</strong>
                  </div>

                  <div className="mini-goal">
                    <span>Reach Level 50</span>
                    <strong>+$22</strong>
                  </div>
                </div>
              </div>
            </div>

            <h3>Play & complete goals</h3>
            <p>
              Choose a game, hit the milestones and unlock rewards as you play.
            </p>
          </article>

          <article className="how-step">
            <div className="how-step-top">
              <span className="how-number">03</span>
              <span className="how-label">EARN</span>
            </div>

            <div className="how-visual how-visual--reward">
              <div className="mini-reward">
                <div className="mini-reward-check"><Check strokeWidth={2.4} /></div>
                <span>Reward added</span>
                <strong>+$12.00</strong>

                <div className="mini-reward-balance">
                  <span>KashPass balance</span>
                  <strong>$48.50</strong>
                </div>
              </div>
            </div>

            <h3>Get rewarded</h3>
            <p>
              Complete goals and watch your KashPass balance grow.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
