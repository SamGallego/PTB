import { Container } from 'react-bootstrap'
import MatchList from './MatchList'

const MatchPage = (props) => {

    return (
        <>
            <Container>
                <h1>MatchPage</h1>

                <MatchList match={props.match} />

            </Container>
        </>
    )
}

export default MatchPage