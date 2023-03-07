function sayHello() {
	var surname = prompt('Enter your surname: ');
	alert("hello " + surname );
	
}
function mySquare(){
	var num = prompt('Enter a Number: ');
	alert(" The square is " + num*num );
	return num*num;
}
//sayHello();
//mySquare();
function quadraticFormula(){
	var a = prompt( ' Enter A: ');
    var b = prompt( ' Enter B: ');
	var c = prompt( ' Enter C: ');
	alert("This formula produces the result of " + (-b +(sqrt((b*b)-(4*a*c))))/2*a);
	
}
//quadraticFormula();


function numberTest() {
	var num1 = prompt('Enter a Number: ');
	var num2 = 0;
	if ( num1 == num2 ) {
		window.alert("True");
	}
	else {
		window.alert("False");
	}
	
}
//numberTest();
	
	function testGrade()
	{
		var grade = prompt( " Enter Your Score: " );
		var num1 = 60;
		if ( grade >= 90 && num1 >= 70)
		{
			window.alert("You made an A " );
	}
	else if (  grade >= 80 && num1 >= 60 )
	{
	window.alert("You made an B " );
	}
	else if ( grade >= 70 && num1 >= 50 )
	{
		window.alert("You made an C " );
	}
	else if ( grade >= 60 && num1 >= 40 )
	{
		window.alert("You made an D " );
	}
	else
	{
		window.alert(" Sorry, You failed your assignment. " );
	}

	}
	//testGrade();
	function forLoop()
	{
		document.write("Get Ready for Some Repeated Text.<br>");
		for(i=1; i <= 10; i++ ){
			document.write(i + ". I am part of the loop!<br>");
		}
		document.write("Now, we are back to plain text.")
	}
	//forLoop();
	function studentArray()
	{
	var students = ["Thomas" , "Roger" , "Amber" , "Jennifer" ];
	document.write("<p>My Students:</p>");
	for(i=0; i<=3; i++){
	document.write(students[i] + ' ');
	}
	numberTest();
	}
	studentArray();
	
	
	
	
	
	
	

	