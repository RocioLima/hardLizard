const homePage = require('./homePage');
const contacto = require('./contacto');
const enCartelera = require('./enCartelera');
const masVotadas= require('./masVotadas');
const preguntasFrecuentes= require('./preguntasFrecuentes');
const sucursales= require('./Sucursales');
const { write } = require('fs');
const { title } = require('process');
const enCarterlera = require('./enCartelera');
const { monitorEventLoopDelay } = require('perf_hooks');
let index ={
homePage:function(res){
    res.write(homePage.titulo)
    res.write('\n');
    res.write('Total de peliculas... '+ homePage.cantidad());

    let pelis= homePage.listarPelis();
    res.write('\n');
    res.write('Listado de Peliculas ')

for(peli of pelis){
    res.write(peli);
    res.write('\n')
}
res.write('\n')
res.write('Pié de página​: ​Recordá que podés visitar las secciones:')
res.write('\n')
res.write('\n')
res.write("i. En Cartelera")
res.write('\n')
res.write("ii. Mas Votadas")
res.write('\n')
res.write("iii. Sucursales")
res.write('\n')
res.write("iv. Contacto")
res.write('\n')
res.write("v. Preguntas Frecuentes")
res.write('\n')
    
res.end();
},
enCartelera:function(res){
    res.write(enCarterlera.titulo)
    res.write('\n');
    res.write('Total de peliculas... '+ enCartelera.cantidad());   
    res.write('\n')
    let peliculas= enCarterlera.listarPelis();
    res.write('\n');
    res.write('Listado de Peliculas: ')
    res.write('\n')
    res.write('\n')
    for(pelicula of peliculas){
    res.write('Titulo: '+ pelicula.title);
    res.write('\n');
    res.write('Reseña: '+ pelicula.overview);
    res.write('\n')
    res.write('\n')
    }
    res.end();

},
masVotadas:function(res){
res.write(masVotadas.titulo);
res.write('\n');
res.write('Total de Peliculas: ' + masVotadas.cantidad());
res.write('\n')
res.write('\n')
res.write('Rating promedio: ' +masVotadas.promedio()+'\n')
res.write('\n')
res.write('Listado de Peliculas: ')
let votada = masVotadas.listarPelis(); 
for(votadas of votada){
res.write('Titulo: ' + votadas.title);
res.write('\n')
res.write('Rating: ' + votadas.vote_average);
res.write('\n')
res.write('Reseña: '+ votadas.overview);
res.write('\n')
res.write('\n')
}
  res.end();

},

Sucursales:function(res){
    res.write(sucursales.titulo);
    res.write('\n')
    res.write('Total de Salas: ' + sucursales.cantidad());
    res.write('\n\n')
    let theaters = sucursales.listarCines();
theaters.forEach(function(theaters){
    res.write('Nombre: '+ theaters.name,)
    res.write('\n')
    res.write('Direccion: '+ theaters.address,)
    res.write('\n')
    res.write('Descripcion: '+theaters.description,)
    res.write('\n')
    res.write('\n')

});
res.end();

},
contacto:function(res){
    res.write(contacto.titulo);
    res.write('\n')
    res.write('\n')
    res.write(contacto.contenido);
    res.end();


},
preguntasFrecuentes:function(res){
res.write(preguntasFrecuentes.titulo)
res.write('\n')
res.write('Total de peliculas: '+ preguntasFrecuentes.cantidad());
res.write('\n')
res.write('\n')
res.write('Listado de Preguntas: ')
res.write('\n')
let faqs= preguntasFrecuentes.listarFaqs();
for(faq of faqs){
res.write('\n')   
res.write('\n')  
res.write('Pregunta: ' + faq.faq_title,);
res.write('\n')
res.write('Respuesta: '+ faq.faq_answer);
}
res.end();
},
}
module.exports = index;