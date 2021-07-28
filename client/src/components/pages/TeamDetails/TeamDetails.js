import { Component } from 'react'
import TeamService from './../../../services/team.service'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TeamCard from '../LeagueDetails/TeamCard'



class TeamDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team: {},
            owner: false
        }
        this.teamService = new TeamService()
    }


    loadTeamDetails = () => {
        this.teamService
            .getTeamDetails(this.props.match.params.id)
            .then(response => {
                this.setState({
                    team: response.data.team,
                    owner: this.checkOwner(response.data.team)
                })
            })
            .catch(err => console.log(err))
    }


    checkOwner = (team) => {
        
        return team.owner == this.props.loggedUser._id
    }


    deleteTeam = () => {
        this.teamService
            .getTeamDelete(this.props.match.params.id)
            .then(() => {
                this.props.history.push('/team/list')
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadTeamDetails()

    }

    joinTeam = () => {

        this.teamService
            .joinTeam(this.props.match.params.id, this.props.loggedUser._id)
            .then(response => {
                this.setState({
                    team: {
                        ...this.state.team,
                        players: [...this.state.match.players, this.props.loggedUser]
                    }
                })
            })
            .catch(err => console.log(err))
    }


    render() {

        return (

            (<>
                <Container>

                    <Row className="justify-content-around">
                        <Col md={4}>
                            <h1>{this.state.team.name}</h1>
                            <Card.Img variant="top" src={this.state.team.picture} />
                            <p>Capacity: {this.state.team.capacity}</p>

                            <Button onClick={() => this.joinTeam()}>Join!</Button>
                        </Col>
                        <Col md={4}>
                            <h2>Players:</h2>
                            <p>{this.state.team.players}</p>
                        </Col>
                        {this.state.owner && (
                            <Button onClick={() => this.deleteTeam()} className="btn btn-danger" variant="danger" type="submit">Delete Team</Button>

                        )}
                        <Link to="/team/list" className="btn btn-dark">Back to List</Link>

                    </Row>
                </Container>
            </>
            )
        )
    }
}

export default TeamDetails