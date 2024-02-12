"use client"
import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import heroData from "../../Utils/data.js"
import Image from "next/image";
import { motion , delay} from 'framer-motion';

export default function Hero() {

  const variants = (delay) =>({
    initial : {
      y: "18rem"
    },
    animate : {
      y: "0rem",
       transition: {
        damping: 25,
        type: "spring",
        duration: 7,
        delay 
       }
    }
  })

  return (
    <div className="h-wrapper">
        <div className="container">
            <div className="h-container">
               {/* Left section */}
              
               <div className="h-left">
                 <div className="image-row">
                  {
                    heroData.slice(0, 3).map((person , i) =>(
                      <div className="person-pill" key={i}>
                        <motion.div
                        initial={"initial"}
                        animate={"animate"}
                        variants={variants(person.delay)}
                        style={{backgroundColor: person.bg}}
                        className="person-pill-bg">
                           <Image className="myImg" src={person.src} alt={person.src}/>
                        </motion.div>
                      </div>
                    ))
                  }
                 </div>

                 <div className="image-row">
                  {
                    heroData.slice(3, 6).map((person , i) =>(
                      <div className="person-pill" key={i}>
                        <motion.div
                         initial={"initial"}
                         animate={"animate"}
                         variants={variants(person.delay)}
                         style={{backgroundColor: person.bg}}
                        className="person-pill-bg">
                        <Image className="myImg" src={person.src} alt={person.src} />
                      </motion.div>
                      </div>
                    ))
                  }
                 </div>
               </div>

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

               <EmailBox />
               </div>
            </div>
        </div>
    </div>
  )
}
