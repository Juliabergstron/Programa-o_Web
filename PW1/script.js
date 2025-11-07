  function verificar() {
      const campo = document.getElementById("numero");
      const resultado = document.getElementById("resultado");

      
      const valor = Number(campo.value);

 
      if (campo.value === "" || isNaN(valor)) {
        resultado.textContent = "digite um valor válido";
        resultado.className = "";
        return;
      }

      if (valor % 2 === 0) {
        resultado.textContent = `O número ${valor} é par.`;
        resultado.className = "par";
      } else {
        resultado.textContent = `O número ${valor} é ímpar.`;
        resultado.className = "impar";
      }
    }