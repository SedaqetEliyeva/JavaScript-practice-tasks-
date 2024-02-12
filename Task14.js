const arr=[2, undefined, 6, false, 8, null, 555];
const arr2=[];

for(i=0; i<arr.length; i++){
    if(arr[i]){
        arr2.push(arr[i]);
    }
}

console.log(arr2);