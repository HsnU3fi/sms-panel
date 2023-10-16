import {defineStore} from 'pinia'
import axios from 'axios';

export const useReportsStore = defineStore('reportsStore', {

    actions:{

       async getTransactions(data){
           try {
               const response = await axios.get('/transactions?page='+data)
               return response;
           } catch (error) {
               return error.name
           }
       },
        async deleteItem(id) {
            try {
                const response = await axios.delete(`/transactions/${id}`)
                return response;

            } catch (error) {
                console.log(error);
            }
        },
    }

})
