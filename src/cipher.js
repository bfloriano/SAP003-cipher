window.cipher = {
  encode: encode,
  decode: decode,
};
  
function encode(deslocamento, mensagem) {
  let result2 = "";
  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem[i].charCodeAt() >= 65 && mensagem[i].charCodeAt() <= 90) {
      let result1 = ((mensagem[i].charCodeAt() - 65 + deslocamento) % 26 ) + 65;
      result2 += String.fromCharCode(result1);
    } else if (mensagem[i].charCodeAt() >= 97 && mensagem[i].charCodeAt() <= 122) {
      let result1 = ((mensagem[i].charCodeAt() - 97 + deslocamento) % 26 ) + 97;
      result2 += String.fromCharCode(result1);
    // } else if (mensagem[i].charCodeAt() >= 32 && mensagem[i].charCodeAt() <=64 || 
    //   mensagem[i].charCodeAt() >= 91 && mensagem[i].charCodeAt() <= 96 ||
    //   mensagem[i].charCodeAt() >= 123 && mensagem[i].charCodeAt() <= 255) {
    //   let result1 = mensagem[i].charCodeAt(); 
    //   result2 += String.fromCharCode(result1);
    } else {
      result2 += mensagem[i];
    }
  }
  return result2;
}

function decode(deslocamento, mensagem) {
  let result2 = "";
  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem[i].charCodeAt() >= 65 && mensagem[i].charCodeAt() <= 90) {
      let result1 = ((mensagem[i].charCodeAt() - 90 - deslocamento) % 26 ) + 90;
      result2 += String.fromCharCode(result1);
    } else if (mensagem[i].charCodeAt() >= 97 && mensagem[i].charCodeAt() <= 122) {
      let result1 = ((mensagem[i].charCodeAt() - 122 - deslocamento) % 26 ) + 122;
      result2 += String.fromCharCode(result1);
    // } else if (mensagem[i].charCodeAt() >= 32 && mensagem[i].charCodeAt() <=64 || 
    //   mensagem[i].charCodeAt() >= 91 && mensagem[i].charCodeAt() <= 96 ||
    //   mensagem[i].charCodeAt() >= 123 && mensagem[i].charCodeAt() <= 255) {
    //   let result1 = mensagem[i].charCodeAt();
    //   result2 += String.fromCharCode(result1);
    // } 
    } else {
      result2 += mensagem[i];
    }
  }
  return result2;
}
