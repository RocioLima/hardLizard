const fs = require('fs'); 
let sucursales ={
    titulo:'Nuestras Salas',
    db:'./data/theaters.json',
    leerJSON:function(){
     let theatersJSON = fs.readFileSync(this.db,'utf-8');   
     let theaters = JSON.parse(theatersJSON);
     return theaters
        
    },
    cantidad:function(){
        return this.leerJSON().total_theaters
        
    },
    listarCines:function(){
        let theaters = this.leerJSON();
        return theaters.theaters
    }


}
module.exports = sucursales;