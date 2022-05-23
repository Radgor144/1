let czerwony = document.getElementById("czerwony");
let niebieski = document.getElementById("niebieski");
let tekst = document.getElementById("tekst");

czerwony.addEventListener("mouseover", fun1);
niebieski.addEventListener("mouseover", fun1);
czerwony.addEventListener("mouseout", fun2);
niebieski.addEventListener("mouseout", fun2);

function fun1(){
    let zmienna = this.id;

    switch(zmienna){
        case "czerwony":
            tekst.style.color = "red";
            break;

        case "niebieski":
            tekst.style.color = "blue";
            break;
    }
}

function fun2(){
    let zmienna = this.id;

    switch(zmienna){
        case "czerwony":
            tekst.style.color = "white";
            break;
        case "niebieski":
            tekst.style.color = "white";
            break;
    }
}





let wejscie = document.getElementById("wejscie");
let wyjscie = document.getElementById("wyjscie");
let wyjscie2 = document.getElementById("wyjscie2");

wejscie.addEventListener("keyup", e=>{
    wyjscie.value = wejscie.value;
    wyjscie2.innerHTML = wejscie.value;
});







let przycisk = document.getElementById("przycisk");
let wypisz = document.getElementById("wypisz");

przycisk.addEventListener("click", e=>{
    let tekst2 = document.getElementById("tekst2").value;
    let wiersz = parseInt(document.getElementById("wiersz").value);

    wypisz.innerHTML = "";

    for(let i=1; i<=wiersz; i++){
        wypisz.innerHTML = wypisz.innerHTML + " " + i + " " + tekst2 + "<p>";
    }
});







let przycisk2 = document.getElementById("przycisk2");
let wynik = document.getElementById("wynik");

przycisk2.addEventListener("click", e=>{
    let operacja = document.getElementsByName("operacja");
    let liczba1 = parseInt(document.getElementById("liczba1").value);
    let liczba2 = parseInt(document.getElementById("liczba2").value);

    if(operacja[0].checked){
        wynik.value = liczba1 + liczba2;
    }
    if(operacja[1].checked){
        wynik.value = liczba1 - liczba2;
    }
    if(operacja[2].checked){
        wynik.value = liczba1 * liczba2;
    }
    if(operacja[3].checked){
        wynik.value = liczba1 / liczba2;
    }
});


let pole1 = document.getElementById("pole1");
let pole2 = document.getElementById("pole2");
let pole3 = document.getElementById("pole3");
let pole4 = document.getElementById("pole4");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    haslo = pole1.value;
    pole2.value = haslo;
    pole3.value = haslo.length;

    if(haslo.length<=5){
        pole4.value = "slabe haslo";
    }
    if(haslo.length>=9){
        pole4.value = "dobre haslo";
    }
    if(haslo.length>5 && haslo.length<9){
        pole4.value = "srednie haslo";
    }
});

window.addEventListener("load", e=>{
    pole1.value = "";
});