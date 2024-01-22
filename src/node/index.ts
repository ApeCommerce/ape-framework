import '../env'

const env = process.env.NODE_ENV
const path = process.env.NODE_PATH

const getEnv = (): string | undefined => {
  return env
}

const getPath = (): string | undefined => {
  return path
}

export {
  getEnv,
  getPath,
}
