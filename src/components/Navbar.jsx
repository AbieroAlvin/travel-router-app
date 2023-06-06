import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const [color, setColor] = useState(false)

    const changeColor = () => {
      if(window.scrollY >= 100) {
         setColor(true)
      } else {
         setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)

   const handleClick = () => {
    setClick(!click)
   }
  return (
    <div className={color ? 'fixed w-full h-[90px] flex justify-between items-center p-4 z-10 mx-auto bg-black/80 duration-500' : 'fixed w-full h-[90px] flex justify-between items-center p-4 z-10 mx-auto '}>
       <Link to='/'><h1 className='md:text-4xl text-3xl'>GLX TRVL</h1></Link>
       <ul className={click ? 'flex max-[1240px]:absolute max-[1240px]:flex-col max-[1240px]:justify-center  max-[1240px]:items-center max-[1240px]:top-0 max-[1240px]:left-0 max-[1240px]:text-center max-[1240px]:w-full max-[1240px]:h-screen  max-[1240px]:duration-300 max-[1240px]:z-[-1] max-[1240px]:bg-black/90' : 'flex max-[1240px]:absolute max-[1240px]:flex-col max-[1240px]:justify-center  max-[1240px]:items-center max-[1240px]:top-0 max-[1240px]:left-[-100%] max-[1240px]:text-center max-[1240px]:w-full max-[1240px]:h-screen  max-[1240px]:duration-300 max-[1240px]:z-[-1] max-[1240px]:bg-black/90'} >
         <li className='px-4 font-medium text-xl max-[1240px]:py-4 max-[1240px]:text-[2rem]'>
            <Link to='/'>Home</Link>
         </li>
         <li className='px-4 font-medium text-xl max-[1240px]:py-4  max-[1240px]:text-[2rem]'>
            <Link to='/pricing'>Pricing</Link>
         </li>
         <li className='px-4 font-medium text-xl max-[1240px]:py-4 max-[1240px]:text-[2rem]'>
            <Link to='/training'>Training</Link>
         </li>
         <li className='px-4 font-medium text-xl max-[1240px]:py-4 max-[1240px]:text-[2rem]'>
            <Link to='/contact'>Contact</Link>
         </li>         
       </ul>
       <div className='hidden max-[1240px]:block cursor-pointer' onClick={handleClick}>
         {
            click ? (<FaTimes size={25}/>) : (<FaBars className='text-white' size={25}/>)
         }
        
       </div>
    </div>
  )
}

export default Navbar