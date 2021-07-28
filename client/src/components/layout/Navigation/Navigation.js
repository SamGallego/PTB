import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Navigation.css'

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
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src= 'football.png'
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>


                <Navbar.Toggle bg="light" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse bg="light" id="responsive-navbar-nav">

                    {loggedUser
                        ?
                        <Nav className="me-auto">

                            <NavDropdown title="Team" id="collasible-nav-dropdown" >

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
                            {!loggedUser
                                ?
                            <>

                                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>

                            </>
                                :
                                ''
                            }

                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withRouter(Navigation)