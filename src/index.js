// Arquivo principal do Forum Dev
// import { renderHeader } from './components/Header.js';
// import { renderHero } from './components/Hero.js';
// import { renderCategoriesGrid } from './components/CategoriesGrid.js';
// import { renderRecentTopics } from './components/RecentTopics.js';
// import { renderFooter } from './components/Footer.js';

// Classes dos modais de login/cadastro
// Login Form Component
class LoginModal {
  constructor() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    this.render();
  }

  close() {
    this.isOpen = false;
    const modalEl = document.getElementById('login-modal');
    if (modalEl) {
      modalEl.remove();
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Aqui seria feita a chamada para API de autenticação
    console.log('Login com:', { email, password });
    
    // Simulando autenticação bem-sucedida
    alert('Login realizado com sucesso!');
    this.close();
  }

  render() {
    // Remove any existing modal
    const existingModal = document.getElementById('login-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'login-modal';
    modal.className = 'position-fixed top-0 left-0 right-0 bottom-0 d-flex flex-items-center flex-justify-center';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.zIndex = '1000';

    modal.innerHTML = `
      <div class="Box Box--overlay d-flex flex-column anim-fade-in fast" style="width: 400px; max-width: 90%;">
        <div class="Box-header">
          <h3 class="Box-title">Login</h3>
          <button id="close-login-modal" class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog">
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
            </svg>
          </button>
        </div>

        <form id="login-form" class="Box-body">
          <div class="form-group">
            <div class="form-group-header">
              <label for="login-email">Email</label>
            </div>
            <div class="form-group-body">
              <input class="form-control input-block" type="email" id="login-email" placeholder="seu@email.com" required>
            </div>
          </div>

          <div class="form-group">
            <div class="form-group-header">
              <label for="login-password">Senha</label>
            </div>
            <div class="form-group-body">
              <input class="form-control input-block" type="password" id="login-password" placeholder="Senha" required>
            </div>
          </div>

          <div class="form-group">
            <div class="form-actions">
              <button type="submit" class="btn btn-primary btn-block">Entrar</button>
            </div>
          </div>

          <div class="text-center mt-3">
            <a href="#" id="forgot-password">Esqueceu a senha?</a>
            <div class="mt-2">
              Não tem conta? <a href="#" id="switch-to-signup">Cadastre-se</a>
            </div>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-login-modal').addEventListener('click', () => this.close());
    document.getElementById('login-form').addEventListener('submit', (event) => this.handleLogin(event));
    document.getElementById('switch-to-signup').addEventListener('click', (event) => {
      event.preventDefault();
      this.close();
      const signupModal = new SignupModal();
      signupModal.open();
    });

    // Close when clicking outside of the modal
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        this.close();
      }
    });
  }
}

// Signup Form Component
class SignupModal {
  constructor() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    this.render();
  }

  close() {
    this.isOpen = false;
    const modalEl = document.getElementById('signup-modal');
    if (modalEl) {
      modalEl.remove();
    }
  }

  handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Aqui seria feita a chamada para API de registro
    console.log('Cadastro com:', { name, email, password });
    
    // Simulando cadastro bem-sucedido
    alert('Cadastro realizado com sucesso! Verifique seu email para confirmar a conta.');
    this.close();
  }

  render() {
    // Remove any existing modal
    const existingModal = document.getElementById('signup-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'signup-modal';
    modal.className = 'position-fixed top-0 left-0 right-0 bottom-0 d-flex flex-items-center flex-justify-center';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.zIndex = '1000';

    modal.innerHTML = `
      <div class="Box Box--overlay d-flex flex-column anim-fade-in fast" style="width: 400px; max-width: 90%;">
        <div class="Box-header">
          <h3 class="Box-title">Cadastre-se</h3>
          <button id="close-signup-modal" class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog">
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
            </svg>
          </button>
        </div>

        <form id="signup-form" class="Box-body">
          <div class="form-group">
            <div class="form-group-header">
              <label for="signup-name">Nome completo</label>
            </div>
            <div class="form-group-body">
              <input class="form-control input-block" type="text" id="signup-name" placeholder="Seu nome" required>
            </div>
          </div>

          <div class="form-group">
            <div class="form-group-header">
              <label for="signup-email">Email</label>
            </div>
            <div class="form-group-body">
              <input class="form-control input-block" type="email" id="signup-email" placeholder="seu@email.com" required>
            </div>
          </div>

          <div class="form-group">
            <div class="form-group-header">
              <label for="signup-password">Senha</label>
            </div>
            <div class="form-group-body">
              <input class="form-control input-block" type="password" id="signup-password" placeholder="Crie uma senha segura" required>
            </div>
          </div>

          <div class="form-group">
            <div class="form-actions">
              <button type="submit" class="btn btn-primary btn-block">Criar conta</button>
            </div>
          </div>

          <div class="text-center mt-3">
            Já tem conta? <a href="#" id="switch-to-login">Faça login</a>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-signup-modal').addEventListener('click', () => this.close());
    document.getElementById('signup-form').addEventListener('submit', (event) => this.handleSignup(event));
    document.getElementById('switch-to-login').addEventListener('click', (event) => {
      event.preventDefault();
      this.close();
      const loginModal = new LoginModal();
      loginModal.open();
    });

    // Close when clicking outside of the modal
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        this.close();
      }
    });
  }
}

