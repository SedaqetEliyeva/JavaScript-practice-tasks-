const arr=[7, -5, 9, 63];

const maximum=Math.max(...arr);
const minimum=Math.min(...arr);

for(i=0; i<arr.length; i++){
    if(arr[i]>maximum){
        arr[i]=maximum;
    }
    else if(arr[i]<minimum){
        arr[i]=minimum;
    }
}

console.log(maximum, minimum)