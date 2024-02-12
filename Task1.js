const arr=["A", "B", "C", "D", "E"];

function arrfunction(item, index){
    console.log(item);
    console.log(index);
}

arr.forEach(arrfunction);

arr.map(arrfunction);

arr.filter(arrfunction);

arr.find(arrfunction);