# 🚀 Hub de Estudos — V1

Hub de estudos para TI, Marketing Digital, Inglês Técnico e Mídias Sociais.

## V1

- HTML5 + CSS3 + JavaScript puro
- Sem login
- Sem banco de dados
- Persistência com `localStorage`
- Dados catalogados em JavaScript (`assets/js/data.js`)
- Catálogo com busca e filtros
- Favoritos
- Progresso
- Anotações
- Dashboard
- Glossário
- Pesquisa direta no YouTube
- Tema claro/escuro
- Estrutura preparada para futura API Python

## Como executar no VS Code

1. Instale o Visual Studio Code.
2. Abra esta pasta no VS Code.
3. Instale a extensão **Live Server**.
4. Abra `index.html`.
5. Clique com o botão direito no arquivo e escolha **Open with Live Server**.
6. O navegador abrirá o projeto, normalmente em um endereço como `http://127.0.0.1:5500/`.

Não é necessário instalar Python, Node.js ou banco de dados para executar a V1.

## Como adicionar recursos

Edite `assets/js/data.js` e adicione um novo objeto ao array `RESOURCES`.

Exemplo:

```js
{
  id: 99,
  titulo: "Nome do recurso",
  descricao: "Descrição.",
  url: "https://exemplo.com",
  area: "Back-end",
  nivel: "Iniciante",
  tipo: "Curso",
  custo: "Gratuito",
  idioma: "Português",
  tags: ["python", "api"]
}
```

Use IDs únicos.

## Dados salvos

O progresso, favoritos, anotações e tema ficam no `localStorage` do navegador. Limpar os dados do site/navegador pode apagar essas informações.

## Pesquisa no YouTube

A aplicação não usa API Key. Ela monta uma URL de pesquisa do YouTube e abre os resultados em uma nova aba.

## Próxima evolução

A arquitetura permite substituir o armazenamento local por:

Frontend → API REST → FastAPI/Flask → PostgreSQL

Sem precisar reconstruir a interface.

## Observação sobre links

Os recursos iniciais priorizam documentação oficial e plataformas reconhecidas. Como páginas externas podem mudar, revise os links periodicamente.
