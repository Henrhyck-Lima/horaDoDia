function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "imagens/manha.png"
        document.body.style.background = '#ffce97'
    } else if (hora >= 12 && hora < 18) {
        //noa trade
        img.src = "imagens/tarde.png"
        document.body.style.background = '#5d2a10'
    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = '#384c71'
    }

}
