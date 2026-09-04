function renderHeader(){
  const path=location.pathname.split("/").pop()||"index.html";
  const links=[["index.html","Início"],["catalogo.html","Catálogo"],["dashboard.html","Dashboard"],["favoritos.html","Favoritos"],["glossario.html","Glossário"]];
  document.getElementById("app").innerHTML=`<header class="topbar"><div class="container nav">
    <a class="brand" href="index.html"><img class="brand-logo" src="assets/img/logo-hub-estudos.png" alt="Hub de Estudos"><span>Hub de Estudos</span></a>
    <button class="menu-btn" id="menuBtn">☰</button>
    <nav class="nav-links" id="navLinks">${links.map(([href,label])=>`<a class="${path===href?'active':''}" href="${href}">${label}</a>`).join("")}<button class="theme-btn" id="themeBtn" title="Alternar tema">◐</button></nav>
  </div></header>`;
  document.getElementById("menuBtn")?.addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
  document.getElementById("themeBtn")?.addEventListener("click",()=>setTheme(loadState().theme==="dark"?"light":"dark"));
}
function renderFooter(){
  document.body.insertAdjacentHTML("beforeend",`<footer><div class="container">Hub de Estudos V1 • Dados salvos localmente neste navegador.</div></footer>`);
}
function showToast(msg){const el=document.createElement("div");el.className="toast";el.textContent=msg;document.body.appendChild(el);setTimeout(()=>el.remove(),2200);}
function openNoteModal(resource){
  const modal=document.createElement("div");modal.className="note-modal";
  modal.innerHTML=`<div class="modal-box"><h2>Anotação</h2><p class="muted">${resource.titulo}</p><textarea id="noteText" placeholder="Escreva algo para lembrar...">${escapeHtml(getNote(resource.id))}</textarea><div class="modal-actions"><button class="btn btn-ghost" id="cancelNote">Cancelar</button><button class="btn btn-primary" id="saveNote">Salvar</button></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#cancelNote").onclick=()=>modal.remove();
  modal.querySelector("#saveNote").onclick=()=>{setNote(resource.id,modal.querySelector("#noteText").value);modal.remove();showToast("Anotação salva.");};
  modal.addEventListener("click",e=>{if(e.target===modal)modal.remove()});
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function resourceCard(r){
  const s=loadState(), done=s.completed.includes(r.id), fav=s.favorites.includes(r.id);
  return `<article class="resource-card">
    <div class="resource-top"><div class="badge-row"><span class="badge primary">${escapeHtml(r.area)}</span><span class="badge">${escapeHtml(r.nivel)}</span></div><span title="${done?'Concluído':'Pendente'}">${done?'✓':'○'}</span></div>
    <h3>${escapeHtml(r.titulo)}</h3><p>${escapeHtml(r.descricao)}</p>
    <div class="badge-row"><span class="badge">${escapeHtml(r.tipo)}</span><span class="badge">${escapeHtml(r.custo)}</span><span class="badge">${escapeHtml(r.idioma)}</span></div>
    <div class="tags">${r.tags.map(t=>`<span class="tag">#${escapeHtml(t)}</span>`).join("")}</div>
    <div class="resource-actions"><a class="btn btn-primary btn-small" href="${r.url}" target="_blank" rel="noopener">Acessar ↗</a><button class="icon-btn ${fav?'favorite':''}" data-action="favorite" data-id="${r.id}">${fav?'★':'☆'} Favorito</button><button class="icon-btn" data-action="complete" data-id="${r.id}">${done?'☑ Concluído':'☐ Concluir'}</button><button class="icon-btn" data-action="note" data-id="${r.id}">📝 Nota</button></div>
  </article>`;
}
function bindResourceActions(container,onChange){
  container.addEventListener("click",e=>{const b=e.target.closest("[data-action]");if(!b)return;const id=Number(b.dataset.id),r=RESOURCES.find(x=>x.id===id);if(b.dataset.action==="favorite"){toggleFavorite(id);showToast(loadState().favorites.includes(id)?"Adicionado aos favoritos":"Removido dos favoritos");}if(b.dataset.action==="complete"){toggleCompleted(id);showToast(loadState().completed.includes(id)?"Recurso concluído!":"Recurso reaberto");}if(b.dataset.action==="note")openNoteModal(r);onChange?.();});
}
