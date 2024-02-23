// Loading from node_modules folder by its identifier
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpointPath = '/users'

// Equivalent to module.exports
const getUsers = async () => {
  try {
    const response = await axios.get((`${baseUrl}${usersEndpointPath}`))
    return response.data
  } catch (error) {
    console.log(error)
  }
}
const getUserById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${usersEndpointPath}\\${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
let users = getUsers()
users = await users;
const filteredUserPhones = users.filter(user => user.username === 'Bret').map(user => user.phone)
console.log(filteredUserPhones)
export {getUsers, getUserById}