## Instruções
Para testar a aplicação localmente o primeiro passo é clonar o repositório a partir da branch 'dev', que contém as configurações básicas necessárias, para isso, execute:
```bash
git clone https://github.com/yanocavalcante/Kanbanana.git
git checkout dev
```
Agora, vocẽ deve configurar um arquivo '.env', onde serão armazenadas as variáveis de ambiente para o funcionamento adequado do backend da aplicação. Siga o exemplo presente em '.env.example'

Em seguida, é necessário, executar o código completo tanto do backend quanto do frontend. Para isso, abra duas janelas de linha de comando e prossiga, respectivamente, para as pastas 'client/' e 'server/', em seguida, em ambas execute os seguintes comandos:

```bash
npm install
npm start
```

Assim, você estará instalando as dependências necessárias para as duas partes principais partes da aplicação e inicializando-as.

## Fluxo
Ao entrar no link local iniciado pelo Vite (padrão: http://localhost:5173), o usuário estará na tela inicial de Registro ou Login, podendo escolher sua ação ao clicar no botão Registro ou no de Login. 

Após autenticação, ele será redirecionado para tela Home, onde terá acesso aos seus Kanbans e poderá acessá-los clicando neles, ou também, criar/excluir os boards clicando em seus respectivos botões.

Ao acessar um Kanban específico, o usuário pode adicionar novas tarefas clicando no botão de "+". Clicando na tarefa, é possível editar ou excluir e para mudar a task de estágio, é necessário apenas arrastar de um campo para o outro. Na barra superior, estão disponíveis três opções, uma para voltar para a home, a opção de compartilhar o Kanban inserindo o email de um colaborador e o botão para salvar as alterações do board.

Todas as partes autenticadas da aplicação possuem uma Navbar, a qual no lado esquerdo redireciona para a Home ao clicar na logo do Kanbanana e no lado direito tem os botões de acessar o perfil e fazer Signout.

Ao acessar o perfil, é possível editar as informações do usuário alterando os campos e clicando em Confirmar Edição.

