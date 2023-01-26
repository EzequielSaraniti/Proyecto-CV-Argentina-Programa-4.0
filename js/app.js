const btnIngresar = document.getElementById("clickIngresar")
const contenido = document.getElementById("contenidoCV")
let seMuestra = false

btnIngresar.addEventListener("click", () => {
    if (!seMuestra) {
        btnIngresar.style.display = "none"
        contenido.style.display = "block"
        seMuestra = true
    }
})