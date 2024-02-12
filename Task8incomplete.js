function foo(resolve, reject){
    setTimeout(()=>resolve(10),4000);
}

let promise=new Promise(foo);

promise
-then((res)=>{
    console.log(res);
})
// -catch((error)=>console.log(error));