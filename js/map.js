mapboxgl.accessToken = 'pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/kk765/cjwixstr31os91cqo9n9xaave',
	center: [138.943020, 37.866620],
	zoom: 16.0,
	doubleClickZoom: false,
	dragRotate: false
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

