import { Component } from "react"
import React from 'react'
import ProfileService from './../../../services/profile.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            password: '',
            lastname: '',
            nick: '',
            position: '',
            picture: '',
            description: ''

        }
        this.profileService = new ProfileService
    }

    loadProfile = () => {
        this.profileService
            .getOneProfile(this.props.match.params.id)
            .then(responseFromServer => this.setState(responseFromServer.data.profile))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadProfile()
    }


    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}>Picture: <img src={this.state.picture}></img></Col>
                    </Row>
                    <Row> 
                        <Col md={6}>Name: <p>{this.state.name}</p></Col>
                        <Col md={6}>Last name: <p>{this.state.lastname}</p></Col>
                        <Col md={6}>Nick: <p>{this.state.nick}</p></Col>
                        <Col md={6}>Position: <p>{this.state.position}</p></Col>
                        <Col md={6}>Description: <p>{this.state.description}</p></Col>
                    </Row>


                    <Row>
                        <Link to={`/profile/editprofile/${this.props.match.params.id}`}>
                            <Button variant="dark" block >Edit Profile</Button>
                        </Link>
                    </Row>
                </Container>

            </>
        )
    }

}

export default Table