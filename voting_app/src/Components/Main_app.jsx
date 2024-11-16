import { useUserContext } from "./Context";
import LoginPage from './components/LoginPage';
import VotingPage from './components/VotingPage';
import AdminPage from './components/AdminPage';
const Main_app=()=>{
    const { user, vote, isLoading, view, login, handleVote, changeVote, logout } = useUserContext();
    return(
        <div>

        </div>
    )
}