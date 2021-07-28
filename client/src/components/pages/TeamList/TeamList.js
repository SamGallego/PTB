import { Component } from 'react'
import TeamService from './../../../services/team.service'
import { Container} from 'react-bootstrap'
import TeamCard from '../LeagueDetails/TeamCard'

class TeamList extends Component {

    constructor() {
        super()
        this.state = {
            team: []
        }
        this.teamService = new TeamService()
    }


    loadTeam = () => {
        this.teamService
            .getTeamList()
            .then(response =>this.setState(response.data))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadTeam()
    }


    render() {

        return (

            (<>
                <Container>
                    <p>Team List</p>
                    {this.state.team.length ? this.state.team.map(elm => <TeamCard  {...elm}/>) : "loading bish"}
                </Container>
            </>
            )
        )
    }
}

export default TeamList