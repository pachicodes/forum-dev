// Footer component
function renderFooter() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="color-bg-subtle border-top pt-5 pb-6">
      <div class="container-lg px-3">
        <div class="d-flex flex-column flex-md-row">
          <!-- Logo e Descrição -->
          <div class="col-12 col-md-4 mb-4 mb-md-0 pr-md-6">
            <div class="d-flex flex-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" class="color-fg-accent mr-2">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span class="h4 color-fg-accent">Forum Dev</span>
            </div>
            <p class="color-fg-muted f4">
              Um espaço descontraído para desenvolvedores trocarem ideias e construírem relacionamentos.
            </p>
            <div class="mt-3">
              <a href="#" class="color-fg-muted Link--secondary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href="#" class="color-fg-muted Link--secondary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
              <a href="#" class="color-fg-muted Link--secondary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Links úteis -->
          <div class="col-6 col-md-2 mb-4 mb-md-0">
            <h4 class="mb-3">Navegação</h4>
            <ul class="list-style-none">
              <li class="mb-2"><a href="/" class="color-fg-default Link--secondary">Início</a></li>
              <li class="mb-2"><a href="/categorias" class="color-fg-default Link--secondary">Categorias</a></li>
              <li class="mb-2"><a href="/top-discussoes" class="color-fg-default Link--secondary">Top Discussões</a></li>
              <li class="mb-2"><a href="/sobre" class="color-fg-default Link--secondary">Sobre</a></li>
            </ul>
          </div>
          
          <!-- Recursos -->
          <div class="col-6 col-md-2 mb-4 mb-md-0">
            <h4 class="mb-3">Recursos</h4>
            <ul class="list-style-none">
              <li class="mb-2"><a href="/ajuda" class="color-fg-default Link--secondary">Central de Ajuda</a></li>
              <li class="mb-2"><a href="/diretrizes" class="color-fg-default Link--secondary">Diretrizes da Comunidade</a></li>
              <li class="mb-2"><a href="/faq" class="color-fg-default Link--secondary">FAQ</a></li>
              <li class="mb-2"><a href="/contato" class="color-fg-default Link--secondary">Contato</a></li>
            </ul>
          </div>
          
          <!-- Legal -->
          <div class="col-12 col-md-4">
            <h4 class="mb-3">Legal</h4>
            <ul class="list-style-none">
              <li class="mb-2"><a href="/termos" class="color-fg-default Link--secondary">Termos de Uso</a></li>
              <li class="mb-2"><a href="/privacidade" class="color-fg-default Link--secondary">Política de Privacidade</a></li>
              <li class="mb-2"><a href="/cookies" class="color-fg-default Link--secondary">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-top color-border-muted pt-3 mt-4 d-flex flex-items-center flex-justify-between">
          <p class="color-fg-muted">&copy; ${currentYear} Forum Dev. Todos os direitos reservados.</p>
          <p class="color-fg-muted">Feito com ❤️ para desenvolvedores</p>
        </div>
      </div>
    </footer>
  `;
}

// Tornar a função disponível globalmente
window.renderFooter = renderFooter;
