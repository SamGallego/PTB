import axios from 'axios'

class ProfileService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/profile',
            withCredentials: true
        })
    }

    getOneProfile = id => this.app.get(`/${id}`)
    postEditProfile = (id, newUser) => this.app.put(`/${id}`, newUser)
}

export default ProfileService