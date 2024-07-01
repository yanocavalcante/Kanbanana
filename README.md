## Instruções para rodar o código

Para rodar o código em um ambiente local, será necessário abrir dois terminais, um deles na pasta client e outra na pasta server. Em cada um dos terminais é rodado um npm install para instalar as dependências e npm run dev para iniciar.

Além disso, é necessário mudar a baseURL para um host local (por exemplo: http://localhost:3000) nos arquivos "boardService.js" e "userServices.js" da pasta client/src/services.

E para o back-end, criar um arquivo .env na raíz server, seguindo as informações em ".env.example".

MONGODB_URI=mongodb+srv://alessandrobenedet:RNGXbqcgcHGjprrG@kanban-web.9ez6sn0.mongodb.net/?retryWrites=true&w=majority&appName=kanban-web <br />
MONGODB_DATABASE=kanban-web <br />
SECRET_JWT = "92a78b3414fd47b78117babd5800f9fd"

### Comandos no console

Para rodar o front-end:
```bash
cd client
npm install
npm run dev
```

Para rodar o back-end:
```bash
cd server
npm install
npm run dev
```

Fluxo da aplicação:
Ao entrar no link local iniciado pelo Vite (padrão: http://localhost:5173), o usuário estará na tela inicial de Registro ou Login, podendo escolher sua ação ao clicar no botão Registro ou no de Login. 

Após autenticação, ele será redirecionado para tela Home, onde terá acesso aos seus Kanbans e poderá acessá-los clicando neles, ou também, criar/excluir os boards clicando em seus respectivos botões.

Ao acessar um Kanban específico, o usuário pode adicionar novas tarefas clicando no botão de "+". Clicando na tarefa, é possível editar ou excluir e para mudar a task de estágio, é necessário apenas arrastar de um campo para o outro. Na barra superior, estão disponíveis três opções, uma para voltar para a home, a opção de compartilhar o Kanban inserindo o email de um colaborador e o botão para salvar as alterações do board.

Todas as partes autenticadas da aplicação possuem uma Navbar, a qual no lado esquerdo redireciona para a Home ao clicar na logo do Kanbanana e no lado direito tem os botões de acessar o perfil e fazer Signout.

Ao acessar o perfil, é possível editar as informações do usuário alterando os campos e clicando em Confirmar Edição.

