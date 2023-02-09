import { DiPython, DiUnitySmall } from 'react-icons/di'
import { SiBlender } from 'react-icons/si'
import { motion } from 'framer-motion'

const MySkills = ({setSelectedPage}) => {
    return (
        <section>
            <div id="skills" className="px-10 md:px-20 lg:px-40 py-24 bg-red">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: {opacity: 1, x: 0}
                    }}>
                    <h1 className="text-5xl text-beige font-inter font-bold drop-shadow-md">My skills</h1>
                </motion.div>

                <div className='lg:flex gap-10 text-deepsea'>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-beige'>
                        <DiUnitySmall className='mx-auto text-6xl' />
                        <h3 className='text-lg font-bold pt-2 pb-2'>Unity</h3>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                    <div className='text-center shadow-xl p-10 md:my-2 md:p-12 rounded-xl my-10 bg-beige'>
                        <DiPython className='mx-auto text-6xl' />
                        <h3 className='text-lg font-bold pt-2 pb-2'>Python</h3>
                        <p className='py-2'> Since 2019 I&apos;ve been into Python. Throught 2019-2021 I succesefully completed in asd a das d as
                        </p>
                    </div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-beige'>
                        <SiBlender className='mx-auto text-6xl' />
                        <h3 className='text-lg font-bold pt-2 pb-2'>Blender</h3>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            sed do eiusmod incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </div>
                </div>

                <div className='lg:flex gap-10 mt-5'>
                    <div className='rounded-xl py-10 my-10 pr-10 basis-3/5'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount:0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x:-50},
                                visible: {opacity: 1, x: 0}
                            }}>
                            <h1 className='text-5xl text-beige drop-shadow-md font-inter font-bold mt-0 lg:mt-5'>Lorem ipsum</h1>
                        </motion.div>

                        <motion.div onViewportEnter={() => setSelectedPage("skills")} />

                        <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5'>Voluptate commodo cillum magna fugiat sint minim aliquip. Laboris dolor excepteur aute nostrud aliquip tempor sunt. Officia voluptate exercitation cupidatat ex ipsum ex aliqua tempor et proident adipisicing deserunt consectetur est. Do exercitation do minim aliquip nulla adipisicing anim qui ut laboris in quis reprehenderit aute. Dolor veniam esse ad consequat irure tempor ullamco occaecat adipisicing voluptate.</p>
                    </div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-beige text-deepsea basis-2/5'>
                        <h3 className='text-3xl font-bold p-2'>Summary</h3>
                        <div className='mb-5'>
                            <p className='text-start font-bold py-2'>Python</p>
                            <div className='relative bg-deepsea h-[6px] opacity-70 shadow-md'>
                                <motion.div
                                    className='bg-red absolute h-[6px]'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount:0.5 }}
                                    transition={{ duration: 1}}
                                    variants={{
                                        hidden: { opacity: 0.9, width: 0},
                                        visible: {opacity: 1, width: "95%"}
                                }}/>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-start font-bold py-2'>Unity & C#</p>
                            <div className='relative bg-deepsea h-[6px] opacity-70 shadow-md'>
                                <motion.div
                                    className='bg-red absolute h-[6px]'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount:0.5 }}
                                    transition={{ duration: 1}}
                                    variants={{
                                        hidden: { opacity: 0.9, width: 0},
                                        visible: {opacity: 1, width: "90%"}
                                }}/>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-start font-bold py-2'>Next.js</p>
                            <div className='relative bg-deepsea h-[6px] opacity-70 shadow-md'>
                                <motion.div
                                    className='bg-red absolute h-[6px]'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount:0.5 }}
                                    transition={{ duration: 1}}
                                    variants={{
                                        hidden: { opacity: 0.9, width: 0},
                                        visible: {opacity: 1, width: "30%"}
                                }}/>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-start font-bold py-2'>Photoshop</p>
                            <div className='relative bg-deepsea h-[6px] opacity-70 shadow-md'>
                                <motion.div
                                    className='bg-red absolute h-[6px]'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount:0.5 }}
                                    transition={{ duration: 1}}
                                    variants={{
                                        hidden: { opacity: 0.9, width: 0},
                                        visible: {opacity: 1, width: "75%"}
                                }}/>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-start font-bold py-2'>Final cut pro</p>
                            <div className='relative bg-deepsea h-[6px] opacity-70 shadow-md'>
                                <motion.div
                                    className='bg-red absolute h-[6px]'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount:0.5 }}
                                    transition={{ duration: 1}}
                                    variants={{
                                        hidden: { opacity: 0.9, width: 0},
                                        visible: {opacity: 1, width: "55%"}
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-deepsea'>
                <img src='assets/red_waves.png' className="-scale-y-100 -translate-y-1" />
            </div>
        </section>
    )
}

export default MySkills;