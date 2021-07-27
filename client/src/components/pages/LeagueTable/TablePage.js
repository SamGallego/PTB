import { Component } from 'react'
import LeagueService from './../../../services/league.service'
import { Container } from 'react-bootstrap'




class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameLeague: '',
            nameTeam: '',
            points: ''
        }
        this.leagueService = new LeagueService()

    }


    loadTable = () => {
        this.leagueService
            .getTable(this.props.match.params.id)
            .then(response => {

                console.log("===============", response)
                this.setState({
                    nameLeague: response.data.table.name,
                    nameTeam: response.data.table.matches[0].name,
                    points: response.data.table.matches[0].score.teamA
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadTable()
    }


    render() {

        return (
            <>
                <Container>
                    <h1>Table</h1>
                    <p>{this.state.nameLeague}</p>
                    <p>{this.state.nameTeam}</p>
                    <p>{this.state.points}</p>
                </Container>
            </>

        )
    }

}

export default Table