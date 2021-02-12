function stopWatch() {
    let clock = 0;
    return function () {
        clock++;
        return clock;
    }
}

const firstclock = stopWatch();

console.log(firstclock);
console.log(firstclock());
console.log(firstclock());
console.log(firstclock());
console.log(firstclock());

const secondclock = stopWatch();
console.log(secondclock);
console.log(secondclock());
console.log(secondclock());
console.log(secondclock());

console.log(firstclock());
console.log(firstclock());



// introduction slice


const numsy = [4, 5, 88, 2, 1, 3, 56, 77];
const getslice = numsy.slice(3, 7);
console.log(getslice);

const nameslice = ['anik', 'avik', 'anwar', 'kasem', 'solaiman', 'sukhon', 'jhankar', 'kumu', 'issrafil', 'muktadir', 'tanim', 'rocky', 'bjorn'];
const sliceName = nameslice.slice(4, 8);
console.log(sliceName);


const namesplice = ['anik', 'avik', 'anwar', 'kasem', 'solaiman', 'sukhon', 'jhankar', 'kumu', 'issrafil', 'muktadir', 'tanim', 'rocky', 'bjorn'];
const spliceName = namesplice.splice(4, 5);
console.log(spliceName, namesplice);



function square(num) {
    keepaquare = [];
    for (i = 0; i < num.length; i++) {
        const getnumelement = num[i];
        const doSquare = getnumelement * getnumelement;
        keepaquare.push(doSquare);

    }
    return keepaquare;
}

const oneSquare = square([9, 8, 7]);
console.log(oneSquare);

const twoSquare = square([9, 8, 7, 81, 99, 25, 15, 27, 121, 11]);
console.log(twoSquare);
console.log("current module");