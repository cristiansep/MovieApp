import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// pages
import { Home } from "./pages/Home";
import { NewMovie } from "./pages/NewMovie";
import { Popular } from "./pages/Popular";
import { Header } from "./components/Header";
import { Movie } from "./pages/Movie";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home}/>
         <Route exact path="/new-movie" component={NewMovie}/>
         <Route exact path="/popular" component={Popular}/>
         <Route exact path="/movie/:id" component={Movie}/>
         {/* <Route exact path="/search" component={Search}/>
         <Route exact path="*" component={Error404}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
