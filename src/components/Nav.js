import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    margin: auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    #logo {
        font-family: "Lobster", cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;
