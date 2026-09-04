applySavedTheme();renderHeader();renderFooter();
function render(){
 const s=loadState(), total=RESOURCES.length, done=s.completed.length, pct=Math.round(done/total*100);
 document.getElementById("summaryCards").innerHTML=[
 ["📚",total,"Recursos catalogados"],["✓",done,"Concluídos"],["★",s.favorites.length,"Favoritos"],["📝",Object.keys(s.notes).length,"Anotações"]
 ].map(x=>`<div class="stat-card"><div>${x[0]}</div><div class="stat-value">${x[1]}</div><div class="stat-label">${x[2]}</div></div>`).join("");
 const areas=[...new Set(RESOURCES.map(r=>r.area))];
 document.getElementById("areaProgress").innerHTML=areas.map(a=>{const all=RESOURCES.filter(r=>r.area===a),d=all.filter(r=>s.completed.includes(r.id)).length,p=Math.round(d/all.length*100);return `<div class="area-progress"><div class="area-progress-head"><span>${a}</span><strong>${p}%</strong></div><div class="progress-track"><div class="progress-fill" style="width:${p}%"></div></div></div>`}).join("");
 const acts=s.activity||[];document.getElementById("activity").innerHTML=acts.length?`<div class="activity-list">${acts.slice(0,8).map(a=>{const r=RESOURCES.find(x=>x.id===a.id);return `<div class="activity-item"><strong>${r?escapeHtml(r.titulo):"Recurso"}</strong><small>${new Date(a.date).toLocaleDateString("pt-BR")}</small></div>`}).join("")}</div>`:`<p class="muted">Ainda não há atividade. Marque um recurso como concluído para começar.</p>`;
}
render();
