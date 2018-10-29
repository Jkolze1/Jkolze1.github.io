// Jacqueline Kolze 05/03/2018 //

//window prompt enter name
username= window.prompt("Please enter your name. If you do not type one you will be automatically assigned anonymous.","Anonymous"); 
console.log("Please enter name/Window.prompt");  

// Question 1 
function question1() {
	if (document.getElementById("a1").checked){ 
		window.alert("Correct! Good Job!"); //window alert requirement
		console.log("Question 1, correct answer alert."); 
	} //If else requirement
		else {
			window.alert("Wrong! The correct answer was A. Bottom, above the ending body tag.");
			console.log("Question 1, wrong answer alert."); 
		}
}
document.getElementById("b1").addEventListener("click",question1,false);
console.log("Question 1"); 
console.log("Window Alert"); 
console.log("If Else Statement"); 

// Question 2
function question2() { //Addition (+)
	var num1 = Number(document.getElementById("n1").value);//Var requirement
	var num2= Number(document.getElementById("n2").value);//document.getElementById(something2).value requirement
	var result = num1 + num2; 
	window.alert(result);
	document.getElementById("a2").innerHTML = username + ",the answer is: " + result; //document.getElementById(something1).innerHTML requirement
	} 
	console.log("num1");
	console.log("num2");
	console.log("result");
	console.log("Question 2"); 
	console.log("Addition");
	console.log("Number result");  
	console.log("Var requirement");
	console.log("document.getElementById(something1).value");
	document.getElementById("b2").addEventListener("click",question2,false);
	
// Question 3
	var places = ["console.log", "jslint", "window.alert", "debugger", "firebug"]; //array requirement
		
//function to generate list from array
function processThings() {	
for (var i = 0; i < 5; i++) { // For requirement
	
//write each array element to its corresponding list item
var listItem = "item" + (i + 1);
document.getElementById(listItem).innerHTML = places[i]; //Array
				}
			}
console.log("Question 3"); 			
console.log("for requirement");
console.log("Array"); 
			
if (window.addEventListener) {
window.addEventListener("load", processThings, false);
} else if (window.attachEvent) {
window.attachEvent("onload", processThings);
			}
			
// Question 3 answer
function question3() {
	if (document.getElementById("a3").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 3, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B.Yes!");
			console.log("Question 3, wrong answer alert."); 
		}
}
document.getElementById("b3").addEventListener("click",question3,false);

// Question 4
function question4() {
	if (document.getElementById("a4").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 4, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was D. ;");
			console.log("Question 4, wrong answer alert."); 
		}
}
document.getElementById("b4").addEventListener("click",question4,false);
console.log("Question 4"); 

// Question 5
var text = ""; //subtraction (-)
var i = 0;
while (i < 1) { //while requirement
    i++;
}
document.getElementById("while").innerHTML = text;

// Question 5 answer 
function question5() {
	if (document.getElementById("a5").checked){ 
		window.alert("Correct! Good Job!"); 
		
		console.log("Question 5, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was A. 0. ");
			console.log("Question 5, wrong answer alert."); 
			
		}
}
document.getElementById("b5").addEventListener("click",question5,false);
console.log("Question 5"); 
console.log("Subtraction"); 

// Question 6
function question6() {
	if (document.getElementById("a6").checked){ 
		window.alert("Correct! Good Job!"); 
		
		console.log("Question 6, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was C. ");
			console.log("Question 6, wrong answer alert."); 
		}
}
document.getElementById("b6").addEventListener("click",question6,false);
console.log("Question 6"); 

// Question 7
document.getElementById("p2").style.color = "blue"; //document.getElementById("something3").style requirement 
console.log("document.getElementById.style"); 
function question7() {
	if (document.getElementById("a7").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 7, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. To set a breakpoint, you click the line number for the line where program execution should stop.");
			console.log("Question 7, wrong answer alert."); 
		}
}
document.getElementById("b7").addEventListener("click",question7,false);
console.log("Question 7"); 
console.log("Color change, blue"); 

