class MyClass{

    constructor(parameter) {
        this.property = parameter
        this.method = () => {
            console.log(this.property)
        }
    }
}

const instance = new MyClass('parametro')
console.log(instance)