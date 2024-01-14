const timestamp = (): number => {
  return Math.trunc(Date.now() / 1000)
}

export {
  timestamp,
}
