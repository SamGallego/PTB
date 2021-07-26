import axios from 'axios'

class LeagueService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/league',
            withCredentials: true
        })
    }

    getLeagueCreate = () => this.app.get('/create')
    postLeagueCreate = (name, lat, lng, date, description, limit) => this.app.post('/create', { name, lat, lng, date, description, limit })
    getLeagueList = () => this.app.get('/list')
    getLeagueDetails = id => this.app.get(`/details/${id}`)
    getLeagueEdit = id => this.app.put(`/details/${id}`)
    getLeagueDelete = id => this.app.delete(`/details/${id}`)
    getTable = id => this.app.get(`/details/${id}/table`)
    getMatches = id => this.app.get(`/details/${id}/matches/list`)

}

export default LeagueService