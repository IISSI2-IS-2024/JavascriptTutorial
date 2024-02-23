// Loading from node modules folder by its identifier
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpointPath = '/users'

// Common JS format is used in Node environments
// ('module.exports' to export, and 'require' to import)
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

export default {getUsers, getUserById}