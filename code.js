console.log('moi fichier code.js jure etre bien chargé');

var map = L.map('map').setView([67.102,-39.111], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


