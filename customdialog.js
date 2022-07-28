//enabling buttons
export function enableBtns(){
    document.getElementById("myAlert").disabled = false;
    document.getElementById("confirmTrigger").disabled = false;
    document.getElementById("promptMe").disabled = false;
    document.getElementById("saferPrompt").disabled = false;
}


//disabling buttons
export function disableBtns(){
    document.getElementById("myAlert").disabled = true;
    document.getElementById("confirmTrigger").disabled = true;
    document.getElementById("promptMe").disabled = true;
    document.getElementById("saferPrompt").disabled = true;
}

//displaying alert
export function displayAlert(){
    disableBtns();
    document.getElementById("dialogAlert").show();
}
document.getElementById("myAlert").addEventListener("click",displayAlert);


//closing alertttt
export function closeAlert(){
    enableBtns();
    document.getElementById("dialogAlert").close();
}
document.getElementById("AlertBtn").addEventListener("click",closeAlert);

//displaying confirm
export function displayConfirm(){
    disableBtns();
    document.getElementById("dialogConfirm").show();
}
document.getElementById("confirmTrigger").addEventListener("click", displayConfirm);

//confirming OK

export function confirmOk(){
    enableBtns();
    document.getElementById("dialogConfirm").close();
    let confirmButton = document.getElementById("result");
    confirmButton.textContent = `The value returned by the confirmation method is: True`;
    //result.innerText = "The value returned by the confirmation method is: True";
}
document.getElementById("confirmOK").addEventListener("click", confirmOk);


export function confirmCancel(){
    enableBtns();
    document.getElementById("dialogConfirm").close();
    confirmButton = document.getElementById("result");
    confirmButton.textContent = `The value returned by the confirmation method is: False`;
}
document.getElementById("confirmCancel").addEventListener("click", confirmCancel);