import axios from 'axios';

export default class UserApi {
    static getUsers(){
        return 
        axios.get("http://localhost:3001/registrationDetails")
        .then(response => console.log( response.data))
        .catch(error => { throw error });
    }
}