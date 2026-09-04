applySavedTheme();renderHeader();renderFooter();
const state=loadState(), completed=state.completed.length;
const total=RESOURCES.length, pct=Math.round(completed/total*100);
document.getElementById("app").insertAdjacentHTML("afterend",`<main class="container">
<section class="hero"><div><span class="eyebrow">Estude em um só lugar</span><h1>Aprenda. Pratique. Evolua.</h1><p>Um hub para organizar estudos de Tecnologia da Informação, Marketing Digital, Inglês Técnico e Mídias Sociais.</p><div class="hero-actions"><a class="btn btn-primary" href="catalogo.html">Explorar conteúdos →</a><button class="btn btn-secondary" id="youtubeHero">🔎 Pesquisar no YouTube</button></div></div>
<div class="hero-card"><span class="eyebrow">Seu progresso</span><h3>${completed} de ${total} recursos concluídos</h3><div class="mini-progress"><div class="progress-label"><span>Progresso geral</span><strong>${pct}%</strong></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div><a class="btn btn-secondary" href="dashboard.html">Ver dashboard</a></div></section>
<section class="section"><div class="section-heading"><div><h2>Áreas de estudo</h2><p>Escolha um caminho e comece pelo nível iniciante.</p></div><a class="btn btn-ghost btn-small" href="catalogo.html">Ver catálogo</a></div><div class="area-grid">${[
["💻","Front-end","HTML, CSS, JavaScript e frameworks."],["⚙️","Back-end","Python, APIs e bancos de dados."],["🧠","Lógica de Programação","Algoritmos e resolução de problemas."],["🐙","Git & GitHub","Versionamento e colaboração."],["🇺🇸","Inglês Técnico","Vocabulário e leitura para TI."],["📈","Marketing Digital","SEO, tráfego, funil e analytics."],["📱","Mídias Sociais","Instagram, TikTok, LinkedIn e conteúdo."],["🚀","Mercado e Ferramentas","Carreira, IA, tendências e ferramentas."]
].map(([i,t,d])=>`<a class="area-card" href="catalogo.html?area=${encodeURIComponent(t)}"><span class="area-icon">${i}</span><h3>${t}</h3><p>${d}</p></a>`).join("")}</div></section>
<section class="section"><div class="section-heading"><div><h2>Pesquisa rápida</h2><p>Pesquise na sua biblioteca ou diretamente no YouTube.</p></div></div><div class="quick-search"><div class="search-wrap"><span>⌕</span><input id="homeSearch" placeholder="Ex.: Python, SEO, Instagram, JavaScript..."></div><button class="btn btn-primary" id="homeSearchBtn">Pesquisar</button></div></section>
</main>`);
document.getElementById("youtubeHero").onclick=()=>youtubeSearch("programação para iniciantes");
document.getElementById("homeSearchBtn").onclick=()=>{const q=document.getElementById("homeSearch").value.trim();if(q)location.href="catalogo.html?q="+encodeURIComponent(q);};
document.getElementById("homeSearch").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("homeSearchBtn").click()});
function youtubeSearch(q){window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(q),"_blank","noopener");}
