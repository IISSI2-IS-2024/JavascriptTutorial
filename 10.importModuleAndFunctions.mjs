import ApiModule from './8.apiModule.mjs'
import { getUsers, getUserById } from './9.exportFunctions.mjs'

console.log('ApiModule: ')
console.log(ApiModule)

console.log('ApiModule.getUsers(): ')
// Notice that this returns a promise!
// (how can we resolve it?
// => ApiModule.getUsers()
// .then(users => console.log(users))
// .catch(err => console.err(err))
console.log(ApiModule.getUsers())

const processUsers1 = async () => {
  try {
    const users = await ApiModule.getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers1()

console.log('getUsers(): ')
console.log(getUsers())

console.log('getUserById(1): ')
console.log(getUserById(1))

const processUsers3 = async () => {
    try {
    const users = await getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers3()
