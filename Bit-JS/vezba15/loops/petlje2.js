//prvi zadatak
var e = 3;
var niz = [5, -4.2, 3, 7];
for (x = 0; x <= niz.length - 1; x++) {
    if (e == niz[x]) {
        console.log("yes")
    } else console.log("No");
}

var e = 3;
var niz = [5, -4.2, 18, 7];
for (x = 0; x <= niz.length - 1; x++) {
    if (e == niz[x]) {
        console.log("yes")
    } else console.log("No");
}

//Drugi zadatak
var niz = [-3, 11, 5, 3.4, -8];
var nizPomnozen = [];
for (x = 0; x <= niz.length - 1; x++) {
    if (x > 0) {
        console.log((niz[x] * 2));
    } else { console.log(niz[x]) }
}

//Treci zadatak 
var a = [4, 2, 2, -1, 6];
var min = a[0];
var mestoMin = 0;
for (var i in a) {
    if (a[i] < min) {
        min = a[i];
        mestoMin = i;
    }
} console.log("minimum je " + min + " a mesto je " + mestoMin)

//Cetvrti zadatak
var a = [4, 2, 2, -1, 6];
var min = a[0];

for (var i in a) {
    if (a[i] < min) {
        min = a[i];

    }
} console.log("minimum je " + min + )


//Peti zadatak
var niz = [3, 11, -5, -3, 2];
var zbir = 0;
for (x = 0; x < niz.length; x++) {
    if (niz[x] > 0) {
        zbir += niz[x];
    }
} console.log(zbir);

//Sesti zadatak pokusaj
var niz = [2, 4, -2, 7, -2, 4, 2];
for (x = 0; x < niz.length / 2; x++) {
    for (y = niz.length - 1; y > niz.lenght / 2; y--) {
        if (niz[x] != niz[y]) {
            console.log("Niz nije simetrican");
        }else{console.log("niz je Simetrican");}
    }
}
//Sesti zadatak
var niz = [3, 4, 12, 8];
for (x = 0; x < niz.length / 2; x++) {
    if (niz[x] == niz[niz.length -x- 1]) {
        console.log("Niz je simetrican");
    } console.log("niz nije simetrican")
};
var niz = [2, 4, -2, 7, -2, 4, 2];
for (x = 0; x < niz.length / 2; x++) {
    if (niz[x] == niz[niz.length -x- 1]) {
        console.log("Niz je simetrican");
    } else{console.log("niz nije simetrican")}
};

//sedmi zadatak