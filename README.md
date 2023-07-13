<img src="https://i.imgur.com/r341iWP.png"/>

# Meu Portfólio Pessoal 5.01

Este repositório contém o código-fonte do meu portfólio pessoal, um site que apresenta meus projetos e habilidades técnicas. O portfólio inclui um painel administrativo que permite gerenciar os projetos exibidos.

Deploy: [Link do meu portfólio](https://augustowestphal.up.railway.app)

## Tecnologias Utilizadas

O projeto é desenvolvido com as seguintes tecnologias:

- **Front-end:**
  - [React.js](https://reactjs.org/) - Biblioteca JavaScript para a criação de interfaces de usuário.
  - [Styled-components](https://styled-components.com/) - Biblioteca para estilização de componentes com CSS-in-JS.
  - [React-router-dom](https://reactrouter.com/) - Roteamento e navegação para aplicativos React.
  - [React-hook-form](https://react-hook-form.com/) - Biblioteca para gerenciar formulários em React.
  - [React-query](https://react-query.tanstack.com/) - Biblioteca para gerenciamento de estado e caching de dados.
  - [Zustand](https://github.com/pmndrs/zustand) - Biblioteca para gerenciamento de estado global em React.
  - [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação que adiciona tipagem estática ao JavaScript.

- **Back-end:**
  - [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript no servidor.
  - [Express.js](https://expressjs.com/) - Framework web para Node.js.
  - [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL orientado a documentos.
  - [Hapi Joi](https://hapi.dev/module/joi/) - Biblioteca para validação de dados em Node.js.
  - [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação que adiciona tipagem estática ao JavaScript.
  - [JWT](https://jwt.io/): JSON Web Tokens para autenticação e geração de tokens.
  - [bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca para criptografia de senhas em Node.js.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Exibição de projetos e habilidades técnicas.
- Painel administrativo para gerenciamento de projetos:
  - Adicionar novos projetos com informações detalhadas, como título, descrição, tecnologias utilizadas e imagens.
  - Editar projetos existentes, permitindo a atualização das informações.
  - Excluir projetos do portfólio.

# Página Principal

<img src="https://i.imgur.com/ZU0f3IH.png"/>
<img src="https://i.imgur.com/UzucBIz.png"/>

## Gráfico de Porcentagem das Tecnologias Utilizadas

O portfólio exibe um gráfico de porcentagem das tecnologias usadas em todos os projetos sincronizados com o GitHub. Essas informações são obtidas através da API do GitHub, que fornece os dados de cada projeto com base em seu ID.

No momento da criação de um novo projeto, o sistema faz uma chamada à API do GitHub para obter as informações relevantes, como as linguagens de programação utilizadas e suas porcentagens de uso. Esses dados são então salvos no banco de dados, a fim de evitar a necessidade de fazer requisições repetidas à API toda vez que a página é carregada.

Com base nas informações armazenadas no banco de dados, o portfólio gera um gráfico visual que exibe as porcentagens de cada tecnologia utilizada em todos os projetos. Esse gráfico proporciona uma visão geral das tecnologias mais empregadas nos projetos.

# Página do Painel

<img src="https://i.imgur.com/GbifJkL.png"/>

## Dashboard do Painel Administrativo

O painel administrativo do portfólio inclui um dashboard que fornece informações sobre o desempenho dos projetos. O dashboard exibe as seguintes estatísticas:

- **Visualizações diárias:** Total de visualizações dos projetos no dia atual.
- **Visualizações totais:** Total de visualizações acumuladas de todos os projetos.
- **Likes diários:** Total de likes recebidos pelos projetos no dia atual.
- **Likes totais:** Total de likes acumulados de todos os projetos.
- **Quantidade de projetos por tipo:** Exibe a quantidade de projetos agrupados por tipo.

Essas estatísticas são atualizadas diariamente e fornecem insights sobre o envolvimento e popularidade dos projetos. O dashboard do painel administrativo é uma ferramenta útil para acompanhar o desempenho do portfólio ao longo do tempo.

<img src="https://i.imgur.com/RBjkxHI.png"/>

## Repositórios no Painel Administrativo

No painel administrativo, você terá acesso a todos os seus repositórios em seu perfil do GitHub. Essa funcionalidade permite visualizar informações importantes sobre cada repositório, como ID, data de criação e data de atualização.

Além disso, um recurso de busca por nome está disponível para facilitar a pesquisa de repositórios específicos. Basta digitar o nome desejado na barra de pesquisa para filtrar os resultados.

Essa seção permite um acesso rápido e fácil aos seus repositórios, fornecendo informações relevantes para a administração e acompanhamento de cada um deles.

<img src="https://i.imgur.com/Ns6AXZU.png"/>

## Adicionar Novo Projeto

Nesta seção do painel administrativo, você poderá adicionar um novo projeto ao seu portfólio. Preencha o formulário abaixo com as informações necessárias:

- **Nome do Projeto:** Insira o nome do seu projeto.
- **Link do Projeto:** Forneça o link para o projeto, caso esteja implantado.
- **Link do Vídeo sobre o Projeto:** Se houver um vídeo relacionado ao projeto, insira o link aqui.
- **Link do Repositório:** Insira o link para o repositório do projeto.
- **Tipo do Projeto:** Selecione o tipo de projeto (exemplo: Web, Mobile, Backend, etc.).
- **Tecnologias Utilizadas:** Liste as tecnologias utilizadas no projeto.
- **Nome do Repositório:** Insira o nome do repositório referente ao projeto.
- **Imagens do Projeto:** Faça upload de imagens que representam o projeto.

<img src="https://i.imgur.com/wzyUp60.png"/>

# Lista de Projetos

Nesta seção do painel administrativo, você poderá visualizar todos os projetos em seu portfólio. Cada projeto terá suas informações exibidas, e você terá a opção de editar essas informações através de inputs disponíveis.

A lista de projetos é exibida na ordem de criação, com os cinco projetos principais destacados conforme a sua regra dos cinco. Os projetos restantes são ordenados de acordo com a data de criação.

Para cada projeto, você terá a opção de editar as seguintes informações:

- **Nome do Projeto:** Permite editar o nome do projeto.
- **Link do Projeto:** Permite editar o link para o projeto, caso tenha sido implantado.
- **Link do Vídeo sobre o Projeto:** Permite editar o link para o vídeo relacionado ao projeto.
- **Link do Repositório:** Permite editar o link para o repositório do projeto.
- **Tipo do Projeto:** Permite editar o tipo de projeto.
- **Tecnologias Utilizadas:** Permite editar a lista de tecnologias utilizadas no projeto.
- **Nome do Repositório:** Permite editar o nome do repositório referente ao projeto.

Utilize os inputs disponíveis para fazer as alterações necessárias nas informações do projeto. Lembre-se de salvar as alterações após a edição.


