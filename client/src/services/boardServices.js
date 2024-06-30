import axios from "axios"
import Cookies from "js-cookie"

const baseURL = "https://kanbanana-54dp.onrender.com"

export function getAllBoards(){
    const response = axios.get(`${baseURL}/board`)
    return response
}

export function getBoardById(id) {
    const response = axios.get(`${baseURL}/board/${id}`)
    return response
  }

export function getAllBoardsByOwner(id){
    const response = axios.get(`${baseURL}/board/getAllBoardsByOwner/${id}`)
    return response
}

export function createBoard(body) {
    const response = axios.post(`${baseURL}/board/create`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}` 
        }
    })
    return response
}


export function editBoard(body, id) {
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