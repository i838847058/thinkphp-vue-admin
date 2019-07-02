import request from '@/utils/request'
import {get, post, deletes, put} from '@/layout/components/http.js'

export function login(data) {
  return post('/api/login/login', data)
}

export function getInfo(token) {
  console.log(token)
  return get('https://www.easy-mock.com/mock/5d0f3bcb811a0c1980e0a346/js/userInfo')
}

export function logout() {
  return get('https://www.easy-mock.com/mock/5d0f3bcb811a0c1980e0a346/js/userInfo')
}
