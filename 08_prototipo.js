const car = {
    brand: 'ford',

    speed_up: function () {
        console.log(`${this.brand} acelerando`)
    }
}

const mazda = Object.create(car)

mazda.speed_up()
//vacio
console.log(mazda)
mazda.brand = 'mazda'
mazda.speed_up()