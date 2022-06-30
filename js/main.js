// budget inputini chaqirish
let elInput = document.querySelector(".budget__input");

// xarid elementlarini chaqrish
let elInputTop = document.querySelector(".enter__input-top")
let elInputBottom = document.querySelector(".enter__input-bottom")
let elButtonBottom = document.querySelector(".enter__button")

// budget qoshadigan button
let elButton = document.querySelector(".budget__button");

// result spanlarni chaqirish
let elBudgetSpan = document.querySelector(".budget-span");
let elExpenceSpan = document.querySelector(".expense-span");
let elBalanceSpan = document.querySelector(".balance-span");

// reduce uchun bo'sh arraylar
let yourMoney = [];
let yourBalance = [];
let allBalance = [];

elButton.addEventListener('click', function(evt) {
    evt.preventDefault();

if(elInput.value != 0 && elInput.value.length < 9 ){
    var inputValue = elInput.value.trim() * 1;
    elInput.value = null
    yourMoney.push(inputValue)
    
    elBudgetSpan.textContent = yourMoney.reduce(function(acc, element) {
        return acc + element;
        
    })
    } 

    elBalanceSpan.textContent = yourMoney.reduce(function(acc, element) {
        return acc + element;
    })
    - 
    yourBalance.reduce(function(xisob, element) {
    return xisob + element;
    })
    
});

elButtonBottom.addEventListener("click", function(evt){
    evt.preventDefault();
    if(elInputBottom.value != 0 && elInputBottom.value.length < 9){
       let bottomInputValue =  elInputBottom.value.trim() *1 ;
    yourBalance.push(bottomInputValue);

    elExpenceSpan.textContent = yourBalance.reduce(function(xisob, element) {
    return xisob + element;
    })
    elInputBottom.value = null
    }


    elBalanceSpan.textContent = yourMoney.reduce(function(acc, element) {
        return acc + element;
    })
    - 
    yourBalance.reduce(function(xisob, element) {
    return xisob + element;
    })
})

