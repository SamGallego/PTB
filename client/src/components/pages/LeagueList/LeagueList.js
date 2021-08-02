import { Container } from 'react-bootstrap'
import LeagueService from './../../../services/league.service'
import LeagueCard from './LeagueCard'
import { Component } from 'react'
import { Row } from "react-bootstrap"
import './LeagueList.css'


class LeagueList extends Component {

    constructor() {
        super()
        this.state = {
            league: ''
        }
        this.leagueService = new LeagueService()
    }


    loadList = () => {
        this.leagueService
            .getLeagueList()
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadList()
    }
    render() {
        return (
            <>
                <Container>
                    <h1>Leagues</h1>

                    <Row>
                        {this.state.league.length ? this.state.league.map(elm => <LeagueCard  {...elm} />) : "loading Yuki Cup"}
                        <LeagueCard />
                    </Row>


                </Container>
            </>
        )
    }
}

export default LeagueList