var subtitle = document.querySelector("h2");
var textInfo = document.querySelector(".textInfo");
var showcase = document.querySelector(".showcase");
    showcase.innerHTML = "In this page you gonna see some previews of my projects"; 
    console.log(navigator.language);
        if (navigator.language = 'pt-BR') {
            subtitle.innerHTML = "Sobre Mim";
            showcase.innerHTML = "Nessa página você poderá ver Previews dos meus projetos";
        }