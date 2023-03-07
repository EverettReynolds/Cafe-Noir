


function submitMe(){
var pArray = new Array(5);
pArray[0] = document.getElementById("p1").value;
pArray[1] = document.getElementById("p2").value;
pArray[2] = document.getElementById("p3").value;
pArray[3] = document.getElementById("p4").value;
pArray[4] = document.getElementById("p5").value;

var rArray = new Array (5);
var count = 0;

for ( var i = 0; i < 5; i ++ ){
	var num = (Math.round(Math.random() * 10)% 5) + 1 ;
	rArray[i]= num;
	if(rArray[i] == pArray[i]){
		count++;
	}
}

document.getElementById("result").innerHTML = count;
 document.getElementById("num").innerHTML=rArray.toString();
	
}





}