# Forum Dev

Um espaço virtual para desenvolvedores trocarem ideias, dúvidas e compartilharem conhecimento.

![Forum Dev](https://via.placeholder.com/800x400?text=Forum+Dev)

## Sobre o Projeto

O Forum Dev é uma plataforma onde desenvolvedores podem:

- Criar issues para discussões técnicas
- Colaborar em projetos open source
- Compartilhar conhecimento através de pull requests
- Revisar código de outros colaboradores
- Contribuir com documentação
- Participar de discussões técnicas

## Stack Tecnológica

### Frontend
- **JavaScript** - Linguagem principal
- **React** - Biblioteca para construção da interface
- **Primer Brand UI** - Design system baseado no GitHub
- **React Query** - Para gerenciamento de estado do servidor
- **Redux** - Para gerenciamento de estado global

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **Redis** - Cache e gerenciamento de sessões

### Autenticação
- **JWT** (JSON Web Tokens)
- **Passport.js** - Middleware de autenticação

### Infraestrutura
- **Docker** - Containerização
- **GitHub Actions** - CI/CD
- **Vercel** - Hospedagem do frontend
- **MongoDB Atlas** - Banco de dados na nuvem
- **Heroku** - Hospedagem do backend

## Instalação e Execução

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- MongoDB (local ou MongoDB Atlas)
- Redis (opcional, para produção)

### Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/forum-dev.git
   cd forum-dev
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`
   - Configure as variáveis necessárias (MongoDB URI, JWT secret, etc.)

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O servidor estará rodando em `http://localhost:3000`.

### Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor com hot-reload para desenvolvimento
- `npm test` - Executa os testes
- `npm run build` - Compila o projeto para produção

## Estrutura do Projeto

```
forum-dev/
├── public/              # Arquivos estáticos
├── src/                 # Código fonte
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   └── styles/          # Arquivos CSS
├── server.js            # Servidor Express
└── package.json         # Dependências e scripts
```

## Roadmap

- [x] Interface inicial
- [x] Modais de login e cadastro
- [ ] Autenticação com JWT
- [ ] Integração com banco de dados
- [ ] Sistema de comentários
- [ ] Sistema de notificações
- [ ] Perfis de usuário

## Como Contribuir

Existem diversas formas de contribuir com o Forum Dev:

1. **Reportar bugs**: Encontrou algum problema? Abra uma issue detalhando o ocorrido.

2. **Sugerir melhorias**: Tem ideias para tornar o fórum melhor? Compartilhe conosco!

3. **Implementar funcionalidades**: Escolha uma issue com a tag "good first issue" e mãos à obra!

4. **Melhorar a documentação**: Ajude outros desenvolvedores entendendo melhor o projeto.

## Primeiros Passos para Contribuição

1. Faça um fork deste repositório

2. Clone o fork para sua máquina local

3. Crie uma branch para sua contribuição

4. Faça suas alterações

5. Abra um pull request

## Código de Conduta

Este é um espaço inclusivo e respeitoso. Leia nosso [Código de Conduta](CODE_OF_CONDUCT.md) para entender nossas diretrizes de comportamento.

## Licença

Este projeto está licenciado sob MIT License - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
