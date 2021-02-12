console.log(99);
const ages = [19, 12, 14, 81, 54];
const ages2 = [25, 27, 27, 18, 36, 29];
const allages = ages.concat(ages2);
console.log(allages);
const ageagain = [26, 16, 19, 45, 20, 22];

const agerepeat = ages.concat(ages2).concat(ageagain);
console.log(agerepeat);
const stringray = (['string', 'making', 'array', 'by', 'just', 'using']);
const arraymake = [...stringray];
console.log(arraymake);

const number = [250, 650, 999, 1000];
const maximum = Math.max(...number);
console.log(maximum);


// declaring object using class and create object using class

class Village {
    constructor(name, age, villageName) {
        this.name = name;
        this.age = age;
        this.villageName = villageName;
        this.quality = 'qualified on the basis of iq answers';
    }
}

// ekhane constructor() keyword and class e new object create korar jonno new lekhe classname lekhe(ermoddhe sob lekhte hobe). 
// keyword constructor() and new  and this.     

const newest = new Village('bilal', 25, 'dhokrakul');
const newest2 = new Village('anwar', 28, 'basupara');
console.log(newest, newest2);

console.log(newest.name, newest2.name);

const newest3 = new Village('khan bappi', 19, 'mollapara');

console.log(newest, newest2, newest3);