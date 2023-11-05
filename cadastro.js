let botao = document.getElementById("botao");

botao.addEventListener('click', valoresPassados);

function valoresPassados() {
    let name = document.getElementById("name").value;
    localStorage.setItem("namevalue", name);
    let day = document.getElementById("day").value;
    localStorage.setItem("dayvalue", day);
    let month = document.getElementById("month").value;
    localStorage.setItem("monthvalue", month);
    let year = document.getElementById("year").value;
    localStorage.setItem("yearvalue", year);
    return false;
}