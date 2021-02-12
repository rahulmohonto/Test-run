
class ProductsParent {
    constructor() {
        this.companyName1 = 'AMD';
        this.companyName2 = 'NVIDIA';

    }
}


class Products extends ProductsParent {
    constructor(Name, memorySize, speed, warranty, cudaCores) {
        super();
        this.pname = Name;
        this.pmemorysize = memorySize;
        this.pspeed = speed;
        this.pwarranty = warranty;
        this.pcudaCores = cudaCores;
    }
}



const object = new Products('amd radeon 8g oc', '8gb', '1704mhz', '2 years', 2048);
const object2 = new Products('asus 1650ti super', '4gb', '14 gbps', '3 years', 1408);
const object3 = new Products('asus 1050ti super', '4gb', '1417mhz', '3 years', 1224);

console.log(object, object2, object3);

const objectp = { name: 'korim', age: 22, address: '22/elephant Road', phone: '0178945253', model: 'straightforward' };

const { name, phone, model } = objectp;
console.log(name, phone, model);




