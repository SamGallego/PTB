import { Component } from 'react'
import TeamService from './../../../services/team.service'
import { Container, Row } from 'react-bootstrap'
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
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadTeam()
    }


    render() {

        return (

            (<>
                <Container>
                    <h1>Team List</h1>
                    <Row md={4}>
                        {this.state.team.length ? this.state.team.map(elm => <TeamCard  {...elm} />) : "loading bish"}

                    </Row>

                </Container>
            </>
            )
        )
    }
}

export default TeamList