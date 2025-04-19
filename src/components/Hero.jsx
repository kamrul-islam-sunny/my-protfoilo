import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import myPic from '../../public/asset/myPic.jpg'

export default function Hero() {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between py-8 md:py-16 ">
                <div className="text-center md:text-start">
                    <p className="hidden md:block text-sm font-medium text-gray-600">Hi, my name is</p>
                    <h1 className=" text-2xl md:text-3xl font-semibold text-gray-700 mt-2">Kamrul Islam Sunny</h1>
                    <h2 className="mt-2 text-lg md:text-xl text-gray-800">
                        <span className="font-semibold ">Frontend Developer</span> & <span className="font-medium ">Web Designer</span>
                    </h2>
                    <p className="mt-4 text-base font-medium text-gray-600 max-w-96 ">
                        I am a passionate Frontend developer, focused on creating beautiful and user-interactive websites.
                    </p>
                    <div className="flex justify-center md:justify-start  gap-4 mt-6">
                        <button className="px-6 py-2 bg-gray-900 text-white cursor-pointer shadow-md hover:bg-gray-700 transition duration-300">
                            Download CV
                        </button>
                        <a target='_blank' href='https://github.com/kamrul-islam-sunny' className="px-6 py-2 border border-dashed border-gray-700 text-gray-900 cursor-pointer  hover:bg-gray-100 transition duration-300">
                            GitHub
                        </a>
                    </div>

                </div>

                <div className="flex gap-2  mr-8 md:mr-0" >
                    <div className="flex flex-col gap-1 items-center justify-start md:mr-2">
                        <a target='_blank' href="https://www.facebook.com/kamrulislam.sunny.35/"><FaFacebookSquare className='size-8 text-gray-600 cursor-pointer' /></a>
                        <a target='_blank' href="https://github.com/kamrul-islam-sunny"><FaGithubSquare className='size-8 text-gray-600 cursor-pointer' /></a>
                        <FaLinkedin className='size-8 text-gray-600 cursor-pointer' />
                    </div>
                    <div className="w-60 ">
                        <img className='object-cover w-full h-full' src={myPic} alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="">
                <FaFacebookSquare />
                <FaGithubSquare /> 
                <FaLinkedin />
            </div> */}
        </div>
    )
}
// <FaFacebookSquare /> <FaGithubSquare /> <FaLinkedin />