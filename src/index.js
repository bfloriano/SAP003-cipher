document.getElementById("btn1").addEventListener("click", criptografar);
document.getElementById("btn2").addEventListener("click", descriptografar);

function criptografar() {
  event.preventDefault();
  const msg = document.getElementById("msgcode").value;
  const key = Number(document.getElementById("offset").value);
  const resultado = document.getElementById("resultcode");

  const exibir = window.cipher.encode(key, msg);
  resultado.innerHTML = `${exibir}`;
}

function descriptografar() {
  event.preventDefault();
  const msg = document.getElementById("msgdecode").value;
  const key = Number(document.getElementById("offset").value);
  const resultado = document.getElementById("resultdecode");

  const exibir = window.cipher.decode(key, msg);
  resultado.innerHTML = `${exibir}`; 
}

