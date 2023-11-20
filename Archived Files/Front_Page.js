//For Contact Form//
const form = document.querySelector("form");
const error = document.querySelectorAll("span.error");
const dialog = document.querySelector(".dialog");

console.log(error);
form.addEventListener("submit", (e) => {
    //stop the browser loading
    e.preventDefault();

    let nameValue = form.name.value;
    let phoneValue = form.phone.value;
    let emailValue = form.email.value;
    let isEmpty = (nameValue || phoneValue || emailValue) === '';
    
   if (!isEmpty) {
        validateName(nameValue);
        validatePhone(phoneValue);
        validdateMail(emailValue);

        if (validateName(nameValue) && validatePhone(phoneValue) && validdateMail(emailValue))
            location.href = "./welcome.html";
    } else {

        dialog.style.display = "block";
    }

});


//name validator
function validateName(name) {
    console.log(name)
    if (/^[a-zA-Z\-]+$/.test(name)) {
        error[0].style.display = "none";
    } else {
        error[0].style.display = "block";
        error[0].textContent = "Only letter without space.";
    }
}

//phone number validator
function validatePhone(phone) {
    if (/^\d{10}$/.test(phone)) {
        error[1].style.display = "none";
    } else {

        error[1].style.display = "block";
        error[1].textContent = "Contains 10 digit number";
    }
}

//email  validator
function validdateMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        error[2].style.display = "none";
    } else {

        error[2].style.display = "block";
        error[2].textContent = "Invaid Email";
    }
}