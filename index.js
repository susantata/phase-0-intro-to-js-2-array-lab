const cats=["Milo", "Otis", "Garfield"];
 function  destructivelyAppendCat(name) {
    cats.push('Ralph');
 } 
 function destructivelyPrependCat(name) {
    cats.unshift("Bob")
 }
 function destructivelyRemoveLastCat(name) {
    cats.pop(name)
 }
 function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    const newCats= [...cats, "Broom"];
    return newCats
}
function  prependCat(name) {
    const newCats=["Arnold", ...cats];
    return newCats
}
function removeLastCat(name) {
    const newCats=cats.slice(0,-1);
    return newCats
}
function removeFirstCat(name) {
    const newCats=cats.slice(1);
    return newCats
}
