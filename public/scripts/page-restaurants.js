//create map
const map = L.map("mapid").setView([-23.5014352, -47.4528417], 14);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/018-food-package.svg",
  shadowUrl: "/images/map-marker.svg",
  iconSize: [48, 56],
  shadowSize: [52, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {
  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="restaurant?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
  );

  //create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const restaurantsSpan = document.querySelectorAll('.restaurants span');
restaurantsSpan.forEach(span => {
    const restaurant ={
            id: span.dataset.id,
            name: span.dataset.name,
            lat: span.dataset.lat,
            lng: span.dataset.lng
    }

    addMarker(restaurant);
});
