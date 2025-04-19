import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { FaCode, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { IoBookOutline } from 'react-icons/io5'
import { VscSourceControl } from 'react-icons/vsc'
// import winterProject from '../../public/asset/winter.png'
import projects from '../shared/projects'
import { Link } from 'react-router-dom'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { IoIosArrowForward } from 'react-icons/io'

export default function Project() {
    const allProjects = projects;

    return (
        <div>
            <section id='project' className="py-8 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
                <p className="text-gray-600 mb-10">A collection of some of my best web development projects.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {allProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 hover:border-gray-400 p-4 rounded-md shadow-lg hover:shadow-xl duration-300 "
                        >
                            {/* Project Image */}
                            <img
                                src={project.projectBanner}
                                alt="Project Image"
                                className="border border-gray-400 border-dashed p-1 w-full h-48 object-cover rounded-md mb-4"
                            />

                            {/* Project Links */}
                            <div className="flex items-center justify-end gap-2">
                              
                                <Link to={`/${project.slug}`} className="text-gray-600 hover:underline flex items-center" data-tooltip-id="read-more" data-tooltip-content="Read More">
                                    <IoBookOutline className="mr-2 size-5" />
                                    <Tooltip id="read-more" />
                                </Link>
                                <a target='_blank' href={project.github_repository_link} className="text-gray-600 hover:underline flex items-center" data-tooltip-id="github" data-tooltip-content="Github Link">
                                    <VscSourceControl className="mr-2 size-5" />
                                    <Tooltip id="github" />
                                </a>
                                <a target='_blank' href={project.live_project_link} className="text-gray-600 hover:underline flex items-center" data-tooltip-id="live-link" data-tooltip-content="Live link">
                                    <FaExternalLinkAlt className="mr-2" />
                                    <Tooltip id="live-link" />
                                </a>
                            </div>

                            {/* Project Name & Description */}
                            <h3 className="text-xl font-semibold text-start text-gray-800 mb-2 pt-2">
                                {project.project_name}
                            </h3>
                            <p className="text-gray-600 text-md mb-4 text-start line-clamp-3">
                                {project.brief_description}
                            </p>

                            {/* Technologies Used */}
                            <div className="flex flex-wrap">
                                {project.main_technology_stack.slice(0, 5).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded-full mr-2 mb-2"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section >


        </div >
    )
}

