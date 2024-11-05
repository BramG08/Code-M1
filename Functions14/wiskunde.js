function berekenInhoudKubus(lengte, breedte, hoogte){
    return lengte * breedte * hoogte; 
}

let kubusInhoud = berekenInhoudKubus(10, 5, 10);
console.log(kubusInhoud);

function berekenInhoudCilinder(radius, hoogte){
    return Math.PI * Math.pow(radius, 2) * hoogte;
}


let cilInhoud = berekenInhoudCilinder(10, 5);
console.log(cilInhoud);

function berekenInhoudKubus(lengte, breedte, hoogte) {
    return lengte * breedte * hoogte;
}


function berekenInhoudCilinder(diameter, hoogte) {
    let radius = diameter / 2;
    return Math.PI * Math.pow(radius, 2) * hoogte;
}

let cilinderInhoud = berekenInhoudCilinder(10, 20);
console.log(cilinderInhoud); // Output: 1570.7963267948967 (afgerond)

function berekenSchuineZijde(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

let schuineZijde = berekenSchuineZijde(3, 4);
console.log(schuineZijde); // Output: 5

function berekenGemiddelde(a, b, c, d, e, f, g) {
    return (a + b + c + d + e + f + g) / 7;
}

let gemiddelde = berekenGemiddelde(4, 5, 6, 7, 8, 9, 10);
console.log(gemiddelde); // Output: 7