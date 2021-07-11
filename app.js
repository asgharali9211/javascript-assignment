// ----------- Chapter 21-25 String Methods ----------



// Q1  

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);



// Q2


// var favMobile = prompt("Enter your favorite mobile phone model: ");
// document.write("My favorite phone is: " + favMobile + "<br>");
// document.write("Length of string: " + favMobile.length);




// Q3


// var str = "Pakistani";
// var nIndex = str.indexOf("n");
// document.write("String: " + str + "<br>");
// document.write("Index of 'n': " + nIndex );



// Q4

// var str = "Hello World";
// var lIndex = str.lastIndexOf("l");
// document.write("String: " + str + "<br>");
// document.write("Last index of 'l': " + lIndex );




// Q5

// var str = "Pakistani";
// var Index = str[3];
// document.write("String: " + str + "<br>");
// document.write("Character at index 3: " + Index );





// Q6

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName= firstName.concat(lastName);
// alert("Hello " + fullName);



// Q7

// var str = "Hyderabad";
// var replaceStr = str.replace("Hyder", "Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + replaceStr);





// Q8


// var str = "Ahmed and Sami are best friends. They play cricket and football together.";
// var replaceStr = str.replace(/and/g, "&");
// document.write("Message: " + str + "<br>");
// document.write("After replacement: " + replaceStr);






// Q9

// var str = "472";
// var num = Number(str);
// document.write("value: " + str + "<br>");
// document.write("Tpye: " + typeof(str) + "<br>");
// document.write("value: " + num + "<br>");
// document.write("Tpye: " + typeof(num) + "<br>");






// Q10


// var str = prompt("Enter Input: ");
// document.write("User input: " + str + "<br>");
// document.write("10 " + str.toUpperCase())





// Q11

// var str = prompt("Enter Input: ");
// var firstChar = str.slice(0,1);
// var otherChar = str.slice(1);
// var title = firstChar.toUpperCase() + otherChar.toLowerCase();
// document.write("User input: " + str + "<br>");
// document.write("Title case: " + title);






// Q12

// var num = 35.36;
// var str = num.toString();
// var dotIndex = str.indexOf(".");
// str = str.slice(0,dotIndex) + str.slice(dotIndex + 1);
// document.write("Number: " + num + "<br>");
// document.write("Result: " + str);






// Q13

// var username = prompt("Enter your name: ");
// var charValue;
// for(var i = 0; i < username.length; i++){
//     charValue = username[i].charCodeAt(0);
//     if(charValue === 22 || charValue === 33 || charValue === 43 || charValue === 62){
//         alert("Please enter a valid username")
//     }
// } 



