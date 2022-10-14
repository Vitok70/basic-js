const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

let team =[];
let teamStr = '';
if (!Array.isArray(members)){return false;} // проверка явл. ли данные массивом

for (let i=0; i < members.length; i++){
  if (typeof members[i] === 'string') {
    team.push(members[i].trim().toUpperCase().slice(0,1));
  }
 }

if (team.length === 0) {return false;}
else {
  teamStr = team.sort().join('');
  return teamStr;
}


}

module.exports = {
  createDreamTeam
};
