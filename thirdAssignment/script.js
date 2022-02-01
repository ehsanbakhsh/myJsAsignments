// Get Elements
var inputField = document.getElementById("inputFieldText");
var simpleAlert = document.getElementById("simpleAlert");
var printMyName = document.getElementById("printMyName");
var clearOutput = document.getElementById("clearOutput");
var printCities = document.getElementById("printAllCities");
var addCity = document.getElementById("addCity");
var generateTable = document.getElementById("generateTable");

var originalString = document.getElementById("originalString");
var output = document.getElementById("output");
var clearInputField = document.getElementById("clearInput");

// Add Event Listeners
clearInputField.addEventListener('click' , clearInput);
simpleAlert.addEventListener('click' , alertSimple);
printMyName.addEventListener('click' , printName);
clearOutput.addEventListener('click' , clearOutputBox);
printCities.addEventListener('click' , printAllCities);
addCity.addEventListener('click' , addYourCity);
generateTable.addEventListener('click' , generateATable);

// Event Functions
function clearInput(){
    if (!inputField.value) {
        toastMsg({text:"Already Cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        // alert("already Cleared")
    }
    inputField.value = null
}

// simpleAlert

function alertSimple(){
    alert("It's a simple Alert")
}

// printMyName

function printName(){
    if (!inputField.value) {
        toastMsg({text:"Please Enter Your name in input Field", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        // alert("Please Enter Your Name...")
        return
    }
    let name = inputField.value
    output.innerText = name
    // console.log(name);
}


// ClearOutput

function clearOutputBox(){
    if (!output.innerText) {
        toastMsg({text:"Output box is Already cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        // alert("Output box is Already cleared");
        return;
    }
    output.innerText = null
    toastMsg({text:"Successfully Cleared Output Box", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    // alert("Successfully Cleared");
}

// printAllCites

var cities = ['Faisalabad' , 'Quetta' , 'Peshawer' , 'Lahore' , 'karachi' , "Rawalpindi" , 'Multan']
originalString.innerText = cities ;

function printAllCities(){
    output.innerText = null;
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        output.innerHTML += num + ')' + cities[i] + '<br>';
    }
    toastMsg({text:"Successfully print Cities", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    // alert("Successfully print Cities");
}


// addYourCity

function addYourCity(){
    var city = inputField.value
    if (!city) {
        toastMsg({text:"Please Enter Your City Name", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        // alert('Please Enter Your City Name');
        return
    }
    // check if city is already existed
    // let isCityExist = [1,2,3,4,5].find(function(value){
    //     if(value === 6){
    //         return value 
    //     }
    // })
    // let isCityExist = [1,2,3,4,5].find(value => value===4)
    
    // check if city is already existed
    let isCityExist = cities.find(function(value){
        if(value.toLocaleLowerCase() === city.toLocaleLowerCase()){
            return value
        }
    })
    if(isCityExist){
        toastMsg({text:"City with the same name alreay exists", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        // alert('Please Enter Your City Name');
        return
    }
    // console.log("isCityExist", isCityExist);
    var add = cities.push(city);
    toastMsg({text:"Successfully add city", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}

// GenerateATable

function generateATable(){
    var number = inputField.value;

    if (!number) {
        toastMsg({text:"Please Enter a Number", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        // alert("Please Enter a Number");
        return
    }

    output.innerHTML = null;

    var limit = +prompt('Write limit of table')

    for (let i = 1; i <= limit ; i++) {
        output.innerHTML += number + " * " + i + " = " + i * number + "<br>" ; 
    }
}







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

