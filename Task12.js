const numbers={
    number1: 5,
    number2: 3,
    number3: 2
}

let num=0;

for(key in numbers){
    num=num+numbers[key];
}

console.log(num);