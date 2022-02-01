// Get elements
var concatenateSomeStrings = document.getElementById("concatenateStrings");
var askNameFromUser = document.getElementById("askNameFromUser");
var operaterOfComparison = document.getElementById("comparisonOperator");
var ifAndElseIf = document.getElementById("ifElseIf");
var testingSetsOfConditions = document.getElementById("testingSetsOfConditions");
var loginAccount = document.getElementById("login");
var clearTheStatement = document.getElementById("clearStatement");
var originalStatement = document.getElementById("originalStatement");
var output = document.getElementById("output");
var clearTheOutput = document.getElementById("clearOutput");


// EventLiseners
concatenateSomeStrings.addEventListener('click' , concatenateStrings);
askNameFromUser.addEventListener('click' , nameFromUser);
operaterOfComparison.addEventListener('click' , comparisonOperator);
ifAndElseIf.addEventListener('click' , ifElseIf);
testingSetsOfConditions.addEventListener('click' , testingConditions);
loginAccount.addEventListener('click' , login)
clearTheStatement.addEventListener('click' , clearStatement)
clearTheOutput.addEventListener('click' , clearOutput)

// Event Functions

// concatenateStrings

function concatenateStrings(){
    username = "Ehsan"
    let quote = "Good Morning "
    let name = username;
    let banger = "!"
    let final = quote + name + banger;
    originalStatement.innerHTML = '<ul class="text-start"><li>let quote = "Good Morning "</li><li>let name = username;</li><li>let banger = "!"</li><li>let final = quote + name + banger;</li></ul>'
    output.innerText = final
}

// nameFromUser

function nameFromUser(){
    var username = prompt('Please Enter Your Name...')
    if(!username){
        alert("Please add your Name First...");
        return
    }
    let quote = "Good Morning "
    let banger = "!"
    let final = quote + username + banger;
    // console.log(final);
    originalStatement.innerHTML = "<ul class='text-start'><li>var username = prompt('Please Your Name')</li><li>if(!username){ <br>alert('Please add your Name First...'); <br>return <br>}</li><li>let quote = 'Good Morning '</li><li>let banger = '!'</li><li>let final = quote + username + banger;</li></ul>"
    output.innerHTML = '<p class = "text-center">' + final + '</p>';
}


// comparisonOperator

function comparisonOperator(){
    alert('When Your All Values are same it Becomes true.')

    var value1 = prompt("Enter First Value");
    
    if (!value1) {
        output.innerHTML = "<p class = 'text-center'>It doesn't work without first values</p>";
        return;
    }

    var value2 = prompt("Enter Second Value.")

    if (!value2) {
        output.innerHTML = "<p class = 'text-center'>It doesn't work without second values</p>";
        return;
    }

    if (value1 === value2) {
        alert("Your values are same.");
        originalStatement.innerHTML = '<ul class="text-start"><li>var value1 = prompt("Enter First Value");</li><li>var value2 = prompt("Enter Second Value.")</li><li>if (value1 == value2) <br>alert("Your values are same."); <br>}'
        output.innerHTML = '<p class = "text-center">Your first value is ' + value1 + " and " + "Your second value is " + value2 + '</p>'
    }else{
        alert("Your values are not same");
        originalStatement.innerHTML = '<ul class="text-start"><li>var value1 = prompt("Enter First Value");</li><li>var value2 = prompt("Enter Second Value.")</li><li>if (value1 == value2) <br>alert("Your values are same."); <br>}else{ <br>alert("Your values are not same");<br>}</li></ul>'
        output.innerHTML = '<p class = "text-center">Your first value is ' + value1 + " and " + "Your second value is " + value2 + '</p>'
    }

}


// if-else-if

