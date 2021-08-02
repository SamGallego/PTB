import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import TeamService from './../../../services/team.service'
import UploadService from './../../../services/uploads.service'
import './TeamCreate.css'


class EditTeamForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team: undefined,
            owner: undefined,
            canJoin: false,
            loading: false
        }
        this.teamService = new TeamService()
        this.uploadService = new UploadService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            team: {
                ...this.state.team,
                [name]: value
            }
        })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.state.team, "hola Sam")
        this.teamService
            .teamEdit(this.props.match.params.id, this.state.team)
            .then(() => { this.props.history.push(`/team/list`) })
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {
        this.setState({ loading: true })
        console.log("ha entrao")
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadService
            .uploadImage(uploadData)
            .then(response => this.setState({

                team: {
                    ...this.state.team,
                    picture: response.data.secure_url
                },
                loading: false
            }))
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
                    team: response.data.team
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return this.state.team ? (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.team.name} onChange={e => this.handleInputChange(e)} name="name" />
                    </Form.Group>

                    <Form.Group controlId="picture">
                        <Form.Label>Picture</Form.Label>
                        <img src={this.state.team.picture} style={{ width: '200px' }} ></img>
                        <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                    </Form.Group>

                    {this.state.loading === false &&
                        <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit</Button>

                    }

                    {this.state.loading &&
                        <Button className="disabled" style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit</Button>

                    }
                </Form>

            </Container>
        ) : null
    }
}

export default EditTeamForm
