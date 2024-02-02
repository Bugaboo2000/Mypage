
function carmatranslate() {

  

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
return carmatranslate()


});
}



return globe() , portuguese();

});