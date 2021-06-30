export const changeOpacity = (color: string, alpha = '.5') => {
  const red = parseInt(color.substring(1, 3), 16)
  const green = parseInt(color.substring(3, 5), 16)
  const blue = parseInt(color.substring(5, 7), 16)
  return 'rgba(' + Object.values([red, green, blue, alpha]).join(',') +')'
}
