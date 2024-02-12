const object={
    name: "Sadaqat",
    age: 19
}

const newobject={
    name: "Sadaqat",
    age: 19
}

function objects(){
    return JSON.stringify(object)===JSON.stringify(newobject);
}

console.log(objects());