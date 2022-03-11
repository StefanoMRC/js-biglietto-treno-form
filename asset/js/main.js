let nome = document.getElementById("nomeCognome");
let km = document.getElementById("chilometri");
let eta = document.getElementById("eta");



let bottone = document.getElementById("bottone");
bottone.addEventListener("click",
    function(){
        document.getElementById("nomePasseggero").innerHTML=nome.value;
        let prezzo = km.value * 0.21;
        let sconto_minori = prezzo - ((prezzo * 20) /100);
        let sconto_over =   prezzo - ((prezzo * 40) /100);
        
        document.getElementById("carrozza").innerHTML =Math.floor(Math.random() * 9 + 1);
        document.getElementById("codice").innerHTML =Math.floor(Math.random() * 9999 + 90000);
        console.log(eta.value);
        if(eta.value==1){
            document.getElementById("costoBiglietto").innerHTML=prezzo.toFixed(2);
            document.getElementById("offerta").innerHTML="Biglietto intero";

        } else if (eta.value==2){
            document.getElementById("costoBiglietto").innerHTML=sconto_minori.toFixed(2);
            document.getElementById("offerta").innerHTML="Ridotto minori"
        } else if (eta.value == 3){
            document.getElementById("costoBiglietto").innerHTML=sconto_over.toFixed(2);
            document.getElementById("offerta").innerHTML="Ridotto over 65"
        }
    }
)
