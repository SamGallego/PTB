import axios from 'axios'

class LeagueService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/league`,
            withCredentials: true
        })
    }

    getLeagueCreate = () => this.app.get('/create')
    postLeagueCreate = (name, lat, lng, date, description, limit) => this.app.post('/create', { name, lat, lng, date, description, limit })
    getLeagueList = () => this.app.get('/list')
    getLeagueDetails = id => this.app.get(`/details/${id}`)
    getLeagueEdit = id => this.app.post(`/details/${id}`)
    getLeagueDelete = id => this.app.post(`/details/${id}`)
    getTable = id => this.app.get(`/${id}/table`)
    getMatches = id => this.app.get(`/${id}/matches/list`)
    joinLeague = (id, userId) => this.app.put(`/details/${id}/join`, { userId })

}

export default LeagueService