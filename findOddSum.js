// function getSum(numbers){
//     console.log(numbers);
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSum(myNumbers);




// function getSumOfAnArray(numbers){
    
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(index, element);
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);



// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0;i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSumOfAnArray(myNumbers);



function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
getOddNumbersOfAnArray(myNumbers);

const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumbersSum);