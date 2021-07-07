
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Profile from "./profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";




function App() {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Router>
                <Switch>
                    
                    <Route path="/">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;