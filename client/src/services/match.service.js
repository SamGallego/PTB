import axios from 'axios'

class MatchService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/match',
            withCredentials: true
        })
    }

    getMatchCreate = () => this.app.get('/create')
    postMatchCreate = (name, lat, lng, date, description, owner) => this.app.post('/create', { name, lat, lng, date, description, owner })
    getMatchList = () => this.app.get('/list')
    getMatchDetails = id => this.app.get(`/details/${id}`)
    getMatchEdit = id => this.app.put(`/details/${id}`)
    joinTeamA = (id, userId) => this.app.put(`/details/${id}/joinA`, { userId })
    joinTeamB = (id, userId) => this.app.put(`/details/${id}/joinB`, { userId })
    getMatchDelete = id => this.app.delete(`/details/${id}`)

}

export default MatchService