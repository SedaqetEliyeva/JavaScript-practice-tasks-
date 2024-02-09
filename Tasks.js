let result=" ";

for(let i=0; i<5; i++){
    result=result+"x";
    console.log(result);
}


for(let i=5; i>0; i--){
    result=" ";
    for(let j=0; j<i; j++){
        result=result+"x";
    }
    console.log(result);
}
