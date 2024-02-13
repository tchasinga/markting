"use client";
import React from 'react';
import MeetDaata from '../../Utils/MeetDaata';
import Image from "next/image";

export default function Whatwedo() {
  return (
    <div className="wwd-wrapper m-16">
        <div className="container">
            <div className="wwd-container">
                <div className="wwd-head">
                    <div>
                    <span className="tag text-3xl text-gray-900">What we do</span>
                    </div>
                    <span className="title">We are a team of professionals who are passionate about what we do. We offer a wide range of services to meet your needs. We are here to help you grow your business and make your dreams a reality. Our services include:</span>
                    <span className="des">Immediate and 100% Guaranteed</span> 
                 </div>

                 {/* new code is added now.... */}

                 <div className="wwd-blocks">
                    <div classNam="wwd-block">
                        <div>
                        <span className="wwd-block-title">Revenue</span>
                        </div>
                        <span className="wwd-block-des">We help you increase your revenue by providing you with the best marketing strategies and tools to help you grow your business.</span>

                        <div className="wwd-block-img">
                            {
                                MeetDaata.slice(0,3).map((item, index) => (
                                        <div key={index}>
                                            <Image src={item.src} alt={item.title} />
                                            <span className="wwd-block-img-title">{item.title}</span>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                    <div classNam="wwd-block"></div>
                 </div>
            </div>
        </div>
    </div>
  )
}
