const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sequences = ['--discard-next', '--discard-prev','--double-next','--double-prev'];
  let transformed = [];  
  if (!Array.isArray(arr)) {throw new Error ("\'arr\' parameter must be an instance of the Array!");}

  for (let i=0; i < arr.length; i++){
      if (!sequences.includes(arr[i],0)) { transformed.push(arr[i]); }
      else 
         switch(arr[i]){
           case '--discard-next':  {if (i != arr.length-1) {i++; break;} else break;}
           case '--discard-prev':  {if (i != 0) {transformed.splice(i-1,1); break;} else break;}
           case  '--double-next':  {if (i != arr.length-1) {transformed.push(arr[i+1]); break;} else break; }
           case  '--double-prev':  {if (i != 0) {
                                       if (arr[i-2] != '--discard-next') { transformed.push(arr[i-1]); break;} 
                                          else break;}
                                    else break;
                                    }
          }
  }
return transformed;
}

module.exports = {
  transform
};
