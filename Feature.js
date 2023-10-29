//For popup. Trouble with greying out background//
$ = function(id) {
	return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display = 'block';
}

var hide = function(id) {
	$(id).style.display = 'none';
}

if($('.cd-popup').hasClass('is-visible')) {
	$('.popup-background').addClass('visible');
}
else if(!$('.cd-popup').hasClass('is-visible')) {
	$('.popup-background').removeClass('visible');
}


function chBackcolor(clor) {
	document.body.style.background = grey;
 }

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
    if (/^[a-zA-Z\-]+$/.test(name)) {
        displayError("#name_error", "none");
        return true;
    } else {
        displayError("#name_error", "block");
        return false;
    }
}

//phone number validator
function validatePhone(phone) {
    if (/^\d{10}$/.test(phone)) {
        displayError("#phone_error", "none");
        return true;
    } else {

        displayError("#phone_error", "block");
        return false;
    }
}

//email  validator
function validdateMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        displayError("#email_error", "none");
        return true;
    } else {

        displayError("#email_error", "block");
        return false;
    }
}


function displayError(elementId, elementProperty) {
    return form.querySelector(elementId).style.display = elementProperty;
}