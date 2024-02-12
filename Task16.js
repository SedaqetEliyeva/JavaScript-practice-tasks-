let second=0;

function func(){
    console.log(second++);
    console.log(second);
    if(second===300){
        clearInterval(intervalId)
    }
}

const intervalId=setInterval(func, 1000);