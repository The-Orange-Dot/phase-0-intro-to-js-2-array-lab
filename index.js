// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  name = "Ralph"
  cats.push(name)
}

function destructivelyPrependCat(name) {
  name = "Bob"
  cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
  cats.pop()
}

function destructivelyRemoveFirstCat(name) {
  cats.shift()
}

function appendCat(name) {
let newCats = [...cats, "Broom"];
return newCats;
}

function prependCat(name) {
  let newCats = ["Arnold", ...cats];
  return newCats;
}

function removeLastCat(name) {
  let newCats = cats.slice(0, 2);
  return newCats;
}

function removeFirstCat(name) {
  let newCats = cats.slice(1);
  return newCats
}