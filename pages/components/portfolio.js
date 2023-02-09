import Image from 'next/image'
import { motion } from 'framer-motion'

const Portfolio = ({setSelectedPage}) => {
    return(
        <section id="portfolio" className="px-10 md:px-20 lg:px-40 py-24 bg-deepsea relative">
            <h1 className="text-center text-transparent font-inter font-bold text-6xl drop-shadow-2xl">
                < motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y:-30},
                        visible: {opacity: 1, y: 0}}
                    }>
                    <span className='bg-clip-text bg-red'>My portfolio</span>
                </motion.div>
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
            <div className='flex flex-col gap-10 md:gap-0 mt-5 lg:mb-32'>
                <div className='lg:flex gap-10 justify-center'>
                        <div className='rounded-xl my-10 px-10 basis-3/5'>
                            <h1 className="text-beige font-inter font-bold text-4xl mt-10 text-center">
                                <span className='text-red text-5xl'>Personal</span>
                            </h1>
                            <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5 text-center md:text-start lg:text-center'>Hundreds of hours have been spent on gamedev and artwork as you can see on theese pictures. My biggest game demo was “Gnossienne”, which was a small one, but also a huge creative blast for me. Today I'm more focused on my visuals, so I practice Blender from time to time.</p>
                        </div>
                        < motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount:0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale:0.5},
                            visible: {opacity: 1, scale:1}}
                        }>
                            <Image src='/assets/blob_1.png' width={512} height={512} className='w-full h-full md:w-72 md:h-726 mx-auto lg:mx-0 my-auto' />
                        </motion.div>
                </div>
                
                <div className='lg:flex gap-10 justify-center'>
                        <div className='rounded-xl my-10 px-10 basis-3/5 order-2'>
                            <h1 className="text-beige font-inter font-bold text-4xl mt-10 text-center">
                                <span className='text-red text-5xl'>Work</span>
                            </h1>
                            <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5 text-center md:text-start lg:text-center'>Voluptate commodo cillum magna fugiat sint minim aliquip. Laboris dolor excepteur aute nostrud aliquip tempor sunt. Officia voluptate exercitation cupidatat ex ipsum ex aliqua tempor et proident adipisicing </p>
                        </div>
                        < motion.div
                        onViewportEnter={() => setSelectedPage("portfolio")}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount:0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale:0.5},
                            visible: {opacity: 1, scale:1}}
                        }>
                            <Image src='/assets/blob_1.png' width={512} height={512} className='w-full h-full md:w-72 md:h-726 mx-auto lg:mx-0 my-auto' />
                        </motion.div>
                </div>

                <div className='lg:flex gap-10 justify-center mb-32'>
                        <div className='rounded-xl my-10 px-10 basis-3/5'>
                            <h1 className="text-beige font-inter font-bold text-4xl mt-10 text-center">
                                <span className='text-red text-5xl'>Other</span>
                            </h1>
                            <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5 text-center md:text-start lg:text-center'>Voluptate commodo cillum magna fugiat sint minim aliquip. Laboris dolor excepteur aute nostrud aliquip tempor sunt. Officia voluptate exercitation cupidatat ex ipsum ex aliqua tempor et proident adipisicing </p>
                        </div>
                        < motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount:0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, scale:0.5},
                            visible: {opacity: 1, scale:1}}
                        }>
                            <Image src='/assets/blob_1.png' width={512} height={512} className='w-full h-full md:w-72 md:h-726 mx-auto lg:mx-0 my-auto' />
                        </motion.div>
                </div>
            </div>
            <img src="assets/beige_waves.png" className='absolute z-0 bottom-0 left-0' />
        </section>
    )
}

export default Portfolio;