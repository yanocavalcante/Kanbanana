import { ProfilePage, ProfileContainer, EditContainer, Button } from './ProfileStyled'
import { EditInput } from '../../components/EditInput/EditInput'
import { useForm } from 'react-hook-form';
import { useUser } from "../../Context/UserContext"
import { zodResolver } from '@hookform/resolvers/zod'
import { editSchema } from '../../schemas/editSchema';
import { editUser } from '../../services/userServices';

export default function Profile() {

    const {user} = useUser()

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
                    <Button type="submit">Confirmar Edição</Button>
                </form>
            </EditContainer>
        </ProfilePage>
    )
}