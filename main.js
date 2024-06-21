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

  document.addEventListener("DOMContentLoaded", () => {

function globe() {
document.querySelector(".Language").addEventListener("click", () => {
    const langoptions = document.querySelector(".Langoptions");
    if (langoptions.style.display === "none") {
      langoptions.style.display = "block";
      langoptions.style.list = "none";
    } 
 
else if (screen.width <= 800){
  langoptions.style.display = "none";
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
return translation()

});
}

return globe() , portuguese();

});