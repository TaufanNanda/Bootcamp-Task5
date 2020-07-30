const CHAR = '*'
const BANNED = ['dolor','elit','quis','nisi','fugiat','proident','laborum']
const sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const censoringWord = (sentence) => {
  const replaceBanned = (match) => CHAR.repeat(match.length)
  const filter = new RegExp(BANNED.join('|'), 'gi')

  return sentence.replace(filter, replaceBanned)
}

console.log(censoringWord(sentence));