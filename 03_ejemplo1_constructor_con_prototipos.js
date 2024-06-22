Object.prototype.log = function(){
    console.log(this);
}

//Instancación de objeto
const my_object = {a:1}

my_object.log()