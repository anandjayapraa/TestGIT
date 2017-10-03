var item = {
    productName: 'Mango',
    fetchProduct: () => console.log(this.productName),
    fetchProductRegular: function () {
        console.log(this.productName);
    }
}

item.fetchProduct();
item.fetchProductRegular();

class emp {
    lastName: string;
    firstName: string;

    /**
     *
     */
    constructor() {
        this.firstName = 'anand';
        this.lastName = 'jayaprakash';

    }
    getDetails = () => console.log(this.firstName + ' ' + this.lastName);
    getDetailsReg(id: string): void {
        console.log(id);
    }

    TestMap(): void {
        let employee1 = { name: 'jake' };
        let employee2 = { name: 'janet' };
        let employee3 = { name: 'jass' };

        let employees = new Map();
        employees.set(employee1, 'ABC');
        employees.set(employee2, '123');
        employees.set(employee3,'ert');
        console.log(employees.size);

    }
}


let e: emp = new emp();
e.TestMap();



