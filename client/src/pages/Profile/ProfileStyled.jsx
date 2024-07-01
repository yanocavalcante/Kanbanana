import styled from 'styled-components'

export const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFF60;
    padding: 2rem;
    margin-top: 20%;
    margin-bottom: 20%;
    margin-left: 5%;
    margin-right: 5%;
    border: 6px solid #74370D;
    border-radius: 32px;
`

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 4rem;
    gap: 10rem;
    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 0rem;
        gap: 0rem;
    }
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        justify-content: normal;
        margin-bottom: 30px;
    }

    img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border: 6px solid #74370D; 
}


    h1{
        padding: 1rem;
    }
`

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    @media (max-width: 768px) {
        width: 70%;
        padding-bottom: 4rem;
    }

    h1 {
        margin-bottom: 1rem;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;  
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;

    label {
    margin-bottom: 0.5rem;
           
}


`

export const Button = styled.button`
    padding: 10px;
    background-color: #FAF7D2;
    color: #231204;
    border: 3px solid #4C2509;
    border-radius: 8px;
    margin-top: 15px;
    width: 50%;
    justify-content: center;
`