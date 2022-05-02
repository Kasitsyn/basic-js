const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    !!arguments ? this.chain.push(`( ${value} )`) : this.chain.push('( )')
    return this
  },


  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (Number.isInteger(position) && 0 < position && position <= this.getLength()) {
      this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)]
      return this;
    } else {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    }

  },

  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.chain.reverse()
    return this
  },

  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const final = this.chain.join('~~')
    this.chain = []
    return final

  }
}


module.exports = {
  chainMaker
};
