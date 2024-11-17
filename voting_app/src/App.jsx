import './App.css';
import UserProvider from './Components/Context';
import Main_app from './Components/Main_app';

function App() {
  return (
    <div>
      <UserProvider>
        <Main_app />
      </UserProvider>
    </div>
  );
}

export default App;
