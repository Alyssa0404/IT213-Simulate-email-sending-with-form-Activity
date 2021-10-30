// Variables
const sendBtn = document.getElementById('sendBtn');



// Event Listeners

eventListener();

function eventListener(){
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);
}


// Fuctions

// App Initialization
function appInit() {
  // disable the send button on load
 sendBtn.disabled = true;
}