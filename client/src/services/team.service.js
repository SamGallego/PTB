import axios from 'axios'

class TeamService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/team',
            withCredentials: true
        })
    }

    getTeamCreate = () => this.app.get('/create')
    postTeamCreate = (name, picture, players, capacity) => this.app.post('/create', { name, picture, players, capacity})
    getTeamList = () => this.app.get('/list')
    getTeamDetails = id => this.app.get(`/details/${id}`)
    getTeamEdit = id => this.app.post(`/details/${id}`)
    getTeamDelete = id => this.app.post(`/details/${id}`)

}

export default TeamService