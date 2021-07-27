import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Profile from '../pages/Profile/ProfilePage'
import Index from '../pages/Index/IndexPage'
import { Switch, Route } from 'react-router-dom'
import MatchPage from '../pages/MatchList/MatchPage'
import MatchDetails from '../pages/MatchDetails/MatchDetails'
import MatchForm from '../pages/MatchForm/MatchCreate'
import LeagueList from '../pages/LeagueList/LeagueList'
import LeagueDetails from '../pages/LeagueDetails/LeagueDetails'
import LeagueCreate from '../pages/LeagueForm/LeagueCreate'
import TeamList from '../pages/TeamList/TeamList'
import TeamDetails from '../pages/TeamDetails/TeamDetails'
import TeamCreate from '../pages/TeamForm/TeamCreate'
import Table from '../pages/LeagueTable/TablePage'



const Routes = ({ storeUser, loggedUser }) => {
    return (

        <Switch>
            <Route path="/login" exact render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/signup" exact render={props => <Signup {...props} />} />
            <Route path="/profile/:id" exact render={props => <Profile {...props} />} />
            <Route path="/" exact render={() => <Index />} />
            <Route path="/match/list" exact render={props => <MatchPage {...props} />} />
            <Route path="/match/details/:id" exact render={props => <MatchDetails {...props} loggedUser={loggedUser} />} />
            <Route path="/match/create" exact render={props => <MatchForm {...props} loggedUser={loggedUser} />}  />
            <Route path="/league/list" exact render={props => <LeagueList {...props} />} />
            <Route path="/league/details/:id" exact render={props => <LeagueDetails {...props} />} />
            <Route path="/league/create" exact render={props => <LeagueCreate {...props} />} />
            <Route path="/league/:id/table" exact render={props => <Table {...props} />} />
            <Route path="/team/list" exact render={props => <TeamList {...props} />} />
            <Route path="/team/details/:id" exact render={props => <TeamDetails {...props} />} />
            <Route path="/team/create" exact render={props => <TeamCreate {...props} loggedUser={loggedUser} />} />

        </Switch>
    )
}

export default Routes