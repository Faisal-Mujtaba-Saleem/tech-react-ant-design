import React from 'react'

function AppFooter() {
    return (
        <div className="container mx-auto h-full flex flex-col items-center justify-evenly">
            <div className="flex items-center justify-center">
                <i className="fa-solid fa-bolt-lightning logo-icon"></i>
                <h1 className="text-white text-2xl font-normal uppercase mx-2">tech</h1>
            </div>
            <div className="flex items-center justify-evenly w-[25vw]">
                <a href="#" className="text-white mr-4 hover:text-[#1890ff]">
                    <i className="fab fa-2x fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white mr-4 hover:text-[#1890ff]">
                    <i className="fab fa-2x fa-twitter"></i>
                </a>
                <a href="#" className="text-white mr-4 hover:text-[#1890ff]">
                    <i className="fab fa-2x fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white mr-4 hover:text-[#1890ff]">
                    <i className="fab fa-2x fa-pinterest-p"></i>
                </a>
                <a href="#" className="text-white hover:text-[#1890ff]">
                    <i className="fab fa-2x fa-instagram"></i>
                </a>
            </div>
            <p className="text-[#fff] text-sm">
                Copyright © {new Date().getFullYear()} Tech
            </p>
        </div>
    )
}

export default AppFooter
