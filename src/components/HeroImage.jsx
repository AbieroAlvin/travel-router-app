import React, { Component } from 'react'


 class HeroImage extends Component {
  render() {
    return (
      <div id='hero-img' className=' relative h-[50vh] w-full]'>
        <div id="heading" className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl max-w-screen-sm:text-3xl'>{this.props.heading}</h1>
            <p className='text-xl'>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImage
// bg-black/30 