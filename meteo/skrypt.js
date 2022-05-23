let kelwiny = document.getElementById("kelwiny");
let Fakrenheity = document.getElementById("Fakrenheity");
let wynik = document.getElementById("wynik");

kelwiny.addEventListener("click", e=>{
    let liczba = parseInt(document.getElementById("liczba").value);

    if(isNaN(liczba)){
        alert("Błąd danych");
    }
    if(!isNaN(liczba)){
        wynik.innerHTML = (liczba+273.15)+"<sup>o</sup>K";
    }
});

Fakrenheity.addEventListener("click", e=>{
    let liczba = parseInt(document.getElementById("liczba").value);

    if(isNaN(liczba)){
        alert("Błąd danych");
    }
    if(!isNaN(liczba)){
        wynik.innerHTML = (liczba*1.8)+32+"<sup>o</sup>F";
    }
});



