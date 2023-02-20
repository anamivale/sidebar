function gtLocation() {
  console.log("listening")
  navigator.geolocation.getCurrentPosition(showPosition)
}
function showPosition(position) {
  document.querySelector(
    "#demo"
  ).innerHTML = `laitude ${position.coords.latitude} longitude: ${position.coords.longitude} `
  new google.maps.LatLng(-34, 151)
}
console.log(gtLocation())
