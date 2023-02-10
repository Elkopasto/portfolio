import { motion } from 'framer-motion'
import Image from 'next/image'

const Things = ({setSelectedPage}) => {
    return (
        <section id="about" className="px-10 md:px-20 lg:px-40 pt-24 lg:pb-0 text-deepsea relative overflow-auto">
            { /* USING OVERFLOW-AUTO ON THE WHOLE ELEMNT INSTEAD OF FIXING THE CSS GRID IS A HUUUUGE КОСТЫЛЬ */ }
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount:0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }}>
                <h2 className="text-6xl font-inter text-deepsea drop-shadow-md">Other things about me</h2>
            </motion.div>
            <motion.div onViewportEnter={() => setSelectedPage("about")} />
            <div className='lg:grid grid-cols-3 gap-10 mt-10 mb-16 lg:mb-12 text-beige relative'>
                    < motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount:0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 1, y:30, rotate:-10},
                            visible: {opacity: 1, y: 0, rotate:0}}
                        }>
                        <Image src="/assets/amp.png" width={512} height={512} className='m-auto drop-shadow-md scale-100 lg:scale-[120%] rotate-12 z-5' />
                    </motion.div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 lg:my-0 bg-gradient-to-t from-deepsea to-lightsea z-10'>
                        <h3 className='text-2xl font-bold pt-2 pb-2 text-red'>Music</h3>
                        <p className='py-2 text-xl'>Having an electric guitar is a big joy in the family. I use <span className='font-bold'>FL studio</span> and my handy <span className='font-bold'>Squier</span> to create soundscapes.
                        </p>
                    </div>
                    < motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount:0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 1, y:30, rotate:15},
                        visible: {opacity: 1, y: 0, rotate:0}}
                    }>
                        <Image src="/assets/gamepad.png" width={512} height={512} className='m-auto drop-shadow-md scale-100 lg:scale-[120%] -rotate-45 z-5' />
                    </motion.div>
                    <div className='text-center shadow-xl p-10 sm:p-10 rounded-xl bg-gradient-to-tl from-deepsea to-lightsea col-span-2 z-0'>
                        <h3 className='text-2xl font-bold pt-2 pb-2 text-red'>Yandex lyceum</h3>
                        <p className='py-2 text-xl'>This course gave me a solid base to get into any other programming lagnuage and framework. <span className='font-bold'>Yandex</span> is still one of my favourite IT companies and I geniunely admire them. Graduating from their cousre as a top student was priceless (certificate by request).
                        </p>
                    </div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 lg:my-0 bg-gradient-to-tr from-deepsea to-lightsea z-10'>
                        <h3 className='text-2xl font-bold pt-2 pb-2 text-red'>Gameees</h3>
                        <p className='py-2 text-xl'>One of my favourites are: <span className='font-bold'>The Legend Of Zelda: BOTW, The Last Of Us 1 & 2, Little Big Planet 2, Titanfall 2, Terraria</span> and so on...
                        </p>
                    </div>
                </div>

                <div className='flex justify-center gap-1'>
                    <div className='rotate-180'><p>Ⓒ</p></div>
                    <p className='font-bold'>Copyleft</p>
                </div>
                <p className='text-center mb-5'>Made all by myself with NextJS and Tailwind!</p>
        </section>
    )
};

export default Things;