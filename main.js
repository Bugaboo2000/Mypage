var subtitle = document.querySelector("h2");
var textInfo = document.querySelector(".Textinfo");
var showcase = document.querySelector(".showcase");
    showcase.innerHTML = "In this page you gonna see some previews of my projects"; 
    console.log(navigator.language);
        if (navigator.language = 'pt-BR') {
            subtitle.innerHTML = "Sobre Mim";
            showcase.innerHTML = "Nessa página você poderá ver Previews dos meus projetos";
            textInfo.innerHTML = "Olá o meu nome é Gustavo Ribeiro, e essa é a minha página principal. Sou um desenvolvedor entusiasta, gosto de programar por paixão, por curiosidade e pela ciência. Abaixo tenho listado um dos meus projetos mais conhecidos:"
            
        }