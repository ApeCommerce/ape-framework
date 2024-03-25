const formatList = (list: string[]): string => {
  return list
    .map((item) => {
      return `  ${item}`
    })
    .join('\n')
}

export {
  formatList,
}
