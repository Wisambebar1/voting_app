import { useUserContext } from "./Context";
import LoginPage from './components/LoginPage';
import VotingPage from './components/VotingPage';
import AdminPage from './components/AdminPage';
const Main_app=()=>{
    const { user, vote, isLoading, view, login, handleVote, changeVote, logout } = useUserContext();
    switch (view) {
        case 'login':
          return <LoginPage login={login} />;
        case 'vote':
          return (
            <VotingPage
              user={user}
              vote={vote}
              handleVote={handleVote}
              changeVote={changeVote}
              isLoading={isLoading}
            />
          );
        case 'admin':
          return <AdminPage user={user} vote={vote} logout={logout} />;
        default:
          return <div>Unknown View</div>;
      }
    return(
        <div>

        </div>
    )
}