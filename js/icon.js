var i = 1;
var ink_i = 2;
var p = 1;
var dd = 1; 
var d = 0;
var el = new Array(i);
var popup = new Array(p);
var dr = new Array(d);
var aa = 0;
var editType;

function BIword(){
	editType = document.getElementById("edit").value;
	if(editType == 'brail' || editType == 'ink'){
		const BI_show = document.getElementById("BIshow");
		BIshow.style.display ="block";
		Mshow.style.display = "none"
	}else if(editType=='marker'){
		BIshow.style.display ="none";
		Mshow.style.display = "block"
	}
}
 
function onMapClick(e) {
      //地図のclickイベント呼び出される
	  //クリック地点の座標にマーカーを追加、マーカーのclickイベントでonMarkerClick関数を呼び出し
	editType = document.getElementById("edit").value;
	console.log(editType); 
      	
    if(editType == 'marker'){
		i = i + 1;
		lnglat = e.lngLat;
		var checked = document.getElementById("Mchecked");
		var Mclist = checked.markerselect;
		var ma = Mclist.value;
		if(ma == "icon1"){
			el[i] = document.createElement('div');
			el[i].className = 'marker1';
			new mapboxgl.Marker(el[i], {draggable: true})
				.setLngLat(lnglat)
				.addTo(map);
				var MapM = map.getStyle().layers;
			console.log(MapM);
		} else{
			el[i] = document.createElement('div');
			el[i].className = 'marker2';
			new mapboxgl.Marker(el[i], {draggable: true})
				.setLngLat(lnglat)
				.addTo(map);
		}} else if(editType == 'brail'){
		const n = document.getElementById('nameG').value;
		const Re_n = tactileGraphic().convertText(n);
		p = p + 2;
		lnglat = e.lngLat;

		popup[p] = new mapboxgl.Popup({closeOnClick: false, closeButton: false, className: 'popupBrail'})
			.setLngLat(lnglat)
			.setHTML(Re_n)
			.addTo(map);
		

	} else if(editType == 'ink'){
		const ink = document.getElementById('nameI').value;
		ink_i = ink_i + 2;
		lnglat = e.lngLat;
		popup[ink_i] = new mapboxgl.Popup({closeOnClick: false, closeButton: false, className: 'popupInk'})
	    	.setLngLat(lnglat)
			.setHTML(ink)
			.addTo(map);

	} else if(editType == 'dr'){
		dd = dd + 1;
		lnglat = e.lngLat;
		dr[dd] = document.createElement('div');
		console.log(aa);
		if(aa == 0){
			dr[dd].className = 'direction0';
			new mapboxgl.Marker(dr[dd], {draggable: true})
			    .setLngLat(lnglat)
				.addTo(map);
			} else if (aa == -15 || aa == 355){
				dr[dd].className = 'direction15';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -30 || aa == 330){
				dr[dd].className = 'direction30';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -45 || aa == 315){
				dr[dd].className = 'direction45';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -60 || aa == 300){
				dr[dd].className = 'direction60';
				new mapboxgl.Marker(dr[dd], {draggable: true})
				    .setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -75 || aa == 285){
				dr[dd].className = 'direction75';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -90 || aa ==270){
				dr[dd].className = 'direction90';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -105|| aa == 255){
				dr[dd].className = 'direction105';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -120|| aa == 240){
				dr[dd].className = 'direction120';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -135|| aa == 225){
				dr[dd].className = 'direction135';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -150|| aa == 210){
				dr[dd].className = 'direction150';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -165 || aa == 195){
				dr[dd].className = 'direction165';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -180 || aa == 180){
				dr[dd].className = 'direction180';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -195 || aa == 165){
				dr[dd].className = 'direction195';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -210 || aa == 150){
				dr[dd].className = 'direction210';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -225 || aa == 135){
				dr[dd].className = 'direction225';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -240 || aa == 120){
				dr[dd].className = 'direction240';
				new mapboxgl.Marker(dr[dd], {draggable: true})					
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -255 || aa == 105){
				dr[dd].className = 'direction255';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -270 || aa == 90){
				dr[dd].className = 'direction270';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -285 || aa == 75){
				dr[dd].className = 'direction285';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -300 || aa == 60){
				dr[dd].className = 'direction300';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -315 || aa == 45){
				dr[dd].className = 'direction315';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -330 || aa == 30){
				dr[dd].className = 'direction330';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}else if(aa == -345 || aa == 15){
				dr[dd].className = 'direction345';
				new mapboxgl.Marker(dr[dd], {draggable: true})
					.setLngLat(lnglat)
					.addTo(map);
			}
		}
		
    }
    
    
    
function remove() {
	editType = document.getElementById("edit").value;
	console.log(editType);

   	if(editType == 'marker'){
   		el[i].remove();
   		i = i - 1;
   	} else if(editType == 'brail'){
   		popup[p].remove();
		p = p - 2;
   	} else if(editType == 'ink'){
		popup[ink_i].remove();
		ink_i = ink_i - 2;
	} else if(editType == 'dr'){
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
