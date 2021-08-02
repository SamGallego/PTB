import { Container } from 'react-bootstrap'
import MatchList from './MatchList'

const MatchPage = (props) => {

    return (
        <>
            <Container>
                
                <MatchList match={props.match} />

            </Container>
        </>
    )
}

export default MatchPage