// Q14

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var query = prompt("What do you want to order: ");
// query = query.toLowerCase();
// var check = false;
// for(var i = 0; i < arr.length; i++){
//     if(query === arr[i]){
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false){
//     document.write("We are sorry. " + query + " is not available in our bakery");
// }





// Q15

// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;

// Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);

//     Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

//     Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

// Checking for Numbers
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

// Checking for first letter
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

// Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }




// Q16

// var str = "University of Karachi";
// var arr = str.split("");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>");
// }




// Q17

// var str = prompt("Enter your message: ");
// document.write("User Input: " + str + "<br>");
// document.write("Last character of input: " + str[str.length - 1]);




// Q18

// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the'");





// ----------- Chapter 26-30 Maths Methods ----------





// Q1

// var num = +prompt("Enter number: ");
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");




// Q2

// var num = +prompt("Enter number: ");
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");





// Q3

// var num = +prompt("Enter number: ");
// document.write("The absolute value of " + num + " is " + Math.abs(num));




// Q4

// var randomNumber = Math.random() * 6;
// document.write("Random dice value: " + Math.floor(randomNumber));





// Q5

// var coinValue = Math.random() * 2;
// coinValue = Math.floor(coinValue);
// if(coinValue > 0){
//     document.write("Random coin value: Heads");
// }
// else{
//     document.write("Random coin value: Tails");
// }




// Q6

// var randomNumber = Math.random() * 100;
// document.write("Random number between 1-100: " + Math.ceil(randomNumber));





// Q7

// var weight = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is " + weight + " kilograms");





// Q8 
// var secretNumber = +prompt("Enter a number between 1 and 10");
// randomNumber = Math.random() * 10;
// randomNumber = Math.ceil(randomNumber);
// if(secretNumber === randomNumber){
//     alert("Congratulations");
// }
// else{
//     alert("Try Again");
// }





// ----------- Chapter 31-34 Date Methods ----------





// Q1

// var dateNow = new Date();
// document.write(dateNow);




// Q2

// var dateNow = new Date();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var monthNow = dateNow.getMonth();
// document.write("Current Month: " + mlist[monthNow]); 





// Q3


// var dateNow = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayNow = dateNow.getDay();
// document.write("Today is " + dayNames[dayNow]);




// Q4

// var dateNow = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayNow = dateNow.getDay();
// if(dayNames[dayNow] === "Sun" || dayNames[dayNow] === "Sat"){
//     document.write("It's Fun day");
// }






// Q5

// var dateNow = new Date();
// var date = dateNow.getDate();
// if(date < 16){
//     document.write("“First fifteen days of the month");
// } 
// else{
//     document.write("Last days of the month");
// }




// Q6

// var dateNow = new Date();
// var millisec = dateNow.getTime();
// document.write("Current Date: " + dateNow + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br>");





// Q7

// var dateNow = new Date();
// var hourNow = dateNow.getHours();
// if(hourNow < 12){
//     document.write("Its AM");
// }
// else{
//     document.write("Its PM");
// }






// Q8

// var dateNow = new Date();
// var laterDate = new Date("Dec 31, 2020");
// document.write(laterDate);





// Q9

// var today = new Date();
// var todayMilli = today.getTime();
// var lastRamadan = new Date("Apr 24, 2020");
// var ramazanMilli = lastRamadan.getTime();
// var diffMilliSec = todayMilli - ramazanMilli;
// var daysPast = diffMilliSec/(1000*60*60*24);
// daysPast = Math.floor(daysPast);
// document.write(daysPast + " days have passed since 1st Ramazan, 2020");





// Q10

// var today = new Date();
// var todayMilli = today.getTime();
// var year2015 = new Date("Jan 01, 2015");
// var year2015Milli = year2015.getTime();
// var diffMilliSec = todayMilli - year2015Milli;
// var secondsPast = diffMilliSec/(1000);
// secondsPast = Math.floor(secondsPast);
// document.write("On reference date: " + today + "<br>")
// document.write(secondsPast + " seconds had passed since beginning of 2015");




// Q11

// var today = new Date();
// var hourAgo = today.getHours();
// hourAgo = hourAgo-1
// document.write("current date: " + today + "<br>");
// today.setHours(hourAgo);
// document.write("1 hour ago, it was " + today);




// Q12


// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);





// Q13

// var age = +prompt("Enter your age");
// var today = new Date();
// var yearNow = today.getFullYear();
// var birthYear = yearNow - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);




// Q14

// var customerName = "Hayat";
// var today = new Date();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var currentMonth = today.getMonth();
// var noOfUnits = 410;
// var unitCost = 16;
// var netAmount = noOfUnits * unitCost;
// var lateCharges = 150;
// var grossAmount = netAmount + lateCharges;
// document.write("K-Electric Bill" + "<br>" + "<br>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + mlist[currentMonth] + "<br>");
// document.write("No of units: " + noOfUnits + "<br>");
// document.write("Charges per unit: " + unitCost + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateCharges + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");


// ----------- Chapter 35-38 Functions ----------




// Q1


// function tellTime(){
//     var dateNow  = new Date();
//     document.write(dateNow); 
// }
// tellTime();





// Q2



// function greetUser(){
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     alert("Hello " + firstName + " " + lastName);
// }
// greetUser();



// Q3

// function sum(){
//     var firstNumber = +prompt("Enter first number: ");
//     var secondNumber = +prompt("Enter second number: ");
//     alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
// }
// sum();




// Q4

// function calculator(num1,num2,op){
//     if(op === "+"){
//         alert(num1 + " + " + num2 + " = " + (num1 + num2));
//     }
//     else if(op === "-"){
//         alert(num1 + " - " + num2 + " = " + (num1 - num2));
//     }
//     else if(op === "*"){
//         alert(num1 + " x " + num2 + " = " + (num1 * num2));
//     }
//     else if(op === "/"){
//         alert(num1 + " / " + num2 + " = " + (num1 / num2));
//     }
//     else{
//         alert("Wrong Operator");
//     }
// }
// var firstNumber = +prompt("Enter first number: ");
// var operator = prompt("Choose your operator: + - * / ");
// var secondNumber = +prompt("Enter second number: ");
// calculator(firstNumber,secondNumber,operator);




// Q5


// function square(num){
//     alert("Square of " + num + " is " + (num*num));
// }
// var number = +prompt("Enter number for square: ");
// square(number);




// Q6


// function factorial(num) {
//     var answer = 1;
//     if (num === 0 || num === 1) {
//         return answer;
//     } else {
//         for (var i = num; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var number = +prompt("Enter number for factorial: ");
// answer = factorial(number)
// alert("The factorial of " + number + " is " + answer);





// Q7


// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + " ");
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);




