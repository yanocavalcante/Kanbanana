import axios from "axios"
import Cookies from "js-cookie"
import dotenv from "dotenv";


dotenv.config();
const baseURL = BASEURL

export async function getBoardById(id) {
  console.log(id)
    const response = await axios.get(`${baseURL}/board/${id}`)
    return response
  }

export async function getAllUserBoards(id){
    const response = await axios.get(`${baseURL}/board/byUser/${id}`, {
      headers: {
          Authorization: `Bearer ${Cookies.get("token")}` 
      }
  })
  console.log(response)
    return response
}

export async function createBoard(boardname) {
    let body = { name: boardname}
    const response = await axios.post(`${baseURL}/board/create`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}` 
        }
    })
    return response.data.board
}


export function updateBoard(body, id) {
    console.log(body)
    const response = axios.patch(`${baseURL}/board/update/${id}`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    return response
  }

  export function deleteBoard(id) {
    const response = axios.delete(`${baseURL}/board/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      }
    })
    return response
  }

  export function addUserInBoard(email){
    const response = axios.patch(`${baseURL}/board/${email}/addUser`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      }
    })
    return response
  }
