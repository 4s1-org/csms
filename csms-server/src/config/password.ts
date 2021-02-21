import crypto from 'crypto'

function createHash(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex')
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex')
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
