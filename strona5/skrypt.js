let czcionka = document.getElementById("czcionka");
let zwieksz = document.getElementById("zwieksz");
let zmniejsz = document.getElementById("zmniejsz");
let akapit = document.getElementById("akapit");
let rozmiarCzcionki;

zmniejsz.addEventListener("click",e=>{
	rozmiarCzcionki = akapit.style.fontSize;
	rozmiarCzcionki = parseInt(rozmiarCzcionki);
	if(rozmiarCzcionki>10){
		rozmiarCzcionki--;
	}
	rozmiarCzcionki = rozmiarCzcionki + "px";
	akapit.style.fontSize = rozmiarCzcionki;
	czcionka.value = rozmiarCzcionki;
});

zwieksz.addEventListener("click", e=>{
	rozmiarCzcionki = akapit.style.fontSize;
	rozmiarCzcionki = parseInt(rozmiarCzcionki);
	if(rozmiarCzcionki<30){
		rozmiarCzcionki++;
	}
	rozmiarCzcionki = rozmiarCzcionki+"px";
	akapit.style.fontSize = rozmiarCzcionki;
	czcionka.value = rozmiarCzcionki;
});



window.addEventListener("load",e=>{
	akapit.style.fontSize="20px";
	rozmiarCzcionki = akapit.style.fontSize;
	czcionka.value = rozmiarCzcionki;
	
});


let liczba1 = document.getElementById("liczba1");
let liczba2 = document.getElementById("liczba2");
let liczba3 = document.getElementById("liczba3");

let suwak1 = document.getElementById("suwak1");
let suwak2 = document.getElementById("suwak2");
let suwak3 = document.getElementById("suwak3");

let blok = document.getElementById("blok");



suwak1.addEventListener("input", e=>{

	liczba1.innerHTML = suwak1.value;
	blok.style.backgroundColor = "RGB("+suwak1.value+","+suwak2.value+","+suwak2.value+")";

});


suwak2.addEventListener("input", e=>{

	liczba2.innerHTML = suwak2.value;
	blok.style.backgroundColor = "RGB("+suwak1.value+","+suwak2.value+","+suwak3.value+")";

});


suwak3.addEventListener("input", e=>{

	liczba3.innerHTML = suwak3.value;
	blok.style.backgroundColor = "RGB("+suwak1.value+","+suwak2.value+","+suwak3.value+")";

});


let dane = document.getElementById("dane");
let tekst;
let wiersz;

tekst = "<table>";

for(let i=1; i<=10; i++){

	tekst += "<tr>";
		for(let j=1; j<=10; j++){

			tekst += "<td>" + (i*j) + "</td>";
		}
		tekst += "</tr>";

}


tekst += "</table>";

dane.innerHTML = tekst;