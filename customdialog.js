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
    disable_buttons();
    document.getElementById("dialogConfirm").show();
}

//confirming OK
export let cnfValue;
export function confirmOk(){
    enableBtns();
    cnfValue = true;
    const confirmButton = document.getElementById("confirmTrigger");
    confirmButton.textContent = `The value returned by the confirmation method is: ${cnfvalue}`;
}