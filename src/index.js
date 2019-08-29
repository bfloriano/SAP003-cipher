document.getElementById("bot1").addEventListener("click", criptografar);
document.getElementById("bot2").addEventListener("click", descriptografar);

function criptografar() {
  event.preventDefault();
  let msg = document.getElementById("msg").value;
  let key = Number(document.getElementById("offset").value);
  let resultado = document.getElementById("result");

  let result3 = window.cipher.encode(key, msg);
  resultado.innerHTML = `${result3}`;
}

function descriptografar() {
  event.preventDefault();
  let msg = document.getElementById("msg2").value;
  let key = Number(document.getElementById("offset").value);
  let resultado = document.getElementById("result2");

  let result3 = window.cipher.decode(key, msg);
  resultado.innerHTML = `${result3}`; 
}

