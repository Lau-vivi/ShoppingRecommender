var map = L.map('map').setView([4.627992952025564, -74.06591250553709], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.627992952025564, -74.06591250553709]);
marker.addTo(map);

// Abrir un archivo GeoJSON
// Javascript se ejecuta de tal manera que si una linea
// de código se demora. se pasa a la siguiente sin esperar.
// Esto puede generar problemas cuando se requiere secuencialidad 

async function cargarPuntos(){
    
    var miArchivo= await fetch("microondas.geojson");
    //convertir el contenido a json

    var datos= await miArchivo.json();

    //Obtener el arreglo de la llave features que es un conjunto
    //de objetos tipo feature
    //let listaFeatures= datos["feature"];

    //Obtener la geometria del primer elemento
    

    for (let i = 0; i < 10; i++) {

        let misCoordenadas= listaFeatures[i]["geometry"]["coordinates"];
        var miMarcador= L.marker(miscoordenadas);
        miMarcador.addTo(map);
    
   
}

}
cargarPuntos();
//console.log(datos["features"][i]);