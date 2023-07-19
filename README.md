# Gerenciamento de Restaurantes - Projeto Readme

Este é o repositório do projeto de gerenciamento de restaurantes, que tem como objetivo oferecer uma solução para a gestão eficiente e simplificada de restaurantes. O sistema é composto por duas partes principais: o front-end (cliente) e o back-end (servidor). Abaixo estão as tecnologias utilizadas em cada uma das partes:

## Tecnologias utilizadas no Front-end (Cliente):

- React (versão 18.2.0): Biblioteca JavaScript de código aberto para construção de interfaces de usuário.
- React DOM (versão 18.2.0): Responsável por manipular a árvore de elementos DOM gerada pelo React.
- React Router DOM (versão 6.14.0): Biblioteca para controle de rotas e navegação na aplicação.
- Material-UI (versão 5.13.6): Biblioteca de componentes de interface de usuário para React, que utiliza o Material Design.
- Emotion (versões 11.11.1 e 11.11.0): Biblioteca de estilização para React, permitindo a criação de estilos com sintaxe CSS-in-JS.
- Styled Components (versão 6.0.1): Biblioteca para estilização de componentes utilizando templates literais do JavaScript.

## Tecnologias utilizadas no Back-end (Servidor):

- Node.js: Ambiente de execução JavaScript assíncrono baseado no motor V8 do Chrome.
- Express (versão 4.18.2): Framework web rápido e minimalista para Node.js, utilizado para construir a API do servidor.
- Cors (versão 2.8.5): Middleware para habilitar o acesso a recursos do servidor por meio de diferentes origens (Cross-Origin Resource Sharing).
- MySQL2 (versão 3.5.0): Pacote que permite a conexão e interação com o banco de dados MySQL.
- Nodemon (versão 2.0.22): Utilitário que monitora as alterações no código-fonte do servidor e reinicia automaticamente o servidor.

## Instalação e Uso

1. Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.
2. Clone este repositório em sua máquina local.
3. Instale as dependências do Front-end e do Back-end separadamente:

   ```bash
   # Front-end
   cd gerencia
   npm install

   # Back-end
   cd server
   npm install
   ```

4. Configure o banco de dados MySQL com as informações de conexão necessárias no arquivo `server/server.js`.
5. Inicie o servidor (Back-end):

   ```bash
   cd server
   npm run dev
   ```

6. Inicie o aplicativo (Front-end) em um novo terminal:

   ```bash
   cd gerencia
   npm run dev
   ```

7. Acesse o aplicativo em seu navegador através do endereço: `http://localhost:5173`.

## Funcionalidades do Projeto

- [Liste aqui as principais funcionalidades do projeto de gerenciamento de restaurantes.]

## Contribuição

Se você deseja contribuir com este projeto, fique à vontade para abrir um "pull request" com suas melhorias ou correções. Será um prazer receber sua colaboração!

## Licença

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>

---