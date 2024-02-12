"use client"

import React from 'react'
import './EmailBox.css'
import {LuMail} from "react-icons/lu"
import { motion } from 'framer-motion';
import { containerVariants } from '@/app/Utils/animation';

export default function EmailBox() {
  return (
    <motion.div 
    initial = {{
        width: ".5rem",
        borderRadius : "100%",
    }}
    whileInView={{
        width: "70%",
        borderRadius : "999px",
        transition: {
            type: "easeOut",
            duration : 1,
        }
    }}
    className="emailBox">
        {/* Icons code is added now...*/}
        <motion.div 
        variants={containerVariants(0.6)}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport= {{
            once:true
        }}
        className="">
            <LuMail size={30} color='grey'/>
        </motion.div>

        {/* Input controlls*/}
            <motion.input
             variants={containerVariants(0.8)}
             initial={"offscreen"}
             whileInView={"onscreen"} 
             viewport= {{
                 once:true
             }}
            type="email" placeholder="Enter your email..."/>

        <motion.div
         variants={containerVariants(1)}
         initial={"offscreen"}
         whileInView={"onscreen"}
         viewport= {{
             once:true
         }}
        className="getFunded">
            Sent mail
        </motion.div>
    </motion.div>
  )
}
