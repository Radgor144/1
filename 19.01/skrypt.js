let przycisk1 = document.getElementById("przycisk1");
let przycisk2 = document.getElementById("przycisk2");
let przycisk3 = document.getElementById("przycisk3");
let tekst = document.getElementById("tekst");


przycisk1.addEventListener("click",e=>{
    let rozmiar = parseInt(document.getElementById("rozmiar").value);
    let wybor = document.getElementById("wybor");
    
    tekst.style.fontSize = rozmiar+"%";
    tekst.style.color = "red";

    if(wybor.value == "prosty"){
        tekst.style.fontStyle = "normal";
    }
    if(wybor.value == "kursywa"){
        tekst.style.fontStyle = "italic";
    }
});

przycisk2.addEventListener("click",e=>{
    let rozmiar = parseInt(document.getElementById("rozmiar").value);
    let wybor = document.getElementById("wybor");
    
    tekst.style.fontSize = rozmiar+"%";
    tekst.style.color = "green";

    if(wybor.value == "prosty"){
        tekst.style.fontStyle = "normal";
    }
    if(wybor.value == "kursywa"){
        tekst.style.fontStyle = "italic";
    }
});

przycisk3.addEventListener("click",e=>{
    let rozmiar = parseInt(document.getElementById("rozmiar").value);
    let wybor = document.getElementById("wybor");
    
    tekst.style.fontSize = rozmiar+"%";
    tekst.style.color = "blue";

    if(wybor.value == "prosty"){
        tekst.style.fontStyle = "normal";
    }
    if(wybor.value == "kursywa"){
        tekst.style.fontStyle = "italic";
    }
});