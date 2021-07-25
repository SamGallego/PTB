import { Col, Card, Button } from "react-bootstrap"


const PlayerCard = ({ name, picture, position }) => {
    return (
        <>
            <Col md={6}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{position}</Card.Text>
                        <Button variant="primary">Profile</Button>
                    </Card.Body>
                </Card>
            </Col>


        </>
    )
}
export default PlayerCard