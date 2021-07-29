import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
            withCredentials: true
        })
    }
    login = (name, password) => this.app.post('/login', { name, password})
    signup = (name, password, lastname, nick, position, picture, description) => this.app.post('/signup', { name, password, lastname, nick, position, picture, description})
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isloggedin')
}

export default AuthService