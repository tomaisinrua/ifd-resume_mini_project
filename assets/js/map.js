function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: {
                lat: 52.6047901,
                lng: -9.709671200000003
            }
        });
        
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        var locations = [
            { lat: 52.60379656548228, lng: -9.707010981920803 },
            { lat: 52.559596677505006, lng: -9.938410518053615 },
            { lat: 52.51950447326828, lng: -10.147150752428615 }
        ];
        
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        
        var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}