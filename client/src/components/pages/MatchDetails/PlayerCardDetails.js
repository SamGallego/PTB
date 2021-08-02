import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './PlayerCardDetails.css'

const PlayerCard = ({ name, picture, position, _id }) => {
    return (
        <>
            <Col md={6} className='players'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{position}</Card.Text>
                        <Link to={`/profile/${_id}`}>
                        <Button variant="primary">Profile</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>


        </>
    )
}
export default PlayerCard