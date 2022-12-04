// Variable Constants.
const scriptURL  = 'https://script.google.com/macros/s/AKfycbxWX_WdWT9JTsSO7I5sQoaIpEtanKDE7RrtoOlJSAmurZG9WsNWJm-EkJMNpdhmF_Xl/exec'
const form       = document.forms['submit-to-google-sheet']
var msg          = document.getElementById('msg');
var formFields   = document.getElementsByClassName('form-fields');
var body         = document.body;

/**
 * Form [SUBMIT] button listener. 
 */
form.addEventListener('submit', async e => {
  
    body.classList.add('waiting');
    clickButton(); // Initiate the confetti...
    e.preventDefault()

    await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {        
            sendMessage("Messange sent successfully.", 5000);
        })
        .catch(error => {
            sendMessage("ERROR:  Unable to send message.", 3000);
        })
    
    body.classList.remove('waiting');
})


/**
 * Send to msg field, delaying (x) milliseconds at the same time, disabling and then re-enabling form input.
 * @param {*} sMessage 
 * @param {*} iMilliseconds 
 */
function sendMessage(sMessage, iMilliseconds) {
    setFormDisabled(true);
    // msg.innerHTML = sMessage;
    // setTimeout(() => msg.innerHTML = "", iMilliseconds);
    form.reset();
    setFormDisabled(false);
}


/**
 * Enable / Disable all form fields.
 * @param {*} bDisabled 
 */
function setFormDisabled(bDisabled) {
    for (let formField of formFields) {
        formField.disabled = bDisabled;
    }
}
