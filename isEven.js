// console.log(4/2);
// console.log(50/2);
// console.log(26/2);
// console.log(60/2);

// console.log(4%2);
// console.log(50%2);
// console.log(26%2);
// console.log(60%2);

// console.log(9/2);
// console.log(55/2);
// console.log(23/2);
// console.log(99/2);

// console.log(9%2);
// console.log(55%2);
// console.log(23%2);
// console.log(99%2);


// function isEven(number){
//     const remainder = number % 2;
//     console.log(remainder);
// }

// isEven(100);


// function isEven(number){
//     const remainder = number % 2;
//     console.log(remainder);
// }

// isEven(116);

// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         console.log('number is even');
//     }
//     else{
//         console.log('number is odd');
//     }
// }

// isEven(1010);


function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(1010);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(111);
console.log(herNumberIsEven);
