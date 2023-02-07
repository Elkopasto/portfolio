import { motion } from 'framer-motion'

const Things = ({setSelectedPage}) => {
    return (
        <section id="about" className="px-10 md:px-20 lg:px-40 py-10 text-deepsea">
            <h2 className="text-6xl font-inter text-deepsea drop-shadow-md">Other things about me</h2>
            <motion.div onViewportEnter={() => setSelectedPage("about")} />
            <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        </section>
    )
};

export default Things;