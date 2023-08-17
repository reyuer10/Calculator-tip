const billInput = document.getElementById('billInput');
const numberOfPeople = document.getElementById('number-of-people');
const customButton = document.getElementById('custom-button');
const resetButton = document.getElementById('resetButton');
var tipAmount = document.getElementById('tip-amount-person');
var totalTip = document.getElementById('tip-total-person');
const divButtonSection = document.querySelector('.tip-field');
const inputCustomText = document.querySelector('.customInputText');
const inputCustomButton = document.getElementsByClassName('customButtonText');


tipBillFunction = (percentAmount) =>{
    tipAmount.value = billInput.value * percentAmount ;
    totalTip.value = numberOfPeople.value * (billInput.value * percentAmount);

    return percentAmount;

    
}

customButton.addEventListener('click', (Amount) =>{
   
    var inputType = document.createElement('input');
    var buttonType = document.createElement('button');
    var insideDivSection = document.createElement('div');
   

    inputType.type = 'text';
    buttonType.innerText = 'OK';

    inputType.classList = 'customInputText';
    inputType.setAttribute('id', 'inputTypeCustom')
    buttonType.classList = 'customButtonText';
    insideDivSection.classList = 'inpuTextButtonSection';

    divButtonSection.appendChild(insideDivSection);
    customButton.replaceWith(insideDivSection);
    insideDivSection.appendChild(inputType);
    insideDivSection.appendChild(buttonType);

    inputType.addEventListener('keyup', ()=>{
        tipAmount.value = (inputType.value / 100) * billInput.value;
        totalTip.value = ((inputType.value / 100) * billInput.value) * numberOfPeople.value;
    })

})