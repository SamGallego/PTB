import { Component } from 'react'
import MatchService from './../../../services/match.service'
import { Container, Row, Col } from 'react-bootstrap'
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
                this.setState(
                    this.state = {
                        match: response.data.match
                    }
                )
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
                            </Col>
                            <Col md={3}>
                                {this.state.match.playersB.map(elm => <PlayerCard {...elm} />)}
                                <p>Team B Goals:{this.state.match.score.teamB}</p>
                            </Col>


                            <Link to="/match/list" className="btn btn-dark">Back to List</Link>


                        </Row>
                    }

                </Container>
            </>
            )
        )
    }
}

export default MatchDetails