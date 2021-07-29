import { Component } from 'react'
import { Container } from 'react-bootstrap'
import './IndexPage.css'
import IndexService from './../../../services/match.service'
import MatchCard from '../MatchList/MatchCard'


class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match: this.props.match
        }
        this.indexService = new IndexService()
    }


    render() {
        return (
            <Container>
                <h1>Welcome to PTB!</h1>
                <h1 class='football'> Football is more than a sport, it's a life style</h1>
                <p>Let's play!</p>

                <h2>Upcoming Matches</h2>


            </Container >
        )
    }
}

export default Index
