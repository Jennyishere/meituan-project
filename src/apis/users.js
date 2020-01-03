import myaxios from '../utils/myaxios.js'

export const login = (data)=>{
    return myaxios({
        method: 'post',
        url:'/login',
        data
    })
}