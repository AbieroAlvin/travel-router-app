import React from 'react'
import { Link } from 'react-router-dom'
import spaceVideo from '../assets/space.mp4'

const Video = () => {
  return (
    <div id='hero' className='h-screen w-full object-contain '>
        <video autoPlay loop muted id='video' className='fixed w-full h-full object-cover z-[-1]'>
            <source src={spaceVideo} type='video/mp4'/>
        </video>
        <div id="content" className='text-center absolute m-auto w-full h-full top-[40vh]'>
            <h1 className='text-6xl max-sm:text-5xl font-semibold'>Galaxy. Travel.</h1>
            <p className='text-3xl max-sm:text-xl font-extralight uppercase mb-7 max-sm:mb-6'>World's first civilian space travel.</p>
        <div>
            <Link to='/training' className='btn my-4 mx-1'>Training</Link>
            <Link to='/training' className='btn btn-light my-4 mx-1'>Launch</Link>
        </div>
        </div>
    </div>
  )
}

export default Video