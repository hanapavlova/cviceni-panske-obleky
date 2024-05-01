console.log('funguju');



//const button = document.querySelector(".btn"); > takhle to nejde, protože to vybere jen první s těch selektorů, takže se to musí udělat přes pole a forEach


const kosile = document.querySelector("#product-image");

const changeColor = (event) => {
    const vybranaBarva = event.target.id;
    const colors = {
        "color-white": "#ffffff",
        "color-black": "#000000",
        "color-red": "rgb(149,50,50)",
        "color-blue": "rgb(137,172,204)",
    }
    kosile.style.fill = colors[vybranaBarva];
}

const buttons = Array.from(document.getElementsByClassName("btn"));
buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
});


  /*
    if (event.target.classList.contains("btn-cerna")) {
        kosile.style.fill = "#000000";
    } else if (event.target.classList.contains("btn-cervena")) {
        kosile.style.fill = "rgb(149,50,50)";
    } else if (event.target.classList.contains("btn-bila")) {
        kosile.style.fill = "#ffffff";
    } else if (event.target.classList.contains("btn-modra")) {
        kosile.style.fill = "rgb(137,172,204)"
    }
*/