// Como estamos criando uma versão básica sem build, vamos usar JavaScript puro
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = `
    ${renderHeader()}
    <div class="container-lg px-3 py-4">
      <div class="d-flex flex-wrap">
        ${renderContentArea()}
        ${renderSidebar()}
      </div>
    </div>
  `;
  // Adiciona event listeners para os botões de login e cadastro
  document.getElementById('login-button').addEventListener('click', handleLogin);
  document.getElementById('signup-button').addEventListener('click', handleSignup);
  
  // Event listeners para botões na sidebar
  setTimeout(() => {
    const sidebarLoginButton = document.getElementById('sidebar-login-button');
    const sidebarSignupButton = document.getElementById('sidebar-signup-button');
    
    if (sidebarLoginButton) {
      sidebarLoginButton.addEventListener('click', (event) => {
        event.preventDefault();
        handleLogin();
      });
    }
    
    if (sidebarSignupButton) {
      sidebarSignupButton.addEventListener('click', handleSignup);
    }
  }, 100);
}

function renderHeader() {
  return `
    <header class="Header color-bg-subtle border-bottom">
      <div class="Header-item">
        <a href="/" class="Header-link f4 d-flex flex-items-center">
          <svg height="32" class="octicon octicon-comment-discussion mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
            <path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>
          </svg>
          <span class="text-semibold">Forum Dev</span>
        </a>
      </div>
      <div class="Header-item hide-sm hide-md">
        <div class="header-search mr-3 scoped-search site-scoped-search js-site-search position-relative js-jump-to">
          <input type="text" class="form-control Header-search-input jump-to-field" placeholder="Buscar ou ir para..." autocomplete="off">
        </div>
      </div>
      <div class="Header-item Header-item--full flex-justify-center d-none d-md-flex">
        <nav class="d-flex flex-items-center">
          <a class="Header-link mr-3" href="#">Início</a>
          <a class="Header-link mr-3" href="#">Categorias</a>
          <a class="Header-link mr-3" href="#">Populares</a>
          <a class="Header-link" href="#">Sobre</a>
        </nav>
      </div>
      <div class="Header-item">
        <button id="login-button" class="btn btn-sm mr-2">Login</button>
        <button id="signup-button" class="btn btn-sm btn-primary">Cadastre-se</button>
      </div>
    </header>
  `;
}