// Question 8
function question8() {
    var x = document.querySelectorAll(".example");
    x[0].style.backgroundColor = "red"; //document.querySelectorAll(".something4") (to change a style for class="something4")
}
document.getElementById("b8").addEventListener("click",question8,false);
console.log("Question 8"); 
console.log("Color change, red.");

// Question 8 Answer
function answers(){
	if (document.getElementById("a8").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 8, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was A. Red");
			console.log("Question 8, wrong answer alert."); 
		}
}
document.getElementById("b40").addEventListener("click",answers,false);
console.log("Question 8 Answer button"); 

// Question 9
function question9() {
	var num1 = Number(document.getElementById("n20").value);//document.getElementById(something2). value requirement
	var num2= Number(document.getElementById("n21").value);
	var result = num1 - num2; //Subtraction
	window.alert(result);
	document.getElementById("a9").innerHTML = username + ",the answer is: " + result; 
	} 
	console.log("Question 9"); 
	console.log("Subtraction");  
	console.log("Number result");  
	document.getElementById("b9").addEventListener("click",question9,false);

// Question 10
function question10(){
	var num1 = Number(document.getElementById("n3").value);
	var num2= Number(document.getElementById("n4").value);
	var result = num1 * num2; //Multiplication (*) or times
	window.alert(result);
	document.getElementById("a10").innerHTML = username + ",the answer is: " + result; 
	} document.getElementById("b10").addEventListener("click",question10,false);
console.log("Question 10"); 
console.log("Multiplication"); 

// Question 11
function question11(){
	var num1 = Number(document.getElementById("n5").value);
	var num2= Number(document.getElementById("n6").value);
	var result = num1 / num2; //Division (/)
	window.alert(result);
	document.getElementById("a11").innerHTML = username + ",the answer is: " + result; 
}document.getElementById("b11").addEventListener("click",question11,false);
console.log("Question 11"); 
console.log("Division");

// Question 12 
function question12(){
	var num1 = Number(document.getElementById("n7").value);
	var num2= Number(document.getElementById("n8").value);
	var result = num1 % num2; //Modulus (%)
	window.alert(result);
	document.getElementById("a12").innerHTML = username + ",the answer is: " + result;	
}
document.getElementById("b12").addEventListener("click",question12,false);
console.log("Question 12"); 
console.log("Modulus");

//Question 13
function question13(){
	var num1 = Number(document.getElementById("n9").value);
	var num2= Number(document.getElementById("n10").value);
	var result = i++; //Increment (++)
	window.alert(result);
	document.getElementById("a13").innerHTML = username + ",the answer is: " + result;
}
document.getElementById("b13").addEventListener("click",question13,false);
console.log("Question 13"); 
console.log("Increment");

// Question 14
function question14(){
	var num1 = Number(document.getElementById("n11").value);
	var num2= Number(document.getElementById("n12").value);
	var result = i--; //Decrement (--)
	window.alert(result);
	document.getElementById("a14").innerHTML = username + ",the answer is: " + result;
}
document.getElementById("b14").addEventListener("click",question14,false);
console.log("Question 14"); 
console.log("Decrement");

// Question 15 
function question15() { //Negation (-)
	if (document.getElementById("a15").checked){ 
		window.alert("Correct! Good Job!"); //window alert requirement
		console.log("Question 15, correct answer alert."); 
	} //If else requirement
		else {
			window.alert("Wrong! The correct answer was C. - ");
			console.log("Question 15, wrong answer alert."); 
		}
}
document.getElementById("b15").addEventListener("click",question15,false);
console.log("Negation"); 
console.log("Question 15"); 

// Question 16 
function question16(){ //Assignment (=)
	if (document.getElementById("a16").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 16, correct answer alert."); 
	} //If else requirement
		else {
			window.alert("Wrong! The correct answer was D. 5 ");
			console.log("Question 16, wrong answer alert."); 
		}
}
document.getElementById("b16").addEventListener("click",question16,false);
console.log("Assignment"); 
console.log("Question 16"); 

// Question 17
function question17(){ //Compound addition assignment (+=)
	if (document.getElementById("a17").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 17, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. 8 ");
			console.log("Question 17, wrong answer alert."); 
		}
}
document.getElementById("b17").addEventListener("click",question17,false);
console.log("Question 17"); 
console.log("Compound addition assignment");

