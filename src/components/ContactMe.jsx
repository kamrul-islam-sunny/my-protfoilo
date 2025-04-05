import React from 'react'
import { FaEnvelope, FaWhatsappSquare } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export default function ContactMe() {

    return (
         <div>
            <section className="py-8 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Contact Me</h2>
                {/* <p className="text-gray-600 mb-10">Technologies I work with</p> */}
                <div className="">
                    <div className="space-y-2">
                        {/* Email */}
                        <div className="border border-dashed border-gray-200  flex gap-4 items-center p-2">
                            <FaEnvelope className="text-gray-600 text-3xl" />
                            <p className="text-lg font-mono text-gray-800 font-normal">
                                kamrulislamsunny37@gmail.com
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="border border-dashed border-gray-200  flex gap-4 items-center p-2">
                            <FaWhatsappSquare className="text-gray-600 text-3xl" />
                            <p className="text-lg font-mono text-gray-800 font-normal">
                                01312082437
                            </p>
                        </div>

                        {/* Location */}
                        <div className="border border-dashed border-gray-200  flex gap-4 items-center p-2">
                            <FaLocationDot className="text-gray-600 text-3xl" />
                            <p className="text-lg font-mono text-gray-800 font-normal">
                                Moulvibazar, Sylhet, Bangladesh
                            </p>
                        </div>
                    </div>


                    <div className="">

                    </div>
                </div>
            </section>
        </div>
    )
}
