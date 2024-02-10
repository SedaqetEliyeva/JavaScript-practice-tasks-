function exercise(a){
    console.log(a);
    return(b)=>exercise(b);
}

exercise(5)(3)(8)(6)(7)(10)(20);