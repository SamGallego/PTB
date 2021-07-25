import { Container } from 'react-bootstrap'
import Table from './ProfileTable'

const ProfilePage = (props) => {

    return (
        <Container>

            <h1>Profile information</h1>
            <Table match={props.match} />

        </Container>
    )
}

export default ProfilePage