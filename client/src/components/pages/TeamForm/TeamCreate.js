import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import TeamService from '../../../services/team.service'

class TeamForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            picture: '',
            players: [],
            capacity: 7

        }
        this.teamService = new TeamService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }



    handleFormSubmit = e => {
        e.preventDefault()

        this.teamService
            .postTeamCreate(this.state.name, this.state.picture, this.state.players, this.state.capacity)
            .then(this.setState({
                name: '',
                picture: '',
                players: [],
                capacity: 7
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </Form.Group>

                    <Form.Group controlId="picture">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="text" value={this.state.picture} onChange={this.handleInputChange} name="picture" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create Team</Button>

                </Form>

            </Container>
        )
    }
}

export default TeamForm