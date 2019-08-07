var start = null;
var end = null;

var api = 'https://api.mapbox.com/directions/v5/';


var profiles = {
    walking: {
         color: '#ffffff'
     }
 };

function go(e) {
    var Rchecked = document.getElementById("routeS");
    var Rlist = Rchecked.routeselect;
    var RS = Rlist.value;

    if(RS == 'driving'){
        profiles = {
           driving: {
                color: '#ffffff'
            }
        };
    }else if(RS == 'walking'){
        profiles = {
            walking: {
                color: '#ffffff'
            }
        };
    }else if(RS == 'traffic'){
        profiles = {
            'driving-traffic': {
                color: '#ffffff'
            }
        };
    }
    if (e.type === 'click' && !start) start = [e.lngLat.lng, e.lngLat.lat];

    if (!map.getSource('start')) {
        map.addSource('start', {
            type: 'geojson',
            data: {
                type: 'Point',
                coordinates: [start[0], start[1]]
            }
        });

        map.addLayer({
            'id': 'start',
            'type': 'circle',
            'source': 'start',
            'layout': {},
            'paint': {
                'circle-radius': 10,
                'circle-color': '#000000'
            }
        });
    }

    if (e.type === 'click') {
        end = [e.lngLat.lng, e.lngLat.lat];
        if (end.toString() === start.toString()) {
            end = null;
            return
        }
    }

    map.addSource('end', {
        type: 'geojson',
        data: {
            type: 'Point',
            coordinates: [end[0], end[1]]
        }
    });

    map.addLayer({
        'id': 'end',
        'type': 'circle',
        'source': 'end',
        'layout': {},
        'paint': {
            'circle-radius': 10,
            'circle-color': '#000000'
        }
    });

    if (start && end) requestProfiles(start, end, Object.keys(profiles));
}

function requestProfiles() {
    var queue = d3.queue();

    Object.keys(profiles).forEach(function(profile) {
        queue.defer(route, start, end, profile);
    });

    queue.awaitAll(function(error, results) {
        results.forEach(function(result) {
            if (result && result.profile) {
                profiles[result.profile].route = result.routes[0];
            }
        })
        draw();
    });

    function route(start, end, profile, cb) {
       var startEnd = encodeURIComponent(start + ';' + end);
        var request = new XMLHttpRequest();
        var url = api + 'mapbox/' + profile + '/' + startEnd + '.json?access_token=pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ&geometries=geojson&overview=full';
        console.log(url);
        request.abort();
        request.open('GET', url, true);
        request.send();

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                if (data.error) {
                    console.log('error');
                    return clear();
                }
                data.profile = profile;
                return cb(null, data);
            } else {
                // never actually error
                return cb(null, false);
            }
        };

        request.onerror = function() {
          return cb(null, false);
        };
    }
}

function draw() {
    // I know
    var bounds = new mapboxgl.LngLatBounds(start, end);

    Object.keys(profiles).forEach(function(profile, idx) {
        map.addSource(profile + ' route', {
            type: 'geojson',
            data: profiles[profile].route.geometry
        });
        var route = {
            'id': profile + ' route',
            'type': 'line',
            'source': profile + ' route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': profiles[profile].color,
                'line-width': 4,
                'line-opacity': 1
            }
        };
        if (profile == 'traffic') route.paint['line-dasharray'] = [0,2];
        if (profile == 'walking') route.paint['line-dasharray'] = [0,2];
        if (profile == 'driving') route.paint['line-dasharray'] = [0,2];
        map.addLayer(route, 'start');

        var result = profiles[profile].route.geometry.coordinates.reduce(function(previous, current) {
            return bounds.extend(current);
        });
    });

    map.fitBounds(bounds, {
        padding: 100
    });
}

function clearMap() {
    Object.keys(profiles).forEach(function(profile) {
        if (map.getLayer(profile + ' route')) map.removeLayer(profile + ' route');
        if (map.getSource(profile + ' route')) map.removeSource(profile + ' route');
    });

    ['start', 'end'].forEach(function(item) {
        if (map.getLayer(item)) map.removeLayer(item);
        if (map.getSource(item)) map.removeSource(item);
    });

    start = null;
    end = null;
}