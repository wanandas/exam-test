export const symbolToName = (symbol) => {
  return symbol && symbol.split('_').join('/').toUpperCase()
}
