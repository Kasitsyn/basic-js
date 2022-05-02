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
  const teamName = []

  if (!Array.isArray(members)) return false 
  if (members.length === 0 || !members) return false

  let array = members.filter(elem => typeof elem === 'string')


  if (array.length === 0) return false

  // .toUpperCase().sort().join('')

  array.forEach(elem => {
    teamName.push(elem.trim().toUpperCase()[0])
  })

  return teamName.sort().join('')

}

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max', 213123, true])
// createDreamTeam()
// createDreamTeam([])
// createDreamTeam([123123, 23142, false, true])


module.exports = {
  createDreamTeam
};
