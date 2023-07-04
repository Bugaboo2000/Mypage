// Portuguese automatic translation
var subtitle = document.querySelector("h2");
var textInfo = document.querySelector(".Textinfo");
var showcase = document.querySelector(".showcase");
    showcase.innerHTML = "In this page you gonna see some previews of my projects"; 
    console.log(navigator.language);
        if (navigator.language = 'pt-BR') {
            subtitle.innerHTML = "Sobre Mim";
            showcase.innerHTML = "Nessa página você poderá ver Previews dos meus projetos";
            textInfo.innerHTML = "Olá o meu nome é Gustavo Ribeiro, e essa é a minha página principal. Sou um desenvolvedor entusiasta, gosto de programar por paixão, por curiosidade e pela ciência. Abaixo tenho listado um dos meus projetos mais conhecidos:"   
            document.querySelector(".crosscode").innerHTML = "Tradução do game Crosscode";
            document.querySelector(".roblox").innerHTML = "Instalador do Roblox para Linux";
            document.querySelector(".carma2").innerHTML = "Fix para Carmageddon 2 em novos Hardwares";
            document.querySelector(".rocket").innerHTML = "Instalador do cliente antigo de Rocket League para Linux";

        }
var language = document.querySelector("Language");
language.addEventListener("click", console.log("Button pressed"));