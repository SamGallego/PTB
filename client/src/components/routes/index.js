import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Profile from '../pages/Profile/ProfilePage'
import EditProfileForm from '../pages/Profile/EditProfile'
import Index from '../pages/Index/IndexPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import MatchPage from '../pages/MatchList/MatchPage'
import MatchDetails from '../pages/MatchDetails/MatchDetails'
import MatchForm from '../pages/MatchForm/MatchCreate'
import EditMatchForm from '../pages/MatchForm/EditMatch'
import LeagueList from '../pages/LeagueList/LeagueList'
import LeagueDetails from '../pages/LeagueDetails/LeagueDetails'
import LeagueCreate from '../pages/LeagueForm/LeagueCreate'
import TeamList from '../pages/TeamList/TeamList'
import TeamDetails from '../pages/TeamDetails/TeamDetails'
import TeamCreate from '../pages/TeamForm/TeamCreate'
import EditTeamForm from '../pages/TeamForm/TeamEdit'
import Table from '../pages/LeagueTable/TablePage'




const Routes = ({ storeUser, loggedUser }) => {

    return (

        <Switch>
            <Route path="/" exact render={() => <Index />} />
            <Route path="/login" exact render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/signup" exact render={props => <Signup {...props} />} />
            <Route path="/profile/editprofile/:id" exact render={props => loggedUser ? <EditProfileForm {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/profile/:id" exact render={props => loggedUser ? <Profile {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/match/list" exact render={props => loggedUser ? <MatchPage {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/match/details/editmatch/:id" exact render={props => loggedUser ? <EditMatchForm {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/match/details/:id" exact render={props => loggedUser ? <MatchDetails {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/match/create" exact render={props => loggedUser ? <MatchForm {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/league/list" exact render={props => loggedUser ? <LeagueList {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/league/details/:id" exact render={props => loggedUser ? <LeagueDetails {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/league/create" exact render={props => loggedUser ? <LeagueCreate {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/league/:id/table" exact render={props => loggedUser ? <Table {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/team/list" exact render={props => loggedUser ? <TeamList {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/team/details/editteam/:id" exact render={props => loggedUser ? <EditTeamForm {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/team/details/:id" exact render={props => loggedUser ? <TeamDetails {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/team/create" exact render={props => loggedUser ? <TeamCreate {...props} loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            

        </Switch>
    )
}

export default Routes