import axios from 'axios'

class IndexService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/`,
            withCredentials: true
        })
    }

    getMatches = () => this.app.get('/')

}

export default IndexService