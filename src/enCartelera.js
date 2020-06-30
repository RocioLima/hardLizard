const fs = require('fs');
let enCarterlera = {
titulo:"En Cartelera",

db:'./data/movies.json',

leerJSON: function(){
    let moviesJSON = fs.readFileSync(this.db,'utf-8');
    let movies = JSON.parse(moviesJSON);
    return movies

},
cantidad: function(){
    return this.leerJSON().total_movies
},
listarPelis:function(){
    let movies = this.leerJSON();
    let peliculas = movies.movies
    return peliculas
} 

}
module.exports = enCarterlera;