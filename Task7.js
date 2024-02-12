console.log(0);

setTimeout(()=>{
    console.log(1);
},0);

function foo(){
    console.log(2);
}

setTimeout(()=>{
    console.log(3);
}, 100);

console.log(4);

foo();

setTimeout(()=>{
    console.log(5);
},0);