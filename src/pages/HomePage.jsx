import React from 'react'

import homePageMainImage from '../assets/homePageMainImage.png'
import HomeLayout from '../layout/HomeLayout'

function HomePage() {
  return (
    <HomeLayout>
      <div className=' h-[90vh]'>
        <div>
          <h2 className=' text-white'>Find out best</h2>
          <span>Online Courses</span>
        </div>
        <div>
          <p>  We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost. </p>
        </div>
        <div>
          <button> Explore Courses </button>
          <button> Contact Us </button>
        </div>
        <div>
          <img src={homePageMainImage} alt="" />
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage