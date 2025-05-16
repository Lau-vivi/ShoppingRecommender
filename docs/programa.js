var map = L.map('map').setView([4.627992952025564, -74.06591250553709], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.627992952025564, -74.06591250553709]);
marker.addTo(map);

// Abrir un archivo GeoJSON
async function CargarPuntos() {

    var miArchivo = await fetch("microondas.geojson");
    // Convertir el archivo a JSON
    var datos = await miArchivo.json();

    // Obtener el arreglo de la llave features
    let listaFeatures = datos["features"];

    // Recorrer los elementos del archivo GeoJSON
    for (let i = 0; i < listaFeatures.length; i++) {
        console.log(datos["features"][i]);

        // Obtener la geometría del elemento
        let misCoordenadas = listaFeatures[i]["geometry"]["coordinates"];

        // Obtener las propiedades del elemento
        let propiedades = listaFeatures[i]["properties"];

        // Crear el marcador
        var miMarcador = L.marker(misCoordenadas);
         // Crear el contenido del popup con las propiedades que mencionaste
        const contenidoPopup = `
            <strong>Modelo:</strong> ${propiedades.Modelo}<br>
            <strong>Capacidad:</strong> ${propiedades.Capacidad} L<br>
            <strong>Precio:</strong> $${propiedades.Precio}<br>
            <strong>Precio con Descuento:</strong> $${propiedades.PrecioDescuento}<br>
            <strong>Potencia:</strong> ${propiedades.Potencia} W<br>
            <strong>Voltaje:</strong> ${propiedades.Voltaje} V<br>
            <strong>Alto:</strong> ${propiedades.Alto} cm<br>
            <strong>Ancho:</strong> ${propiedades.Ancho} cm<br>
            <strong>Profundidad:</strong> ${propiedades.Profundidad} cm
        `;
        
        // Asignar el popup al marcador
        miMarcador.bindPopup(contenidoPopup);

        // Agregar el marcador al mapa
        miMarcador.addTo(map);
    }
};

CargarPuntos();