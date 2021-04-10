//Modal da Logo
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    if (modal) {
    modal.classList.add('mostrar')
    modal.addEventListener('click', function(e){
        if (e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove('mostrar')
        }
    })
} 
}
const logo = document.querySelector('.logo')
logo.addEventListener('click', function() {
    iniciaModal('modal-logo')
})

//Modal do Contato 
function iniciaModalc(modalIDc) {
    const modalc = document.getElementById(modalIDc)
    if (modalc) {
    modalc.classList.add('mostrarc')
    modalc.addEventListener('click', function(e){
        if (e.target.id == modalIDc || e.target.className == 'fecharc') {
            modalc.classList.remove('mostrarc')
        }
    })
} 
}
const contato = document.querySelector('.contato')
contato.addEventListener('click', function() {
    iniciaModalc('modal-contato')
})

console.log(contato)

