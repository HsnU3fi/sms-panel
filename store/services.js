import {defineStore} from 'pinia'
import axios from 'axios';


export const useServiceNumbersStore = defineStore('serviceNumbersStore', {

        actions: {
            async getNumbers(data) {
                try {
                    const response = await axios.get('/numbers?page=' + data)
                    return response;
                } catch (error) {
                    return error.name
                }
            },
            // Send a POST request to '/numbers' API endpoint for create user
            async createNumber(data) {
                try {
                    const response = await axios.post("/numbers", {
                        number: data.number,
                        description: data.description,
                        operator: data.operator,
                        status: data.status,
                    });
                    return response;
                } catch (error) {
                    return error.name;
                }
            },

            async deleteItem(id) {
                try {
                    const response = await axios.delete(`/numbers/${id}`)
                    return response;

                } catch (error) {
                    console.log(error);
                }
            },
        }

})