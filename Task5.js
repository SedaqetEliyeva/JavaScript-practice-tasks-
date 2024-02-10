function exercise(key, object){
    if(object[key]){
        return true;
    } else{
        return false;
    }
}

const person={
    name: 4,
    surname: 2
}

const student={
    name: 4,
    surname: 5
}

console.log(exercise("surname", person));
console.log(exercise("age", student));