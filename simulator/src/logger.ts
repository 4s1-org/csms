import pino from 'pino'

export function createLogger(): pino.Logger {
  const logger = pino({
    enabled: process.env.NODE_ENV !== 'test',
    prettyPrint: { colorize: true },
    name: 'Simulator',
    base: {
      hostname: null,
    },
  })
  return logger
}
