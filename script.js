function atualizarRelogio(){
    /*data(): pega todas as informações de tempo do seu computador*/
    const agora = new Date();

    /*padStart(2,'0'): garante que se o número for "7", ele escreve "07"*/
    const horas = agora.getHours().toString().padStart(2,'0');
    const minutos = agora.getMinutes().toString().padStart(2,'0');
    const segundos = agora.getSeconds().toString().padStart(2,'0');

    /*inserindo o texto dentro do HTML usando IDs*/
    document.getElementById("clock").textContent = `${horas}:${minutos}
    :${segundos}`;

    //lógica de saudação (condicionais)
    let msg = "";
    if (horas < 12) msg = "Bom dia! ☕"
    else if (horas < 18) msg = "Boa tarde! ☀️";
    else msg = "Boa noite! 🌙";
    document.getElementById("saudacao").textContent = msg

    //toLocaleDateString: traduz a data automaticamente para o padrão brasileiro
    const opcoes = {
        weekday: 'long',
        day: 'numeric',
        month:'long'
    };
    document.getElementById("data").
    textContent = agora.toLocaleDateString('pt-BR', opcoes);

}

    function alternarTema(){
        //pega o estdao atual do tema do body
        const temaAtual = document.body.getAttribute('data-theme');
        const novoTema = temaAtual === 'dark' ? 'light' : 'dark';

        //aplica o novo tema
        document.body.setAttribute('data-theme', novoTema);

        //localStorage: salva a escolha no HD do navegador do usuário
        localStorage.setItem('meuTema', novoTema);
    }

    //recupera o tema salvo assim que a página recarrega
    const salvo = localStorage.getItem('meuTema');
    if (salvo) document.body.setAttribute('data-theme', salvo);

    //setInterval: manda o relógio rodar a cada 1000 milissegundos (1segundo) 
    setInterval(atualizarRelogio,1000);
    atualizarRelogio(); //chama uma vez logo de cara para não começar vazio