// Question 18
function question18(){ //Compound subtraction assignment (-=)
if (document.getElementById("a18").checked){ 
		window.alert("Correct! Good Job!"); //window alert requirement
		console.log("Question 18, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. 2 ");
			console.log("Question 18, wrong answer alert."); 
		}
}
document.getElementById("b18").addEventListener("click",question18,false);
console.log("Question 18"); 
console.log("Compound subtraction assignment")

// Question 19
function question19(){ //Compound multiplication assignment (*=)
	if (document.getElementById("a19").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 19, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was A. 48 ");
			console.log("Question 19, wrong answer alert."); 
		}
}
document.getElementById("b19").addEventListener("click",question19,false);
console.log("Question 19"); 
console.log("Compound multiplication assignment")

// Question 20
function question20(){
	if (document.getElementById("a20").checked){ //Compound division assignment (/=)
		window.alert("Correct! Good Job!"); 
		console.log("Question 20, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was C. 0.333 ");
			console.log("Question 20, wrong answer alert."); 
		}
}
document.getElementById("b20").addEventListener("click",question20,false);
console.log("Question 20"); 
console.log("Compound division assignment")

// Question 21
function question21(){
	if (document.getElementById("a21").checked){ //Compound Modulus assignment (%=)
		window.alert("Correct! Good Job!"); 
		console.log("Question 21, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. 1 ");
			console.log("Question 21, wrong answer alert."); 
		}
}
document.getElementById("b21").addEventListener("click",question21,false);
console.log("Question 21"); 
console.log("Compound Modulus assignment");

// Question 22
function question22(){
	var text;
    var signs = document.getElementById("myInput").value;

    switch(signs) {			//Switch requirement 
        case "True":
            text = "True is a Boolean Variable Value, nice job!";
        break;
		 case "true":
            text = "True is a Boolean Variable Value, nice job!";
        break;
		case "False":
        text = "false is a Boolean Variable Value, nice job!";
        break;
        case "false":
        text = "false is a Boolean Variable Value, nice job!";
        break;
        case "yes":
        text = "Not quite, try again!";
        break;
		case "likely":
        text = "Not quite, try again!";
        break;
		case "true":
        text = "True is a Boolean Variable Value, nice job!";
        break;
		
		
        default:
        text = "I have never heard of that...";
    }
    document.getElementById("demo2").innerHTML = text;
}
document.getElementById("b22").addEventListener("click",question22,false);
console.log("Question 22"); 
console.log("Switch Statement"); 

// Question 23
function question23(){ //Not equal (!=)
	if (document.getElementById("a23").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 23, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. false");
			console.log("Question 23, wrong answer alert."); 
		}
}
document.getElementById("b23").addEventListener("click",question23,false);
console.log("Question 23"); 
console.log("Not equal comparison statement");

// Question 24
function question24(){
	if (document.getElementById("a24").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 24, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was D. ");
			console.log("Question 24, wrong answer alert."); 
		}
}
document.getElementById("b24").addEventListener("click",question24,false);
console.log("Question 24"); 
console.log("Not equal vs equal");

// Question 25
function question25(){ //Equal (==)
	if (document.getElementById("a25").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 25, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. ");
			console.log("Question 25, wrong answer alert."); 
		}
}
document.getElementById("b25").addEventListener("click",question25,false);
console.log("Question 25"); 
console.log(" not equal and strict not equal");

// Question 26 
function question26(){
	if (document.getElementById("a26").checked){ //Logical && or and
		window.alert("Correct! Good Job!"); 
		console.log("Question 26, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. Question 1 is true, question 2 is false. ");
			console.log("Question 26, wrong answer alert."); 
		}
}
document.getElementById("b26").addEventListener("click",question26,false);
console.log("Question 26"); 
console.log(" &&");

