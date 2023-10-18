let sorteio = document.getElementById('lista-sorteio');
for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}
