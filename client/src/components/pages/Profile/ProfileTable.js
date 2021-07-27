import { Component } from "react"
import React from 'react'
import ProfileService from './../../../services/profile.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: this.props.name,
            password: this.props.password,
            lastname: this.props.lastname,
            nick: this.props.nick,
            position: this.props.position,
            picture: this.props.picture,
            description: this.props.description

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
                        <Col md={12}>Picture: <img src={ this.state.picture }></img></Col>
                        <Col md={12}>Name: <p>{this.state.name}</p></Col>
                        <Col md={12}>Last name: <p>{this.state.lastname}</p></Col>
                        <Col md={12}>Nick: <p>{this.state.nick}</p></Col>
                        <Col md={12}>Position: <p>{this.state.position}</p></Col>
                        <Col md={12}>Description: <p>{this.state.description}</p></Col>
                    </Row>
                    <Row>
                        <Link >Edit</Link>
                    </Row>
                </Container>

            </>
        )
    }

}

export default Table