import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import About from "./pages/about/About" ;
import {
  BrowserRouter ,
  Route,
Switch
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user}=useContext(Context);
  return (
    <BrowserRouter>
     <Topbar/>
     <Switch>
      <Route exact path="/">
        <Home />
        </Route>        
        <Route  path="/signup"> {user ?<Home />:<SignUp />}</Route>  
        <Route  path="/login"> {user ?<Home />:<Login />}</Route>  
        <Route  path="/write">{user ?<Write />:<SignUp />}</Route> 
        <Route  path="/about"> <About/></Route> 
        <Route  path="/settings">{user ?<Settings />:<SignUp />}</Route>  
        <Route  path="/post/:postId">
        <Single />
        </Route>  
      </Switch>
    </BrowserRouter>
  );
}

export default App;