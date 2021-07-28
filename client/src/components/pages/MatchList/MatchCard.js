import { Container, Row, Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MatchCard = ( { name, capacity, _id}) => {

    return (
        <Container>
            <Row>
                <Col md={6}><h5>{name}</h5></Col>
                <Col md={6}><p>{capacity}</p></Col>
                <Link to={`/match/details/${_id}`}>
                    <Button variant="dark" block >Ver detalles</Button>
                </Link>
            </Row>
        </Container >
    )
}

export default MatchCard