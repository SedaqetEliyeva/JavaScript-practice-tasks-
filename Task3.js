const object={
    a: 18,
    b: 8,
    sum: function(){
        return this.a + this.b;
    }
};

console.log(object.sum());