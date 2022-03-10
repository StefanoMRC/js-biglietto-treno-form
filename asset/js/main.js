let nome = document.getElementById("nomeCognome");
let km = document.getElementById("chilometri");
let carrozza = document.getElementById("carrozza");




let bottone = document.getElementById("bottone");
bottone.addEventListener("click",
    function(){
        document.getElementById("nomePasseggero").innerHTML=nome.value;
        console.log(km.value);
        let prezzo = km.value * 0.21;
        let sconto_minori = prezzo - ((prezzo * 20) /100);
        let sconto_over =   prezzo - ((prezzo * 40) /100);
        document.getElementById("costoBiglietto").innerHTML=prezzo;
        document.getElementById("carrozza").innerHTML =Math.floor(Math.random() * 9 + 1);
        document.getElementById("codice").innerHTML =Math.floor(Math.random() * 9999 + 90000);
    }
)
