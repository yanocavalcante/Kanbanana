import axios from "axios"
import Cookies from "js-cookie"

const baseURL = "https://kanbanana-54dp.onrender.com"

export async function getBoardById(id) {
    const response = await axios.get(`${baseURL}/board/${id}`)
    return response
  }

export async function getAllUserBoards(){
    const response = axios.get(`${baseURL}/board`, {
      headers: {
          Authorization: `Bearer ${Cookies.get("token")}` 
      }
  })
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