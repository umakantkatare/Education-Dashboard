import React from 'react'

import homePageMainImage from '../assets/homePageMainImage.png'
import HomeLayout from '../layout/HomeLayout'

function HomePage() {
  return (
    <HomeLayout>
      <div className=' h-[90vh] w-full flex items-center justify-around '>
        <div className=' flex flex-col gap-4 '>
 <div className=' flex flex-wrap text-3xl font-bold'>
          <h2 >Find out best</h2>
          <span className=' text-yellow-500 '>Online Courses</span>
        </div>
        <div>
          <p className=' text-xl font-semibold'>  We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost. </p>
        </div>
  
       
 <div className=' flex flex-wrap gap-5'>

          <button className=' bg-yellow-500 text-white font-bold p-2 border-spacing-1 text-xl rounded-lg'> Explore Courses </button>
          <button className=' hover:bg-yellow-500 text-white font-bold p-2 border-spacing-1 bg-transparent outline-1 border-solid border-2 border-white text-xl rounded-md'> Contact Us </button>
 </div>
        </div>
        <div>
          <img src={homePageMainImage} />
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage