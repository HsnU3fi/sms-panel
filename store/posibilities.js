import {defineStore} from 'pinia'
import axios from 'axios';

export const useContactStore = defineStore('contactStore', {

    actions: {
        async getContact() {
            try {
                const response = await axios.get('/contacts')
                return response;
            } catch (error) {
                return error.name
            }
        },

        async createContact(data) {

            const birthday = this.fmtDate(data.birthday)
            const occasionDate = this.fmtDate(data.occasionDate)

            try {
                const response = await axios.post("/contacts", {
                    fullname: data.fullName,
                    allonym: data.allonym,
                    email: data.email,
                    mobile: data.phoneNumber.toString(),
                    telephone: data.telephone.toString(),
                    fax: data.fax.toString(),
                    company: data.companyName,
                    postal_code: data.postalCode.toString(),
                    state: data.state,
                    city: data.city,
                    birth_day: birthday,
                    occasion_date: occasionDate,
                    description: data.description,
                    address: data.address,
                    group_id: data.groupContacts,


                });
                return response;
            } catch (error) {
                return error.name;
            }
        },


        fmtDate(dateString) {
            const date = new Date(dateString);
            const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            return formattedDate
        },


        async deleteItem(id) {
            try {
                const response = await axios.delete(`/contacts/${id}`)
                return response;

            } catch (error) {
                console.log(error);
            }
        },
    }

})
export const useGContactStore = defineStore('gContactStore', {
    actions: {

        async getGContact() {
            try {
                const response = await axios.get('/contacts/groups')
                return response;
            } catch (error) {
                return error.name
            }
        },

        async createGContact(data) {
            const userData = JSON.parse(localStorage.getItem('userData'))
            try {
                const response = await axios.post("/contacts/groups", {
                    name: data.name,
                    description: data.description,
                    user_id: userData.id,
                    status: (data.status) ? '1' : '0',
                });
                return response;
            } catch (error) {
                return error.name;
            }
        },
        async deleteItem(id) {
            try {
                const response = await axios.delete(`/contacts/groups/${id}`)
                return response;

            } catch (error) {
                console.log(error);
            }
        },

    }
})