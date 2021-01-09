import pino from 'pino'

export function createLogger(name: string): pino.Logger {
  const logger = pino({
    enabled: !!process.env.NOLOG,
    prettyPrint: { colorize: true },
    name,
    base: {
      hostname: null,
    },
  })
  return logger
}
