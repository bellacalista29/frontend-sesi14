var test123 = getDigitsOfNumber(123);

function getDigitsOfNumber(num) {
    var digits = [];
    num = Math.floor(Math.abs(num));
    if(!isNaN(num))
    {
        while(num!=0)
        {
            digits.push(num%10);
            num = Math.floor(num/10); // floor pembulatan ke bawah
        }
    }
    //console.log("num : ", num);
    return digits;
}

var test456 = getDigitsOfNumber(456);
console.log("test456 : ", test456);
console.log("5 : ", getDigitsOfNumber(5));
console.log("-123.456 : ", getDigitsOfNumber(-123.456));
console.log("1000 : ", getDigitsOfNumber("1000"));
console.log("1,000 : ", getDigitsOfNumber("1,000"));
console.log("B37 : ", getDigitsOfNumber("B37"));
console.log("37B : ", getDigitsOfNumber("37B"));

function square(x)
{
    x = x*x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result);
console.log(y);