import React from 'react'
import './Footer.css'
import Logo from './Logow.png'


function Footer() {
  return (
    <footer>
        <div className="footer-logo">
          <img src={Logo} alt="Logo" className="logo-icon" />
        </div>
        <div className='column'>
            <h3>First column</h3>
            <p>First page</p>
            <p>Second</p>
            <p>Third</p>
        </div>
        <div className='column'>
            <h3>Second</h3>
            <p>Fourth page</p>
            <p>Fifth</p>
            <p>Sixth</p>
        </div>
        <div className='column'>
            <h3>Third</h3>
            <p>Seventh page</p>
            <p>Eighth</p>
        </div>
        <div className='column subscribe'>
            <h3>Subscribe</h3>
            <input type='email'  placeholder='Enter email'/>
            <p>Join our newsletter to stay up to date on features and releases</p>
        </div>
        
    </footer>
  )
}

export default Footer