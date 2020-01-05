const bcrypt = require('bcryptjs');


const hash = async word => {
    word = await bcrypt.hash("kdk", 10)
    console.log(word)
    return word
}
console.log(hash('kd'))
