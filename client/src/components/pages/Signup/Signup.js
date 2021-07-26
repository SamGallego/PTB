import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from './../../../services/auth.service'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            password: '',
            lastname: '',
            nick: '',
            position: '',
            description: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {

        e.preventDefault()

        const { name, password } = this.state

        this.authService
            .signup(name, password)
            .then(() => this.props.history.push('/login'))          // Redirect with RRD props
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Signup</h1>

                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                            </Form.Group>

                            <Form.Group controlId="lastname">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" value={this.state.lastname} onChange={this.handleInputChange} name="lastname" />
                            </Form.Group>

                            <Form.Group controlId="nick">
                                <Form.Label>Nick</Form.Label>
                                <Form.Control type="text" value={this.state.nick} onChange={this.handleInputChange} name="nick" />
                            </Form.Group>

                            <Form.Label>Position</Form.Label>
                            <Form.Control as="select" aria-label="Default select example">
                                <option value={this.state.position}>GK</option>
                                <option value={this.state.position}>DF</option>
                                <option value={this.state.position}>MD</option>
                                <option value={this.state.position}>ST</option>
                            </Form.Control>

                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Signup</Button>

                        </Form>

                        <hr></hr>

                        <Link to="/">
                            <Button variant="dark">Back</Button>
                        </Link>

                    </Col>
                </Row>

            </Container >

        )
    }
}


export default Signup