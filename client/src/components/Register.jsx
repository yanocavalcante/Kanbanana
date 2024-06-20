export default function Register() {
    return (
        <>
            <form action="register">
                <label> Nome: </label> <br />
                <input type="text" name="name"></input> <br />

                <label> Usuário: </label> <br />
                <input type="text" name="username"></input> <br />

                <label> Email: </label> <br />
                <input type="text"name="email"></input> <br />

                <label> Senha: </label> <br />
                <input type="password" name="password"></input> <br /> <br />

                <button type="submit"> Registrar </button> <br /> <hr />
                <button> Já possui uma conta? </button>
            </form>
        </>
    )
}