import {defineStore} from 'pinia'
import axios from 'axios';


export const useSendStore = defineStore('sendStore', {
    actions: {
        async sendSms(receivers, data) {

            try {
                const response = await axios.post('/messages/send/sms', {
                    number_id: data.selectedNumber,
                    message: data.smsText,
                    receivers
                });
                return response;
            } catch (error) {
                return error.name
            }
        },

        async correspond(id, file) {
            const formData = new FormData();
            formData.append('number_id', id);
            formData.append('file', file.raw);
            try {
                const response = await axios.post('/messages/send/correspond', formData  , {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                return response;
            } catch (error) {
                return error.name
            }
        },


        async smartSend(id,file) {
            const formData = new FormData();
            formData.append('number_id', id);
            formData.append('file', file.raw);
            try {
                const response = await axios.post('/messages/send/smart', formData  , {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                return response;
            } catch (error) {
                return error.name
            }
        },

        async bulk() {
            try {
                const response = await axios.post('/messages/send/bulk', {});
                return response;
            } catch (error) {
                console.log(error);
            }
        },

        async occasional() {
            try {
                const response = await axios.post('/messages/send/occasional', {});
                return response;
            } catch (error) {
                console.log(error);
            }
        },

        async gradual() {
            try {
                const response = await axios.post('/messages/send/gradual', {});
                return response;
            } catch (error) {
                console.log(error);
            }
        },
    }
})


export const useReceivedStore = defineStore('receivedStore', {
    actions: {

        async getReceives(data) {
            try {
                const response = await axios.get('/messages/received?limit=5&page=' + data)
                return response;
            } catch (error) {
                return error.name
            }
        },

        async deleteItem(id) {
            try {
                const response = await axios.delete(`/messages/received/${id}`)
                return response;

            } catch (error) {
                console.log(error);
            }
        },

    }
})