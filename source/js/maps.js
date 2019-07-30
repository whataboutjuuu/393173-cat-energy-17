var map;

function initMap() {
  var wW = document.documentElement.clientWidth;
  var LAT = 59.938697;
  var LNG = 30.323031;
  var coordLatCenter = 59.938693;
  var coordLngCenter = 30.323010;
  var scaledSizeW = 62;
  var scaledSizeH = 53;
  var zoom = 18;

  var coordsCenter = { lat: coordLatCenter, lng: coordLngCenter };

  if (wW >= 768) {
    scaledSizeW = 124;
    scaledSizeH = 106;
  }

  if (wW >= 1300) {
    coordsCenter = { lat: 59.938987, lng: 30.3193361 };
    zoom = 17;
  }

  map = new google.maps.Map(document.querySelector(".google-map"), {
    center: coordsCenter,
    zoom: zoom
  });

  var marker = new google.maps.Marker({
    position: { lat: LAT, lng: LNG },
    icon: {
      url: 'img/map-pin.png',
      scaledSize: new google.maps.Size(scaledSizeW, scaledSizeH)
    },
    map: map
  });
}
