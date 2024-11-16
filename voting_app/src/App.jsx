import './App.css'
import { UserContext } from './Components/Context'
import Main_app from "./Components/Main_app"
function App() {
  return (
    <div>
      <UserContext.Provider>
        <Main_app/>
      </UserContext.Provider>
    </div>
  )
}

export default App
