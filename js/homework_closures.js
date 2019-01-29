// // Задача 1.

function minus(number) {
    if(!number) {
        number = 0;
    }
    return function (num) {
        if(!num) {
            num = 0;
        }
        let res = number - num;
        console.log(res);
    }
}


// // Задача 2.

function multiplyMaker (num1) {
    return function(num2) {
        return num1 * num2 ;
    }
}




// // Задача 3.


function stringer() {
    let newStr = '';

    function setString (str) {
        if (tipeof(str) ==='number') {
            newStr = str.toString();    
        }else if (tipeof(str) === 'string') {
            newStr = str;
        }else {
            newStr = '';
        }
    }    
    function getString() {
        return newStr;
    }
    
    function getStrLength() {
        return NewStr.length;
    }
    
    function getReverseString() {
        return newStr.split('').reverse().join('');
    } 
}




// Задача 4.

function calc(x = 0) {

    function setValue(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x = val;
        return x;
    }

    function plus(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x += val;
        return x;
    }
    function minus(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x -= val;
        return x;
    }

    function multiply(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x *= val;
        return x;
    }

    function split(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x /= val;
        return x;
    }
    function pow(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x = Math.pow(x, val);
        return x;
    }
    return {
        setValue,
        plus,
        minus,
        multiply,
        split,
        pow
    }
}
calc();