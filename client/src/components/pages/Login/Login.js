import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from '../../../services/auth.service'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
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
            .login(name, password)
            .then(loggedUserfromServer => {
                this.props.storeUser(loggedUserfromServer.data)
                this.props.history.push('/')         // Redirect with RRD props
            })
            .catch(err => console.log(err))
    }



    render() {
        return (

            <Container>

                <Row>

                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>Login</h1>

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

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="dark" type="submit">Access</Button>

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


export default Login