
document.getElementById('button').addEventListener('click',checkLastMessage)

function checkLastMessage(e){
    e.preventDefault()
    const inputField = document.getElementById('inputField');
    const inputFieldValue = inputField.value;
    const valueAdd = document.getElementById('message').innerText = inputFieldValue;
    
    return valueAdd;


}