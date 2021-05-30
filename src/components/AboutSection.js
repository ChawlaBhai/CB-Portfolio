import { motion } from "framer-motion";
import home1 from "../img/home1.png";
import { Section, Description, Image, Hide } from "../styles";

const AboutSection = () => {
    return (
        <Section>
            <Description>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="title"
                >
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We will try are best to show you up your amazing
                    skillset.
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with the camera" />
            </Image>
        </Section>
    );
};

const titleAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1.3 },
    },
};
const container = {
    hidden: { x: 100,},
    show: { x: 0, transition: { duration: 1 , ease:"easeOut", staggerChildren: 0.25} },
};

export default AboutSection;
