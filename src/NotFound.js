import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry, not sorry</h2>
            <p>page cant be found</p>
            <Link to="/">Go to Home page</Link>
        </div>
     );
}
 
export default NotFound;