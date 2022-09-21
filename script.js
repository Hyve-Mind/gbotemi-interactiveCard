const theForm = document.querySelector(".formContainer")
const confirmBtn = document.querySelector(".submitBtn")
const continueBtn = document.querySelector(".Continue")
const inputCardName = document.querySelector("#cardHolder")
const inputCardNumber = document.querySelector("#cardNumber")
const inputMonth = document.querySelector("#month")
const inputYear = document.querySelector("#year")
const inputCVC = document.querySelector("#cvc")
const displayCardName = document.querySelector(".cardNameDisplay")
const displayCardNumber = document.querySelector(".cardNumberDisplay")
const displayMonth = document.querySelector(".displayMonth")
const displayYear = document.querySelector(".displayYear")
const displayCVC = document.querySelector(".displayCVC")
const completeStateMessage = document.querySelector(".completeState")
const incorrectName = document.querySelector(".incorrectName")
const incorrectNumber = document.querySelector(".incorrectNumber")
const incorrectDate = document.querySelector(".incorrectDate")
const incorrectCVC = document.querySelector(".incorrectCVC")
document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0,input.maxLength);
        if(input.value.length < input.minLength){
            input.style.border = "1px solid red"
        }
        else{
            input.style.border = "1px solid blue"
        }
    };
});
confirmBtn.disabled = true
confirmBtn.addEventListener("click",() =>{
    completeStateMessage.style.display = "flex"
    theForm.style.display = "none"
})
continueBtn.addEventListener("click",() =>{
    theForm.style.display = "flex"
    completeStateMessage.style.display = "none"
    confirmBtn.disabled = true
})
inputCardName.addEventListener("keyup",() =>{
    displayCardName.textContent = inputCardName.value
    nameErrorMessage()
})
inputCardNumber.addEventListener("keyup",() =>{
    displayCardNumber.textContent = inputCardNumber.value
    validateUserInput()
    numberErrorMessage()
})
inputMonth.addEventListener("keyup",() =>{
    displayMonth.textContent = inputMonth.value
    validateUserInput()
    dateErrorMessage()
})
inputYear.addEventListener("keyup",() =>{
    displayYear.textContent = inputYear.value
    validateUserInput()
    dateErrorMessage()
})
inputCVC.addEventListener("keyup",() =>{
    displayCVC.textContent = inputCVC.value
    validateUserInput()
    cvcErrorMessage()
})
function validateUserInput(){
    if(inputCardNumber.value.length === 16 && inputMonth.value.length === 2 && inputYear.value.length === 2 && inputCVC.value.length === 3
        && inputMonth.value > 0 && inputMonth.value < 13 && inputYear.value > 21 && inputYear.value < 27){
        confirmBtn.disabled = false
    }
    else{
        confirmBtn.disabled = true
    }
}
function nameErrorMessage(){
    if(inputCardName.value === ""){
        incorrectName.textContent = "cant be blank"   
        inputCardName.style.border = "ipx solid red" 
    }
    else if(inputCardName.value.length < 6){
        incorrectName.textContent = "value must be between 6 char to 30 char"
    }
    else{
        incorrectName.textContent = ""
    }
}
function numberErrorMessage(){
    if(inputCardNumber.value === ""){
        incorrectNumber.textContent = "cant be blank"
    }
    else if(inputCardNumber.value.length < 16){
        incorrectNumber.textContent = "Card Number must be 16 digits"
    }
    else{
        incorrectNumber.textContent = ""
    }
}
function dateErrorMessage(){
    if(inputMonth.value === "" && inputYear.value === ""){
        incorrectDate.textContent = "cant be blank"
    }
    else if(inputMonth.value.length < 2 || inputYear.value.length < 2){
        incorrectDate.textContent = "input the correct date format"
    }
    else if(inputMonth.value === 00 || inputMonth.value > 12){
        incorrectDate.textContent = "month must be between 01 to 12"
    }
    else if(inputYear.value < 22 || inputYear.value > 26){
        incorrectDate.textContent = "Year can only be between 2022 to 2026"
    }
    else{
        incorrectDate.textContent = ""
    }
}
function cvcErrorMessage(){
    if(inputCVC.value === ""){
        incorrectCVC.textContent = "cant be blank"
    }
    else if(inputCVC.value.length < 3){
        incorrectCVC.textContent = "CVC must be 3 digits"
    }
    else{
        incorrectCVC.textContent = ""
    }
}