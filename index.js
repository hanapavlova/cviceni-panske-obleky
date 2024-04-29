console.log('funguju');



const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
    
    const kosile = document.querySelector("#product-image")
  
    if (event.target.classList.contains("btn-cerna")) {
        kosile.style.fill = "#000000";
    } else if (event.target.classList.contains("btn-cervena")) {
        kosile.style.fill = "rgb(149,50,50)";
    } else if (event.target.classList.contains("btn-bila")) {
        kosile.style.fill = "#ffffff";
    } else if (event.target.classList.contains("btn-modra")) {
        kosile.style.fill = "rgb(137,172,204)"
    }
})