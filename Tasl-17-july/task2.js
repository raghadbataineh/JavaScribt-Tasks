// window.localStorage.setItem('NameKey', document.getElementById('name'));
// let x=window.localStorage.getItem('NameKey');
// console.log(x);

// let inputs=document.querySelectorAll('.card');
// for (let i=0; i<inputs.length; i++){
//     let input = inputs[i];
//     if(localStorage.getItem(input.id)){
//         input.value=localStorage.getItem(input.id);
//     }
//     input.onkeyup=function(){
//         localStorage.setItem(input.id, input.value);
//     }
// }

//     const birthdayInput=document.getElementById('bd');
//     const birthdayValue=birthdayInput.value;

//     // if(localStorage.getItem(birthdayInput.id)){
//     //         birthdayInput.value=localStorage.getItem(birthdayInput.id);
//     //     }

//     birthdayInput.addEventListener('input' , function() {
//         localStorage.setItem(birthdayInput.id, birthdayInput.value);
//     })

//     const cheackbox=document.querySelectorAll('.check');
//     cheackbox.forEach(checkbox) => {
//         const storedState=localStorage.getItem(checkbox.id);
//         if (storedState==='true'){
//             cheackbox.checked=true;
//         }

//     }

//     checkboxes.forEach((checkbox) => {
//         checkbox.addEventListener('change', function() {
//             localStorage.setItem(checkbox.id, checkbox.checked);
//         });
//     })
// function saveCard1() {
//     localStorage.setItem('card1', document.getElementsByClassName('card1'));
//     let x =localStorage.getItem('card1', document.getElementsByClassName('card1'));
//     console.log(x);

// }

const inputs = document.querySelectorAll(".form");

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  // if (localStorage.getItem(input.id)) {
  //   input.value = localStorage.getItem(input.id);
  // }

  input.onkeyup = function() {
    localStorage.setItem(input.id, input.value);
  };
}
const birthDateInput = document.getElementById('Bdate');
const birthDateValue = birthDateInput.value;
// if (localStorage.getItem(birthDateInput.id)) {
//     // birthDateInput.value = localStorage.getItem(birthDateInput.id);
//   }
  birthDateInput.addEventListener('input', function() {
    localStorage.setItem(birthDateInput.id, birthDateInput.value);
  });


  const checkboxes = document.querySelectorAll(".check");
checkboxes.forEach((checkbox) => {
    const storedState = localStorage.getItem(checkbox.id);
    if (storedState === 'true') {
        checkbox.checked = true;
    }
});
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
})