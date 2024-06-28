import styled from 'styled-components'

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
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

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;

    form {
        align-items: flex-start;
        padding-top: 1rem;
    }
`

export const Button = styled.button`
    padding: 10px;
    background-color: #FFFBAF;
    color: #231204;
    border: 3px solid #4C2509;
    border-radius: 8px;
    margin-top: 15px;
    width: 50%;
    justify-content: center;
`