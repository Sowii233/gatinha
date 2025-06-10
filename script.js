function verificarnome() {

    const nomecerto = ["agatha", "sowii233"];
    const nomeinserido = document.getElementById("txt").value.toLowerCase();
    if (!nomecerto.includes(nomeinserido)) {
        document.getElementById("erro").style.display = "block";
    }
    else {
        location.href = "principal.html";
    }
}
