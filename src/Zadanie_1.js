//zadanie 1
let bilet = {from:"Zamosc", to:"Lublin", price:25};

console.log("W bliecie stacja początkowa to: ", bilet.from);
console.log("W bliecie stacja końcowa to: ", bilet.to);
console.log("Cena biletu to: ", bilet.price);

//zadanie 2

let persone = {name:"Wiktor", surname:"Mankut"};

console.log("Imie podane do biletu to: ", persone.name);
console.log("Nazwisko podane do biletu to: ", persone.surname);

//zdanie 3

let ksiazka1 = {
  title : "Speaking JavaScript",
  author: "Axel Rauschmayer",
  pages: 460,
};
let ksiazka2 = {
    title: "Programming JavaScript Aplications",
    author: "Eric Elliott",
    pages: 254,
};
let ksiazka3 = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
};
console.log(ksiazka1);
console.log(ksiazka2);
console.log(ksiazka3);

let ksiegarnia = [ksiazka1,ksiazka2,ksiazka3];

//zadanie4
let ksiazka4 = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254,

};
ksiegarnia.push(ksiazka4);
console.log(ksiegarnia);

//zadanie 5
let kopiowanie = ksiegarnia.slice(2,4);
console.log(kopiowanie);

//zdanie6
ksiegarnia.shift()
console.log(ksiegarnia);

//zdanie7
let suma = ksiazka1.pages + ksiazka2.pages + ksiazka3.pages + ksiazka4.pages;
console.log("Suma stron wszystkich 4 ksiazek wynosi: ", suma);









