let number=15;
let b=0;

for(i=2; i<number; i++){
    if(number%i==0){
        b=number/i;
        break;
    }
}

console.log(b);