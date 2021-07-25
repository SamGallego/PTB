import { Col, Card, Button } from "react-bootstrap"

const TeamCard = ({ name, picture, players, capacity }) => {
    return (
        <>
            <Col md={6}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{players}</Card.Text>
                        <Card.Text>{capacity}</Card.Text>
                        {/* <Link to={`/team/details/${_id}`}>
                            <Button variant="dark" block >Team Details</Button>
                        </Link> */}
                    </Card.Body>
                </Card>
            </Col>


        </>
    )
}
export default TeamCard