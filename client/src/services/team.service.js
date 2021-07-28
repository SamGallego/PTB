import axios from 'axios'

class TeamService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/team',
            withCredentials: true
        })
    }

    getTeamCreate = () => this.app.get('/create')
    postTeamCreate = (name, picture, players, capacity, owner) => this.app.post('/create', { name, picture, players, capacity, owner})
    getTeamList = () => this.app.get('/list')
    getTeamDetails = id => this.app.get(`/details/${id}`)
    teamEdit = (id, name, picture, players, capacity) => this.app.put(`/details/${id}`, name, picture, players, capacity)
    getTeamDelete = id => this.app.delete(`/details/${id}`)
    joinTeam = (id, userId) => this.app.put(`/details/${id}/join`, { userId })


}

export default TeamService