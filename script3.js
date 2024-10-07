function con(){
    let age = parseInt(document.getElementById("age").value, 10);
    
    if (isNaN(age) || age <= 0) {
        alert("Возраст не может быть отрицательным числом или нулем!");
        document.getElementById("age").focus(); // возвращаем фокус на поле ввода
    } else if (!confirm("Вы уверены, что вам " + age + "?")) {
        alert("Введите свой возраст снова!");
        document.getElementById("age").focus(); // возвращаем фокус на поле ввода
    }
}
