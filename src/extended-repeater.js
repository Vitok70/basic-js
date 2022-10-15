const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let arrResult =[];
let strResult ='';
str = String(str); 
options.addition = String(options.addition); 
 
if (options.separator === undefined) {options.separator = '+'};
if (options.additionSeparator === undefined) {options.additionSeparator = '|'};
if (options.repeatTimes === undefined) {options.repeatTimes = 1};
if (options.additionRepeatTimes === undefined) {options.additionRepeatTimes = 1};
if (options.addition === 'undefined') {options.addition = ''};

if (options.repeatTimes == 0){
  if(options.additionRepeatTimes == 0){arrResult.push(str,options.addition); }
   else {  arrResult.push(str);
           for (let i=0; i < options.additionRepeatTimes; i++ ){
             arrResult.push(options.addition,options.additionSeparator);
          }
       }
}
else { if(options.additionRepeatTimes == 0){
        for (let i=0; i < options.repeatTimes; i++ ){
         arrResult.push(str,options.separator);}
       arrResult.pop(); 
       }
       else {
           for (let i=0; i < options.repeatTimes; i++ ){
             arrResult.push(str);
             for (let j=0; j < options.additionRepeatTimes; j++ ){
                 arrResult.push(options.addition,options.additionSeparator);
             }
           arrResult.pop();
           arrResult.push(options.separator);
           }
           arrResult.pop();
       }
   }     

   strResult = arrResult.join('');
   return strResult;
  
}

module.exports = {
  repeater
};
