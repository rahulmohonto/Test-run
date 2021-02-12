// let one;
// console.log(one
// );


// const square = [5, 9, 12, 3, 6, 5];
// const keepResult = [];
// for (let i = 0; i < square.length; i++) {
//     const squareElement = square[i];
//     const result = squareElement * squareElement;
//     keepResult.push(result);
// }

// console.log(keepResult);

// function getsquare([numbers]) {
//     for (i = 0; i < numbers.length; i++) {
//         const getresult = [i];
//         const squareElement = numbers[i];
//         const result = squareElement * squareElement;
//         getresult.push(result)
//     }
//     return getresult;
// }

// const one = getsquare([5, 9, 21, 54, 25]);
// console.log(one);


// map ,Introduction of map & filter

multiply = [5, 4, 2, 3, 87, 99];

function square(multiply) {
    return multiply * multiply;
}
multiply.map(function (multiply, element, array) {
    console.log(multiply, element, array);
})


usemap = [100, 200, 300, 400, 888, 999];

function squaremap(usemap) {
    return usemap * usemap;
}

usemap.map(function (usemap, element, array) {
    console.log(usemap, element, array);
})

mapsquare = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 155, 12, 23];
const calculatesquareUsingMap = mapsquare.map(function (mapsquare) {
    return mapsquare * mapsquare;
})

console.log(calculatesquareUsingMap);

const calsquare = mapsquare.map(mapsquare => mapsquare * mapsquare);
console.log(calsquare);

const calsquareagain = mapsquare.map(x => x * x);
console.log(calsquareagain);

const getbiggerUsingfilter = mapsquare.filter(x => x > 5);
console.log(getbiggerUsingfilter);

const getsmallestUsingfilter = mapsquare.filter(x => x < 10);
console.log(getsmallestUsingfilter);

// see in googlr for each /reduce/find.   

const getbigusingmap = mapsquare.map(mapsquare => mapsquare > 6);
console.log(getbigusingmap);



//  map reloaded


const actors = [{ id: 21, name: 'ratul' },
{ id: 1011, name: 'rakibul' },
{ id: 54321, name: 'raisina hills' },
{ id: 77, name: 'gulnahar' }];


let name2 = []
for (i = 0; i < actors.length; i++) {
    const accessactors = actors[i].name;
    name2.push(accessactors);
}
console.log(name2);

const getNameUsingMap = actors.map(actorName => actorName.name);
console.log(getNameUsingMap);

const getIdsUsingMap = actors.map(actorId => actorId.id);
console.log(getIdsUsingMap);

const filterid = actors.filter(actorid => actorid.id > 30);
console.log(filterid);
