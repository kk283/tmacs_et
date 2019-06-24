function myplace_icon() {
    navigator.geolocation.getCurrentPosition(successCallback_icon, errorCallback);
}

function successCallback_icon(position) {

    i = i + 1;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    map.setZoom(16.5);
    map.setCenter([lng, lat]);

    var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            }
          }]
    
    }
    //geojson.features.forEach(function(marker) {
      //  el[i] = document.createElement('div');
        //el[i].className = 'marker';
        //new mapboxgl.Marker(el[i], {draggable: true})
        //.setLngLat(marker.geometry.coordinates)
        //.addTo(map);
    //}); 
}

function errorCallback(error) {
    alert("位置情報取得に失敗しました。");
}

function search_icon() {
    let placename = document.getElementById('keyword').value;
    var req = new XMLHttpRequest();          // XMLHttpRequest オブジェクトを生成する
    req.onreadystatechange = function() {          // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
    if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
        let json = JSON.parse(req.responseText);
        map.setCenter([130, 30]);
        map.setZoom(16.5);
        map.setCenter(
                [ 
                    json.features[0].center[0],
                    json.features[0].center[1]
                ]
        );
    
        var geojson = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [json.features[0].center[0],json.features[0].center[1]]
                }
              }]
    
        }
    
//       geojson.features.forEach(function(marker) {
//           i = i + 1;
//           el[i] = document.createElement('div');
//           el[i].className = 'marker';
//           new mapboxgl.Marker(el[i], {
//               offset: [
//                    -26 / 2,
//                    -33 / 2
//                ],
//                draggable: true
//             })
//           .setLngLat(marker.geometry.coordinates)
//           .addTo(map);
//           });
    
            }
        };
    req.open("GET", "https://api.mapbox.com/geocoding/v5/mapbox.places/"+placename+".json?access_token=pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
    req.send(null);                        // 実際にサーバーへリクエストを送信
}