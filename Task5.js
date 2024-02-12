let count=0;

function func(){
    console.log(count++);
    if(count===6){
        clearInterval(intervalId);
    }
}

const intervalId=setInterval(func, 2000);