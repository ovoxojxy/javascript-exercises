const sumAll = function(num1, num2) {
    let result = 0
    let error = "ERROR"

    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number" || (num1 * 10)%10 !== 0){
        return error
    }

    if (num1 < num2){
        for (i = num1; i < num2 + 1; i++){
            result += i
        }
        return result
    }else if(num2 < num1){
        for (i = num2; i < num1 + 1; i++){
            result += i
        }
        return result
    }

        

};


// Do not edit below this line
module.exports = sumAll;
