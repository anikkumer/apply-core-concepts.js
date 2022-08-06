// return use na kore::

// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         console.log('Your year is leap year',year);
//     }
//     else{
//         console.log('Your year is not a leap year', year);
//     }
// }

// isLeapYear(1933);
// isLeapYear(1960);

// return use kore::(optional)
function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:',isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:',isHerYearLeapYear);
