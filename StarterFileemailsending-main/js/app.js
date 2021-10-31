// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');



// Event Listeners

eventListener();

function eventListener(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField); 
}


// Fuctions

// App Initialization
function appInit() {
  // disable the send button on load
 sendBtn.disabled = true;
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