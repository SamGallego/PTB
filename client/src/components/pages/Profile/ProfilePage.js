import { Container } from 'react-bootstrap'
import Table from './ProfileTable'

const ProfilePage = (props) => {

    return (
        <Container>

            <h1>Profile</h1>
            <Table match={props.match} loggedUser={props.loggedUser}/>

        </Container>
    )
}

export default ProfilePage