var originalText = "I love my Country.<br> I love my City.<br> I love my Homeland.";


// Get Elements
var convertToLowercase = document.getElementById("convertToLowercase");
var convertToUppercase = document.getElementById("convertToUppercase");
var convertToCapitalize = document.getElementById("convertToCapitalize");
var betterFormatting = document.getElementById("betterFormatting");
var printAllCities = document.getElementById("printAllCities");
var addYourCity = document.getElementById("addYourCity");
var checkYourCitiy = document.getElementById("checkYourCity");
var findTheWord = document.getElementById("findTheWord");
var replaceTheWord = document.getElementById("replaceTheWord");
var clearInput = document.getElementById("clearInput")
var clearOutput = document.getElementById("clearOutput");

var inputFieldText = document.getElementById("inputFieldText");
var output = document.getElementById("output");
var originalString = document.getElementById("originalString");


// Add Events
convertToLowercase.addEventListener('click' , textToLowercase);
convertToUppercase.addEventListener('click' , textToUppercase);
convertToCapitalize.addEventListener('click' , toCapitalize);
betterFormatting.addEventListener('click' , betterFormat);
printAllCities.addEventListener('click' , printCities);
addYourCity.addEventListener('click' , addCity);
checkYourCitiy.addEventListener('click' , checkCity) ;
findTheWord.addEventListener('click' , findWord);
replaceTheWord.addEventListener('click' , replaceWord);
clearInput.addEventListener('click' , clearInputField);
clearOutput.addEventListener('click' , clearOutputBox);

// Event Functions

originalString.innerHTML = originalText

// 
// toLowercase

function lowerCaseStyle(){
    output.style.textTransform = "lowercase"
    output.style.wordSpacing = "0px"
    output.style.letterSpacing = "0px"
}

function textToLowercase(){
    lowerCaseStyle();
    output.innerHTML = originalText.toLowerCase()
    toastMsg({text:"Converted to lowercase Successfully", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}



// toUppercase

function uppercaseStyle(){
    output.style.textTransform = "uppercase"
    output.style.wordSpacing = "0px"
    output.style.letterSpacing = "0px"
}

function textToUppercase(){
    output.innerText = null;
    uppercaseStyle();
    output.innerHTML = originalText
    toastMsg({text:"Converted to Uppercase Successfully", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}

// toCapitalize

function capitalizedStyle(){
    output.style.textTransform = "capitalize"
    output.style.wordSpacing = "0px"
    output.style.letterSpacing = "0px"
}

function toCapitalize(){
    output.innerText = null;
    capitalizedStyle();
    output.innerHTML = originalText
    toastMsg({text:"Converted to Capitalized Successfully", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}

// betterFormat

function betterTextFormat(){
    output.style.textTransform = "capitalize"
    output.style.wordSpacing = "1px"
    output.style.letterSpacing = "3px"

}

function betterFormat(){
    output.innerText = null
    betterTextFormat();
    output.innerHTML = originalText
    toastMsg({text:"Converted to Better Formatting ", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}

// printCities

var cities = ["Faisalabad" , "Karachi" , "Lahore" , "Islamabad" , "Peshawer" , "Quetta" , "Multan"]

function printCities(){
    output.innerText = null
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        output.innerHTML += num + ')' + cities[i] + '<br>';
    }
    toastMsg({text:"Cities are Printed", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}

// addCity

function addCity(){
    let city = inputFieldText.value
    if (!city) {
    toastMsg({text:"Please Add your City", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return;
    }

    let isCityExist = cities.find(function(value){
        if (value.toLowerCase() === city.toLowerCase()) {
            return value
        }
    })
    if(isCityExist){
    toastMsg({text:"City with same name is ALready Exists", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return
    }

    cities.push(city);
    toastMsg({text:"Successfulle Add Your City", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}

// CheckCity

function checkCity(){
    let city = inputFieldText.value;
    if (!city) {
    toastMsg({text:"Add a City Name in Input Field", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
    let isCityExist = cities.find(function(value){
        if (value.toLowerCase() === city.toLowerCase()) {
            return value
        }
    })
    if(isCityExist){
    toastMsg({text:"City Found in the list :)", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return
    }else{
    toastMsg({text:"Sorry! We couldn't find Your city:(", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
}

// findWord

function findWord(){
    let newOriginalText = originalText;
    let word = inputFieldText.value;
    if (!word) {
    toastMsg({text:"Please Add a Word", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return;
    }
    word = word.toLowerCase();
    let indexOfFindeWord = originalText.toLowerCase().indexOf(word)
    if(indexOfFindeWord !== -1){
    toastMsg({text:"This Word Exists", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
output.innerText = indexOfFindeWord

    return
    }
    toastMsg({text:"This Word Does not Exists", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});

}

// replaceWord

function replaceWord(){
    let replacedWord = window.prompt("Write a word with which you want to replace the existing word")
    if(!replaceTheWord){
        alert("You should enter some text")
        return
    }
    let actualField = inputFieldText.value.toLowerCase()
    if(!actualField){
        alert("write string that has to be replaced")
        return
    }
    let indexOfFindedWord = originalText.toLowerCase().indexOf(actualField)
    if(indexOfFindedWord !== -1){
        let indeces = new RegExp(actualField , "gi")
output.innerHTML = originalText.replace(indeces , replacedWord)

    }else{
        alert("word does not exist")
    }
}

// clearInputField

function clearInputField(){
    inputFieldText.value = ""
}

// clearOutputBox

function clearOutputBox(){
    if (!output.innerText) {
    toastMsg({text:"Output Box is already cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
    if (output.innerText) {
        output.innerText = null
        
        toastMsg({text:"Output Box is cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
}










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