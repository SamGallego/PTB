import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import ProfileService from './../../../services/profile.service'

class EditProfileForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            
    
        }
      
        this.profileService = new ProfileService
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.profileService
            .postEditProfile()
            .then(() => {})
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


                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit</Button>

                </Form>

            </Container>
        )
    }
}

export default EditProfileForm
