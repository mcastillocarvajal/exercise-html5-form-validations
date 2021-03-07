const validation = document.querySelector("form");

validation.addEventListener("submit", (e) => {
    e.preventDefault();

    let cardNumber = /^\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?$/;
    let cvcNumber = /^\d{3}$/;
    let amountNumber = /^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/;
    let nameText = /^[a-zA-Z\s]+$/;
    let cityText = /^[a-zA-Z\s]+$/;
    let postalCodeNumber = /^\d{5}$/;
    let msjText = /^[\d\D\w\W\s]+$/; 

    if(!cardNumber.test(validation.inputCard.value)){
        validation.inputCard.classList.add('is-invalid');
        validation.inputCard.style.background = "#ffb3b3";
    } else{
        validation.inputCard.classList.remove('is-invalid');
        validation.inputCard.style.background = "none";
    };

    if(!cvcNumber.test(validation.inputCvc.value)){
        validation.inputCvc.classList.add('is-invalid');
        validation.inputCvc.style.background = "#ffb3b3";
    } else{
        validation.inputCvc.classList.remove('is-invalid');
        validation.inputCvc.style.background = "none";
    };
    if(!amountNumber.test(validation.inputAmount.value)){
        validation.inputAmount.classList.add('is-invalid');
        validation.inputAmount.style.background = "#ffb3b3";
    } else{
        validation.inputAmount.classList.remove('is-invalid');
        validation.inputAmount.style.background = "none";
    };
     if(!nameText.test(validation.inputFirstName.value)){
        validation.inputFirstName.classList.add('is-invalid');
        validation.inputFirstName.style.background = "#ffb3b3";
    } else{
        validation.inputFirstName.classList.remove('is-invalid');
        validation.inputFirstName.style.background = "none";
    };
     if(!nameText.test(validation.inputLastName.value)){
        validation.inputLastName.classList.add('is-invalid');
        validation.inputLastName.style.background = "#ffb3b3";
    } else{
        validation.inputLastName.classList.remove('is-invalid');
        validation.inputLastName.style.background = "none";
    }; 
     if(!cityText.test(validation.inputCity.value)){
        validation.inputCity.classList.add('is-invalid');
        validation.inputCity.style.background = "#ffb3b3";
    } else{
        validation.inputCity.classList.remove('is-invalid');
        validation.inputCity.style.background = "none";
    }; 
    let state = document.querySelector("#inputState");
    if (state.value == "Pick a state"){
        validation.inputState.classList.add('is-invalid');
        validation.inputState.style.background = "#ffb3b3";
    } else {
        validation.inputState.classList.remove('is-invalid');
        validation.inputState.style.background = "none";
    };
    if(!postalCodeNumber.test(validation.inputZip.value)){
        validation.inputZip.classList.add('is-invalid');
        validation.inputZip.style.background = "#ffb3b3";
    } else{
        validation.inputZip.classList.remove('is-invalid');
        validation.inputZip.style.background = "none";
    };
    if(!msjText.test(validation.inputMessage.value)){
        validation.inputMessage.classList.add('is-invalid');
        validation.inputMessage.style.background = "#ffb3b3";
    } else{
        validation.inputMessage.classList.remove('is-invalid');
        validation.inputMessage.style.background = "none";
    };
});

