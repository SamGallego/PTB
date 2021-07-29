import axios from 'axios'

class ProfileService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/profile`,
            withCredentials: true
        })
    }

    getOneProfile = id => this.app.get(`/${id}`)
    postEditProfile = (id, name, lastname, nick, position, picture, description) => this.app.put(`/${id}`, {name, lastname, nick, position, picture, description})}


export default ProfileService