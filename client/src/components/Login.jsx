export default function Login() {
    return (
        <>
            <h1> Login </h1>
            <form action="login">
                <input type="text" name="username" placeholder="Usuário"></input> <br /> <br/>

                <input type="password" name="password" placeholder="Senha"></input> <br /> <br />

                <button type="submit"> Entrar </button> <hr />
                <button> Criar nova conta </button>
            </form>
        </>
    )
}