function ifElseIf(){
    var age = prompt("Enter Your Age...")
    if (!age) {
        alert("Please enter Your age.")
        return;
    }else if (age <= 15) {
        output.innerHTML = '<p class = "text-center">You are a child.</p>'
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Age."<br>if (!age) { <br>alert("Please enter Your age.") <br>return; <br>}else if (age <= 15) { <br>output.innerHTML = <p>You are a child.</p></li></ul>'

    }else if (age > 15 && age <=25) {
        output.innerHTML = '<p class = "text-center">You are able to drive a bike.</p>'
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Age."<br>if (!age) { <br>alert("Please enter Your age.") <br>return; <br>}else if (age > 15 && age <=25) { <br>output.innerHTML = <p>You are able to drive a bike.</p></li></ul>'

    }else if (age > 25 && age <=35) {
        output.innerHTML = '<p class = "text-center">You are able to drive a car.</p>'
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Age."<br>if (!age) { <br>alert("Please enter Your age.") <br>return; <br>}else if (age > 25 && age <=35) { <br>output.innerHTML = <p>You are able to drive a car.</p></li></ul>'
    }else if (age > 35 && age <=50) {
        output.innerHTML = '<p class = "text-center">You are able to participate in race of car.</p>'
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Age."<br>if (!age) { <br>alert("Please enter Your age.") <br>return; <br>}else if (age > 35 && age <=50) { <br>output.innerHTML = <p>You are able to participate in race of car.</p></li></ul>'
    }else if (age > 50 && age <= 60) {
        output.innerHTML = '<p class = "text-center">You are not able to participate in race of car.</p>'
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Age."<br>if (!age) { <br>alert("Please enter Your age.") <br>return; <br>}else if (age > 50 && age <= 60) { <br>output.innerHTML = <p>You are not able to participate in race of car.</p></li></ul>'
    }else if (age > 60) {
        output.innerHTML = '<p class = "text-center">Stay Home Stay Safe (:</p>'
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Age."<br>if (!age) { <br>alert("Please enter Your age.") <br>return; <br>}else if (age > 60) { <br>output.innerHTML = <p>Stay Home Stay Safe (:</p></li></ul>'
    }
}

// testingSetsOfConditions

function testingConditions(){
    alert("Age works at greater then 15 and less then 50 and weight works at greater then 50 and  less then 80.")

    var age = prompt('Enter Your Age.')
    if (!age) {
        alert('Please enter your Age.')
        return;
    }
    var weight = prompt('Enter Your Weight')
    if (!weight) {
        alert('Please Enter your weight.')
        return;
    }
    
    // age = 21
    // weight = 45
    
    if (age >= 15 && age <=30 && weight >= 50 && weight <= 60) {
        // console.log("You are a smart man");
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Ag</li><li>if (!age) { <br>alert("Please enter your Age.") <br>return; <br>}</li><li>var weight = prompt("Enter Your Weight")</li><li>if (!weight) { <br>alert("Please Enter your weight.") <br>return; <br>}</li><li>if (age >= 15 && age <=30 && weight >= 50 && weight <= 60) { <br>output.innerHTML = "<p>You are a smart man</p>"<br>}</li></ul>'

        output.innerHTML = '<p class = "text-center">You are a smart man</p>'


    }else if (age > 30 && age <=50 && weight > 60  && weight <= 80) {
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Ag</li><li>if (!age) { <br>alert("Please enter your Age.") <br>return; <br>}</li><li>var weight = prompt("Enter Your Weight")</li><li>if (!weight) { <br>alert("Please Enter your weight.") <br>return; <br>}</li><li>if (age > 30 && age <=50 && weight > 60  && weight <= 80) { <br>output.innerHTML = "<p>You are a great man</p>"<br>}</li></ul>'

        output.innerHTML = '<p class = "text-center">You are a great man</p>'
    }else if (age >=20 && age <= 40 && weight <=50) {
        originalStatement.innerHTML = '<ul class="text-start"><li>var age = prompt("Enter Your Ag</li><li>if (!age) { <br>alert("Please enter your Age.") <br>return; <br>}</li><li>var weight = prompt("Enter Your Weight")</li><li>if (!weight) { <br>alert("Please Enter your weight.") <br>return; <br>}</li><li>if (age >=20 && age <= 40 && weight <=50) { <br>output.innerHTML = "<p>Bhai kuch khya pia kr.</p>"<br>}</li></ul>'

        output.innerHTML = '<p class = "text-center">Bhai kuch khya pia kr.</p>'
    }
}

function login(){
    var username = prompt('Enter Username.Default user name is abc');
    var password = prompt('Enter Password.Default password is 123')

    defaultUsername = "abc";
    defaultPassword = "123";

    if (!username) {
        alert('Please write username')
        return;
    }
    if (!password) {
        alert('Please give password.')
        return;
    }
    
    if (username == defaultUsername && password == defaultPassword) {
        alert('Logged in')
        originalStatement.innerHTML = '<ul class="text-start"><li>var username = prompt("Enter Username.Default user name is abc");</li><li>var password = prompt("Enter Password.Default password is 123")</li><li>defaultUsername = "abc";</li><li>defaultPassword = "123";</li><li>if (username == defaultUsername && password == defaultPassword) { <br>alert("Logged in") <br>}else{ <br>alert("You enter wrong username or password") <br>return; <br>}</li></ul>'

        output.innerHTML = '<p class = "text-center">Logged in</p>'
    }else{
        alert('You enter wrong username or password!')
        return;
    }

}


function clearStatement(){
    originalStatement.innerText = "";
}
function clearOutput(){
    output.innerText = "";
}
