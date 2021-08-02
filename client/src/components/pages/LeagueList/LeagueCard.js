import { Col, Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './LeagueCard.css'

const LeagueCard = ({ name, limit, _id, description }) => {
    return (
        <>

            <Col md={4} className='col'>

                <Card className="League-card">
                    <Card.Body>
                        <Card.Title><h2>{name}</h2></Card.Title>
                        <Col md={12}><p>Teams limit:{limit}</p></Col>
                        <Col md={12}><p>Description:{description}</p></Col>
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