// Q8


// function calculateHypotenuse(base,perpendicular){
//     var base,perpendicular;
//     function calculateSquare(num){
//        num = num * num;
//        return num;
//     }
//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     var hypotenuse = base + perpendicular; 
//     return hypotenuse;
// }
// var base = +prompt("Enter base of a right angle triagnle:");
// var perpendicular = +prompt("Enter perpendicular of a right angle triagnle:");
// var hyp = calculateHypotenuse(base,perpendicular);
// alert("hypotenuse of a right angle triangle: " + hyp);




// Q9


// function areaOfRectangle(width,height){
//     var areaCalc = width * height;
//     return areaCalc;
// }
// var width = +prompt("Enter width of rectangle: ");
// var height = +prompt("Enter height of rectangle: ");
// var area = areaOfRectangle(width,height);
// alert("Area of Rectangle: " + area);




// Q10


// function checkPalindrome(message){
//     var reverseMessage = "";
//     for (var i = message.length - 1; i >= 0; i--) {
//         reverseMessage += message[i];
//     }
//     if(message === reverseMessage){
//         alert(message + " is palindrome");
//     }
//     else{
//         alert(message + " is not palindrome");
//     }
// }
// var msg = prompt("Enter message to check it's palindrome or not");
// checkPalindrome(msg);






// Q11



// function titleCase(message){
//     var arr = message.split(" ");
//     var titleArray = [];
//     var str;
//     for(var i = 0; i < arr.length; i++){
//         var firstChar = arr[i].slice(0,1);
//         var otherChar = arr[i].slice(1);
//         var word = firstChar.toUpperCase() + otherChar.toLowerCase();
//         titleArray.push(word);

//     }
//     str = titleArray.join(" ");
//     document.write("String: " + message + "<br>")
//     document.write("Output: " + str + "<br>")
// }

// var message = prompt("Enter your Message:");
// titleCase(message);





// Q12



// function longestString(message){
//     var arr = message.split(" ");
//     var longest = arr[0]; 
//     for(i = 0; i < arr.length; i++){
//         if(arr[i].length > longest.length){
//             longest = arr[i];
//         }
//     }
//     document.write("Message: " + message + "<br>")
//     document.write("Longest Word : " + longest + "<br>")
// }
// var message = prompt("Enter your Message:");
// longestString(message);





// Q13



// function findOccurence(message,letter){
//     var count = 0;
//     for(var i = 0; i < message.length; i++){
//         if(message[i] === letter){
//             count += 1;
//         }
//     } 
//     document.write("Message: " + message + "<br>")
//     document.write("Occurence of " + "'" + letter + "'" + " is "  + count + " times")
// }
// var message = prompt("Enter your Message:");
// var letter = prompt("Enter your letter to check occurence:");
// findOccurence(message,letter);




// Q14


// function calcCircumference(radius){
//     var circumference = 2 * 3.142 * radius;
//     document.write("The circumference is: " + circumference + "<br>");
// }
// function calcArea(radius){
//     var area = 3.142 * radius * radius;
//     document.write("The area is: " + area + "<br>");
// }
// var radius = +prompt("Enter radius of a Circle: ");
// calcCircumference(radius);
// calcArea(radius);






// ----------- Chapter 39-42 FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  ----------



// Q1


// function power(a,b){
//     var number = a;
//     var power = b;
//     var calc = a**b;
//     alert("Result: " + calc )
// }

