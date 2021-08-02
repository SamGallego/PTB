import { Container, Row, Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MatchCard.css'


const MatchCard = ( { name, capacity, _id, playersA, playersB}) => {

    return (
        <Container>
            <Row>
                <Col className='col' md={4}><h5>{name}</h5></Col>
                <Col className='col' md={4}><p>{playersA.length + playersB.length}/{capacity}</p></Col>
                <Col className='col' md={4}>
                <Link to={`/match/details/${_id}`}>
                    <Button variant="dark" block >Ver detalles</Button>
                </Link>                
                </Col>
            </Row>
        </Container >
    )
}

export default MatchCard