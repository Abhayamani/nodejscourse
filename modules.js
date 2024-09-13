
/*const amount = 12

if (amount < 10) {
    console.log("Small Number")
}
else {
    console.log("Large Number")
}

console.log('Hey Its my first node app !!!')
setInterval(()=> {
    console.log('alu chop')
},1000)
*/

//Modules

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')

require(`./mind-grenade`)
console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
