import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import ProfileService from './../../../services/profile.service'
import UploadService from './../../../services/uploads.service'


class EditProfileForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.loggedUser.name,
            lastname: this.props.loggedUser.lastname,
            nick: this.props.loggedUser.nick,
            position: this.props.loggedUser.position,
            picture: this.props.loggedUser.picture,
            description: this.props.loggedUser.description
        }
        this.profileService = new ProfileService
        this.uploadService = new UploadService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()
       
        this.profileService
            .postEditProfile(this.props.match.params.id, this.state.name, this.state.lastname, this.state.nick, this.state.position, this.state.picture, this.state.description)
            .then(() => {this.props.history.push(`/profile/${this.props.match.params.id}`)})
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadService
            .uploadImage(uploadData)
            .then(response => this.setState({ picture: response.data.secure_url }))
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

                    <Form.Group controlId="lastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" value={this.state.lastname} onChange={e =>this.handleInputChange(e)} name="lastname" />
                    </Form.Group>

                    <Form.Group controlId="Nick">
                        <Form.Label>Nick</Form.Label>
                        <Form.Control type="text" value={this.state.nick} onChange={e =>this.handleInputChange(e)} name="nick" />
                    </Form.Group>

                    <Form.Group controlId="Position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control name="position" onChange={e =>this.handleInputChange(e)} as="select" aria-label="Default select example">
                                <option value="GK">GK</option>
                                <option value="DF">DF</option>
                                <option value="MD">MD</option>
                                <option value="ST">ST</option>
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Picture">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
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

export default EditProfileForm
