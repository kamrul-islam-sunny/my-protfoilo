import React from 'react'

export default function Educational() {
    return (
        <div>
            <section className="py-8 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Educational Qualification</h2>
                <p className="text-gray-600 mb-10">Details of my academic achievements and certifications</p>

               
                <div className="flex flex-col-reverse sm:flex-row gap-4 border border-gray-300 border-dashed rounded-xl p-4 shadow ">
                    
                    {/* Right Side - Your Updated Diploma Info */}
                    <div className="sm:w-2/3 w-full flex flex-col  text-start p-4">
                        <h5 className="text-lg font-semibold text-gray-700 mb-2">
                            Institute: <span className="font-normal">Moulvibazar Polytechnic Institute</span>
                        </h5>
                        <p className="text-gray-600">
                            <span className="font-semibold">Certificate:</span> Diploma in Engineering
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Technology:</span> Computer Technology
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Passing Year:</span> 2024
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">CGPA:</span> 3.79
                        </p>
                    </div>

                    {/* Left Side - Diploma Title */}
                    <div className="sm:w-2/3 w-full flex items-center justify-center bg-gray-100 rounded-lg h-20 sm:h-40">
                        <h1 className="text-5xl sm:text-7xl font-bold text-gray-400">Diploma</h1>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border border-gray-300 border-dashed rounded-xl p-4 shadow mt-6">
                    {/* Left Side - Big SSC */}
                    <div className="sm:w-1/3 w-full flex items-center justify-center bg-gray-100 rounded-lg h-20 sm:h-40">
                        <h1 className="text-5xl sm:text-7xl font-bold text-gray-400">SSC</h1>
                    </div>

                    {/* Right Side - Details */}
                    <div className="sm:w-2/3 w-full flex flex-col text-start p-4">
                        <h5 className="text-lg font-semibold text-gray-700 mb-2">
                            Institute: <span className="font-normal">Moulvibazar Jameya Islamia Alim Madrasah</span>
                        </h5>
                        <p className="text-gray-600"><span className="font-semibold">Certificate:</span> Secondary School Certificate (Dakhil)</p>
                        <p className="text-gray-600"><span className="font-semibold">Group:</span> Science</p>
                        <p className="text-gray-600"><span className="font-semibold">Passing Year:</span> 2020</p>
                        <p className="text-gray-600"><span className="font-semibold">GPA:</span> 3.80</p>
                        <p className="text-gray-600"><span className="font-semibold">Board:</span> Madrasah</p>
                    </div>
                </div>


            </section>
        </div>
    )
}
