const number1=5;
const number2=8;
const number3=3;

if(number1>number2 & number1>number3){
    console.log(number1);
}
else if(number2>number1 & number2>number3){
    console.log(number2);
}
else if(number3>number1 & number3>number2){
    console.log(number3);
}
else if(number1==number2 & number3>number1){
    console.log(number3);
}
else if(number1==number3 & number2>number1){
    console.log(number2);
}
else if(number2==number3 & number1>number2){
    console.log(number1);
}