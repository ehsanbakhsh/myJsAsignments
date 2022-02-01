// originalString
let rightNowDate = new Date();
var originalString = document.getElementById("originalStrings")
originalString.innerText = rightNowDate


// Daynames
var dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]

// getAllElements

// output
var outputBox = document.getElementById("output");
var paraa = document.getElementById("para");

// InputField
var inputField = document.getElementById("inputFields");


// clearButtons
var clearInputBtn = document.getElementById("clearInput");
var clearOutputBtn = document.getElementById("clearOutput");

// functionButtons
var todaysName = document.getElementById("getNameOfToday");
var CalculateDaysPassSinceIBorn = document.getElementById("CalculateDaysPassSinceIBorn");
var whenNextBirthday = document.getElementById("whenIsNextBirthday");
var tellTimeOne = document.getElementById("tellTime1");
var tellTimeTwo = document.getElementById("tellTime2");
var tellTimeThree = document.getElementById("tellTime3");
var greetusers = document.getElementById("greet");
var calculateTaxButton = document.getElementById("calculateTaxBtn");
var totalBtn = document.getElementById("calculateTotalButton")

// addEventListeners
clearInputBtn.addEventListener('click' , clearInput);
todaysName.addEventListener('click' , todayName);
CalculateDaysPassSinceIBorn.addEventListener('click' , calculateDays);
whenNextBirthday.addEventListener('click' , nextBirthday)
tellTimeOne.addEventListener('click' , tellTime1);
tellTimeTwo.addEventListener('click' , tellTime2);
tellTimeThree.addEventListener('click' , tellTime3);
greetusers.addEventListener('click' , greetUserBtn);
calculateTaxButton.addEventListener('click' , calculateTaxBtn);
totalBtn.addEventListener('click' , totalButton)

// EventFunctions

// ClearInputField
function clearInput(){
  if (!inputField.value) {
    toastMsg({text:"Input Field is Already Cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return
  }
  inputField.value = ""
  toastMsg({text:"Input Field Cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
}


// todaysName
function todayName(){
  outputBox.innerText = ""
  let dateRightNow = new Date();
  let theDay = dateRightNow.getDay();
  let nameOfToday = dayNames[theDay];
  outputBox.innerText = nameOfToday;
}

// CalculateDays

function calculateDays(){
  let dob = inputField.value;
  if (!dob) {
  toastMsg({text:"Input Your Date Of Birth", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return
  }

  let today = new Date();
  let bornDate = new Date(dob);

  let diff = today.getTime() - bornDate.getTime();

  let daysDiff = diff / (1000 * 60 * 60 * 24);

  outputBox.innerHTML = Math.floor(daysDiff) + "Days Passed Since You Born."
}


// nextBirthday

function nextBirthday(){
  let dob = inputField.value;
  if (!dob) {
  toastMsg({text:"Input Your Date Of Birth", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    return
  }

  let today = new Date();
  let nextBirthDate = new Date(dob);

  let diff = nextBirthDate.getTime() - today.getTime();

  let daysDiff = diff / (1000 * 60 * 60 * 24);

  outputBox.innerHTML = Math.floor(daysDiff);
  paraa.innerText = "Your Next Birthday is "  + Math.floor(daysDiff) + " Days away";
}


// TellTime Function

function tellTime(){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  paraa.innerText = "You Clicked This Button at" + hour + " : " + minute + " : " + second;
}

function tellTime1(){
  tellTime()
}

function tellTime2(){
  tellTime()
}

function tellTime3(){
  tellTime()
}



// Greet User
function greetUser(userName){
  outputBox.innerText = ("Good Morning " + userName)
}

function greetUserBtn(){
  let username = prompt("Write Your Name Here.")
  greetUser(username)
}


// calculateTax
function calculateTax(price , taxrate){
  var tax = price * taxrate / 100
  return tax;
}

function calculateTaxBtn(){
  var price = +prompt("Enter Price...");
  var taxrate = 17;
  var tax = calculateTax(price , taxrate);
  outputBox.innerText = "Tax: " + tax;
}


// calculateTotalBtn

function calculateTotal(price){
  if (price > 1000) {
    var taxrate = 17;
  }else{
    var taxrate = 8;
  }

  var tax = calculateTax(price , taxrate)
  var total = price + tax;
  return total;
}

function totalButton(){
  var price = +prompt("Enter Price");
  var total = calculateTotal(price)
  outputBox.innerText = "Total: " + total;
}











































// toastMsg({text:"Fake Error", position: "right", gravity: "bottom", color: ["#ff0000", "#aa0000"]});

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