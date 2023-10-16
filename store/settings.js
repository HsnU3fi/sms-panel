//Setting
import {defineStore} from "pinia";
import axios from "axios";

export const useSettingStore = defineStore('settingStore', {
    actions: {
//======================================================================================================================
        // Send a GET request to '/settings' API endpoint for get all settings
        async getSetting() {
            try {
                const response = await axios.get('/users/metas')
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingDefaultNumber(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'defaultNumber',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingAuthorizedIPToLogin(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'authorizedIP',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingMinimumCharge(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'minChargeWarning',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingEmail(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'email',
                    value: data,
                });
                return response;
            } catch (error) {
                return error
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingFrom(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'fromTime',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingTo(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'toTime',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/settings' API endpoint for create settings
        async createSettingNotif(data) {
            try {
                const response = await axios.post('/users/metas', {
                    key: 'isNotifAllowed',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
    }
})

//Fast Text
export const useFastTextStore = defineStore('fastTextStore', {
    actions: {
        async getFastText() {
            try {
                const response = await axios.get('/fastTexts')
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        async createFastText(data) {
            const userData = JSON.parse(localStorage.getItem('userData'))
            try {
                const response = await axios.post("/fastTexts", {
                    user_id: userData.id,
                    title: data.title,
                    text: data.text,
                });
                return response;
            } catch (error) {
                return error.name;
            }
        },

    }
})