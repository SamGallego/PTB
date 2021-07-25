import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import LeagueService from '../../../services/league.service'

class LeagueForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            // teams: [],
            // matches: [],
            lat: '',
            lng: '',
            date: '',
            description: '',
            limit: ''

        }
        this.leagueService = new LeagueService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }



    handleFormSubmit = e => {
        e.preventDefault()

        this.leagueService
            .postLeagueCreate(this.state.name, this.state.lat, this.state.lng, this.state.date, this.state.description)
            .then(this.setState({
                name: '',
                lat: '',
                lng: '',
                date: '',
                description: '',
                limit: ''
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

                    <Form.Group controlId="lat">
                        <Form.Label>Lat</Form.Label>
                        <Form.Control type="text" value={this.state.lat} onChange={this.handleInputChange} name="lat" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Lng</Form.Label>
                        <Form.Control type="text" value={this.state.lng} onChange={this.handleInputChange} name="lng" />
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="datetime-local" value={this.state.date} onChange={this.handleInputChange} name="date" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>

                    <Form.Group controlId="limit">
                        <Form.Label>Limit</Form.Label>
                        <Form.Control type="number" value={this.state.limit} onChange={this.handleInputChange} name="limit" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create League</Button>

                </Form>

            </Container>
        )
    }
}

export default LeagueForm