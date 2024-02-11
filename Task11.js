function fibonacci(n){
    let a=1;
    let b=1;

    for(let i=3; i<=n; i++){
        let c=a+b;
        a=b;
        b=c;
    }
    return b;
}

console.log(fibonacci(5));


function Fibonacci(a){
    if(a<=1){
        return a;
    }
    return Fibonacci(a-1)+Fibonacci(a-2);
}

console.log(Fibonacci(a=6));