// Question 27
function other(){ //Logical or ||
var x = 6;
var y = 3;

document.getElementById("or").innerHTML = 
(x == 5 || y == 5) + "<br>" + 
(x == 6 || y == 0) + "<br>" + 
(x == 0 || y == 3) + "<br>" + 
(x == 6 || y == 3);
}
function question27(){
	if (document.getElementById("a27").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 27, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was C. False, true, true, and true.");
			console.log("Question 27, wrong answer alert."); 
		}
}
document.getElementById("b27").addEventListener("click",question27,false);
console.log("Question 27"); 
console.log("||");

// Question 28
function question28(){ //Logical Not (!)
	if (document.getElementById("a28").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 28, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was A.False and true. ");
			console.log("Question 28, wrong answer alert."); 
		}
}
document.getElementById("b28").addEventListener("click",question28,false);
console.log("Question 28"); 
console.log("!");

// Question 29
function question29(){
	var txt1 = "Named";
	var txt2 = "function";
	document.getElementById("string").innerHTML = txt1 + " " + txt2;	
	}

document.getElementById("b29").addEventListener("click",question29,false);
console.log("Question 29"); 
console.log("Named Function"); 

// Question 30
function question30(){
	if (document.getElementById("a30").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 30, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was C.+= ");
			console.log("Question 30, wrong answer alert."); 
		}
}
document.getElementById("b30").addEventListener("click",question30,false);
console.log("Question 30"); 
console.log("+=");

// Question 31
function question31(){ //Question (+) AKA Concatenation String
	if (document.getElementById("a31").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 31, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. (+)");
			console.log("Question 31, wrong answer alert."); 
		}
}
document.getElementById("b31").addEventListener("click",question31,false);
console.log("Question 31"); 
console.log("Question (+) AKA Concatenation String"); 

// Question 32
function question32(){ //(+=) AKA Concatenation compound String
	if (document.getElementById("a32").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 32, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was C.(+=)");
			console.log("Question 32, wrong answer alert."); 
		}
}
document.getElementById("b32").addEventListener("click",question32,false);
console.log("Question 32");
console.log("Question (+=) AKA Concatenation compound String"); 

// Question 33
function question33(){ //Less than <
	if (document.getElementById("a33").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 33, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. False");
			console.log("Question 33, wrong answer alert."); 
		}
}
document.getElementById("b33").addEventListener("click",question33,false);
console.log("Question 33");
console.log("Less than");

// Question 34
function question34(){ //Less than or equal to comparison (<=)
	if (document.getElementById("a34").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 34, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. False");
			console.log("Question 34, wrong answer alert."); 
		}
}
document.getElementById("b34").addEventListener("click",question34,false);
console.log("Question 34");
console.log("Less than or equal to");

// Question 35
function question35(){ //Greater than or equal to (>=)
	if (document.getElementById("a35").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 35, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was A. True");
			console.log("Question 35, wrong answer alert."); 
		}
}
document.getElementById("b35").addEventListener("click",question35,false);
console.log("Question 35");
console.log("Greater than or equal to");

// Question 36
function question36(){ //Greater than >
	if (document.getElementById("a36").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 36, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was B. False");
			console.log("Question 36, wrong answer alert."); 
		}
}
document.getElementById("b36").addEventListener("click",question36,false);
console.log("Question 36");
console.log("Greater");


function question37() { //Strict equal (===) or (= = = )
	if (document.getElementById("a37").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 37, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was C. ===");
			console.log("Question 37, wrong answer alert."); 
		}
}
document.getElementById("b37").addEventListener("click",question37,false);
console.log("Question 37");
console.log("Strict equal ===");

function question38() { //Strict not equal (!==) or (! = = )
	if (document.getElementById("a38").checked){ 
		window.alert("Correct! Good Job!"); 
		console.log("Question 38, correct answer alert."); 
	} 
		else {
			window.alert("Wrong! The correct answer was A. !== ");
			console.log("Question 38, wrong answer alert."); 
		}
}
document.getElementById("b38").addEventListener("click",question38,false);
console.log("Question 38");
console.log("Strict not equal !==");

//Ending button
function endStatement(){
var x = document.getElementsByTagName("h4"); //TagName requirement
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "green";
    }
}	
document.getElementById("b39").addEventListener("click",endStatement,false);
console.log("Ending statement");
console.log("b39");
console.log("Tagname requirement");


	