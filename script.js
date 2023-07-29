const contactForm = document.getElementById('form');
const userName = document.getElementById("name");
const emailInput = document.getElementById('email');
const messageInput = document.getElementById("message");
const submitButton = document.getElementsByClassName('submit')[0];

//error message containers
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const messageInputError =  document.getElementById('error-msg');

const myRegex = /([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,4})/;

//Inputs validation
submitButton.addEventListener('click', e => {
    
    let errorForName = []
    let errorForEmail = []
    let errorForMsg = []

    if(userName.value.trim() === '' || userName.value.trim() == null) {
        errorForName.push('Name is required');
        userName.classList.add('active');
        
    } else {
        userName.classList.remove('active');
    }

    if(emailInput.value.trim() === '' || emailInput.value.trim() == null) {
        errorForEmail.push('E-Mail Address is required');
        emailInput.classList.add('active');
    } 
    else if (emailInput.value.trim().match(myRegex) == null) {
        e.preventDefault();
        errorForEmail.push('Please enter a valid E-Mail address');
        emailInput.classList.add('active');
    } else {
        emailInput.classList.remove('active');
    }

    if(messageInput.value.trim() === '' || messageInput.value.trim() == null) {
        errorForMsg.push('This field can not be empty');
        messageInput.classList.add('active');
    } else {
        messageInput.classList.remove('active');
    }

    if (errorForName.length > 0 || errorForEmail.length > 0 || errorForMsg.length > 0) {
        e.preventDefault();
        errorName.innerHTML = errorForName.join(', ');
        errorEmail.innerHTML = errorForEmail.join(', ');
        messageInputError.innerHTML = errorForMsg.join(', ');
    } else {
        contactForm.submit();
    }

});


//removing the error messages and red border-bottom, when user starts to type from the input elements
const inputElements = document.getElementsByTagName('input');
const inputElementsArray = Array.from(inputElements);

inputElementsArray.forEach(inputElement => {
    inputElement.addEventListener('keydown', () => {
        if(inputElement.value.length > 0) {
            inputElement.classList.remove('active');
        }

        if(userName.value.length > 0) {
            errorName.innerHTML = '' 
        }

        if (emailInput.value.trim().match(myRegex) && emailInput.value.length > 0) {
            errorEmail.innerHTML = '';
        }
    })
});

//removing the error messages and red border-bottom, when user starts to type from the texarea element
messageInput.addEventListener('keydown', () => {
    if(messageInput.value.length > 0) {
        messageInput.classList.remove('active');
        messageInputError.innerHTML = '';
    }
});


