function translation(){
// Portuguese automatic translation
var subtitle = document.querySelector("h2");
var textInfo = document.querySelector(".Textinfo");
var showcase = document.querySelector(".showcase");
var showlang = document.querySelector("html");
    showcase.innerHTML = "In this page you gonna see some previews of my projects"; 
    console.log(navigator.language);
//        if (navigator.language = 'pt-BR') {
          if( showlang.getAttribute("lang") === "pt-BR") {
            subtitle.innerHTML = "Sobre Mim";
            showcase.innerHTML = "Nessa página você poderá ver Previews dos meus projetos";
            textInfo.innerHTML = "Olá o meu nome é Gustavo Ribeiro, e essa é a minha página principal. Sou um desenvolvedor entusiasta, gosto de programar por paixão, por curiosidade e pela ciência. Abaixo tenho listado os meus projetos:"
            document.querySelector(".know").innerHTML = "Projeto mais conhecido"   
            document.querySelector(".crosscode").innerHTML = "Tradução do game Crosscode";
            document.querySelector(".lutris").innerHTML = "Projetos do Lutris";
            document.querySelector(".roblox").innerHTML = "Instalador do Roblox para Linux";
            document.querySelector(".carma2").innerHTML = "Fix para Carmageddon 2";
            document.querySelector(".carma1").innerHTML = "Fix para Carmageddon 1";
            document.querySelector(".rocket").innerHTML = "Instalador do cliente antigo de Rocket League para Linux";
            document.querySelector(".copy").innerHTML = "Criado por Gustavo Ribeiro &copy; 2023";

        }

      }



const language = document.querySelector(".Language");
language.addEventListener("click", () => {
    const langoptions = document.querySelector(".Langoptions");
    if (langoptions.style.display === "none") {
      langoptions.style.display = "block";
      langoptions.style.list = "none";
    } else {
      langoptions.style.display = "none";
      langoptions.style.list = "none";
    }
  });

 
  