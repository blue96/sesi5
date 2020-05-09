let a = prompt("masukkan bilangan pertama",0);
let b = prompt("masukkan bilangan kedua",0);

if (a > b){
    console.log(`bilangan ${a} lebih besar dari bilangan ${b}`);
}
else if (a<b){
    console.log(`bilangan ${a} lebih kecil dari bilangan ${b}`);
}
else if (a===b){
    console.log(`bilangan ${a} sama dengan bilangan ${b}`);
}