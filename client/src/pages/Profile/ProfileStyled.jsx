import styled from 'styled-components'

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    margin: 0 auto;
`

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding-top: 4rem;

    img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }

    h1{
        padding: 1rem;
    }
`

export const Button = styled.button`
    display: flex;
    width: 10rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`