var i = 1;
var ink_i = 2;
var p = 1;
var dd = 1; 
var d = 0;
var el = new Array(i);
var popup = new Array(p);
var dr = new Array(d);
var a = 0;
 
function onMapClick(e) {
      //地図のclickイベント呼び出される
      //クリック地点の座標にマーカーを追加、マーカーのclickイベントでonMarkerClick関数を呼び出し
      	
    if(document.radio.marker.checked){
		i = i + 1;
		lnglat = e.lngLat;
				
		el[i] = document.createElement('div');
		el[i].className = 'marker';
		new mapboxgl.Marker(el[i], {draggable: true})
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
			new mapboxgl.Marker(dr[dd], {draggable: true})
			    .setLngLat(lnglat)
				.addTo(map);
			} else if (a == -15 || a == 355){
				dr[dd].className = 'direction15';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -30 || a == 330){
				dr[dd].className = 'direction30';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -45 || a == 315){
				dr[dd].className = 'direction45';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -60 || a == 300){
				dr[dd].className = 'direction60';
				new mapboxgl.Marker(dr[dd], {draggable: true})
				    .setLngLat(lnglat)
					.addTo(map);
			}else if(a == -75 || a == 285){
				dr[dd].className = 'direction75';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -90 || a ==270){
				dr[dd].className = 'direction90';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -105|| a == 255){
				dr[dd].className = 'direction105';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -120|| a == 240){
				dr[dd].className = 'direction120';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -135|| a == 225){
				dr[dd].className = 'direction135';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -150|| a == 210){
				dr[dd].className = 'direction150';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -165 || a == 195){
				dr[dd].className = 'direction165';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -180 || a == 180){
				dr[dd].className = 'direction180';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -195 || a == 165){
				dr[dd].className = 'direction195';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -210 || a == 150){
				dr[dd].className = 'direction210';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -225 || a == 135){
				dr[dd].className = 'direction225';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -240 || a == 120){
				dr[dd].className = 'direction240';
				new mapboxgl.Marker(dr[dd], {draggable: true})					
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -255 || a == 105){
				dr[dd].className = 'direction255';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -270 || a == 90){
				dr[dd].className = 'direction270';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -285 || a == 75){
				dr[dd].className = 'direction285';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -300 || a == 60){
				dr[dd].className = 'direction300';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -315 || a == 45){
				dr[dd].className = 'direction315';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -330 || a == 30){
				dr[dd].className = 'direction330';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(a == -345 || a == 15){
				dr[dd].className = 'direction345';
				new mapboxgl.Marker(dr[dd], {draggable: true})
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

 function onDragEnd() {
	var lngLat = marker.getLngLat();
	coordinates.style.display = 'block';
	coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

function onDragend(){
	var  lngLat = popup.getLngLat();
	coordinates.style.display = 'block';
	coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);
