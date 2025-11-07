function calcularIdade() {

    let anoNascimento = document.getElementById("anoNascimento").value;
    let anoAtual = new Date().getFullYear();


    if (anoNascimento === "" || anoNascimento > anoAtual) {
        document.getElementById("resultado").textContent = "Por favor, insira um ano válido.";
        return;
    }

    let idade = anoAtual - anoNascimento;

    document.getElementById("resultado").textContent = `Você tem ${idade} anos de idade.`;
}
