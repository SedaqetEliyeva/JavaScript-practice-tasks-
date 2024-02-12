function foo(resolve, reject){
    setTimeout(()=>resolve(10), 4000);
}

let promise= new Promise(foo);

async function func(){
    try{
        console.log("Start");
        const result=await promise;
        console.log(result+20);
        console.log("End");
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log(" ");
    }
    const result=await promise;
    console.log(result);
}