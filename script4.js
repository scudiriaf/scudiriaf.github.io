function surname_change(){
    if (document.getElementById("surname_input").value != '' && document.getElementById("surname_input").value.match(/^[A-zА-яЁё]+$/))
        document.getElementById("surname_output").innerText =  document.getElementById("surname_input").value;
    else (alert("Введите фамилию"));
}
function name_change(){
    if (document.getElementById("name_input").value != '' && document.getElementById("name_input").value.match(/^[A-zА-яЁё]+$/))
    document.getElementById("name_output").innerText = document.getElementById("name_input").value;
    else (alert("Введите имя"));
}