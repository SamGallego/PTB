import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './routes'
import AuthService from '../services/auth.service'
import Navigation from './layout/Navigation/Navigation'
import { Component } from 'react'
import { Spinner } from 'react-bootstrap'





class App extends Component {

    constructor() {
        super()
        this.state = { loggedUser: undefined }
        this.authService = new AuthService()
    }

    storeUser = loggedUser => this.setState({ loggedUser })

    fetchUser = () => {
        this.authService
            .isLoggedIn()
            .then(theLoggedUser => this.storeUser(theLoggedUser.data))
            .catch(() => this.storeUser(null))
    }

    logout = ()=> {
        this.setState({loggedUser: null})
        this.authService.logout()
    }

    componentDidMount = () => this.fetchUser()

    render() {

        return (
            this.state.loggedUser === undefined 
            ?
                <Spinner/> 
            :(
            <>
                <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

                <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

                

            </>)
        )
    }
}

export default App;
