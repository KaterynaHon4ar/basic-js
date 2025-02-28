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
  ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(direct) {
    this.direct = direct === undefined ? true : direct;
  }

  encrypt(message, key) {
    this.validateParams(message, key);
    key = this.adjustKey(message, key);
    message = message.toUpperCase();
    message = message.split('').map((el, index) => {
      if(!this.ALPHABET.includes(el)){
        return el;
      }
      let keyLetter = key.charAt(index);
      let increment = this.ALPHABET.indexOf(keyLetter);
      let elementPosition = this.ALPHABET.indexOf(el);
      let resultPosition = (elementPosition + increment) % this.ALPHABET.length;
      el = this.ALPHABET.charAt(resultPosition);
      return el;
    }).join('');
    if(this.direct){
      return message;
    }
    return message.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this.validateParams(encryptedMessage, key);
    key = this.adjustKey(encryptedMessage, key);
    encryptedMessage = encryptedMessage.toUpperCase();
    encryptedMessage = encryptedMessage.split('').map((el, index) => {
      if(!this.ALPHABET.includes(el)){
        return el;
      }
      let keyLetter = key.charAt(index);
      let decrement = this.ALPHABET.indexOf(keyLetter);
      let elementPosition = this.ALPHABET.indexOf(el);
      let resultPosition = (elementPosition - decrement + this.ALPHABET.length) % this.ALPHABET.length;
      el = this.ALPHABET.charAt(resultPosition);
      return el;
    }).join('');
    if(this.direct){
      return encryptedMessage;
    }
    return encryptedMessage.split('').reverse().join('');
  }

  validateParams(message, key){
    if(message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }
  }

  adjustKey(message, key) {
    key = key.toUpperCase();
    let adjustedKey = '';
    let keyIndex = 0;

    for (let char of message.toUpperCase()) {
      if (this.ALPHABET.includes(char)) {
        adjustedKey += key[keyIndex % key.length];
        keyIndex++;
      } else {
        adjustedKey += char;
      }
    }
    return adjustedKey;
  }

}

module.exports = {
  VigenereCipheringMachine
};
