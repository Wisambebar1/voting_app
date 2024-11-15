import './App.css'
function App() {
  const [user, setUser] = useState(null);
  const [vote, setVote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState('login');
  const login = () => {
    setUser('User');
    setView('vote');
  };
  const handleVote = (voteOption) => {
    setIsLoading(true);
    setTimeout(() => {
      setVote(voteOption);
      setIsLoading(false);
    }, 1000);
  };
  const changeVote = () => {
    setVote(null);
  };
  return (
    <div>
    </div>
  )
}

export default App
