# CRUD Prisma

Um projeto simples de CRUD de usuário usando Node.js, Express e Prisma.

# Endpoints

- **POST /user:** Cria um novo usuário.
- **GET /users:** Retorna todos os usuários.
- **GET /user/:id:** Retorna um usuário específico.
- **POST /user/update/:id:** Atualiza as informações de um usuário.
- **POST /user/delete/:id:** Deleta um usuário.

## Dependências
- **Express:** Framework web para Node.js.
- **@prisma/client:** Cliente Prisma para interação com o banco de dados.
- **Nodemon: Monitora** alterações no código e reinicia o servidor automaticamente em ambiente de desenvolvimento.

## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados. Clone o repositório e execute o seguinte comando:

```bash
npm install
```
## Configuração do Banco de Dados
Certifique-se de configurar o Prisma de acordo com sua base de dados. Crie um arquivo .env na raiz do projeto e configure a URL do banco de dados. Exemplo:
```bash
DATABASE_URL="mysql://user:password@localhost:3306/db_name"
```
Depois, execute o seguinte comando para aplicar as migrações do Prisma:
```bash
npx prisma migrate dev
```

## Executando o Projeto
Execute o seguinte comando para iniciar o servidor em modo de desenvolvimento:
```bash
npm run dev
```

