import {defineStore} from 'pinia'
import axios from 'axios';

// @ts-ignore
//Users
export const useUsersStore = defineStore('usersStore', {
    actions: {
//======================================================================================================================
        // Send a GET request to '/users' API endpoint for get all users
        async getUsers(data) {
            try {
                const response = await axios.get('/users?sort_by=first_name&sort_align=desc&limit=5&page=' + data)
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/users' API endpoint for create user
        async createUser(data) {
            try {
                const response = await axios.post('/users', {
                    username: data.userName,
                    first_name: data.name,
                    last_name: data.lastName,
                    phone: data.mobile.value,
                    display_name: data.displayName,
                    type: data.type,
                    password: data.password.text

                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a DELETE request by id user to '/users' API endpoint for deleted user
        async deleteItem(id) {
            try {
                const response = await axios.delete(`/users/${id}`)
                return response;
            } catch (error) {
                return error.name
            }
        },
    }
})


//Employees
export const useEmployeesStore = defineStore('employeesStore', {
    actions: {
//======================================================================================================================
        // Send a GET request to '/users/employees' API endpoint for get all Employees
        async getEmployees(data) {
            try {
                const response = await axios.get('/users/employees?sort_by=first_name&sort_align=desc&limit=5&page=' + data)
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a POST request to '/users/employees' API endpoint for create employees
        async createEmployees(data) {
            try {
                const response = await axios.post('/users/employees', {
                    username: data.userName,
                    first_name: data.name,
                    last_name: data.lastName,
                    phone: data.mobile.value,
                    display_name: data.displayName,
                    password: data.password.text
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a DELETE request by id user to '/users/employees' API endpoint for deleted employees
        async deleteItem(id) {
            try {
                const response = await axios.delete(`/users/employees/${id}`)
                return response;

            } catch (error) {
                return error.name
            }
        },

    }


})

//Setting
export const useUserSettingStore = defineStore('userSettingStore', {
    actions: {
//======================================================================================================================
        // Send a GET request to '/settings' API endpoint for get all settings
        async getSetting(data) {
            try {
                const response = await axios.get('/settings')
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
//         // Send a POST request to '/settings' API endpoint for create settings
//         async createSetting(data, id) {
//             try {
//                 const response = await axios.post('/settings', {
//                     user_id: id,
//                     key: data.key,
//                     value: data.value,
//                 });
//                 return response;
//             } catch (error) {
//                 return error.name
//             }
//         },






        async createSettingDefaultNumber(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
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
        async createSettingAuthorizedIPToLogin(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
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
        async createSettingMinimumCharge(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
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
        async createSettingEmail(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
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
        async createSettingFrom(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
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
        async createSettingTo(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
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
        async createSettingNotif(data,id) {
            try {
                const response = await axios.post('/settings', {
                    user_id: id,
                    key: 'isNotifAllowed',
                    value: data,
                });
                return response;
            } catch (error) {
                return error.name
            }
        },
//======================================================================================================================
        // Send a DELETE request by id settings to '/settings' API endpoint for deleted settings
        async deleteItem(id) {
            try {
                const response = await axios.delete(`/settings/${id}`)
                return response;

            } catch (error) {
                console.log(error);
            }
        },

    }
})


//permissions
export const usePermissionStore = defineStore('PermissionStore', {
    actions: {
        async getPermission(data) {
            try {
                const response = await axios.get('/permissions')
                return response;
            } catch (error) {
                return error.name
            }
        },
    }
})


//numbers
export const useNumbersStore = defineStore('NumbersStore', {
    actions: {
        async getNumbersOptions() {
            try {
                const response = await axios.get('/numbers')
                return response;
            } catch (error) {
                return error.name
            }
        },
        async getNumbers(data) {
            try {
                const response = await axios.get('/users/numbers?page=' + data)
                return response;
            } catch (error) {
                return error.name
            }
        },
        // Send a POST request to '/numbers' API endpoint for create user
        async createNumber(data,id) {
            try {
                const response = await axios.post("/users/numbers/add", {
                    user_id: id,
                    number_id: data.number,
                    status: data.status,
                });
                return response;
            } catch (error) {
                return error.name;
            }
        },

        async deleteItem(id) {
            try {
                const response = await axios.delete(`/users/numbers/${id}`)
                return response;

            } catch (error) {
                console.log(error);
            }
        },
    }
})