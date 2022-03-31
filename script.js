'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let lat = 41.3;
// let long = 69.3;
let lat;
let long;
let eventMap;
navigator.geolocation.getCurrentPosition(function (e) {
  // console.log(e.coords.latitude);
});

const map = L.map('map').setView([41.33, 69.3], 13);
// console.log(map);

map.on('click', function (e) {
  console.log(e);
  lat = e.latlng.lat;
  long = e.latlng.lng;
  console.log(lat);
  console.log(long);
  // eventMap = e;
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.marker([eventMap.latlng.lat, eventMap.latlng.lng], 18)
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();

L.Routing.control({
  waypoints: [L.latLng(41.34, 69.29), L.latLng(lat, long)],
  lineOptions: {
    styles: [{ color: 'purple', opacity: 0.8, weight: 5 }],
  },
})
  .on('routesfound', function (e) {
    console.log(e.routes[0].summary.totalDistance);
    // console.log(route.summary.totalDistance);
  })
  .addTo(map);
