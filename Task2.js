const object={};

function decimal(digit){
    switch(digit){
        case 10:
            return "ten";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninety";
        default:
            return " ";
    }
}

function singularity(digit){
    switch(digit){
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return"four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return " ";
    }
}

function numbers(digit){
    if(digit>=10){
        let remainder = digit%10;
        let number = digit-remainder;
        if(remainder==1 && number==10){
            return "eleven";
        }
        else if(remainder==2 && number==10){
            return "twelve";
        }
        else if(remainder>2 && number==10){
            let addition="teen";
            if(remainder==3){
                return "thir"+addition;
            }
            else if(remainder==4){
                return singularity(remainder)+addition;
            }
            else if(remainder==5){
                return "fif"+addition;
            }
            else if(remainder==6){
                return singularity(remainder)+addition;
            }
            else if(remainder==7){
                return singularity(remainder)+addition;
            }
            else if(remainder==8){
                return "eigh"+addition;
            }
            else if(remainder==9){
                return singularity(remainder)+addition;
            }
        }
        return decimal(number) + " " + singularity(remainder);
    } 
}

for(let i=10; i<100; i++){
    object[i]=numbers(i);
}

console.log(object);