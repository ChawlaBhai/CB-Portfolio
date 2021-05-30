import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Movies } from "../MovieState";

const MovieDetail = () => {
    const movie = Movies[0][useHistory().location.pathname.slice(6)];
    return (
        <>
            {(movie && (
                <Details>
                    <Headline>
                        <h1>{movie.title}</h1>
                        <img src={movie.image} alt="movie" />
                    </Headline>
                    <Awards>
                        {movie.awards.map((award) => (
                            <div className="award">
                                <h2>{award.title}</h2>
                                <div className="line"></div>
                                <p>{award.description}</p>
                            </div>
                        ))}
                    </Awards>
                </Details>
            )) || <h1>404: Page not found</h1>}
        </>
    );
};

const Details = styled.div`
    color: white;
`;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h1 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    .award {
        padding: 5rem;
        h2 {
            font-size: 2rem;
        }
        .line {
            width: 100%;
            background: #23d997;
            height: 0.5rem;
            margin: 1rem 0rem;
        }
        p {
            padding: 2rem 0rem;
        }
    }
`;

export default MovieDetail;
