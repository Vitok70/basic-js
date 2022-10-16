const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(mode = true){
    this.mode = mode;
   
  }  

  encrypt(message, key) {

let arrMessageUp = [], arrMessageSymbol =[], arrKey = [], arrEncrypt = [];
let keyUp ='';
let delta = 0;
let strEncrypt ='';
let messageUp = '';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let arrIndex = [];

// if (this.mode == false) {message.revers();}

 if (!message || !key) { throw new Error ('Incorrect arguments!'); }
    
messageUp = message.toUpperCase();
arrMessageUp = messageUp.split('');
arrMessageSymbol = arrMessageUp.filter(item => alphabet.includes(item));

keyUp =  key.toUpperCase();
arrKey = keyUp.split('');
delta = arrMessageSymbol.length - arrKey.length;

if (delta > 0 ) {  for (let i=0; i < delta; i++){ arrKey.push(arrKey[i]); } }
else if (delta < 0) { arrKey.splice(arrMessageSymbol.length,-delta); }

for (let i=0; i < arrKey.length; i++) {
    arrIndex[i] = ((alphabet.indexOf(arrMessageSymbol[i]) + alphabet.indexOf(arrKey[i])) % alphabet.length);
    arrEncrypt.push(alphabet[arrIndex[i]]);
}
  
for (let i=0; i < arrMessageUp.length; i++) {
      if (!alphabet.includes(arrMessageUp[i])) {
          arrEncrypt.splice(i,0,arrMessageUp[i]);
       }
 }  
    
if (this.mode == false) { arrEncrypt.reverse(); strEncrypt = arrEncrypt.join(''); return strEncrypt;}
    else {strEncrypt = arrEncrypt.join(''); return strEncrypt; }    

}

// ****************************************************************** //
  decrypt(message, key) {
    
    let arrMessageUp = [], arrMessageSymbol =[], arrKey = [], arrEncrypt = [];
    let keyUp ='';
    let delta = 0;
    let strEncrypt ='';
    let messageUp = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arrIndex = [];

 if (!message || !key) { throw new Error ('Incorrect arguments!'); }
        
    messageUp = message.toUpperCase();
    arrMessageUp = messageUp.split('');
    arrMessageSymbol = arrMessageUp.filter(item => alphabet.includes(item));
    
    keyUp =  key.toUpperCase();
    arrKey = keyUp.split('');
    delta = arrMessageSymbol.length - arrKey.length;

  if (delta > 0 ) { for (let i=0; i < delta; i++){  arrKey.push(arrKey[i]); }  }
  else if (delta < 0) { arrKey.splice(arrMessageSymbol.length,-delta); }
    
  for (let i=0; i < arrKey.length; i++){
        arrIndex[i] = ((alphabet.indexOf(arrMessageSymbol[i]) - alphabet.indexOf(arrKey[i]) + alphabet.length) % alphabet.length);
        arrEncrypt.push(alphabet[arrIndex[i]]);
  }
      
  for (let i=0; i < arrMessageUp.length; i++){
        if (!alphabet.includes(arrMessageUp[i])) {
              arrEncrypt.splice(i,0,arrMessageUp[i]);
        }
  }  
        
 if (this.mode == false) { arrEncrypt.reverse(); strEncrypt = arrEncrypt.join(''); return strEncrypt;}
 else { strEncrypt = arrEncrypt.join(''); return strEncrypt; }    

 }

}

module.exports = {
  VigenereCipheringMachine
};
