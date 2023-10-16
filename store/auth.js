import {defineStore} from 'pinia'
import axios from 'axios';
// pD@fGq2Y@F6a%UZhvX
// @ts-ignore
export const useLoginStore = defineStore('loginStore', {
    actions: {
//======================================================================================================================
        // Make a POST request to the '/auth/login' endpoint
        async login(data) {
                localStorage.removeItem('token')
            try {
                const response = await axios.post('/auth/login', {
                    username: data.username,
                    password: data.password
                });
                return response.data;
            } catch (error) {
                console.log(error);
            }
        },
//======================================================================================================================
        //Save Token user in local storage
        async setTokenInLocalStorage(data) {
            console.log(data)
            if (data) {
                localStorage.setItem("token", JSON.stringify(data))
                return true
            }
            return false
        },
//======================================================================================================================
        async checkUsers() {
            try {
                const response = await axios.get('/users/check')
                localStorage.setItem("userData", JSON.stringify(response.data.data))
            } catch (error) {
                return error.name
            }
        },

    }
})