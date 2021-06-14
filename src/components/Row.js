import axios from "axios";
const url = 'https://randomuser.me/api/?results=10';

export default {
    ApiSearch: function () {
        return axios.get(url)
    }
}