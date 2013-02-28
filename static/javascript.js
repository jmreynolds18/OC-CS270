document.write('Hello again, from a linked script');

alert('Hello from outside the page');

var thursday = confirm('today is thursday');
document.write('<p>Is today thursday?') + thursday + '</p>');
var whoami = prompt('What is your name?',' ');
if (whoami == null || whoami == ''){
	document.write('<p>Hello, whoever you are!</p>');

} else {
	document.write('<p>Hello'+whoami + '.</p>');
}

var classname = 'CS 270';
do{
	classname = prompt('What class is this?', classname);

} while(classname ==null || classname ==='');
document.write('<p>Welcome to' + classname+ '.</p>');


//this is the for loop stuff
findClassname();

function show_for() {
	for (i = 0; i < 10; i ++) {
		document.write(i + '<br>');
	}
}

function make_car(make, model){
	var my_car = new Object():

	my_car.make = make;
	my_car.model = model;

	return my_car;
}

function display_car(car){
	document.write('Make: ' + car.make + 'Model: ' car.model + '<br>');
}

var jet = make_car('Volkswagen', 'Jetta');
var lumi = {make: 'Chevy' model: 'Lumina'} 
//curly braces will make a object...so both var jet and lumi do the same

display_car(jet)
display_car(lumi)