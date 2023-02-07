import Image from 'next/image'
import { motion } from 'framer-motion'

const Portfolio = ({setSelectedPage}) => {
    return(
        <section id="portfolio" className="px-10 md:px-20 lg:px-40 py-10 bg-deepsea relative">
            <h1 className="text-center text-transparent font-inter font-bold text-6xl drop-shadow-2xl">
                <span className='bg-clip-text bg-gradient-to-b from-current via-red to-red'>My portfolio</span>
            </h1>

            <motion.div onViewportEnter={() => setSelectedPage("portfolio")} />

            <div className="md:grid grid-cols-3 gap-4 mt-10">
                <div className='row-span-2 relative group'>
                    <Image className="rounded-md my-10 md:my-0" src="/assets/portfolio/1.png" width={"400"} height={"400"} layout='responsive'/> 
                </div>

                <Image className="rounded-md my-10 md:my-0" src="/assets/portfolio/6.png" width={"100"} height={"100"} layout='responsive'/>
                
                <div className='row-span-2 relative group'>
                    <Image className="rounded-md my-10 md:my-0" src="/assets/portfolio/3.png" width={"100"} height={"100"} layout='responsive'/>
                    <Image className="rounded-md my-10 md:my-4" src="/assets/portfolio/2.png" width={"100"} height={"100"} layout='responsive'/>
                    <Image className="rounded-md my-10 md:my-3" src="/assets/portfolio/4.png" width={"100"} height={"100"} layout='responsive'/>
                </div>

                <motion.div onViewportEnter={() => setSelectedPage("portfolio")}>
                    <Image className="rounded-md my-10 md:my-0" src="/assets/portfolio/5.png" width={"100"} height={"100"} layout='responsive'/>
                </ motion.div>
            </div>

            { /* DESCRIPTION */ }
            <div className='flex flex-col gap-16 lg:gap-5 my-10 mb-0 lg:mb-32'>
                <div className='lg:flex gap-10'>
                        <div className='rounded-xl my-10 px-10 basis-3/5'>
                            <h1 className="text-beige font-inter font-bold text-4xl mt-10 text-center">
                                <span className='text-red text-5xl'>Personal</span>
                            </h1>
                            <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5 text-center'>Voluptate commodo cillum magna fugiat sint minim aliquip. Laboris dolor excepteur aute nostrud aliquip tempor sunt. Officia voluptate exercitation cupidatat ex ipsum ex aliqua tempor et proident adipisicing deserunt consectetur est. Do exercitation do minim aliquip nulla adipisicing anim qui ut laboris in quis reprehenderit aute. Dolor veniam esse ad consequat irure tempor ullamco occaecat adipisicing voluptate.</p>
                        </div>
                        <img src='assets/blob_1.png' className='w-96 h-96 mx-auto lg:m-0' />
                </div>

                <div className='lg:flex gap-10'>
                        <div className='rounded-xl my-10 px-10 basis-3/5 text-center order-2'>
                            <h1 className="text-beige font-inter font-bold text-4xl mt-10">
                                <span className='text-red text-5xl'>Internships</span> 
                            </h1>
                            <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5'>Voluptate commodo cillum magna fugiat sint minim aliquip. Laboris dolor excepteur aute nostrud aliquip tempor sunt. Officia voluptate exercitation cupidatat ex ipsum ex aliqua tempor et proident adipisicing deserunt consectetur est. Do exercitation do minim aliquip nulla adipisicing anim qui ut laboris in quis reprehenderit aute. Dolor veniam esse ad consequat irure tempor ullamco occaecat adipisicing voluptate.</p>
                        </div>
                        <img src='assets/blob_1.png' className='w-96 h-96 mx-auto lg:m-0' />
                </div>

                <div className='lg:flex gap-10 mb-[200px]'>
                        <div className='rounded-xl my-10 px-10 basis-3/5'>
                            <motion.div onViewportEnter={() => setSelectedPage("portfolio")} />
                            <h1 className="text-beige font-inter font-bold text-4xl mt-10 text-center">
                                <span className='text-red text-5xl'>Freelance</span>
                            </h1>
                            <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5 text-center'>Voluptate commodo cillum magna fugiat sint minim aliquip. Laboris dolor excepteur aute nostrud aliquip tempor sunt. Officia voluptate exercitation cupidatat ex ipsum ex aliqua tempor et proident adipisicing deserunt consectetur est. Do exercitation do minim aliquip nulla adipisicing anim qui ut laboris in quis reprehenderit aute. Dolor veniam esse ad consequat irure tempor ullamco occaecat adipisicing voluptate.</p>
                        </div>
                        <img src='assets/blob_1.png' className='w-96 h-96 mx-auto lg:m-0' />
                </div>
            </div>
            <img src="assets/beige_waves.png" className='absolute z-0 bottom-0 left-0' />
        </section>
    )
}

export default Portfolio;