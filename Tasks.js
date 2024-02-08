const number=92;

for(let i=0; i<=1000; i++){
    let s= number-(number%10)
    if(s>=10 && s<=90){
        console.log("is a two digit number");
        break;
    }
    else if(s>=100 && s<=990){
        console.log("is a three digit number")
        break;
    }
    else if(s==1000){
        console.log("is a four digit number");
        break;
    }
    else{
        console.log("is a single digit number");
        break;
    }
}
