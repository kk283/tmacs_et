
var mytap = window.ontouchstart===null?"touchstart":"click";
document.getElementById("show_hidden").style.display ="none";
document.getElementById("BIshow").style.display ="none";
document.getElementById("Mshow").style.display ="none";
document.getElementById("routes").style.display = "none";

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
		$('#linedraw input[type=button]').on("click", function() { 
			draw(this.id);
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

	$(function(){
		$('#auto input[type=button]').on('click',function(){
			auto(this.id);
		});
	});

	$(function () {
        $('#layer').multipleSelect({
            width: 250,
            placeholder:"編集する道路情報を選択",
			selectAllText:"すべて選ぶ",
            multipleWidth: 200
        });
	});


}
		
		
		
		

