// LISTA DE USUÁIOS
let listaDados = []

// DISPARAR O BOTÃO COM DON
const btnEnviar = document.querySelector('#btnsubmit')

//CRIANDO O CONTRUTOR

function Campos(campo1, campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}

//EVENTO CLICK
btnEnviar.addEventListener('click', ()=>{
    const inputcampo1 = document.querySelector('#campo1')
    const inputcampo2 = document.querySelector('#campo2')

    let info = new Campos(inputcampo1.value, inputcampo2.value)


    listaDados.push(info)
    localStorage.setItem('dados', JSON.stringify(listaDados)) // PRECISA DO JSON PARA TRANSMITIR O ARRA COMO UM OBJETO E NÃO COMO UMA STRING

    inputcampo1.value = ''
    inputcampo2.value = ''
})