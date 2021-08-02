import axios from 'axios'

class MatchService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/match`,
            withCredentials: true
        })
    }

    getMatchCreate = () => this.app.get('/create')
    postMatchCreate = (name, city, address, date, description, owner) => this.app.post('/create', { name, city, address, date, description, owner })
    getMatchList = () => this.app.get('/list')
    getMatchDetails = id => this.app.get(`/details/${id}`)
    matchEdit = (id, name, city, address, date, description) => this.app.put(`/details/${id}`, {name, city, address, date, description})
    joinTeamA = (id, userId) => this.app.put(`/details/${id}/joinA`, { userId })
    joinTeamB = (id, userId) => this.app.put(`/details/${id}/joinB`, { userId })
    getMatchDelete = id => this.app.delete(`/details/${id}`)

}

export default MatchService