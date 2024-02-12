import React from 'react'
import './Navbars.css'

export default function Navbars() {
  return (
    <div className="n-wrapper">
        <div className='container'>
             <div className="n-container">
              {/* Left section */}
              <div className="n-logo font-bold text-white">
                <span>Maket design</span>
              </div>
              {/* Right section */}
              <div className="n-right flex items-center gap-3 justify-center text-sm">
                 <div className="n-menu flex items-center gap-3 justify-center">
                    <span>What we do</span>
                    <span>How we works</span>
                    <span>Our Markting</span>
                    <span>Testimonial</span>
                 </div>
                 <div className="fund-button text-sm">button</div>
              </div>
             </div>
        </div>
    </div>
  )
}