// var num = +prompt("Enter Number: ");
// var p = +prompt("Enter Power: ");
// power(num,p);





// Q2


// function leapYear(year){
//     var year = year;
//     if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ){
//         alert(year + " is a leap year")
//     }
//     else{
//         alert(year + " is not a leap year")
//     }
// }

// var year = +prompt("Enter year to check leap year")
// leapYear(year) 





// Q3

// function area(s1,s2,s3){
//     var s = findS(s1,s2,s3)
//     var area =  s*(s-s1)*(s-s2)*(s-s3)
//     alert(area)
// }

// function findS(a,b,c){
//     var s = ( a + b + c ) / 2
//     return s
// }

// area(4,5,7)






// Q4

// function mainFunction(){
//     var mark1 = +prompt("Enter marks for subject 1: ")
//     var mark2 = +prompt("Enter marks for subject 2: ")
//     var mark3 = +prompt("Enter marks for subject 3: ")
//     var avg = avgFunction(mark1,mark2,mark3)
//     var per = percentage(mark1,mark2,mark3)
//     alert("Average: " + avg)
//     alert("Percentage: " + per +"%")
// }

// function avgFunction(a,b,c){
//     var average = (a+b+c)/3;
//     average = average.toFixed(2)
//     return average
// }

// function percentage(a,b,c){
//     var total = a + b + c;
//     var percentage = (total / 300) * 100;
//     percentage = percentage.toFixed(2) 
//     return percentage 
// }

// mainFunction()







// Q5


// var strText = "This is my testing string"
// var checkIndex = prompt("Enter character to find index") 
// var matchFound = false;

// function findIndex(char){
//     for(i=0; i<strText.length; i++){
//         if(checkIndex === strText[i]){
//             matchFound = true;
//             document.write("Index: " + i)
//             break;
//         }
//     }
//     if(matchFound === false){
//         document.write("Index not found")
//     }

// } 

// document.write(strText + "<br>")
// findIndex(checkIndex)








// Q6


// var str =  "My name is Hayat and I am student"
// function removeVowels(str){
//     var noVowels = "";
//     for(i=0; i<str.length; i++){
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
//             continue;
//         }
//         else{
//             noVowels += str[i]
//         }
//     }
//     document.write("String Before: " + str + "<br>");
//     document.write("String After: " + noVowels);
// }

// removeVowels(str)






// Q7


// var str = "Pleases read this application and give me gratuity";
// var chars = str.split("")
// var count = 0;
// var occurrences = []
// for(var i = 0; i < chars.length - 1; i++) {
//     var char = chars[i];
//     var next = chars[i + 1];

//     if(findOccurence(char) && findOccurence(next)){
//       count++
//       var twoChar = char + next;
//       occurrences.push(twoChar)
//     }
// }

// function findOccurence(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
// }
// document.write("String: " + str + "<br>")
// document.write("Count: " + count + "<br>")
// document.write("Occurences are: " + occurrences)





// Q8

// var distance = +prompt("Enter distance from city A to City B in KM: ")
// meter(distance)
// feet(distance)
// inches(distance)
// centimeters(distance)

// function meter(dis){
//   var meterDistance = dis * 1000
//   document.write("Distance between city A to city B is " + meterDistance + " meters." + "<br>")
// }

// function feet(dis){
//   var feetDistance = dis * 3281
//   document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>")
// }

// function inches(dis){
//   var inchDistance = dis * 39370
//   document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>")
// }

// function centimeters(dis){
//   var centimeterDistance = dis * 100000
//   document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>")
// }




// Q9


// var workingHours = +prompt("Enter your working hours: ")
// var overTime, overTimePay;
// var overTimeHourPay = 12;

// if(workingHours > 40){
//   overTime = workingHours - 40;
//   overTimePay = overTime * overTimeHourPay;
//   alert("Your overtime pay cost is: " + overTimePay + "rupees");
// } 

// else{
//   alert("You need to work more to get overtime")
// }





// Q10


// var amount = +prompt("Enter amount to Withdraw")
// var hundred = parseInt(amount / 100)
// var fifty = parseInt((amount % 100) / 50)
// var ten = parseInt((((amount % 100) % 50) / 10))

// document.write("Entered amount: " + amount + "<br>");
// document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.")