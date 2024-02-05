const buttons= document.querySelectorAll('.btn');
const body= document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    // constvalue.addEventListener("event",function(e){
     //console.log(e);
    // })
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='gray'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }
    })
});


// BMI CALCULATOR
const form=document.querySelector('form');

//this usecase will give you empty
// const height= parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const alert = document.querySelector('#alert');

    // condition for all inputs not empty, value not less than 0 & only accept a number.
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `PLEASE GIVE A VALID VALUE ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `PLEASE GIVE A VALID VALUE ${weight}`;
    } else {
        const bmi = (height / ((height * height) / 10000)).toFixed(2);

        if (bmi > 18.6 && bmi <= 24.9){
            alert.innerHTML = `You have normal weight`;
        } else if (bmi <= 18.6) {
            alert.innerHTML = `You are underweight`;
        } else {
            alert.innerHTML = `You are overweight`;
        }

        // show results;
        results.innerHTML = `<span>Result: ${bmi}</span>`;
    }
});


// guessing number



