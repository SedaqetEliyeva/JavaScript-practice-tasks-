const person={
    name: "Sadaqat",
    surname: "Aliyeva"
}

let sum=" ";

for(key in person){
    console.log(key, ":", person[key]);
    sum=sum+ " " +person[key];
}

console.log(sum);