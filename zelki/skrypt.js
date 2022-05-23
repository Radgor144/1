let przycisk1 = document.getElementById("przycisk1");
let tekst = document.getElementById("tekst");
let przycisk2 = document.getElementById("przycisk2");

przycisk1.addEventListener("click",e=>{
    let ksztalt = parseInt(document.getElementById("ksztalt").value);

    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    RGB = "rgb("+red+","+green+","+blue+")";

    przycisk2.style.backgroundColor = RGB;


    if(ksztalt==1){
        tekst.innerHTML = "Zamówiłeś żelka: miś";
    }

    if(ksztalt==2){
        tekst.innerHTML = "Zamówiłeś żelka: żabka";
    }

    if(ksztalt==3){
        tekst.innerHTML = "Zamówiłeś żelka: serce";
    }

    if(ksztalt>3){
        tekst.innerHTML = "Zamówiłeś żelka: inny";
    }



});