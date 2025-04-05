import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function About() {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="">
                    {/* Left Side - Image */}
                  

                    {/* Right Side - About Information */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Hi, I'm Kamrul Islam Sunny, a passionate frontend developer and web designer based in Dhaka, Bangladesh. I specialize in creating beautiful, user-interactive websites that deliver great user experiences. I love solving problems through technology and enjoy learning new things to improve my skills.
                        </p>

                        <p className="mt-4 text-lg text-gray-600">
                            I'm always focused on creating clean, modern, and accessible web applications using the latest technologies, including React, JavaScript, and Tailwind CSS. When I'm not coding, you can find me playing sports, drinking coffee, or connecting with people who share my passion for technology.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex gap-6">
                            <a href="https://github.com/kamrul-islam-sunny" target="_blank" className="text-gray-800 hover:text-gray-600">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="text-gray-800 hover:text-gray-600">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="mailto:someone@example.com" className="text-gray-800 hover:text-gray-600">
                                <FaEnvelope className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
