function multiply(){
	var val1 = document.getElementById("val1").value;
	var val2 = document.getElementById("val2").value;
	document.getElementById("result").innerHTML = val1*val2;
}
function division() {
	var val1 = document.getElementById("val1").value;
	var val2 = document.getElementById("val2").value;
	document.getElementById("result").innerHTML = val1/val2;
}

function addition() {
	var val1 = parseInt(document.getElementById("val1").value , 10);
	var val2 = parseInt(document.getElementById("val2").value, 10 );
	document.getElementById("result").innerHTML = val1+val2;
	
	
}
function subtract() {
	var val7 = document.getElementById("val1").value;
	var val8 = document.getElementById("val2").value;
	document.getElementById("result").innerHTML = val7-val8;
	
	
}