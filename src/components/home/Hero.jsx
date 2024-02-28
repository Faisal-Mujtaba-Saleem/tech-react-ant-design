import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'antd';
import { useFetch } from '../../utils/useFetch';

const Hero = () => {

    return (
        <section id='hero' className="relative bg-cover bg-center h-screen flex items-center px-20" >
            <div className="text-[rgba(0,0,0,.85)]">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">
                    Web and mobile payment built for developers
                </h3>
                <p className="text-lg md:text-lg mb-8 md:w-[60%] break-words">
                    Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.
                </p>
                <div className="flex items-center justify-between w-[20%]">
                    <Button className='primary-btn' type="primary" size="large">Learn More</Button>
                    <Button className='mx-4' size="large">
                        <i className="fa-solid fa-display mx-1"></i>
                        Watch a Demo
                    </Button>
                </div>
            </div>
        </section>

    );
};
export default Hero;