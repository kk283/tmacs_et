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