function saudacao() {
    const agr = new Date();
    const hora = agr.getHours();
    const msg_Saudacao = document.getElementById("message");

    let msg= "";
    if (hora >= 5 && hora < 12) {
        msg = "Good morning";
    } else if (hora >= 12 && hora < 18) {
        msg = "Good afternoon";
    } else {
        msg = "Good evening";
    }
    msg_Saudacao.innerText = msg + "! I'm Daniel Donaire, nice to meet you🤙";
}
saudacao();