function renderContentArea() {
  return `
    <main class="flex-auto width-full pr-md-4">
      <div class="d-flex flex-items-center flex-justify-between mb-4">
        <div>
          <h2 class="f2-mktg">Discussões Recentes</h2>
          <p class="color-fg-muted mb-3">Explore conversas técnicas da comunidade de desenvolvedores</p>
        </div>
        <div>
          <button class="btn btn-primary">Nova Discussão</button>
        </div>
      </div>
      
      <div class="UnderlineNav mb-3">
        <div class="UnderlineNav-body" role="tablist">
          <button class="UnderlineNav-item" role="tab" aria-selected="true">
            Mais recentes
          </button>
          <button class="UnderlineNav-item" role="tab">
            Mais populares
          </button>
          <button class="UnderlineNav-item" role="tab">
            Sem resposta
          </button>
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
      categoryColor: 'color-bg-success-emphasis',
      replies: 12,
      views: 345,
      excerpt: 'Estou tentando implementar autenticação JWT em minha API Node.js. Tenho dúvidas sobre o processo de refresh token e como lidar com a expiração...'
    },
    {
      id: 2,
      title: 'Melhores práticas para CSS em grande escala',
      author: 'frontend_carlos',
      avatar: 'https://avatars.githubusercontent.com/u/23456789',
      date: '18 de maio, 2025',
      category: 'Frontend',
      categoryColor: 'color-bg-accent-emphasis',
      replies: 8,
      views: 217,
      excerpt: 'Estou trabalhando em um grande projeto frontend e estamos enfrentando problemas com a escala do CSS. Quais arquiteturas vocês recomendam?'
    },
    {
      id: 3,
      title: 'Dúvida sobre algoritmos de ordenação',
      author: 'algoritmos_ana',
      avatar: 'https://avatars.githubusercontent.com/u/34567890',
      date: '17 de maio, 2025',
      category: 'Algoritmos',
      categoryColor: 'color-bg-attention-emphasis',
      replies: 15,
      views: 432,
      excerpt: 'Estou comparando diferentes algoritmos de ordenação para um conjunto específico de dados. Em quais situações o QuickSort pode ser pior que o MergeSort?'
    },
    {
      id: 4,
      title: 'Experiências com Deploy Contínuo usando GitHub Actions',
      author: 'devops_paulo',
      avatar: 'https://avatars.githubusercontent.com/u/45678901',
      date: '16 de maio, 2025',
      category: 'DevOps',
      categoryColor: 'color-bg-done-emphasis',
      replies: 23,
      views: 567,
      excerpt: 'Acabei de configurar um pipeline completo de CI/CD usando GitHub Actions e gostaria de compartilhar minha experiência e ouvir feedback de vocês sobre possíveis melhorias...'
    }
  ];

  return posts.map(post => `
    <div class="Box mb-4">
      <div class="Box-row d-flex">
        <div class="mr-3">
          <a href="#" class="d-inline-block">
            <img src="${post.avatar}" alt="${post.author}" class="avatar circle" width="44" height="44">
          </a>
        </div>
        <div class="flex-auto">
          <div class="d-flex flex-items-center">
            <h3 class="Box-title overflow-hidden pr-3">
              <a href="#" class="Link--primary f3 text-bold">${post.title}</a>
              <span class="Label ml-1 ${post.categoryColor} color-fg-on-emphasis">${post.category}</span>
            </h3>
          </div>
          <div class="color-fg-muted mb-2 pr-4 f5">${post.excerpt}</div>
          <div class="d-flex flex-items-center f6 color-fg-muted mt-2">
            <a href="#" class="Link--secondary mr-3">
              <span class="text-bold">${post.author}</span>
            </a>
            <span class="mr-3" title="${post.date}">
              <svg class="octicon octicon-clock mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"></path>
              </svg>
              ${post.date}
            </span>
            <span class="mr-3" title="${post.replies} respostas">
              <svg class="octicon octicon-comment mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
              </svg>
              ${post.replies}
            </span>
            <span title="${post.views} visualizações">
              <svg class="octicon octicon-eye mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              ${post.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSidebar() {
  return `
    <aside class="ml-md-4 flex-shrink-0" style="width: 280px;">
      <div class="Box mb-4">
        <div class="Box-header">
          <h3 class="Box-title">Assuntos do Momento</h3>
        </div>
        <ul class="list-style-none pl-3 pr-3">
          <li class="Box-row d-flex flex-column">
            <div class="d-flex flex-items-center mb-1">
              <span class="Label Label--primary text-bold mr-2">#1</span>
              <a href="#" class="Link--primary text-bold">React Hooks</a>
            </div>
            <span class="text-small color-fg-muted">124 discussões</span>
          </li>
          <li class="Box-row d-flex flex-column">
            <div class="d-flex flex-items-center mb-1">
              <span class="Label Label--primary text-bold mr-2">#2</span>
              <a href="#" class="Link--primary text-bold">TypeScript</a>
            </div>
            <span class="text-small color-fg-muted">98 discussões</span>
          </li>
          <li class="Box-row d-flex flex-column">
            <div class="d-flex flex-items-center mb-1">
              <span class="Label Label--primary text-bold mr-2">#3</span>
              <a href="#" class="Link--primary text-bold">Docker</a>
            </div>
            <span class="text-small color-fg-muted">87 discussões</span>
          </li>
          <li class="Box-row d-flex flex-column">
            <div class="d-flex flex-items-center mb-1">
              <span class="Label Label--primary text-bold mr-2">#4</span>
              <a href="#" class="Link--primary text-bold">Node.js</a>
            </div>
            <span class="text-small color-fg-muted">76 discussões</span>
          </li>
          <li class="Box-row d-flex flex-column">
            <div class="d-flex flex-items-center mb-1">
              <span class="Label Label--primary text-bold mr-2">#5</span>
              <a href="#" class="Link--primary text-bold">GraphQL</a>
            </div>
            <span class="text-small color-fg-muted">62 discussões</span>
          </li>
        </ul>
      </div>

      <div class="Box mb-4">
        <div class="Box-header">
          <h3 class="Box-title">Categorias Populares</h3>
        </div>
        <div class="Box-body">
          <a href="#" class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis d-inline-flex mr-1 mb-1">Frontend</a>
          <a href="#" class="IssueLabel color-bg-success-emphasis color-fg-on-emphasis d-inline-flex mr-1 mb-1">Backend</a>
          <a href="#" class="IssueLabel color-bg-done-emphasis color-fg-on-emphasis d-inline-flex mr-1 mb-1">DevOps</a>
          <a href="#" class="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis d-inline-flex mr-1 mb-1">Algoritmos</a>
          <a href="#" class="IssueLabel color-bg-danger-emphasis color-fg-on-emphasis d-inline-flex mr-1 mb-1">Segurança</a>
          <a href="#" class="IssueLabel color-bg-sponsors-emphasis color-fg-on-emphasis d-inline-flex mr-1 mb-1">Mobile</a>
        </div>
      </div>
      
      <div class="Box">
        <div class="Box-header">
          <h3 class="Box-title">Junte-se à Comunidade</h3>
        </div>
        <div class="Box-body">
          <p class="mb-2">Cadastre-se para participar das discussões e receber novidades.</p>
          <button class="btn btn-primary btn-block" id="sidebar-signup-button">Criar uma conta</button>
          <div class="text-center mt-2">
            <p class="text-small color-fg-muted">Já tem conta? <a href="#" id="sidebar-login-button">Faça login</a></p>
          </div>
        </div>
      </div>
    </aside>
  `;
}

