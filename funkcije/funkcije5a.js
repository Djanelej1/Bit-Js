//1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
//ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
//pokrene.

function writeCitation(array) {
    var slucajniCit = Math.floor(Math.random() * array.length)
    return array[slucajniCit];
}
console.log(writeCitation(["Vreme je ono što svi žele, ali i ono što koristimo na najgori način. – Vilijam Pen",
    "Nikad ne možeš planirati budućnost preko prošlosti. – Edmund Burke",
    "Vreme ide u jednom pravcu, sećanje u drugom. – Vilijam Gibson",
    "Sadašnost je tačka koja je upravo prošla. – Dejvid Rasel",
    "Vreme je tu dovoljno dugo za one koji su spremni da ga iskoriste. – Leonardo Da Vinči", "Ako si uživao u potrošenom vremenu, onda to vreme nije uzalud potrošeno. – Džon Lenon"]));
//2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
//prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
//  nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
//godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
//prestupna).

function isLeap(year) {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return (year + "je prestupna godina");
    } else { return (year + " nije prestupna"); }
}
console.log(isLeap(1900));

//3.3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
//samoglasnika i koliko suglasnika.
function howMuchVowels(string) {
    var vovNum = 0;
    var consNum = 0;
    for (var i = 0; i <= string.length - 1; i++) {
        if (string[i] === "a" || string[i] === "e" ||                                 //moze za pojedinacan string ali ne za recenicu 
            string[i] === "i" || string[i] === "o" || string[i] === "u") {
            vovNum += 1;
        } else consNum += 1;
    } return (" Broj Vowels in " + string + " is " + vovNum + "and consonants " + consNum);
} console.log(howMuchVowels("Samoglasnik je"));
//4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
//podataka pojedinačnih elemenata ulaznog niza.

function typeofData(array) {
    var nizVred = []
    var type;
    for (var i = 0; i <= array. - 1; i++) {
        type = typeof (array[i]);
        nizVred.push(type);
    } return nizVred;
} console.log(typeofData([12, "jelena", "aa", 12.03, true]))

//5.5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
//ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
//    “pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].
function noviNizbezBrojeva(array) {
    var noviNiz = [];

    for (var i = 0; i <= array.length; i++) {
        for (var y = 0; y < array[i].length; y++) {
            if (!isNaN(array[i][y]) && typeof (array[i][y]) !== "number") {
                noviNiz.push(array[i]);
            }

        }
    } return noviNiz;
} console.log(noviNizbezBrojeva(["12bb", "pp", "as23s", "00sd"]));


//6.Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
//dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
//string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
//broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
//ili “not found” ako nema ponavljanja.

function opisStringa(string) {
    var nizOpis;
    var indexDrug = 0;
    var sred2 = "";

    if (string.lenght % 2 == 0) {
        sred2 = string[string.length / 2 - 1] + string[string.length / 2];
        console.log(string[(string.length / 2) - 1]);


    } else {
        sred2 = string[Math.floor(string.length / 2)];
    }

    for (var i = Math.floor(string.length / 2); i <= string.length - 1; i++) {
        if (string[i] == sred2) {
            indexDrug = i;
            console.log(indexDrug);

        } else { indexDrug = "not found" }
    } return [string.length, string[0], string[string.length - 1], sred2, "@index " + indexDrug];

}
console.log(opisStringa("Computer"));

//Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
//bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
//se ne ponavljaju.
function nonRepetable(array) {
    var nonRepeat = [];

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length; j++) {                  //prepisano sa net-a
            if (i === j) {
                continue;
            }
            if (array[i] === array[j]) {
                break;
            }
        }
        if (j === array.length) {
            nonRepeat.push(array[i]);
        }
    } return nonRepeat;
} console.log(nonRepetable([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

//8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
//Primer 1: ([2, 3, 4, 5], N=2) =&gt; [[2, 3], [4, 5]]
//Primer 2: ([2, 3, 4, 5, 6], N=3) =&gt; [[2, 3, 4], [5, 6]]
function smallerArr(array, num) {

    var part = [];
    for (var i = 0; i < num - 1; i++) {
        part.push([]);
    }

    for (var i = 0; i < array.length, i < num; i++) {
        // netacno
        part[i % 1].push(array[i]);
        for (var y = 1; y < array.length, y > num; y++) {
            part[y % 1].push(array[y]);
        }
    } return part;

}
console.log(smallerArr([2, 3, 4, 5, 6], 3));



