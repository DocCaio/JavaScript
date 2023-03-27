function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e teste novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
             gênero = 'Homem'
             if (idade >=0 && idade < 10) {
                 //criança
                 img.setAttribute('src' , 'foto-bebe-m.png')
             }else if (idade < 21) {
                 //Jovem
                 img.setAttribute('src' , 'foto-jovem-m.png')
             }else if (idade < 50) {
                 //Adulto
                 img.setAttribute('src' , 'foto-adulto-m.png')
             }else {
                 //idoso
                 img.setAttribute('src' , 'foto-idoso-m.png')
             }

            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src' , 'foto-bebe-m.png')
                }else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src' , 'foto-jovem-m.png')
                }else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src' , 'foto-adulto-m.png')
                }else {
                    //idoso
                    img.setAttribute('src' , 'foto-idoso-m.png')
                }
                              
       

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dtectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        


    }
}

