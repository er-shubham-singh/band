import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
