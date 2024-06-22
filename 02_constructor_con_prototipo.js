class MyClass{

    constructor(parameter_1, parameter_2){
        this.property_1 = parameter_1
        this.property_2 = parameter_2
    }

    method = () => {
        console.log(`One: ${this.property_1} Two: ${this.property_2}`)
    }
}

const instance = new MyClass(1,2)
console.log(instance)
instance.method()