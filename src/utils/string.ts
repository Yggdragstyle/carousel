export function Capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

// export function PascalCase(str: string): string {
//   return str.toLowerCase().split('-').map(Capitalize).join('')
// }

export function CamelCase(str: string): string {
  return str
    .toLowerCase()
    .split('-')
    .map((word, index) => (0 === index ? word : Capitalize(word)))
    .join('')
}
