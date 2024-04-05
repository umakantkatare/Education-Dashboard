import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <div>
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404 </h1>
        </div>
        <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
            page not found ...
        </div>
        <button>
            <Link  className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring" >
            <span onClick={() => navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                Go back
            </span>
            </Link>
        </button>
    </div>
  )
}

export default NotFound