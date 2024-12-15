const fibonacci = function(num) {
    num = parseInt(num)
    let check = false
    let error = ""

    if (num < 0){
        error = "OOPS"
        check = true
     }

   

    if (num === 1 || num === 2){
        return 1
    }

    num = (((1 + Math.sqrt(5)) ** num) - ((1 - Math.sqrt(5)) ** num)) / ((2**num) * Math.sqrt(5))

    if (check === true){
        return error
    }else{
        return Math.round(num)
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
