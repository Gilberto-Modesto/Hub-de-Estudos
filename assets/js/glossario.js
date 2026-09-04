applySavedTheme();renderHeader();renderFooter();
const input=document.getElementById("glossarySearch"),grid=document.getElementById("glossaryGrid");
function render(){const q=input.value.toLowerCase().trim();const list=GLOSSARY.filter(x=>!q||`${x.termo} ${x.traducao} ${x.area} ${x.explicacao}`.toLowerCase().includes(q));grid.innerHTML=list.length?list.map(x=>`<article class="glossary-card"><div class="glossary-area">${escapeHtml(x.area)}</div><div class="glossary-term">${escapeHtml(x.termo)}</div><div class="glossary-translation">${escapeHtml(x.traducao)}</div><p>${escapeHtml(x.explicacao)}</p></article>`).join(""):`<div class="empty">Nenhum termo encontrado.</div>`}
input.addEventListener("input",render);render();
