// create map center on france

const map = L.map('map').setView([47.29, 2.77], 5);

// add orthophotos layer

L.tileLayer(
    "https://data.geopf.fr/wmts?" +
    "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0" +
    "&STYLE=normal" +
    "&TILEMATRIXSET=PM" +
    "&FORMAT=image/jpeg" +
    "&LAYER=ORTHOIMAGERY.ORTHOPHOTOS" +
    "&TILEMATRIX={z}" +
    "&TILEROW={y}" +
    "&TILECOL={x}",
    {
        minZoom: 0,
        maxZoom: 18,
        attribution: "IGN-F/Geoportail",
        tileSize: 256 // les tuiles du Géooportail font 256x256px
    }
).addTo(map);

// load geojson data
// L.geoJSON(GEOPHOTO_DATA).addTo(map);
let photos = [];
L.geoJSON(GEOPHOTO_DATA, {
    onEachFeature: (feature) => {
        const photo = feature.properties.photo;
        if (photo) {
            photos.push(photo);
        }
    }
});

console.log(photos);

let tirage = Math.random() * (photos.length - 1)
tirage = Math.round(tirage);

let selectedPhoto = photos[tirage];
console.log(selectedPhoto);

const image = document.createElement('img');
image.src = selectedPhoto;
image.classList.add('photo-choisie');
document.body.appendChild(image);