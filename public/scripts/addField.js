// Procurar o botão
document.querySelector("#add-time")
.addEventListener("click", cloneField)
// Quando clicar no botão

// Executar uma ação
function cloneField() {

    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e limpar ele
        field.value = ""
    })

    // Colocar na página, onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}