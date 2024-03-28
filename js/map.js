function initMap() {
    let uluru = {lat: 43.74713715504195, lng: -79.36926801205719,}
    let map = new google.maps.Map (
      document.getElementById('map') , {zoom:8 , center:uluru}
    );
    let marker = new google.maps.Marker({position:uluru, map: map})
  }


