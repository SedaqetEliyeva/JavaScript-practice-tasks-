let count=0;
let second=0;
let minute=0;

function func(){
    console.log("m", minute, "s", `${second<10?'0':''}${second}`);
    count++;
    second++;
    if(second==60){
        second=0;
        minute++;
    }
    else if(count===300){
        clearInterval(intervalId);
    }
}

const intervalId=setInterval(func, 1000);

console.log("start");