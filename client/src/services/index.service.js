import axios from 'axios'

class IndexService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getMatches = () => this.app.get('/')

}

export default IndexService