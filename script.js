let string = "";
let buttons = document.querySelectorAll('.button');
let numbers = document.querySelectorAll('.numbers');


window.addEventListener('keydown', (e) => {
    let keycode = e.which ? e.which : e.keycode;
    if (keycode >= 48 && keycode <= 57) {
        console.log(e.key)
        string = string + e.key;
        document.querySelector('input').value = string;
    }
    else {
        alert("only numbers are allowed")
    }
})



Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})








// Array.from(buttons).forEach((button) => {
//     button.addEventListener('keyup', (e) => {
//         let keycode = e.which ? e.which : e.keycode;
//         if (keycode >= 48 && keycode <= 57) {
//             console.log(e.target)
//             string = string + e.target.value;
//             document.querySelector('input').value = string;
//         }
//         else {
//             alert("only numbers are allowed")
//         }
//     })
// })