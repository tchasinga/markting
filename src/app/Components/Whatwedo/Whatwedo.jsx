"use client";
import React from 'react';
import MeetDaata from '../../Utils/MeetDaata';
import Image from "next/image";
import  './Whatwedo.css';
import { motion } from 'framer-motion';
import {imageVariantsTitle , imageVariants , DesVariants} from '../../Utils/animation';


export default function Whatwedo() {
  return (
    <div className="wwd-wrapper m-16">
        <div className="container">
            <div className="wwd-container">
                <div className="wwd-head">
                    <div>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={imageVariantsTitle}
                    className="tag text-3xl text-gray-900">What we do</motion.span>
                    </div>
                   
                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={imageVariants}
                    className="title">We are a team of professionals who are passionate about what we do. We offer a wide range of services to meet your needs. We are here to help you grow your business and make your dreams a reality. Our services include:</motion.span>
                 
                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={DesVariants}
                    className="des">Immediate and 100% Guaranteed</motion.span> 
                 </div>

                 {/* new code is added now.... */}

                 <div className="wwd-blocks">
                    <div classNam="wwd-block">
                        <div>
                        <motion.span
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={imageVariantsTitle}
                        className="wwd-block-title">Revenue</motion.span>
                        </div>
                        <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={DesVariants}
                        className="wwd-block-des">We help you increase your revenue by providing you with the best marketing strategies and tools to help you grow your business.</motion.span>

                        <div className="flex-1 flex  items-center justify-center text-center gap-4 border-dark-100 p-6">
                            {
                               MeetDaata.slice(0,3).map((item, index) => (
                                <motion.div
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={imageVariants}
                                    key={index} className="flex-1 flex  flex-col items-center justify-center text-center gap-4 border-dark-100 p-6">
                                        <Image src={item.src} alt={item.title} width={80} heigth={80}/>
                                        <span className="wwd-block-img-title">{item.title}</span>
                                </motion.div>
                            ))
                            }
                        </div>
                    </div>
                    <div classNam="wwd-block">
                    <div>
                        <motion.span
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={imageVariantsTitle}
                        className="wwd-block-title">Commerce side</motion.span>
                        </div>
                        <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={DesVariants}
                        className="wwd-block-des">We help you increase your revenue by providing you with the best marketing strategies and tools to help you grow your business.</motion.span>

                    <div className="flex-1 flex  items-center justify-center text-center gap-4 border-dark-100 p-6">
                            {
                               MeetDaata.slice(3,6).map((item, index) => (
                                <motion.div
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={imageVariants}
                                    key={index} className="flex-1 flex  flex-col items-center justify-center text-center gap-4 border-dark-100 p-6">
                                        <Image src={item.src} alt={item.title} width={80} heigth={80}/>
                                        <span className="wwd-block-img-title">{item.title}</span>
                                </motion.div>
                            ))
                            }
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
