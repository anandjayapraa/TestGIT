var item = {
    productName: 'Mango',
    fetchProduct: () => console.log(this.productName),
    fetchProductRegular: function () {
        console.log(this.productName);
    }
};
item.fetchProduct();
item.fetchProductRegular();
class emp {
    /**
     *
     */
    constructor() {
        this.getDetails = () => console.log(this.firstName + ' ' + this.lastName);
        this.firstName = 'anand';
        this.lastName = 'jayaprakash';
    }
    getDetailsReg(id) {
        console.log(id);
    }
    TestMap() {
        let employee1 = { name: 'jake' };
        let employee2 = { name: 'janet' };
        let employee3 = { name: 'jass' };
        let employees = new Map();
        employees.set(employee1, 'ABC');
        employees.set(employee2, '123');
        employees.set(employee3, 'ert');
        console.log(employees.size);
    }
}
let e = new emp();
e.TestMap();
//# sourceMappingURL=greeter.js.map