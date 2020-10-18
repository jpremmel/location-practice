import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';

jQuery(() => {
  const sharingStatus = document.getElementById("sharing-status");
  const geoInfo = document.getElementById("geolocation-info");
  const startBtn = document.getElementById("start-btn");
  const stopBtn = document.getElementById("stop-btn");
  stopBtn.style.display = "none";

  // Location data object
  const data = {lat: null, lng: null};

  let locationInterval;
  startBtn.onclick = () => {
    locationInterval = setInterval(() => {
      getLocation();
      sharingStatus.innerHTML = "Sharing location!";
    }, 5000);

    startBtn.style.display = "none";
    stopBtn.style.display = "block";
  };


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      geoInfo.innerHTML = "Geolocation is not supported by this browser.";
    }
  };

  const showPosition = (position) => {
    geoInfo.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    data.lat = position.coords.latitude;
    data.lng = position.coords.longitude;
    console.log(data);
  };

  stopBtn.onclick = () => {
      clearInterval(locationInterval);
      sharingStatus.innerHTML = "Stopped sharing location.";

      stopBtn.style.display = "none";
      startBtn.style.display = "block";
  };
  
});