let balance = document.getElementById("balance");
let get = document.getElementById("get");
let upgrade = document.getElementById("upgrade");
let cash = document.getElementById("cash");
let click = document.getElementById("click");
gotowka = 0;
ulepszenie = 0;
poprzednieDzialanie = 0;


click.addEventListener("click", e=>{
    cash.innerHTML = gotowka + 1 + ulepszenie + "$";
    gotowka = parseInt(cash.innerHTML);
});

get.addEventListener("click", e=>{ 
    poprzednieDzialanie = parseInt(balance.innerHTML);
    balance.innerHTML = poprzednieDzialanie + gotowka;
    gotowka = 0;
    cash.innerHTML = "0$";
});

upgrade.addEventListener("click", e=>{
    ulepszenie++;
});

function liczenie(){
    gotowka += ulepszenie/2;
    cash.innerHTML = gotowka + "$";
    setTimeout("liczenie()",1000);
}


window.addEventListener('load', liczenie, false);