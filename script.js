
let Tekst = prompt ("Wpisz tekst jaki wyodrębnić: ")

let slowa = Tekst.split(/\s+/);

console.log(slowa);

let UnikalneSlowa = new Set(slowa);

let unikalneSlowaTablica = Array.from(UnikalneSlowa);

let iloscDuplikatow = slowa.length - unikalneSlowaTablica.length;

console.log("Unikalne słowa:", unikalneSlowaTablica);
console.log("Ilość duplikatów:", iloscDuplikatow);

let duplikaty = slowa.filter((slowo, index) => slowa.indexOf(slowo) !== index);

if(duplikaty.length > 0){
    console.log(`Duplikaty to: ${duplikaty}`);
}else{
    console.log("Brak duplikatów.");
}


function zapiszDoPliku(text, nazwaPliku) {
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = nazwaPliku;
    a.click();
}

let czyZapisac = prompt ("Czy chcesz zapisać jako plik .txt? (tak lub nie)");
if (czyZapisac == "tak") {
    zapiszDoPliku(slowa.join(' '), 'wszystkie_slowa.txt');
    zapiszDoPliku(unikalneSlowaTablica.join(' '), 'unikalne_slowa.txt');
} else if(czyZapisac == "nie"){
    alert("Plik nie zostal zapisany");
}else{
    alert("Zly wybor");
}