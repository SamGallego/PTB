import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const LeagueCard = ({ name, limit, _id }) => {
    return (
        <>

            <Col md={4}>

                <Card className="League-card">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Col md={6}><p>{limit}</p></Col>
                        <Link to={`/league/details/${_id}`}>
                            <Button variant="dark" block >Details</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </Col>
        </>
    )
}

export default LeagueCard