if(!String.prototype.log){
    String.prototype.log = function(){
        return console.log(this)
    }
}

if(!String.prototype.trim){
    String.prototype.trim = function(){
        try{
            return this.replace(/^s+|\s+$/g,"")
        }catch(e){
            return this
        }
    }
}

const cadena = "  cadena  ".trim()
cadena.log()