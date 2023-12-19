export type Text = string[]
export type List = string[]
export type Table = string[][]

export const exit = (code?: number) => {
  process.exit(code)
}

export const write = (s: string) => {
  process.stdout.write(s)
}

export const writeLn = (s: string) => {
  process.stdout.write(`${s}\n`)
}

export const formatText = (text: Text) => {
  return text.join('\n')
}

export const formatList = (list: List) => {
  return list.map((item) => `  ${item}`).join('\n')
}

export const formatTable = (table: Table) => {
  const colLen: number[] = []
  table.forEach((row) => {
    ['', ...row].forEach((col, i) => {
      colLen[i] = col.length > (colLen[i] || 0)
        ? col.length
        : colLen[i] || 0
    })
  })
  return table.map(
    (row) => ['', ...row].map(
      (col, i) => col.padEnd(colLen[i], ' '),
    ).join('  '),
  ).join('\n')
}

export default {
  exit,
  formatList,
  formatTable,
  formatText,
  write,
  writeLn,
}
