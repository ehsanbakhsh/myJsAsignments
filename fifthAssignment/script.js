// Get Elements

var clearInput = document.getElementById("clearInput");
var clearOutputBox = document.getElementById("clearOutput");
var roundANumber = document.getElementById("roundANumber");
var cielANumber = document.getElementById("cielANumber");
var floorANumber = document.getElementById("floorANumber");
var generateARandomNumber = document.getElementById("generateARandomNumber");
var throwADice = document.getElementById("throwDice");
var generateAStrongPassword = document.getElementById("generateAStrongPassword");
var convertIntoString = document.getElementById("convertingStrings");
var controlLength = document.getElementById("controllingLength");
var calculateGSTax = document.getElementById("calculateGST");

var inputField = document.getElementById("inputField");
var originalText = document.getElementById("originalString")
var para = document.getElementById("para");


// Add eventlistener
clearInput.addEventListener('click' , clearInputField);
clearOutputBox.addEventListener('click' , clearOutput);
roundANumber.addEventListener('click' , roundNumber);
cielANumber.addEventListener('click' , cielNumber);
floorANumber.addEventListener('click' , floorNumber);
generateARandomNumber.addEventListener('click' , generateRandomNumber);
throwADice.addEventListener('click' , throwDice);
generateAStrongPassword.addEventListener('click' , generateStrongPassword);
convertIntoString.addEventListener('click' , convertIntoStrings);
controlLength.addEventListener('click' , controllingLength)
calculateGSTax.addEventListener('click' , calculateGST);


// Event Functions


// ClearInputField

function clearInputField(){
    if (!inputField.value) {
        toastMsg({text:"Input is Already Cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{
        inputField.value = ""
        toastMsg({text:"Cleared Input", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});

    }
}

// CclearOutput

function clearOutput(){
    if (!output.innerText) {
        toastMsg({text:"Output is Already Cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{
        output.innerText = ""
        para.innerText = ""
        
        toastMsg({text:"Cleared Output", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
}


// roundNumber

function roundNumber(){
    let number = inputField.value;
    if (!number) {
        toastMsg({text:"Please Write a Number", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{
        number = Math.round(number);
        output.innerText = number;
        para.innerText = "";
        // console.log(number);
    }
}


// cielNumber

function cielNumber(){
    let number = inputField.value;
    if (!number) {
        toastMsg({text:"Please Write a Number", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{
        number = Math.ceil(number);
        output.innerText = number;
        para.innerText = "";
    }
}


// floorNnumber

function floorNumber(){
    let number = inputField.value;
    if (!number) {
        toastMsg({text:"Please Write a Number", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{
        number = Math.floor(number);
        output.innerText = number;
        para.innerText = "";
        // console.log(number);
    }
}



// generateRandomNumber

function  generateRandomNumber(){
    output.innerText = "";
    para.innerText = "";
    var number = Math.random()
    output.innerText = number
}


// throwDice

function throwDice(){
    output.innerText = ""
    var randomNumber = Math.random()
    randomNumber = (randomNumber * 6) + 1;

    let dice = Math.floor(randomNumber);
    output.innerText = dice
    para.innerText = "Generating Random Numbers From 1 to 6";
}



// generateAStrongPassword

function generateStrongPassword(){
    let randomString = "";
    let uppreCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlpahabets = "abcdefgijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "~!@#$%^&*()_+-={}[]';|.,/";
    let possibleString = uppreCaseAlphabets + lowerCaseAlpahabets + numbers + symbols;
    // console.log(possibleString.length);

    let limit = inputField.value;
    if (!limit) {
        toastMsg({text:"Please Write a value to generate password", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{

    for (let i = 0; i < limit ; i++) {
        let randomNumber = Math.random();
        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length));
        output.innerText = randomString
        // console.log(randomString);
    }
    para.innerText = 'Generating a random string and its length is : " ' + limit + ' "';
}
}


// convertingStrings

function convertIntoStrings(){
    let num = inputField.value;
    if (!num) {
        toastMsg({text:"Please Write a Number", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }else{
        num = parseInt(num);
        output.innerText = typeof(num);
        para.innerText = "Default value of input Field is String.It connerts string into numbers"
    }
}



// controllingLength

function controllingLength(){
    let num = inputField.value;
    if (!num) {
        toastMsg({text:"Please Write a Number", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }

    // let num = "45.656565"
    num = Number(num);
    num = num.toFixed(2)
    num = Number(num);

        output.innerText = num;
        para.innerText = "It can write Your Number upto Two Decimal Places"
    
}

// calculateGST

function calculateGST(){
    let cost = inputField.value;

    if (!cost) {
        toastMsg({text:"Please Write Your Cost", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return;
    }
    cost = Number(cost);
    let tax = cost * (17 / 100);
    let totalCost = cost + tax;
    totalCost = Math.round(totalCost);
    output.innerText = totalCost;
    para.innerHTML = "<p class = 'text-center m-0'>Your Bill = " + cost +"</p> <br> <p class = 'text-center m-0'>Tax 17% = " + tax + "</p> <br> <p class = 'text-center m-0'>Total Ammount including tax = " + totalCost + "</p>"
}













// toastMsg({text:"Output Box is cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});






// toastify Error

function toastMsg({text, gravity, position, color}) {
    if(!text) return alert("Text is Required")
    if(!gravity) return alert("gravity is Required")
    if(!position) return alert("position is Required")
    if(!color || color?.length<2) return alert("color is Required")
    Toastify({
        text,
        // text: "This is a toast",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity, // `top` or `bottom`
        // gravity: "top", // `top` or `bottom`
        // position: "left", // `left`, `center` or `right`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: `linear-gradient(to right, ${color[0] || "#00b09b"}, ${color[1] || "#96c93d"})`,
        }
        // onClick: function(){} // Callback after click
      }).showToast();
}