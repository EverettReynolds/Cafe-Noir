// Everett Reynolds

function quadraticFormula()
{
	var a = prompt( 'Enter the value for A:');
    var b = prompt( 'Enter the value for B:');
	var c = prompt( 'Enter the value for C:');
	var a2 = 2*a;
	var b2 = b*b;
	var ac = 4*a*c;
	var difference = b2 - ac ;
	if ( difference < 0)
	{
		window.alert(" The root is complex. No real roots exist. ");
	}
	else
	{
		var sqroot = Math.sqrt(difference);
		var plusb = -b + sqroot;
		var posFinal = plusb / a2;
		var minusb = -b - sqroot;
		var negFinal = minusb / a2
		window.alert(" The Roots of your Quadratic Formula Are " + posFinal + " and " + negFinal);
	}	
		
		
		
}
function birthYear()
{
	var userName = prompt ( ' Enter Your Name! ');
	var birthYear = prompt ( ' Enter Your Birth Year! ');
	var date = new Date();
	var currentYear = date.getFullYear();
	var currentMonth = String(date.getMonth()+1);
	var currentDay = String(date.getDate());
	var day = currentMonth + " / " + currentDay + " / " + currentYear;
	var now = 2019;
	var age = currentYear - birthYear;
	document.write("Hello " + userName + ", you are " + age + " as of today, " + day);
}
quadraticFormula();
birthYear();