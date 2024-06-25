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

`

export const ProfileIcon = styled.i`
    position: absolute;
    right: 4rem;
    font-size: 1.75rem;
    padding-top: 0.5rem;
`
export const SignoutIcon = styled.i`
    position: absolute;
    right: 1rem;
    font-size: 1.75rem;
    padding-top: 0.5rem;
    cursor: pointer;
`

export const Logo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    cursor: pointer;
    padding-left: 2em;
`

export const UserSpace = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    gap: 1rem;

    h2 {
        font-size: 1.1rem;
        transition: all 0.3s;
    }

    h2: hover{
        color: #363636;
    }
`