mapboxgl.accessToken = 'pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/kk765/cjwixstr31os91cqo9n9xaave',
	center: [138.943020, 37.866620],
	zoom: 16.0,
	doubleClickZoom: false,
    preserveDrawingBuffer: true
});


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
        if(aa == 360 || aa == -360){
            aa = 0;
        }
    } else if (d =="left"){
        aa = aa + 15;
        map.rotateTo(aa);
        if(aa == 360 || aa == -360){
            aa = 0;
        }
    } else if (d == "reset"){
        aa = 0;
        map.rotateTo(aa);
        if(aa == 360 || aa == -360){
            aa = 0;
        }
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
    // 2 following lines works but without dom elements
    //var img = map.getCanvas().toDataURL('image/png');
    //this.href = img;
  
    html2canvas($('#map')[0], {
        useCORS: true,
        allowTaint: true
      })
      .then(function(canvas) {
        var img = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = img;
        link.download = "map.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  
  })

