import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function AboutMe() {
    return (
        <div className=''>
            <div className="">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
                    <p className="mt-4 text-base text-gray-600">
                        Hi, I'm Kamrul Islam Sunny, a passionate Frontend Developer and Web Designer based in Dhaka, Bangladesh. I love bringing ideas to life by building beautiful, user-friendly websites that create memorable digital experiences.

                        I enjoy working with modern technologies like React, JavaScript, and Tailwind CSS, and I'm always excited to explore new tools that make the web even better. I have a special love for creating projects that feel simple yet stunning — websites that may look clean and minimal, but deliver a gorgeous, heart-touching experience when users interact with them.
                        Making users feel comfortable, happy, and connected through design and functionality is something I truly enjoy.
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

                <div className="">
                    <div className="mt-12 ">

                        <h1 className='text-xl sm:text-3xl font-semibold text-gray-800 '>My programming journey</h1>

                    </div>
                    <p className="mt-4 text-lg text-gray-600">My journey to learn programming began. My diploma is from first semester of engineering life. I had very little understanding of programming at first. In the first semester when I was studying very much in theory base, I learned from my friends elder brothers that if the students of computer science do not have skills, they will not be able to do anything in life. Since then I slowly started learning programming from YouTube after hearing from my elder brothers. Then I follow many playlists like Anisul Islam, Sumit Saha. Then complete my Programming Hero Level 1 web development course. This was my journey to start programming in short</p>
                </div>

                <div className="">
                    <div className="mt-12 ">

                        <h1 className='text-xl sm:text-3xl font-semibold text-gray-800 '>My hobbies</h1>

                    </div>
                    <p className="mt-4 text-lg text-gray-600">I have a deep passion for playing football, which I thoroughly enjoy during every match. In addition to this, I love going to the gym to stay fit and active. Teaching is something I'm genuinely interested in, especially in the field of ICT, and I find joy in sharing knowledge with others. In my free time, I also dedicate myself to reading the Quran, as it brings peace and guidance into my life</p>
                </div>
            </div>
        </div>
    )
}
