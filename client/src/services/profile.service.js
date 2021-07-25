import axios from 'axios'

class ProfileService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/profile',
            withCredentials: true
        })
    }

    getOneProfile = id => this.app.get(`/${id}`)
    editProfile = id => this.app.post(`/${id}`)
}

export default ProfileService