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
    disable_buttons();
    document.getElementById("dialogAlert").show();
}

//closing alert
export function closeAlert(){
    disable_buttons();
    document.getElementById("dialogAlert").close();
}

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