import CryptoJS from 'crypto-js'

function createHash(password: string, salt: string): string {
  return CryptoJS.PBKDF2(password, salt, {
    iterations: 32,
    keySize: 2048,
  }).toString(CryptoJS.enc.Hex)
}

export function hashPassword(password: string): string {
  const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex)
  const hash = createHash(password, salt)
  return [salt, hash].join('$')
}

export function verifyPassword(password: string, passwordHash: string): boolean {
  const parts = passwordHash.split('$')

  const salt = parts[0]
  const originalHash = parts[1]

  const hash = createHash(password, salt)
  return hash === originalHash
}
