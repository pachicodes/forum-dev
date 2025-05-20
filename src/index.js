// Aqui importaríamos o React e outros componentes se estivéssemos usando um bundler como webpack ou vite
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// Em um projeto real, usaríamos import/export, mas para simplificar, incluiremos os scripts manualmente no HTML
// import './styles/main.css';
// import { LoginModal, SignupModal } from './components/AuthModals.js';

// Como estamos criando uma versão básica sem build, vamos usar JavaScript puro
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = `
    ${renderHeader()}
    <div class="container">
      <div class="main-content">
        ${renderContentArea()}
        ${renderSidebar()}
      </div>
    </div>
  `;

  // Adiciona event listeners para os botões de login e cadastro
  document.getElementById('login-button').addEventListener('click', handleLogin);
  document.getElementById('signup-button').addEventListener('click', handleSignup);
}

function renderHeader() {
  return `
    <header class="page-header">
      <div class="container d-flex flex-items-center flex-justify-between">
        <div class="d-flex flex-items-center">
          <h1 class="h3 mr-3">Forum Dev</h1>
          <nav class="d-none d-md-block">
            <ul class="d-flex list-style-none">
              <li class="ml-3"><a href="#" class="text-bold">Início</a></li>
              <li class="ml-3"><a href="#">Categorias</a></li>
              <li class="ml-3"><a href="#">Populares</a></li>
              <li class="ml-3"><a href="#">Sobre</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <button id="login-button" class="btn btn-outline mr-2">Login</button>
          <button id="signup-button" class="btn btn-primary">Cadastre-se</button>
        </div>
      </div>
    </header>
  `;
}

function renderContentArea() {
  return `
    <main class="content-area">
      <div class="d-flex flex-items-center flex-justify-between mb-4">
        <h2 class="h3">Discussões Recentes</h2>
        <div>
          <button class="btn btn-outline">Nova Discussão</button>
        </div>
      </div>
      
      ${renderForumPosts()}
    </main>
  `;
}

function renderForumPosts() {
  const posts = [
    {
      id: 1,
      title: 'Como implementar autenticação JWT em uma API Node.js?',
      author: 'dev_maria',
      avatar: 'https://avatars.githubusercontent.com/u/12345678',
      date: '19 de maio, 2025',
      category: 'Backend',
      replies: 12,
      views: 345
    },
    {
      id: 2,
      title: 'Melhores práticas para CSS em grande escala',
      author: 'frontend_carlos',
      avatar: 'https://avatars.githubusercontent.com/u/23456789',
      date: '18 de maio, 2025',
      category: 'Frontend',
      replies: 8,
      views: 217
    },
    {
      id: 3,
      title: 'Dúvida sobre algoritmos de ordenação',
      author: 'algoritmos_ana',
      avatar: 'https://avatars.githubusercontent.com/u/34567890',
      date: '17 de maio, 2025',
      category: 'Algoritmos',
      replies: 15,
      views: 432
    },
    {
      id: 4,
      title: 'Experiências com Deploy Contínuo usando GitHub Actions',
      author: 'devops_paulo',
      avatar: 'https://avatars.githubusercontent.com/u/45678901',
      date: '16 de maio, 2025',
      category: 'DevOps',
      replies: 23,
      views: 567
    }
  ];

  return posts.map(post => `
    <div class="card mb-3">
      <div class="d-flex flex-items-start">
        <img src="${post.avatar}" alt="${post.author}" class="avatar mr-3" width="40" height="40" style="border-radius: 50%;">
        <div class="flex-auto">
          <h3 class="h4 mb-1">
            <a href="#" class="text-bold text-gray-dark">${post.title}</a>
          </h3>
          <div class="d-flex flex-items-center text-small text-gray mb-2">
            <span class="mr-2">Por <a href="#" class="text-bold">${post.author}</a></span>
            <span class="mr-2">${post.date}</span>
            <span class="Label Label--secondary mr-1">${post.category}</span>
          </div>
          <div class="d-flex flex-items-center text-small color-text-secondary">
            <span class="mr-3">
              <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
              </svg>
              ${post.replies} respostas
            </span>
            <span>
              <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              ${post.views} visualizações
            </span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <h3 class="h4 mb-3">Assuntos do Momento</h3>
      <ul class="list-style-none">
        <li class="mb-2">
          <a href="#" class="d-flex flex-items-center text-bold">
            <span class="color-bg-danger-emphasis color-text-white px-2 py-1 rounded-1 text-small mr-2">#1</span>
            React Hooks
          </a>
          <span class="text-small color-text-secondary">124 discussões</span>
        </li>
        <li class="mb-2">
          <a href="#" class="d-flex flex-items-center text-bold">
            <span class="color-bg-danger-emphasis color-text-white px-2 py-1 rounded-1 text-small mr-2">#2</span>
            TypeScript
          </a>
          <span class="text-small color-text-secondary">98 discussões</span>
        </li>
        <li class="mb-2">
          <a href="#" class="d-flex flex-items-center text-bold">
            <span class="color-bg-danger-emphasis color-text-white px-2 py-1 rounded-1 text-small mr-2">#3</span>
            Docker
          </a>
          <span class="text-small color-text-secondary">87 discussões</span>
        </li>
        <li class="mb-2">
          <a href="#" class="d-flex flex-items-center text-bold">
            <span class="color-bg-danger-emphasis color-text-white px-2 py-1 rounded-1 text-small mr-2">#4</span>
            Node.js
          </a>
          <span class="text-small color-text-secondary">76 discussões</span>
        </li>
        <li class="mb-2">
          <a href="#" class="d-flex flex-items-center text-bold">
            <span class="color-bg-danger-emphasis color-text-white px-2 py-1 rounded-1 text-small mr-2">#5</span>
            GraphQL
          </a>
          <span class="text-small color-text-secondary">62 discussões</span>
        </li>
      </ul>

      <div class="border-top pt-3 mt-3">
        <h3 class="h4 mb-2">Categorias Populares</h3>
        <a href="#" class="Label mr-1 mb-1">Frontend</a>
        <a href="#" class="Label mr-1 mb-1">Backend</a>
        <a href="#" class="Label mr-1 mb-1">DevOps</a>
        <a href="#" class="Label mr-1 mb-1">Algoritmos</a>
        <a href="#" class="Label mr-1 mb-1">Segurança</a>
        <a href="#" class="Label mr-1 mb-1">Mobile</a>
      </div>
    </aside>
  `;
}

// Event handlers
function handleLogin() {
  alert('Implementar página de login');
}

function handleSignup() {
  alert('Implementar página de cadastro');
}
