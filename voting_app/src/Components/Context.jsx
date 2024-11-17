import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
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

  const logout = () => {
    setUser(null);
    setVote(null);
    setView('login');
  };

  return (
    <UserContext.Provider value={{ user, vote, isLoading, view, login, handleVote, changeVote, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
