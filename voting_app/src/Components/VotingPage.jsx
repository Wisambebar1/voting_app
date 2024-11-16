import { useUserContext } from '../context';
import Spinner from './Spinner';

const VotingPage = () => {
  const { user, vote, handleVote, changeVote, isLoading } = useUserContext();

  return (
    <div>
      <h1>Welcome, {user}</h1>
      <h2>Vote for your favorite animal</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {['Cats', 'Dogs', 'Cows', 'Lions'].map((option) => (
            <button key={option} onClick={() => handleVote(option)}>
              {option}
            </button>
          ))}
          {vote && (
            <>
              <h3>Your vote: {vote}</h3>
              <button onClick={changeVote}>Change Vote</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VotingPage