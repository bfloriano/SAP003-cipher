window.cipher = {
  encode: encode,
  decode: decode,
};
  
function encode (key, msg) {
  let result = "";
  for (let i of msg) {
    const letterCode = i.charCodeAt();
    const toUpperCase = letterCode >= 65 && letterCode <= 90;
    const toLowerCase = letterCode >= 97 && letterCode <= 122;
    
    if (toUpperCase) {
      result += String.fromCharCode(((letterCode - 65 + key) % 26 ) + 65);
    } else if (toLowerCase) {
      result += String.fromCharCode(((letterCode - 97 + key) % 26 ) + 97);
    } else {
      result += i;
    }
  }
  return result;
}

function decode (key, msg) {
  let result = "";
  for (let i of msg) {
    const letterCode = i.charCodeAt();
    const toUpperCase = letterCode >= 65 && letterCode <= 90;
    const toLowerCase = letterCode >= 97 && letterCode <= 122;

    if (toUpperCase) {
      result += String.fromCharCode(((letterCode - 90 - key) % 26 ) + 90);
    } else if (toLowerCase) {
      result += String.fromCharCode(((letterCode - 122 - key) % 26 ) + 122);
    } else {
      result += i;
    }
  }
  return result;
}
