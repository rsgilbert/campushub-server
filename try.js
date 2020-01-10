// const bcrypt = require('bcryptjs');
// const hash = async word => {
//     word = await bcrypt.hash("kdk", 10)
//     console.log(word)
//     return word
// }
// // worked as expected: Solved
// console.log(hash('kd'))

//fs. Writing files
const fs = require('fs')
const path = require('path')
const readp = path.join(__dirname, 'yarn-error.log')
const writep = path.join('./newfile.txt')
// console.log(writep)
const readStream = fs.createReadStream(readp)
const writeStream = fs.createWriteStream(writep)
readStream.pipe(writeStream)
console.log(writeStream)
