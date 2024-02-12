"use client"

import React from 'react'
import './EmailBox.css'
import {LuMail} from "react-icons/lu"
import { motion } from 'framer-motion';

export default function EmailBox() {
  return (
    <motion.div  className="emailBox">
        {/* Icons code is added now...*/}
        <div className="">
            <LuMail size={30} color='grey'/>
        </div>

        {/* Input controlls*/}
            <input type="email" placeholder="Enter your email..."/>

        <div className="getFunded">
            Sent mail
        </div>
    </motion.div>
  )
}
