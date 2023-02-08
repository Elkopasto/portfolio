import { motion } from 'framer-motion'
import Image from 'next/image'

const Things = ({setSelectedPage}) => {
    return (
        <section id="about" className="px-10 md:px-20 lg:px-40 py-10 text-deepsea relative">
            <h2 className="text-6xl font-inter text-deepsea drop-shadow-md">Other things about me</h2>
            <motion.div onViewportEnter={() => setSelectedPage("about")} />
            <div className='lg:grid grid-cols-3 gap-10 mt-10 mb-16 lg:mb-48 text-beige relative'>
                    <Image src="/assets/amp.png" width={512} height={512} className='m-auto drop-shadow-md scale-100 lg:scale-[120%] rotate-12 z-5' />
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 lg:my-0 bg-gradient-to-t from-deepsea to-lightsea z-10'>
                        <h3 className='text-2xl font-bold pt-2 pb-2 text-red'>Music</h3>
                        <p className='py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                    <Image src="/assets/gamepad.png" width={512} height={512} className='m-auto drop-shadow-md scale-100 lg:scale-[120%] -rotate-45 z-5' />
                    <div className='text-center shadow-xl p-10 sm:p-10 rounded-xl my-10 lg:my-0 bg-gradient-to-tl from-deepsea to-lightsea col-span-2 z-0'>
                        <h3 className='text-2xl font-bold pt-2 pb-2 text-red'>Yandex lyceum</h3>
                        <p className='py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 lg:my-0 bg-gradient-to-tr from-deepsea to-lightsea z-10'>
                        <h3 className='text-2xl font-bold pt-2 pb-2 text-red'>Gamedev</h3>
                        <p className='py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                </div>
            
            <img src="assets/red_waves.png" className='absolute z-0 bottom-0 left-0' />
        </section>
    )
};

export default Things;