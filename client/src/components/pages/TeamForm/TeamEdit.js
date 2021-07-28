import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import TeamService from './../../../services/team.service'


class EditTeamForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            picture: '',
        
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
            .teamEdit(this.props.match.params.id, this.state.name, this.state.picture)
            .then(() => {this.props.history.push(`/team/list`)})
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

                    <Form.Group controlId="picture">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="text" value={this.state.picture} onChange={e =>this.handleInputChange(e)} name="picture" />
                    </Form.Group>
                        
                           <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Edit</Button>
                        

                </Form>

            </Container>
        )
    }
}

export default EditTeamForm