// Event handlers
function handleLogin() {
  const loginModal = new LoginModal();
  loginModal.open();
}

function handleSignup() {
  const signupModal = new SignupModal();
  signupModal.open();
}

// Renderiza a página inicial completa
function renderApp() {
  const root = document.getElementById('root');
  
  try {
    // Renderizar o conteúdo da página
    root.innerHTML = `
      ${renderHeader()}
      <main>
        ${renderHero()}
        ${renderCategoriesGrid()}
        ${renderRecentTopics()}
      </main>
      ${renderFooter()}
    `;
    
    // Adicionar event listeners após a renderização do DOM
    setupEventListeners();
  } catch (error) {
    console.error('Erro ao renderizar a aplicação:', error);
    root.innerHTML = `
      <div class="blankslate">
        <h3>Erro ao carregar a aplicação</h3>
        <p>Ocorreu um erro ao renderizar a aplicação. Por favor, atualize a página ou contate o suporte.</p>
        <pre>${error.message}</pre>
      </div>
    `;
  }
}

// Configurar event listeners
function setupEventListeners() {
  // Botões de login
  const loginButton = document.getElementById('login-button');
  const sidebarLoginButton = document.getElementById('sidebar-login-button');
  
  if (loginButton) {
    loginButton.addEventListener('click', handleLogin);
  }
  
  if (sidebarLoginButton) {
    sidebarLoginButton.addEventListener('click', handleLogin);
  }
  
  // Botões de cadastro
  const signupButton = document.getElementById('signup-button');
  const sidebarSignupButton = document.getElementById('sidebar-signup-button');
  const heroSignupButton = document.getElementById('hero-signup-button');
  
  if (signupButton) {
    signupButton.addEventListener('click', handleSignup);
  }
  
  if (sidebarSignupButton) {
    sidebarSignupButton.addEventListener('click', handleSignup);
  }
  
  if (heroSignupButton) {
    heroSignupButton.addEventListener('click', handleSignup);
  }
  
  // Botão de explorar discussões
  const exploreButton = document.getElementById('hero-explore-button');
  if (exploreButton) {
    exploreButton.addEventListener('click', () => {
      // Em uma SPA real, navegaríamos para a página de discussões
      // Por enquanto, vamos apenas rolar para a seção de discussões recentes
      const recentTopicsSection = document.querySelector('.container-lg h2.f2-mktg');
      if (recentTopicsSection) {
        recentTopicsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Mobile menu button
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      // Toggle mobile menu
      alert('Funcionalidade de menu mobile será implementada em breve!');
    });
  }
  
  console.log('Event listeners configurados com sucesso!');
}

// Inicializar a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
