import { Component } from "react"
import React from 'react'
import ProfileService from './../../../services/profile.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProfileTable.css'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            lastname: '',
            nick: '',
            position: '',
            picture: '',
            description: '',
            canEdit: false

        }
        this.profileService = new ProfileService
    }

    loadProfile = () => {
        this.profileService
            .getOneProfile(this.props.match.params.id)
            .then(responseFromServer => {

                this.setState({
                    name: responseFromServer.data.profile.name,
                    lastname: responseFromServer.data.profile.lastname,
                    nick: responseFromServer.data.profile.nick,
                    position: responseFromServer.data.profile.position,
                    picture: responseFromServer.data.profile.picture,
                    description: responseFromServer.data.profile.description,
                    canEdit: this.canEdit(responseFromServer.data.profile)
                })
            })
            .catch(err => console.log(err))
    }

    canEdit = (perfil) => {
        return perfil._id === this.props.loggedUser.id
    }

    componentDidMount = () => {
        this.loadProfile()
    }


    render() {
        return (
            <>
                <Container>

                    <Row>

                        <Col md={4}>
                            <div>
                                <p>Name: {this.state.name}</p>
                                <p>Last name: {this.state.lastname}</p>
                                <p>Nick: {this.state.nick}</p>
                                <p>Position: {this.state.position}</p>
                                <p>Description: {this.state.description}</p>
                                <Link to={`/profile/editprofile/${this.props.match.params.id}`}>
                                    {this.state.canEdit || (
                                        <Button variant="dark"  >Edit Profile</Button>
                                    )}
                                </Link>
                            </div>
                        </Col>
                        <Col md={8}>
                            <img className='img' src={this.state.picture}></img>
                        </Col>

                    </Row>


                </Container>

            </>
        )
    }

}

export default Table