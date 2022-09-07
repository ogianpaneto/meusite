function entrar() {
    var senha = document.getElementById('senha')

    if (senha.value != '') { 
        if (senha.value == '12345') {
            window.location.href = 'home.html'
        }
        else{
            alert('senha errada')
        }
    }
}