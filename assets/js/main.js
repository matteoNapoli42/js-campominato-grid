let x = 1;

let container = document.getElementById("container");
let btnStart = document.getElementById("genera");
let btnReset = document.getElementById("reset");

btnStart.addEventListener("click",start);
btnStart.addEventListener("click", disable);
btnReset.addEventListener("click",clear);
btnReset.addEventListener("click",activate);

function start(){
    cellNumber = parseInt(document.getElementById("grid-dim").value);

    if(cellNumber<=0){
        cellNumber *= -1;
        alert("Numeri negativi non consentiti");
    }

    if(cellNumber>10)
    {
        cellNumber=10;
        alert("Numero troppo grande, impostato valore massimo consentito");
    }

    for(i=0;i<cellNumber;i++){
        let div = document.createElement("div");
        div.setAttribute("class","inner-container");
        div.setAttribute("id",`row${i}`);
        document.getElementById("container").appendChild(div);
        
        for(j=0; i<cellNumber;j++)
        {
            let div=document.createElement("div");
            div.setAttribute("id",x);
            div.setAttribute("class", "gridCell");
            document.getElementById(`row${i}`).appendChild(div);
            document.getElementById(x).innerHTML=`<span>${x}</span>`;
            x++;
        }
    }
}

function clear(){
    document.getElementById("container").innerHTML="";
    document.getElementById("grid-dim").value="";
}

function disable(){
    document.getElementById("genera").disabled = true;
    document.getElementById("reset").disabled = false;
}

function activate(){
    document.getElementById("genera").disabled = false;
    document.getElementById("reset").disabled = true;
}