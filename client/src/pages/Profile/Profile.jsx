import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { ProfilePage, ProfileContainer, Button } from './ProfileStyled'

export default function Profile() {

    //const {user} = useContext(UserContext)

    const user = {
        _id: "667a0691ce5f2ba2754e215f",
        name: "Matheus Steinbach",
        username: "theus",
        password: '123456',
        avatar: 'https://pbs.twimg.com/media/GQe9lMYW8AAO-vL?format=jpg&name=900x900'
    }

    return (
        <ProfilePage>
            <ProfileContainer>
                <img src={user.avatar} alt="Foto do usuário" />
                <h1> {user.name} </h1>
                <h2> @{user.username}</h2>
            </ProfileContainer>
            <Button> Editar Perfil </Button>
        </ProfilePage>
    )
}