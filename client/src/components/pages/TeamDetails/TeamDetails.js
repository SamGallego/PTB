import { Component } from 'react'
import TeamService from './../../../services/team.service'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TeamCard from '../LeagueDetails/TeamCard'



class TeamDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team: {}
        }
        this.teamService = new TeamService()
    }


    loadTeamDetails = () => {
        this.teamService
            .getTeamDetails(this.props.match.params.id)
            .then(response => { this.setState({
                    team: response.data.team
                })
            })
            .catch(err => console.log(err))
        }
        
    deleteTeam = () => {
        this.teamService
            .getTeamDelete(this.props.match.params.id)
            .then(() => {this.props.history.push('/team/list')
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadTeamDetails()
    }


    render() {

        return (

            (<>
                <Container>

                    <Row className="justify-content-around">
                        <Col md={3}>
                            <h1>{this.state.team.name}</h1>
                            <Card.Img variant="top" src={this.state.team.picture} />
                            <p>Capacity: {this.state.team.capacity}</p>
                            <p>Players: {this.state.team.players}</p>
                        </Col>


                        <Link to="/team/list" className="btn btn-dark">Back to List</Link>


                    </Row>

                    <Link to={`/team/details/editteam/${this.props.match.params.id}`}>
                            <Button variant="info" block >Edit Team information</Button>
                    </Link>
                    <Button onClick={() => this.deleteTeam()} variant="danger" type="submit">Delete Team</Button>
                </Container>
            </>
            )
        )
    }
}

export default TeamDetails