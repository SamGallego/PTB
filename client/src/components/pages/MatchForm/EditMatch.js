import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import MatchService from './../../../services/match.service'


class EditMatchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: '',
            nick: '',
            position: '',
            description: ''
        }
        this.matchService = new MatchService
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()
       
        this.matchService
            .matchEdit(this.props.match.params.id, this.state.name, this.state.lat, this.state.lng, this.state.date, this.state.description)
            .then(() => {this.props.history.push(`/match/details/${this.props.match.params.id}`)})
            .catch(err => console.log(err))
    }

   

    render() {
        return (
            <Container>

                <Form onSubmit={ this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={e =>this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="lat">
                        <Form.Label>Lat</Form.Label>
                        <Form.Control type="text" value={this.state.lat} onChange={e =>this.handleInputChange(e)} name="lat" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>lng</Form.Label>
                        <Form.Control type="text" value={this.state.lng} onChange={e =>this.handleInputChange(e)} name="lng" />
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>date</Form.Label>
                        <Form.Control type="datetime-local" value={this.state.date} onChange={e =>this.handleInputChange(e)} name="date" />
                    </Form.Group>

                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={e =>this.handleInputChange(e)} name="description" />
                    </Form.Group>

                        
                           <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit</Button>
                        

                </Form>

            </Container>
        )
    }
}

export default EditMatchForm
