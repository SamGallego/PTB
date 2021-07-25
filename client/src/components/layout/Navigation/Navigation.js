import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import AuthService from '../../../services/auth.service'

const Navigation = ({ storeUser, loggedUser }) => {

    const authserVice = new AuthService()

    const logout = () => {
        authserVice
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
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

                                <NavDropdown.Item href="/team/create">Create</NavDropdown.Item>
                                <NavDropdown.Item href="/team/list">Join</NavDropdown.Item>

                            </NavDropdown>


                            <NavDropdown title="Match" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="/match/create">Create</NavDropdown.Item>
                                <NavDropdown.Item href="/match/list">Join</NavDropdown.Item>

                            </NavDropdown>


                            <NavDropdown title="League" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/league/create">Create</NavDropdown.Item>
                                <NavDropdown.Item href="/league/list">Join</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Details</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        :
                        ''
                    }

                    <Nav>
                        {loggedUser
                            ?
                            <Nav.Link href={`/profile/${loggedUser._id}`}>Profile</Nav.Link>
                            :
                            ''
                        }
                        <NavDropdown title="Account" id="collasible-nav-dropdown">

                            <>

                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>

                            </>

                            <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation