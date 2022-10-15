const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

let years;
if (isNaN(sampleActivity) || (Number(sampleActivity) > MODERN_ACTIVITY) ||  (Number(sampleActivity) < 0) ||
(typeof(sampleActivity) !='string') || (sampleActivity === '') || (sampleActivity === '0') ||
 (sampleActivity === undefined) || (sampleActivity === null) )  {
           return false; }
else  { 
        years = Math.ceil(HALF_LIFE_PERIOD/0.693 * Math.log(MODERN_ACTIVITY / (sampleActivity)));
        if (years < 50000) return years;
        else return false;
      }
}

module.exports = {
  dateSample
};
