import { DiPython, DiUnitySmall } from 'react-icons/di'
import { SiBlender } from 'react-icons/si'
import { motion } from 'framer-motion'

const MySkills = ({setSelectedPage}) => {
    return (
        <section>
            <div id="skills" className="px-10 md:px-20 lg:px-40 pt-24 pb-10 bg-red">
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
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-beige w-auto md:w-1/3'>
                        <DiUnitySmall className='mx-auto text-6xl' />
                        <h3 className='text-lg font-bold pt-2 pb-2'>Unity</h3>
                        <p className='py-2'>Ohhhh, I love developing games as much as <span className="font-bold">I love gaming</span>. From designing game mechanics to writing the code, I like doing it by my hands.
                        </p>
                    </div>
                    <div className='text-center shadow-xl p-10 md:my-2 md:p-12 rounded-xl my-10 bg-beige w-auto md:w-1/3'>
                        <DiPython className='mx-auto text-6xl' />
                        <h3 className='text-lg font-bold pt-2 pb-2'>Python</h3>
                        <p className='py-2'> Since 2019 I&apos;ve been learning python and improving my skills. In 2020-2021 I graduated from <span className='font-bold'>Yandex Lyceum</span> as one of the top students. Sometimes it was challenging, yet fun to work with this language.
                        </p>
                    </div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-beige w-auto md:w-1/3'>
                        <SiBlender className='mx-auto text-6xl' />
                        <h3 className='text-lg font-bold pt-2 pb-2'>Blender</h3>
                        <p className='py-2'>As a talentless hand-painter I enjoy making 3D artwork. A <span className="font-bold"> simplistic, yet colourful</span> scenes are my go-to. 
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
                            <h1 className='text-5xl text-beige drop-shadow-md font-inter font-bold mt-0 lg:mt-5'>Truth off my chest</h1>
                        </motion.div>

                        <motion.div onViewportEnter={() => setSelectedPage("skills")} />

                        <p className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5'>To this day, my favourite genre is and will be sandbox games. At the age of 7, I fell in love with &quot;Little Big Planet 2&quot;. The best thing about it was the level constructor. With multiple props and logic gates, it had endless imaginative possibilities. I spent hours watching constructor tutorials and creating my levels, gaming assets and props. Hands down, one of a kind gaming experience for me.
<br/><br/>So, as the years came through I&apos;ve been actively practising in Unity, C#, Python, Blender, Photoshop and many other tools, to create my own worlds! I&apos;ve been participating in: </p>
                        <ol className='font-inter drop-shadow-md text-xl font-medium text-beige mt-5 list-disc pl-5'>
                            <li><span className="font-bold text-xl">Game conventions</span> like &quot;White Nights&quot; (as a visitor) and &quot;Starcon&quot; (as a developer).</li>
                            <li><span className="font-bold text-xl">Game jams…</span> Actually, won a few. For example, &quot;Banana Game Jam 2019&quot;.</li>
                            <li><span className="font-bold text-xl">Group projects</span>. During and after &quot;Yandex Lyceum&quot; years I&apos;ve collaborated with my friends to work on different coding projects.</li>
                            <li><span className="font-bold text-xl">Internships</span>. From 2020 and up until this moment I enjoyed working in &quot;Brickworks Games&quot; and other companies. </li>
                        </ol>
                    </div>
                    <div className='text-center shadow-xl p-10 rounded-xl my-10 md:my-32 bg-beige text-deepsea basis-2/5'>
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