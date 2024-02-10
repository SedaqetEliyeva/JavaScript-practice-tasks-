function exercise(a, b){
    console.log(a);
    console.log(b);
    console.log(a, b);
}

for(let i=0; i<8; i++){
    exercise(i);
    exercise(i, i)
}