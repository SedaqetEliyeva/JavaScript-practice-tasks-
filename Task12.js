const arr=[4, 8, 7, 10, 11];

const single=[];
const pair=[];

for(i=0; i<arr.length; i++){
    if(arr[i]%2){
        single.push(arr[i]);
    }
    else{
        pair.push(arr[i]);
    }
}

console.log(single, pair);