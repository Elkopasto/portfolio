import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from 'next/image';

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return(
        <div className="relative">
            <img src="assets/red_waves_bg.png" className="absolute z-0 bottom-0 left-0 pointer-events-none"/>

            <section 
            id="home"
            className="relative md:flex md:justify-between md:items-center md:h-full gap-16 px-10 md:px-20 lg:px-40 z-5">
                {/* IMAGE SECTION */}
                <motion.div 
                className="md:order-2 flex justify-center basis-3/5 m-8 z-15 order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount:0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0.5, y:30},
                    visible: {opacity: 1, y: 0}
                }}>
                    {isAboveMediumScreens ? (
                        <div className="">
                            <img
                            alt="profile"
                            src="assets/me.png"
                            className="rounded-full" />
                        </div>
                    ) : (
                        <div className="mb-5">
                            <img
                            alt="profile"
                            src="assets/me.png"
                            className="rounded-full" />
                        </div>
                    )}
                </motion.div>

                {/* TITLE SECTION*/}
                <div className="basis-3/5 -mt-10 md:-mt-[50px] pb-10 z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"

                        viewport={{ once: true, amount:0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0}
                        }}>
                            <p className="font-inter text-6xl text-deepsea z-10 text-center text-start">
                                Hi, I'm <span className="text-red"> Andrew</span>!
                            </p>

                            <p className="mt-5 mb-8 text-sm font-inter text-center md: text-start text-deepsea">
                                Anim et sint tempor adipisicing. Anim ullamco sit eiusmod aute commodo eiusmod. Nostrud sunt qui commodo in culpa nisi enim incididunt.
                            </p>
                    </ motion.div>

                    {/* LINKS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount:0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0}
                        }}>
                            <div className="text-6xl md:text-5xl flex gap-5 z-5">
                                <a href="https://www.instagram.com/andrew_kalinenko/" target="_blank" rel="noreferrer">
                                    <AiFillInstagram className="text-deepsea hover:opacity-50 transition duration-300" />
                                </a>

                                <a href="https://t.me/elkopasto" target="_blank" rel="noreferrer">
                                    <FaTelegramPlane className="text-deepsea hover:opacity-50 transition duration-300"/>
                                </a>

                                <a href="http://discordapp.com/users/456658729916563456" target="_blank" rel="noreferrer">
                                    <FaDiscord className="text-deepsea hover:opacity-50 transition duration-300" />
                                </a>
                            </div>
                    </ motion.div>
                </div>

                <img src="assets/red_waves.png" className="absolute bottom-0 left-0 z-10 pointer-events-none"/>
            </section>
        </div>
    )
}

export default Landing;