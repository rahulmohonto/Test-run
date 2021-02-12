console.log(99);
const numbers = [100, 12];
numbers[1] = 120;

numbers.push(999);
console.log(numbers);

// function addnumber(num1, num2) {
//     if (num2 == undefined) {
//         num2 = 0;
//     }
//     return num1 + num2;
// }
// const total = addnumber(17, 51);
// console.log(total);

// const first = addnumber(15);
// console.log(first);

function addnumber2(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const adddifferent = addnumber2(1555);
console.log(adddifferent);
const adddifferent2 = addnumber2(1555, 1544);
console.log(adddifferent2);

// template string

const firstname = 'rahul';
const lastname = 'mohonto';
const fullname = firstname + ' ' + lastname;
console.log(fullname);

const firstname1 = 'rahul';
const lastname1 = 'mohonto wants to be a good boy';
const fullname2 = `${firstname1} ${lastname1} and wants to be a good programmer`;
console.log(fullname2);

console.log(`${20 - 50 + 70}${500 - 80} wants this much money in bd taka`);

// new line  a sentence dekhanor jonne

const multiline = `bangladesh is good country
has lots of issues 
but ultimately developing nation.
got to go way further
needs to be mature in taking decisions.
`;

console.log(multiline);


//   function declaration expression in different way 

// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }

// const doubleIt = num => num * 2;  doubleIt function er nam = er pore parameter num => erpore function er vitore ja lekha hoy .

const addnumber = (num1, num2) => num1 + num2;
const onefunction = addnumber(154, 15);
console.log(onefunction);

const multiply = (num1, num2) => {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        total = num1 + num2;
    }
    else if (num1 % 2 == 1 && num2 % 2 == 0) {
        total = num1 * num2;
    }
    else if (num1 % 2 == 1 && num2 % 2 == 1) {
        total = num1 - num2;
    }
    return total;
}

const fineparticle = multiply(15, 12);
console.log(fineparticle);

const fineparticle2 = multiply(15, 13);
console.log(fineparticle2);

