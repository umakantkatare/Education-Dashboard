/* eslint-disable no-unused-vars */
import React from 'react'
import{ BsFacebook, BsGithub,BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {
const  year = new Date().getFullYear();

  return (
    <>
    <footer className=' relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 py-5 px-5 '>
        <section className=' text-lg'>
            Copyright {year} |  All rights reserved.
        </section>
        <section className=' flex items-center justify-center gap-5 text-2xl text-white cursor-pointer'> 
        <a className=' hover: text-yellow-500 transition-all ease-in-out duration-300'>
            <BsFacebook/>
        </a>
        <a className=' hover: text-yellow-500 transition-all ease-in-out duration-300'>
            <BsGithub/>
        </a>
        <a className=' hover: text-yellow-500 transition-all ease-in-out duration-300'>
            <BsInstagram/>
        </a>
        <a className=' hover: text-yellow-500 transition-all ease-in-out duration-300'>
            <BsLinkedin/>
        </a>
        <a className=' hover: text-yellow-500 transition-all ease-in-out duration-300'>
            <BsTwitter/>
        </a>
       
        
        </section>

    </footer>
    </>
  )
}

export default Footer