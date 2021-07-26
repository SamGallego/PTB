import { Component } from 'react'
import MatchService from './../../../services/match.service'
import MatchCard from './MatchCard'
import { Container} from 'react-bootstrap'

class MatchList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match: this.props.match
        }
        this.MatchService = new MatchService()
    }


    loadMatch = () => {
        this.MatchService
            .getMatchList(this.props.match.params)
            .then(response => this.setState(response.data))
            .catch(err => console.log(err))
    }
    
    componentDidMount = () => {
        this.loadMatch()
    }


    render() {

        return (

            (<>
                <Container>
                    <p>List</p>
                    {this.state.match.length ? this.state.match.map(elm => <MatchCard  {...elm}/>) : "loading bish"}
                </Container>
            </>
            )
        )
    }
}

export default MatchList