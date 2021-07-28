import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const Navigation = ({ storeUser, loggedUser, history }) => {

    const authserVice = new AuthService()

    const logout = () => {
        authserVice
            .logout()
            .then(() =>{
                storeUser(null)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://i.gyazo.com/0d2e1a98576e1e85e337f3364511271b.png"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {loggedUser
                        ?
                        <Nav className="me-auto">

                            <NavDropdown title="Team" id="collasible-nav-dropdown">

                                <NavDropdown.Item as={Link} to="/team/create">Create</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/team/list">Join</NavDropdown.Item>

                            </NavDropdown>


                            <NavDropdown title="Match" id="collasible-nav-dropdown">

                                <NavDropdown.Item as={Link} to="/match/create">Create</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/match/list">Join</NavDropdown.Item>

                            </NavDropdown>


                            <NavDropdown title="League" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/league/create">Create</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/league/list">Join</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.3">Details</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        :
                        ''
                    }

                    <Nav>
                        {loggedUser
                            ?
                            <Nav.Link as={Link} to={`/profile/${loggedUser._id}`}>Profile</Nav.Link>
                            :
                            ''
                        }
                        <NavDropdown title="Account" id="collasible-nav-dropdown">

                            <>

                                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>

                            </>

                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withRouter(Navigation)