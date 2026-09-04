const STORAGE_KEY = "hubEstudosV1";

function loadState(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {completed:[],favorites:[],notes:{},theme:"light",activity:[]};}
  catch(e){return {completed:[],favorites:[],notes:{},theme:"light",activity:[]};}
}
function saveState(state){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function toggleCompleted(id){const s=loadState();s.completed=s.completed.includes(id)?s.completed.filter(x=>x!==id):[...s.completed,id];s.activity.unshift({type:"completed",id,date:new Date().toISOString()});s.activity=s.activity.slice(0,20);saveState(s);}
function toggleFavorite(id){const s=loadState();s.favorites=s.favorites.includes(id)?s.favorites.filter(x=>x!==id):[...s.favorites,id];saveState(s);}
function getNote(id){return loadState().notes[String(id)]||"";}
function setNote(id,text){const s=loadState();if(text.trim())s.notes[String(id)] = text.trim();else delete s.notes[String(id)];saveState(s);}
function setTheme(theme){const s=loadState();s.theme=theme;saveState(s);document.documentElement.dataset.theme=theme;}
function applySavedTheme(){document.documentElement.dataset.theme=loadState().theme||"light";}
