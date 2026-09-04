applySavedTheme();renderHeader();renderFooter();
const grid=document.getElementById("favoritesGrid");
function render(){const ids=loadState().favorites;const list=RESOURCES.filter(r=>ids.includes(r.id));grid.innerHTML=list.length?list.map(resourceCard).join(""):`<div class="empty">Nenhum favorito ainda.<br><br>Abra o <a href="catalogo.html"><u>catálogo</u></a> e marque os recursos que deseja estudar depois.</div>`}
bindResourceActions(grid,render);render();
