import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <div className="py-4 flex items-center gap-2 justify-center text-center bg-gray-100 border-t border-gray-200">
            <FaRegCopyright /><h5> all rights are reserved</h5>
            </div>
        </div>
    )
}
