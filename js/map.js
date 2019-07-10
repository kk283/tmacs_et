mapboxgl.accessToken = 'pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/kk765/cjwixstr31os91cqo9n9xaave',
	center: [138.943020, 37.866620],
	zoom: 16.0,
	doubleClickZoom: false,
    dragRotate: false,
    preserveDrawingBuffer: true,
});


map.addControl(Draw, 'top-right');

var Draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        point: true,
        line_string: true,
        trash: true
    }
});

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

function direction(d){
    if (d == "right"){
        aa = aa -15;
        map.rotateTo(aa);
    } else if (d =="left"){
        aa = aa + 15;
        map.rotateTo(aa);
    } else if (d == "reset"){
        aa = 0;
        map.rotateTo(aa);
    } else if(aa == 360 || aa == -360){
        aa = 0;
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


var swatches = document.getElementById('swatches');
var colors = [
'#ffffff',
'#1a1a1a',
'#000000'
];



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

$('#downloadLink').click(function() {

	var img = map.getCanvas().toDataURL('image/png');
	this.href = img;
	
	map.once('render', () => {
		var img = map.getCanvas().toDataURL('image/png'); 
		this.href = img;
	});
});

function getDisplayImage(){
html2canvas($("#map"), {
	onrendered: function(canvas) {
		theCanvas = canvas;
		document.body.appendChild(canvas);

		console.log(canvas.toDataURL());

		// Convert and download as image 
		Canvas2Image.saveAsPNG(canvas); 
		$("#img-out").append(canvas);
		
		console.log(canvas);
		// Clean up 
		document.body.removeChild(canvas);
	   $('body').text(canvas.toDataURL());
	   $('body').html('<img src="'+canvas.toDataURL()+'"/>');

	}
});




console.log(map.getCanvas());

var img = map.getCanvas().parent().toDataURL();

$('body').html('<img src="'+img+'"/>');
}


map.on('load', function () {

// アイコン画像設定
map.loadImage('js/direction0.png', function (error, res) {
map.addImage('sample', res);
});

// アイコン設定
map.addSource('symbol_sample', {
type: 'geojson',
data: {
"type": "Feature",
"geometry": {
	"type": "Point",
	"coordinates": [138.943020, 37.866620]
}
}
});

// スタイル設定
map.addLayer({
"id": "symbol_sample",
"type": "symbol",
"source": "symbol_sample",
"layout": {
"icon-image": "sample",
"icon-allow-overlap": true,
"icon-size": 1.00
},
"paint": {}
});
});


