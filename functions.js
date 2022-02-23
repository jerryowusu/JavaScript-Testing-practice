// stringLength
const stringLength = (string) => {
    const length = string.length;
    if(length < 1) {
        throw "Please string should not be empty";
    } else {
        if(length > 10) {
            throw "Please string should not be more than 10 characters"
        }else {
            return length
        }
    }
} 

const reverseString = string => string.split('').reverse().join('');

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase().concat(string.slice(1))


class Calculator {

    multiply = (c, d) => c * d;

    divide = (c, d) => c / d;

    divideByZero = (c, d) => d;
    
    add = (c, d) => c + d;

    subtract = (c, d) => c - d;

}


    module.exports = { stringLength, reverseString, capitalizeFirstLetter, Calculator };