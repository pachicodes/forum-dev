// Hero section component
function renderHero() {
  return `
    <div class="color-bg-subtle border-bottom mb-4">
      <div class="container-lg px-3 py-5">
        <div class="d-flex flex-column flex-md-row flex-items-center gutter-spacious">
          <div class="col-12 col-md-7 mb-4 mb-md-0">
            <h1 class="h0-mktg mb-3">Conecte-se com desenvolvedores</h1>
            <p class="f2-mktg text-normal color-fg-muted mb-4">
              Um espaço descontraído para trocar ideias, compartilhar experiências e construir relacionamentos 
              com outros devs.
            </p>
            <div class="d-flex flex-wrap">
              <button class="btn-mktg btn-large-mktg mr-3 mb-2" id="hero-signup-button">Junte-se à comunidade</button>
              <button class="btn-outline-mktg btn-large-mktg mb-2" id="hero-explore-button">Explorar discussões</button>
            </div>
          </div>
          <div class="col-12 col-md-5 text-center">
            <img src="https://via.placeholder.com/500x360?text=Forum+Dev" 
                class="d-block width-full rounded-3 border" 
                alt="Forum Dev Community"
                style="max-width: 500px; margin: 0 auto;">
          </div>
        </div>
      </div>
    </div>
  `;
}

// Tornar a função disponível globalmente
window.renderHero = renderHero;
