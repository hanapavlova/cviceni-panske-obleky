console.log('funguju');

const changeWhite = () => {
    document.getElementById("product-image").style = "fill: #ffffff" 
  };
  
  const btnWhite = document.querySelector('#color-white');
  btnWhite.addEventListener('click', changeWhite);
    
  
  
  const changeBlack = () => {
    document.getElementById("product-image").style = "fill: #000000; stroke: #ffffff" 
  }
  
  const btnBlack = document.querySelector('#color-black');
  btnBlack.addEventListener('click', changeBlack);
  
  
  
  const changeRed = () => {
    document.getElementById("product-image").style = "fill: #953232" 
  };
  
  const btnRed = document.querySelector('#color-red');
  btnRed.addEventListener('click', changeRed);
  
  
  
  const changeBlue = () => {
    document.getElementById("product-image").style = "fill: #89accc" 
  };
  
  const btnBlue = document.querySelector('#color-blue');
  btnBlue.addEventListener('click', changeBlue);