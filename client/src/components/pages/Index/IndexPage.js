import { Component } from 'react'
import './IndexPage.css'
import IndexService from './../../../services/match.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            match: this.props.match
        }
        this.indexService = new IndexService()
    }


    render() {
        return (
            <Container >
                <h1 class='football'> Football is more than a sport, it's a life style.</h1>

                <Row>
                    <Col md={4} className='center'>
                        <h2><img src='/icon/soccer-player.png'></img></h2>
                        <hr></hr>
                        <p>Create your profile.</p>
                    </Col>
                    <Col md={4} className='center'>
                        <h2><img src='/icon/football-players.png'></img></h2>
                        <hr></hr>
                        <p>Play with your friends and meet new friends! :D</p>
                    </Col>
                    <Col md={4} className='center'>
                        <h2><img src='/icon/football-award.png'></img></h2>
                        <hr></hr>
                        <p>Compite and be the new champion.</p>
                    </Col>

                </Row>

                {/* <hr></hr> */}
                <Link className='play' to={`/signup`}>&#9917;   Let's play!   &#9917;</Link>

            </Container >
        )
    }
}

export default Index
