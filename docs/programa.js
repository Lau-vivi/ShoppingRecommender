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

async function CargarPuntos() {

    var miArchivo = await fetch("microondas.geojson");
    // Convertir el archivo a JSON
    
    var datos = await miArchivo.json();

    // Obtener el arreglo de la llave features
    let listaFeatures = datos["features"];

    for (let i = 0; i < 10; i++) {
        console.log(datos["features"][i]);

        // Obtener la geometría del elemento
        let misCoordenadas = listaFeatures[i]["geometry"]["coordinates"];

        var miMarcador = L.marker(misCoordenadas);
        miMarcador.addTo(map);
    }

}

CargarPuntos();
