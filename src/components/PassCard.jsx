export default function PassCard() {
  return (
    <div className='pass-card'>
      <div className='pass-top'>
        <div>
          <div className='pass-brand'>
            Kash<span>Pass</span>
          </div>

          <div className='pass-label'>Reward balance</div>
        </div>

        <div className='pass-icon'>K</div>
      </div>

      <div className='pass-balance'>$24.80</div>

      <div className='pass-progress'>
        <div className='pass-progress-top'>
          <span>Next reward</span>
          <strong>82%</strong>
        </div>

        <div className='progress-track'>
          <div className='progress-fill' />
        </div>
      </div>

      <div className='pass-bottom'>
        <div>
          <span className='pass-small-label'>Member</span>
          <strong>KASHPASS</strong>
        </div>

        <div className='qr-placeholder' aria-hidden='true'>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}
