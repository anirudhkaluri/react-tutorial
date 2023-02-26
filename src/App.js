import Navbar from "./Navbar"
import Navbar2 from "./Navbar2";
import Home3 from "./Home3"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails"
import Create from "./Create";
import NotFound from "./NotFound";
//import './App.css';

function App() { //this must start with a capital letter.
  const title="This is experimental block";
  const likes=50;
  const link="http://www.google.co.in";
  return ( //this returns what looks like html code. But it isnt html. It is jsx.
  //syntax is identical to html. JSX allows us to easily create html 
  //In the background babel converts jsx components into html and renders it to the dom
  //in jsx className attribute is used. class is a reserved keyword in JS. 
  //className is used. When converted to html, className is converted to class. 
    <Router>
      {/*we surround our application with Router */}
         <div className="App">
          <Navbar2/> {/*the nav bar is shown on all routes. it is outside the switch */}
          <div className="content">
             <Switch>
              {/*we use switch to make sure that we can see only one route at any one time 
              Only one route component shows in the browser at any one time. 
              React will go from top to bottom inside the switch and try to match against a route.
              It will stop at the first match it finds. If switch doesnt surround the routes, it will render all the matches
              We can end up with more than one page showing up at a time. When we click  */}
                <Route exact path="/">
                  {/*path is the route. path after the root of our website. We nest the component inside the route
                  We add exact prop so that it will render the component only if the route matches the path attribute 
                  exactly*/}
                    <Home3/>
                </Route>
                <Route  path="/create">
                    <Create/>
                </Route>
                <Route  path="/blogs/:id">
                    <BlogDetails/>
                </Route>
                  <NotFound/>
                <Route path="*">
                  <NotFound/>
                </Route>
             </Switch>
             
          </div>
        </div>
    </Router>
   
  );
}

export default App;
//in the end we always export component
