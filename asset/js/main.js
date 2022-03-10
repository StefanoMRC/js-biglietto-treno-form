let nome = document.getElementById("nomeCognome");
let km = document.getElementById("chilometri");
let maggiorenne = document.querySelector(".maggiorenne");
let minorenne= document.querySelector(".minorenne");
let over65 = document.querySelector(".over65");
console.log(maggiorenne )
console.log(minorenne )
console.log(over65 )




let bottone = document.getElementById("bottone");
bottone.addEventListener("click",
    function(){
        document.getElementById("nomePasseggero").innerHTML=nome.value;
        console.log(km.value);
        let prezzo = km.value * 0.21;
        let sconto_minori = prezzo - ((prezzo * 20) /100);
        let sconto_over =   prezzo - ((prezzo * 40) /100);
        document.getElementById("costoBiglietto").innerHTML=prezzo;
        if()
    }
)
