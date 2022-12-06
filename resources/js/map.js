var map;
var InforObj = [];
var centerCords = {
    lat: 44.778259,
    lng: -95.417931
};
var markersOnMap = [{
        placeName: "Vancouver",
        LatLng: [{
            lat: 49.316666,
            lng: -123.066666
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    },
    {
        placeName: "Brampton",
        LatLng: [{
            lat: 43.683334,
            lng: -79.766670
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    },
    {
        placeName: "London",
        LatLng: [{
            lat: 39.896042,
            lng: -83.444595
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    },
    {
        placeName: "Toronto",
        LatLng: [{
            lat: 43.73672,
            lng: -79.618802
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    },
    {
        placeName: "Mississauga",
        LatLng: [{
            lat: 43.7021717,
            lng: -79.6615253
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    },
    {
        placeName: "Cambridge",
        LatLng: [{
            lat: 43.395588,
            lng: -80.32575
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    },
    {
        placeName: "Calgary",
        LatLng: [{
            lat: 51.049999,
            lng: -114.066666
        }],
        des: "7355 Torbram Rd, Mississauga, ON L4T  3W3, Canada"
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
            '</h1><p>' + markersOnMap[i].des + '</p></div>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 350
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });


    }
}

function closeOtherInfo() {
    if (InforObj.length > 0) {
        /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: centerCords,

    });
    addMarkerInfo();
}