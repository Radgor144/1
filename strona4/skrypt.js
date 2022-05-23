let tekst1 =document.getElementById("tekst1");
let tekst2 =document.getElementById("tekst2");
let tekst3 =document.getElementById("tekst3");
let box =document.getElementById("box");
let przysick = document.getElementById("przycisk");
let akapit = document.getElementById("akapit");


przycisk.addEventListener("click",e=>{
	
	if(box.checked){
		tekst3.value = tekst1.value;
	}
	else{
		tekst2.value = tekst1.value;
	}
});

box.addEventListener("click",e=>{
	
	if(box.checked){
		akapit.innerHTML = "przepisanie od 1 do 3";
	}
	else{
		akapit.innerHTML = "przepisanie od 1 do 2";
	}
	
});

window.addEventListener("load",e=>{
	
	akapit.innerHTML = "przepisanie od 1 do 2";
	tekst1.value="";
	tekst2.value="";
	tekst3.value="";
	box.checked=false;
	
	
	
	
});