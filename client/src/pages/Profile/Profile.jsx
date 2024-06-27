import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { ProfilePage, ProfileContainer, Button, EditContainer } from './ProfileStyled'
import { EditInput } from '../../components/EditInput/EditInput'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '../../schemas/editSchema';
import { editUser } from '../../services/userServices';

export default function Profile() {

    //const {user} = useContext(UserContext)

    const user = {
        _id: "667a0691ce5f2ba2754e215f",
        name: "Matheus Steinbach",
        username: "theus",
        email: 'matheus@gmail.com',
        password: '123456',
        avatar: 'https://pbs.twimg.com/media/GQe9lMYW8AAO-vL?format=jpg&name=900x900'
    }

    const {
        register, 
        handleSubmit,
        formState: {errors}
      } = useForm({resolver: zodResolver(editSchema)})

      async function editHandleSubmit(data){
        try {
          const response = await editUser(data)
        } catch (error){
          console.log(error)
        }
      }

    return (
        <ProfilePage>
            <ProfileContainer>
                <img src={user.avatar} alt="Foto do usuário" />
                <h1> {user.name} </h1>
                <h2> @{user.username}</h2>
            </ProfileContainer>
            <EditContainer>
                <h1> Editar Perfil </h1>
                <form onSubmit={handleSubmit(editHandleSubmit)}>
                    <label>Nome</label>
                    <EditInput type="text" name="name" value={user.name} register={register}/>
                    <label>Usuário</label>
                    <EditInput type="text" name="username" value={user.username} register={register}/>
                    <label>E-mail</label>
                    <EditInput type="email" name="email" value={user.email} register={register}/>
                    <label>Senha</label>
                    <EditInput type="password" name="password" value={user.password} register={register}/>
                    <label>Confirme sua nova senha</label>
                    <EditInput type="password" name="confirmPassword" value={user.password} register={register}/>
                </form>
            </EditContainer>
        </ProfilePage>
    )
}