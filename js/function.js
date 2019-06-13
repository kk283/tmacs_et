		
		mapboxgl.accessToken = 'pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ';
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/kk765/cjwixstr31os91cqo9n9xaave',
			center: [138.943020, 37.866620],
			zoom: 16.0,
			doubleClickZoom: false,
			dragRotate: false
		});
			
		var i = 1;
		var ink_i = 2;
		var p = 1;
		var dd = 1; 
		var d = 0;
		var el = new Array(i);
		var popup = new Array(p);
		var dr = new Array(d);
		var a = 0;
		var mytap = window.ontouchstart===null?"touchstart":"click";
		document.getElementById("show_hidden").style.display ="none";

		function init(){

			if(mytap == 'click'){
				map.on('click', onMapClick);
			}	else if(mytap == 'touchstart'){
				map.on('touchstart', onMapClick);
			}
			
			$(function(){
				$('#remove').on('click',function(){
					remove();
				});
			});
				

			$(function(){
				$('#myplace').on('click',function(){
					myplace();
				});
			});
				
			$(function(){
				$('#search').on('click',function(){
					search();
				});
			});

			$(function(){
				$('#search_icon').on('click',function(){
					search_icon();
				});
			});

			$(function(){
				$('#myplace_icon').on('click',function(){
					myplace_icon();
				});
			});

			$(function() {
    			$('#position input[type=button]').on("click", function() { 
        			position(this.value);
    			});
			});
			$(function() {
				$('#function clickBtn1()').on("click", function() { 
						position();
				});
			});
			

			$(function() {
    			$('#direction input[type=button]').on("click", function() { 
     	  			direction(this.id);
    			});
			});

			$(function() {
   				$('#zoomL input[type=button]').on("click", function() { 
        			zoomL(this.id);
    			});
			});

			$(function() {
    			$('#backmap input[type=button]').on("click", function() { 
        			backmap(this.id);
    			});
			});
				
			$(function(){
				$('#nameget').on('click',function(){
					nameget();
				});
			});
		
			$(function(){
				$('#onoff input[type=button]').on('click',function(){
					lineonoff(this.id);
				});
			});

			$(function(){
				$('#color input[type=button]').on('click',function(){
					colorChange(this.id);
				});
			});
		}
		
		function backmap(BM){
			if(BM == "backmaps"){
				map.setStyle("mapbox://styles/kk765/cjwixstr31os91cqo9n9xaave");
				document.getElementsByTagName('div').item(str).className = 'mapB';
			} else if(BM == "EasyTactix"){
				map.setStyle("mapbox://styles/kk765/cjwlo0tx648hx1cqonr4vnf2i");
				document.getElementsByTagName('div').item(str).className = 'mapE';
			} else if(BM == "defaultmap"){
				map.setStyle("mapbox://styles/kk765/cjwubcqw80eds1cjx6gkd6fdc")
			}

		}
		
		function nameget(){
			var n = document.getElementById('nameG').value;
    		target = document.getElementById("output");
   			target.innerHTML = n;
		}   
		
		var Draw = new MapboxDraw({
			displayControlsDefault: false,
			controls: {
				point: true,
				line_string: true,
				trash: true
			}
		});
		
		map.addControl(Draw, 'top-right');
		
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
			geojson.features.forEach(function(marker) {
				el[i] = document.createElement('div');
				el[i].className = 'marker';
				new mapboxgl.Marker(el[i])
				.setLngLat(marker.geometry.coordinates)
				.addTo(map);
			});
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
			
				geojson.features.forEach(function(marker) {
					i = i + 1;
					el[i] = document.createElement('div');
					el[i].className = 'marker';
					new mapboxgl.Marker(el[i], {

   						offset: [
     						-26 / 2,
      						-33 / 2
    					]
  					})
					.setLngLat(marker.geometry.coordinates)
					.addTo(map);
					});
			
					}
				};
			req.open("GET", "https://api.mapbox.com/geocoding/v5/mapbox.places/"+placename+".json?access_token=pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ", false); // HTTPメソッドとアクセスするサーバーの　URL　を指定
    		req.send(null);                        // 実際にサーバーへリクエストを送信
		}
		
		function direction(d){
			if (d == "right"){
				a = a -15;
				map.rotateTo(a);
			} else if (d =="left"){
				a = a + 15;
				map.rotateTo(a);
			} else if (d == "reset"){
				a = 0;
				map.rotateTo(a);
			}
	
				if(a == 360 || a == -360){
					a = 0;
				}
		}
		
		var zoom = 16.5;
		function zoomL(z){
			zoom = map.getZoom();
	
			if (z == "0.5"){
				zoom = zoom + 0.5;
				map.setZoom(zoom);
			} else if(z == -0.5){
				zoom = zoom -0.5;
				map.setZoom(zoom);
			} else if (z == 16.5){
				zoom = 16.5;
				map.setZoom(zoom);
			}
		}
    function onMapClick(e) {
      //地図のclickイベント呼び出される
      //クリック地点の座標にマーカーを追加、マーカーのclickイベントでonMarkerClick関数を呼び出し
      	
			if(document.radio.marker.checked){
				i = i + 1;
				lnglat = e.lngLat;
				
				el[i] = document.createElement('div');
				el[i].className = 'marker';
				new mapboxgl.Marker(el[i])
					.setLngLat(lnglat)
					.addTo(map);
				
			} else if(document.radio.brail.checked){
				const n = document.getElementById('nameG').value;
				const Re_n = tactileGraphic().convertText(n);
				p = p + 2;
				lnglat = e.lngLat;

				popup[p] = new mapboxgl.Popup({closeOnClick: false, closeButton: false, className: 'popupBrail'})
					.setLngLat(lnglat)
					.setHTML(Re_n)
					.addTo(map);

			} else if(document.radio.ink.checked){
				const ink = document.getElementById('nameI').value;
				ink_i = ink_i + 2;
				lnglat = e.lngLat;
				popup[ink_i] = new mapboxgl.Popup({closeOnClick: false, closeButton: false, className: 'popupInk'})
					.setLngLat(lnglat)
					.setHTML(ink)
					.addTo(map);


			} else if(document.radio.dr.checked){
				dd = dd + 1;
				lnglat = e.lngLat;
				dr[dd] = document.createElement('div');
				if(a == 0){
					dr[dd].className = 'direction0';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				} else if (a == -15 || a == 355){
					dr[dd].className = 'direction15';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -30 || a == 330){
					dr[dd].className = 'direction30';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -45 || a == 315){
					dr[dd].className = 'direction45';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -60 || a == 300){
					dr[dd].className = 'direction60';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -75 || a == 285){
					dr[dd].className = 'direction75';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -90 || a ==270){
					dr[dd].className = 'direction90';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -105|| a == 255){
					dr[dd].className = 'direction105';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -120|| a == 240){
					dr[dd].className = 'direction120';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -135|| a == 225){
					dr[dd].className = 'direction135';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -150|| a == 210){
					dr[dd].className = 'direction150';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -165 || a == 195){
					dr[dd].className = 'direction165';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -180 || a == 180){
					dr[dd].className = 'direction180';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -195 || a == 165){
					dr[dd].className = 'direction195';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -210 || a == 150){
					dr[dd].className = 'direction210';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -225 || a == 135){
					dr[dd].className = 'direction225';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -240 || a == 120){
					dr[dd].className = 'direction240';
					new mapboxgl.Marker(dr[dd])					
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -255 || a == 105){
					dr[dd].className = 'direction255';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -270 || a == 90){
					dr[dd].className = 'direction270';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -285 || a == 75){
					dr[dd].className = 'direction285';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -300 || a == 60){
					dr[dd].className = 'direction300';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -315 || a == 45){
					dr[dd].className = 'direction315';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -330 || a == 30){
					dr[dd].className = 'direction330';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}else if(a == -345 || a == 15){
					dr[dd].className = 'direction345';
					new mapboxgl.Marker(dr[dd])
						.setLngLat(lnglat)
						.addTo(map);
				}
			}
		
    }
    
    
    
    function remove() {
    	if(document.radio.marker.checked){
    		el[i].remove();
    		i = i - 1;
    	} else if(document.radio.brail.checked){
    		popup[p].remove();
				p = p - 2;
    	} else if(document.radio.ink.checked){
				popup[ink_i].remove();
				ink_i = ink_i - 2;
			} else if(document.radio.dr.checked){
    		dr[dd].remove();
    		dd = dd - 1;
    	}
    }
    
  var swatches = document.getElementById('swatches');
	var colors = [
		'#ffffff',
		'#1a1a1a',
		'#000000'
	];

	function lineonoff(onoff){
		var layerONOFF = document.getElementById('layer');
		if(onoff == 'ON'){
			map.setLayoutProperty(layer.value, 'visibility', 'visible');
		}else if(onoff == 'OFF'){
			map.setLayoutProperty(layer.value, 'visibility', 'none');
		}
	}
 	
	function colorChange(color){
		var layer = document.getElementById('layer');
		if(layer.value == 'service' || layer.value == 'secondary' || layer.value == 'tertiary' || layer.value == 'street' || layer.value =='path' || layer.value == 'pedestrian'　|| layer.value == 'primary' || layer.value == 'track'　|| layer.value == 'trunk' || layer.value == 'rail'){
			if(color == 'OFF'){
				map.setLayoutProperty(layer.value, 'visibility', 'none');
			} else if(color == 'ON'){
				map.setLayoutProperty(layer.value, 'visibility', 'visible');
			}else if(color == 'white'){
				map.setPaintProperty(layer.value, 'line-color', '#ffffff');
			} else if(color == 'gray'){
				map.setPaintProperty(layer.value, 'line-color', '#424242');
			} else if(color == 'black'){
				map.setPaintProperty(layer.value, 'line-color', '#000000');
			}

		} else if(layer.value == 'building' || layer.value == 'landuse'){
			if(color == 'white'){
				map.setPaintProperty(layer.value, 'fill-color', '#ffffff');
			} else if(color == 'gray'){
				map.setPaintProperty(layer.value, 'fill-color', '#424242');
			} else if(color == 'black'){
				map.setPaintProperty(layer.value, 'fill-color', '#000000');
			}else if(color == 'OFF'){
				map.setLayoutProperty(layer.value, 'visibility', 'none');
			} else if(color == 'ON'){
				map.setLayoutProperty(layer.value, 'visibility', 'visible');
			}
		}
	}

	function clickBtn1(){
		const show_hidden = document.getElementById("show_hidden");

		if(show_hidden.style.display=="block"){
			// noneで非表示
			show_hidden.style.display ="none";
		}else{
			// blockで表示
			show_hidden.style.display ="block";
		}
	}

