import { Component } from 'react'
import LeagueService from './../../../services/league.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TeamCard from './TeamCard'



class LeagueDetails extends Component {

    constructor() {
        super()
        this.state = {
            league: ''
        }
        this.leagueService = new LeagueService()
    }


    loadLeagueDetails = () => {
        this.leagueService
            .getLeagueDetails(this.props.match.params.id) //Preguntar a Teo por el props, este es padre, porque nos sirve props?
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }

    deleteLeague = () => {
        this.leagueService
            .getLeagueDelete(this.props.match.params.id)
            .then(() => this.props.history.push('/league/list'))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadLeagueDetails()
    }


    render() {

        return (

            (<>
                <Container>

                    {!this.state.league
                        ?
                        <h3>Cargando</h3>
                        :
                        <Row className="justify-content-around">
                            <Col md={3}>

                                <h1>{this.state.league.name}</h1>

                                <p>Date: {this.state.league.date}</p>
                                <p>Limit: {this.state.league.limit}</p>
                                {/* <p>Coordinates: {this.state.league.location.coordinates}</p> */}
                                <p>Description: {this.state.league.description}</p>

                                <Row>
                                    {this.state.league.teams.map(elm => <TeamCard key={elm._id} {...elm} />)}
                                </Row>

                            </Col>

                            <Button onClick={() => this.deleteLeague()} style={{ marginTop: '20px', width: '50%' }} variant="danger" type="submit">Delete Match</Button>

                            <Link to="/league/list" className="btn btn-dark">Back to List</Link>


                        </Row>
                    }

                </Container>
            </>
            )
        )
    }
}

export default LeagueDetails