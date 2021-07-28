import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const TeamCard = ({ name, picture, players, capacity, _id }) => {
    return (
        <>
            <Col md={4}>
                <Card >
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {players.map(elm => <Card.Text>{elm.name}</Card.Text>)}
                        <Card.Text>{players.length}/{capacity}</Card.Text>
                        <Link to={`/team/details/${_id}`}>
                            <Button variant="dark" block >Team Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>


        </>
    )
}
export default TeamCard