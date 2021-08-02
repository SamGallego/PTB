import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import MatchService from './../../../services/match.service'


class EditMatchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            location: {}
        }
        this.matchService = new MatchService
    }


    loadMatchDetails = () => {
        this.matchService
            .getMatchDetails(this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.match.name,
                    description: response.data.match.description,
                    location: response.data.match.location,
                    date: response.data.match.date
                })
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleInputChangeLocation = e => {
        const { name, value } = e.target
        this.setState({ location: {...this.state.location,
            [name]: value }})
    }


    handleFormSubmit = e => {
        e.preventDefault()
       console.log(this.state)
        this.matchService
            .matchEdit(this.props.match.params.id, this.state.name, this.state.location.city, this.state.location.address, this.state.date, this.state.description)
            .then(() => {this.props.history.push(`/match/details/${this.props.match.params.id}`)})
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadMatchDetails()
    }

   

    render() {
        return (
            <Container>

                <Form onSubmit={ this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={e =>this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" value={this.state.location?.city} onChange={e =>this.handleInputChangeLocation(e)} name="city" />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>address</Form.Label>
                        <Form.Control type="text" value={this.state.location?.address} onChange={e =>this.handleInputChangeLocation(e)} name="address" />
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
