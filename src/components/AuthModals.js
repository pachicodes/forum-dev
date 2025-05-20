// Este arquivo conteria o componente de modal de login
// Se estivéssemos usando React com um bundler

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

// Export modals
export { LoginModal, SignupModal };
