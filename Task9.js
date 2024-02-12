const person={
    name: "Sadaqat",
    surname: "Aliyeva",
    fullname(){
        return this.name + " " + this.surname;
    }
}

console.log(person.fullname());