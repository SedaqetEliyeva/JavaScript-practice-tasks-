let n=11;
let b=" ";

for(i=2; i<n; i++){
    if(n%i==0){
        b="is a compound number";
        break;
    }
    else{
        b="is a simple number";
    }
}

console.log(n, b);