const object={
    name: 5,
    surname: 8
}

function test(key){
    if(object[key]){
        return true;
    } 
    else{
        return false;
    }
}

console.log(test("name"));