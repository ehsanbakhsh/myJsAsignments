// getElements

var ifElseButton = document.getElementById("ifElseBtn");
var clearOutputBtn = document.getElementById("clearOutput")
var outputBox = document.getElementById("output");
var switchButton = document.getElementById("switchBtn");
var askingName = document.getElementById("askingTheName");


// addEventListener

ifElseButton.addEventListener('click' , ifElseBtn);
clearOutputBtn.addEventListener('click' , clearOutputBox);
switchButton.addEventListener('click' , switchWork);
askingName.addEventListener('click' , askName);


// Event Functions

function ifElseBtn(){
    var now = new Date();
    var today = now.getDay();

    if (today === 0) {
    toastMsg({text:"It's Sunday", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    outputBox.innerText = "Sunday"
    }else if (today === 1) {
    toastMsg({text:"It's Monday", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    outputBox.innerText = "Monday"
    }else if (today === 3) {
    toastMsg({text:"It's Wednesday", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    outputBox.innerText = "Wednesday"
    }else if (today === 5) {
    toastMsg({text:"It's Friday", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    outputBox.innerText = "Friday"
    }else{
    toastMsg({text:"It's Some Other Day", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
}



// switchFunction

function switchWork(){
    var now = new Date();
    var today = now.getDay();

    switch (today) {
        case 0:
            outputBox.innerText = "It's Sunday";
        toastMsg({text:"It's Sunday by Switch Function", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
            break;
        case 1 :
            outputBox.innerText = "It's Monday"
            toastMsg({text:"It's Monday by Switch Function", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
            break;
        case 3:
            outputBox.innerText = "It's Wednesday"
            toastMsg({text:"It's Wednesday by Switch Function", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
            break;
        case 5:
            outputBox.innerText = "It's Friday"
            toastMsg({text:"It's Firday by Switch Function", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
            break;
        default:
            outputBox.innerText = "It's Some Other Day";
            break;
    }
}


// askName

function askName(){
    do {
        var name = prompt("Enter Your Name");

    } while (name === null || name === "");
    outputBox.innerText = name;
}


// clearOutputBox

function clearOutputBox(){
    outputBox.innerText = ""
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