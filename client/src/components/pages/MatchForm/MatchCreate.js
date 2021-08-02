import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import MatchService from '../../../services/match.service'

class MatchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            city: '',
            address: '',
            date: '',
            description: ''

        }
        {console.log(this.props)}
        this.matchService = new MatchService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.matchService
            .postMatchCreate(this.state.name, this.state.city, this.state.address, this.state.date, this.state.description, this.props.loggedUser._id)
            .then(() => {
                this.setState({
                name: '',
                city: '',
                address: '',
                date: '',
                description: '',
                owner: this.props.loggedUser._id
            });
            this.props.history.push('/match/list')
            })
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

                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={this.state.city} onChange={this.handleInputChange} name="city" />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.handleInputChange} name="address"/>
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="datetime-local" value={this.state.date} onChange={this.handleInputChange} name="date" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="description" value={this.state.description} onChange={this.handleInputChange} name="description" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Create Match</Button>

                </Form>

            </Container>
        )
    }
}

export default MatchForm
