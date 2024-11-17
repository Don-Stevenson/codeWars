/* eslint-disable no-unused-vars */
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrimeNum(p) || !this.isPrimeNum(g)) {
      throw new Error("p and g must be prime numbers")
    }
    this.p = p
    this.g = g
  }

  isPrimeNum = num => {
    let counter = 0
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        counter++
      }
    }
    return counter === 2 ? true : false
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey > this.p) {
      throw new Error()
    }
    if (privateKey === this.p) {
      throw new Error()
    }
    return Math.pow(this.g, privateKey) % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p
  }
}
