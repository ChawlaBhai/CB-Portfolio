import styled from "styled-components";

// About Section
export const Section = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        object-fit: cover;
        width: 100%;
        height: 80vh;
    }
`;
export const Hide = styled.div`
    overflow: hidden;
`;