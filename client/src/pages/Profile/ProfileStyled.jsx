import styled from 'styled-components'

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    padding-top: 4rem;
    gap: 10rem;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;

    img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        margin-top: 2rem;
        margin-bottom: 1rem;
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

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;

    form {
        align-items: flex-start;
        padding-top: 1rem;
    }
`