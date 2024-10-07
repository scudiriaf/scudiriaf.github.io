function equal(){
let a = document.getElementById("fnum").value;
let b = document.getElementById("snum").value;
    let x = (a==b) && a!='' && b!='' ? 'числа совпадают' : 'числа не совпадают';
 alert(x);
}

function validateName() {
    let nameInput = document.getElementById("name_input").value;
    let namePattern = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    if (!namePattern.test(nameInput)) {
        alert("Имя должно содержать только буквы.");
        document.getElementById("name_input").focus();
    } else {
        document.getElementById("name_output").textContent = nameInput;
    }
}

function validateAge() {
    let ageInput = document.getElementById("age").value;

    if (ageInput < 0 || !Number.isInteger(Number(ageInput))) {
        alert("Возраст должен быть неотрицательным целым числом.");
        document.getElementById("age").focus();
    }
}

function validateGender() {
    let genderInput = document.getElementById("gender_input").value.toUpperCase();

    if (genderInput !== "М" && genderInput !== "Ж") {
        alert("Пол должен быть указан как 'М' или 'Ж'.");
        document.getElementById("gender_input").focus();
    }
}
