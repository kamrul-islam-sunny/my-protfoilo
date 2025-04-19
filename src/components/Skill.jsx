import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiNextdotjs, SiExpress } from "react-icons/si";

import {
    SiTypescript,
} from "react-icons/si";

export default function Skill() {


    const basicSkills = [
        { name: "HTML5", icon: <FaHtml5 className="text-gray-600 text-4xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-gray-600 text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-gray-600 text-4xl" /> },
        { name: "React.js", icon: <FaReact className="text-gray-600 text-4xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-600 text-4xl" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-gray-600 text-4xl" /> },
        { name: "Firebase", icon: <SiFirebase className="text-gray-600 text-4xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-gray-600 text-4xl" /> },
        { name: "Express", icon: <SiExpress className="text-gray-600 text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-gray-600 text-4xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-gray-600 text-4xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-gray-600 text-4xl" /> },
    ];

    // const skills1 = [


    //     { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" />, level: "Expert" },
    //     { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" />, level: "Expert" },
    //     { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" />, level: "Intermediate" },
    //     { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" />, level: "Intermediate" },
    //     { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" />, level: "Intermediate" },
    //     { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, level: "Expert" },
    //     { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" />, level: "Beginner" },
    //     { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" />, level: "Intermediate" },
    //     { name: "Express", icon: <SiExpress className="text-gray-800 text-4xl" />, level: "Beginner" },
    //     { name: "Git", icon: <FaGitAlt className="text-red-600 text-4xl" />, level: "Intermediate" },
    // ];

    // const skills = [
    //     {
    //         name: "HTML5",
    //         icon: <FaHtml5 className="text-orange-600 text-4xl" />,
    //         style: "ring-orange-200 bg-orange-50",
    //     },
    //     {
    //         name: "CSS3",
    //         icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
    //         style: "ring-blue-200 bg-blue-50",
    //     },
    //     {
    //         name: "JavaScript",
    //         icon: <FaJs className="text-yellow-400 text-4xl" />,
    //         style: "ring-yellow-200 bg-yellow-50",
    //     },
    //     {
    //         name: "TypeScript",
    //         icon: <SiTypescript className="text-blue-700 text-4xl" />,
    //         style: "ring-blue-300 bg-blue-50",
    //     },
    //     {
    //         name: "React.js",
    //         icon: <FaReact className="text-blue-500 text-4xl" />,
    //         style: "ring-blue-100 bg-blue-50",
    //     },
    //     {
    //         name: "Next.js",
    //         icon: <SiNextdotjs className="text-black text-4xl" />,
    //         style: "ring-gray-300 bg-gray-50",
    //     },
    //     {
    //         name: "Tailwind",
    //         icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    //         style: "ring-cyan-200 bg-cyan-50",
    //     },
    //     {
    //         name: "Node.js",
    //         icon: <FaNodeJs className="text-green-600 text-4xl" />,
    //         style: "ring-green-200 bg-green-50",
    //     },
    //     {
    //         name: "Express.js",
    //         icon: <SiExpress className="text-gray-800 text-4xl" />,
    //         style: "ring-gray-300 bg-gray-50",
    //     },
    //     {
    //         name: "MongoDB",
    //         icon: <SiMongodb className="text-green-700 text-4xl" />,
    //         style: "ring-green-300 bg-green-50",
    //     },
    //     {
    //         name: "Firebase",
    //         icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    //         style: "ring-yellow-300 bg-yellow-50",
    //     },
    //     {
    //         name: "Git",
    //         icon: <FaGitAlt className="text-red-600 text-4xl" />,
    //         style: "ring-red-200 bg-red-50",
    //     },
    // ];
    return (
        <div>
            <section className="py-8 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">My Skills</h2>
                <p className="text-gray-600 mb-10">Technologies I work with</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {basicSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center border border-gray-200 hover:border-gray-400 bg-gray-50 hover:bg-gray-100 px-2 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 hover:translate-y-0.5 "
                        >
                            {skill.icon}
                            <h3 className="mt-2 font-semibold text-gray-800">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}


{/* <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">My Skills</h2>
                <p className="text-gray-600 mb-10">Technologies I enjoy working with</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "React.js",
                        "Next.js",
                        "Tailwind CSS",
                        "Firebase",
                        "MongoDB",
                        "Node.js",
                        "Express.js",
                        "Git & GitHub",
                        "Figma",
                    ].map((skill, i) => (
                        <div
                            key={i}
                            className="group border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 flex flex-col items-center justify-center"
                        >
                            <div className="text-2xl font-semibold text-gray-800 group-hover:text-gray-900">
                                {skill}
                            </div>
                            <div className="w-8 h-0.5 bg-gray-300 mt-2 group-hover:bg-gray-600 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </section> */}


{/* <section className="py-14 px-6 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">My Skills</h2>
                <p className="text-gray-600 mb-10">Technologies I love to work with</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center justify-center p-5 rounded-xl shadow-md ring-2 ${skill.style} transition duration-300 hover:scale-105`}
                        >
                            {skill.icon}
                            <h3 className="mt-2 font-medium text-gray-800">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section> */}