function loop(a){
    if(a<10){
        a++;
        console.log("Developer");
        loop(a);
    }
}

console.log(loop(0));