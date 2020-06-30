let index = require('./src/index');
let router = function(url,res){
switch (url) {
    case '/':
        index.homePage(res)
        
        break;
    case'/enCartelera':
    index.enCartelera(res)
    break
    case '/masVotadas':
        index.masVotadas(res)
        break;
    case'/sucursales' :
    index.Sucursales(res)
    break;
    case '/contacto' :
        index.contacto(res)
       break;
    case '/preguntas-frecuentes':
        index.preguntasFrecuentes(res)
     break;

    default: res.end('Pagina no encontrada')
    
}
}
module.exports = router;