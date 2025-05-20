// Categories grid component
function renderCategoriesGrid() {
  const categories = [
    {
      name: 'Frontend',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
      color: 'color-bg-accent-emphasis',
      count: 324,
      description: 'Discussões sobre React, Vue, Angular e outras tecnologias frontend'
    },
    {
      name: 'Backend',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>',
      color: 'color-bg-success-emphasis',
      count: 287,
      description: 'Node.js, Python, Java, APIs e sistemas distribuídos'
    },
    {
      name: 'DevOps',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75 1.75a.75.75 0 00-1.5 0V5H4a.75.75 0 000 1.5h3.25v3.25a.75.75 0 001.5 0V6.5H12A.75.75 0 0012 5H8.75V1.75zM4 13a.75.75 0 000 1.5h8a.75.75 0 100-1.5H4z"></path></svg>',
      color: 'color-bg-done-emphasis',
      count: 156,
      description: 'CI/CD, Docker, Kubernetes e infraestrutura como código'
    },
    {
      name: 'Carreira',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6 2a.75.75 0 01.696.471L10 10.731l1.304-3.26A.75.75 0 0112 7h3.25a.75.75 0 010 1.5h-2.742l-1.812 4.528a.75.75 0 01-1.392 0L6 4.77 4.696 8.03A.75.75 0 014 8.5H.75a.75.75 0 010-1.5h2.742l1.812-4.529A.75.75 0 016 2z"></path></svg>',
      color: 'color-bg-attention-emphasis',
      count: 243,
      description: 'Dicas de entrevistas, progressão na carreira e mercado de trabalho'
    },
    {
      name: 'UX/UI Design',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 8.5a6 6 0 1112 0 6 6 0 01-12 0zm6-4.25A.75.75 0 017.75 5h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5A.75.75 0 017 10.25v-4.5a.75.75 0 01.75-.75zM3.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0z"></path></svg>',
      color: 'color-bg-sponsors-emphasis',
      count: 178,
      description: 'Design de interfaces, experiência do usuário e acessibilidade'
    },
    {
      name: 'Inteligência Artificial',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.68 11.74a6 6 0 01-7.922-8.982 6 6 0 018.982 7.922l3.04 3.04a.749.749 0 01-.326 1.275.749.749 0 01-.734-.215l-3.04-3.04zM11.5 7a4.499 4.499 0 10-8.997 0A4.499 4.499 0 0011.5 7z"></path></svg>',
      color: 'color-bg-danger-emphasis',
      count: 321,
      description: 'Machine Learning, LLMs, GPT e aplicações de IA no desenvolvimento'
    }
  ];

  const categoryItems = categories.map(category => `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <a href="#" class="d-block Box p-3 height-full color-fg-default text-decoration-none">
        <div class="d-flex flex-items-center mb-2">
          <span class="d-inline-block mr-2 p-2 ${category.color} color-fg-on-emphasis rounded-2">${category.icon}</span>
          <h3 class="f3 color-fg-default">${category.name}</h3>
        </div>
        <p class="color-fg-muted mb-2">${category.description}</p>
        <span class="Label Label--accent">${category.count} tópicos</span>
      </a>
    </div>
  `).join('');

  return `
    <div class="container-lg px-3 my-5">
      <div class="d-flex flex-items-baseline flex-justify-between mb-4">
        <h2 class="f2-mktg">Categorias Populares</h2>
        <a href="#" class="Link--primary f4">Ver todas as categorias</a>
      </div>
      <div class="d-flex flex-wrap gutter-condensed">
        ${categoryItems}
      </div>
    </div>
  `;
}

// Export o componente
export { renderCategoriesGrid };
