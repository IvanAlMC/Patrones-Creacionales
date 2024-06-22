const my_module = {

    property: 'propiedad',
    config: {
        language: 'es',
        cache: true,
    }, 

    setConfig: conf => {
        my_module.config = conf
    },
    isCacheEnabled: () => {
        console.log(my_module.config.cache ? 'si' : 'no')
    }
}

console.log(my_module.property)
console.log(my_module.config)
my_module.config.language = 'en'
console.log(my_module.config)