const fs = require('fs');
let masVotadas = {
db:'./data/movies.json',
titulo: 'Mas Votadas',
leerJSON: function(){
    let moviesJSON = fs.readFileSync(this.db,'utf-8');
    let movies = JSON.parse(moviesJSON);
    return movies

},
cantidad: function(){
return this.leerJSON().total_movies
  

}, 
listarPelis:function(){
    let movies = this.leerJSON().movies; 
    let pelis = movies.filter(function(movies){
        return movies.vote_average >=7
    });
    return pelis
},    
promedio:function(){
    let votadas = this.listarPelis();
    let promedio = 0;
    votadas.forEach(function(votada){
        promedio = promedio + votada.vote_average
    });
    return promedio
    }
        
     
}

 

module.exports = masVotadas;