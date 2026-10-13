    const button=document.getElementById('menu-button');
    const nav=document.getElementById('mobile-nav');
    button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
    nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Abrir menu')}});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.focus()}});
    const quoteForm=document.getElementById('quote-form');
    if(quoteForm){
      const preselected=new URLSearchParams(location.search).get('interesse');
      const interest=quoteForm.elements.namedItem('interesse');
      if(preselected && interest && [...interest.options].some(option=>option.value===preselected))interest.value=preselected;
      const result=document.getElementById('quote-result');
      const preview=document.getElementById('quote-preview');
      const emailLink=document.getElementById('quote-email');
      const copyButton=document.getElementById('quote-copy');
      const status=document.getElementById('copy-status');
      quoteForm.addEventListener('submit',event=>{
        event.preventDefault();
        if(!quoteForm.reportValidity())return;
        const data=new FormData(quoteForm);
        const value=name=>String(data.get(name)||'').trim();
        const lines=[`Nome: ${value('nome')}`,`Empresa: ${value('empresa')||'Não informado'}`,`E-mail: ${value('email')}`,`Telefone: ${value('telefone')||'Não informado'}`,`Produto ou solução: ${value('interesse')}`,`Quantidade: ${value('quantidade')||'A definir'}`,`Detalhes: ${value('detalhes')}`];
        const message=lines.join('\n');
        preview.textContent=message;
        emailLink.href='mailto:comercial@tecvolt.ind.br?subject='+encodeURIComponent('Solicitação de orçamento — Tecvolt')+'&body='+encodeURIComponent(message);
        result.classList.add('visible');
        status.textContent='';
        result.scrollIntoView({behavior:'smooth',block:'nearest'});
      });
      copyButton.addEventListener('click',async()=>{
        try{await navigator.clipboard.writeText(preview.textContent);status.textContent='Mensagem copiada. Envie para comercial@tecvolt.ind.br.'}
        catch{status.textContent='Selecione e copie o texto acima para enviar por e-mail.'}
      });
    }


    document.querySelectorAll('.vendor-card img').forEach(img=>{
      const hide=()=>{img.hidden=true};
      img.addEventListener('error',hide);
      if(img.complete && img.naturalWidth===0)hide();
    });
