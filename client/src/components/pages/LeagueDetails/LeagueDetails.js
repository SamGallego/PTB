import { Component } from 'react'
import LeagueService from './../../../services/league.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TeamCard from './TeamCard'
import './LeagueDetails.css'



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
            .getLeagueDetails(this.props.match.params.id)
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

    joinLeague = () => {

        this.leagueService
            .joinLeague(this.props.match.params.id, this.props.loggedUser._id)
            .then(response => {
                this.setState({
                    league: {
                        ...this.state.league,
                        League: [...this.state.league.teams, this.props.teams._id]
                    }
                })
            })
            .catch(err => console.log(err))
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
                            <Col md={6}>

                                <h1>{this.state.league.name}</h1>

                                <p>Date: {this.state.league.date}</p>
                                <p>Limit: {this.state.league.limit}</p>
                                <p>Description: {this.state.league.description}</p>

                            </Col>
                            <Col md={6}>
                                <Button className='button' onClick={() => this.joinLeague()}>Join League</Button>

                                <Button className='button' onClick={() => this.deleteLeague()} variant="danger" type="submit">Delete Match</Button>

                                <Link className='button' to="/league/list" className="btn btn-dark">Back to List</Link>
                            </Col>

                            <Row md={6}>
                                {this.state.league.teams.map(elm => <TeamCard key={elm._id} {...elm} />)}
                            </Row>

                        </Row>
                    }

                </Container>
            </>
            )
        )
    }
}

export default LeagueDetails