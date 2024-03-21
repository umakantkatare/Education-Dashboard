import React from 'react'
import { FaBars } from "react-icons/fa";

import Footer from '../components/Footer';

function HomeLayout({ children }) {
  return (
    <div className='min-h-screen'>
      <div className="drawer drawer-end ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary absolute right-2 top-2"><FaBars /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-auto bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
{children}

<Footer/>
    </div>
  )
}

export default HomeLayout