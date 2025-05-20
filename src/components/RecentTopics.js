// Recent topics component
function renderRecentTopics() {
  const topics = [
    {
      id: 1,
      title: "Como vocês lidam com o burnout na programação?",
      author: "marcela_dev",
      category: "Carreira",
      replies: 28,
      lastActivity: "há 2 horas",
      categoryColor: "color-bg-attention-emphasis"
    },
    {
      id: 2,
      title: "Qual framework frontend vocês estão usando em 2023?",
      author: "joao_code",
      category: "Frontend",
      replies: 42,
      lastActivity: "há 5 horas",
      categoryColor: "color-bg-accent-emphasis"
    },
    {
      id: 3,
      title: "É tarde demais para começar em AI/ML aos 40?",
      author: "dev_experiente",
      category: "Inteligência Artificial",
      replies: 36,
      lastActivity: "há 1 dia",
      categoryColor: "color-bg-danger-emphasis"
    },
    {
      id: 4,
      title: "Como automatizar seu pipeline de CI/CD com GitHub Actions",
      author: "devops_guru",
      category: "DevOps",
      replies: 19,
      lastActivity: "há 3 dias",
      categoryColor: "color-bg-done-emphasis"
    },
    {
      id: 5,
      title: "Dicas para passar em entrevistas para desenvolvedor senior",
      author: "tech_recruiter",
      category: "Carreira",
      replies: 51,
      lastActivity: "há 4 dias",
      categoryColor: "color-bg-attention-emphasis"
    }
  ];

  const topicItems = topics.map(topic => `
    <div class="Box-row d-flex">
      <div class="flex-auto">
        <div class="d-flex flex-items-baseline">
          <h3 class="f4">
            <a href="/topic/${topic.id}" class="color-fg-default Link--primary">${topic.title}</a>
          </h3>
          <span class="Label ml-2 px-2 py-1 ${topic.categoryColor} color-fg-on-emphasis">${topic.category}</span>
        </div>
        <div class="text-small color-fg-muted mt-1">
          Iniciado por <a href="/user/${topic.author}" class="color-fg-accent">@${topic.author}</a> · 
          <span>${topic.replies} respostas</span> · 
          <span>Última atividade ${topic.lastActivity}</span>
        </div>
      </div>
      <div class="d-none d-md-block">
        <span class="Counter">${topic.replies}</span>
      </div>
    </div>
  `).join('');

  return `
    <div class="container-lg px-3 my-5">
      <div class="d-flex flex-items-baseline flex-justify-between mb-4">
        <h2 class="f2-mktg">Discussões Recentes</h2>
        <a href="/discussoes" class="Link--primary f4">Ver todas as discussões</a>
      </div>
      <div class="Box">
        ${topicItems}
        <div class="Box-footer text-center">
          <a href="/discussoes" class="btn-outline-mktg">Ver mais discussões</a>
        </div>
      </div>
    </div>
  `;
}

// Tornar a função disponível globalmente
window.renderRecentTopics = renderRecentTopics;
