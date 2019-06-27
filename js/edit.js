function lineonoff(onoff){
    var layerONOFF = document.getElementById('layer');
    if(onoff == 'ON'){
        map.setLayoutProperty(layer.value, 'visibility', 'visible');
    }else if(onoff == 'OFF'){
        map.setLayoutProperty(layer.value, 'visibility', 'none');
       
    }
}
 
function colorChange(color){
    var $select = $('select');
    var layer = [];
    layer = $select.multipleSelect('getSelects', 'id');
    var length = layer.length;
    for(var l=0; l<length; l++){
        if(layer[l] == 'service' || layer[l] == 'secondary' || layer[l] == 'tertiary' || layer[l] == 'street' || layer[l] =='path' || layer[l] == 'pedestrian'　|| layer[l] == 'primary' || layer[l] == 'track'　|| layer[l] == 'trunk' || layer[l] == 'rail'){
            if(color == 'OFF'){
                map.setLayoutProperty(layer[l], 'visibility', 'none');
                console.log(layer[l]);
            } else if(color == 'ON'){
                map.setLayoutProperty(layer[l], 'visibility', 'visible');
            }else if(color == 'white'){
                map.setPaintProperty(layer[l], 'line-color', '#ffffff');
            } else if(color == 'gray'){
                map.setPaintProperty(layer[l], 'line-color', '#424242');
            } else if(color == 'black'){
                map.setPaintProperty(layer[l], 'line-color', '#000000');
            }

        } else if(layer[l] == 'building' || layer[l] == 'landuse'){
            if(color == 'white'){
                map.setPaintProperty(layer[l], 'fill-color', '#ffffff');
            } else if(color == 'gray'){
                map.setPaintProperty(layer[l], 'fill-color', '#424242');
            } else if(color == 'black'){
                map.setPaintProperty(layer[l], 'fill-color', '#000000');
            }else if(color == 'OFF'){
                map.setLayoutProperty(layer[l], 'visibility', 'none');
            } else if(color == 'ON'){
                map.setLayoutProperty(layer[l], 'visibility', 'visible');
            }
        }
    }
}