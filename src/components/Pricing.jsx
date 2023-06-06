import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div id='pricing' className='w-full py-[6rem] px-4 bg-black text-[#eee]'>
        <div id="card-container" className='max-w-[1140px] m-auto grid gap-[40px] md:grid-cols-3 grid-cols-1 md:max-w-[90%]'>
            <div id="card" className='border-solid border-[#eee] border-2 text-[#eee] text-center p-4 hover:bg-[#141414]'>
                <h3 className='text-xl p-4 font-medium'>- Basic -</h3>
                <span id="bar" className='border-b-[1px] border-b-[#eee] w-[10%] my-[1.5rem] mx-auto block'></span>
                <p id="btc" className='text-6xl font-semibold p-4'>1 BTC</p>
                <p className='py-4 text-xl'>- 3 Days -</p>
                <p className='py-4 text-xl'>- Views -</p>
                <p className='py-4 text-xl'>- Featured -</p>
                <p className='py-4 text-xl'>- Private Quarters -</p>
                <Link to='/contact' className='btn w-[80%] block mx-auto my-8'>Book</Link>
            </div>
            <div id="card" className='border-solid border-[#eee] border-2 text-[#eee] text-center p-4 hover:bg-[#141414]'>
                <h3 className='text-xl font-medium p-4'>- Suite -</h3>
                <span id="bar" className='border-b-[1px] border-b-[#eee] w-[10%] my-[1.5rem] mx-auto block'></span>
                <p id="btc" className='text-6xl font-semibold p-4'>1 BTC</p>
                <p className='py-4 text-xl'>- 3 Days -</p>
                <p className='py-4 text-xl'>- Views -</p>
                <p className='py-4 text-xl'>- Featured -</p>
                <p className='py-4 text-xl'>- Private Quarters -</p>
                <Link to='/contact' className='btn w-[80%] block mx-auto my-8'>Book</Link>
            </div>
            <div id="card" className='border-solid border-[#eee] border-2 text-[#eee] text-center p-4 hover:bg-[#141414]'>
                <h3 className='text-xl font-medium p-4'>- Executive -</h3>
                <span id="bar" className='border-b-[1px] border-b-[#eee] w-[10%] my-[1.5rem] mx-auto block'></span>
                <p id="btc" className='text-6xl font-semibold p-4'>1 BTC</p>
                <p className='py-4 text-xl'>- 3 Days -</p>
                <p className='py-4 text-xl'>- Views -</p>
                <p className='py-4 text-xl'>- Featured -</p>
                <p className='py-4 text-xl'>- Private Quarters -</p>
                <Link to='/contact' className='btn w-[80%] block mx-auto my-8'>Book</Link>
            </div>
          
        </div>

    </div>
  )
}

export default Pricing