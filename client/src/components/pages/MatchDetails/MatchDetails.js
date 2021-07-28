import { Component } from 'react'
import MatchService from './../../../services/match.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PlayerCard from './PlayerCardDetails'

class MatchDetails extends Component {

    constructor() {
        super()
        this.state = {
            match: undefined
        }
        this.matchService = new MatchService()

    }


    loadMatchDetails = () => {
        this.matchService
            .getMatchDetails(this.props.match.params.id)
            .then(response => {
                this.setState({
                    match: response.data.match
                })
            })
            .catch(err => console.log(err))
    }

    deleteMatch = () => {
        this.matchService
            .getMatchDelete(this.props.match.params.id)
            .then(() => this.props.history.push('/match/list'))
            .catch(err => console.log(err))
    }

    joinTeamA = () => {

        this.matchService
            .joinTeamA(this.props.match.params.id, this.props.loggedUser._id)
            .then(response => {
                this.setState({
                    match: {
                        ...this.state.match,
                        playersA: [...this.state.match.playersA, this.props.loggedUser]
                    }
                })
            })
            .catch(err => console.log(err))
    }

    joinTeamB = () => {

        this.matchService
            .joinTeamB(this.props.match.params.id, this.props.loggedUser._id)
            .then(response => {
                this.setState({
                    match: {
                        ...this.state.match,
                        playersB: [...this.state.match.playersB, this.props.loggedUser]
                    }
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadMatchDetails()
    }

    render() {

        return (

            (<>
                <Container>

                    {!this.state.match
                        ?
                        <h3>Cargando</h3>
                        :
                        <Row className="justify-content-around">
                            <Col md={3}>
                                <h1>Match: {this.state.match.name}</h1>
                                <p>Date: {this.state.match.date}</p>
                                <p>Capacity: {this.state.match.capacity}</p>
                                <p>Coordinates: {this.state.match.location.coordinates}</p>
                                <p>Description: {this.state.match.description}</p>

                            </Col>

                            <Col md={3}>
                                {this.state.match.playersA.map(elm => <PlayerCard {...elm} />)}
                                <p>Team A Goals:{this.state.match.score.teamA}</p>
                                <Button onClick={() => this.joinTeamA()}>Join Team A</Button>
                            </Col>
                            <Col md={3}>
                                {this.state.match.playersB.map(elm => <PlayerCard {...elm} />)}
                                <p>Team B Goals:{this.state.match.score.teamB}</p>
                                <Button onClick={() => this.joinTeamB()}>Join Team B</Button>
                            </Col>


                            <Link to="/match/list" className="btn btn-dark">Back to List</Link>
                            

                        <Link to={`/match/details/editmatch/${this.props.match.params.id}`}>
                            <Button variant="info" block >Edit Match information</Button>
                        </Link>

                        </Row>

                    }


                </Container>
                <Button onClick={() => this.deleteMatch()} style={{ marginTop: '20px', width: '50%' }} variant="danger" type="submit">Delete Match</Button>

            </>
            )
        )
    }
}

export default MatchDetails