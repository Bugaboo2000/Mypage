
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
return carma2translate()


});
}



return globe() , portuguese();

});