const form = document.querySelector('#form');
const principle = document.querySelector('#principle');
const year = document.querySelector('#year');
const rate = document.querySelector('#rate');
const calculate = document.querySelector('#calculate');
const resultForm = document.querySelector('#result_form');
const interestBox = document.querySelector('#interest');
const totalBox = document.querySelector('#total');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(principle.value == "" || year.value == "" || rate.value == ""){
        alert("Box e man den vai!!!")
    }else{
        let principleAmount = Number(principle.value);
        let calInterest = principleAmount * year.value * (rate.value / 100);
        let calTotal = calInterest + principleAmount;

        let finalInterest = calInterest.toFixed(2);
        let finalAmount = calTotal.toFixed(2);

        interestBox.value = finalInterest;
        totalBox.value = finalAmount;

        resultForm.style.display = 'block';
    }


})