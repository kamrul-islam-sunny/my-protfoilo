import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

export default function Layout() {
    return (
        <div className=''>
            <Navbar />
            <div className="max-w-3xl mx-auto px-[5%] md:px-0">
                <Outlet />
            </div>

            <Footer/>
        </div>
    )
}
