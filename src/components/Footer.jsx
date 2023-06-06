import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' className='w-full py-[6rem] bg-black/90'>
        <div id="footer-container" className='max-w-[1140px] m-auto grid grid-cols-2 gap-[40px] max-sm:grid-cols-1'>
            <div id="left" className='h-full max-w-full flex flex-col p-4'>
                <div id="location" className='flex items-center'>
                    <FaSearchLocation size={20} className='text-white mr-8'/>
                    <div className='mt-4'>
                    <p className='font-extralight'>123 Acme St.</p>
                    <h4 className='md:text-2xl py-4 text-xl'>Nairobi, Ke</h4>
                    </div>
                </div>
                <div id="phone" >
                    <h4 className='flex md:text-xl py-4'><FaPhone size={20} className='mr-6 text-white '/>+245-725-685-512</h4>
                </div>
                <div id="email" >
                    <h4 className='md:flex md:text-xl py-4'><FaMailBulk size={20} className='mr-6 text-white '/> abieroalvin@gmail.com</h4>
                </div>
                
            </div>

            <div id="right" className='h-full max-w-full flex flex-col p-4 m-auto'>
                <h4 className=' text-xl py-4'>About the Company</h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo maiores enim blanditiis libero quisquam eligendi, cum aspernatur iste quia."</p>
                <div id="social" className='flex mt-4  max-sm:mx-auto'>
                    <FaFacebook size={25} className='mr-4 text-white'/>
                    <FaTwitter size={25} className='mr-4 text-white'/>
                    <FaLinkedin size={25} className='mr-4 text-white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer