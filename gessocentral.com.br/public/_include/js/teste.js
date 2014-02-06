
    var map;
    var centerPosition = new google.maps.LatLng(-23.752668, -46.603703);
    var options = {
        zoom: 15,
        center: centerPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({     
    });    
    var image = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/marker.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 59)
    };
    var shadow = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/shadow.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(-2, 36)
    };
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
        icon: image,
        shadow: shadow
    });
