const chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const id_length =  12
let id = ''

 function generateId()
 {
   for (let index = 0; index < id_length; index++) {

   const randomIndex =  Math.floor(Math.random() * chars.length)

    id += chars[randomIndex]
}
 return id
 }

 const foo = generateId()
 console.log(foo)