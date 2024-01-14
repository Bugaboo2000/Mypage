function translation(){
            document.querySelector("h2").innerHTML = "Sobre Mim";
            document.querySelector(".showcase").innerHTML = "Nessa página você poderá ver Previews dos meus projetos";
            document.querySelector(".Textinfo").innerHTML =  "Olá o meu nome é Gustavo Ribeiro, e essa é a minha página principal. \
            Sou um desenvolvedor entusiasta, gosto de programar por paixão, por curiosidade e pela ciência. Abaixo tenho listado os meus projetos:"
            document.querySelector(".know").innerHTML = "Projeto mais conhecido"   
            document.querySelector(".crosscode").innerHTML = "Tradução do game Crosscode";
            document.querySelector(".lutris").innerHTML = "Projetos do Lutris";
            document.querySelector(".roblox").innerHTML = "Instalador do Roblox para Linux";
            document.querySelector(".carma2").innerHTML = "Fix para Carmageddon 2";
            document.querySelector(".carma1").innerHTML = "Fix para Carmageddon 1";
            document.querySelector(".rocket").innerHTML = "Instalador do cliente antigo de Rocket League para Linux";
            document.querySelector(".copy").innerHTML = "Criado por Gustavo Ribeiro &copy; 2023";

        }

function carmatranslate() {
// TODO: translate carma 1 page  
}

function carma2translate() {
 document.querySelector(".carmainfo").innerHTML = "Esse projeto foi desenvolvido no intuito de concertar as incompatibilidades e roda-lô em Hardwares mais modernos" + 
 "que utilizam o sistema operacional Linux. Nesse projeto foi utilizado Yaml e shellscript para automatizar a instalação do setup e fazer as configurações se" +
 "tornarem fáceis de instalar e rodar a última versão do Nglide 21 da Zeus software, possibilitando o jogo rodar com uma" +
  "API mais moderna como o Vulkan";
  document.querySelector(".ghud").innerHTML = "Carmageddon 2 rodando com Gallium Hud";
  document.querySelector(".copy").innerHTML = "Criado por Gustavo Ribeiro &copy; 2023";




}

  document.addEventListener("DOMContentLoaded", () => {

function globe() {
document.querySelector(".Language").addEventListener("click", () => {
    const langoptions = document.querySelector(".Langoptions");
    if (langoptions.style.display === "none") {
      langoptions.style.display = "block";
      langoptions.style.list = "none";
    } 
 
    else {
      langoptions.style.display = "none";
      langoptions.style.list = "none";
    }
  });
}

function portuguese() {
const portuguese = document.querySelector(".portuguese");
portuguese.addEventListener("click", () =>{ 
document.querySelector(".Langoptions").style.display = "none";
return translation(), carma2translate(), carmatranslate();


});
}



return globe() , portuguese();

});