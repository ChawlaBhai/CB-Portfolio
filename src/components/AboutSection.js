import home1 from "../img/home1.png";
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
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
        </About>
    );
};

//Styled-Components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        height: 80vh;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;
