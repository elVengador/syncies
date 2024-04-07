const generateHash = (str: String) => {
  return (
    str.split('').reduce((hash, char) => {
      const charCode = char.charCodeAt(0)
      return (hash << 5) - hash + charCode
    }, 0) | 0
  ) // Convert to 32-bit integer
}

export const getColorByIdentifier = (id: string, colors: string[]) => {
  const index = generateHash(id) % colors.length
  // Return the color at the generated index
  return colors[index]
}
