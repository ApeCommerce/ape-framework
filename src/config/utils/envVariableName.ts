const capitalLetterRegex = /[A-Z]/gu

const capitalLetterReplacer = (letter: string): string => {
  return `_${letter}`
}

const envVariableName = (name: string): string => {
  return name
    .replace(capitalLetterRegex, capitalLetterReplacer)
    .toUpperCase()
}

export {
  envVariableName,
}
