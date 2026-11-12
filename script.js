/* ===== Helpers (mesma ideia do seminário de IA) ===== */
let n=0;
const R=(c,h)=>`<div class="r ${c}" style="--i:${n++}">${h}</div>`;
const H=(k,t)=>R('',`<div class="k">${k}</div><h2>${t}</h2>`);
const IMG=(f,alt,c='',s='')=>`<img class="${c}" src="assets/${f}" alt="${alt}" style="${s}">`;
const D=(f,s,i=1,c='')=>`<img class="dc r ${c}" src="assets/${f}" alt="" aria-hidden="true" style="--i:${i};${s}">`;
const NUM=(i,t,s='')=>R('row al c',`<span class="n">${i}</span><h3 style="margin:0;font-size:36px${s}">${t}</h3>`);
const ANS=(i,t)=>R('c row',`<span class="n">${i}</span><p style="font-size:26px">${t}</p>`);

/* ===== Slides ===== */
const S=[
// 1. Capa
()=>D('chapeu.png','left:780px;top:-70px;width:300px',1)+D('bandeira-mastro.png','right:-20px;top:10px;width:200px',2,'z')+D('goiaba.png','left:-20px;bottom:-30px;width:170px',2)+D('palmeira.png','left:-26px;bottom:120px;width:130px',2)+D('onca-galho.png','left:540px;bottom:-20px;width:380px',3)+D('caipirinha.png','left:960px;bottom:30px;width:100px',3)+
`<div class="cv"><div class="col" style="width:1100px;justify-content:center">
${R('k','Seminário · História e cultura')}
${R('',`<h1>Raízes do<br><span class="gr">Brasil</span></h1>`)}
${R('sub','Dos povos indígenas ao Brasil de hoje')}
</div>${R('net z',IMG('cristo-cinza.png','Cristo Redentor','','right:0;top:0;width:500px')+IMG('passista.png','Passista de carnaval','','left:20px;bottom:0;width:300px')+IMG('bandeira.png','Bandeira do Brasil','','left:140px;top:30px;width:230px')+IMG('tucano-2.png','Tucano','','right:70px;bottom:20px;width:190px'))}</div>`,

// 2. Antes da colonização
()=>D('serpentina.png','left:-50px;top:-60px;width:200px',1)+D('palma.svg','right:-40px;top:-90px;width:380px;rotate:15deg',2)+
H('Parte 1','História do Brasil <em>antes da colonização</em>')+
`<div class="row al" style="gap:70px;flex:1"><div class="col f1" style="gap:22px">${['Povos Indígenas','Modo de Vida','Cultura e Religião','Território'].map(t=>R('c s',`<h3 style="margin:0;font-size:46px">${t}</h3>`)).join('')}</div>
${R('z',`<div class="mb" style="background-image:url(assets/oca.jpg)">${IMG('indigena.jpg','Jovem indígena com pintura facial e colar de miçangas','rd')}${IMG('pandeiro.png','','pd')}</div>`)}</div>`,

// 3. Após a colonização
()=>D('pena.png','left:-70px;top:-50px;width:170px;rotate:12deg',1)+D('palma.svg','right:-30px;top:-80px;width:360px;rotate:10deg',2)+
H('Parte 2','História do Brasil <em>após a colonização</em>')+
`<div class="row al" style="gap:70px;flex:1"><div class="col f1" style="gap:22px">${['Descobrimento e Colonização','Escravidão','Independência','Abolição da Escravidão'].map((t,i)=>NUM(i+1,t)).join('')}</div>
${R('z',`<div class="pl"><figure class="pol" style="right:20px;top:0;width:300px;height:340px;rotate:3deg;margin:0">${IMG('navegador.jpg','Retrato de um navegador português')}</figure><figure class="pol" style="left:0;top:150px;width:310px;height:380px;rotate:-3deg;margin:0;z-index:2">${IMG('fim-escravidao.jpg','Mãos negras erguidas rompendo as correntes')}</figure><figure class="pol" style="right:-10px;bottom:0;width:340px;height:300px;rotate:-8deg;margin:0;z-index:3">${IMG('caravela.jpg','Caravela com velas marcadas pela cruz')}</figure></div>`)}</div>`,

// 4. Cultura
()=>D('palma.svg','right:-30px;top:-80px;width:340px;rotate:10deg',1)+
H('Cultura','Cultura <em>brasileira</em>')+
`<div class="row" style="gap:60px;flex:1"><div class="col f1" style="gap:30px">${R('row ph2',IMG('folclore.jpg','Ilustração de personagens do folclore brasileiro')+IMG('feijoada.jpg','Feijoada com arroz, couve e laranja'))}
<div class="g2">${['Tradição','Comidas','Música','Esportes'].map((t,i)=>R('c'+(i%3==0?' g':''),`<h3 style="margin:0;font-size:46px">${t}</h3>`)).join('')}</div></div>
${R('z',`<div class="cl">${IMG('cavaquinho.png','Cavaquinho','','right:30px;top:0;width:270px;rotate:8deg')+IMG('jogadora.png','Jogadora com a camisa do Brasil','','right:0;bottom:150px;width:200px')+IMG('tambor.png','Tambor','','left:0;bottom:90px;width:300px')+IMG('rio-livro.png','','','left:100px;bottom:-10px;width:500px')}</div>`)}</div>`,

// 5. Brasil contemporâneo
()=>D('palma.svg','right:-60px;top:-90px;width:380px;rotate:15deg',1)+
H('Hoje','Brasil <em>contemporâneo</em>')+
`<div class="row al" style="gap:50px;flex:1"><div class="g2 f1" style="grid-auto-rows:300px">${['Política e Corrupção','Desigualdade Social','Educação e Saúde','Tecnologia e Economia'].map((t,i)=>R('c'+((i==0||i==3)?' g':'')+' al',`<h3 style="margin:0;font-size:46px;line-height:1.15">${t}</h3>`).replace('class="r c','class="r c')).join('')}</div>
${R('z',`<div class="pc">${IMG('bandeira-3.jpg','Jovem com óculos escuros e a bandeira nos ombros')}${IMG('bandeira-1.jpg','Mulher de cabelo cacheado segurando a bandeira do Brasil')}${IMG('bandeira-2.jpg','Mulher de costas segurando a bandeira ao lado de uma piscina')}</div>`)}</div>`,

// 6. Entrevista
()=>D('pena.png','left:-70px;top:-50px;width:170px;rotate:12deg',1)+D('onca-pe.png','left:-20px;bottom:-10px;width:300px',3)+
H('Entrevista','Rander <em>Brito</em>')+R('lead','Professor de História do Colégio Sagrado Coração de Jesus.')+
`<div class="row al" style="gap:70px;flex:1"><div class="col f1" style="gap:20px">${['Como foi a abolição da escravidão?','O que mudou do Brasil atual desde o descobrimento?','Quais os resquícios dos indígenas até hoje?','Quais tradições que os indígenas nos passaram que praticamos até hoje?'].map((t,i)=>NUM(i+1,t,';line-height:1.2;font-size:32px')).join('')}</div>
${R('z',`<div class="fr">${IMG('professor.jpg','Professor Rander Brito pensativo, com a mão no queixo','ph')}${IMG('tucano-3.png','','','position:absolute;left:-30px;bottom:-20px;width:190px')}${IMG('onca-laranja.png','','','position:absolute;right:-90px;bottom:-30px;width:270px')}</div>`)}</div>`,

// 7. Respostas 1 e 2
()=>D('serpentina.png','left:-50px;top:-60px;width:200px',1)+D('bateria.png','right:-40px;top:-30px;width:230px',2)+
H('Entrevista','Res<em>postas</em> 1 e 2'.replace('Res<em>postas</em>','Respostas'))+
`<div class="row" style="gap:56px;flex:1"><div class="col f1" style="gap:24px;justify-content:center">${ANS(1,'A abolição foi um processo que começou em 1850 com o fim do tráfico negreiro e, com isso, vieram diversas leis, como a Lei dos Sexagenários, a Lei do Ventre Livre e a Carta de Alforria. Quando a princesa Isabel assina a chamada Lei Áurea, na verdade, ela está finalizando um processo que começou há pelo menos 50 anos. E só para ressaltar: isso lhe custou o reinado dela.')}
${ANS(2,'Em primeiro lugar, o Brasil se torna independente e, logo depois, se torna uma República. O nosso país cresceu em questão territorial e econômica, chegando a ser a oitava economia do mundo em determinado período da nossa história. “Eu posso dizer para vocês com toda certeza que o Brasil evoluiu, o Brasil cresceu em economia, em população e em cultura.”')}</div>
${R('z gp',IMG('grupo.jpg','Grupo de alunos de uniforme azul ao lado do professor Rander Brito'))}</div>`,

// 8. Respostas 3 e 4
()=>D('serpentina.png','left:-50px;top:-60px;width:200px',1)+D('bateria.png','right:-40px;top:-30px;width:230px',2)+
H('Entrevista','Respostas <em>3 e 4</em>')+
`<div class="row" style="gap:56px;flex:1"><div class="col f1" style="gap:24px;justify-content:center">${ANS(3,'Resquícios: temos pouco mais de um milhão e meio de indígenas, e a maior parte deles localiza-se na região Norte e Amazônica, nas reservas indígenas.')}
${ANS(4,'Cultura: alguns hábitos que os indígenas passaram foram a caça, a pesca e o hábito de tomar banho. Trouxeram também a miscigenação.')}</div>
${R('z gp',IMG('grupo.jpg','Grupo de alunos de uniforme azul ao lado do professor Rander Brito'))}</div>`,

// 9. Referências
()=>D('serpentina.png','left:-50px;top:-60px;width:200px',1)+D('fantasia.png','left:-20px;bottom:-20px;width:230px',2)+D('mascara.png','right:-20px;bottom:-30px;width:300px',2)+
H('Fontes','Referências <em>bibliográficas</em>')+
/* Substitua os dois cartões abaixo pelas referências reais do trabalho */
`<div class="col" style="gap:24px">${R('c g',`<p>Adicione aqui a primeira referência.</p>`)}${R('c g',`<p>Adicione aqui a segunda referência.</p>`)}</div>`,

// 10. Agradecimento
()=>D('mascara.png','left:-30px;top:-20px;width:260px',1)+D('bateria.png','left:640px;bottom:-30px;width:240px',3)+
`<div class="cv"><div class="col" style="width:1150px;justify-content:center">${R('',`<h1 style="font-size:140px">Muito obrigado <span class="gr">pela atenção</span></h1>`)}</div>
${R('cr',`<div class="crl"><div class="cs"><div class="ck">Seminário</div><div class="ct">Raízes do Brasil</div><div class="ck" style="margin-top:90px">Integrantes</div><div class="cn">Davi Wagner</div><div class="cn">Mariah Sales</div><div class="cn">Marianna Sales</div><div class="cn">Letícia Vieira</div><div class="cd">★</div></div><div class="cs"><div class="ck">Seminário</div><div class="ct">Raízes do Brasil</div><div class="ck" style="margin-top:90px">Integrantes</div><div class="cn">Davi Wagner</div><div class="cn">Mariah Sales</div><div class="cn">Marianna Sales</div><div class="cn">Letícia Vieira</div><div class="cd">★</div></div></div>`)}</div>`
];

