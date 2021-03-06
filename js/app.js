// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');



// Event Listeners

eventListener();

function eventListener(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField); 

    // send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail);

    resetBtn.addEventListener('click', resetForm);
}


// Functions

// App Initialization
function appInit() {
  // disable the send button on load
 sendBtn.disabled = true;
}
function sendEmail (e) {
    e.preventDefault();

    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    // hide spinner then show the send email image
    setTimeout(function() {

        spinner.style.display = 'none';

        // show the image
        document.querySelector('#loaders').appendChild(sendEmailImg);
        
        setTimeout(function(){
          sendEmailForm.reset ();
          sendEmailImg.remove ();

        },5000);

    }, 3000);
}

 // Validate the fields
 function validateField() {
   let errors;
   //validate the length of the field
   validateLength(this)

   //validate the email
   if(this.type === 'email') {
          validateEmail(this);
   }

   // both will return errors, then check if there're any errors
   errors = document.querySelectorAll('.error');
    // check that the inputs are not empty
    if (email.value !== '' && subject.value !== '' && message.value !== '' ) {
      if(errors.length === 0){

        sendBtn.disabled = false;
      }

    }
   }

 //validate the length of the fields
 function validateLength(field) {
   if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
   } else {
    field.style.borderBottomColor = 'red';
    field.classList.add('error'); 
   }

 }
 //validate email(checks for @ in the value)
 function validateEmail(field){
     let emailText = field.value;
     // check if the emailtext contains the @ sign
     if(emailText.indexOf('@') !== -1) {
      field.style.borderBottomColor = 'green';
      field.classList.remove('error');
   } else {
       field.style.borderBottomColor = 'red';
       field.classList.add('error');  
   }
 }
  // reset the form
  function resetForm () {
    sendEmailForm.reset();
  }