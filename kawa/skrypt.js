let przycisk = document.getElementById("przycisk");
let wynik = document.getElementById("wynik");


przycisk.addEventListener("click",e=>{
    let numer = parseInt(document.getElementById("numer").value);
    let waga = parseInt(document.getElementById("waga").value);

    if(numer==1){
        
        wynik.innerHTML = "Koszt zamowienia wynosi: "+(5*waga)+" zł";
    }
    if(numer==2){
        
        wynik.innerHTML = "Koszt zamowienia wynosi: "+(7*waga)+" zł";
    }
    if(numer==3){
        wynik.innerHTML = "Koszt zamowienia wynosi: "+(6*waga)+" zł";
    }
});