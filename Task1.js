const box={
    folder1: 78,
    folder2: null,
    folder3: undefined,
    folder4: true,
    folder5: function(){
        return "Developer";
    }
}

console.log(box.folder5);
console.log(box.folder5());
console.log(box.folder4);