// get elements
let nameInputField = document.getElementById("name");
let nameSubmitBtn = document.getElementById("submitNameBtn");

let stateBtn = document.getElementById("submitState");
let stateInputField = document.getElementById("states");

let submitGender = document.getElementById("submitGender")
let radios = document.getElementsByName("gender");

let emailInputField = document.getElementById("email");
let submitEmailBtn = document.getElementById("submitEmail");

let passwordInputField = document.getElementById("password");
let submitPassword = document.getElementById("submitPassword");


// Add Event Listeners
nameSubmitBtn.addEventListener('click' , submitName);
stateBtn.addEventListener('click' ,submitState);
submitGender.addEventListener("click",genderSubmission);
submitEmailBtn.addEventListener('click' , submitYourEmail);
submitPassword.addEventListener('click' , submitPasswordBtn);


// Event Functions

// Name Submission

function submitName(e){
    e.preventDefault()
    if (!nameInputField.value) {
        toastMsg({text:"Enter Your Name Please", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        nameInputField.focus();
        nameInputField.style.color = "red";
        return 
    }
    window.location.href="/submit.html"

    nameInputField.style.color = "Black"
}


// Statae Submission

function submitState(e){
    e.preventDefault();
    if (stateInputField.value ==="") {
        toastMsg({text:"Please Select a State", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        nameInputField.focus();
        nameInputField.style.color = "red";
        return 
    }
    window.location.href="/submit.html"

    nameInputField.style.color = "Black"
}


// Gender submission

function genderSubmission(){
    console.log("clicked");
    let isChecked = isRadioChecked()
    // console.log("isChecked", isChecked);
    if(!isChecked){
        // alert("please select an option")
        toastMsg({text:"Please Select an Option", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
        return
    }
    window.location.href = "/submit.html"
}

// radio checkpoint

function isRadioChecked(){
    for(let i = 0; i<radios.length ; i++){
        if(radios[i].checked){
            return true
        }
    }
return false
}


// Email Submission

function submitYourEmail(e){
    e.preventDefault;
    if (!emailInputField.value) {
        toastMsg({text:"Please Add Your Email", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }else if (emailInputField.value.indexOf("@") < 1) {
        toastMsg({text:"Your Email is Not Correct", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }else{
        window.location.href = "/submit.html";
    }
}



//  Password Submission

async function submitPasswordBtn(e){
    // console.log("eeeeeee");
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(res => res.json())
    // .catch(err => console.log("err",err))
    // console.log("bbbbbbb");

    // try {
    //     const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    //     console.log("dataaaaaaaaaaaaa", data);
    // } catch (error) {
    //     console.log("errorrrrrrr", error);
    // }
    e.preventDefault();
    let password = passwordInputField.value;
    if (!password) {
        toastMsg({text:"Please Enter Your Password", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }else if(password.length < 8) {
        toastMsg({text:"Please Write Password upto 8 chracters", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }else if (password.indexOf(" ") !== -1) {
        toastMsg({text:"Don't use space in password", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});
    }
    else{
        window.location.href = "/submit.html";
    }
    
    // console.log(passLength);
}

// console.log("ehsan")

// setTimeout(() => {
// console.log("ehsan1")
// }, 2000)

// console.log("ehsan2")












// toastMsg({text:"Output Box is already cleared", position: "center", gravity: "bottom", color: ["#ff0000", "#aa0000"]});


// toastify Error

function toastMsg({text, gravity, position, color}) {
    if(!text) return alert("Text is Required")
    if(!gravity) return alert("gravity is Required")
    if(!position) return alert("position is Required")
    if(!color || color?.length<2) return alert("color is Required")
    Toastify({
        text,
        // text: "This is a toast",
        duration: 1000,
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



