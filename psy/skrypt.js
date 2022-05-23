let pies1 = document.getElementById("pies1");
let pies2 = document.getElementById("pies2");
let pies3 = document.getElementById("pies3");
let piesduzy = document.getElementById("piesduzy");

pies1.addEventListener("mouseover", e=>{
    pies1.setAttribute("src","pies1-szary.jpg");
});

pies1.addEventListener("mouseout", e=>{
    pies1.setAttribute("src","pies1.jpg");
});

pies1.addEventListener("click", e=>{
    piesduzy.setAttribute("src","pies1.jpg");
    pies1.setAttribute("src","pies1.jpg");
});

pies2.addEventListener("mouseover", e=>{
    pies2.setAttribute("src","pies2-szary.jpg");
});

pies2.addEventListener("mouseout", e=>{
    pies2.setAttribute("src","pies2.jpg");
});

pies2.addEventListener("click", e=>{
    piesduzy.setAttribute("src","pies2.jpg");
    pies2.setAttribute("src","pies2.jpg");
});

pies3.addEventListener("mouseover", e=>{
    pies3.setAttribute("src","pies3-szary.jpg");
});

pies3.addEventListener("mouseout", e=>{
    pies3.setAttribute("src","pies3.jpg");
});

pies3.addEventListener("click", e=>{
    piesduzy.setAttribute("src","pies3.jpg");
    pies3.setAttribute("src","pies3.jpg");
});