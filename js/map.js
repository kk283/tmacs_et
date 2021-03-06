mapboxgl.accessToken = 'pk.eyJ1Ijoia2s3NjUiLCJhIjoiY2pvNWNyM2VnMDhsNTNwbzE4b3lsMnRwdCJ9.M8N9yT5iYqbq-WJsGffOxQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/kk765/ck42f5e2t0mcw1cl5l55c5m0d',
	center: [139.061775, 37.912039],
	zoom: 16.0,
	doubleClickZoom: false,
    preserveDrawingBuffer: true
});

//var Draw = new MapboxDraw({
//    displayControlsDefault: false,
//    controls: {
//        point: true,
//        line_string: true,
//       trash: true
//    }
//});
//map.addControl(Draw)


function backmap(BM){
    if(BM == "backmaps"){
        map.setStyle("mapbox://styles/kk765/ck42f5e2t0mcw1cl5l55c5m0d");
        document.getElementsByTagName('div').item(str).className = 'mapB';
    } else if(BM == "EasyTactix"){
        map.setStyle("mapbox://styles/kk765/ck42f71a616nk1cplfwd3689y");
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

var zoom = 16;
var scale;

function zoomL(z){
    zoom = map.getZoom();

    if (z == "0.5"){
        zoom = zoom + 0.5;
        map.setZoom(zoom);
        target = document.getElementById("output");
        scale = map.getCenter();
        //https://blogs.bing.com/maps/2006/02/25/map-control-zoom-levels-gt-resolution/を参考//
        let scaleV = Math.round((96*39.37*156543.04*Math.cos(scale.lat*Math.PI/180))/Math.pow(2, zoom));
        target.innerHTML = scaleV;
    } else if(z == 0.1){
        zoom = zoom + 0.1;
        map.setZoom(zoom);
        target = document.getElementById("output");
        scale = map.getCenter();
        let scaleV = Math.round((96*39.37*156543.04*Math.cos(scale.lat*Math.PI/180))/Math.pow(2, zoom));
        target.innerHTML = scaleV;
    } else if(z == -0.5){
        zoom = zoom -0.5;
        map.setZoom(zoom);
        target = document.getElementById("output");
        scale = map.getCenter();
        let scaleV = Math.round((96*39.37*156543.04*Math.cos(scale.lat*Math.PI/180))/Math.pow(2, zoom));
        target.innerHTML = scaleV;
    } else if(z == -0.1){
        zoom = zoom - 0.1;
        map.setZoom(zoom);
        target = document.getElementById("output");
        scale = map.getCenter();
        let scaleV = Math.round((96*39.37*156543.04*Math.cos(scale.lat*Math.PI/180))/Math.pow(2, zoom));
        target.innerHTML = scaleV;
    } else if (z == 16){
        zoom = 16;
        map.setZoom(zoom);
        target = document.getElementById("output");
        scale = map.getCenter();
        let scaleV = Math.round((96*39.37*156543.04*Math.cos(scale.lat*Math.PI/180))/Math.pow(2, zoom));
        target.innerHTML = scaleV;
    }
    console.log(zoom);
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

function auto(A){
    if (A == "autoon"){
        map.setStyle("mapbox://styles/kk765/ck42f5e2t0mcw1cl5l55c5m0d");

    } else if (A == "autooff"){
        map.setStyle("mapbox://styles/kk765/ckeutqw2e0ky919jsnyix0x1x");
    }
}

$('#downloadLink').click(
    function() {
    
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
  
  });


    
