window.cipher = {
  encode: encode,
  decode: decode,
};
  
function encode(deslocamento, mensagem) {
  let result = "";
  for (let i = 0; i < mensagem.length; i++) {
    const letterCode = mensagem[i].charCodeAt();
    const toUpperCase = letterCode >= 65 && letterCode <= 90;
    const toLowerCase = letterCode >= 97 && letterCode <= 122;
    
    if (toUpperCase) {
      result += String.fromCharCode(((letterCode - 65 + deslocamento) % 26 ) + 65);
    } else if (toLowerCase) {
      result += String.fromCharCode(((letterCode - 97 + deslocamento) % 26 ) + 97);
    } else {
      result += mensagem[i];
    }
  }
  return result;
}

function decode(deslocamento, mensagem) {
  let result = "";
  for (let i = 0; i < mensagem.length; i++) {
    const letterCode = mensagem[i].charCodeAt();
    const toUpperCase = letterCode >= 65 && letterCode <= 90;
    const toLowerCase = letterCode >= 97 && letterCode <= 122;

    if (toUpperCase) {
      result += String.fromCharCode(((letterCode - 90 - deslocamento) % 26 ) + 90);
    } else if (toLowerCase) {
      result += String.fromCharCode(((letterCode - 122 - deslocamento) % 26 ) + 122);
    } else {
      result += mensagem[i];
    }
  }
  return result;
}
