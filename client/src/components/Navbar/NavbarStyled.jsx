import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    max-width: 100%;
    padding: 1rem 0;
    margin: 0;
    /*position: fixed;
    top: 0; */
    background-color: #D0B339;
    z-index: 1;
    border-radius: 0 0 0.75rem 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    i {
        position: absolute;
        right: 2em;
        font-size: 1.75rem;
        padding-top: 0.5rem;
    }
`

export const Logo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    cursor: pointer;
    padding-left: 2em;
`