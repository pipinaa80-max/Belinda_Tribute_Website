const progress=document.querySelector('.progress');
const tributeMusic=document.getElementById('tributeMusic');

function startMusic(){
  tributeMusic.play().catch(()=>{});
}

startMusic();
document.addEventListener('pointerdown',startMusic,{once:true});

window.addEventListener('scroll',()=>{
  const doc=document.documentElement;
  const pct=(doc.scrollTop/(doc.scrollHeight-doc.clientHeight))*100;
  progress.style.width=pct+'%';
});

const modal=document.getElementById('modal');
const open=document.getElementById('openLetter');
const close=document.getElementById('close');
const backdrop=document.getElementById('backdrop');

open.addEventListener('click',()=>{
  modal.classList.add('open');
  document.body.classList.add('lock');
});

function closeModal(){
  modal.classList.remove('open');
  document.body.classList.remove('lock');
}

close.addEventListener('click',closeModal);
backdrop.addEventListener('click',closeModal);

document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape') closeModal();
});
