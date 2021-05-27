import home1 from "../img/home1.png";
import {Section, Description, Image, Hide} from "../styles";

const AboutSection = () => {
    return (
        <Section>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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

export default AboutSection;
