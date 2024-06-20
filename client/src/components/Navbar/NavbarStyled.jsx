import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem 0;
    margin: 0;
    /* position: fixed;
    top: 0; */
    background-color: #D0B339;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    i {
        position: absolute;
        right: 2em;
    }
`

export const Logo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    cursor: pointer;
    padding-left: 2em;
`