/* ===== Montagem (mesma lógica do seminário de IA) ===== */
const st=document.getElementById('st'),pg=document.getElementById('pg'),bar=document.getElementById('bar'),bk=document.getElementById('bk');
S.forEach(f=>{n=0;st.insertAdjacentHTML('beforeend',`<section class="sl">${f()}</section>`)});
document.querySelectorAll('ul').forEach(u=>[...u.children].forEach((l,k)=>l.style.setProperty('--k',k)));
document.querySelectorAll('h2').forEach(h=>{let j=0;(function w(nd){[...nd.childNodes].forEach(c=>{if(c.nodeType==3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t))f.append(t);else{const o=document.createElement('span'),k=document.createElement('span');o.className='w';k.textContent=t;k.style.setProperty('--j',j++);o.append(k);f.append(o)}});c.replaceWith(f)}else if(c.nodeType==1)w(c)})})(h)});
const sl=[...document.querySelectorAll('.sl')];let cur=-1;
// Primeiro avanço durante a animação: completa o slide na hora. Depois do avanço: próximo slide.
function adv(){const s=sl[cur];if(!s.classList.contains('skip')&&performance.now()-s.dataset.t<3200){s.classList.add('skip');return}go(cur+1)}
function go(i){bk.classList.remove('on');i=Math.max(0,Math.min(sl.length-1,i));if(i==cur)return;
 const dir=i>cur?1:-1,t=sl[i];
 // slide novo parte do lado de onde vem; o anterior sai para o lado oposto
 t.style.transition='none';t.style.setProperty('--tx',(cur<0?0:dir*240)+'px');void t.offsetWidth;t.style.transition='';
 if(cur>=0){const o=sl[cur];o.style.setProperty('--tx',(-dir*240)+'px');o.classList.add('out');o.classList.remove('on','skip');setTimeout(()=>o.classList.remove('out'),1000)}
 cur=i;st.querySelector('.bg').style.transform=`translateX(${-i*20}px)`;
 sl[i].classList.remove('out','skip','done');setTimeout(()=>sl[i].classList.add('done'),5200);sl[i].dataset.t=performance.now();sl[i].classList.add('on');
 pg.textContent=i?`${i+1} / ${sl.length}`:'';bar.style.transform=`scaleX(${(i+1)/sl.length})`;history.replaceState(0,'','#'+(i+1))}
