import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import TeamService from './../../../services/team.service'
import UploadService from './../../../services/uploads.service'


class EditTeamForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
          team: undefined,
          owner: undefined,
          canJoin: false
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
            .teamEdit(this.props.match.params.id, this.state.name, this.state.picture)
            .then(() => { this.props.history.push(`/team/list`) })
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


    componentDidMount = () => {
        this.loadTeamDetails()

    }

    loadTeamDetails = () => {
        this.teamService
            .getTeamDetails(this.props.match.params.id)
            .then(response => {
                console.log(response)
                this.setState({
                    team: response.data.team,
                    // owner: this.checkOwner(response.data.team),
                    // canJoin: this.canJoin(response.data.team)
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return this.state.team ?  (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.team.name} onChange={e => this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="picture">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="file" onChange={e => this.handleFileUpload} />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit</Button>


                </Form>

            </Container>
        ) : null
    }
}

export default EditTeamForm
