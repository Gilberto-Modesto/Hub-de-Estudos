applySavedTheme();renderHeader();renderFooter();
const els={grid:document.getElementById("resourceGrid"),search:document.getElementById("searchInput"),area:document.getElementById("areaFilter"),level:document.getElementById("levelFilter"),type:document.getElementById("typeFilter"),cost:document.getElementById("costFilter"),language:document.getElementById("languageFilter"),count:document.getElementById("resultCount")};
[...new Set(RESOURCES.map(r=>r.area))].sort().forEach(x=>els.area.insertAdjacentHTML("beforeend",`<option>${x}</option>`));
[...new Set(RESOURCES.map(r=>r.tipo))].sort().forEach(x=>els.type.insertAdjacentHTML("beforeend",`<option>${x}</option>`));
const params=new URLSearchParams(location.search);els.search.value=params.get("q")||"";if(params.get("area"))els.area.value=params.get("area");
function render(){
 const q=els.search.value.toLowerCase().trim();
 const list=RESOURCES.filter(r=>(!q||[r.titulo,r.descricao,r.area,r.tipo,...r.tags].join(" ").toLowerCase().includes(q))&&(!els.area.value||r.area===els.area.value)&&(!els.level.value||r.nivel===els.level.value)&&(!els.type.value||r.tipo===els.type.value)&&(!els.cost.value||r.custo===els.cost.value)&&(!els.language.value||r.idioma===els.language.value));
 els.count.textContent=`${list.length} recurso(s) encontrado(s)`;els.grid.innerHTML=list.length?list.map(resourceCard).join(""):`<div class="empty">Nenhum recurso encontrado.<br><br>Tente outra palavra-chave ou limpe os filtros.</div>`;
}
[els.search,els.area,els.level,els.type,els.cost,els.language].forEach(x=>x.addEventListener(x.tagName==="INPUT"?"input":"change",render));
document.getElementById("clearFilters").onclick=()=>{els.search.value="";els.area.value=els.level.value=els.type.value=els.cost.value=els.language.value="";render()};
bindResourceActions(els.grid,render);render();