// Escala o palco 1920×1080 para caber na janela
function fit(){const s=Math.min(innerWidth/1920,innerHeight/1080);st.style.transform=`translate3d(${Math.round((innerWidth-1920*s)/2)}px,${Math.round((innerHeight-1080*s)/2)}px,0) scale(${s})`}
addEventListener('resize',fit);fit();
const fs=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();
addEventListener('keydown',e=>{const k=e.key;if(e.altKey||e.ctrlKey||e.metaKey)return;
 if(['ArrowRight','ArrowDown','PageDown','MediaTrackNext',' ','Enter'].includes(k)){e.preventDefault();adv()}
 else if(['ArrowLeft','ArrowUp','PageUp','MediaTrackPrevious','Backspace'].includes(k)){e.preventDefault();go(cur-1)}
 else if(k=='f'||k=='F'||k=='F5'){e.preventDefault();fs()}           // F = tela cheia
 else if(k=='.'||k=='b'||k=='B'||k=='Escape'&&bk.classList.contains('on'))bk.classList.toggle('on'); // B = tela preta
 else if(k=='Home')go(0);else if(k=='End')go(sl.length-1);
 else if(k=='e'||k=='E')st.contentEditable=st.contentEditable!='true'});  // E = editar texto
// Gestos no celular
let tx=0;addEventListener('touchstart',e=>tx=e.touches[0].clientX);addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>60)go(cur+(d<0?1:-1))});
go((parseInt(location.hash.slice(1))||1)-1);