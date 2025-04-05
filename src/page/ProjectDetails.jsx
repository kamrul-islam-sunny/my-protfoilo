import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../shared/projects'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function ProjectDetails() {
    const params = useParams()
        console.log(params.slug)
        const project = projects.find((project) => project.slug === params.slug)
    
  return (
      <div> <div className="max-w-6xl mx-auto px-4 py-10">
               {/* Project Banner */}
               <img
                   src={project.project_image}
                   alt={project.project_name}
                   className="w-full h-96 object-cover object-top rounded-xl shadow border border-gray-300 border-dashed p-2 mb-8"
               />
   
               {/* Title & Brief Description */}
               <h1 className="text-3xl font-bold text-gray-800 mb-4">
                   {project.project_name}
               </h1>
               <p className="text-gray-600 text-lg mb-6">
                   {project.brief_description}
               </p>
   
               {/* Action Links */}
               <div className="flex flex-wrap gap-4 mb-10">
                   <a
                       href={project.live_project_link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
                   >
                       <FaExternalLinkAlt />
                       Live Preview
                   </a>
                   <a
                       href={project.github_repository_link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow"
                   >
                       <FaGithub />
                       GitHub Repo
                   </a>
               </div>
   
               {/* Technology Stack */}
               <div className="mb-8">
                   <h2 className="text-xl font-semibold mb-2">🧰 Technologies Used</h2>
                   <div className="flex flex-wrap gap-2">
                       {project.main_technology_stack.map((tech, index) => (
                           <span
                               key={index}
                               className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
                           >
                               {tech}
                           </span>
                       ))}
                   </div>
               </div>
   
               {/* Features */}
               <div className="mb-8">
                   <h2 className="text-xl font-semibold mb-2">✨ Features</h2>
                   <ul className="list-none space-y-2">
                       {project.features.map((feature, index) => (
                           <li key={index} className="flex items-start gap-2 text-gray-700">
                               <IoIosArrowForward className="mt-1 text-blue-600" />
                               <span>{feature}</span>
                           </li>
                       ))}
                   </ul>
               </div>
   
               {/* Challenges */}
               <div className="mb-8">
                   <h2 className="text-xl font-semibold mb-2">🚧 Challenges Faced</h2>
                   <p className="text-gray-600">{project.challenges_faced}</p>
               </div>
   
               {/* Improvements & Future Plans */}
               <div className="mb-8">
                   <h2 className="text-xl font-semibold mb-2">📈 Future Plans</h2>
                   <p className="text-gray-600">{project.potential_improvements_future_plans}</p>
               </div>
           </div>
           </div>
  )
}
