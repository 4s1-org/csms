import pino from 'pino'

export function createLogger(name: string): pino.Logger {
  const logger = pino({
    prettyPrint: { colorize: true },
    name,
    base: {
      hostname: null,
    },
  })
  return logger
}
