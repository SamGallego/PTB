import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import TeamService from '../../../services/team.service'
import UploadService from './../../../services/uploads.service'
import './TeamCreate.css'

class TeamForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            picture: '',
            players: [],
            capacity: 7,
            loading: true
        }
        this.teamService = new TeamService()
        this.uploadService = new UploadService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }



    handleFormSubmit = e => {
        e.preventDefault()

        this.teamService
            .postTeamCreate(this.state.name, this.state.picture, this.state.players, this.state.capacity, this.props.loggedUser._id)
            .then(() => {
                this.setState({
                    name: '',
                    picture: '',
                    players: [],
                    capacity: 7
                })
                this.props.history.push('/team/list')
            })
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadService
            .uploadImage(uploadData)
            .then(response => this.setState({
                picture: response.data.secure_url,
                loading: false }))
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

                    <Form.Group controlId="picture" className="picture">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="file" onChange={this.handleFileUpload} />
                    </Form.Group>

                    <hr></hr>
                    {this.state.loading === false  && 
                    <Button variant="dark" type="submit">Create Team</Button>
                    
                    }

                    {this.state.loading && 
                    <Button className="disabled" variant="secondary" type="submit">Create Team</Button>
                    
                    }
                    

                </Form>

            </Container>
        )
    }
}

export default TeamForm