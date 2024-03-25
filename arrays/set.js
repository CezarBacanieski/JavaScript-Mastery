const names = ["Ana","Ana", "Maria", "Mauro", "Mauro", "Mauro"];

const updatedNames = new Set(names)
const listUpdatedNames = [...new Set(names)]
// const listUpdatedNames = [...updatedNames]

listUpdatedNames.push('Cezar')
console.log(updatedNames)
console.log(listUpdatedNames)