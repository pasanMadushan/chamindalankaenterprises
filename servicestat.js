function move(){
	var item= document.getElementById('bar');
	var width=1;
	var id= setInterval(frame,15);
	function frame(){
		if (width>100){
			clearInterval(id);
		}
		else{
			width+=1;
			item.style.width=width+'%';
			
		}
	}
}

function reset(){
	var item2=document.getElementById("bar");
	item2.style.width='1%' ;
}


// Material Select Initialization
$(document).ready(function() {
$('.mdb-select').materialSelect();
});


















