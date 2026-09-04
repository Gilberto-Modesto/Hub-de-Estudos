const RESOURCES = [
  {
    "id": 1,
    "titulo": "MDN Web Docs",
    "descricao": "Documentação completa para HTML, CSS, JavaScript e APIs da Web.",
    "url": "https://developer.mozilla.org/pt-BR/",
    "area": "Front-end",
    "nivel": "Iniciante",
    "tipo": "Documentação",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "html",
      "css",
      "javascript",
      "web"
    ]
  },
  {
    "id": 2,
    "titulo": "freeCodeCamp",
    "descricao": "Cursos e exercícios práticos de programação e desenvolvimento web.",
    "url": "https://www.freecodecamp.org/portuguese/",
    "area": "Front-end",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "programação",
      "web",
      "javascript"
    ]
  },
  {
    "id": 3,
    "titulo": "Curso em Vídeo",
    "descricao": "Cursos introdutórios de programação, Python, HTML e CSS.",
    "url": "https://www.cursoemvideo.com/",
    "area": "Lógica de Programação",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "python",
      "algoritmos",
      "html",
      "css"
    ]
  },
  {
    "id": 4,
    "titulo": "Python Documentation",
    "descricao": "Documentação oficial da linguagem Python.",
    "url": "https://docs.python.org/3/",
    "area": "Back-end",
    "nivel": "Intermediário",
    "tipo": "Documentação",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "python",
      "backend"
    ]
  },
  {
    "id": 5,
    "titulo": "FastAPI Documentation",
    "descricao": "Documentação oficial do framework FastAPI para APIs em Python.",
    "url": "https://fastapi.tiangolo.com/",
    "area": "Back-end",
    "nivel": "Intermediário",
    "tipo": "Documentação",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "python",
      "api",
      "fastapi"
    ]
  },
  {
    "id": 6,
    "titulo": "Git Documentation",
    "descricao": "Referência oficial para aprender e consultar comandos do Git.",
    "url": "https://git-scm.com/doc",
    "area": "Git & GitHub",
    "nivel": "Iniciante",
    "tipo": "Documentação",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "git",
      "versionamento"
    ]
  },
  {
    "id": 7,
    "titulo": "GitHub Skills",
    "descricao": "Exercícios práticos para aprender GitHub dentro de projetos.",
    "url": "https://skills.github.com/",
    "area": "Git & GitHub",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "github",
      "git",
      "prática"
    ]
  },
  {
    "id": 8,
    "titulo": "BBC Learning English",
    "descricao": "Materiais gratuitos para desenvolver inglês geral e vocabulário.",
    "url": "https://www.bbc.co.uk/learningenglish/",
    "area": "Inglês Técnico",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "english",
      "ingles"
    ]
  },
  {
    "id": 9,
    "titulo": "Google Skillshop",
    "descricao": "Treinamentos oficiais sobre produtos e ferramentas do Google.",
    "url": "https://skillshop.withgoogle.com/",
    "area": "Marketing Digital",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "google ads",
      "analytics",
      "marketing"
    ]
  },
  {
    "id": 10,
    "titulo": "HubSpot Academy",
    "descricao": "Cursos sobre marketing, vendas, CRM, conteúdo e inbound.",
    "url": "https://academy.hubspot.com/",
    "area": "Marketing Digital",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "inbound",
      "crm",
      "marketing",
      "seo"
    ]
  },
  {
    "id": 11,
    "titulo": "Meta Blueprint",
    "descricao": "Treinamentos oficiais para produtos e publicidade da Meta.",
    "url": "https://www.facebook.com/business/learn",
    "area": "Mídias Sociais",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "meta",
      "instagram",
      "facebook",
      "ads"
    ]
  },
  {
    "id": 12,
    "titulo": "TikTok Academy",
    "descricao": "Conteúdos de aprendizado para publicidade e estratégia no TikTok.",
    "url": "https://www.tiktokacademy.com/",
    "area": "Mídias Sociais",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "tiktok",
      "social media",
      "ads"
    ]
  },
  {
    "id": 13,
    "titulo": "Canva Design School",
    "descricao": "Materiais para aprender design e criação de conteúdo visual.",
    "url": "https://www.canva.com/designschool/",
    "area": "Mídias Sociais",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Gratuito",
    "idioma": "Inglês",
    "tags": [
      "canva",
      "design",
      "conteudo"
    ]
  },
  {
    "id": 14,
    "titulo": "Google Search Central",
    "descricao": "Documentação e boas práticas oficiais para SEO e pesquisa orgânica.",
    "url": "https://developers.google.com/search/docs?hl=pt-br",
    "area": "Marketing Digital",
    "nivel": "Intermediário",
    "tipo": "Documentação",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "seo",
      "google",
      "search"
    ]
  },
  {
    "id": 15,
    "titulo": "Google Analytics",
    "descricao": "Central oficial de ajuda e aprendizado do Google Analytics.",
    "url": "https://support.google.com/analytics/",
    "area": "Marketing Digital",
    "nivel": "Intermediário",
    "tipo": "Documentação",
    "custo": "Gratuito",
    "idioma": "Português",
    "tags": [
      "analytics",
      "métricas",
      "dados"
    ]
  },
  {
    "id": 16,
    "titulo": "Rocketseat",
    "descricao": "Conteúdos e trilhas para desenvolvimento e tecnologia.",
    "url": "https://www.rocketseat.com.br/",
    "area": "Front-end",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Freemium",
    "idioma": "Português",
    "tags": [
      "javascript",
      "react",
      "node"
    ]
  },
  {
    "id": 17,
    "titulo": "Duolingo",
    "descricao": "Prática gamificada de idiomas para construir rotina de estudo.",
    "url": "https://www.duolingo.com/",
    "area": "Inglês Técnico",
    "nivel": "Iniciante",
    "tipo": "Curso",
    "custo": "Freemium",
    "idioma": "Português",
    "tags": [
      "ingles",
      "idiomas"
    ]
  },
  {
    "id": 18,
    "titulo": "LinkedIn Learning",
    "descricao": "Biblioteca de cursos profissionais em tecnologia, negócios e marketing.",
    "url": "https://www.linkedin.com/learning/",
    "area": "Mercado e Ferramentas",
    "nivel": "Intermediário",
    "tipo": "Curso",
    "custo": "Pago",
    "idioma": "Português",
    "tags": [
      "carreira",
      "linkedin",
      "tecnologia",
      "marketing"
    ]
  }
];
const GLOSSARY = [
  {
    "termo": "Front-end",
    "traducao": "Interface / camada visual",
    "area": "TI",
    "explicacao": "Parte da aplicação que o usuário visualiza e com a qual interage."
  },
  {
    "termo": "Back-end",
    "traducao": "Servidor / lógica de aplicação",
    "area": "TI",
    "explicacao": "Camada responsável por regras de negócio, processamento e acesso a dados."
  },
  {
    "termo": "API",
    "traducao": "Interface de programação",
    "area": "TI",
    "explicacao": "Contrato que permite que sistemas e aplicações troquem dados e funcionalidades."
  },
  {
    "termo": "Framework",
    "traducao": "Estrutura de desenvolvimento",
    "area": "TI",
    "explicacao": "Conjunto organizado de ferramentas e convenções para construir aplicações."
  },
  {
    "termo": "Repository",
    "traducao": "Repositório",
    "area": "Git",
    "explicacao": "Local onde o histórico e os arquivos de um projeto versionado são armazenados."
  },
  {
    "termo": "Commit",
    "traducao": "Registro de alteração",
    "area": "Git",
    "explicacao": "Registro de um conjunto de mudanças no histórico do Git."
  },
  {
    "termo": "Lead",
    "traducao": "Potencial cliente",
    "area": "Marketing",
    "explicacao": "Pessoa ou organização que demonstrou interesse e pode avançar no processo comercial."
  },
  {
    "termo": "Funnel",
    "traducao": "Funil",
    "area": "Marketing",
    "explicacao": "Modelo que representa etapas da jornada de descoberta até conversão."
  },
  {
    "termo": "Conversion",
    "traducao": "Conversão",
    "area": "Marketing",
    "explicacao": "Ação desejada realizada pelo público, como cadastro ou compra."
  },
  {
    "termo": "Engagement",
    "traducao": "Engajamento",
    "area": "Social Media",
    "explicacao": "Interações do público com um conteúdo ou perfil."
  },
  {
    "termo": "Reach",
    "traducao": "Alcance",
    "area": "Social Media",
    "explicacao": "Quantidade de pessoas ou contas alcançadas por um conteúdo."
  },
  {
    "termo": "Impressions",
    "traducao": "Impressões",
    "area": "Social Media",
    "explicacao": "Número de vezes que um conteúdo foi exibido, incluindo múltiplas exibições."
  },
  {
    "termo": "SEO",
    "traducao": "Otimização para mecanismos de busca",
    "area": "Marketing",
    "explicacao": "Conjunto de práticas para melhorar a visibilidade orgânica em buscadores."
  },
  {
    "termo": "ROI",
    "traducao": "Retorno sobre investimento",
    "area": "Marketing",
    "explicacao": "Indicador que relaciona o retorno obtido ao investimento realizado."
  }
];
