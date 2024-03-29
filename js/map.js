function initMap() {
    let сabin = {lat: 43.74713715504195, lng: -79.36926801205719,}

    let loft = {lat: 42.84316337289665,  lng: -80.32868034393724,}

    let mark = {lat: 43.87770517831332,   lng: -79.3245549803741,}

    let mic = {lat: 43.618623365006165,    lng: -79.67843631581329,}



    let map = new google.maps.Map (
      document.getElementById('map') , {zoom:7 , center:сabin}
    );


    let marker = new google.maps.Marker({position:сabin, map: map})

    let marker1 = new google.maps.Marker({position:loft, map: map})

    let marker2 = new google.maps.Marker({position:mark, map: map})

    let marker3 = new google.maps.Marker({position:mic, map: map})

  }


