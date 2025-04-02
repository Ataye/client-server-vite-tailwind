import axios from 'axios';

const ROOT = '/users';
var _address;

const UsersService = {

    fetchUsers: async () => {
        return axios.get(`${ROOT}/`).then(resp => resp.data)
    },


    setAccount: (address) => {
        _address = address
    }
}

export default UsersService