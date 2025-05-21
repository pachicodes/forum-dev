// Arquivo temporário para testar a correção
document.addEventListener('DOMContentLoaded', () => {
  console.log('Iniciando a aplicação...');
  
  const root = document.getElementById('root');
  
  try {
    // Renderizar o conteúdo da página com layout de duas colunas
    root.innerHTML = `
      ${renderHeader()}
      <main>
        ${renderHero()}
        <div class="container-lg px-3 my-5">
          <div class="d-flex flex-column flex-md-row">
            <!-- Coluna principal (2/3) -->
            <div class="col-12 col-md-8 pr-md-6">
              ${renderRecentTopics()}
            </div>
            <!-- Coluna direita (1/3) -->
            <div class="col-12 col-md-4 mt-5 mt-md-0">
              ${renderCategoriesGrid()}
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
            </div>
          </div>
        </div>
      </main>
      ${renderFooter()}
    `;
    
    // Adicionar event listeners após a renderização do DOM
    // Login buttons
    const loginButton = document.getElementById('login-button');
    const sidebarLoginButton = document.getElementById('sidebar-login-button');
    
    if (loginButton) {
      loginButton.addEventListener('click', handleLogin);
    }
    
    if (sidebarLoginButton) {
      sidebarLoginButton.addEventListener('click', handleLogin);
    }
    
    // Signup buttons
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
    
    // Explore button
    const exploreButton = document.getElementById('hero-explore-button');
    if (exploreButton) {
      exploreButton.addEventListener('click', () => {
        const recentTopicsSection = document.querySelector('.container-lg h2.f2-mktg');
        if (recentTopicsSection) {
          recentTopicsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    
    console.log('Aplicação iniciada com sucesso!');
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
});
