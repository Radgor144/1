let przycisk = document.getElementById("przycisk");
let wynik = document.getElementById("wynik");

przycisk.addEventListener("click",e=>{

    let liczba1 = parseInt(document.getElementById("liczba1").value);
    let liczba2 = parseInt(document.getElementById("liczba2").value);
    let liczba3 = parseInt(document.getElementById("liczba3").value);

    if(!parseInt(liczba1) || !parseInt(liczba2) || !parseInt(liczba3)){
        alert("wpisz poprawne dane");
    }
    else{
        if(liczba1<liczba2 && liczba1<liczba3){
            wynik.innerHTML = liczba1;
        }
        if(liczba2<liczba1 && liczba2<liczba3){
            wynik.innerHTML = liczba2;
        }
        if(liczba3<liczba1 && liczba3<liczba2){
            wynik.innerHTML = liczba3;
        }
    }


});

