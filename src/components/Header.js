// Header component
function renderHeader() {
  return `
    <header class="color-bg-default border-bottom">
      <div class="container-lg d-flex flex-items-center flex-justify-between p-responsive py-3">
        <!-- Logo -->
        <div class="d-flex flex-items-center">
          <a href="/" class="d-flex flex-items-center text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" class="color-fg-accent mr-2">
              <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span class="h3 color-fg-accent">Forum Dev</span>
          </a>
        </div>
        
        <!-- Navigation links -->
        <nav class="d-none d-md-flex">
          <ul class="d-flex flex-items-center list-style-none">
            <li class="ml-3">
              <a href="/" class="px-2 py-1 color-fg-default text-decoration-none Link--secondary">Início</a>
            </li>
            <li class="ml-3">
              <a href="/categorias" class="px-2 py-1 color-fg-default text-decoration-none Link--secondary">Categorias</a>
            </li>
            <li class="ml-3">
              <a href="/sobre" class="px-2 py-1 color-fg-default text-decoration-none Link--secondary">Sobre</a>
            </li>
          </ul>
        </nav>
        
        <!-- Login/Signup buttons -->
        <div class="d-flex flex-items-center">
          <button class="btn mr-2" id="login-button">Entrar</button>
          <button class="btn btn-primary" id="signup-button">Cadastrar</button>
        </div>
      </div>
      
      <!-- Mobile menu button, hidden on larger screens -->
      <button class="d-md-none btn-octicon m-3 position-absolute top-0 right-0" id="mobile-menu-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75z"></path>
        </svg>
      </button>
    </header>
  `;
}

// Tornar a função disponível globalmente
window.renderHeader = renderHeader;
