import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <div className="h-wrapper">
        <div className="container">
            <div className="h-container">
               {/* Left section */}
              
               <div className="h-left">Left Section</div>

               {/* Right section */}
               <div className="h-right">
               <div className="h-title">
                <span>Managing How</span>
                <span>You grow your</span>
                <span>Digital Markte</span>
               </div>

               <div className="h-des">
               Marketing refers to the activities a company undertakes to promote the buying or selling of a product or service, including advertising, selling, and delivering products to consumers or other businesses
               </div>

               <span>Email Section</span>
               </div>
            </div>
        </div>
    </div>
  )
}
